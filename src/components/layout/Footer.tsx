"use client";

import { navItems, siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { GitBranch, Mail, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

const socialLinks = [
  { href: siteConfig.github, icon: GitBranch, label: "GitHub" },
  { href: siteConfig.linkedin, icon: Share2, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  { href: siteConfig.whatsapp, icon: MessageCircle, label: "WhatsApp" },
];

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-light-gray">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href={getLocalizedPath("", locale)}
              className="text-lg font-bold text-dark"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {dict.meta.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-dark">
              {dict.footer.navigation}
            </p>
            <nav
              className="mt-4 flex flex-col gap-2"
              aria-label="Footer navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={getLocalizedPath(item.href, locale)}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {dict.nav[item.key as keyof typeof dict.nav]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-dark">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-xl border border-border bg-white p-2.5 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <p className="text-xs text-muted/70">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
