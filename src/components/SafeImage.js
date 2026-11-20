"use client";

import Image from "next/image";
import { useState } from "react";
import { safeImageSrc } from "../lib/content";

export default function SafeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  style,
}) {
  const [currentSrc, setCurrentSrc] = useState(safeImageSrc(src));

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      sizes={sizes}
      priority={priority}
      style={style}
      onError={() => {
        if (currentSrc !== "/images/placeholder.svg") {
          setCurrentSrc("/images/placeholder.svg");
        }
      }}
    />
  );
}
