"use client";

import { SkillCard } from "@/components/skills/SkillCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import {
  Cloud,
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";

type SkillsContentProps = {
  dict: Dictionary["skills"];
};

const categoryConfig = [
  { key: "frontend" as const, icon: Globe },
  { key: "backend" as const, icon: Server },
  { key: "database" as const, icon: Database },
  { key: "cloud" as const, icon: Cloud },
  { key: "tools" as const, icon: Wrench },
  { key: "languages" as const, icon: Code2 },
];

export function SkillsContent({ dict }: SkillsContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title={dict.title} subtitle={dict.subtitle} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryConfig.map(({ key, icon }, index) => (
          <SkillCard
            key={key}
            title={dict.categories[key]}
            skills={skillCategories[key]}
            icon={icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
