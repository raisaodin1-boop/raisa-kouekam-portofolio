import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Skills
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Technologies and tools I use to bring ideas to life.
      </p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
