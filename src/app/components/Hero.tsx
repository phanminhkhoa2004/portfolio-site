"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center gap-10 overflow-hidden px-6 py-20"
    >
      {/* Title — Bagel Fat One with gold gradient + stroke */}
      <motion.h1
        className="display-title text-center"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        Portfolio
      </motion.h1>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        {/* Avatar — transparent bg, parallax float */}
        <motion.div
          className="floating h-48 w-44 shrink-0 overflow-hidden md:h-64 md:w-56"
          style={{ y: avatarY }}
        >
          <Image
            src="/asset/avatar.png"
            alt="Avatar"
            width={267}
            height={400}
            className="h-full w-full object-contain"
            priority
          />
        </motion.div>

        {/* Intro text — Quicksand with stroke */}
        <motion.div className="text-center md:text-left" style={{ y: textY }}>
          <motion.p
            className="intro-text text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Xin chào, tôi là
          </motion.p>
          <motion.p
            className="intro-text font-bold"
            style={{
              color: "#37d471",
              textShadow: "0 0 24px rgba(55, 212, 113, 0.3)",
              WebkitTextStroke: "0.5px rgba(255,255,255,0.1)",
              paintOrder: "stroke fill",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Phan Minh Khoa
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        >
          <path d="M10 4 L10 16 M4 10 L10 16 L16 10" />
        </svg>
      </motion.div>
    </section>
  );
}
