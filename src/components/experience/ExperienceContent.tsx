"use client";

import { TimelineItem } from "@/components/experience/TimelineItem";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceKeys } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";

type ExperienceContentProps = {
  dict: Dictionary["experience"];
};

export function ExperienceContent({ dict }: ExperienceContentProps) {
  return (
    <PageContainer>
      <AnimateIn>
        <SectionHeading title={dict.title} subtitle={dict.subtitle} />
      </AnimateIn>

      <div className="mx-auto max-w-3xl">
        {experienceKeys.map((key, index) => {
          const item = dict.items[key];
          return (
            <TimelineItem
              key={key}
              title={item.title}
              company={item.company}
              period={item.period}
              location={item.location}
              description={item.description}
              index={index}
              isLast={index === experienceKeys.length - 1}
            />
          );
        })}
      </div>
    </PageContainer>
  );
}
