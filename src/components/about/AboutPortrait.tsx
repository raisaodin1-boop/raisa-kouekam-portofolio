import { AnimateIn } from "@/components/ui/AnimateIn";
import { User } from "lucide-react";

type AboutPortraitProps = {
  label: string;
};

export function AboutPortrait({ label }: AboutPortraitProps) {
  return (
    <AnimateIn direction="left" delay={0.1}>
      <div
        className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-light-gray card-shadow lg:mx-0 lg:max-w-none"
        role="img"
        aria-label={label}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-white shadow-sm">
            <User className="h-9 w-9 text-muted/60" strokeWidth={1.5} aria-hidden />
          </div>
          <span className="text-sm font-medium tracking-wide text-muted/70">
            Portrait
          </span>
        </div>
      </div>
    </AnimateIn>
  );
}
