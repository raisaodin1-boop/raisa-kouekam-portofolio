"use client";

import { AboutHighlightCard } from "@/components/about/AboutHighlightCard";
import type { AboutHighlight } from "@/components/about/types";
import { motion, type Variants } from "framer-motion";

type AboutHighlightsProps = {
  highlights: AboutHighlight[];
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function AboutHighlights({ highlights }: AboutHighlightsProps) {
  return (
    <motion.div
      className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={containerVariants}
      role="list"
      aria-label="Professional highlights"
    >
      {highlights.map((highlight) => (
        <motion.div key={highlight.title} variants={cardVariants} role="listitem">
          <AboutHighlightCard
            title={highlight.title}
            description={highlight.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
