import { ExperienceContent } from "@/components/experience/ExperienceContent";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return createPageMetadata({
    locale: locale as Locale,
    pageTitle: dict.experience.label,
    pageDescription: dict.experience.subtitle,
    path: "/experience",
  });
}

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <ExperienceContent dict={dict.experience} />;
}
