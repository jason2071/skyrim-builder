import { thaiDescriptions } from "./descriptions-th.js";
import { perkDescriptionsTh } from "./perk-descriptions-th.js";
export const getPerkDescription = (perk, description, language) => {
    var _a, _b, _c;
    if (language === "en")
        return description;
    // Ranked perks need the description for the requested rank, not the name-based summary.
    if (perk.desc.length > 1)
        return (_a = thaiDescriptions[description]) !== null && _a !== void 0 ? _a : description;
    return (_c = (_b = perkDescriptionsTh[perk.name]) !== null && _b !== void 0 ? _b : thaiDescriptions[description]) !== null && _c !== void 0 ? _c : description;
};
//# sourceMappingURL=translations.js.map