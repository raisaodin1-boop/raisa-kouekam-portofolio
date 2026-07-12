import { ProjectImagePlaceholder } from "@/components/projects/ProjectImagePlaceholder";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { ExternalLink, GitBranch, type LucideIcon } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  icon?: LucideIcon;
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
  icon,
  labels,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover">
      <ProjectImagePlaceholder
        title={title}
        gradient={gradient}
        icon={icon}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-dark transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        <div className="mt-6">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted">
            {labels.techStack}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                className="transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted">
            {labels.features}
          </p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
          <LinkButton
            href={liveUrl}
            external
            variant="primary"
            className="text-sm"
            aria-label={`${labels.liveDemo} — ${title}`}
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            {labels.liveDemo}
          </LinkButton>
          <LinkButton
            href={githubUrl}
            external
            variant="outline"
            className="text-sm"
            aria-label={`${labels.github} — ${title}`}
          >
            <GitBranch className="h-4 w-4" aria-hidden />
            {labels.github}
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
