import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ProjectCoverImage({ src, alt, className }: ProjectCoverImageProps) {
  return (
    <div
      className={cn(
        "relative h-52 w-full overflow-hidden bg-light-gray",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
  );
}
