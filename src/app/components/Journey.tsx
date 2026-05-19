"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    year: "2022",
    title: "First Sparks",
    description:
      "Began exploring visual storytelling through posters and moodboards.",
  },
  {
    year: "2024",
    title: "Design Discipline",
    description:
      "Focused on composition, typographic rhythm, and spatial balance.",
  },
  {
    year: "2026",
    title: "Cinematic Systems",
    description:
      "Building immersive scenes with motion, depth, and premium polish.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-16">
      <Reveal>
        <div className="section-panel boxed-section">
          <span className="boxed-title">Journey</span>
          <p className="section-kicker">Experience</p>
          <h2 className="section-title mt-2">A timeline of crafted atmosphere</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.year}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <p className="section-kicker">{step.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="body-text mt-3 text-white/75">{step.description}</p>
                <div className="absolute right-4 top-4 h-6 w-6 rounded-full bg-[#3faf7a]/40 blur-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
