import {Perk, PerkTree} from "./data.js";

export const resolvePerkIds = (perk: Perk, prefixes: Record<string, string>): string[] => {
  if (!perk.forms) return perk.id;
  return perk.forms.map(form => {
    const prefix = form.plugin === "Skyrim.esm" ? "00" : prefixes[form.plugin];
    if (!prefix || !/^(?:[0-9A-F]{2}|FE[0-9A-F]{3})$/i.test(prefix) ||
        (prefix.length === 2 && /^(FE|FF)$/i.test(prefix))) {
      throw new Error(`Enter a valid load-order prefix for ${form.plugin}.`);
    }
    if (prefix.length === 5 && !form.formId.startsWith("000")) {
      throw new Error(`${form.plugin} cannot use an ESL prefix for this FormID.`);
    }
    if (form.light && prefix.length !== 5) {
      throw new Error(`Enter an ESL prefix (FE plus three hex digits) for ${form.plugin}.`);
    }
    return prefix.toUpperCase() + (prefix.length === 5 ? form.formId.slice(3) : form.formId);
  });
};

// AVIF node order is not necessarily prerequisite order.
export const orderPerks = (tree: PerkTree): Perk[] => {
  const ordered: Perk[] = [];
  const visiting = new Set<Perk>();
  const visited = new Set<Perk>();
  const visit = (perk: Perk): void => {
    if (visited.has(perk)) return;
    if (visiting.has(perk)) throw new Error("Cyclic perk prerequisites.");
    visiting.add(perk);
    for (const index of perk.deps ?? []) {
      if (!tree.perks[index]) throw new Error("Unknown perk prerequisite.");
      visit(tree.perks[index]);
    }
    visiting.delete(perk);
    visited.add(perk);
    ordered.push(perk);
  };
  tree.perks.forEach(visit);
  return ordered;
};

export const createAdamantScript = (
  trees: PerkTree[], action: "add" | "reset", getLevel: (perk: Perk) => number,
  prefixes: Record<string, string>
): string => {
  const lines = ["; Adamant 6.0.4 / Nordic Souls 3.2.2", "; Visible skill-tree perks only. Does not change character level or refund perk points."];
  for (const tree of trees) {
    let perks = orderPerks(tree);
    if (action === "reset") perks = perks.reverse();
    const selected = perks.filter(perk => action === "reset" || getLevel(perk) > 0);
    if (!selected.length) continue;
    lines.push("", `; ${action === "reset" ? "Remove" : "Add"} perks from '${tree.name}'`);
    if (action === "add") {
      const requirement = Math.max(15, ...selected.map(perk => perk.req?.[getLevel(perk) - 1] ?? 0));
      lines.push(`player.setav ${tree.cname} ${requirement}`);
    }
    for (const perk of selected) {
      const ids = resolvePerkIds(perk, prefixes);
      const ranks = action === "reset" ? ids.map((_, i) => i).reverse() : ids.slice(0, getLevel(perk)).map((_, i) => i);
      for (const rank of ranks) {
        lines.push(`player.${action === "reset" ? "removeperk" : "addperk"} ${ids[rank]} ; ${perk.name} (${rank + 1}/${ids.length})`);
      }
    }
  }
  return lines.join("\r\n");
};
