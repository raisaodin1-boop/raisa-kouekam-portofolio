import { siteConfig } from "@/data/site";

type JsonLdProps = {
  locale: string;
  description: string;
};

export function JsonLd({ locale, description }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    email: siteConfig.email,
    jobTitle: "Full Stack Software Engineer",
    description,
    sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Web Development",
      "E-commerce",
      "Fintech",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
