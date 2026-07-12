"use client";

import { ExperienceCard } from "@/components/experience/ExperienceCard";
import type { ExperienceItemContent } from "@/components/experience/types";
import {
  experienceKeys,
  type ExperienceKey,
} from "@/data/experience";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

type ExperienceTimelineProps = {
  items: Record<ExperienceKey, ExperienceItemContent>;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative" aria-label="Professional experience timeline">
      <div
        className="absolute bottom-0 left-[7px] top-0 w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden
      />

      {experienceKeys.map((key, index) => {
        const item = items[key];
        const isLeft = index % 2 === 0;
        const isLast = index === experienceKeys.length - 1;

        return (
          <motion.li
            key={key}
            className={cn("relative pb-12 last:pb-0", isLast && "pb-0")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="absolute left-0 top-7 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-white lg:left-1/2 lg:-translate-x-1/2"
              aria-hidden
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>

            <div
              className={cn(
                "pl-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:pl-0 xl:gap-16",
                !isLeft && "lg:[&>div:first-child]:order-2"
              )}
            >
              <div
                className={cn(
                  isLeft
                    ? "lg:col-start-1 lg:pr-6 xl:pr-10"
                    : "lg:col-start-2 lg:pl-6 xl:pl-10"
                )}
              >
                <ExperienceCard
                  title={item.title}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                  highlightsLabel={item.highlightsLabel}
                  highlights={item.highlights}
                />
              </div>

              <div
                className="hidden lg:block"
                aria-hidden
              />
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
