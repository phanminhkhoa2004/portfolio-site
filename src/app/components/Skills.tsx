"use client";

import Reveal from "./Reveal";

const skills = [
  "Brand Identity",
  "Editorial Layout",
  "UI Visual Systems",
  "Cinematic Motion",
  "Typography Craft",
  "Color Atmosphere",
  "Figma",
  "Adobe Suite",
];

const education = [
  {
    year: "2022",
    name: "Phan Chau Trinh High School, Da Nang",
  },
  {
    year: "2024 — Now",
    name: "Viet-Han University of Information and Communication Technology, Da Nang",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <Reveal>
        <div className="flex flex-col items-stretch gap-6 md:flex-row">
          <div className="section-panel boxed-section flex-[0.55] p-8 pt-14 md:p-10 md:pt-16">
            <span className="boxed-title">Skills</span>
            <p className="section-kicker">Craft & Discipline</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.25em] text-emerald-100/80 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="section-panel boxed-section flex-[0.45] p-8 pt-14 md:p-10 md:pt-16">
            <span className="boxed-title">Education</span>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.name}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="section-kicker">{edu.year}</p>
                  <p className="body-text mt-2 text-white" style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)" }}>
                    {edu.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
