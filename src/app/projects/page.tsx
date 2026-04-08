"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import ParallaxBackground from "../components/ParallaxBackground";

const projects = [
  {
    number: "01",
    label: "Dự án 1",
    description: "Thiết kế bộ nhận diện thương hiệu Hoà Âm Việt",
  },
  {
    number: "02",
    label: "Dự án 2",
    description: "Thiết kế ứng dụng Website 3Technote",
  },
  {
    number: "03",
    label: "Dự án 3",
    description: "Thiết kế ứng dụng website AutoDouyin",
  },
  {
    number: "04",
    label: "Bổ sung",
    description: "Một số sản phẩm cá nhân",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full text-white">
      <ParallaxBackground />

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "linear-gradient(135deg, #3510a8, #5a2db8)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <Link href="/Home" className="group flex items-center">
            <Image
              src="/asset/nav-logo2.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="nav-text flex items-center gap-2 md:gap-3">
            <Link href="/Home" className="rounded-full px-5 py-2 text-base text-[#c8d0f0] transition-all hover:bg-white/8 hover:text-white md:text-lg">Home</Link>
            <Link href="/Home#about" className="rounded-full px-5 py-2 text-base text-[#c8d0f0] transition-all hover:bg-white/8 hover:text-white md:text-lg">About</Link>
            <Link href="/projects" className="rounded-full bg-white/8 px-5 py-2 text-base text-white md:text-lg">Lab</Link>
          </div>
        </div>
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #ffa50e 20%, #ff6464 40%, #a764ff 60%, #74ffa7 80%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      </nav>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-12 md:px-8">
        <Reveal>
          <h1
            className="section-title mb-14 text-center"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Mục lục
          </h1>
        </Reveal>

        {/* Project rows */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={i * 0.1}>
              <div className="project-row flex items-center gap-4 px-2 py-8 md:gap-8 md:px-4 md:py-10">
                {/* Number — Baloo, orange */}
                <span
                  className="nav-text shrink-0 text-center font-bold"
                  style={{
                    color: "#ffa50e",
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    width: "clamp(60px, 15vw, 160px)",
                    textShadow: "0 0 20px rgba(255,165,14,0.25)",
                  }}
                >
                  {project.number}
                </span>

                {/* Label — Baloo, white */}
                <span
                  className="nav-text shrink-0 font-bold text-white"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                    width: "clamp(100px, 22vw, 220px)",
                    textShadow: "0 0 12px rgba(255,255,255,0.08)",
                  }}
                >
                  {project.label}
                </span>

                {/* Description — Nunito */}
                <p
                  className="body-text flex-1 text-white/85"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)", lineHeight: 1.3 }}
                >
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
