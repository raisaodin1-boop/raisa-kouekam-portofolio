import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { navbarItems } from "@/data/site";
import { isNavActive } from "@/lib/nav";
import { getLocalizedPath } from "@/lib/utils";
import { cn } from "@/lib/utils";

type NavbarLinkProps = {
  locale: Locale;
  pathname: string;
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
};

export function NavbarLink({
  locale,
  pathname,
  href,
  label,
  onNavigate,
  className,
}: NavbarLinkProps) {
  const active = isNavActive(pathname, href, locale);

  return (
    <Link
      href={getLocalizedPath(href, locale)}
      onClick={onNavigate}
      className={cn(
        "group relative px-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2",
        active ? "text-[#2563EB]" : "text-[#0F172A]/70 hover:text-[#0F172A]",
        className
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px bg-[#2563EB] transition-all duration-200",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
        aria-hidden
      />
    </Link>
  );
}

type NavbarLinksProps = {
  locale: Locale;
  pathname: string;
  labels: Record<(typeof navbarItems)[number]["key"], string>;
  onNavigate?: () => void;
  className?: string;
  vertical?: boolean;
};

export function NavbarLinks({
  locale,
  pathname,
  labels,
  onNavigate,
  className,
  vertical = false,
}: NavbarLinksProps) {
  return (
    <nav
      className={cn(
        vertical ? "flex flex-col gap-1" : "flex items-center gap-7 xl:gap-8",
        className
      )}
      aria-label="Main navigation"
    >
      {navbarItems.map((item) => (
        <NavbarLink
          key={item.key}
          locale={locale}
          pathname={pathname}
          href={item.href}
          label={labels[item.key]}
          onNavigate={onNavigate}
          className={vertical ? "rounded-lg px-3 py-2.5" : undefined}
        />
      ))}
    </nav>
  );
}
