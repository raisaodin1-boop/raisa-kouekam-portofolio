import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A selection of work I&apos;m proud of. More coming soon.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={
                project.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex flex-col rounded-2xl border border-white/10 bg-background p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
