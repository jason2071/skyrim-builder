import {adamantPerkTrees, adamantPluginPrefixes} from "./adamant-data";
import {createAdamantScript, orderPerks, resolvePerkIds} from "./perk-scripts";
import {Perk, PerkTree} from "./data";

describe("Nordic Souls 3.2.2 Adamant data", () => {
  test("includes the installed skill trees and all ranks", () => {
    expect(adamantPerkTrees).toHaveLength(18);
    expect(adamantPerkTrees.reduce((count, tree) => count + tree.perks.length, 0)).toBe(217);
    expect(adamantPerkTrees.reduce((count, tree) => count + tree.perks.reduce((ranks, perk) => ranks + (perk.levels || 1), 0), 0)).toBe(320);
    expect(adamantPerkTrees.find(tree => tree.name === "Hand to Hand")!.cname).toBe("lockpicking");
    expect(adamantPerkTrees.find(tree => tree.name === "Security")!.cname).toBe("pickpocket");
    expect(adamantPerkTrees.some(tree => tree.name === "Lockpicking")).toBe(false);
  });

  test("has complete ranked descriptions, requirements, and resolvable FormIDs", () => {
    for (const tree of adamantPerkTrees) {
      const ordered = orderPerks(tree);
      for (const perk of tree.perks) {
        const ranks = perk.levels || 1;
        expect(perk.desc).toHaveLength(ranks);
        expect(perk.req).toHaveLength(ranks);
        expect(perk.forms).toHaveLength(ranks);
        expect(perk.id).toHaveLength(ranks);
        expect(resolvePerkIds(perk, adamantPluginPrefixes)).toEqual(perk.id);
        expect(perk.desc.every(description => description.length > 0)).toBe(true);
        expect(perk.req!.every(value => Number.isInteger(value) && value >= 0 && value <= 100)).toBe(true);
        for (const parent of perk.deps ?? []) {
          expect(ordered.indexOf(tree.perks[parent])).toBeLessThan(ordered.indexOf(perk));
        }
      }
    }
  });

  test("keeps changed mastery ranks distinct from Vanilla", () => {
    const mastery = adamantPerkTrees[0].perks[0];
    expect(mastery.name).toBe("Alchemy Mastery");
    expect(mastery.levels).toBe(2);
    expect(mastery.req).toEqual([10, 50]);
    expect(mastery.desc[1]).toBe("Potions and poisons you make are 50% stronger.");
  });
});

describe("Adamant console scripts", () => {
  const parent: Perk = {name: "Parent", desc: ["Rank 1", "Rank 2"], levels: 2, req: [10, 50], pos: [0, 0], id: [], forms: [{plugin: "Adamant.esp", formId: "D7D808"}, {plugin: "Adamant.esp", formId: "510A44"}]};
  const child: Perk = {name: "Child", desc: ["Effect"], req: [70], pos: [1, 1], deps: [1], id: [], forms: [{plugin: "HandtoHand.esp", formId: "000801", light: true}]};
  const tree: PerkTree = {name: "Security", cname: "pickpocket", perks: [child, parent]};
  const prefixes = {"Adamant.esp": "34", "HandtoHand.esp": "FE123"};

  test("resolves both regular and light-plugin indices without altering source data", () => {
    expect(resolvePerkIds(parent, prefixes)).toEqual(["34D7D808", "34510A44"]);
    expect(resolvePerkIds(child, prefixes)).toEqual(["FE123801"]);
    expect(parent.forms![0].formId).toBe("D7D808");
  });

  test.each(["", "ZZ", "FE", "FF", "FE:123", "123", "123456"])("rejects invalid prefix %s", prefix => {
    expect(() => resolvePerkIds(parent, {"Adamant.esp": prefix})).toThrow();
  });

  test("rejects light indices that would truncate a regular plugin FormID", () => {
    expect(() => resolvePerkIds(parent, {"Adamant.esp": "FE123"})).toThrow();
  });

  test("requires an ESL prefix for light plugins", () => {
    expect(() => resolvePerkIds(child, {"HandtoHand.esp": "35"})).toThrow();
  });

  test("adds parent ranks before children and uses the actual skill actor value", () => {
    const script = createAdamantScript([tree], "add", perk => perk === parent ? 2 : 1, prefixes);
    expect(script).toContain("player.setav pickpocket 70");
    expect(script.indexOf("player.addperk 34D7D808")).toBeLessThan(script.indexOf("player.addperk 34510A44"));
    expect(script.indexOf("player.addperk 34510A44")).toBeLessThan(script.indexOf("player.addperk FE123801"));
    expect(script).not.toContain("player.setlevel");
  });

  test("removes children and highest ranks first, even for an empty build", () => {
    const script = createAdamantScript([tree], "reset", () => 0, prefixes);
    expect(script.indexOf("player.removeperk FE123801")).toBeLessThan(script.indexOf("player.removeperk 34510A44"));
    expect(script.indexOf("player.removeperk 34510A44")).toBeLessThan(script.indexOf("player.removeperk 34D7D808"));
    expect(script).not.toContain("player.setav");
  });

  test("exports every visible rank exactly once and ignores unselected add ranks", () => {
    const reset = createAdamantScript(adamantPerkTrees, "reset", () => 0, adamantPluginPrefixes);
    const commands = reset.split("\r\n").filter(line => line.startsWith("player.removeperk"));
    expect(commands).toHaveLength(320);
    expect(new Set(commands.map(command => command.split(" ")[1])).size).toBe(320);
    const add = createAdamantScript([tree], "add", perk => perk === parent ? 1 : 0, prefixes);
    expect(add).toContain("player.addperk 34D7D808");
    expect(add).not.toContain("player.addperk 34510A44");
    expect(add).not.toContain("player.addperk FE123801");
  });
});

describe("Adamant build state", () => {
  beforeEach(() => {
    jest.resetModules();
    document.documentElement.dataset.builder = "adamant";
  });
  afterEach(() => { delete document.documentElement.dataset.builder; });

  test("round-trips all 320 ranks including perks beyond the old 255-bit limit", () => {
    const app = jest.requireActual<typeof import("./app")>("./app");
    const data = jest.requireActual<typeof import("./adamant-data")>("./adamant-data");
    for (const tree of data.adamantPerkTrees) {
      for (const perk of orderPerks(tree)) app.changePerkLevel(perk, perk.levels || 1);
    }
    const saved = app.activeData();
    app.resetActivePerkLevels();
    app.readActiveData(saved);
    for (const tree of data.adamantPerkTrees) {
      for (const perk of tree.perks) expect(app.getPerkLevel(perk)).toBe(perk.levels || 1);
    }
  });
});
