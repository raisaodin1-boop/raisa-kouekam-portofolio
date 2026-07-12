"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/get-dictionary";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

type AboutContentProps = {
  dict: Dictionary["about"];
};

const valueIcons = [Target, Heart, Lightbulb, Users];

export function AboutContent({ dict }: AboutContentProps) {
  const sections = [
    { key: "mission" as const, icon: Target },
    { key: "passion" as const, icon: Heart },
    { key: "experience" as const, icon: Lightbulb },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title={dict.title} subtitle={dict.subtitle} />

      <div className="grid gap-6 md:grid-cols-3">
        {sections.map(({ key, icon: Icon }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border border-border bg-white p-6 card-shadow"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-dark">
              {dict[key].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {dict[key].text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 rounded-2xl border border-border bg-light-gray p-8"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
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
                className="flex items-start gap-3 rounded-xl bg-white p-4 card-shadow"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-sm leading-relaxed text-muted">{item}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
