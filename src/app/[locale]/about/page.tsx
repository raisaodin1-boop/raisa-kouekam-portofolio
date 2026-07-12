import { AboutContent } from "@/components/about/AboutContent";
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
    pageTitle: dict.about.label,
    pageDescription: dict.about.subtitle,
    path: "/about",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <AboutContent
      dict={dict.about}
      highlightsAriaLabel={dict.a11y.professionalHighlights}
    />
  );
}
