"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[92vh] flex-col items-center justify-center gap-12 overflow-hidden px-6 py-24"
    >
      <motion.div className="text-center" style={{ y: titleY, opacity: titleOpacity }}>
        <p className="section-kicker">House of Slytherin</p>
        <h1 className="display-title mt-4">Secret Archive</h1>
      </motion.div>

      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div className="space-y-6 text-center md:text-left" style={{ y: textY }}>
          <p className="intro-text">Welcome, I am</p>
          <h2
            className="text-3xl font-semibold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Phan Minh Khoa
          </h2>
          <p className="body-text max-w-xl">
            A visual designer crafting cinematic interfaces that feel ancient and
            modern at once. I build immersive digital scenes with rhythm, light,
            and quiet magic.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Magnetic>
              <a href="#projects" className="cta-button">
                Explore Works
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="ghost-button">
                Open Channel
              </a>
            </Magnetic>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 text-left md:max-w-md">
            {[
              { label: "Focus", value: "Visual Design" },
              { label: "Mood", value: "Dark Fantasy" },
              { label: "Toolkit", value: "Figma, Adobe" },
              { label: "Year", value: "2026" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="section-kicker" style={{ letterSpacing: "0.22em" }}>{item.label}</p>
                <p className="body-text text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="relative flex items-center justify-center" style={{ y: avatarY }}>
          <div className="absolute -inset-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 blur-2xl" />
          <div className="absolute -top-12 right-10 h-20 w-4 rounded-full bg-[#d8c7a1] opacity-70 blur-[1px] shadow-[0_0_20px_rgba(216,199,161,0.6)]" />
          <div className="absolute -top-2 right-12 h-6 w-6 rounded-full bg-[#3faf7a] blur-md" />
          <motion.div
            className="floating relative h-80 w-64 overflow-hidden rounded-[44px] border border-emerald-500/20 bg-gradient-to-b from-[#0b3d2e]/50 to-[#050505] p-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <Image
              src="/asset/avatar.png"
              alt="Avatar"
              width={300}
              height={420}
              className="h-full w-full rounded-[36px] object-contain"
              priority
            />
            <div className="absolute inset-x-6 bottom-6 rounded-full border border-emerald-200/20 bg-emerald-500/10 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-emerald-100/80">
              Visual Alchemist
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#c7cdd6]"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 4 L10 16 M4 10 L10 16 L16 10" />
        </svg>
      </motion.div>
    </section>
  );
}
