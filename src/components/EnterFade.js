"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionEase, useMotionProfile } from "../lib/motion";

/**
 * Block enter for paragraphs, buttons, media — opacity + transform only.
 * Pairs with SplitText on titles when a page first opens.
 */
export default function EnterFade({
  children,
  className = "",
  as = "div",
  delay = 0.12,
  duration,
}) {
  const reduceMotion = useReducedMotion();
  const { isMobile } = useMotionProfile();
  const MotionTag = motion[as] || motion.div;
  const resolvedDuration = duration ?? (isMobile ? 0.4 : 0.5);

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: isMobile ? 8 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: resolvedDuration,
        delay,
        ease: motionEase,
      }}
    >
      {children}
    </MotionTag>
  );
}
