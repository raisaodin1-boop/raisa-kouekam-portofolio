"use client";

import { SkillBadge } from "@/components/skills/SkillBadge";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useId } from "react";

type SkillCardProps = {
  title: string;
  skills: readonly string[];
  icon: LucideIcon;
  description?: string;
  index?: number;
  animate?: boolean;
};

function SkillCardContent({
  title,
  skills,
  icon: Icon,
  description,
}: Omit<SkillCardProps, "index" | "animate">) {
  const headingId = useId();
  const isBadgeLayout = Boolean(description);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover sm:p-7">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </div>

      <h3
        id={headingId}
        className="text-lg font-semibold text-dark sm:text-xl"
      >
        {title}
      </h3>

      {description && (
        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
          {description}
        </p>
      )}

      {isBadgeLayout ? (
        <ul
          className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5"
          role="list"
          aria-labelledby={headingId}
        >
          {skills.map((skill) => (
            <li key={skill} role="listitem">
              <SkillBadge label={skill} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 space-y-2" role="list">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2.5 text-sm text-muted"
              role="listitem"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              {skill}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function SkillCard({
  title,
  skills,
  icon,
  description,
  index = 0,
  animate,
}: SkillCardProps) {
  const shouldAnimate = animate ?? !description;

  if (shouldAnimate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="h-full"
      >
        <SkillCardContent
          title={title}
          skills={skills}
          icon={icon}
          description={description}
        />
      </motion.div>
    );
  }

  return (
    <SkillCardContent
      title={title}
      skills={skills}
      icon={icon}
      description={description}
    />
  );
}
