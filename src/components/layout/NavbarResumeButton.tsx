import { siteConfig } from "@/data/site";
import { getResumeHref, getResumeLinkProps } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";

type NavbarResumeButtonProps = {
  locale: Locale;
  label: string;
  className?: string;
  fullWidth?: boolean;
};

export function NavbarResumeButton({
  locale,
  label,
  className,
  fullWidth = false,
}: NavbarResumeButtonProps) {
  const href = getResumeHref(locale, siteConfig.resumeUrls);
  const { external, download } = getResumeLinkProps(locale, siteConfig.resumeUrls);

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#2563EB]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2",
        fullWidth && "w-full",
        className
      )}
      aria-label={label}
    >
      <Download className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}
