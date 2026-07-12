import { AnimateIn } from "@/components/ui/AnimateIn";

type AboutBioProps = {
  paragraphs: string[];
};

export function AboutBio({ paragraphs }: AboutBioProps) {
  return (
    <AnimateIn direction="right" delay={0.15}>
      <div className="space-y-5 sm:space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </AnimateIn>
  );
}
