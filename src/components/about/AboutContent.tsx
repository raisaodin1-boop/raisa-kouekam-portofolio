"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

type AboutContentProps = {
  dict: Dictionary["about"];
};

const sectionIcons = { mission: Target, passion: Heart, experience: Lightbulb };
const valueIcons = [Target, Heart, Lightbulb, Users];

export function AboutContent({ dict }: AboutContentProps) {
  const sections = [
    { key: "mission" as const, icon: sectionIcons.mission },
    { key: "passion" as const, icon: sectionIcons.passion },
    { key: "experience" as const, icon: sectionIcons.experience },
  ];

  return (
    <PageContainer>
      <AnimateIn>
        <SectionHeading title={dict.title} subtitle={dict.subtitle} />
      </AnimateIn>

      <div className="grid gap-6 md:grid-cols-3">
        {sections.map(({ key, icon: Icon }, index) => (
          <AnimateIn key={key} delay={index * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-dark">
                {dict[key].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {dict[key].text}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.3}>
        <div className="mt-12 rounded-2xl border border-border bg-light-gray p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
              <Users className="h-5 w-5 text-accent" aria-hidden />
            </div>
            <h3 className="text-xl font-semibold text-dark">
              {dict.values.title}
            </h3>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {dict.values.items.map((item, index) => {
              const Icon = valueIcons[index] ?? Target;
              return (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-5 card-shadow transition-all duration-300 hover:card-shadow-hover"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-muted">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </AnimateIn>
    </PageContainer>
  );
}
