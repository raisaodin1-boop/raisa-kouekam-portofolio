"use client";

import { AboutValueCard } from "@/components/about/AboutValueCard";
import type { AboutValue } from "@/components/about/types";
import { motion, type Variants } from "framer-motion";

type AboutValuesProps = {
  title: string;
  items: AboutValue[];
  ariaLabel: string;
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

export function AboutValues({ title, items, ariaLabel }: AboutValuesProps) {
  return (
    <section className="mt-16 sm:mt-20" aria-labelledby="about-values-heading">
      <h2
        id="about-values-heading"
        className="text-xl font-semibold text-dark sm:text-2xl"
      >
        {title}
      </h2>
      <motion.ul
        className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
        aria-label={ariaLabel}
      >
        {items.map((item) => (
          <motion.li key={item} variants={cardVariants}>
            <AboutValueCard value={item} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
