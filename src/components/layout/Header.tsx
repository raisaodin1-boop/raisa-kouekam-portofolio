"use client";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { navItems, siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    const path = getLocalizedPath(href, locale);
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={getLocalizedPath("", locale)}
          className="text-lg font-bold tracking-tight text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-label={`${siteConfig.name} — ${dict.nav.home}`}
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getLocalizedPath(item.href, locale)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive(item.href)
                  ? "text-primary bg-primary/5"
                  : "text-muted hover:bg-light-gray hover:text-dark"
              )}
            >
              {dict.nav[item.key as keyof typeof dict.nav]}
            </Link>
          ))}
          <div className="ml-3">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-dark hover:bg-light-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? dict.nav.close : dict.nav.menu}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-white px-6 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedPath(item.href, locale)}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-muted hover:text-dark"
                )}
              >
                {dict.nav[item.key as keyof typeof dict.nav]}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
