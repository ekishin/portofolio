"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1800,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const current = words[index % words.length];
    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
    } else {
      timer = setTimeout(
        () => {
          const next = deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timer);
  }, [words, index, text, deleting, typingSpeed, deletingSpeed, pauseMs]);

  if (!words.length) return null;

  return (
    <p className={className} aria-live="polite">
      <span>{text}</span>
      <span className="animate-cursor ml-0.5 font-light text-zinc-400">|</span>
    </p>
  );
}
