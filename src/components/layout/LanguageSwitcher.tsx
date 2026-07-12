"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
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
      aria-label="Language switcher"
    >
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-[#E5E7EB]" aria-hidden>
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => switchLocale(loc)}
            className={cn(
              "uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded-sm px-0.5",
              locale === loc
                ? "text-[#2563EB]"
                : "text-[#0F172A]/50 hover:text-[#0F172A]"
            )}
            aria-pressed={locale === loc}
            aria-label={`Switch to ${loc === "en" ? "English" : "French"}`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
