"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function StarCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create floating embers/particles
    const stars = Array.from({ length: 320 }, () => {
      const depth = Math.random();
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: depth * 2.4 + 0.2,
        baseOpacity: depth * 0.4 + 0.1,
        opacity: Math.random() * 0.3,
        // Drift velocity — nearer particles drift faster
        vx: (Math.random() - 0.5) * 0.12 * (depth + 0.3),
        vy: (Math.random() - 0.5) * 0.08 * (depth + 0.3),
        // Twinkling pulse
        twinkleSpeed: Math.random() * 0.008 + 0.002,
        twinklePhase: Math.random() * Math.PI * 2,
        // Color variation (emerald/silver)
        hue: Math.random() > 0.7 ? 140 + Math.random() * 30 : 200,
        saturation: Math.random() > 0.5 ? 35 : 10,
      };
    });

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      for (const s of stars) {
        // Drift movement
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around edges
        if (s.x < -5) s.x = canvas.width + 5;
        if (s.x > canvas.width + 5) s.x = -5;
        if (s.y < -5) s.y = canvas.height + 5;
        if (s.y > canvas.height + 5) s.y = -5;

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

    draw();

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

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 50% 0%, #0b3d2e 0%, #0a1a15 40%, #050505 78%)",
        }}
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
          background: "radial-gradient(circle, rgba(199, 205, 214, 0.15), transparent 70%)",
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
          background: "radial-gradient(circle, rgba(11, 61, 46, 0.25), transparent 70%)",
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
