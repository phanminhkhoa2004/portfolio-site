"use client";

import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section id="about" ref={sectionRef} className="relative py-16">
      <Reveal>
        <motion.div className="section-panel boxed-section" style={{ y: parallaxY }}>
          <span className="boxed-title">About</span>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="section-kicker">Origin Story</p>
              <h2 className="section-title mt-3">A quiet fascination with light</h2>
              <p className="body-text mt-5">
                I am a student learning design, drawn to immersive spaces, soft light,
                and thoughtful composition. Each project is an exercise in identity,
                motion, and visual emotion.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Prioritize clarity and bold identity.",
                "Build emotion through light and shadow.",
                "Experiment across styles to find a narrative voice.",
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="body-text">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
