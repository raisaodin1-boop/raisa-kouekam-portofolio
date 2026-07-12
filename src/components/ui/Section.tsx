import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted";
};

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        variant === "muted" && "bg-light-gray border-y border-border/60",
        className
      )}
    >
      {children}
    </section>
  );
}
