type AboutHighlightCardProps = {
  title: string;
  description: string;
};

export function AboutHighlightCard({
  title,
  description,
}: AboutHighlightCardProps) {
  return (
    <article className="h-full rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover sm:p-7">
      <h3 className="text-base font-semibold text-dark sm:text-lg">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
        {description}
      </p>
    </article>
  );
}
