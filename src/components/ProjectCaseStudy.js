"use client";

import { motion, useReducedMotion } from "motion/react";
import SafeImage from "./SafeImage";
import { motionEase, scrollViewport } from "../lib/motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};

const groupVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

function DiagramImage({ src, alt }) {
  if (!src) return null;

  return (
    <figure className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 sm:p-5">
      <SafeImage
        src={src}
        alt={alt}
        width={1200}
        height={900}
        className="mx-auto h-auto w-full max-w-xl object-contain sm:max-w-2xl"
        sizes="(max-width: 768px) 100vw, 672px"
      />
    </figure>
  );
}

function CaseSection({ title, children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={`space-y-5 border-t border-zinc-200 pt-10 ${className}`.trim()}
      variants={sectionVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={scrollViewport}
    >
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      {children}
    </motion.section>
  );
}

export default function ProjectCaseStudy({
  title,
  heroMockup,
  problem,
  solutionPoints = [],
  designSystemImage,
  architectureImage,
  showArchitecture = false,
  flowImage,
  keyFeatures = [],
}) {
  const reduceMotion = useReducedMotion();
  const showProblemSolution = Boolean(problem) || solutionPoints.length > 0;

  return (
    <div className="mt-12 space-y-10">
      {heroMockup ? (
        <CaseSection title="UI Mockups">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 sm:aspect-[16/9]">
            <SafeImage
              src={heroMockup}
              alt={`${title} mockup`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
          </div>
        </CaseSection>
      ) : null}

      {showProblemSolution ? (
        <motion.section
          className="border-t border-zinc-200 pt-10"
          variants={groupVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={scrollViewport}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
            {problem ? (
              <motion.div
                className="space-y-4 lg:pr-10"
                variants={itemVariants}
              >
                <p className="text-sm font-medium tracking-[0.16em] text-zinc-500 uppercase">
                  Problem Statement
                </p>
                <p className="text-base leading-7 text-zinc-600">{problem}</p>
              </motion.div>
            ) : (
              <div />
            )}

            {solutionPoints.length > 0 ? (
              <motion.div
                className={`space-y-4 ${
                  problem
                    ? "border-t border-zinc-200 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
                    : ""
                }`}
                variants={itemVariants}
              >
                <p className="text-sm font-medium tracking-[0.16em] text-zinc-500 uppercase">
                  Objectives & Solution
                </p>
                <ul className="space-y-3">
                  {solutionPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-7 text-zinc-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </div>
        </motion.section>
      ) : null}

      {designSystemImage ? (
        <CaseSection title="Design System">
          <DiagramImage
            src={designSystemImage}
            alt={`${title} design system`}
          />
        </CaseSection>
      ) : null}

      {showArchitecture ? (
        <CaseSection title="Architecture">
          <DiagramImage
            src={architectureImage}
            alt={`${title} architecture`}
          />
        </CaseSection>
      ) : null}

      {flowImage ? (
        <CaseSection title="System Flow">
          <DiagramImage src={flowImage} alt={`${title} system flow`} />
        </CaseSection>
      ) : null}

      {keyFeatures.length > 0 ? (
        <CaseSection title="Key Features">
          <motion.ul
            className="max-w-3xl space-y-3"
            variants={groupVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={scrollViewport}
          >
            {keyFeatures.map((feature) => (
              <motion.li
                key={feature}
                className="flex gap-3 text-base leading-7 text-zinc-600"
                variants={itemVariants}
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900"
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </CaseSection>
      ) : null}
    </div>
  );
}
