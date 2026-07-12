import { siteConfig } from "@/data/site";
import type { FooterDictionary } from "@/components/contact/types";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";

type FooterBrandProps = {
  locale: Locale;
  dict: Pick<FooterDictionary, "role" | "description">;
};

export function FooterBrand({ locale, dict }: FooterBrandProps) {
  return (
    <div className="max-w-xs">
      <Link
        href={getLocalizedPath("", locale)}
        className="text-lg font-bold tracking-tight text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
      >
        {siteConfig.name}
      </Link>
      <p className="mt-2 text-sm font-medium text-primary">{dict.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{dict.description}</p>
    </div>
  );
}
