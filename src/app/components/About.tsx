"use client";

import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <Reveal>
        <div className="section-panel boxed-section">
          <span className="boxed-title">About</span>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            <div className="md:sticky md:top-28">
              <p className="section-kicker">Origin Story</p>
              <h2 className="section-title mt-3">
                <ScrambleText text="A quiet fascination with light" />
              </h2>
              <p className="body-text mt-5">
                I am a design student drawn to immersive spaces, layered light, and
                careful composition. Each project becomes a ritual of mood and
                motion, crafted to feel like a secret chapter unfolding.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Prioritize clarity with a bold identity.",
                "Build emotion through shadow, glow, and rhythm.",
                "Experiment to discover a signature narrative voice.",
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="body-text">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
