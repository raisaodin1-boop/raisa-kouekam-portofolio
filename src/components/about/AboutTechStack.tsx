"use client";

import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";

type AboutTechStackProps = {
  label: string;
  technologies: string[];
};

export function AboutTechStack({ label, technologies }: AboutTechStackProps) {
  return (
    <AnimateIn delay={0.2}>
      <section className="mt-16 sm:mt-20" aria-labelledby="about-tech-heading">
        <h2
          id="about-tech-heading"
          className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          {label}
        </h2>
        <ul className="flex flex-wrap gap-2.5 sm:gap-3" role="list">
          {technologies.map((tech) => (
            <li key={tech} role="listitem">
              <Badge className="rounded-xl border border-border/80 bg-white px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </section>
    </AnimateIn>
  );
}
