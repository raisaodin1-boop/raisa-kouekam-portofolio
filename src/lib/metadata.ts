import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

type PageMetaInput = {
  locale: Locale;
  pageTitle: string;
  pageDescription: string;
  path: string;
};

export function createPageMetadata({
  locale,
  pageTitle,
  pageDescription,
  path,
}: PageMetaInput): Metadata {
  const isEn = locale === "en";
  const fullTitle = `${pageTitle} | ${siteConfig.name}`;
  const url = `${siteConfig.url}/${locale}${path}`;

  return {
    title: fullTitle,
    description: pageDescription,
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      url,
      title: fullTitle,
      description: pageDescription,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en${path}`,
        fr: `${siteConfig.url}/fr${path}`,
      },
    },
  };
}

export function createRootMetadata(locale: Locale, dict: Dictionary): Metadata {
  const isEn = locale === "en";

  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: [
      "Full Stack Developer",
      "Software Engineer",
      "Raisa Kouekam",
      "Next.js",
      "TypeScript",
      "React",
      "Web Development",
      "E-commerce",
      "Fintech",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        fr: `${siteConfig.url}/fr`,
      },
    },
    robots: { index: true, follow: true },
  };
}
