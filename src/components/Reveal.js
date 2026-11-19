"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUpShown, motionEase, useMotionProfile } from "../lib/motion";

function motionOf(as) {
  return motion[as] || motion.div;
}

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  animateOnMount = false,
  variant = "up",
}) {
  const reduceMotion = useReducedMotion();
  const { fadeUpHidden, duration, scrollViewport } = useMotionProfile();
  const MotionTag = motionOf(as);
  const hidden =
    variant === "pop"
      ? { opacity: 0, y: fadeUpHidden.y, scale: 0.98 }
      : fadeUpHidden;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  if (animateOnMount) {
    return (
      <MotionTag
        className={className}
        initial={hidden}
        animate={fadeUpShown}
        transition={{ duration, delay, ease: motionEase }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={fadeUpShown}
      viewport={scrollViewport}
      transition={{ duration, delay, ease: motionEase }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className = "",
  as = "div",
  stagger,
  delay = 0,
  animateOnMount = false,
}) {
  const reduceMotion = useReducedMotion();
  const { scrollViewport, stagger: profileStagger } = useMotionProfile();
  const MotionTag = motionOf(as);
  const resolvedStagger = stagger ?? profileStagger;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: resolvedStagger,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: scrollViewport })}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ children, className = "", as = "div" }) {
  const reduceMotion = useReducedMotion();
  const { fadeUpHidden, duration } = useMotionProfile();
  const MotionTag = motionOf(as);

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: fadeUpHidden,
        show: {
          ...fadeUpShown,
          transition: { duration, ease: motionEase },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
