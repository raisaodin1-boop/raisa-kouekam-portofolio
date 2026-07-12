import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Software Developer
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          {siteConfig.name}
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        I build clean, performant web applications with modern tools. Focused on
        thoughtful UX, maintainable code, and shipping products that matter.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
