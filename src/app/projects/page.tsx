import Link from "next/link";
import Reveal from "../components/Reveal";
import ParallaxBackground from "../components/ParallaxBackground";
import Navbar from "../components/Navbar";
import Magnetic from "../components/Magnetic";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full text-white">
      <ParallaxBackground />
      <Navbar />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-12 md:px-8">
        <Reveal>
          <h1
            className="section-title mb-6 text-center"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Projects Archive
          </h1>
          <p className="body-text mx-auto mb-12 max-w-2xl text-center text-white/70">
            A curated sequence of visual experiments, each sculpted with cinematic
            light, shadow, and intentional motion.
          </p>
        </Reveal>

        {/* Project rows */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link href={`/projects/${project.slug}`} className="block">
                <article className="project-card">
                  <div className="project-index">{project.number}</div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <Magnetic className="project-cta">
                        <span className="ghost-button">View Case</span>
                      </Magnetic>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
