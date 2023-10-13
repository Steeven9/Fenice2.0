export const findSkill = (str: string) =>
  skills.filter((el) => el.name.toLowerCase() === str.toLowerCase())[0];

export const getWikiURL = (skillName: string) => {
  const baseURL = "https://2e.aonprd.com/Skills.aspx?ID=";
  return (
    baseURL +
    (skills.findIndex(
      (el) => el.name.toLowerCase() === skillName.toLowerCase()
    ) +
      1)
  );
};

export const skills = [
  {
    name: "Acrobatics",
    ability: "DEX",
    armorPenalty: true,
    requiresTraining: false,
  },
  {
    name: "Arcana",
    ability: "INT",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Athletics",
    ability: "STR",
    armorPenalty: true,
    requiresTraining: false,
  },
  {
    name: "Crafting",
    ability: "INT",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Deception",
    ability: "CHA",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Diplomacy",
    ability: "CHA",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Intimidation",
    ability: "CHA",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Lore",
    ability: "INT",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Medicine",
    ability: "WIS",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Nature",
    ability: "WIS",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Occultism",
    ability: "INT",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Performance",
    ability: "CHA",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Religion",
    ability: "WIS",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Society",
    ability: "INT",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Stealth",
    ability: "DEX",
    armorPenalty: true,
    requiresTraining: false,
  },
  {
    name: "Survival",
    ability: "WIS",
    armorPenalty: false,
    requiresTraining: false,
  },
  {
    name: "Thievery",
    ability: "DEX",
    armorPenalty: true,
    requiresTraining: false,
  },
];
