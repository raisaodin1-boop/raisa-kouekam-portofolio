"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectKeys, projectsData, type ProjectKey } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Layout, ShoppingBag, Wallet, type LucideIcon } from "lucide-react";

type ProjectsContentProps = {
  dict: Dictionary;
};

const projectIcons: Record<ProjectKey, LucideIcon> = {
  yorix: ShoppingBag,
  hodix: Wallet,
  portfolio: Layout,
};

export function ProjectsContent({ dict }: ProjectsContentProps) {
  return (
    <PageContainer>
      <AnimateIn>
        <SectionHeading
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
        />
      </AnimateIn>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projectKeys.map((key, index) => {
          const project = dict.projects.items[key];
          const data = projectsData[key];

          return (
            <AnimateIn key={key} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                features={project.features}
                techStack={data.techStack}
                liveUrl={data.liveUrl}
                githubUrl={data.githubUrl}
                gradient={data.gradient}
                icon={projectIcons[key]}
                preview={data.preview}
                labels={{
                  liveDemo: dict.projects.liveDemo,
                  github: dict.projects.github,
                  features: dict.projects.features,
                  techStack: dict.projects.techStack,
                }}
              />
            </AnimateIn>
          );
        })}
      </div>
    </PageContainer>
  );
}
