import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProfilePhotoProps = {
  alt: string;
  variant?: "circle" | "portrait";
  priority?: boolean;
  className?: string;
};

const variantStyles = {
  circle: "rounded-full object-cover object-top",
  portrait: "rounded-2xl object-cover object-top",
};

const variantSizes = {
  circle: {
    wrapper: "relative overflow-hidden rounded-full border border-border bg-light-gray shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
    defaultClassName: "h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72",
    sizes: "(max-width: 1024px) 256px, 288px",
  },
  portrait: {
    wrapper:
      "relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-light-gray card-shadow lg:mx-0 lg:max-w-none",
    defaultClassName: "",
    sizes: "(max-width: 1024px) 384px, 480px",
  },
};

export function ProfilePhoto({
  alt,
  variant = "circle",
  priority = false,
  className,
}: ProfilePhotoProps) {
  const styles = variantSizes[variant];

  return (
    <div
      className={cn(
        styles.wrapper,
        styles.defaultClassName,
        variant === "portrait" && className
      )}
    >
      <Image
        src={siteConfig.profilePhoto}
        alt={alt}
        fill
        priority={priority}
        sizes={styles.sizes}
        className={cn(variantStyles[variant], variant === "portrait" && className)}
      />
    </div>
  );
}
