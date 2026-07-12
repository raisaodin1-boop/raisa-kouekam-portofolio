type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-xl border border-border/80 bg-light-gray px-3 py-1.5 text-sm font-medium text-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/5 hover:text-primary">
      {label}
    </span>
  );
}
