"use client";

import { ProjectCoverImage } from "@/components/projects/ProjectCoverImage";
import type { CaseStudyContent, CaseStudyLabels } from "@/components/projects/types";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { isConfiguredUrl } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

type ProjectCaseStudyContentProps = {
  locale: Locale;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  coverImage?: string;
  galleryImages?: string[];
  caseStudy: CaseStudyContent;
  labels: CaseStudyLabels;
};

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
};

function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="mt-14 sm:mt-16">
      <h2 className="text-xl font-semibold text-dark sm:text-2xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8">
        {children}
      </div>
    </section>
  );
}

export function ProjectCaseStudyContent({
  locale,
  title,
  description,
  features,
  techStack,
  liveUrl,
  githubUrl,
  coverImage,
  galleryImages,
  caseStudy,
  labels,
}: ProjectCaseStudyContentProps) {
  return (
    <section className="bg-white" aria-labelledby="case-study-heading">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-28 lg:py-32">
        <AnimateIn>
          <LinkButton
            href={getLocalizedPath("/projects", locale)}
            variant="ghost"
            className="mb-8 -ml-2 px-2 text-muted hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {labels.backToProjects}
          </LinkButton>
        </AnimateIn>

        {coverImage && (
          <AnimateIn>
            <div className="overflow-hidden rounded-2xl border border-border">
              <ProjectCoverImage
                src={coverImage}
                alt={title}
                priority
                className="aspect-[21/9]"
              />
            </div>
          </AnimateIn>
        )}

        <AnimateIn delay={0.05}>
          <header className="mt-10 max-w-3xl">
            <h1
              id="case-study-heading"
              className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              {description}
            </p>
          </header>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {isConfiguredUrl(liveUrl) && (
              <LinkButton href={liveUrl} external variant="primary">
                <ExternalLink className="h-4 w-4" aria-hidden />
                {labels.liveDemo}
              </LinkButton>
            )}
            {isConfiguredUrl(githubUrl) && (
              <LinkButton href={githubUrl} external variant="outline">
                <GitBranch className="h-4 w-4" aria-hidden />
                {labels.github}
              </LinkButton>
            )}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {labels.techStack}
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.14}>
          <CaseStudySection title={labels.overview}>
            <p>{caseStudy.overview}</p>
          </CaseStudySection>
        </AnimateIn>

        <AnimateIn delay={0.16}>
          <CaseStudySection title={labels.role}>
            <p>{caseStudy.role}</p>
          </CaseStudySection>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <CaseStudySection title={labels.challenge}>
            <p>{caseStudy.challenge}</p>
          </CaseStudySection>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <CaseStudySection title={labels.solution}>
            <p>{caseStudy.solution}</p>
          </CaseStudySection>
        </AnimateIn>

        <AnimateIn delay={0.22}>
          <section className="mt-14 sm:mt-16">
            <h2 className="text-xl font-semibold text-dark sm:text-2xl">
              {labels.features}
            </h2>
            <ul className="mt-4 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-base leading-relaxed text-muted"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn delay={0.24}>
          <section className="mt-14 sm:mt-16">
            <h2 className="text-xl font-semibold text-dark sm:text-2xl">
              {labels.outcomes}
            </h2>
            <ul className="mt-4 space-y-3">
              {caseStudy.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2.5 text-base leading-relaxed text-muted"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>

        {galleryImages && galleryImages.length > 0 && (
          <AnimateIn delay={0.26}>
            <section className="mt-14 sm:mt-16" aria-labelledby="case-study-gallery">
              <h2
                id="case-study-gallery"
                className="text-xl font-semibold text-dark sm:text-2xl"
              >
                {labels.gallery}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {galleryImages.map((src, index) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-light-gray"
                  >
                    <Image
                      src={src}
                      alt={`${title} — ${caseStudy.galleryAltSuffix} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
