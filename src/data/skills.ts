import {
  Bot,
  Code2,
  Database,
  Globe,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillCategoryKey =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "engineering"
  | "ai"
  | "learning";

export const skillCategoryKeys: SkillCategoryKey[] = [
  "frontend",
  "backend",
  "database",
  "devops",
  "engineering",
  "ai",
  "learning",
];

export const skillCategoryItems: Record<
  SkillCategoryKey,
  readonly string[]
> = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST API",
    "Authentication",
    "API Integration",
  ],
  database: ["PostgreSQL", "MySQL", "MongoDB"],
  devops: ["Git", "GitHub", "Docker", "Vercel", "VS Code"],
  engineering: [
    "Clean Code",
    "Responsive Design",
    "Accessibility",
    "SEO",
    "Performance Optimization",
    "Component Architecture",
    "Reusable Code",
  ],
  ai: [
    "Cursor",
    "Claude (Anthropic)",
    "GitHub Copilot",
    "Structured AI Workflow",
    "Code Review & Ownership",
  ],
  learning: ["Cloud Computing", "CI/CD", "Microservices", "System Design"],
};

export const skillCategoryIcons: Record<SkillCategoryKey, LucideIcon> = {
  frontend: Globe,
  backend: Server,
  database: Database,
  devops: Wrench,
  engineering: Code2,
  ai: Bot,
  learning: Sparkles,
};
