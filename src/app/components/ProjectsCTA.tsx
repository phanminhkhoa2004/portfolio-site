"use client";

import Reveal from "./Reveal";
import Link from "next/link";
import Magnetic from "./Magnetic";

export default function ProjectsCTA() {
  return (
    <section id="projects" className="py-16">
      <Reveal>
        <div className="section-panel flex flex-col items-center gap-6 text-center">
          <h2 className="section-title font-bold">Projects</h2>
          <p className="body-text max-w-lg text-white/70">
            Explore the cinematic case studies and visual experiments crafted in the
            Slytherin archive.
          </p>
          <Magnetic>
            <Link href="/projects" className="cta-button">
              Open Projects
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
            </Link>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
