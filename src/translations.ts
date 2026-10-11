import {Perk} from "./data.js";
import {thaiDescriptions} from "./descriptions-th.js";
import {perkDescriptionsTh} from "./perk-descriptions-th.js";
import {adamantDescriptionsTh} from "./adamant-descriptions-th.js";

export const getPerkDescription = (perk: Perk, description: string, language: "en" | "th", ruleset: "vanilla" | "adamant" = "vanilla"): string => {
  if (language === "en") return description;
  if (ruleset === "adamant") return adamantDescriptionsTh[description] ?? description;

  // Ranked perks need the description for the requested rank, not the name-based summary.
  if (perk.desc.length > 1) return thaiDescriptions[description] ?? description;

  return perkDescriptionsTh[perk.name] ?? thaiDescriptions[description] ?? description;
};
