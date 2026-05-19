import "server-only";

import { type Project, type ProjectMedia } from "./projects";

const createEmptyMedia = (): ProjectMedia => ({
  cover: null,
  thumbnail: null,
  gallery: [],
  vertical: [],
  widescreen: [],
  process: [],
  moodboard: [],
  showcase: [],
});

const projectMediaBySlug: Record<string, ProjectMedia> = {
  "hoa-am-viet": {
    ...createEmptyMedia(),
    showcase: [
      "/projects/hoa-am-viet/showcase/banner-01.png",
      "/projects/hoa-am-viet/showcase/poster-01.png",
      "/projects/hoa-am-viet/showcase/poster-02.png",
      "/projects/hoa-am-viet/showcase/brochure-01.png",
      "/projects/hoa-am-viet/showcase/brochure-02.png",
    ],
  },
  "shinobi-the-dark-world": {
    ...createEmptyMedia(),
    showcase: [
      "/projects/shinobi-the-dark-world/showcase/character-01.png",
      "/projects/shinobi-the-dark-world/showcase/character-02.png",
      "/projects/shinobi-the-dark-world/showcase/ui-01.png",
      "/projects/shinobi-the-dark-world/showcase/ui-02.png",
    ],
  },
  autodouyin: {
    ...createEmptyMedia(),
    showcase: [
      "/projects/autodouyin/showcase/web-01.png",
      "/projects/autodouyin/showcase/web-02.png",
      "/projects/autodouyin/showcase/web-03.png",
    ],
  },
  "personal-experiments": {
    ...createEmptyMedia(),
    showcase: [
      "/projects/personal-experiments/showcase/character-01.png",
      "/projects/personal-experiments/showcase/character-02.png",
      "/projects/personal-experiments/showcase/site-01.png",
      "/projects/personal-experiments/showcase/site-02.png",
    ],
  },
};

export async function getProjectMedia(project: Project): Promise<ProjectMedia> {
  return projectMediaBySlug[project.slug] ?? createEmptyMedia();
}
