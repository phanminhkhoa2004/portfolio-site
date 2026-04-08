"use client";

import Reveal from "./Reveal";
import Image from "next/image";

const skills = [
  { src: "/asset/logo1.jpg", name: "Notion" },
  { src: "/asset/logo2.png", name: "Illustrator" },
  { src: "/asset/logo3.png", name: "Photoshop" },
  { src: "/asset/logo4.svg", name: "Figma" },
];

const education = [
  {
    src: "/asset/logo5.png",
    name: "Trung học phổ thông Phan Châu Trinh, Đà Nẵng",
    round: true,
  },
  {
    src: "/asset/logo6.png",
    name: "Trường Đại học Công Nghệ thông tin và Truyền Thông Việt-Hàn, Đà Nẵng",
    round: false,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <Reveal>
        <div className="flex flex-col items-stretch gap-6 md:flex-row">
          {/* Skill Panel */}
          <div className="section-panel-skill boxed-section flex-[0.4] p-8 pt-14 md:p-10 md:pt-16">
            <h3 className="boxed-title section-title font-bold">Skill</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white/5 p-2 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={140}
                    height={140}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Education Panel */}
          <div className="section-panel-skill boxed-section flex-[0.6] p-8 pt-14 md:p-10 md:pt-16">
            <h3 className="boxed-title section-title font-bold">Education</h3>
            <div className="flex h-full flex-col justify-center gap-8">
              {education.map((edu) => (
                <div
                  key={edu.name}
                  className="flex items-center gap-5 rounded-2xl p-3 transition-colors duration-300 hover:bg-white/5"
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
                  <p className="body-text text-white" style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)" }}>
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
