"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { type ProjectDetail, getProjectAssetPath } from "@/lib/projects";
import Magnetic from "./Magnetic";
import ProjectGallerySection from "./ProjectGallerySection";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

const heroSizes = "(max-width: 768px) 100vw, 90vw";

export default function ProjectDetailView({ project }: { project: ProjectDetail }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const coverImage = project.media.cover ?? getProjectAssetPath(project, "cover.webp");

  return (
    <main className="relative min-h-screen w-full text-white">
      <section ref={heroRef} className="relative overflow-hidden pb-16 pt-12 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(63,175,122,0.22),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(216,199,161,0.16),_transparent_45%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="section-kicker">Project Archive</p>
                <h1
                  className="section-title mt-4"
                  style={{ fontSize: "clamp(2.6rem, 6vw, 5.4rem)" }}
                >
                  {project.title}
                </h1>
                <p className="intro-text mt-3 max-w-2xl text-white/80">{project.tagline}</p>
              </div>

              <Magnetic>
                <Link href="/projects" className="ghost-button">
                  Back to Archive
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="body-text max-w-3xl text-white/70">{project.overview}</p>
          </Reveal>

          <motion.div style={{ scale: heroScale, filter: heroBlur, opacity: heroOpacity }}>
            <ProjectImage
              src={coverImage}
              alt={`${project.title} cover`}
              ratioClassName="aspect-[16/9]"
              sizes={heroSizes}
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-10 md:grid-cols-3 md:px-10">
        {[
            { label: "Role", value: project.role.join(" / ") },
            { label: "Tools", value: project.tools.join(" / ") },
          { label: "Timeline", value: project.timeline },
        ].map((item) => (
          <Reveal key={item.label} delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="section-kicker" style={{ letterSpacing: "0.25em" }}>
                {item.label}
              </p>
              <p className="body-text mt-3 text-white">{item.value}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 md:px-10">
        <Reveal>
          <div className="section-panel">
            <p className="section-kicker">Design Process</p>
            <h2 className="section-title mt-3">How The Scene Was Forged</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {project.process.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="section-kicker" style={{ letterSpacing: "0.2em" }}>
                    {step.title}
                  </p>
                  <p className="body-text mt-3 text-white/80">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-[#0b3d2e]/30 to-[#050705] p-7">
              <p className="section-kicker">Highlights</p>
              <h2 className="section-title mt-3">Visual Story Beats</h2>
              <ul className="mt-6 space-y-3 text-white/80">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="body-text">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="section-kicker">Inspirations</p>
              <h2 className="section-title mt-3">Source Signals</h2>
              <ul className="mt-6 space-y-3 text-white/80">
                {project.inspirations.map((inspiration) => (
                  <li key={inspiration} className="body-text">
                    {inspiration}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <ProjectGallerySection
        title="Visual Gallery"
        description="Cinematic stills from the archive."
        images={project.media.gallery}
        variant="mosaic"
      />

      <ProjectGallerySection
        title="Widescreen Frames"
        description="Epic establishing shots and cinematic panoramas."
        images={project.media.widescreen}
        variant="widescreen"
      />

      <ProjectGallerySection
        title="Vertical Studies"
        description="Portrait-focused frames for tall compositions."
        images={project.media.vertical}
        variant="vertical"
      />

      <ProjectGallerySection
        title="Process Screens"
        description="Key UI frames and iterative snapshots."
        images={project.media.process}
        variant="process"
      />

      <ProjectGallerySection
        title="Moodboard Vault"
        description="Atmospheric references, texture pulls, and tonal anchors."
        images={project.media.moodboard}
        variant="moodboard"
      />

      <ProjectGallerySection
        title="Full-Width Showcase"
        description="Signature hero stills presented at full scale."
        images={project.media.showcase}
        variant="showcase"
        fullBleed
      />
    </main>
  );
}
