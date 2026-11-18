"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { projectCategories } from "../data/portfolioData";
import {
  motionEase,
  projectCardReveal,
  scrollViewport,
} from "../lib/motion";

const filters = ["all", ...projectCategories];

function labelFor(filter) {
  if (filter === "all") return "All";
  return filter.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function ProjectCatalog({ projects }) {
  const [active, setActive] = useState("all");
  const reduceMotion = useReducedMotion();

  const visibleProjects = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) =>
      (project.categories || []).includes(active),
    );
  }, [active, projects]);

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Project categories"
      >
        {filters.map((filter) => {
          const isActive = active === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 active:translate-y-0 ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {labelFor(filter)}
            </button>
          );
        })}
      </div>

      {visibleProjects.length > 0 ? (
        <div key={active} className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              className="h-full"
              variants={projectCardReveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={scrollViewport}
              transition={{
                duration: 0.55,
                ease: motionEase,
                delay: reduceMotion ? 0 : (index % 2) * 0.08,
              }}
            >
              <ProjectCard project={project} showRole />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="rounded-3xl border border-dashed border-zinc-300 bg-white px-5 py-10 text-sm text-zinc-500">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
