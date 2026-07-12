import { AnimateIn } from "@/components/ui/AnimateIn";

type PageSectionHeaderProps = {
  label: string;
  title: string;
  subtitle: string;
  headingId: string;
};

export function PageSectionHeader({
  label,
  title,
  subtitle,
  headingId,
}: PageSectionHeaderProps) {
  return (
    <AnimateIn>
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>
        <h1
          id={headingId}
          className="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
          {subtitle}
        </p>
      </header>
    </AnimateIn>
  );
}
