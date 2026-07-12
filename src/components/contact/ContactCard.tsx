import type { LucideIcon } from "lucide-react";

type ContactCardProps = {
  title: string;
  lines: string[];
  icon: LucideIcon;
  href?: string;
};

export function ContactCard({ title, lines, icon: Icon, href }: ContactCardProps) {
  const content = (
    <>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </div>
      <h3 className="text-sm font-semibold text-dark">{title}</h3>
      <div className="mt-2 space-y-1">
        {lines.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-muted">
            {line}
          </p>
        ))}
      </div>
    </>
  );

  const className =
    "group block rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover hover:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  if (href) {
    return (
      <a href={href} className={className} aria-label={`${title}: ${lines.join(", ")}`}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
