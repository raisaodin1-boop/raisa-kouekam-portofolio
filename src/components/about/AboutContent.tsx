import { AboutBio } from "@/components/about/AboutBio";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutPortrait } from "@/components/about/AboutPortrait";
import { AboutSectionHeader } from "@/components/about/AboutSectionHeader";
import { AboutTechStack } from "@/components/about/AboutTechStack";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutWhatsApp } from "@/components/about/AboutWhatsApp";
import type { AboutDictionary } from "@/components/about/types";

type AboutContentProps = {
  dict: AboutDictionary;
  highlightsAriaLabel: string;
  valuesAriaLabel: string;
};

export function AboutContent({
  dict,
  highlightsAriaLabel,
  valuesAriaLabel,
}: AboutContentProps) {
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
          <AboutPortrait label={dict.portraitLabel} />
          <AboutBio paragraphs={dict.paragraphs} />
        </div>

        <AboutHighlights
          highlights={dict.highlights}
          ariaLabel={highlightsAriaLabel}
        />
        <AboutValues
          title={dict.values.title}
          items={dict.values.items}
          ariaLabel={valuesAriaLabel}
        />
        <AboutTechStack
          label={dict.techStackLabel}
          technologies={dict.techStack}
        />
        <AboutWhatsApp
          title={dict.whatsapp.title}
          description={dict.whatsapp.description}
          buttonLabel={dict.whatsapp.button}
        />
      </div>
    </section>
  );
}
