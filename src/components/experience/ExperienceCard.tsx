type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  highlightsLabel: string;
  highlights: string[];
};

export function ExperienceCard({
  title,
  company,
  period,
  description,
  highlightsLabel,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-dark sm:text-xl">{title}</h3>
          <p className="mt-1 text-sm font-medium text-primary sm:text-base">
            {company}
          </p>
        </div>
        <time
          dateTime={period}
          className="shrink-0 rounded-xl border border-border/80 bg-light-gray px-3 py-1.5 text-xs font-medium text-muted sm:text-sm"
        >
          {period}
        </time>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
        {description}
      </p>

      <div className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
          {highlightsLabel}
        </p>
        <ul className="grid gap-2 sm:grid-cols-2" role="list">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-muted"
              role="listitem"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
