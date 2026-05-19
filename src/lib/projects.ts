export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  role: string[];
  tools: string[];
  timeline: string;
  inspirations: string[];
  process: Array<{ title: string; detail: string }>;
  highlights: string[];
  assetPath: string;
};

export type ProjectMedia = {
  cover: string | null;
  thumbnail: string | null;
  gallery: string[];
  vertical: string[];
  widescreen: string[];
  process: string[];
  moodboard: string[];
  showcase: string[];
};

export type ProjectDetail = Project & { media: ProjectMedia };

export const projects: Project[] = [
  {
    slug: "hoa-am-viet",
    number: "01",
    title: "Hoa Am Viet",
    tagline: "An identity ritual of ink, echo, and quiet prestige.",
    description: "Brand identity design with cinematic, moody typography.",
    overview:
      "Hoa Am Viet is a cultural mark built from typographic contrasts and nocturne greens. The system balances refined ligatures with a modern cinematic grid, creating a brand voice that feels archival yet alive.",
    role: ["Visual Identity", "Art Direction", "Typography"],
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    timeline: "2024",
    inspirations: [
      "Vietnamese calligraphy scrolls",
      "Low-key studio portraiture",
      "Emerald lacquer textures",
    ],
    process: [
      {
        title: "Ritual Research",
        detail:
          "Collected typographic references from archival signage and journal covers to set the tonal baseline.",
      },
      {
        title: "Glyph Sculpting",
        detail:
          "Refined serif forms, balancing ornamental detail with rigid vertical rhythm.",
      },
      {
        title: "System Assembly",
        detail:
          "Built a modular brand kit for print, editorial, and digital landing frames.",
      },
    ],
    highlights: [
      "Custom logotype with engraved ligatures",
      "Moody palette grounded in emerald and antique parchment",
      "High-contrast layout system for editorial storytelling",
    ],
    assetPath: "/projects/hoa-am-viet",
  },
  {
    slug: "3technote",
    number: "02",
    title: "3Technote",
    tagline: "An immersive knowledge interface lit by soft circuitry.",
    description: "Immersive interface concept for a digital knowledge system.",
    overview:
      "3Technote visualizes an archive of knowledge as a living constellation. The UI blends translucent panels, holographic typography, and adaptive glow to guide focus while maintaining a cinematic hush.",
    role: ["UX Direction", "UI Design", "Motion Studies"],
    tools: ["Figma", "After Effects", "Photoshop"],
    timeline: "2025",
    inspirations: [
      "Sci-fi codex interfaces",
      "Observatory lighting",
      "Volumetric fog cinematography",
    ],
    process: [
      {
        title: "Narrative Mapping",
        detail:
          "Outlined the information hierarchy as a journey of discovery with ritual checkpoints.",
      },
      {
        title: "Interface Atmosphere",
        detail:
          "Introduced layered panels, misted depth, and adaptive glow for focus control.",
      },
      {
        title: "Motion Scripting",
        detail:
          "Defined transitions and micro-animations to evoke floating observation rooms.",
      },
    ],
    highlights: [
      "Adaptive grid for dense information clusters",
      "Focus-driven lighting cues",
      "Swirling navigation metaphors",
    ],
    assetPath: "/projects/3technote",
  },
  {
    slug: "autodouyin",
    number: "03",
    title: "AutoDouyin",
    tagline: "A creator platform staged like a nocturnal theater.",
    description: "Visual system and product landing for a creator platform.",
    overview:
      "AutoDouyin brings automation for creators into a theatrical landing experience. The layout emphasizes spotlighted modules, rhythm-driven metrics, and a nocturnal palette to convey momentum.",
    role: ["Landing Page Design", "Brand System", "Content Strategy"],
    tools: ["Figma", "Illustrator", "Cinema 4D"],
    timeline: "2025",
    inspirations: [
      "Stage lighting rigs",
      "Editorial hero campaigns",
      "Analog film grain",
    ],
    process: [
      {
        title: "Storyboard",
        detail:
          "Mapped each section as a scene: arrival, momentum, mastery, and call to act.",
      },
      {
        title: "Visual Rhythm",
        detail:
          "Built a typographic tempo and modular cards to guide the eye like choreography.",
      },
      {
        title: "Scene Polish",
        detail:
          "Crafted light streaks, gradients, and grain to deepen the cinematic finish.",
      },
    ],
    highlights: [
      "Hero sequence with layered spotlight modules",
      "Metric storytelling blocks",
      "Cinematic gradient frames",
    ],
    assetPath: "/projects/autodouyin",
  },
  {
    slug: "personal-experiments",
    number: "04",
    title: "Personal Experiments",
    tagline: "A laboratory of moody studies and spectral typography.",
    description: "Selective visual explorations and cinematic studies.",
    overview:
      "Personal Experiments is a collection of speculative visuals exploring shadow, texture, and motion. Each study focuses on atmosphere-first composition with disciplined typography.",
    role: ["Concept Art", "Typography", "Motion"],
    tools: ["Figma", "Photoshop", "After Effects"],
    timeline: "2023-2026",
    inspirations: [
      "Dark fantasy film stills",
      "Mist-laced architecture",
      "Ambient soundscapes",
    ],
    process: [
      {
        title: "Atmosphere Sketching",
        detail:
          "Drafted quick compositions anchored on light beams and shadow gradients.",
      },
      {
        title: "Material Studies",
        detail:
          "Explored noise, grain, and metallic textures to evoke age and ritual.",
      },
      {
        title: "Motion Trials",
        detail:
          "Layered subtle animation passes for breathing light and slow parallax.",
      },
    ],
    highlights: [
      "Ambient typography experiments",
      "Volumetric glow studies",
      "Cinematic motion loops",
    ],
    assetPath: "/projects/personal-experiments",
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectAssetPath(project: Project, relativePath: string) {
  return `${project.assetPath}/${relativePath}`;
}
