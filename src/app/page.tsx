import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsCTA from "./components/ProjectsCTA";
import Contact from "./components/Contact";
import ParallaxBackground from "./components/ParallaxBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white">
      <ParallaxBackground />
      <Navbar />
      <Hero />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 md:px-8">
        <About />
        <Skills />
        <ProjectsCTA />
        <Contact />
      </div>
    </main>
  );
}
