"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorSpotlight() {
  const enabledRef = useRef(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || isCoarse) {
      enabledRef.current = false;
      setEnabled(false);
      return;
    }

    enabledRef.current = true;
    setEnabled(true);

    let rafId = 0;
    let lastX = "50%";
    let lastY = "50%";

    const commit = () => {
      rafId = 0;
      document.documentElement.style.setProperty("--spotlight-x", lastX);
      document.documentElement.style.setProperty("--spotlight-y", lastY);
    };

    const handler = (event: PointerEvent) => {
      if (!enabledRef.current) return;
      lastX = `${event.clientX}px`;
      lastY = `${event.clientY}px`;
      if (!rafId) {
        rafId = requestAnimationFrame(commit);
      }
    };

    window.addEventListener("pointermove", handler, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return <div className="cursor-spotlight" aria-hidden="true" />;
}
