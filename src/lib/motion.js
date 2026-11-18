/** Shared Motion presets — opacity + transform only. */
export const motionEase = [0.22, 1, 0.36, 1];

export const scrollViewport = {
  once: false,
  amount: 0.22,
  margin: "0px 0px -8% 0px",
};

export const fadeUpHidden = { opacity: 0, y: 20 };
export const fadeUpShown = { opacity: 1, y: 0 };

export const projectCardReveal = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};
