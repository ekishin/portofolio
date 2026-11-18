import ProjectsPageClient from "../../components/ProjectsPageClient";
import { profile, sortedProjects } from "../../data/portfolioData";
import { isTodo } from "../../lib/content";

export const metadata = {
  title: `Projects | ${profile.name}`,
  description: "All projects, with featured work listed first.",
};

export default function ProjectsPage() {
  const projects = sortedProjects.filter(
    (project) =>
      !isTodo(project.title) &&
      !isTodo(project.summary) &&
      !isTodo(project.slug),
  );

  return <ProjectsPageClient projects={projects} />;
}
