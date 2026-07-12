import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
};

export function PageContainer({
  children,
  className,
  as: Tag = "div",
  id,
}: PageContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto max-w-6xl px-6 py-24 sm:py-28", className)}
    >
      {children}
    </Tag>
  );
}
