type AboutValueCardProps = {
  value: string;
};

export function AboutValueCard({ value }: AboutValueCardProps) {
  return (
    <article className="flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover sm:p-7">
      <span
        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      <p className="text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
        {value}
      </p>
    </article>
  );
}
