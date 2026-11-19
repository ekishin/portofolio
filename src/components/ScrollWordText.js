"use client";

import { motion, useTransform } from "motion/react";
import { Fragment } from "react";

const START_OPACITY = 0.15;
const SPREAD = 0.8;
const WORD_DURATION = 0.22;

export function getWordProgressRange(index, count) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;
  return {
    start,
    end: Math.min(1, start + WORD_DURATION),
  };
}

export function getWordOpacity(
  progress,
  { start, end },
  startOpacity = START_OPACITY,
) {
  if (progress <= start) return startOpacity;
  if (progress >= end) return 1;
  const wordProgress = (progress - start) / (end - start);
  return startOpacity + (1 - startOpacity) * wordProgress;
}

function Word({ children, progress, index, count, reducedMotion }) {
  const range = getWordProgressRange(index, count);
  const opacity = useTransform(progress, (latest) =>
    getWordOpacity(latest, range),
  );

  return (
    <motion.span
      aria-hidden="true"
      className="inline"
      style={reducedMotion ? undefined : { opacity }}
    >
      {children}
    </motion.span>
  );
}

/** Scroll-scrubbed word reveal for a line of text (e.g. Experience left panel). */
export default function ScrollWordText({
  text,
  progress,
  reducedMotion = false,
  className = "",
  as: Tag = "span",
}) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) return null;

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <Word
            progress={progress}
            index={index}
            count={words.length}
            reducedMotion={reducedMotion}
          >
            {word}
          </Word>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
