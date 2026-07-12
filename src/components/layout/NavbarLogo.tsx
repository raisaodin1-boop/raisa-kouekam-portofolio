import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";

type NavbarLogoProps = {
  locale: Locale;
  name: string;
  title: string;
};

export function NavbarLogo({ locale, name, title }: NavbarLogoProps) {
  return (
    <Link
      href={getLocalizedPath("", locale)}
      className="group inline-flex min-h-11 min-w-11 flex-col justify-center rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
    >
      <span className="block text-[15px] font-semibold leading-tight tracking-tight text-[#0F172A] transition-colors duration-200 group-hover:text-[#2563EB]">
        {name}
      </span>
      <span className="mt-0.5 block text-[11px] font-medium leading-tight text-muted">
        {title}
      </span>
    </Link>
  );
}
