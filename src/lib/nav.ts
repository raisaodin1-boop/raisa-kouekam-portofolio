import type { Locale } from "@/i18n/config";
import { isConfiguredUrl, isExternalUrl } from "@/data/site";
import { getLocalizedPath } from "@/lib/utils";

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
