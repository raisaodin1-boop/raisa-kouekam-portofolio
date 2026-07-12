import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { GitBranch, Mail, Share2 } from "lucide-react";
import Link from "next/link";

type FooterProps = {
  dict: Dictionary;
};

const socialLinks = [
  { href: siteConfig.github, icon: GitBranch, label: "GitHub" },
  { href: siteConfig.linkedin, icon: Share2, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-light-gray">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <p className="mt-1 text-xs text-muted/70">{dict.footer.builtWith}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-xl border border-border bg-white p-2.5 text-muted transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
