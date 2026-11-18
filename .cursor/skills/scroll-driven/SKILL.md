---
name: scroll-driven
description: >-
  Build scroll-driven timeline and vertical progress-line animations that fill or light up
  with the user's scroll to show career or journey progress. Use when implementing Timeline
  Animation, Vertical Progress Line Animation, sticky scroll scrub sections, experience
  timelines with numbered steps, or when the user asks for scroll-linked progress rails,
  career journey progress, or /scroll-driven.
---

# Scroll-Driven

## What this skill does

**Timeline Animation / Vertical Progress Line Animation:** Garis vertikal di sebelah kiri daftar pengalaman (angka 1-3) akan terisi atau menyala mengikuti arah scroll pengguna untuk menunjukkan progres perjalanan karier.

## Pair with

Always respect `animation-performance` in the same project:
- Animate **`transform` and `opacity` only** (progress fill = `scaleY`, not `height`)
- Never `transition: all`
- Never `setState` every scroll frame — write progress to `ref.current.style`
- Commit React state only when the **active step index** changes

## Recipe — vertical progress line

1. **Pin the section** (desktop): tall `.pin` + sticky inner so scroll distance maps to progress `0 → 1`.
2. **One track, two layers** beside the step markers:
   - Track background (static, muted)
   - Fill layer with `transform-origin: top center` and `transform: scaleY(progress)`
3. **Map scroll → progress** with `docTop(pin)` (not bare `offsetTop` under positioned ancestors):

```js
const start = pin.getBoundingClientRect().top + window.scrollY;
const end = start + pin.offsetHeight - window.innerHeight;
const progress = clamp((scrollY - start) / Math.max(end - start, 1), 0, 1);
fillRef.current.style.transform = `scaleY(${progress})`;
```

4. **Active step** from progress buckets: `index = min(n - 1, floor(progress * n))` — `setState` only if index changed.
5. **rAF coalesce** scroll/resize listeners (`passive: true`).
6. **Click a step** → `scrollTo` the matching progress target so scrub and click stay in sync.
7. **Mobile / `prefers-reduced-motion`:** drop sticky pin height; keep clickable steps; show fill at `scaleY(1)` or hide fill.

## Markup sketch

```html
<div class="timeline-list">
  <div class="timeline-track" aria-hidden="true">
    <div class="timeline-track__bg"></div>
    <div class="timeline-track__fill"></div>
  </div>
  <!-- numbered step buttons 1..n -->
</div>
```

```css
.timeline-track__fill {
  transform: scaleY(0);
  transform-origin: top center;
  /* no transition on scrubbed fill — scroll is the timing */
}
```

## Do not

- Animate track **height** / **top** / **margin** for the fill
- Drive fill progress through React state every frame
- Use Lenis/`scroll` libraries unless the project already has them; prefer native scroll + rAF

## Verify

- Progress line tracks scroll up and down (reversible)
- Step highlight matches fill position
- No layout thrash in Performance panel while scrubbing (code-verified); confirm on a mid-range phone if jank is reported
