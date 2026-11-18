"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUpHidden, fadeUpShown, motionEase } from "../lib/motion";

/**
 * Remounts on route change (App Router). Enter fade + slight slide-up.
 * shortcut: exit needs AnimatePresence; upgrade if exits feel abrupt
 */
export default function Template({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ ...fadeUpHidden, y: 14 }}
      animate={fadeUpShown}
      transition={{ duration: 0.42, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
