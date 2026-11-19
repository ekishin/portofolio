"use client";

/**
 * Above-the-fold enter is handled by SplitText / EnterFade on each page.
 * Template stays a passthrough so route changes don't double-animate.
 */
export default function Template({ children }) {
  return children;
}
