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
          <h2 className="boxed-title section-title font-bold whitespace-nowrap">About me</h2>
          <div className="text-center">
            <p className="body-text leading-relaxed text-white/90" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}>
              Tôi là một sinh viên đang học và làm quen với thiết kế. Tôi thích những
              thứ đơn giản, màu sắc sáng và không quá phức tạp, hiện tại tôi vẫn đang
              luyện tập và thử nghiệm nhiều phong cách khác nhau.
            </p>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
