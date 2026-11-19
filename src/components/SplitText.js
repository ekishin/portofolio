"use client";

import { animate, stagger, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { motionEase, useIsMobileViewport } from "../lib/motion";
import { splitTextDom } from "../lib/splitTextDom";

/**
 * Split-text enter animation (Motion+ splitText stand-in).
 * Words fade + rise with stagger after fonts are ready.
 * Uses translate3d + opacity only (composite tier).
 */
export default function SplitText({
  as: Tag = "h1",
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.045,
  duration,
  y,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobileViewport();
  const travel = y ?? (isMobile ? 8 : 12);
  const resolvedDuration = duration ?? (isMobile ? 0.4 : 0.5);
  const resolvedStagger = isMobile
    ? Math.min(staggerDelay, 0.03)
    : staggerDelay;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let cancelled = false;
    let controls;

    const run = async () => {
      try {
        await document.fonts.ready;
      } catch {
        /* fonts.ready can reject in odd hosts */
      }
      if (cancelled || !ref.current) return;

      el.style.visibility = "visible";

      if (reduceMotion) return;

      const { words } = splitTextDom(el);
      if (!words.length) return;

      words.forEach((word) => {
        word.style.opacity = "0";
        word.style.transform = `translate3d(0, ${travel}px, 0)`;
      });

      controls = animate(
        words,
        {
          opacity: [0, 1],
          transform: [
            `translate3d(0, ${travel}px, 0)`,
            "translate3d(0, 0, 0)",
          ],
        },
        {
          duration: resolvedDuration,
          delay: stagger(resolvedStagger, { start: delay }),
          ease: motionEase,
        },
      );
    };

    run();

    return () => {
      cancelled = true;
      controls?.stop?.();
    };
  }, [
    reduceMotion,
    delay,
    resolvedStagger,
    resolvedDuration,
    travel,
  ]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ visibility: reduceMotion ? "visible" : "hidden" }}
    >
      {children}
    </Tag>
  );
}
