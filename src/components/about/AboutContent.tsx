import { AboutBio } from "@/components/about/AboutBio";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutPortrait } from "@/components/about/AboutPortrait";
import { AboutSectionHeader } from "@/components/about/AboutSectionHeader";
import { AboutTechStack } from "@/components/about/AboutTechStack";
import type { AboutDictionary } from "@/components/about/types";

type AboutContentProps = {
  dict: AboutDictionary;
};

export function AboutContent({ dict }: AboutContentProps) {
  return (
    <section className="bg-white" aria-labelledby="about-page-heading">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-28 lg:py-32">
        <AboutSectionHeader
          label={dict.label}
          title={dict.title}
          subtitle={dict.subtitle}
          headingId="about-page-heading"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <AboutPortrait
            label={dict.portraitLabel}
            caption={dict.portraitCaption}
          />
          <AboutBio paragraphs={dict.paragraphs} />
        </div>

        <AboutHighlights highlights={dict.highlights} />
        <AboutTechStack
          label={dict.techStackLabel}
          technologies={dict.techStack}
        />
      </div>
    </section>
  );
}
