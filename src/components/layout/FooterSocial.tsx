import { siteConfig, isConfiguredUrl } from "@/data/site";
import { cn } from "@/lib/utils";
import { GitBranch, Mail, Share2, type LucideIcon } from "lucide-react";
import Link from "next/link";

type FooterSocialProps = {
  title: string;
  labels: {
    github: string;
    linkedin: string;
    email: string;
  };
  ariaLabel: string;
};

type SocialItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  external: boolean;
};

export function FooterSocial({ title, labels, ariaLabel }: FooterSocialProps) {
  const links: SocialItem[] = [
    { href: siteConfig.github, icon: GitBranch, label: labels.github, external: true },
    ...(isConfiguredUrl(siteConfig.linkedin)
      ? [{ href: siteConfig.linkedin, icon: Share2, label: labels.linkedin, external: true }]
      : []),
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: labels.email, external: false },
  ];

  return (
    <div>
      <p className="text-sm font-semibold text-dark">{title}</p>
      <ul className="mt-4 flex flex-wrap gap-3" aria-label={ariaLabel}>
        {links.map(({ href, icon: Icon, label, external }) => (
          <li key={label}>
            <Link
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={label}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-muted",
                "transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
