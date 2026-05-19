"use client";

import Reveal from "./Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  {
    icon: <Mail className="h-7 w-7" />,
    text: "Email: mkp070204@gmail.com",
  },
  {
    icon: <Phone className="h-7 w-7" />,
    text: "Phone: 0708159744",
  },
  {
    icon: <MapPin className="h-7 w-7" />,
    text: "Da Nang, Vietnam",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <Reveal>
        <div className="section-panel boxed-section">
          <h2 className="boxed-title section-title font-bold">Contact</h2>
          <p className="section-kicker">Final Invocation</p>
          <h3 className="intro-text mt-4">Let us craft the next chapter together.</h3>
          <div className="mt-6 space-y-5">
            {contacts.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-xl p-2 text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                <div className="shrink-0 text-[#3faf7a]">{item.icon}</div>
                <p className="body-text" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
