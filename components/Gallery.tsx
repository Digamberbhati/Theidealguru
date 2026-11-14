import type { GalleryPhoto } from "@/components/Lightbox";
import { Lightbox } from "@/components/Lightbox";

interface GalleryProps {
  photos: readonly GalleryPhoto[];
}

export function Gallery({ photos }: GalleryProps) {
  return <Lightbox photos={photos} />;
}
