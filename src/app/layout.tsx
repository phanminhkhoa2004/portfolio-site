import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import PortalTransition from "./components/PortalTransition";
import BasiliskOrbit from "./components/BasiliskOrbit";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phan Minh Khoa — Portfolio",
  description: "Designer, student, creative — personal portfolio of Phan Minh Khoa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-white">
        <BasiliskOrbit />
        <PortalTransition>{children}</PortalTransition>
      </body>
    </html>
  );
}
