import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { AnimateIn } from "@/components/ui/AnimateIn";

type AboutPortraitProps = {
  label: string;
};

export function AboutPortrait({ label }: AboutPortraitProps) {
  return (
    <AnimateIn direction="left" delay={0.1}>
      <ProfilePhoto alt={label} variant="portrait" />
    </AnimateIn>
  );
}
