import {adamantPerkTrees} from "./adamant-data";
import {fitPerkPositions} from "./perk-layout";
import {hitPerkCaption, layoutPerkCaptions, rectanglesOverlap} from "./perk-captions";
import {Perk} from "./data";

describe("Adamant expanded tree layout", () => {
  test.each(["Illusion", "Sneak"])("expands %s in both axes without changing source coordinates", name => {
    const tree = adamantPerkTrees.find(tree => tree.name === name)!;
    const original = tree.perks.map(perk => [...perk.pos]);
    const positions = fitPerkPositions(tree.perks, 435 / 2.8, 527 / 2.8);
    const xs = tree.perks.map(perk => positions.get(perk)![0]);
    const ys = tree.perks.map(perk => positions.get(perk)![1]);
    expect((Math.max(...xs) - Math.min(...xs)) * 2.8).toBeCloseTo(435);
    expect((Math.max(...ys) - Math.min(...ys)) * 2.8).toBeCloseTo(527);
    expect(tree.perks.map(perk => perk.pos)).toEqual(original);
    for (const a of tree.perks) for (const b of tree.perks) {
      expect(Math.sign(positions.get(a)![0] - positions.get(b)![0])).toBe(Math.sign(a.pos[0] - b.pos[0]));
      expect(Math.sign(positions.get(a)![1] - positions.get(b)![1])).toBe(Math.sign(a.pos[1] - b.pos[1]));
    }
  });

  test("keeps larger captions inside the view and linked to the original perks in every tree", () => {
    const bounds = {left: -337.5 / 2.8 + 4, right: 337.5 / 2.8 - 4, top: (80 - 643.86) / 2.8, bottom: (787 - 80 - 643.86) / 2.8};
    for (const tree of adamantPerkTrees) {
      const positions = fitPerkPositions(tree.perks, 435 / 2.8, 527 / 2.8);
      const captions = layoutPerkCaptions(tree.perks, perk => (perk.name.length + (perk.levels ? 6 : 0)) * 2.9,
        bounds, perk => positions.get(perk)!, 5.5);
      captions.forEach((caption, index) => {
        expect(hitPerkCaption(captions, caption.x, caption.baseline - 2)).toBe(caption.perk);
        expect(caption.rect.left).toBeGreaterThanOrEqual(bounds.left);
        expect(caption.rect.right).toBeLessThanOrEqual(bounds.right);
        expect(caption.rect.top).toBeGreaterThanOrEqual(bounds.top);
        expect(caption.rect.bottom).toBeLessThanOrEqual(bounds.bottom);
        for (const other of captions.slice(index + 1)) expect(rectanglesOverlap(caption.rect, other.rect)).toBe(false);
        for (const perk of tree.perks) {
          const [x, y] = positions.get(perk)!;
          expect(rectanglesOverlap(caption.rect, {left: x - 3, right: x + 3, top: y - 3, bottom: y + 3})).toBe(false);
        }
      });
    }
  });

  test("handles a single point without producing invalid coordinates", () => {
    const perk: Perk = {name: "Only", pos: [4, 8], desc: [""], id: []};
    expect(fitPerkPositions([perk], 150, 180).get(perk)).toEqual([0, 0]);
  });
});
