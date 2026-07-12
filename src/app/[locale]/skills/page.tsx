import { SkillsContent } from "@/components/skills/SkillsContent";
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
    pageTitle: dict.skills.label,
    pageDescription: dict.skills.subtitle,
    path: "/skills",
  });
}

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <SkillsContent dict={dict.skills} categoriesAriaLabel={dict.a11y.skillCategories} />;
}
