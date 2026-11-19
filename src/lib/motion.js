"use client";

import { useEffect, useState } from "react";

/** Shared Motion presets — opacity + transform only (composite tier). */
export const motionEase = [0.22, 1, 0.36, 1];

/** Desktop scroll reveal — transform/opacity only. */
export const scrollViewport = {
  once: false,
  amount: 0.2,
  margin: "0px 0px -8% 0px",
};

/** Mobile: fire earlier, shorter travel so main-thread work stays light. */
export const scrollViewportMobile = {
  once: false,
  amount: 0.12,
  margin: "0px 0px -4% 0px",
};

export const fadeUpHidden = { opacity: 0, y: 16 };
export const fadeUpShown = { opacity: 1, y: 0 };
export const fadeUpHiddenMobile = { opacity: 0, y: 10 };

export const projectCardReveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

export const projectCardRevealMobile = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: motionEase },
  },
};

export function useIsMobileViewport(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [breakpoint]);

  return mobile;
}

export function useMotionProfile() {
  const isMobile = useIsMobileViewport();

  return {
    isMobile,
    scrollViewport: isMobile ? scrollViewportMobile : scrollViewport,
    fadeUpHidden: isMobile ? fadeUpHiddenMobile : fadeUpHidden,
    fadeUpShown,
    duration: isMobile ? 0.4 : 0.5,
    projectCardReveal: isMobile ? projectCardRevealMobile : projectCardReveal,
    stagger: isMobile ? 0.06 : 0.08,
  };
}
