import type { Locale } from "@/i18n/config";
import { isConfiguredUrl, isExternalUrl } from "@/data/site";
import { navbarItems } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { getLocalizedPath } from "@/lib/utils";

type ResumeUrls = Record<Locale, string>;

function getResumeUrl(locale: Locale, resumeUrls: ResumeUrls): string {
  return resumeUrls[locale] ?? resumeUrls.en;
}

export function buildNavLabels(dict: Dictionary) {
  return Object.fromEntries(
    navbarItems.map((item) => [
      item.key,
      dict.nav[item.key as keyof typeof dict.nav],
    ])
  ) as Record<(typeof navbarItems)[number]["key"], string>;
}

export function isNavActive(pathname: string, href: string, locale: Locale): boolean {
  const path = getLocalizedPath(href, locale);
  if (href === "") {
    return pathname === `/${locale}` || pathname === `/${locale}/`;
  }
  return pathname.startsWith(path);
}

export function getResumeHref(locale: Locale, resumeUrls: ResumeUrls): string {
  const resumeUrl = getResumeUrl(locale, resumeUrls);
  return isConfiguredUrl(resumeUrl)
    ? resumeUrl
    : getLocalizedPath("/contact", locale);
}

export function getResumeLinkProps(locale: Locale, resumeUrls: ResumeUrls) {
  const resumeUrl = getResumeUrl(locale, resumeUrls);
  if (!isConfiguredUrl(resumeUrl)) {
    return { external: false as const, download: undefined };
  }

  if (isExternalUrl(resumeUrl)) {
    return { external: true as const, download: undefined };
  }

  return {
    external: false as const,
    download:
      locale === "fr"
        ? "Raisa-Kouekam-CV.pdf"
        : "Raisa-Kouekam-Resume.pdf",
  };
}
