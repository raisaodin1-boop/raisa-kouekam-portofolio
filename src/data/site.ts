export const siteConfig = {
  name: "Raisa Kouekam",
  email: "raisakouekam@gmail.com",
  github: "https://github.com/raisaodin1-boop",
  linkedin: "",
  whatsapp: "https://wa.me/237696565654",
  whatsappDisplay: "+237 696 565 654",
  resumeUrl: "",
  url: "https://raisa-kouekam-portfolio.vercel.app",
};

export function isConfiguredUrl(url: string): boolean {
  return Boolean(url && url !== "#");
}

export const skillCategories = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
    "Responsive Design",
  ],
  backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "Python",
    "Authentication",
  ],
  database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL", "Data Modeling"],
  cloud: ["AWS", "Vercel", "Docker", "CI/CD", "Linux", "Cloud Deployment"],
  tools: ["Git", "Figma", "VS Code", "Jest", "Postman", "Agile/Scrum"],
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "French",
    "English",
  ],
} as const;

export type ProjectKey = "yorix" | "hodix" | "portfolio";

export const projectKeys: ProjectKey[] = ["yorix", "hodix", "portfolio"];

export const projectsData: Record<
  ProjectKey,
  {
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    gradient: string;
  }
> = {
  yorix: {
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500/25 via-primary/10 to-teal-500/20",
  },
  hodix: {
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Plaid API",
      "Docker",
    ],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-indigo-500/25 via-purple-500/10 to-blue-500/20",
  },
  portfolio: {
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "i18n",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/raisaodin1-boop/raisa-kouekam-portofolio",
    gradient: "from-teal-500/25 via-accent/10 to-primary/15",
  },
};

export const experienceKeys = ["role1", "role2", "role3"] as const;

export const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "experience", href: "/experience" },
  { key: "skills", href: "/skills" },
  { key: "contact", href: "/contact" },
] as const;

export const featuredProjectKeys: ProjectKey[] = ["yorix", "hodix"];

export const previewSkillKeys = [
  "frontend",
  "backend",
  "cloud",
] as const satisfies ReadonlyArray<keyof typeof skillCategories>;
