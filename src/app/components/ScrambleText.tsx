"use client";

import { useEffect, useState } from "react";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type ScrambleTextProps = {
  text: string;
  className?: string;
  duration?: number;
};

export default function ScrambleText({
  text,
  className = "",
  duration = 900,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.max(12, Math.floor(duration / 30));

    const tick = () => {
      frame += 1;
      const reveal = Math.floor((frame / totalFrames) * text.length);
      const next = text
        .split("")
        .map((char, index) => {
          if (index < reveal) return char;
          if (char === " ") return " ";
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");

      setDisplay(next);

      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    const id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [text, duration]);

  return <span className={className}>{display}</span>;
}
