import { siteConfig } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Contact
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Interested in working together or just want to say hello? Reach out —
        I&apos;d love to hear from you.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
