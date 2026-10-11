import {adamantPerkTrees} from "./adamant-data";
import {adamantDescriptionsTh} from "./adamant-descriptions-th";
import {getPerkDescription} from "./translations";
import {Perk} from "./data";

const allPerks = adamantPerkTrees.reduce<Perk[]>((perks, tree) => perks.concat(tree.perks), []);
const findPerk = (name: string): Perk => allPerks.find(perk => perk.name === name)!;

describe("Adamant Thai descriptions", () => {
  test("translates all 320 ranks, preserves English, and distinguishes each rank", () => {
    let ranks = 0;
    for (const tree of adamantPerkTrees) {
      for (const perk of tree.perks) {
        const translated = perk.desc.map(description => {
          ranks++;
          expect(getPerkDescription(perk, description, "en", "adamant")).toBe(description);
          const thai = getPerkDescription(perk, description, "th", "adamant");
          expect(thai).toMatch(/[\u0E00-\u0E7F]/);
          expect(thai).not.toBe(description);
          // Every explicit quantity, percentage and duration must survive translation.
          const numbers = description.match(/\d+(?:\.\d+)?%?/g) ?? [];
          const thaiNumbers = thai.match(/\d+(?:\.\d+)?%?/g) ?? [];
          for (const value of new Set(numbers)) {
            expect(thaiNumbers.filter(number => number === value).length)
              .toBeGreaterThanOrEqual(numbers.filter(number => number === value).length);
          }
          return thai;
        });
        expect(new Set(translated).size).toBe(new Set(perk.desc).size);
      }
    }
    expect(ranks).toBe(320);
  });

  test("contains only exact current source-description keys", () => {
    const descriptions = new Set(allPerks.reduce<string[]>((descriptions, perk) => descriptions.concat(perk.desc), []));
    expect(new Set(Object.keys(adamantDescriptionsTh))).toEqual(descriptions);
  });

  test("keeps Adamant effects isolated from Vanilla perks with the same name", () => {
    const mageArmor = findPerk("Mage Armor");
    expect(getPerkDescription(mageArmor, mageArmor.desc[0], "th", "adamant"))
      .toBe("เวทเกราะมีประสิทธิภาพเป็น 2 เท่าเมื่อสวมเสื้อคลุม");
    const misdirection = findPerk("Misdirection");
    expect(getPerkDescription(misdirection, misdirection.desc[0], "th", "adamant"))
      .toBe("โอกาสล้วงกระเป๋าสำเร็จสามารถเพิ่มได้ถึง 100%");
    const unknown: Perk = {...mageArmor, desc: ["A future Adamant effect."]};
    expect(getPerkDescription(unknown, unknown.desc[0], "th", "adamant")).toBe(unknown.desc[0]);
  });

  test("preserves game terms and both current and next-rank mechanics", () => {
    const shadows = findPerk("Armor of Shadows");
    expect(getPerkDescription(shadows, shadows.desc[0], "th", "adamant"))
      .toBe("สิ่งมีชีวิตที่อัญเชิญได้รับ Armor Rating เพิ่ม 150 และ Magic Resistance เพิ่ม 25%");
    expect(getPerkDescription(shadows, shadows.desc[1], "th", "adamant"))
      .toBe("สิ่งมีชีวิตที่อัญเชิญได้รับ Armor Rating เพิ่ม 300 และ Magic Resistance เพิ่ม 50%");
    const servant = findPerk("Undead Servant");
    expect(getPerkDescription(servant, servant.desc[0], "th", "adamant")).toContain("5 เท่า");
    expect(getPerkDescription(servant, servant.desc[1], "th", "adamant")).toContain("จนกว่าจะถูกฆ่า");
    const barrier = findPerk("Barrier");
    expect(getPerkDescription(barrier, barrier.desc[1], "th", "adamant"))
      .toContain("พันธมิตรใกล้เคียงทั้งหมดเมื่อร่ายด้วยสองมือพร้อมกัน");
  });
});
