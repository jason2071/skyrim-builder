"""Extract the winning skill trees from a local MO2 profile (no game files copied).

Usage: python scripts/extract-adamant.py MO2_ROOT PROFILE
Record layouts: TES5Edit/Core/wbDefinitionsTES5.pas (PERK, AVIF, CTDA).
"""
import argparse
import hashlib
import json
import struct
import zlib
from pathlib import Path


def u32(data, offset=0):
    return struct.unpack_from('<I', data, offset)[0]


def fields(data):
    offset = 0
    extended = None
    while offset < len(data):
        tag = data[offset:offset + 4].decode('ascii')
        size = struct.unpack_from('<H', data, offset + 4)[0]
        offset += 6
        if tag == 'XXXX':
            extended = u32(data, offset)
            offset += size
            continue
        size = extended if extended is not None else size
        extended = None
        yield tag, data[offset:offset + size]
        offset += size


def records(path):
    with path.open('rb') as stream:
        def walk(end):
            while stream.tell() < end:
                start = stream.tell()
                header = stream.read(24)
                tag = header[:4]
                size = u32(header, 4)
                if tag == b'GRUP':
                    group_end = start + size
                    # Only top-level PERK and AVIF groups are needed.
                    if header[8:12] in (b'PERK', b'AVIF') or u32(header, 12) != 0:
                        yield from walk(group_end)
                    else:
                        stream.seek(group_end)
                elif tag in (b'TES4', b'PERK', b'AVIF'):
                    data = stream.read(size)
                    flags = u32(header, 8)
                    if flags & 0x40000:
                        data = zlib.decompress(data[4:])
                    yield tag.decode(), u32(header, 12), flags, list(fields(data))
                else:
                    stream.seek(size, 1)
        yield from walk(path.stat().st_size)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('root', type=Path)
    parser.add_argument('profile')
    args = parser.parse_args()
    profile = args.root / 'profiles' / args.profile
    game_root = args.root / 'Game Root' / 'Data'
    files = {p.name.lower(): p for p in game_root.iterdir() if p.is_file()}
    mods = (profile / 'modlist.txt').read_text(encoding='utf-8-sig').splitlines()
    for mod in reversed(mods):
        if mod.startswith('+'):
            folder = args.root / 'mods' / mod[1:]
            if folder.exists():
                for p in folder.iterdir():
                    if p.suffix.lower() in ('.esm', '.esp', '.esl'):
                        files[p.name.lower()] = p
    for p in (args.root / 'overwrite').glob('*'):
        if p.suffix.lower() in ('.esm', '.esp', '.esl'):
            files[p.name.lower()] = p
    enabled = {line[1:].lower() for line in (profile / 'plugins.txt').read_text(encoding='utf-8-sig').splitlines() if line.startswith('*')}
    official = {'skyrim.esm', 'update.esm', 'dawnguard.esm', 'hearthfires.esm', 'dragonborn.esm'}
    order = [line for line in (profile / 'loadorder.txt').read_text(encoding='utf-8-sig').splitlines() if line.lower() in enabled | official]
    perks, trees, prefixes, evidence = {}, {}, {}, []
    regular, light = 0, 0
    for name in order:
        path = files.get(name.lower())
        if path is None:
            raise ValueError(f'Missing enabled plugin: {name}')
        plugin_records = records(path)
        _, _, flags, header = next(plugin_records)
        masters = [d.rstrip(b'\0').decode('utf-8') for t, d in header if t == 'MAST']
        masters.append(name)
        is_light = bool(flags & 0x200)
        prefixes[name] = f'FE{light:03X}' if is_light else f'{regular:02X}'
        light += int(is_light)
        regular += int(not is_light)

        def ref(form, masters=masters):
            if form == 0:
                return None
            owner = masters[form >> 24]
            return (owner, form & 0xFFFFFF)

        changed = 0
        for tag, form, flags, values in plugin_records:
            if flags & 0x20:
                continue
            record = {'fields': values, 'ref': ref, 'source': name}
            (perks if tag == 'PERK' else trees)[ref(form)] = record
            changed += 1
        if changed:
            evidence.append({'plugin': name, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(), 'records': changed})

    def text(value):
        return value.rstrip(b'\0').decode('utf-8')

    def get(record, key, default=b''):
        return next((value for tag, value in record['fields'] if tag == key), default)

    result = []
    owners = set()
    for tree in trees.values():
        if not get(tree, 'AVSK'):
            continue
        editor = text(get(tree, 'EDID')).removeprefix('AV')
        if editor == 'Mysticism':
            editor = 'Illusion'
        if editor.lower() not in ['alchemy', 'alteration', 'block', 'conjuration', 'destruction', 'enchanting', 'heavyarmor', 'illusion', 'lightarmor', 'lockpicking', 'onehanded', 'pickpocket', 'restoration', 'smithing', 'sneak', 'speechcraft', 'twohanded', 'marksman']:
            continue
        nodes = []
        current = None
        for tag, value in tree['fields']:
            if tag == 'PNAM':
                current = {'form': tree['ref'](u32(value)), 'edges': []}
                nodes.append(current)
            elif current is not None:
                if tag == 'CNAM':
                    current['edges'].append(u32(value))
                elif tag in ('XNAM', 'YNAM', 'INAM'):
                    current[tag] = struct.unpack('<i', value)[0]
                elif tag in ('HNAM', 'VNAM'):
                    current[tag] = struct.unpack('<f', value)[0]
        visible = [node for node in nodes if node['form'] is not None]
        index = {node['INAM']: i for i, node in enumerate(visible)}
        skill_perks = []
        skill_conditions = []
        for node in visible:
            ranks, req, desc, conditions = [], [], [], []
            form = node['form']
            seen = set()
            while form:
                if form in seen:
                    raise ValueError('Cyclic perk ranks')
                seen.add(form)
                record = perks[form]
                owners.add(form[0])
                rank_form = {'plugin': form[0], 'formId': f'{form[1]:06X}'}
                if len(prefixes[form[0]]) == 5:
                    rank_form['light'] = True
                ranks.append(rank_form)
                desc.append(text(get(record, 'DESC')))
                minimum = 0
                rank_conditions = []
                for tag, value in record['fields']:
                    if tag == 'PRKE':
                        break
                    if tag == 'CTDA':
                        function = struct.unpack_from('<H', value, 8)[0]
                        comparison = struct.unpack_from('<f', value, 4)[0]
                        if function in (14, 277):
                            minimum = max(minimum, int(comparison))
                        elif function == 448 and comparison == 1:
                            rank_conditions.append(record['ref'](u32(value, 12)))
                req.append(minimum)
                conditions.append(rank_conditions)
                next_form = get(record, 'NNAM')
                form = record['ref'](u32(next_form)) if next_form else None
            parent_indices = [i for i, parent in enumerate(visible) if node['INAM'] in parent['edges']]
            perk = {'name': text(get(perks[node['form']], 'FULL')), 'desc': desc, 'req': req,
                    'pos': [round((node.get('XNAM', 0) + node.get('HNAM', 0)) * 25, 2), round(-(node.get('YNAM', 0) + node.get('VNAM', 0)) * 25, 2)],
                    'id': [f"{prefixes[r['plugin']]}{r['formId'][3:] if len(prefixes[r['plugin']]) == 5 else r['formId']}" for r in ranks], 'forms': ranks}
            if len(ranks) > 1:
                perk['levels'] = len(ranks)
            if parent_indices:
                perk['deps'] = parent_indices
            for required in conditions:
                external = [r for r in required if r not in seen]
                if external and not parent_indices:
                    raise ValueError(f"Missing prerequisite edges: {perk['name']}")
            skill_perks.append(perk)
            skill_conditions.append(conditions)
        rank_lookup = {(form['plugin'], int(form['formId'], 16)): (i, rank + 1)
                       for i, perk in enumerate(skill_perks) for rank, form in enumerate(perk['forms'])}
        for i, conditions in enumerate(skill_conditions):
            for required in conditions:
                for form in required:
                    if form in rank_lookup and rank_lookup[form][0] != i and rank_lookup[form][1] > 1:
                        raise ValueError(f"Unsupported higher prerequisite rank: {skill_perks[i]['name']}")
        result.append({'name': text(get(tree, 'FULL')), 'cname': editor.lower(), 'perks': skill_perks})
    result.sort(key=lambda tree: tree['name'])
    output = Path('src/adamant-data.ts')
    output.write_text('/* Generated by scripts/extract-adamant.py from Nordic Souls 3.2.2. */\nimport {PerkTree} from "./data.js";\n\nexport const adamantPluginPrefixes: Record<string, string> = ' + json.dumps({owner: prefixes[owner] for owner in sorted(owners) if owner != 'Skyrim.esm'}, indent=2) + ';\n\nexport const adamantPerkTrees: PerkTree[] = ' + json.dumps(result, indent=2, ensure_ascii=False) + ';\n', encoding='utf-8')
    Path('docs/adamant-source.json').write_text(json.dumps({'preset': 'Nordic Souls 3.2.2', 'adamantVersion': '6.0.4', 'profile': args.profile, 'sources': evidence, 'plugins': {owner: prefixes[owner] for owner in sorted(owners)}, 'trees': len(result), 'perks': sum(len(t['perks']) for t in result)}, indent=2), encoding='utf-8')
    print(json.dumps({'trees': len(result), 'perks': sum(len(t['perks']) for t in result), 'plugins': {owner: prefixes[owner] for owner in sorted(owners)}}))


if __name__ == '__main__':
    main()
