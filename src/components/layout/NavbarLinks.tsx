import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { navbarItems } from "@/data/site";
import { isNavActive } from "@/lib/nav";
import { cn, getLocalizedPath } from "@/lib/utils";

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
        "group relative px-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        active ? "text-primary" : "text-muted hover:text-dark",
        className
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-200",
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
  ariaLabel: string;
};

export function NavbarLinks({
  locale,
  pathname,
  labels,
  onNavigate,
  className,
  vertical = false,
  ariaLabel,
}: NavbarLinksProps) {
  return (
    <nav
      className={cn(
        vertical ? "flex flex-col gap-1" : "flex items-center gap-7 xl:gap-8",
        className
      )}
      aria-label={ariaLabel}
    >
      {navbarItems.map((item) => (
        <NavbarLink
          key={item.key}
          locale={locale}
          pathname={pathname}
          href={item.href}
          label={labels[item.key]}
          onNavigate={onNavigate}
          className={vertical ? "min-h-11 rounded-lg px-3 py-2.5" : undefined}
        />
      ))}
    </nav>
  );
}
