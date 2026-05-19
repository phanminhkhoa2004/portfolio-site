"use client";

import type { CSSProperties } from "react";

export default function BasiliskOrbit() {
  const segments = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div className="basilisk-orbit" aria-hidden="true">
      <div className="basilisk-track">
        {segments.map((index) => (
          <span
            key={index}
            className={index === 0 ? "basilisk-seg basilisk-head" : "basilisk-seg"}
            style={{ "--i": index } as CSSProperties}
          >
            {index === 0 ? <span className="basilisk-eye" /> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
