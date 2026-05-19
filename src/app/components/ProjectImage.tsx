"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";

const FALLBACK_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23030403'/%3E%3Cstop offset='55%25' stop-color='%230b3d2e'/%3E%3Cstop offset='100%25' stop-color='%23050705'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Cpath d='M120 640h960' stroke='%233faf7a' stroke-width='2' opacity='0.25'/%3E%3Cpath d='M120 680h520' stroke='%23c7cdd6' stroke-width='1' opacity='0.2'/%3E%3Ctext x='120' y='580' fill='%23d8c7a1' font-family='Cormorant Garamond, serif' font-size='42' opacity='0.6'%3EImage placeholder%3C/text%3E%3C/svg%3E";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  ratioClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export default function ProjectImage({
  src,
  alt,
  className,
  ratioClassName = "aspect-[16/9]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  const safeSrc = useMemo(() => (hasError ? FALLBACK_DATA_URI : src), [hasError, src]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[32px] border border-emerald-500/20 bg-[#050705] shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
        ratioClassName,
        className,
      )}
    >
      <Image
        src={safeSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition duration-700",
          hasError ? "opacity-80" : "hover:scale-[1.02]",
        )}
        onError={() => setHasError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}
