"use client";

import { FooterBrand } from "@/components/layout/FooterBrand";
import { FooterLinks } from "@/components/layout/FooterLinks";
import { FooterSocial } from "@/components/layout/FooterSocial";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/data/site";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <FooterBrand locale={locale} dict={dict.footer} />
          <FooterLinks
            locale={locale}
            dict={dict}
            title={dict.footer.quickLinks}
          />
          <FooterSocial dict={dict.footer} />
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center sm:mt-14">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <p className="mt-2 text-xs text-muted/80">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
