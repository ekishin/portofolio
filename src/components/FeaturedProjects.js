"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import {
  motionEase,
  projectCardReveal,
  scrollViewport,
} from "../lib/motion";

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export default function FeaturedProjects({ projects = [] }) {
  const reduceMotion = useReducedMotion();

  if (!projects.length) return null;

  return (
    <section
      id="featured-projects"
      className="page-width relative scroll-mt-28 pt-10 pb-20 md:pt-14 lg:pb-28"
    >
      <motion.div
        className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        variants={headerVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={scrollViewport}
      >
        <div className="space-y-2">
          <p className="text-sm font-medium tracking-[0.16em] text-zinc-500 uppercase">
            Selected work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Featured projects
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
            Four projects spanning AR learning, road intelligence, family
            finance, and elderly care — chosen to show full-stack range quickly.
          </p>
        </div>
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
        >
          View all projects
        </Link>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:gap-8"
        variants={gridVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={scrollViewport}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={projectCardReveal}
            className="h-full"
          >
            <ProjectCard project={project} size="featured" showRole />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
