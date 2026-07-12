"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  featuredProjectKeys,
  projectsData,
  isCaseStudySlug,
  type ProjectKey,
} from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { ArrowRight, ShoppingBag, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeaturedProjectsProps = {
  locale: Locale;
  dict: Dictionary;
};

const projectIcons: Record<ProjectKey, LucideIcon> = {
  yorix: ShoppingBag,
  hodix: Wallet,
  digitalGroup: ShoppingBag,
  portfolio: ArrowRight,
};

export function FeaturedProjects({ locale, dict }: FeaturedProjectsProps) {
  return (
    <PageContainer as="section" id="projects-preview">
      <AnimateIn>
        <SectionHeading
          title={dict.home.featuredTitle}
          subtitle={dict.home.featuredSubtitle}
        />
      </AnimateIn>

      <div className="grid gap-8 lg:grid-cols-2">
        {featuredProjectKeys.map((key, index) => {
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
                imagePriority={index === 0}
                caseStudyHref={
                  isCaseStudySlug(key)
                    ? getLocalizedPath(`/projects/${key}`, locale)
                    : undefined
                }
                labels={{
                  liveDemo: dict.projects.liveDemo,
                  github: dict.projects.github,
                  coverAltSuffix: dict.projects.coverAltSuffix,
                  features: dict.projects.features,
                  techStack: dict.projects.techStack,
                  viewCaseStudy: dict.projects.viewCaseStudy,
                }}
              />
            </AnimateIn>
          );
        })}
      </div>

      <AnimateIn className="mt-12 text-center" delay={0.2}>
        <LinkButton
          href={getLocalizedPath("/projects", locale)}
          variant="outline"
        >
          {dict.home.viewAllProjects}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </LinkButton>
      </AnimateIn>
    </PageContainer>
  );
}
