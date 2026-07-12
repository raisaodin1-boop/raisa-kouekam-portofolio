"use client";

import { SkillCard } from "@/components/skills/SkillCard";
import type { SkillCategoryContent } from "@/components/skills/types";
import {
  skillCategoryIcons,
  skillCategoryItems,
  skillCategoryKeys,
  type SkillCategoryKey,
} from "@/data/skills";
import { motion, type Variants } from "framer-motion";

type SkillsGridProps = {
  items: Record<SkillCategoryKey, SkillCategoryContent>;
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

export function SkillsGrid({ items }: SkillsGridProps) {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={containerVariants}
      role="list"
      aria-label="Skill categories"
    >
      {skillCategoryKeys.map((key) => {
        const category = items[key];
        const Icon = skillCategoryIcons[key];

        return (
          <motion.div key={key} variants={cardVariants} role="listitem">
            <SkillCard
              title={category.title}
              description={category.description}
              skills={skillCategoryItems[key]}
              icon={Icon}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
