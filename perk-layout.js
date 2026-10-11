// Fit each axis separately so narrow game constellations remain readable.
// Positions belong to the view; source data and perk identity stay intact.
export const fitPerkPositions = (perks, width, height) => {
    const minX = Math.min(...perks.map(perk => perk.pos[0]));
    const maxX = Math.max(...perks.map(perk => perk.pos[0]));
    const minY = Math.min(...perks.map(perk => perk.pos[1]));
    const maxY = Math.max(...perks.map(perk => perk.pos[1]));
    return new Map(perks.map(perk => [perk, [
            maxX === minX ? 0 : (perk.pos[0] - minX) / (maxX - minX) * width - width / 2,
            maxY === minY ? 0 : (perk.pos[1] - maxY) / (maxY - minY) * height
        ]]));
};
//# sourceMappingURL=perk-layout.js.map