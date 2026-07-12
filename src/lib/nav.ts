import type { Locale } from "@/i18n/config";
import { isConfiguredUrl, isExternalUrl } from "@/data/site";
import { navbarItems } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { getLocalizedPath } from "@/lib/utils";

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

export function getResumeHref(locale: Locale, resumeUrl: string): string {
  return isConfiguredUrl(resumeUrl)
    ? resumeUrl
    : getLocalizedPath("/contact", locale);
}

export function getResumeLinkProps(resumeUrl: string) {
  if (!isConfiguredUrl(resumeUrl)) {
    return { external: false as const, download: undefined };
  }

  if (isExternalUrl(resumeUrl)) {
    return { external: true as const, download: undefined };
  }

  return {
    external: false as const,
    download: "Raisa-Kouekam-Resume.pdf",
  };
}
