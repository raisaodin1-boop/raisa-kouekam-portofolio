"use client";

import { SkillCard } from "@/components/skills/SkillCard";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { previewSkillKeys, skillCategories } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { ArrowRight, Cloud, Globe, Server } from "lucide-react";

type SkillsPreviewProps = {
  locale: Locale;
  dict: Dictionary;
};

const icons = { frontend: Globe, backend: Server, cloud: Cloud };

export function SkillsPreview({ locale, dict }: SkillsPreviewProps) {
  return (
    <PageContainer as="section" id="skills-preview">
      <AnimateIn>
        <SectionHeading
          title={dict.home.skillsTitle}
          subtitle={dict.home.skillsSubtitle}
        />
      </AnimateIn>

      <div className="grid gap-6 md:grid-cols-3">
        {previewSkillKeys.map((key, index) => (
          <SkillCard
            key={key}
            title={dict.skills.categories[key]}
            skills={skillCategories[key]}
            icon={icons[key]}
            index={index}
          />
        ))}
      </div>

      <AnimateIn className="mt-12 text-center" delay={0.2}>
        <LinkButton href={getLocalizedPath("/skills", locale)} variant="outline">
          {dict.home.viewAllSkills}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </LinkButton>
      </AnimateIn>
    </PageContainer>
  );
}
