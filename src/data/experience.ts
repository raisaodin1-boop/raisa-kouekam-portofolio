export const experienceKeys = [
  "yorixDigital",
  "yorixMarketplace",
  "hodix",
] as const;

export type ExperienceKey = (typeof experienceKeys)[number];
