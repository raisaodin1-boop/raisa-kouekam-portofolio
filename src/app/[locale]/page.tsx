import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { HomeMetrics } from "@/components/home/HomeMetrics";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero locale={locale as Locale} dict={dict} />
      <HomeMetrics metrics={dict.home.metrics} />
      <AboutPreview locale={locale as Locale} dict={dict} />
      <FeaturedProjects locale={locale as Locale} dict={dict} />
      <SkillsPreview locale={locale as Locale} dict={dict} />
      <ExperiencePreview locale={locale as Locale} dict={dict} />
      <ContactCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
