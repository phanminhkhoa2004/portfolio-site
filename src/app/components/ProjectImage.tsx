"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";

const FALLBACK_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23030403'/%3E%3Cstop offset='55%25' stop-color='%230b3d2e'/%3E%3Cstop offset='100%25' stop-color='%23050705'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Cpath d='M120 640h960' stroke='%233faf7a' stroke-width='2' opacity='0.25'/%3E%3Cpath d='M120 680h520' stroke='%23c7cdd6' stroke-width='1' opacity='0.2'/%3E%3Ctext x='120' y='580' fill='%23d8c7a1' font-family='Cormorant Garamond, serif' font-size='42' opacity='0.6'%3EImage placeholder%3C/text%3E%3C/svg%3E";

const IMAGE_EXTENSIONS = ["webp", "png", "jpg", "jpeg", "avif"];

type MediaFit = "cover" | "contain";
type MediaFrame = "default" | "soft" | "transparent";

type ProjectImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  ratioClassName?: string;
  fit?: MediaFit;
  frame?: MediaFrame;
  enableLightbox?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function ProjectImage({
  src,
  alt,
  className,
  ratioClassName = "aspect-[16/9]",
  fit = "cover",
  frame = "default",
  enableLightbox = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const [attemptIndex, setAttemptIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHasError(false);
    setAttemptIndex(0);
  }, [src]);

  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const candidateSources = useMemo(() => {
    if (!src) return [FALLBACK_DATA_URI];
    const lowerSrc = src.toLowerCase();
    const match = lowerSrc.match(/\.(webp|png|jpg|jpeg|avif)$/);
    if (!match) return [src];

    const base = src.slice(0, -match[0].length);
    const preferred = match[1];
    const fallbacks = IMAGE_EXTENSIONS.filter((ext) => ext !== preferred).map(
      (ext) => `${base}.${ext}`,
    );

    return [src, ...fallbacks];
  }, [src]);

  const safeSrc = useMemo(() => {
    if (hasError) return FALLBACK_DATA_URI;
    return candidateSources[Math.min(attemptIndex, candidateSources.length - 1)] ?? FALLBACK_DATA_URI;
  }, [candidateSources, attemptIndex, hasError]);

  const isTransparentPng = typeof src === "string" && src.toLowerCase().endsWith(".png");
  const shouldContain = fit === "contain";
  const paddingClass = shouldContain ? "p-4 sm:p-5 md:p-6" : "p-0";
  const frameClass =
    frame === "transparent"
      ? "bg-[radial-gradient(circle_at_top,_rgba(63,175,122,0.18),_transparent_60%)]"
      : frame === "soft"
        ? "bg-[#070c09]"
        : "bg-[#050705]";
  const imageClassName = shouldContain ? "object-contain" : "object-cover";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[32px] border border-emerald-500/20 shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
        frameClass,
        shouldContain ? "border-emerald-500/25" : "border-emerald-500/20",
        ratioClassName,
        className,
      )}
    >
      <button
        type="button"
        onClick={() => {
          if (!enableLightbox) return;
          if (safeSrc === FALLBACK_DATA_URI) return;
          setIsOpen(true);
        }}
        className="absolute inset-0 z-10 cursor-zoom-in"
        aria-label={`Open ${alt} full size`}
      />
      <div className={cn("absolute inset-0", paddingClass)}>
        <div className="relative h-full w-full">
          <Image
            src={safeSrc}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            blurDataURL={FALLBACK_DATA_URI}
            className={cn(
              imageClassName,
              "transition duration-700",
              hasError ? "opacity-80" : "hover:scale-[1.02]",
              shouldContain ? "scale-[0.98]" : "",
              isTransparentPng && shouldContain ? "drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]" : "",
            )}
            onError={() => {
              if (attemptIndex < candidateSources.length - 1) {
                setAttemptIndex((current) => current + 1);
                return;
              }
              setHasError(true);
            }}
          />
        </div>
      </div>
      {!shouldContain ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      ) : null}

      {isOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 py-10"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[80vh] w-full overflow-hidden rounded-[28px] border border-emerald-500/25 bg-[#050705] shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
              <Image
                src={safeSrc}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
