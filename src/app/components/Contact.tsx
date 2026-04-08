"use client";

import Reveal from "./Reveal";

const contacts = [
  {
    icon: (
      <svg width="32" height="24" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="1" width="22" height="16" rx="2" />
        <path d="M22 1L12 10L2 1" />
      </svg>
    ),
    text: "Email: mkp070204@gmail.com",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    text: "Phone: 0708159744",
  },
  {
    icon: (
      <svg width="32" height="40" viewBox="0 0 24 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Address: 73 Phước Tường 16, Phường An Khê, Thành phố Đà Nẵng",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <Reveal>
        <div className="section-panel boxed-section">
          <h2 className="boxed-title section-title font-bold">Contact</h2>
          <div className="space-y-5">
            {contacts.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-xl p-2 text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                <div className="shrink-0 text-[#ffa50e]">{item.icon}</div>
                <p className="body-text" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Bottom colored circles matching Figma */}
      <Reveal>
        <div className="mt-16 flex items-center justify-center gap-5">
          {["#22c55e", "#f5c542", "#1a3a60", "#5b46e5"].map((color) => (
            <div
              key={color}
              className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110 md:h-14 md:w-14"
              style={{
                background: color,
                boxShadow: `0 0 20px ${color}40`,
              }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
