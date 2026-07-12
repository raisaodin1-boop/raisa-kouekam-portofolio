export function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          About
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <p className="leading-relaxed text-muted">
            I&apos;m a software developer passionate about building web
            experiences that are fast, accessible, and delightful to use. I enjoy
            working across the stack — from polished front-end interfaces to
            reliable backend services.
          </p>
          <p className="leading-relaxed text-muted">
            When I&apos;m not coding, I&apos;m exploring new technologies,
            contributing to open source, and continuously learning. This
            portfolio is built with Next.js 15, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
