"use client";

import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import type { ProjectShowcaseItem } from "@/lib/projects";

type ProjectShowcaseSectionProps = {
  title: string;
  description?: string;
  items: ProjectShowcaseItem[];
  className?: string;
};

const orientationRatios: Record<ProjectShowcaseItem["orientation"], string> = {
  banner: "aspect-[21/9]",
  horizontal: "aspect-[16/9]",
  vertical: "aspect-[3/4]",
};

export default function ProjectShowcaseSection({
  title,
  description,
  items,
  className,
}: ProjectShowcaseSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section
      className={cn(
        "relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 md:px-10",
        className,
      )}
    >
      <Reveal>
        <div className="space-y-3">
          <p className="section-kicker">Archive Sequence</p>
          <h2 className="section-title">{title}</h2>
          {description ? <p className="body-text text-white/65">{description}</p> : null}
        </div>
      </Reveal>

      <div className="flex flex-col gap-10">
        {items.map((item, index) => {
          const ratioClassName = orientationRatios[item.orientation];
          const isEven = index % 2 === 0;
          const fit = item.fit ?? (item.orientation === "vertical" ? "contain" : "cover");
          const frame = item.frame ?? (fit === "contain" ? "transparent" : "default");

          return (
            <div
              key={`${item.title}-${index}`}
              className="rounded-[32px] border border-white/10 bg-black/30 p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className={cn(isEven ? "lg:order-1" : "lg:order-2")}>
                  <Reveal>
                    <ProjectImage
                      src={item.image}
                      alt={item.title}
                      ratioClassName={ratioClassName}
                      fit={fit}
                      frame={frame}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                    />
                  </Reveal>
                </div>

                <div
                  className={cn(
                    "flex flex-col gap-3",
                    isEven ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <Reveal delay={0.05}>
                    <p className="section-kicker" style={{ letterSpacing: "0.2em" }}>
                      Scene {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="section-title"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="body-text text-white/75">{item.description}</p>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
