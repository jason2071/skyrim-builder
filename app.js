import { BitArray } from "./bitarray.js";
import { perkTrees as vanillaPerkTrees } from "./data.js";
import { adamantPerkTrees, adamantPluginPrefixes } from "./adamant-data.js";
import { createAdamantScript } from "./perk-scripts.js";
import { getPerkDescription } from "./translations.js";
import { hitPerkCaption, layoutPerkCaptions } from "./perk-captions.js";
import { fitPerkPositions } from "./perk-layout.js";
let canvas = null;
let perkCircleRadius = 3;
let hoveredPerk = undefined;
let descriptionPerk = undefined;
let activePerkTreeView = undefined;
let workspace;
let descriptionLanguage = "en";
const isAdamant = document.documentElement.dataset.builder === "adamant";
const perkTrees = isAdamant ? adamantPerkTrees : vanillaPerkTrees;
const buildBitCount = Math.max(255, perkTrees.reduce((total, tree) => total + tree.perks.reduce((ranks, perk) => ranks + (perk.levels || 1), 0), 0));
const pluginPrefixes = Object.assign({}, adamantPluginPrefixes);
const TREE_COLS = 3;
const TREE_PADDING = 5;
const TREE_WIDTH = 100;
const TREE_HEIGHT = 127;
export let activePerkLevels = {};
const displayDescription = (perk, description) => getPerkDescription(perk, description, descriptionLanguage, isAdamant ? "adamant" : "vanilla");
// Keep the last inspected perk readable while moving to the language picker.
const updatePerkDescription = () => {
    var _a, _b, _c, _d;
    const details = document.getElementById("perk-details");
    if (!details || !activePerkTreeView)
        return;
    if (hoveredPerk && activePerkTreeView.model.perks.includes(hoveredPerk))
        descriptionPerk = hoveredPerk;
    if (descriptionPerk && !activePerkTreeView.model.perks.includes(descriptionPerk))
        descriptionPerk = undefined;
    details.replaceChildren();
    details.lang = descriptionLanguage;
    if (!descriptionPerk) {
        details.textContent = descriptionLanguage === "th" ? "ชี้หรือคลิก Perk เพื่ออ่านคำอธิบาย" : "Hover or select a perk to read its description.";
        return;
    }
    const perk = descriptionPerk;
    const rank = Math.max(0, getPerkLevel(perk) - 1);
    const heading = document.createElement("h2");
    heading.textContent = getPerkDisplayName(perk);
    const requirement = document.createElement("p");
    requirement.className = "perk-requirement";
    requirement.textContent = `${descriptionLanguage === "th" ? "ระดับสกิลที่ต้องการ" : "Required skill level"}: ${(_b = (_a = perk.req) === null || _a === void 0 ? void 0 : _a[rank]) !== null && _b !== void 0 ? _b : 0}`;
    const current = document.createElement("p");
    current.textContent = displayDescription(perk, perk.desc[rank]);
    details.append(heading, requirement, current);
    if (getPerkLevel(perk) > 0 && getPerkLevel(perk) < (perk.levels || 1)) {
        const next = document.createElement("p");
        next.textContent = `${descriptionLanguage === "th" ? "Rank ถัดไป" : "Next rank"} (${(_d = (_c = perk.req) === null || _c === void 0 ? void 0 : _c[rank + 1]) !== null && _d !== void 0 ? _d : 0}): ${displayDescription(perk, perk.desc[rank + 1])}`;
        details.appendChild(next);
    }
};
// used in unit tests
export const resetActivePerkLevels = () => {
    activePerkLevels = {};
};
const perkTreeViews = [];
const perkTreeId = (perkTree) => {
    let i = 0;
    for (const pt of perkTrees) {
        if (pt === perkTree) {
            return i;
        }
        i++;
    }
    return 0;
};
const perkId = (perk) => {
    let i = 0;
    for (const perkTree of perkTrees) {
        let j = 0;
        for (const p of perkTree.perks) {
            if (p === perk) {
                return `perk${(i * 100) + j}`;
            }
            j++;
        }
        i++;
    }
    return "";
};
const forEachParentOfPerk = (thePerk, func) => {
    if (!thePerk || !thePerk.deps) {
        return;
    }
    for (const perkTree of perkTrees) {
        for (const perk of perkTree.perks) {
            if (perk === thePerk && perk.deps) {
                for (const dep of perk.deps) {
                    func(perkTree.perks[dep]);
                }
                return;
            }
        }
    }
};
const isPerkChildOfParentWithIndex = (perk, parentIndex) => {
    if (perk && perk.deps) {
        for (const dep of perk.deps) {
            if (dep === parentIndex) {
                return true;
            }
        }
    }
    return false;
};
const forEachChildOfPerk = (thePerk, func) => {
    for (const perkTree of perkTrees) {
        let i = 0;
        for (const perk of perkTree.perks) {
            if (perk === thePerk) {
                for (const perk of perkTree.perks) {
                    if (isPerkChildOfParentWithIndex(perk, i)) {
                        forEachChildOfPerk(perk, func);
                        func(perk);
                    }
                }
                return;
            }
            i++;
        }
    }
};
export const getPerkLevel = (perk) => {
    var _a;
    const id = perkId(perk);
    return (_a = activePerkLevels[id]) !== null && _a !== void 0 ? _a : 0;
};
const countActivePerks = () => {
    let result = 0;
    for (const value of Object.values(activePerkLevels)) {
        result += value;
    }
    return result;
};
export const activeData = () => {
    const bitArray = new BitArray(buildBitCount);
    let i = 0;
    for (const perkTree of perkTrees) {
        for (const perk of perkTree.perks) {
            const maxLevels = perk.levels || 1;
            const activeLevel = getPerkLevel(perk);
            let j = 0;
            while (j < maxLevels) {
                bitArray.set(i++, activeLevel - 1 == j++);
            }
        }
    }
    return bitArray.toString();
};
export const readActiveData = (str) => {
    activePerkLevels = {};
    const bitArray = new BitArray(buildBitCount);
    bitArray.parse(str);
    let i = 0;
    for (const perkTree of perkTrees) {
        for (const perk of perkTree.perks) {
            const maxLevels = perk.levels || 1;
            let j = 0;
            while (j < maxLevels) {
                if (bitArray.get(i++)) {
                    activePerkLevels[perkId(perk)] = j + 1;
                }
                j++;
            }
        }
    }
};
const getPerkDisplayName = (perk, level = 0) => {
    const maxLevels = perk.levels || 1;
    if (maxLevels === 1) {
        return perk.name;
    }
    const activeLevel = level > 0 ? level : getPerkLevel(perk);
    return `${perk.name} (${activeLevel}/${maxLevels})`;
};
const getPerkInfos = (perkTree) => {
    const result = {
        active: 0,
        max: 0,
        req: 0
    };
    for (const perk of perkTree.perks) {
        const maxLevels = perk.levels || 1;
        const req = perk.req || [0];
        const level = getPerkLevel(perk);
        result.active += level;
        result.max += maxLevels;
        if (level > 0) {
            result.req = Math.max(result.req, req[level - 1]);
        }
    }
    return result;
};
export const changePerkLevel = (perk, inc) => {
    let ok = true;
    const maxLevels = perk.levels || 1;
    const activeLevel = getPerkLevel(perk);
    const newLevel = Math.max(0, Math.min(activeLevel + inc, maxLevels));
    if (inc > 0) {
        let parentOk = false;
        forEachParentOfPerk(perk, (parent) => {
            if (getPerkLevel(parent) > 0) {
                parentOk = true;
            }
        });
        if (!parentOk) {
            forEachParentOfPerk(perk, (parent) => {
                if (!parentOk) {
                    changePerkLevel(parent, inc);
                    parentOk = true;
                }
            });
        }
    }
    else if (newLevel == 0) {
        forEachChildOfPerk(perk, (child) => {
            let hasOtherActiveParents = false;
            forEachParentOfPerk(child, (parent) => {
                if (parent !== perk && getPerkLevel(parent) > 0) {
                    hasOtherActiveParents = true;
                }
            });
            if (!hasOtherActiveParents) {
                changePerkLevel(child, inc * 100);
            }
        });
    }
    activePerkLevels[perkId(perk)] = newLevel;
};
const clone = (x) => {
    if (Array.isArray(x)) {
        return x.slice();
    }
    else if (typeof x === "object") {
        return Object.assign({}, x);
    }
    return x;
};
class PerkTreeView {
    constructor(model, frame, scale) {
        this.captions = [];
        this.positions = new Map();
        this.model = model;
        this.frame = frame;
        this.scale = scale;
    }
    position(perk) {
        if (!isAdamant || this !== activePerkTreeView)
            return perk.pos;
        if (this.layoutModel !== this.model) {
            this.positions = fitPerkPositions(this.model.perks, (this.frame[2] - 240) / this.scale, (this.frame[3] - 260) / this.scale);
            this.layoutModel = this.model;
        }
        return this.positions.get(perk);
    }
    perkTreeFrame() {
        let minx = 0;
        let maxx = 0;
        let miny = 0;
        let maxy = 0;
        for (const perk of this.model.perks) {
            const pos = this.position(perk);
            if (pos[0] < minx) {
                minx = pos[0];
            }
            if (pos[0] > maxx) {
                maxx = pos[0];
            }
            if (pos[1] < miny) {
                miny = pos[1];
            }
            if (pos[1] > maxy) {
                maxy = pos[1];
            }
        }
        return [
            Math.abs(minx) * this.scale,
            Math.abs(miny) * this.scale,
            Math.abs(minx - maxx) * this.scale,
            Math.abs(miny - maxy) * this.scale
        ];
    }
    hitFrame(x, y) {
        const frame = this.frame;
        return (x >= frame[0]) &&
            (x <= frame[0] + frame[2]) &&
            (y >= frame[1]) &&
            (y <= frame[1] + frame[3]);
    }
    perkAtPosition(x, y) {
        if (!this.model) {
            return;
        }
        const perkSize = perkCircleRadius * this.scale;
        const root = this.root();
        for (const perk of this.model.perks) {
            const pos = this.position(perk);
            const perkX = pos[0] * this.scale + root[0];
            const perkY = pos[1] * this.scale + root[1];
            if (x >= (perkX - perkSize) &&
                x <= (perkX + perkSize) &&
                y >= (perkY - perkSize) &&
                y <= (perkY + perkSize)) {
                return perk;
            }
        }
        if (isAdamant && this === activePerkTreeView) {
            return hitPerkCaption(this.captions, (x - root[0]) / this.scale, (y - root[1]) / this.scale);
        }
    }
    root() {
        const perkTreeFrame = this.perkTreeFrame();
        const x = this.frame[0] + this.frame[2] / 2 - perkTreeFrame[2] / 2 + perkTreeFrame[0];
        const y = this.frame[1] + ((this.frame[3] / 2 + perkTreeFrame[3] / 2) * 0.98);
        return [x, y];
    }
    draw(ctx, captions, title) {
        ctx.save();
        const isActivePerkTree = activePerkTreeView && activePerkTreeView.model === this.model;
        ctx.fillStyle = isActivePerkTree ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)';
        ctx.fillRect(this.frame[0], this.frame[1], this.frame[2], this.frame[3]);
        if (!this.model) {
            ctx.restore();
            return;
        }
        const root = this.root();
        ctx.translate(root[0], root[1]);
        ctx.scale(this.scale, this.scale);
        if (isAdamant && captions) {
            ctx.font = "5.5px Arial";
            this.captions = layoutPerkCaptions(this.model.perks, perk => ctx.measureText(getPerkDisplayName(perk)).width, {
                left: (this.frame[0] - root[0]) / this.scale + 4,
                right: (this.frame[0] + this.frame[2] - root[0]) / this.scale - 4,
                top: (this.frame[1] + 80 - root[1]) / this.scale,
                bottom: (this.frame[1] + this.frame[3] - 80 - root[1]) / this.scale
            }, perk => this.position(perk), 5.5);
        }
        // Draw dependency lines...
        for (const perk of this.model.perks) {
            if (perk.deps) {
                const level = getPerkLevel(perk);
                for (const dep of perk.deps) {
                    const depPerk = this.model.perks[dep];
                    const connected = (level > 0) && (getPerkLevel(depPerk) > 0);
                    ctx.beginPath();
                    ctx.lineWidth = connected ? 1.5 : 0.5;
                    ctx.strokeStyle = connected ? 'rgba(100, 150, 230, 1.0)' : 'rgba(100, 150, 230, 0.5)';
                    ctx.moveTo(...this.position(depPerk));
                    ctx.lineTo(...this.position(perk));
                    ctx.stroke();
                }
            }
        }
        // Draw perks ...
        for (const perk of this.model.perks) {
            const level = getPerkLevel(perk);
            ctx.beginPath();
            if (perk === hoveredPerk) {
                ctx.fillStyle = isAdamant ? '#f4d899' : 'rgb(255, 0, 0)';
            }
            else {
                ctx.fillStyle = level > 0 ? 'rgba(230, 230, 150, 1.0)' : 'rgba(230, 100, 150, 0.5)';
            }
            const radius = perkCircleRadius * (level > 0 ? 1 : 0.5);
            const pos = this.position(perk);
            ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2, true);
            ctx.fill();
            if (captions && !isAdamant) {
                ctx.save();
                const perkName = getPerkDisplayName(perk);
                ctx.font = "4px Arial";
                const w = ctx.measureText(perkName).width;
                const captionOffset = perk.captionOffset || [0, 0];
                ctx.translate(perk.pos[0] + captionOffset[0], perk.pos[1] + 8 + captionOffset[1]);
                ctx.translate(-w / 2, 0);
                ctx.fillStyle = level > 0 ? 'rgba(255, 255, 255, 1.0)' : 'rgba(200, 200, 200, 0.5)';
                ctx.shadowColor = 'rgb(0,0,0)';
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;
                ctx.shadowBlur = 2;
                ctx.fillText(perkName, 0, 0);
                ctx.restore();
            }
        }
        if (isAdamant && captions) {
            for (const caption of this.captions) {
                const perk = caption.perk;
                const highlighted = perk === hoveredPerk;
                ctx.beginPath();
                ctx.strokeStyle = highlighted ? '#f4d899' : 'rgba(215,185,121,.55)';
                ctx.lineWidth = highlighted ? 0.7 : 0.35;
                ctx.moveTo(...this.position(perk));
                ctx.lineTo(caption.endpoint[0], caption.endpoint[1]);
                ctx.stroke();
                ctx.fillStyle = 'rgba(0,0,0,.9)';
                ctx.fillRect(caption.rect.left, caption.rect.top, caption.rect.right - caption.rect.left, caption.rect.bottom - caption.rect.top);
                ctx.font = "5.5px Arial";
                ctx.textAlign = "center";
                ctx.fillStyle = highlighted ? '#f4d899' : getPerkLevel(perk) > 0 ? '#ffffff' : 'rgba(220,220,220,.8)';
                ctx.fillText(getPerkDisplayName(perk), caption.x, caption.baseline);
            }
            ctx.textAlign = "start";
        }
        ctx.restore();
        if (title) {
            const perkInfos = getPerkInfos(this.model);
            ctx.save();
            if (perkInfos.active > 0) {
                ctx.shadowColor = 'rgb(10,10,10)';
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;
                ctx.shadowBlur = 2;
                ctx.fillStyle = 'rgba(100,100,100,0.8)';
                ctx.font = 'bold 30px Arial';
                ctx.fillText(`${perkInfos.active}`, this.frame[0] + 8, this.frame[1] + 30);
            }
            if (perkInfos.active > 0) {
                ctx.fillStyle = 'rgb(100,150,230)';
            }
            else {
                ctx.fillStyle = 'rgb(200,200,200)';
            }
            ctx.shadowColor = 'rgb(10,10,10)';
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            ctx.font = '12px Arial';
            const w = ctx.measureText(this.model.name).width;
            ctx.fillText(this.model.name, this.frame[0] + this.frame[2] / 2 - w / 2, this.frame[1] + this.frame[3] - 5);
            ctx.restore();
        }
        if (hoveredPerk && !title) {
            ctx.save();
            const maxLevels = hoveredPerk.levels || 1;
            const activeLevel = getPerkLevel(hoveredPerk);
            // Perk Name
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            const displayName = getPerkDisplayName(hoveredPerk);
            const w = ctx.measureText(displayName).width;
            ctx.fillText(displayName, 335, 743);
            // Requires
            if (hoveredPerk.req) {
                ctx.font = '12px Arial';
                ctx.fillStyle = 'rgba(200,200,200,0.7)';
                ctx.fillText(`Requires: ${hoveredPerk.req[Math.max(0, activeLevel - 1)]}`, 345 + w, 743);
            }
            // Perk Description
            ctx.font = '12px Arial';
            ctx.fillText(displayDescription(hoveredPerk, hoveredPerk.desc[Math.max(0, activeLevel - 1)]), 335, 760);
            // Next Level Description
            if (activeLevel > 0 && activeLevel < maxLevels) {
                const t = `Next Rank: ${displayDescription(hoveredPerk, hoveredPerk.desc[Math.max(0, activeLevel)])}`;
                const w = ctx.measureText(t).width;
                ctx.fillText(t, 335, 777);
                if (hoveredPerk.req) {
                    const t = `Requires: ${hoveredPerk.req[Math.max(0, activeLevel)]}`;
                    ctx.fillText(t, 340 + w, 777);
                }
            }
            ctx.restore();
        }
    }
}
const redraw = () => {
    if (!canvas) {
        return;
    }
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = 'rgb(20,20,20)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let i = 0;
    for (const perkTreeView of perkTreeViews) {
        // colored borders...
        if (0 < i && i < 7) {
            ctx.fillStyle = 'rgba(20,83,112,0.5)';
        }
        else if (6 < i && i < 13) {
            ctx.fillStyle = 'rgba(102,63,32,0.5)';
        }
        else {
            ctx.fillStyle = 'rgba(35,81,45,0.5)';
        }
        ctx.fillRect(perkTreeView.frame[0] - 1, perkTreeView.frame[1] - 1, perkTreeView.frame[2] + 2, perkTreeView.frame[3] + 2);
        perkTreeView.draw(ctx, false, true);
        i++;
    }
    if (activePerkTreeView) {
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(activePerkTreeView.frame[0] - 1, activePerkTreeView.frame[1] - 1, activePerkTreeView.frame[2] + 2, activePerkTreeView.frame[3] + 2);
        activePerkTreeView.draw(ctx, true, false);
        if (activePerkTreeView.model) {
            const perkInfos = getPerkInfos(activePerkTreeView.model);
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.font = 'bold 20px Arial';
            ctx.fillText(activePerkTreeView.model.name, 335, 40);
            ctx.font = 'bold 10px Arial';
            ctx.fillText(`Active perks: ${perkInfos.active} of ${perkInfos.max}`, 335, 60);
            ctx.fillText(`Required skill level: ${perkInfos.req}`, 335, 75);
        }
    }
    ctx.restore();
    const activePerks = countActivePerks();
    const activePerksDiv = document.getElementById("active-perks");
    if (activePerksDiv) {
        activePerksDiv.innerText = `${activePerks}`;
    }
    const clearPerksButton = document.getElementById("clear-perks");
    if (clearPerksButton) {
        clearPerksButton.style.display = activePerks === 0 ? "none" : "block";
    }
    updatePerkDescription();
};
const getResetCode = () => {
    if (isAdamant)
        return createAdamantScript(perkTrees, "reset", getPerkLevel, pluginPrefixes);
    let result = [];
    for (const perkTree of perkTrees) {
        result.push(`; Remove all perks from '${perkTree.name}'`);
        const perks = clone(perkTree.perks);
        perks.reverse();
        for (const perk of perks) {
            if (perk.id) {
                const r = clone(perk.id);
                r.reverse();
                let level = perk.levels || 1;
                for (const id of r) {
                    result.push(`player.removeperk ${id} ; ${getPerkDisplayName(perk, level--)}`);
                }
            }
        }
        result.push("");
    }
    return result.join("\r\n");
};
const getAddPerksCode = () => {
    if (isAdamant)
        return createAdamantScript(perkTrees, "add", getPerkLevel, pluginPrefixes);
    const result = [];
    result.push(`player.setlevel ${Math.max(1, countActivePerks())}`);
    for (const perkTree of perkTrees) {
        const perkInfos = getPerkInfos(perkTree);
        result.push("");
        result.push(`; Add perks to '${perkTree.name}'`);
        result.push(`player.setav ${perkTree.cname} ${Math.max(15, perkInfos.req)}`);
        for (const perk of perkTree.perks) {
            if (perk.id) {
                const activeLevel = getPerkLevel(perk);
                let level = 1;
                for (const id of perk.id) {
                    if (level <= activeLevel) {
                        result.push(`player.addperk ${id} ; ${getPerkDisplayName(perk, level++)}`);
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }
    return result.join("\r\n");
};
const downloadScript = (filename, content) => {
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    const download = document.createElement("a");
    download.href = url;
    download.download = filename;
    download.click();
    URL.revokeObjectURL(url);
};
const downHandler = (e) => {
    if (!canvas) {
        return;
    }
    e.preventDefault();
    const bounds = canvas.getBoundingClientRect();
    const x = (e.clientX - bounds.left) * (canvas.width / bounds.width);
    const y = (e.clientY - bounds.top) * (canvas.height / bounds.height);
    if (!activePerkTreeView) {
        return;
    }
    if (activePerkTreeView.hitFrame(x, y)) {
        const perk = activePerkTreeView.perkAtPosition(x, y);
        if (perk) {
            if (isAdamant)
                descriptionPerk = perk;
            changePerkLevel(perk, e.button === 2 ? -1 : 1);
            workspace.navigate(`t/${perkTreeId(activePerkTreeView.model)}/${activeData()}`);
            redraw();
        }
    }
    else {
        for (const perkTreeView of perkTreeViews) {
            if (perkTreeView.hitFrame(x, y)) {
                activePerkTreeView.model = perkTreeView.model;
                workspace.navigate(`t/${perkTreeId(activePerkTreeView.model)}/${activeData()}`);
                redraw();
                break;
            }
        }
    }
};
const setCursor = (pointer) => {
    document.body.style.cursor = pointer ? 'pointer' : 'default';
};
const moveHandler = (e) => {
    if (!canvas) {
        return;
    }
    const bounds = canvas.getBoundingClientRect();
    const x = (e.clientX - bounds.left) * (canvas.width / bounds.width);
    const y = (e.clientY - bounds.top) * (canvas.height / bounds.height);
    if (activePerkTreeView && activePerkTreeView.hitFrame(x, y)) {
        const perk = activePerkTreeView.perkAtPosition(x, y);
        if (perk) {
            setCursor(true);
            hoveredPerk = perk;
            redraw();
        }
        else if (hoveredPerk) {
            setCursor(false);
            hoveredPerk = undefined;
            redraw();
        }
    }
    else {
        setCursor(false);
        for (const perkTreeView of perkTreeViews) {
            if (perkTreeView.hitFrame(x, y)) {
                setCursor(true);
                break;
            }
        }
    }
};
class Workspace {
    constructor() {
        this.routes = {
            't/:tree/:data': 'tree',
            't/:tree': 'tree',
            '': 'tree'
        };
    }
    load() {
        let tree = "1";
        let data = "";
        const hash = window.location.hash;
        if (hash) {
            const match = hash.match(isAdamant ? /^#a\/ns322\/t\/(\d+)\/?([^\/]+)?$/ : /^#t\/(\d+)\/?([^\/]+)?$/);
            if (match) {
                tree = match[1] || "1";
                data = match[2] || "";
            }
        }
        const i = Math.min(Math.max(0, parseInt(tree, 10)), perkTrees.length - 1);
        if (activePerkTreeView) {
            activePerkTreeView.model = perkTrees[i];
        }
        if (data !== "") {
            readActiveData(data);
        }
        redraw();
    }
    navigate(str, reload) {
        window.history.replaceState(null, "", `#${isAdamant ? "a/ns322/" : ""}${str}`);
        if (reload) {
            this.load();
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d, _e;
    canvas = document.getElementById("canvas");
    if (!canvas || !canvas.getContext) {
        canvas = null;
        return;
    }
    let x = TREE_PADDING + (TREE_WIDTH + TREE_PADDING) * 2;
    let y = TREE_PADDING + (TREE_HEIGHT + TREE_PADDING) * 5;
    let i = 0;
    activePerkTreeView = new PerkTreeView(perkTrees[0], [320, TREE_PADDING, 675, 787], 2.8);
    for (const perkTree of perkTrees) {
        perkTreeViews.push(new PerkTreeView(perkTree, [x, y, TREE_WIDTH, TREE_HEIGHT], 0.4));
        i++;
        x += TREE_WIDTH + TREE_PADDING;
        if (i == 1) {
            x = TREE_PADDING;
            y = TREE_PADDING;
        }
        else if (((i - 1) % TREE_COLS) == 0) {
            x = TREE_PADDING;
            y += TREE_HEIGHT + TREE_PADDING;
        }
    }
    (_a = document.getElementById("clear-perks")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        if (confirm('Really clear all perks?')) {
            activePerkLevels = {};
            workspace.navigate(`t/${perkTreeId(activePerkTreeView.model)}/${activeData()}`, true);
        }
    });
    const languageSelect = document.getElementById("description-language");
    if (languageSelect) {
        descriptionLanguage = localStorage.getItem("description-language") === "th" ? "th" : "en";
        languageSelect.value = descriptionLanguage;
        languageSelect.addEventListener("change", () => {
            descriptionLanguage = languageSelect.value === "th" ? "th" : "en";
            localStorage.setItem("description-language", descriptionLanguage);
            redraw();
            languageSelect.blur();
        });
    }
    const exportScript = (filename, generate) => {
        try {
            downloadScript(filename, generate());
            const error = document.getElementById("export-error");
            if (error)
                error.textContent = "";
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            const status = document.getElementById("export-error");
            if (status)
                status.textContent = message;
        }
    };
    (_b = document.getElementById('download-reset')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => exportScript("reset.txt", getResetCode));
    (_c = document.getElementById('download-addperks')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => exportScript("addperks.txt", getAddPerksCode));
    (_d = document.getElementById('help')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        window.open(isAdamant ? "respec-adamant.html" : "respec.html", "_blank", "noopener");
    });
    const prefixFields = document.getElementById("plugin-prefixes");
    if (isAdamant && prefixFields) {
        const params = new URLSearchParams(window.location.search);
        for (const plugin of Object.keys(pluginPrefixes).filter(plugin => plugin !== "Update.esm")) {
            const key = `prefix-${plugin}`;
            pluginPrefixes[plugin] = (_e = params.get(key)) !== null && _e !== void 0 ? _e : pluginPrefixes[plugin];
            const label = document.createElement("label");
            label.textContent = plugin;
            const input = document.createElement("input");
            input.value = pluginPrefixes[plugin];
            input.setAttribute("aria-label", `${plugin} load-order prefix`);
            input.maxLength = 5;
            input.spellcheck = false;
            input.addEventListener("input", () => {
                pluginPrefixes[plugin] = input.value.trim().toUpperCase();
                const url = new URL(window.location.href);
                url.searchParams.set(key, pluginPrefixes[plugin]);
                window.history.replaceState(null, "", url);
            });
            label.appendChild(input);
            prefixFields.appendChild(label);
        }
    }
    canvas.addEventListener("mousemove", moveHandler);
    canvas.addEventListener("mousedown", downHandler);
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    redraw();
    workspace = new Workspace();
    workspace.load();
    window.addEventListener("hashchange", () => {
        workspace.load();
    });
});
//# sourceMappingURL=app.js.map