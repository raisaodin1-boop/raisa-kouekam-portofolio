"use client";

import { AchievementStatCard } from "@/components/experience/AchievementStatCard";
import type { ExperienceAchievement } from "@/components/experience/types";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { motion, type Variants } from "framer-motion";

type ExperienceAchievementsProps = {
  title: string;
  achievements: ExperienceAchievement[];
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

export function ExperienceAchievements({
  title,
  achievements,
}: ExperienceAchievementsProps) {
  return (
    <AnimateIn delay={0.1}>
      <section className="mt-20 sm:mt-24" aria-labelledby="experience-achievements-heading">
        <h2
          id="experience-achievements-heading"
          className="mb-8 text-center text-xl font-semibold text-dark sm:mb-10 sm:text-2xl"
        >
          {title}
        </h2>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          role="list"
          aria-label={title}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.label}
              variants={cardVariants}
              role="listitem"
            >
              <AchievementStatCard
                value={achievement.value}
                label={achievement.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimateIn>
  );
}
