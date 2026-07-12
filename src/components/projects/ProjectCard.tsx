import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";
import { ExternalLink, GitBranch } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  labels: {
    liveDemo: string;
    github: string;
    features: string;
    techStack: string;
  };
};

export function ProjectCard({
  title,
  description,
  features,
  techStack,
  liveUrl,
  githubUrl,
  gradient,
  labels,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white card-shadow transition-all duration-300 hover:card-shadow-hover">
      <div
        className={cn(
          "relative flex h-48 items-center justify-center bg-gradient-to-br",
          gradient
        )}
        aria-hidden
      >
        <span className="text-3xl font-bold text-dark/20">{title}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
            {labels.techStack}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
            {labels.features}
          </p>
          <ul className="space-y-1.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton
            href={liveUrl}
            external
            variant="primary"
            className="text-xs px-4 py-2"
            aria-label={`${labels.liveDemo} — ${title}`}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            {labels.liveDemo}
          </LinkButton>
          <LinkButton
            href={githubUrl}
            external
            variant="outline"
            className="text-xs px-4 py-2"
            aria-label={`${labels.github} — ${title}`}
          >
            <GitBranch className="h-3.5 w-3.5" aria-hidden />
            {labels.github}
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
