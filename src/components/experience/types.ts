import type { ExperienceKey } from "@/data/experience";

export type ExperienceItemContent = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlightsLabel: string;
  highlights: string[];
};

export type ExperienceAchievement = {
  value: string;
  label: string;
};

export type ExperienceDictionary = {
  label: string;
  title: string;
  subtitle: string;
  achievementsTitle: string;
  achievements: ExperienceAchievement[];
  items: Record<ExperienceKey, ExperienceItemContent>;
};
