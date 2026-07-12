import { defaultLocale, locales, type Locale } from "@/i18n/config";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function parseAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const parsed = header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      const q = qPart ? Number.parseFloat(qPart) : 1;
      const base = tag.trim().toLowerCase().split("-")[0];
      return { base, q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { base } of parsed) {
    if (base === "fr") return "fr";
    if (base === "en") return "en";
  }

  return defaultLocale;
}
