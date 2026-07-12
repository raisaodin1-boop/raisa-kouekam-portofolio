"use client";

import { TimelineItem } from "@/components/experience/TimelineItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceKeys } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";

type ExperienceContentProps = {
  dict: Dictionary["experience"];
};

export function ExperienceContent({ dict }: ExperienceContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title={dict.title} subtitle={dict.subtitle} />

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
    </div>
  );
}
