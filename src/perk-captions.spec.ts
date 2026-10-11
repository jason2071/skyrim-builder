import {adamantPerkTrees} from "./adamant-data";
import {hitPerkCaption, layoutPerkCaptions, rectanglesOverlap} from "./perk-captions";

describe("Adamant caption placement", () => {
  test("keeps every label separate from labels and perk points across all trees", () => {
    for (const tree of adamantPerkTrees) {
      const captions = layoutPerkCaptions(tree.perks, perk => (perk.name.length + (perk.levels ? 6 : 0)) * 2.2);
      expect(captions).toHaveLength(tree.perks.length);
      captions.forEach((caption, index) => {
        for (const other of captions.slice(index + 1)) expect(rectanglesOverlap(caption.rect, other.rect)).toBe(false);
        for (const perk of tree.perks) {
          const [x, y] = perk.pos;
          expect(rectanglesOverlap(caption.rect, {left: x - 3, right: x + 3, top: y - 3, bottom: y + 3})).toBe(false);
        }
        expect(hitPerkCaption(captions, caption.x, caption.baseline - 2)).toBe(caption.perk);
      });
    }
  });

  test("keeps displaced names clickable as their own perk within the available frame", () => {
    const tree = adamantPerkTrees.find(tree => tree.name === "Enchanting")!;
    const bounds = {left: -180, right: 180, top: -200, bottom: 200};
    const captions = layoutPerkCaptions(tree.perks, perk => perk.name.length * 2, bounds);
    for (const caption of captions) {
      expect(caption.rect.left).toBeGreaterThanOrEqual(bounds.left);
      expect(caption.rect.right).toBeLessThanOrEqual(bounds.right);
      expect(caption.rect.top).toBeGreaterThanOrEqual(bounds.top);
      expect(caption.rect.bottom).toBeLessThanOrEqual(bounds.bottom);
      expect(hitPerkCaption(captions, caption.x, caption.baseline)).toBe(caption.perk);
    }
    expect(hitPerkCaption(captions, bounds.right + 10, bounds.bottom + 10)).toBeUndefined();
  });
});
