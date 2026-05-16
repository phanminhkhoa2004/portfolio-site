"use client";

import Reveal from "./Reveal";
import Image from "next/image";

const skills = [
  { src: "/asset/logo1.jpg", name: "Next.js" },
  { src: "/asset/logo2.png", name: "Illustrator" },
  { src: "/asset/logo3.png", name: "Photoshop" },
  { src: "/asset/logo4.svg", name: "Figma" },
];

const education = [
  {
    src: "/asset/logo5.png",
    name: "Phan Chau Trinh High School, Da Nang",
    round: true,
  },
  {
    src: "/asset/logo6.png",
    name: "Viet-Han University of Information and Communication Technology, Da Nang",
    round: false,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <Reveal>
        <div className="flex flex-col items-stretch gap-6 md:flex-row">
          {/* Skill Panel */}
          <div className="section-panel boxed-section flex-[0.45] p-8 pt-14 md:p-10 md:pt-16">
            <span className="boxed-title">Skills</span>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-black/40 p-2">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={70}
                      height={70}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="body-text text-white">{skill.name}</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/5">
                      <div className="h-1.5 w-[70%] rounded-full bg-[#3faf7a] shadow-[0_0_14px_rgba(63,175,122,0.45)]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Panel */}
          <div className="section-panel boxed-section flex-[0.55] p-8 pt-14 md:p-10 md:pt-16">
            <span className="boxed-title">Education</span>
            <div className="flex h-full flex-col justify-center gap-8">
              {education.map((edu) => (
                <div
                  key={edu.name}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/10"
                >
                  <div
                    className={`h-20 w-20 shrink-0 overflow-hidden ${
                      edu.round ? "rounded-full" : "rounded-lg"
                    } bg-white/5 p-1`}
                  >
                    <Image
                      src={edu.src}
                      alt={edu.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="body-text text-white" style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)" }}>
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
