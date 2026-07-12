import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProjectCoverImage({
  src,
  alt,
  className,
  priority = false,
}: ProjectCoverImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-[3/2] w-full overflow-hidden bg-light-gray",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
