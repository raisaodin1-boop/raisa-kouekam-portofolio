import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg bg-light-gray px-2.5 py-1 text-xs font-medium text-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
