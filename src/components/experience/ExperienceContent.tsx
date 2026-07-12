import { ExperienceAchievements } from "@/components/experience/ExperienceAchievements";
import { ExperienceSectionHeader } from "@/components/experience/ExperienceSectionHeader";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import type { ExperienceDictionary } from "@/components/experience/types";

type ExperienceContentProps = {
  dict: ExperienceDictionary;
};

export function ExperienceContent({ dict }: ExperienceContentProps) {
  return (
    <section className="bg-white" aria-labelledby="experience-page-heading">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-28 lg:py-32">
        <ExperienceSectionHeader
          label={dict.label}
          title={dict.title}
          subtitle={dict.subtitle}
          headingId="experience-page-heading"
        />

        <ExperienceTimeline items={dict.items} />

        <ExperienceAchievements
          title={dict.achievementsTitle}
          achievements={dict.achievements}
        />
      </div>
    </section>
  );
}
