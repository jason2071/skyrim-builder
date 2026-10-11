import { thaiDescriptions } from "./descriptions-th.js";
import { perkDescriptionsTh } from "./perk-descriptions-th.js";
import { adamantDescriptionsTh } from "./adamant-descriptions-th.js";
export const getPerkDescription = (perk, description, language, ruleset = "vanilla") => {
    var _a, _b, _c, _d;
    if (language === "en")
        return description;
    if (ruleset === "adamant")
        return (_a = adamantDescriptionsTh[description]) !== null && _a !== void 0 ? _a : description;
    // Ranked perks need the description for the requested rank, not the name-based summary.
    if (perk.desc.length > 1)
        return (_b = thaiDescriptions[description]) !== null && _b !== void 0 ? _b : description;
    return (_d = (_c = perkDescriptionsTh[perk.name]) !== null && _c !== void 0 ? _c : thaiDescriptions[description]) !== null && _d !== void 0 ? _d : description;
};
//# sourceMappingURL=translations.js.map