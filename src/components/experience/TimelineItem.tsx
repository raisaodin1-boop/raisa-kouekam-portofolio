"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type TimelineItemProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  index: number;
  isLast?: boolean;
};

export function TimelineItem({
  title,
  company,
  period,
  location,
  description,
  index,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white card-shadow">
          <Briefcase className="h-4 w-4 text-primary" aria-hidden />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-border" aria-hidden />
        )}
      </div>

      <div className="flex-1 rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:card-shadow-hover">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-dark">{title}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{company}</p>
          </div>
          <span className="rounded-lg bg-light-gray px-3 py-1 text-xs font-medium text-muted">
            {period}
          </span>
        </div>
        {location ? (
          <p className="mt-2 text-xs text-muted">{location}</p>
        ) : null}
        <p
          className={`text-sm leading-relaxed text-muted ${location ? "mt-4" : "mt-3"}`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
