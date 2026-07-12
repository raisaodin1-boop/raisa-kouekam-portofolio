import { ProjectCaseStudyContent } from "@/components/projects/ProjectCaseStudyContent";
import {
  caseStudySlugs,
  isCaseStudySlug,
  projectsData,
  type CaseStudySlug,
} from "@/data/site";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isCaseStudySlug(slug)) {
    return {};
  }

  const dict = await getDictionary(locale as Locale);
  const project = dict.projects.items[slug];
  const caseStudy = project.caseStudy;

  return createPageMetadata({
    locale: locale as Locale,
    pageTitle: project.title,
    pageDescription: caseStudy.metaDescription,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isCaseStudySlug(slug)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const project = dict.projects.items[slug as CaseStudySlug];
  const data = projectsData[slug as CaseStudySlug];

  return (
    <ProjectCaseStudyContent
      locale={locale as Locale}
      title={project.title}
      description={project.description}
      features={project.features}
      techStack={data.techStack}
      liveUrl={data.liveUrl}
      githubUrl={data.githubUrl}
      coverImage={data.coverImage}
      galleryImages={data.galleryImages}
      caseStudy={project.caseStudy}
      labels={{
        overview: dict.projects.caseStudy.overview,
        role: dict.projects.caseStudy.role,
        challenge: dict.projects.caseStudy.challenge,
        solution: dict.projects.caseStudy.solution,
        outcomes: dict.projects.caseStudy.outcomes,
        gallery: dict.projects.caseStudy.gallery,
        backToProjects: dict.projects.backToProjects,
        liveDemo: dict.projects.liveDemo,
        github: dict.projects.github,
        techStack: dict.projects.techStack,
        features: dict.projects.features,
      }}
    />
  );
}
