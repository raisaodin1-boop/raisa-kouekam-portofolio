import { caseStudySlugs, siteConfig } from "@/data/site";
import { locales } from "@/i18n/config";
import type { MetadataRoute } from "next";

const pages = ["", "/about", "/projects", "/experience", "/skills", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteConfig.url}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }

    for (const slug of caseStudySlugs) {
      entries.push({
        url: `${siteConfig.url}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
