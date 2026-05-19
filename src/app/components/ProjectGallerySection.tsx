"use client";

import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type GalleryVariant =
  | "mosaic"
  | "vertical"
  | "widescreen"
  | "process"
  | "moodboard"
  | "showcase";

type ProjectGallerySectionProps = {
  title: string;
  description?: string;
  images: string[];
  variant?: GalleryVariant;
  className?: string;
  fullBleed?: boolean;
};

type LayoutConfig = {
  gridClassName: string;
  sizes: string;
  imageClassName?: string;
  fit?: "cover" | "contain";
  frame?: "default" | "soft" | "transparent";
  getLayout: (index: number, total: number) => { ratio: string; span?: string };
};

const mosaicLayout: LayoutConfig = {
  gridClassName: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  getLayout: (index, total) => {
    if (total > 4 && index % 7 === 0) {
      return { ratio: "aspect-[21/9]", span: "md:col-span-2" };
    }
    if (index % 3 === 0) {
      return { ratio: "aspect-[4/3]" };
    }
    return { ratio: "aspect-[16/9]" };
  },
};

const verticalLayout: LayoutConfig = {
  gridClassName: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fit: "contain",
  frame: "soft",
  getLayout: (index) => (index % 4 === 0 ? { ratio: "aspect-[2/3]" } : { ratio: "aspect-[3/4]" }),
};

const widescreenLayout: LayoutConfig = {
  gridClassName: "grid gap-8",
  sizes: "100vw",
  imageClassName: "rounded-[40px]",
  getLayout: (index) => (index % 3 === 0 ? { ratio: "aspect-[21/9]" } : { ratio: "aspect-[16/9]" }),
};

const processLayout: LayoutConfig = {
  gridClassName: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fit: "contain",
  frame: "soft",
  getLayout: () => ({ ratio: "aspect-[4/3]" }),
};

const moodboardLayout: LayoutConfig = {
  gridClassName: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  fit: "cover",
  getLayout: (index) => (index % 5 === 0 ? { ratio: "aspect-[4/5]" } : { ratio: "aspect-[1/1]" }),
};

const showcaseLayout: LayoutConfig = {
  gridClassName: "grid gap-10",
  sizes: "100vw",
  imageClassName: "rounded-none md:rounded-[40px]",
  fit: "cover",
  getLayout: () => ({ ratio: "aspect-[21/9]" }),
};

const layoutMap: Record<GalleryVariant, LayoutConfig> = {
  mosaic: mosaicLayout,
  vertical: verticalLayout,
  widescreen: widescreenLayout,
  process: processLayout,
  moodboard: moodboardLayout,
  showcase: showcaseLayout,
};

export default function ProjectGallerySection({
  title,
  description,
  images,
  variant = "mosaic",
  className,
  fullBleed = false,
}: ProjectGallerySectionProps) {
  if (!images.length) {
    return null;
  }

  const layout = layoutMap[variant];

  return (
    <section
      className={cn(
        "relative z-10 mx-auto flex w-full flex-col gap-8 px-6 pb-20",
        fullBleed ? "max-w-none px-0" : "max-w-6xl md:px-10",
        className,
      )}
    >
      <Reveal>
        <div className={cn(fullBleed ? "px-6 md:px-10" : "")}> 
          <div className="flex items-center justify-between gap-4">
            <h2 className="section-title">{title}</h2>
            {description ? (
              <p className="body-text text-white/60">{description}</p>
            ) : null}
          </div>
        </div>
      </Reveal>

      <div className={cn(layout.gridClassName, fullBleed ? "px-6 md:px-10" : "")}> 
        {images.map((image, index) => {
          const { ratio, span } = layout.getLayout(index, images.length);

          return (
            <Reveal key={`${image}-${index}`} delay={0.03 * index}>
              <ProjectImage
                src={image}
                alt={`${title} ${index + 1}`}
                ratioClassName={ratio}
                sizes={layout.sizes}
                fit={layout.fit}
                frame={layout.frame}
                className={cn(layout.imageClassName, span)}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
