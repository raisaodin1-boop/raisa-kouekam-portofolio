"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  skills: readonly string[];
  icon: LucideIcon;
  index: number;
};

export function SkillCard({ title, skills, icon: Icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-border bg-white p-6 card-shadow transition-all duration-300 hover:card-shadow-hover"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-dark">{title}</h3>
      <ul className="mt-4 space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
