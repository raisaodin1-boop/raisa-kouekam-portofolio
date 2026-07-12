"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData, type ProjectKey } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type FeaturedProjectsProps = {
  locale: Locale;
  dict: Dictionary;
};

const featuredKeys: ProjectKey[] = ["yorix", "hodix"];

export function FeaturedProjects({ locale, dict }: FeaturedProjectsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title={dict.home.featuredTitle}
        subtitle={dict.home.featuredSubtitle}
      />

      <div className="grid gap-8 md:grid-cols-2">
        {featuredKeys.map((key, index) => {
          const project = dict.projects.items[key];
          const data = projectsData[key];

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                features={project.features}
                techStack={data.techStack}
                liveUrl={data.liveUrl}
                githubUrl={data.githubUrl}
                gradient={data.gradient}
                labels={{
                  liveDemo: dict.projects.liveDemo,
                  github: dict.projects.github,
                  features: dict.projects.features,
                  techStack: dict.projects.techStack,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <LinkButton
          href={getLocalizedPath("/projects", locale)}
          variant="outline"
        >
          {dict.home.viewAllProjects}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </LinkButton>
      </div>
    </section>
  );
}
