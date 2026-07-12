import { AnimateIn } from "@/components/ui/AnimateIn";

type HomeMetric = {
  value: string;
  label: string;
};

type HomeMetricsProps = {
  metrics: HomeMetric[];
  ariaLabel: string;
};

export function HomeMetrics({ metrics, ariaLabel }: HomeMetricsProps) {
  return (
    <section className="border-y border-border bg-light-gray/50" aria-label={ariaLabel}>
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:py-12">
        <AnimateIn>
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {metrics.map((metric) => (
              <li key={metric.label} className="text-center">
                <p className="text-xl font-bold tracking-tight text-dark sm:text-2xl">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {metric.label}
                </p>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
}
