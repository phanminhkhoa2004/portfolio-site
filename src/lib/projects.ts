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
  showcaseSections?: ProjectShowcaseSection[];
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

export type ProjectShowcaseItem = {
  title: string;
  description: string;
  image: string;
  orientation: "banner" | "horizontal" | "vertical";
  fit?: "cover" | "contain";
  frame?: "default" | "soft" | "transparent";
};

export type ProjectShowcaseSection = {
  title: string;
  description?: string;
  items: ProjectShowcaseItem[];
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
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
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
    showcaseSections: [
      {
        title: "Identity Plates",
        description:
          "Each artifact is framed as its own cinematic card, designed for strong vertical and horizontal scaling.",
        items: [
          {
            title: "Banner Invocation",
            description:
              "A panoramic crest that sets the ceremonial tone for the brand system.",
            image: "/projects/hoa-am-viet/showcase/banner-01.webp",
            orientation: "banner",
          },
          {
            title: "Poster I: Inked Overture",
            description:
              "Vertical poster layout balancing ceremonial typography with deep emerald texture.",
            image: "/projects/hoa-am-viet/showcase/poster-01.webp",
            orientation: "vertical",
          },
          {
            title: "Poster II: Ritual Echo",
            description:
              "Secondary poster concept with stacked type and glowing accents for theatrical presence.",
            image: "/projects/hoa-am-viet/showcase/poster-02.webp",
            orientation: "vertical",
          },
          {
            title: "Brochure Spread I",
            description:
              "A horizontal spread highlighting the brand narrative with structured typography.",
            image: "/projects/hoa-am-viet/showcase/brochure-01.webp",
            orientation: "horizontal",
          },
          {
            title: "Brochure Spread II",
            description:
              "Detail-forward brochure layout designed for cinematic editorial pacing.",
            image: "/projects/hoa-am-viet/showcase/brochure-02.webp",
            orientation: "horizontal",
          },
        ],
      },
    ],
    assetPath: "/projects/hoa-am-viet",
  },
  {
    slug: "shinobi-the-dark-world",
    number: "02",
    title: "Shinobi: The Dark World",
    tagline: "A dark fantasy dossier carved for shadowed blades and arcane rites.",
    description: "Dark fantasy character and UI showcase for a cinematic action title.",
    overview:
      "Shinobi: The Dark World reveals a stealth saga through towering character panels and immersive UI frames. Each scene leans into shadow, ember highlights, and ritual typography to reinforce the world of midnight clans.",
    role: ["Character Presentation", "UI Concept", "Atmospheric Direction"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    timeline: "2025",
    inspirations: [
      "Dark fantasy concept art",
      "Ritualistic lighting",
      "Fog-drenched cinematic frames",
    ],
    process: [
      {
        title: "World Codex",
        detail: "Defined the lore pillars, glyph motifs, and sacred materials for the UI shell.",
      },
      {
        title: "Shadow Casting",
        detail:
          "Balanced deep blacks with ember highlights to spotlight the characters and HUD.",
      },
      {
        title: "Frame Assembly",
        detail:
          "Composed UI mockups as cinematic slices for stealth and combat interfaces.",
      },
    ],
    highlights: [
      "Character showcase panels with ritual iconography",
      "Immersive gameplay HUD concept frames",
      "Noir palette with ember accents",
    ],
    showcaseSections: [
      {
        title: "Shadowed Legends",
        description:
          "Vertical character plates and horizontal UI frames designed as separate cinematic beats.",
        items: [
          {
            title: "Character Panel I",
            description:
              "Vertical showcase for the lead shinobi, framed with sigils and misted light.",
            image: "/projects/shinobi-the-dark-world/showcase/character-01.png",
            orientation: "vertical",
            fit: "contain",
            frame: "transparent",
          },
          {
            title: "Character Panel II",
            description:
              "Secondary portrait presentation with steel textures and shadow gradients.",
            image: "/projects/shinobi-the-dark-world/showcase/character-02.png",
            orientation: "vertical",
            fit: "contain",
            frame: "transparent",
          },
          {
            title: "Gameplay UI Frame I",
            description:
              "Horizontal HUD mockup revealing stealth meters, relics, and glyph counters.",
            image: "/projects/shinobi-the-dark-world/showcase/ui-01.png",
            orientation: "horizontal",
          },
          {
            title: "Gameplay UI Frame II",
            description:
              "Interface preview for combat encounters with layered map and combo cues.",
            image: "/projects/shinobi-the-dark-world/showcase/ui-02.png",
            orientation: "horizontal",
          },
        ],
      },
    ],
    assetPath: "/projects/shinobi-the-dark-world",
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
    tools: ["Figma", "Next.js"],
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
    showcaseSections: [
      {
        title: "Website Screens",
        description:
          "Each website frame is presented as its own scene for future screenshot inserts.",
        items: [
          {
            title: "Homepage Stage",
            description:
              "Full-width hero and metric cadence for the opening act.",
            image: "/projects/autodouyin/showcase/web-01.webp",
            orientation: "horizontal",
          },
          {
            title: "Creator Flow",
            description:
              "Mid-scroll modules that introduce automation features and spotlight moments.",
            image: "/projects/autodouyin/showcase/web-02.webp",
            orientation: "horizontal",
          },
          {
            title: "Conversion Finale",
            description:
              "Closing sequence with CTA emphasis and cinematic typography rhythm.",
            image: "/projects/autodouyin/showcase/web-03.webp",
            orientation: "horizontal",
          },
        ],
      },
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
    tools: ["Figma", " Adobe Photoshop", "Adobe Illustrator", "Next.js"],
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
    showcaseSections: [
      {
        title: "Experimental Plates",
        description:
          "Independent holders for character art and interface experiments.",
        items: [
          {
            title: "Character Study I",
            description:
              "Vertical figure study focusing on silhouette and spectral lighting.",
            image: "/projects/personal-experiments/showcase/character-01.webp",
            orientation: "vertical",
            fit: "contain",
            frame: "transparent",
          },
          {
            title: "Character Study II",
            description:
              "Second portrait concept emphasizing texture layering and motion haze.",
            image: "/projects/personal-experiments/showcase/character-02.webp",
            orientation: "vertical",
            fit: "contain",
            frame: "transparent",
          },
          {
            title: "Interface Study I",
            description:
              "Horizontal interface mockup with experimental typography grids.",
            image: "/projects/personal-experiments/showcase/site-01.webp",
            orientation: "horizontal",
          },
          {
            title: "Interface Study II",
            description:
              "Alternate website frame with cinematic spacing and atmospheric overlays.",
            image: "/projects/personal-experiments/showcase/site-02.webp",
            orientation: "horizontal",
          },
        ],
      },
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
