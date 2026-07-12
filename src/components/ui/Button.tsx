import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/20",
  secondary: "bg-dark text-white hover:bg-dark/90 shadow-sm",
  ghost: "text-dark hover:bg-light-gray",
  outline:
    "border border-border text-dark hover:border-primary hover:text-primary bg-white",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { variants as buttonVariants };
