"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
  };

  return (
    <div
      className="flex items-center gap-1 rounded-xl border border-border bg-white p-1"
      role="group"
      aria-label="Language switcher"
    >
      <Globe className="ml-2 hidden h-3.5 w-3.5 text-muted sm:block" aria-hidden />
      {(Object.keys(localeNames) as Locale[]).map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-lg px-2.5 py-1 text-xs font-medium uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            locale === loc
              ? "bg-primary text-white"
              : "text-muted hover:text-dark"
          )}
          aria-pressed={locale === loc}
          aria-label={`Switch to ${localeNames[loc]}`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
