"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  fadeUpHidden,
  fadeUpShown,
  motionEase,
  scrollViewport,
} from "../lib/motion";

function motionOf(as) {
  return motion[as] || motion.div;
}

function hiddenState(variant) {
  if (variant === "pop") return { opacity: 0, y: 18, scale: 0.97 };
  return fadeUpHidden;
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
  const MotionTag = motionOf(as);

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  if (animateOnMount) {
    return (
      <MotionTag
        className={className}
        initial={hiddenState(variant)}
        animate={fadeUpShown}
        transition={{ duration: 0.55, delay, ease: motionEase }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={hiddenState(variant)}
      whileInView={fadeUpShown}
      viewport={scrollViewport}
      transition={{ duration: 0.5, delay, ease: motionEase }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className = "",
  as = "div",
  stagger = 0.08,
  delay = 0,
  animateOnMount = false,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motionOf(as);

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
          transition: { staggerChildren: stagger, delayChildren: delay },
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
  const MotionTag = motionOf(as);

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: motionEase },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
