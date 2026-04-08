"use client";

import Reveal from "./Reveal";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="py-16">
      <Reveal>
        <div className="section-panel flex flex-col items-center gap-6 text-center">
          <h2 className="section-title font-bold">Mục lục</h2>
          <p className="body-text max-w-lg text-white/70">
            Xem các dự án mà tôi đã thực hiện trong quá trình học tập và sáng tạo.
          </p>
          <Link href="/projects" className="cta-button">
            Xem dự án
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
        </div>
      </Reveal>
    </section>
  );
}
