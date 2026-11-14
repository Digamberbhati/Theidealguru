import Image from "next/image";

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function PhotoFrame({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: PhotoFrameProps) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] shadow-card ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
