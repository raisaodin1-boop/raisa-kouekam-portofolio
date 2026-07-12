"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectKeys, projectsData, type ProjectKey } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Building2, Layout, ShoppingBag, Wallet, type LucideIcon } from "lucide-react";

type ProjectsContentProps = {
  dict: Dictionary;
};

const projectIcons: Record<ProjectKey, LucideIcon> = {
  yorix: ShoppingBag,
  hodix: Wallet,
  digitalGroup: Building2,
  portfolio: Layout,
};

export function ProjectsContent({ dict }: ProjectsContentProps) {
  return (
    <PageContainer as="section" aria-labelledby="projects-page-heading">
      <AnimateIn>
        <SectionHeading
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
          level="h1"
          headingId="projects-page-heading"
        />
      </AnimateIn>

      <div className="grid gap-8 lg:grid-cols-2">
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
                coverImage={data.coverImage}
                icon={projectIcons[key]}
                labels={{
                  liveDemo: dict.projects.liveDemo,
                  github: dict.projects.github,
                  coverAltSuffix: dict.projects.coverAltSuffix,
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
