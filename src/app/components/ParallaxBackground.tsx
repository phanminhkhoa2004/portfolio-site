"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

function StarCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let viewportWidth = 0;
    let viewportHeight = 0;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      opacity: number;
      vx: number;
      vy: number;
      twinkleSpeed: number;
      twinklePhase: number;
      hue: number;
      saturation: number;
    }> = [];

    const resize = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      canvas.width = viewportWidth * dpr;
      canvas.height = viewportHeight * dpr;
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const starCount = Math.min(
        180,
        Math.max(100, Math.floor((viewportWidth * viewportHeight) / 12000))
      );
      stars = Array.from({ length: starCount }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * viewportWidth,
          y: Math.random() * viewportHeight,
          size: depth * 2.2 + 0.2,
          baseOpacity: depth * 0.4 + 0.1,
          opacity: Math.random() * 0.3,
          // Drift velocity — nearer particles drift faster
          vx: (Math.random() - 0.5) * 0.1 * (depth + 0.3),
          vy: (Math.random() - 0.5) * 0.07 * (depth + 0.3),
          // Twinkling pulse
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          twinklePhase: Math.random() * Math.PI * 2,
          // Color variation (emerald/silver)
          hue: Math.random() > 0.7 ? 140 + Math.random() * 30 : 190,
          saturation: Math.random() > 0.5 ? 30 : 12,
        };
      });
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let lastTime = 0;
    const draw = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      if (delta < 1000 / 45) {
        animId = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);
      t += delta / 1000;

      for (const s of stars) {
        // Drift movement
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around edges
        if (s.x < -5) s.x = viewportWidth + 5;
        if (s.x > viewportWidth + 5) s.x = -5;
        if (s.y < -5) s.y = viewportHeight + 5;
        if (s.y > viewportHeight + 5) s.y = -5;

        // Twinkle
        const twinkle = Math.sin(t * s.twinkleSpeed * 60 + s.twinklePhase);
        s.opacity = s.baseOpacity * (0.6 + 0.4 * twinkle);

        // Draw
        ctx.fillStyle = `hsla(${s.hue}, ${s.saturation}%, 78%, ${s.opacity})`;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow to brighter/larger stars
        if (s.size > 1.6 && s.opacity > 0.25) {
          ctx.fillStyle = `hsla(${s.hue}, ${s.saturation}%, 80%, ${s.opacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 w-full h-full"
    />
  );
}

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const mistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mistRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(mistRef.current, {
        x: 40,
        y: -30,
        opacity: 0.7,
        duration: 14,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 50% 0%, #0b3d2e 0%, #07110d 40%, #030403 78%)",
        }}
      />

      <div
        ref={mistRef}
        className="absolute inset-x-0 top-[-10%] h-[55%] bg-[radial-gradient(circle,_rgba(63,175,122,0.18),_transparent_60%)] opacity-60 blur-3xl"
      />

      {/* Subtle color nebula orbs with parallax */}
      <motion.div
        className="glow-orb"
        style={{
          width: "680px",
          height: "680px",
          top: "-5%",
          left: "-20%",
          background: "radial-gradient(circle, rgba(63, 175, 122, 0.22), transparent 70%)",
          y: orbY1,
        }}
      />
      <motion.div
        className="glow-orb"
        style={{
          width: "520px",
          height: "520px",
          top: "25%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(199, 205, 214, 0.14), transparent 70%)",
          y: orbY2,
        }}
      />
      <motion.div
        className="glow-orb"
        style={{
          width: "560px",
          height: "560px",
          top: "70%",
          left: "20%",
          background: "radial-gradient(circle, rgba(11, 61, 46, 0.28), transparent 70%)",
          y: orbY3,
        }}
      />

      {/* Floating star field */}
      <StarCanvas />

      <div className="fog-layer" />
      <div className="fog-layer alt" />
      <div className="grain" />
    </div>
  );
}
