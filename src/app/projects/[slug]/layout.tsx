import Navbar from "@/app/components/Navbar";
import ParallaxBackground from "@/app/components/ParallaxBackground";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      <ParallaxBackground />
      <Navbar />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(11,61,46,0.35),_transparent_60%)] opacity-70" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
