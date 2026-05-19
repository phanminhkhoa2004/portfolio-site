"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

function startRaf() {
  if (rafId !== null || !lenisInstance) return;

  const raf = (time: number) => {
    lenisInstance?.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);
}

function stopRaf() {
  if (rafId === null) return;
  cancelAnimationFrame(rafId);
  rafId = null;
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 0.55,
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });
    }

    startRaf();

    const resume = () => {
      lenisInstance?.start();
      lenisInstance?.resize();
    };

    window.addEventListener("focus", resume);
    document.addEventListener("visibilitychange", resume);

    return () => {
      window.removeEventListener("focus", resume);
      document.removeEventListener("visibilitychange", resume);
      stopRaf();
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisInstance) return;
    lenisInstance.resize();
    lenisInstance.start();
  }, [pathname]);

  return null;
}
