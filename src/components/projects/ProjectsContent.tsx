"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData, type ProjectKey } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { motion } from "framer-motion";

type ProjectsContentProps = {
  dict: Dictionary;
};

const projectKeys: ProjectKey[] = ["yorix", "hodix", "portfolio"];

export function ProjectsContent({ dict }: ProjectsContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title={dict.projects.title}
        subtitle={dict.projects.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projectKeys.map((key, index) => {
          const project = dict.projects.items[key];
          const data = projectsData[key];

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={key === "portfolio" ? "lg:col-span-2 xl:col-span-1" : ""}
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
    </div>
  );
}
