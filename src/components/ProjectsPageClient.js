"use client";

import ProjectCatalog from "./ProjectCatalog";
import { Reveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectsPageClient({ projects }) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_55%)]"
      />

      <div className="page-width relative pt-12 pb-14 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-18">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="Projects" />
        </Reveal>

        <div className="mt-6 sm:mt-8">
          <ProjectCatalog key="projects-all" projects={projects} />
        </div>
      </div>
    </div>
  );
}
