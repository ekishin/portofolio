"use client";

import { motion, useReducedMotion } from "motion/react";
import ProjectCatalog from "./ProjectCatalog";
import SectionHeading from "./SectionHeading";
import { motionEase } from "../lib/motion";

export default function ProjectsPageClient({ projects }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_55%)]"
      />

      <div className="page-width relative pt-14 pb-20 lg:pt-20 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: motionEase }}
        >
          <SectionHeading eyebrow="Portfolio" title="Projects" />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: motionEase }}
        >
          <ProjectCatalog projects={projects} />
        </motion.div>
      </div>
    </div>
  );
}
