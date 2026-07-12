"use client";

import { siteConfig, isConfiguredUrl } from "@/data/site";
import type { FooterDictionary } from "@/components/contact/types";
import { cn } from "@/lib/utils";
import { GitBranch, Mail, Share2, type LucideIcon } from "lucide-react";
import Link from "next/link";

type FooterSocialProps = {
  dict: Pick<FooterDictionary, "social">;
};

type SocialItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export function FooterSocial({ dict }: FooterSocialProps) {
  const links: SocialItem[] = [
    { href: siteConfig.github, icon: GitBranch, label: "GitHub" },
    ...(isConfiguredUrl(siteConfig.linkedin)
      ? [{ href: siteConfig.linkedin, icon: Share2, label: "LinkedIn" }]
      : []),
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <div>
      <p className="text-sm font-semibold text-dark">{dict.social}</p>
      <div className="mt-4 flex flex-wrap gap-3" role="list" aria-label={dict.social}>
        {links.map(({ href, icon: Icon, label }) => {
          const isEmail = href.startsWith("mailto:");
          return (
          <Link
            key={label}
            href={href}
            {...(!isEmail
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={label}
            role="listitem"
            className={cn(
              "rounded-xl border border-border bg-white p-2.5 text-muted",
              "transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </Link>
          );
        })}
      </div>
    </div>
  );
}
