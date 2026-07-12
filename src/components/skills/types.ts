import type { SkillCategoryKey } from "@/data/skills";

export type SkillCategoryContent = {
  title: string;
  description: string;
};

export type SkillsDictionary = {
  label: string;
  title: string;
  subtitle: string;
  categories: Record<string, string>;
  items: Record<SkillCategoryKey, SkillCategoryContent>;
};
