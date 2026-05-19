"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PortalTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const contentControls = useAnimationControls();
  const [transitionKey, setTransitionKey] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setTransitionKey((current) => current + 1);
  }, [pathname]);

  useEffect(() => {
    if (transitionKey === 0 || prefersReduced) {
      return;
    }

    void contentControls.start({
      scale: [1, 1.02, 1],
      filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
      transition: {
        duration: 1.4,
        times: [0, 0.45, 1],
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [transitionKey, prefersReduced, contentControls]);

  const doorTransition = {
    duration: prefersReduced ? 0.01 : 1.4,
    ease: [0.22, 1, 0.36, 1],
  };

  const overlayFade = {
    duration: prefersReduced ? 0.01 : 0.6,
    delay: prefersReduced ? 0 : 1.05,
    ease: "easeOut",
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        className="relative z-10 min-h-screen w-full"
        animate={contentControls}
      >
        {children}
      </motion.div>

      {!prefersReduced && transitionKey > 0 ? (
        <motion.div
          key={transitionKey}
          className="pointer-events-none fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={overlayFade}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.65 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(63,175,122,0.35),_transparent_60%)] blur-[20px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(216,199,161,0.2),_transparent_72%)]" />
            <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle,_rgba(63,175,122,0.25)_1px,_transparent_1px)] [background-size:22px_22px]" />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 0.8, scale: 1.05, filter: "blur(18px)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute left-1/2 top-1/2 h-[90vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(63,175,122,0.65),_transparent_70%)]" />
            <div className="absolute left-1/2 top-1/2 h-[70vh] w-[30vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(10,17,14,0.9),_transparent_65%)]" />
          </motion.div>

          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"
            initial="closed"
            animate="open"
            variants={{
              closed: { x: 0 },
              open: { x: "-110%", transition: doorTransition },
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(140deg,_#0a0f0c,_#171d19_55%,_#0a0f0c)] shadow-[inset_-20px_0_40px_rgba(0,0,0,0.7)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.08),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6),_transparent)]" />
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_1px,_transparent_1px)] [background-size:18px_18px]" />
          </motion.div>

          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
            initial="closed"
            animate="open"
            variants={{
              closed: { x: 0 },
              open: { x: "110%", transition: doorTransition },
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(220deg,_#0a0f0c,_#171d19_55%,_#0a0f0c)] shadow-[inset_20px_0_40px_rgba(0,0,0,0.7)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.08),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,0,0,0.6),_transparent)]" />
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_1px,_transparent_1px)] [background-size:18px_18px]" />
          </motion.div>

          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,_rgba(63,175,122,0),_rgba(63,175,122,0.45),_rgba(63,175,122,0))] opacity-70" />
        </motion.div>
      ) : null}
    </div>
  );
}
