import {Perk, perkTrees} from "./data";
import {getPerkDescription} from "./translations";

const findPerk = (treeName: string, perkName: string): Perk =>
  perkTrees.find(tree => tree.name === treeName)!.perks.find(perk => perk.name === perkName)!;

describe("Perk description translations", () => {
  test.each([
    ["Alchemy", "Alchemist", "Potion และ Poison ที่สร้างแรงขึ้น 20%", "Potion และ Poison ที่สร้างแรงขึ้น 40%"],
    ["Conjuration", "Summoner", "ร่ายเวทอัญเชิญ Atronach หรือชุบชีวิต Undead ได้ไกลขึ้น 2 เท่า", "ร่ายเวทอัญเชิญ Atronach หรือชุบชีวิต Undead ได้ไกลขึ้น 3 เท่า"],
    ["Alteration", "Mage Armor", "เวทป้องกัน เช่น Stoneflesh มีประสิทธิภาพเป็น 2 เท่าเมื่อไม่สวมเกราะ", "เวทป้องกัน เช่น Stoneflesh มีประสิทธิภาพเป็น 2.5 เท่าเมื่อไม่สวมเกราะ"],
    ["Archery", "Critical Shot", "ธนูมีโอกาส 10% สร้าง Critical Damage เพิ่มเติม", "ธนูมีโอกาส 15% สร้าง Critical Damage เพิ่มเติม"]
  ])("distinguishes current and next rank for %s / %s", (tree, name, current, next) => {
    const perk = findPerk(tree, name);
    expect(getPerkDescription(perk, perk.desc[0], "th")).toBe(current);
    expect(getPerkDescription(perk, perk.desc[1], "th")).toBe(next);
  });

  test.each(["Heavy Armor", "Light Armor"])("keeps Matching Set specific to %s", tree => {
    const perk = findPerk(tree, "Matching Set");
    expect(getPerkDescription(perk, perk.desc[0], "th")).toBe(`Armor เพิ่มอีก 25% เมื่อใส่ ${tree} เป็นชุดเดียวกัน`);
  });

  test("preserves English and provides Thai for every description and rank", () => {
    for (const tree of perkTrees) {
      for (const perk of tree.perks) {
        const translations = perk.desc.map(description => {
          expect(getPerkDescription(perk, description, "en")).toBe(description);
          const translated = getPerkDescription(perk, description, "th");
          expect(translated).toMatch(/[\u0E00-\u0E7F]/);
          return translated;
        });
        // Distinct rank effects must not collapse into one shared summary.
        expect(new Set(translations).size).toBe(new Set(perk.desc).size);
      }
    }
  });

  test("uses the source description when no translation exists", () => {
    const perk: Perk = {name: "Unknown Perk", desc: ["Unknown effect."], pos: [0, 0], id: ["unknown"]};
    expect(getPerkDescription(perk, perk.desc[0], "th")).toBe(perk.desc[0]);
  });
});
