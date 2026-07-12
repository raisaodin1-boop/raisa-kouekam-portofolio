import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";

export function isNavActive(pathname: string, href: string, locale: Locale): boolean {
  const path = getLocalizedPath(href, locale);
  if (href === "") {
    return pathname === `/${locale}` || pathname === `/${locale}/`;
  }
  return pathname.startsWith(path);
}

export function getResumeHref(locale: Locale, resumeUrl: string): string {
  const configured = Boolean(resumeUrl && resumeUrl !== "#");
  return configured ? resumeUrl : getLocalizedPath("/contact", locale);
}
