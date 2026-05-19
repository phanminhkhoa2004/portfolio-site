"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const DOOR_DURATION_MS = 900;

export default function PortalTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    setIsActive(true);

    if (prefersReduced) {
      setIsActive(false);
      return;
    }

    const timeout = window.setTimeout(() => setIsActive(false), DOOR_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [pathname, prefersReduced]);

  const doorTransition = {
    duration: prefersReduced ? 0.01 : 0.85,
    ease: [0.22, 1, 0.36, 1],
  };

  const overlayVariants = {
    enter: {
      opacity: 1,
      transition: { duration: prefersReduced ? 0.01 : 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: prefersReduced ? 0.01 : 0.3,
        delay: prefersReduced ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="relative z-10 min-h-screen w-full">{children}</div>

      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        initial={false}
        animate={isActive ? "enter" : "exit"}
        variants={overlayVariants}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(63,175,122,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(216,199,161,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle,_rgba(63,175,122,0.18)_1px,_transparent_1px)] [background-size:22px_22px]" />

        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 overflow-hidden will-change-transform"
          initial={false}
          animate={isActive ? "closed" : "open"}
          variants={{
            closed: { x: 0 },
            open: { x: "-110%", transition: doorTransition },
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(140deg,_#0a0f0c,_#171d19_55%,_#0a0f0c)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.06),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.5),_transparent)]" />
        </motion.div>

        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 overflow-hidden will-change-transform"
          initial={false}
          animate={isActive ? "closed" : "open"}
          variants={{
            closed: { x: 0 },
            open: { x: "110%", transition: doorTransition },
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(220deg,_#0a0f0c,_#171d19_55%,_#0a0f0c)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.06),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,0,0,0.5),_transparent)]" />
        </motion.div>

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,_rgba(63,175,122,0),_rgba(63,175,122,0.4),_rgba(63,175,122,0))] opacity-70" />
      </motion.div>
    </div>
  );
}
