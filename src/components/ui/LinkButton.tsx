import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = keyof typeof buttonVariants;

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  external?: boolean;
  download?: string;
};

export function LinkButton({
  variant = "primary",
  className,
  external,
  download,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        buttonVariants[variant],
        className
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
      {...props}
    />
  );
}
