"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type ProjectImagePlaceholderProps = {
  title: string;
  gradient: string;
  icon?: LucideIcon;
  className?: string;
};

export function ProjectImagePlaceholder({
  title,
  gradient,
  icon: Icon = ImageIcon,
  className,
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02]",
        gradient,
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/30 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-dark/40" />
        </div>
        <span className="text-sm font-semibold uppercase tracking-widest text-dark/30">
          {title}
        </span>
      </div>
    </div>
  );
}
