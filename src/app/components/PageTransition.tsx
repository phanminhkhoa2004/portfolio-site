"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}

        // 👇 trạng thái ban đầu (page mới vào)
        initial={{
          opacity: 0,
          x: 100,
          rotateY: 45,
          scale: 1.1,
          filter: "blur(10px)",
        }}

        // 👇 khi hiển thị
        animate={{
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          filter: "blur(0px)",
        }}

        // 👇 khi thoát
        exit={{
          opacity: 0,
          x: -100,
          rotateY: -45,
          scale: 0.9,
          filter: "blur(10px)",
        }}

        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}

        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}