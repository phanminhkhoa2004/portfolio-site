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
    { label: "Skills", href: "/Home#skills" },
    { label: "Journey", href: "/Home#journey" },
    { label: "Lab", href: "/projects" },
    { label: "Contact", href: "/Home#contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(5, 5, 5, 0.9), rgba(11, 61, 46, 0.9))"
          : "linear-gradient(135deg, rgba(5, 5, 5, 0.8), rgba(11, 61, 46, 0.55))",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(0, 0, 0, 0.55)"
          : "0 10px 24px rgba(0, 0, 0, 0.4)",
        borderBottom: "1px solid rgba(63, 175, 122, 0.15)",
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
              className="relative rounded-full px-4 py-2 text-[0.7rem] text-[#c7cdd6] transition-all duration-300 hover:bg-emerald-500/10 hover:text-white md:px-5 md:text-[0.75rem]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Animated bottom gradient line */}
      <div className="h-[2px] w-full shimmer-line opacity-50" />
    </nav>
  );
}
