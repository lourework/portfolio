# Image Gallery System — Plan (as built)

## Overview

A unified image display system used across all project detail pages. Behavior adapts automatically based on how many images are in a given slot. The component is self-contained — no configuration needed beyond passing an `images` array.

---

## Behavior Rules

### Single Image
- Renders as a full-width `<img>` at 100% of the container width.
- Natural aspect ratio — no cropping, no fixed height.
- No interaction, no JS.

### Multiple Images → Card Deck Gallery
- Triggers when a slot has **2 or more** images.
- Cards stack physically like a hand of playing cards — spreading to the **bottom-right** with rotation.
- Navigation:
  - **Click** anywhere on the front card → next (wraps around).
  - **Swipe left** → next. **Swipe right** → previous.
  - **Keyboard** `←` `→` when gallery is focused.
- Cards visually **exceed the gallery's bounding box** (no `overflow: hidden` on the container) so the deck spread is fully visible.

---

## Card Deck Layout

```
┌─────────────────────┐  ← front card (flat, full width, strong shadow)
│                     │
└─────────────────────┘
    ┌────────────────────┐  ← card 2 (+16px right, +10px down, 5° rotation)
        ┌──────────────────┐  ← card 3 (+30px right, +18px down, 9° rotation)
```

Cards overflow the container boundary on the right and bottom — this is intentional.

### Stack config

| Position | translateX | translateY | rotation | opacity | shadow |
|---|---|---|---|---|---|
| Front | `0px` | `0px` | `0°` | `1` | `0 16px 48px rgba(0,0,0,0.22)` |
| Card 2 | `+16px` | `+10px` | `5°` | `0.97` | `0 10px 32px rgba(0,0,0,0.16)` |
| Card 3 | `+30px` | `+18px` | `9°` | `0.92` | `0 6px 18px rgba(0,0,0,0.12)` |

Max **3 cards** visible at once. Cards beyond that are pre-positioned at the card 3 slot with `opacity: 0` so they enter smoothly when the deck cycles.

---

## Animation

### Exit (swipe/click next)
- Front card: `translateX(-110%) rotate(-4deg) opacity(0)` — peels left.
- Stack cards rise to their new positions simultaneously.

### Exit (swipe right → previous)
- Front card: `translateX(+110%) rotate(+4deg) opacity(0)` — peels right.
- Stack cards sink back.

### Entering cards (from hidden)
- Pre-positioned at card 3 slot (already in the right place, `opacity: 0`).
- Fade in as they become visible — no position jump.

### Duration & easing
- `400ms`, `cubic-bezier(0.22,1,0.36,1)` — matches site-wide animation style.

### Drag-follow
- While dragging: front card follows pointer at `× 0.55` with a live rotation proportional to drag delta.
- Release < 60px → snap back. Release ≥ 60px → triggers advance.

---

## Custom Cursor

When hovering a gallery on pointer devices:
- Dot cursor hides.
- A pill-shaped label follows the pointer: `← swipe →`
- Style: dark background `rgba(26,26,26,0.85)`, cream `#FBFBF2` text, `border-radius: 100px`, `backdrop-filter: blur(4px)`.
- On leave: dot cursor restores.

---

## Container Sizing

The wrapper uses a **hidden spacer image** (same src as the active image, `visibility: hidden`) in normal flow to set the container height naturally. All cards are `position: absolute; top: 0; left: 0; width: 100%`.

`padding-bottom: 36px` reserves layout space so the deck cards below don't overlap content underneath.

No `overflow: hidden` — cards spread freely beyond the container. `html { overflow-x: hidden }` in `global.css` prevents horizontal scroll during exit animations.

---

## How to Use on Any Page

### 1. Import the component

```astro
---
import ImageGallery from '../components/ImageGallery'
import { url } from '../utils/url'
---
```

### 2. Replace image arrays

**Single image** (plain `<img>` behaviour, no change visually):
```astro
<ImageGallery client:load images={[url('assets/projects/slug/image.webp')]} alt="Description" />
```

**Multiple images** (card deck gallery):
```astro
<ImageGallery
  client:load
  images={[
    url('assets/projects/slug/img1.webp'),
    url('assets/projects/slug/img2.webp'),
    url('assets/projects/slug/img3.webp'),
  ]}
  alt="Solution title"
/>
```

### 3. The cursor works automatically

The `#gallery-cursor` element and its script live in `BaseLayout.astro` — every page using `BaseLayout` gets the gallery cursor for free. No extra setup needed.

---

## Files

| File | Role |
|---|---|
| `src/components/ImageGallery.tsx` | Self-contained React component — all animation logic |
| `src/styles/global.css` | Gallery cursor styles + `html { overflow-x: hidden }` |
| `src/layouts/BaseLayout.astro` | `#gallery-cursor` DOM element + cursor swap script |

## Currently applied to

- [x] `src/components/project/CaseDetail.astro` — solutions image arrays

## Pending (not yet applied)

- [ ] `src/components/project/FrontendDetail.astro`
- [ ] `src/components/project/UIDetail.astro`
- [ ] `src/components/project/StudyDetail.astro`
