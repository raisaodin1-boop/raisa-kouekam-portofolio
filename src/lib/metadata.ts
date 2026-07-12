import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/data/site";
import { seoDefaults, seoKeywords } from "@/lib/seo";
import type { Metadata } from "next";

type PageMetaInput = {
  locale: Locale;
  pageTitle: string;
  pageDescription: string;
  path: string;
};

function buildAlternateLanguages(path: string) {
  return {
    en: `${siteConfig.url}/en${path}`,
    fr: `${siteConfig.url}/fr${path}`,
  };
}

function buildSharedMetadata(
  locale: Locale,
  title: string,
  description: string,
  path: string
): Metadata {
  const isEn = locale === "en";
  const url = `${siteConfig.url}/${locale}${path}`;

  return {
    title,
    description,
    keywords: [...seoKeywords],
    authors: [{ name: seoDefaults.author, url: siteConfig.url }],
    creator: seoDefaults.creator,
    publisher: seoDefaults.publisher,
    metadataBase: seoDefaults.metadataBase,
    alternates: {
      canonical: url,
      languages: buildAlternateLanguages(path),
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? ["fr_FR"] : ["en_US"],
      url,
      title,
      description,
      siteName: seoDefaults.siteName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: seoDefaults.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: seoDefaults.twitterCard,
      title,
      description,
      images: ["/twitter-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function createPageMetadata({
  locale,
  pageTitle,
  pageDescription,
  path,
}: PageMetaInput): Metadata {
  const fullTitle = `${pageTitle} | ${siteConfig.name}`;
  return buildSharedMetadata(locale, fullTitle, pageDescription, path);
}

export function createRootMetadata(locale: Locale, dict: Dictionary): Metadata {
  return buildSharedMetadata(
    locale,
    dict.meta.title,
    dict.meta.description,
    ""
  );
}
