"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  photos: readonly GalleryPhoto[];
}

export function Lightbox({ photos }: LightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = selectedIndex !== null;
  const currentIndex = selectedIndex ?? 0;

  const close = useCallback(() => {
    setSelectedIndex(null);
    triggerRef.current?.focus();
  }, []);

  const navigate = useCallback((nextIndex: number) => {
    setSelectedIndex(nextIndex);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % photos.length));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + photos.length) % photos.length));
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [close, isOpen, photos.length]);

  const activePhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2">
        {photos.map((item, index) => (
          <figure key={item.src} className="mb-6 break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setSelectedIndex(index);
              }}
              aria-label={`Open enlarged view of: ${item.caption}`}
              className="group relative block w-full overflow-hidden rounded-[24px] bg-indigo/5 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </button>
            <figcaption className="mt-3 text-sm font-medium text-indigo">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {isOpen && activePhoto && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 text-white backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={() => navigate((currentIndex - 1 + photos.length) % photos.length)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <figure className="flex max-h-full max-w-5xl flex-col items-center">
            <div className="relative max-h-[75vh] w-full overflow-hidden rounded-[24px] shadow-card">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={1200}
                height={800}
                sizes="100vw"
                className="max-h-[75vh] w-auto rounded-[24px] object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center font-heading text-base font-medium text-white/90">
              {activePhoto.caption}
            </figcaption>
            <p className="mt-1 text-xs text-white/60">
              {currentIndex + 1} of {photos.length}
            </p>
          </figure>

          <button
            type="button"
            onClick={() => navigate((currentIndex + 1) % photos.length)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
