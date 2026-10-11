export const rectanglesOverlap = (a, b, gap = 1) => a.left < b.right + gap && a.right + gap > b.left && a.top < b.bottom + gap && a.bottom + gap > b.top;
export const layoutPerkCaptions = (perks, measure, bounds, position = perk => perk.pos, fontSize = 4) => {
    const captions = [];
    const nodes = perks.map(perk => {
        const [x, y] = position(perk);
        return { left: x - 3, right: x + 3, top: y - 3, bottom: y + 3 };
    });
    const offsets = [];
    for (let dy = -64; dy <= 64; dy += 8) {
        for (let dx = -128; dx <= 128; dx += 8)
            offsets.push([dx, dy]);
    }
    // Prefer the closest clear position to the point, using actual font metrics.
    offsets.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]);
    for (const perk of perks) {
        const width = measure(perk);
        const [nodeX, nodeY] = position(perk);
        let best;
        for (const [dx, dy] of offsets) {
            const x = nodeX + dx;
            const baseline = nodeY + fontSize + 4 + dy;
            const rect = { left: x - width / 2 - 1, right: x + width / 2 + 1, top: baseline - fontSize, bottom: baseline + 1 };
            if (bounds && (rect.left < bounds.left || rect.right > bounds.right || rect.top < bounds.top || rect.bottom > bounds.bottom))
                continue;
            if (nodes.some(node => rectanglesOverlap(rect, node)) || captions.some(caption => rectanglesOverlap(rect, caption.rect)))
                continue;
            const endpoint = [Math.max(rect.left, Math.min(nodeX, rect.right)), Math.max(rect.top, Math.min(nodeY, rect.bottom))];
            // A connector must not pass through a different perk point.
            const vx = endpoint[0] - nodeX;
            const vy = endpoint[1] - nodeY;
            if (perks.some(other => {
                if (other === perk)
                    return false;
                const [otherX, otherY] = position(other);
                const t = Math.max(0, Math.min(1, ((otherX - nodeX) * vx + (otherY - nodeY) * vy) / (vx * vx + vy * vy)));
                return Math.hypot(otherX - nodeX - t * vx, otherY - nodeY - t * vy) < 3;
            }))
                continue;
            best = { perk, x, baseline, rect, endpoint };
            break;
        }
        if (!best)
            throw new Error(`No clear caption position for ${perk.name}.`);
        captions.push(best);
    }
    return captions;
};
export const hitPerkCaption = (captions, x, y) => { var _a; return (_a = captions.find(({ rect }) => x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom)) === null || _a === void 0 ? void 0 : _a.perk; };
//# sourceMappingURL=perk-captions.js.map