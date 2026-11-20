"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
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
  once = false,
}) {
  const reduceMotion = useReducedMotion();
  const { fadeUpHidden, duration, scrollViewport } = useMotionProfile();
  const [mounted, setMounted] = useState(false);
  const MotionTag = motionOf(as);
  const Tag = as;

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR + first paint: always visible to avoid hydration mismatch /
  // stuck opacity-0 when useReducedMotion differs server vs client.
  if (!mounted || reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const hidden =
    variant === "pop"
      ? { opacity: 0, y: fadeUpHidden.y, scale: 0.98 }
      : fadeUpHidden;

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
      viewport={{ ...scrollViewport, once: once || scrollViewport.once }}
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
  const [mounted, setMounted] = useState(false);
  const MotionTag = motionOf(as);
  const Tag = as;
  const resolvedStagger = stagger ?? profileStagger;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reduceMotion) {
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
  const [mounted, setMounted] = useState(false);
  const MotionTag = motionOf(as);
  const Tag = as;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reduceMotion) {
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
