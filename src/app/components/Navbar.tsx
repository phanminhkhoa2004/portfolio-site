/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/Home#hero" },
    { label: "About", href: "/Home#about" },
    { label: "Lab", href: "/projects" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(40, 15, 120, 0.85), rgba(65, 20, 140, 0.8))"
          : "linear-gradient(135deg, #3510a8, #5a2db8)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3), inset 0 -1px 0 rgba(255,255,255,0.05)"
          : "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        {/* Logo — replace /asset/nav-logo.png with your image */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/asset/nav-logo2.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </div>
        </Link>

        {/* Nav links */}
        <div className="nav-text flex items-center gap-2 md:gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative rounded-full px-5 py-2 text-base text-[#c8d0f0] transition-all duration-300 hover:bg-white/8 hover:text-white md:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Animated bottom gradient line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #ffa50e 20%, #ff6464 40%, #a764ff 60%, #74ffa7 80%, transparent 100%)",
          opacity: 0.4,
        }}
      />
    </nav>
  );
}
