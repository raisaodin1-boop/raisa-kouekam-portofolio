import { siteConfig } from "@/data/site";

export const seoKeywords = [
  "Full Stack Software Engineer",
  "Full Stack Developer",
  "Software Engineer",
  "Raisa Kouekam",
  "Next.js Developer",
  "TypeScript Developer",
  "React Developer",
  "Web Developer",
  "E-commerce Developer",
  "Fintech Developer",
  "Remote Software Engineer",
  "Portfolio",
] as const;

export const seoDefaults = {
  metadataBase: new URL(siteConfig.url),
  siteName: siteConfig.name,
  author: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  twitterCard: "summary_large_image" as const,
  ogImageAlt: `${siteConfig.name} — Full Stack Software Engineer Portfolio`,
};
