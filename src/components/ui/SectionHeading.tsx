import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
  headingId?: string;
};

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
  level = "h2",
  headingId,
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Heading
        id={headingId}
        className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
