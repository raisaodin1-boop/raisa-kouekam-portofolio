import { navbarItems } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import Link from "next/link";

type FooterLinksProps = {
  locale: Locale;
  dict: Dictionary;
  title: string;
};

export function FooterLinks({ locale, dict, title }: FooterLinksProps) {
  return (
    <nav aria-label={title}>
      <p className="text-sm font-semibold text-dark">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {navbarItems.map((item) => (
          <li key={item.key}>
            <Link
              href={getLocalizedPath(item.href, locale)}
              className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              {dict.nav[item.key as keyof typeof dict.nav]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
