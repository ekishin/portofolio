---
name: scroll-reveal
description: >-
  Build scroll reveal / fade-in slide-up animations for cards and list items as they enter
  the viewport. Use when implementing Scroll Reveal, Fade-in Slide-up Animation, experience
  cards that appear on scroll, viewport entry motion, or when the user asks for fade-in with
  a slight upward shift, reveal-on-scroll, or /scroll-reveal.
---

# Scroll Reveal / Fade-in Slide-up

## What this skill does

**Scroll Reveal / Fade-in Slide-up Animation:** experience cards muncul secara dinamis dengan efek fade-in (perlahan terlihat) dan sedikit geseran ke atas begitu elemen tersebut masuk ke dalam area pandang layar (viewport).

## Pair with

Always respect `animation-performance`:
- Properties: **`opacity` + `transform: translate3d(...)`** only (optional tiny `scale` ≤ 0.03)
- Prefer **CSS** (`@keyframes` + `animation-timeline: view()`) so motion can run off the main thread
- Never `transition: all`
- Never IntersectionObserver → `setState` every frame; IO may toggle a class once

## Recipe A — CSS view timelines (preferred)

```css
@keyframes reveal-fade-up {
  from {
    opacity: 0;
    transform: translate3d(0, 16px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.reveal-fade-up {
  animation: reveal-fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-timeline: view();
  animation-range: entry 0% cover 20%;
}

@supports not (animation-timeline: view()) {
  .reveal-fade-up {
    /* fallback: play once on load, or IO class toggle */
    animation: reveal-fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

Values: `16–28px` upward travel; duration `450–750ms`; ease ≈ `cubic-bezier(0.22, 1, 0.36, 1)`.

## Recipe B — sticky scrub timelines (experience steps)

When cards sit inside a sticky scroll-scrub section, viewport entry alone is not enough. Reveal each step when scroll progress reaches it:

1. Compute `activeIndex` from scrub progress (state only on index change).
2. Mark items with `is-reached` when `index <= activeIndex`.
3. CSS:

```css
.step-card {
  opacity: 0;
  transform: translate3d(0, 14px, 0);
  transition:
    opacity 320ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}
.step-card.is-reached {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.step-card.is-active {
  /* stronger presence; still opacity/transform only */
}
```

## Stagger

If several cards enter together, stagger `30–80ms` via `--reveal-delay` or `animation-delay`. One entrance per container group — do not restagger on every tiny scroll.

## Do not

- Animate `top`, `margin`, `height`, or `filter: blur()` for the reveal
- Hide content permanently without a reduced-motion path that shows everything
- Replay the entrance on every scroll up/down unless the product explicitly wants scrub-linked reach state (Recipe B)

## Verify

- Cards ease in once as they enter (Recipe A) or as scrub reaches them (Recipe B)
- Reduced motion: final state visible immediately
- Code uses composite properties only; device recording if the user reports jank
