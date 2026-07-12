"use client";

import { siteConfig, isConfiguredUrl } from "@/data/site";
import { cn } from "@/lib/utils";
import { GitBranch, Globe, Mail, MessageCircle, Share2, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type ContactSocialLinksProps = {
  labels: {
    github: string;
    linkedin: string;
    portfolio: string;
    email: string;
    whatsapp: string;
  };
  sectionLabel: string;
};

type SocialLink = {
  key: string;
  href: string;
  icon: LucideIcon;
  label: string;
  external?: boolean;
};

export function ContactSocialLinks({
  labels,
  sectionLabel,
}: ContactSocialLinksProps) {
  const links: SocialLink[] = [
    {
      key: "github",
      href: siteConfig.github,
      icon: GitBranch,
      label: labels.github,
      external: true,
    },
    ...(isConfiguredUrl(siteConfig.linkedin)
      ? [
          {
            key: "linkedin",
            href: siteConfig.linkedin,
            icon: Share2,
            label: labels.linkedin,
            external: true,
          },
        ]
      : []),
    {
      key: "portfolio",
      href: siteConfig.url,
      icon: Globe,
      label: labels.portfolio,
      external: true,
    },
    {
      key: "email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      label: labels.email,
    },
    ...(isConfiguredUrl(siteConfig.whatsapp)
      ? [
          {
            key: "whatsapp",
            href: siteConfig.whatsapp,
            icon: MessageCircle,
            label: labels.whatsapp,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
        {sectionLabel}
      </p>
      <div className="flex flex-wrap gap-3" role="list" aria-label={sectionLabel}>
        {links.map(({ key, href, icon: Icon, label, external }, index) => (
          <motion.a
            key={key}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ y: -2 }}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-dark",
              "transition-colors duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
            aria-label={label}
            role="listitem"
          >
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
