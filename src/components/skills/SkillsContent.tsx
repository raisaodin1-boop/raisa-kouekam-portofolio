"use client";

import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { SkillsSectionHeader } from "@/components/skills/SkillsSectionHeader";
import type { SkillsDictionary } from "@/components/skills/types";

type SkillsContentProps = {
  dict: SkillsDictionary;
};

export function SkillsContent({ dict }: SkillsContentProps) {
  return (
    <section className="bg-white" aria-labelledby="skills-page-heading">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-28 lg:py-32">
        <SkillsSectionHeader
          label={dict.label}
          title={dict.title}
          subtitle={dict.subtitle}
        />
        <SkillsGrid items={dict.items} />
      </div>
    </section>
  );
}
