"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
  ariaLabel: string;
  switchToEnglish: string;
  switchToFrench: string;
};

export function LanguageSwitcher({
  locale,
  className,
  ariaLabel,
  switchToEnglish,
  switchToFrench,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
  };

  return (
    <div
      className={cn("flex items-center gap-2 text-sm font-medium", className)}
      role="group"
      aria-label={ariaLabel}
    >
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-border" aria-hidden>
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => switchLocale(loc)}
            className={cn(
              "min-h-11 min-w-11 rounded-sm uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              locale === loc
                ? "text-primary"
                : "text-muted hover:text-dark"
            )}
            aria-pressed={locale === loc}
            aria-label={loc === "en" ? switchToEnglish : switchToFrench}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
