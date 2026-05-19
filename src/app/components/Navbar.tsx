/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { cn } from "../../lib/utils";

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
          ? "linear-gradient(135deg, rgba(3, 4, 3, 0.92), rgba(11, 61, 46, 0.86))"
          : "linear-gradient(135deg, rgba(3, 4, 3, 0.78), rgba(11, 61, 46, 0.55))",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(0, 0, 0, 0.55)"
          : "0 10px 24px rgba(0, 0, 0, 0.4)",
        borderBottom: "1px solid rgba(63, 175, 122, 0.15)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/asset/nav-logo3.png"
              alt="Logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="hidden md:block">
            <p className="section-kicker text-[0.6rem] text-emerald-100/70">Slytherin Archive</p>
            <p className="text-sm font-semibold tracking-[0.35em] text-emerald-50">MK</p>
          </div>
        </Link>

        {/* Nav links */}
        <div className="nav-text flex items-center gap-2 md:gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-[0.7rem] text-[#c7cdd6] transition-all duration-300",
                "hover:bg-emerald-500/10 hover:text-white md:px-5 md:text-[0.75rem]",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>

      {/* Animated bottom gradient line */}
      <div className="h-[2px] w-full shimmer-line opacity-50" />
    </nav>
  );
}
