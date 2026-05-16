"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PortalTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative w-full h-full"
        initial={{
          clipPath: "circle(0% at 50% 50%)",
          scale: 1.1,
        }}
        animate={{
          clipPath: "circle(150% at 50% 50%)",
          scale: 1,
        }}
        exit={{
          clipPath: "circle(0% at 50% 50%)",
          scale: 0.9,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d2e]/40 via-[#3faf7a]/20 to-[#0b3d2e]/40 blur-[140px] pointer-events-none" />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
