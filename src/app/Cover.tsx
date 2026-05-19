"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Magnetic from "./components/Magnetic";

export default function Cover() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030403] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(63,175,122,0.18)_0%,_transparent_55%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(11,61,46,0.55),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(3,4,3,0.2)_0%,_rgba(3,4,3,0.95)_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/10 blur-[1px]" />
      <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/15" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-kicker"
        >
          Slytherin Archive
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="display-title mt-4"
        >
          Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="intro-text mt-6"
        >
          Phan Minh Khoa
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="body-text mt-2 text-white/60"
        >
          2026
        </motion.p>

        <Magnetic className="mt-10 inline-block">
          <button
            onClick={() => router.push("/Home")}
            className="cta-button"
          >
            Enter Archive
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
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
