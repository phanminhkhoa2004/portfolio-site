import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { type Project, type ProjectMedia } from "./projects";

const IMAGE_EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg", ".avif"];

function normalizeAssetPath(assetPath: string) {
  return assetPath.replace(/^\/+/, "");
}

function isImageFile(filename: string) {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

function sortImageNames(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

async function pathExists(targetPath: string) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function findNamedImage(baseDir: string, publicRoot: string, name: string) {
  for (const ext of IMAGE_EXTENSIONS) {
    const filename = `${name}${ext}`;
    const candidate = path.join(baseDir, filename);
    if (await pathExists(candidate)) {
      return path.posix.join(publicRoot, filename);
    }
  }

  return null;
}

async function readImageDirectory(dirPath: string, publicRoot: string) {
  if (!(await pathExists(dirPath))) {
    return [];
  }

  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && isImageFile(entry.name))
    .map((entry) => entry.name)
    .sort(sortImageNames);

  return files.map((filename) => path.posix.join(publicRoot, filename));
}

export async function getProjectMedia(project: Project): Promise<ProjectMedia> {
  const assetRoot = normalizeAssetPath(project.assetPath);
  const publicRoot = project.assetPath.startsWith("/")
    ? project.assetPath
    : `/${project.assetPath}`;
  const baseDir = path.join(process.cwd(), "public", assetRoot);

  if (!(await pathExists(baseDir))) {
    return {
      cover: null,
      thumbnail: null,
      gallery: [],
      vertical: [],
      widescreen: [],
      process: [],
      moodboard: [],
      showcase: [],
    };
  }

  const [cover, thumbnail, gallery, vertical, widescreen, process, moodboard, showcase] =
    await Promise.all([
      findNamedImage(baseDir, publicRoot, "cover"),
      findNamedImage(baseDir, publicRoot, "thumbnail"),
      readImageDirectory(path.join(baseDir, "gallery"), path.posix.join(publicRoot, "gallery")),
      readImageDirectory(path.join(baseDir, "vertical"), path.posix.join(publicRoot, "vertical")),
      readImageDirectory(path.join(baseDir, "widescreen"), path.posix.join(publicRoot, "widescreen")),
      readImageDirectory(path.join(baseDir, "process"), path.posix.join(publicRoot, "process")),
      readImageDirectory(path.join(baseDir, "moodboard"), path.posix.join(publicRoot, "moodboard")),
      readImageDirectory(path.join(baseDir, "showcase"), path.posix.join(publicRoot, "showcase")),
    ]);

  return {
    cover,
    thumbnail,
    gallery,
    vertical,
    widescreen,
    process,
    moodboard,
    showcase,
  };
}
