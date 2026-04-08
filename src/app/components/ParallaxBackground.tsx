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

    // Create 300+ floating stars
    const stars = Array.from({ length: 350 }, () => {
      const depth = Math.random(); // 0 = far, 1 = near
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: depth * 2 + 0.3,
        baseOpacity: depth * 0.5 + 0.15,
        opacity: Math.random() * 0.3,
        // Drift velocity — nearer stars drift faster
        vx: (Math.random() - 0.5) * 0.15 * (depth + 0.3),
        vy: (Math.random() - 0.5) * 0.1 * (depth + 0.3),
        // Twinkling
        twinkleSpeed: Math.random() * 0.008 + 0.002,
        twinklePhase: Math.random() * Math.PI * 2,
        // Color variation
        hue: Math.random() > 0.8 ? 270 + Math.random() * 40 : Math.random() > 0.6 ? 160 + Math.random() * 30 : 0,
        saturation: Math.random() > 0.5 ? 40 : 0,
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
        if (s.saturation > 0) {
          ctx.fillStyle = `hsla(${s.hue}, ${s.saturation}%, 85%, ${s.opacity})`;
        } else {
          ctx.fillStyle = `rgba(220, 225, 255, ${s.opacity})`;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow to brighter/larger stars
        if (s.size > 1.5 && s.opacity > 0.3) {
          ctx.fillStyle = s.saturation > 0
            ? `hsla(${s.hue}, ${s.saturation}%, 85%, ${s.opacity * 0.15})`
            : `rgba(220, 225, 255, ${s.opacity * 0.15})`;
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
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 140% 60% at 50% 0%, #1a0860 0%, #0e0040 35%, #080020 65%, #040010 100%)",
        }}
      />

      {/* Subtle color nebula orbs with parallax */}
      <motion.div
        className="glow-orb"
        style={{
          width: "700px",
          height: "700px",
          top: "10%",
          left: "-15%",
          background: "radial-gradient(circle, rgba(90, 40, 200, 0.18), transparent 70%)",
          y: orbY1,
        }}
      />
      <motion.div
        className="glow-orb"
        style={{
          width: "500px",
          height: "500px",
          top: "40%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(120, 30, 100, 0.12), transparent 70%)",
          y: orbY2,
        }}
      />
      <motion.div
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          top: "70%",
          left: "15%",
          background: "radial-gradient(circle, rgba(60, 20, 150, 0.1), transparent 70%)",
          y: orbY3,
        }}
      />

      {/* Floating star field */}
      <StarCanvas />
    </div>
  );
}
