"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Cover() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-linear-to-b from-[#1a0b3d] via-[#2b0f6b] to-[#5a1c6e] overflow-hidden">

      {/* 🌌 Stars background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle,#ffffff22_1px,transparent_1px)] 
        bg-size-[40px_40px]
        opacity-40
      "></div>

      {/* 🔥 Glow background */}
      <div className="absolute w-[800px] h-[800px] 
        bg-[#ff8c00]/20 blur-[150px] rounded-full
        animate-[pulse_4s_ease-in-out_infinite]"
      ></div>

      <div className="text-center z-10 px-6">

        {/* 🎯 TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            textShadow:
              "0 0 20px #4b72ff, 0 0 40px #1491ff, 0 0 80px #1491ff",
          }}
          transition={{ duration: 1 }}
          className="
          display-title
          text-[60px] md:text-[120px] font-extrabold tracking-wide
          bg-linear-to-b from-[#1491ff] to-[#4b72ff]
          bg-clip-text text-transparent
          [text-shadow:
  0_0_10px_#1491ff,
  0_0_20px_#1491ff,
  0_0_40px_#4b72ff,
  0_0_80px_#4b72ff
]
        "
        onClick={() => router.push("/Home")}
        >
          PORTFOLIO
        </motion.h1>

        {/* 👤 NAME */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
         className="font-(--font-text) mt-6 text-2xl md:text-3xl text-white tracking-wide"
        >
          Phan Minh Khoa
        </motion.h2>

        {/* 📅 YEAR */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-(--font-text) text-white/60 text-lg tracking-widest"
        >
          2026
        </motion.p>

        {/* 🚀 BUTTON */}
        <motion.button
          onClick={() => router.push("/Home")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}

          // 👇 Hover mượt, không delay
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}

          className="font-[var(--font-title)]
            mt-10 px-8 py-3 rounded-full
            bg-gradient-to-r from-[#1491ff] to-[#4b72ff]
            text-black font-semibold tracking-wide
            shadow-lg

            hover:shadow-[0_0_20px_#ffb347,0_0_40px_#ff8c00,0_0_80px_#ff8c00]

            transition-transform duration-300
          "
        >
          Enter Portfolio →
        </motion.button>

      </div>
    </div>
  );
}