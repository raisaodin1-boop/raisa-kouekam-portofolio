type AchievementStatCardProps = {
  value: string;
  label: string;
};

export function AchievementStatCard({ value, label }: AchievementStatCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 text-center card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:card-shadow-hover sm:p-7">
      <p className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
        {label}
      </p>
    </article>
  );
}
