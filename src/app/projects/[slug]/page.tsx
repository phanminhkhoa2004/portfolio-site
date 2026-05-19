import { notFound } from "next/navigation";
import ProjectDetailView from "@/app/components/ProjectDetailView";
import { getProjectBySlug, projectSlugs } from "@/lib/projects";
import { getProjectMedia } from "@/lib/project-media";

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const media = await getProjectMedia(project);

  return <ProjectDetailView project={{ ...project, media }} />;
}
