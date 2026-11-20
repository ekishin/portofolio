"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { motionEase, useMotionProfile } from "../lib/motion";

export default function FeaturedProjects({ projects = [] }) {
  const reduceMotion = useReducedMotion();
  const {
    projectCardReveal,
    scrollViewport,
    fadeUpHidden,
    fadeUpShown,
    duration,
    isMobile,
  } = useMotionProfile();

  if (!projects.length) return null;

  return (
    <section
      id="featured-projects"
      className="page-width relative scroll-mt-28 pt-10 pb-14 md:pt-14 md:pb-16 lg:pb-18"
    >
      <motion.div
        className="mb-8 space-y-2 sm:mb-10"
        initial={reduceMotion ? false : fadeUpHidden}
        whileInView={fadeUpShown}
        viewport={scrollViewport}
        transition={{ duration, ease: motionEase }}
      >
        <p className="type-eyebrow text-zinc-500">Selected work</p>
        <h2 className="type-display text-3xl text-zinc-900">
          Featured projects
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
          Four projects spanning company profile web, AR learning, family
          finance, and road intelligence — chosen to show full-stack range
          quickly.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            className="h-full"
            variants={projectCardReveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={scrollViewport}
            transition={{
              duration,
              ease: motionEase,
              delay: reduceMotion ? 0 : (index % 2) * (isMobile ? 0.05 : 0.08),
            }}
          >
            <ProjectCard
              project={project}
              size="featured"
              showRole
              showDetailButton
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 flex justify-end sm:mt-10"
        initial={reduceMotion ? false : fadeUpHidden}
        whileInView={fadeUpShown}
        viewport={scrollViewport}
        transition={{ duration, ease: motionEase, delay: 0.06 }}
      >
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
        >
          View all projects
        </Link>
      </motion.div>
    </section>
  );
}
