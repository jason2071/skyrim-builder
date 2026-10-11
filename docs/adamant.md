# Adamant / Nordic Souls 3.2.2

`static/adamant.html` uses the winning PERK and AVIF records in the locally installed **Nordic Souls 3.2.2** Community Shaders profile. The installed Adamant version is **6.0.4**, Hand to Hand is **2.0.1**, and Ascension is **1.0.1**. The preset has 18 trees, 217 visible perks, and 320 individual ranks. It includes enabled perk patches, not just standalone Adamant.

Data and provenance:

- `src/adamant-data.ts`: English descriptions, skill requirements, game node positions, prerequisite connections, rank chains, and plugin-local FormIDs.
- `docs/adamant-source.json`: contributing plugin hashes, profile name, and sample runtime prefixes. Game plugins, assets, and saves are not included in the repository.
- Original mods: [Adamant](https://www.nexusmods.com/skyrimspecialedition/mods/30191), [Hand to Hand](https://www.nexusmods.com/skyrimspecialedition/mods/59790), [Ascension](https://www.nexusmods.com/skyrimspecialedition/mods/89223); modlist: [Nordic Souls](https://github.com/Geborgen/nordic-souls).

Regenerate only from this version and a complete, enabled MO2 profile:

```powershell
python scripts/extract-adamant.py E:\Nordic-Souls 'Nordic Souls - Community Shaders'
npm test
npm run build
```

The extractor reads only TES4, PERK, and AVIF records, resolves each plugin's master table before merging overrides, follows NNAM rank chains, and uses AVIF node connections for prerequisites. Skill thresholds come from top-level GetActorValue/GetBaseActorValue conditions, before perk-effect conditions. Record layouts follow [xEdit's Skyrim definitions](https://github.com/TES5Edit/TES5Edit/blob/dev-4.1.5/Core/wbDefinitionsTES5.pas). The canvas measures actual text widths to place captions without overlapping other captions or points, using view positions fitted separately in width and height so narrow trees such as Illusion and Sneak fill the available space. The original game coordinates remain in the source data. Active-tree captions use a larger font. Thin gold lines connect each caption to its point; hovering or clicking a caption targets that same perk. If a future dataset requires a higher-rank parent, extraction stops rather than assuming rank one is sufficient.

The extractor is specific to this preset and the `Game Root` layout. New modlist versions require reviewing the data, provenance, counts, tests, page labels, and `a/ns322/` URL namespace together. Do not silently replace this dataset with another version; saved links depend on tree/perk ordering.

Adamant builds live on `adamant.html#a/ns322/t/<tree>/<data>`, separately from Vanilla links. The bit array grows to fit all 320 ranks; Vanilla retains its existing encoding. Plugin prefixes supplied in the page are stored as URL query parameters, so build links preserve export settings too.

Exports resolve plugin-local IDs with the entered MO2 Mod Index. The defaults belong to the extraction profile and must be checked for each load order. Reset removes all visible preset ranks in reverse prerequisite order, leaving hidden passive perks untouched. Addperks adds selected ranks in prerequisite order and sets selected skill actor values to build requirements; this can lower existing skills. Neither export changes character level or refunds perk points. There is no claim of compatibility with standalone Adamant or other modlist versions. In-game execution must be checked using a backup save.

English is the default description language; all 320 ranks also have Thai descriptions in `src/adamant-descriptions-th.ts`. Translations are keyed by exact English source text and isolated from Vanilla's name-based translations. Keep game terms and numeric values intact when editing. Translation tests enforce complete coverage, distinct ranks, and preservation of numeric values; changes to source descriptions require updating their translation keys. Perk names remain in English to match the game. The language picker remembers the user's preference, and a wrapping description panel below the canvas displays the last inspected perk and its next rank in full.
