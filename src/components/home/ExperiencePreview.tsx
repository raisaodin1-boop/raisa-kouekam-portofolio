"use client";

import { TimelineItem } from "@/components/experience/TimelineItem";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceKeys } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ExperiencePreviewProps = {
  locale: Locale;
  dict: Dictionary;
};

export function ExperiencePreview({ locale, dict }: ExperiencePreviewProps) {
  const previewKeys = experienceKeys.slice(0, 2);

  return (
    <Section variant="muted" id="experience-preview">
      <PageContainer>
        <AnimateIn>
          <SectionHeading
            title={dict.home.experienceTitle}
            subtitle={dict.home.experienceSubtitle}
          />
        </AnimateIn>

        <div className="mx-auto max-w-3xl">
          {previewKeys.map((key, index) => {
            const item = dict.experience.items[key];
            return (
              <TimelineItem
                key={key}
                title={item.title}
                company={item.company}
                period={item.period}
                location={item.location}
                description={item.description}
                index={index}
                isLast={index === previewKeys.length - 1}
              />
            );
          })}
        </div>

        <AnimateIn className="mt-8 text-center" delay={0.15}>
          <LinkButton
            href={getLocalizedPath("/experience", locale)}
            variant="outline"
          >
            {dict.home.viewExperience}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </LinkButton>
        </AnimateIn>
      </PageContainer>
    </Section>
  );
}
