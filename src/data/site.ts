export const siteConfig = {
  name: "Raisa Kouekam",
  email: "your.email@example.com",
  github: "https://github.com/raisaodin1-boop",
  linkedin: "https://linkedin.com/in/your-profile",
  whatsapp: "https://wa.me/0000000000",
  resumeUrl: "/resume.pdf",
  url: "https://raisa-kouekam-portfolio.vercel.app",
};

export const skillCategories = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "REST APIs", "GraphQL", "Python"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
  cloud: ["AWS", "Vercel", "Docker", "CI/CD", "Linux"],
  tools: ["Git", "Figma", "VS Code", "Jest", "Postman"],
  languages: ["JavaScript", "TypeScript", "Python", "SQL", "French", "English"],
} as const;

export type ProjectKey = "yorix" | "hodix" | "portfolio";

export const projectsData: Record<
  ProjectKey,
  { techStack: string[]; liveUrl: string; githubUrl: string; gradient: string }
> = {
  yorix: {
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500/20 to-teal-500/20",
  },
  hodix: {
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  portfolio: {
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/raisaodin1-boop/raisa-kouekam-portofolio",
    gradient: "from-teal-500/20 to-blue-500/20",
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
