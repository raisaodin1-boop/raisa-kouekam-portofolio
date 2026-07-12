"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type AboutPreviewProps = {
  locale: Locale;
  dict: Dictionary;
};

export function AboutPreview({ locale, dict }: AboutPreviewProps) {
  return (
    <Section variant="muted" id="about-preview">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn direction="left">
            <SectionHeading
              title={dict.home.aboutTitle}
              subtitle={dict.home.aboutText}
            />
            <LinkButton
              href={getLocalizedPath("/about", locale)}
              variant="primary"
              className="mt-2"
            >
              {dict.home.learnMore}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </LinkButton>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {dict.about.values.items.slice(0, 4).map((item, i) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-white p-5 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover"
                >
                  <span className="text-xs font-bold text-primary">
                    0{i + 1}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </PageContainer>
    </Section>
  );
}
