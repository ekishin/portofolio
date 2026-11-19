"use client";

import SplitText from "./SplitText";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  animateEnter = false,
}) {
  return (
    <div className="mb-7 max-w-2xl space-y-2 sm:mb-10">
      {eyebrow ? (
        animateEnter ? (
          <SplitText
            as="p"
            className="type-eyebrow text-zinc-500"
            staggerDelay={0.04}
            y={8}
          >
            {eyebrow}
          </SplitText>
        ) : (
          <p className="type-eyebrow text-zinc-500">{eyebrow}</p>
        )
      ) : null}

      {animateEnter ? (
        <SplitText
          as="h2"
          className="type-display text-[1.65rem] text-zinc-900 sm:text-3xl"
          delay={eyebrow ? 0.08 : 0}
          staggerDelay={0.05}
        >
          {title}
        </SplitText>
      ) : (
        <h2 className="type-display text-[1.65rem] text-zinc-900 sm:text-3xl">
          {title}
        </h2>
      )}

      {description ? (
        animateEnter ? (
          <SplitText
            as="p"
            className="text-sm leading-6 text-zinc-600 sm:text-base"
            delay={0.18}
            staggerDelay={0.02}
            y={10}
          >
            {description}
          </SplitText>
        ) : (
          <p className="text-sm leading-6 text-zinc-600 sm:text-base">
            {description}
          </p>
        )
      ) : null}
    </div>
  );
}
