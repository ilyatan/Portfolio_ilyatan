# Design Documentation
## Ilya Tan — UI|UX Designer Portfolio

> This document covers all design decisions, visual system, typography, color tokens, layout patterns, and component conventions used throughout the portfolio website.

---

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Typography](#typography)
3. [Color System](#color-system)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Hero Section](#hero-section)
7. [Bento Showcase Grid](#bento-showcase-grid)
8. [Navigation](#navigation)
9. [Dark Mode](#dark-mode)
10. [Animations](#animations)
11. [Responsive Breakpoints](#responsive-breakpoints)
12. [How to Add Content](#how-to-add-content)

---

## Design Philosophy

The portfolio follows a **minimalist, editorial** design language — inspired by high-end design studios and modern product portfolios. Core principles:

- **Whitespace first** — let content breathe; avoid visual clutter
- **Type-led** — typography carries the design weight; minimal decorative elements
- **System consistency** — every spacing value, color, and component follows the token system
- **Subtle motion** — animations feel purposeful, never distracting
- **Dark mode parity** — the dark theme is a first-class experience, not an afterthought

---

## Typography

### Font Families

| Role | Font | Weights Used | Usage |
|------|------|-------------|-------|
| **Base / UI / Body** | [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) | 300, 400, 500, 600, 700 | Base body text, navigation, labels, captions, buttons, metadata |
| **Display / Headings** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | 400, 500, 600, 700, Italic | Section headings, display titles, editorial italic accents (`em`), work detail titles |

### Why This Pairing Works
- **Josefin Sans** provides a clean, Scandinavian geometric foundation inspired by 1920s architecture. When set in body text, navigation, and uppercase-tracked labels, it gives the entire interface a structured, chic, and minimalist feel.
- **Cormorant Garamond** is one of the most celebrated modern luxury serifs on Google Fonts. Designed by Christian Thalmann, its razor-sharp hairline serifs and high-contrast stroke weights inject instant haute-couture elegance and editorial authority into headings and italics.

### Import

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
```

Both fonts are loaded in `<head>` (HTML `<link>`) and in `style.css` (`@import`) for redundancy.

### Type Scale

| Token | Value | Font | Usage |
|-------|-------|------|-------|
| Hero headline | `clamp(3rem, 8.5vw, 6.5rem)` | Josefin Sans Bold + Cormorant Italic | Main hero H1 |
| Section heading | `clamp(2rem, 4.5vw, 2.85rem)` | Cormorant Garamond 600 | H2 section titles |
| About heading | `clamp(2.75rem, 6.5vw, 4.25rem)` | Cormorant Garamond 600 | About page H1 |
| Body / Base | `1rem` / `1.0625rem` | Josefin Sans 300/400 | Paragraphs & copy |
| Small body | `0.9375rem` | Josefin Sans 300 | Hero sub-headline, descriptions |
| Caption | `0.875rem` | Josefin Sans 400 | Tags, dates, meta |
| Micro / Label | `0.7rem` / `0.75rem` | Josefin Sans (tracked 0.2em) | Eyebrows, badges, uppercase labels |

### CSS Helper Classes

```css
.font-display       /* Applies Cormorant Garamond serif */
.section__eyebrow   /* 0.7rem, uppercase, 0.2em letter-spacing (Josefin Sans) */
.section__heading   /* Cormorant Garamond, responsive size, 600 weight */
```

---

## Color System

All colors are CSS custom properties on `:root`, overridden in `[data-theme="dark"]`.

### Light Mode (default)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F7F7F5` | Page background |
| `--text-primary` | `#191919` | Main text, headings |
| `--text-secondary` | `#696969` | Subtitles, captions, muted |
| `--border` | `#E4E4E0` | Dividers, card borders |
| `--teal` | `#00BCD4` | Accent, focus rings, hover states |
| `--transition` | `0.3s ease` | Default transition timing |

### Dark Mode

| Token | Value |
|-------|-------|
| `--bg` | `#151515` |
| `--text-primary` | `#F5F5F2` |
| `--text-secondary` | `#A8A8A3` |
| `--border` | `#333333` |

### Hero Decorative Fill

| Mode | Color |
|------|-------|
| Light | `#EAEAF4` (soft lavender) |
| Dark | `#1C1C2A` (deep indigo) |

---

## Spacing & Layout

### Container

```css
max-width: 1200px;
margin: 0 auto;
padding: 0 1.5rem;
```

### Section Padding

```css
.section { padding: 6rem 1.5rem; }
```

### Spacing Scale

| Use | Value |
|-----|-------|
| XS gap | `0.375rem` |
| SM gap | `0.5rem – 0.75rem` |
| MD gap | `1rem – 1.5rem` |
| LG gap | `2rem – 3rem` |
| XL section spacing | `4rem – 6rem` |

---

## Component Library

### Buttons

```html
<!-- Primary (filled dark) -->
<a href="#" class="btn-primary">
  Label
  <svg class="btn-icon" ...></svg>
</a>

<!-- Secondary (ghost/outline) -->
<a href="#" class="btn-secondary">Label</a>
```

- `btn-primary`: `background: var(--text-primary)`, `color: var(--bg)`, hover → background/border to `var(--teal)` (`#00BCD4`), text to `#ffffff`
- `btn-secondary`: `border: 1px solid var(--border)`, hover → border/text to `var(--teal)` (`#00BCD4`)
- Padding: `0.75rem 1.5rem`
- Font: Josefin Sans, `0.875rem`, `font-weight: 600/500`

### Project Cards

Three variants: `large`, `medium`, standard.

```html
<a class="project-card project-card--large">
  <div class="project-card__image-wrap">
    <img src="..." alt="...">
    <div class="project-card__overlay"></div>
    <span class="project-card__badge">Category</span>
  </div>
  <div class="project-card__info">
    <div class="project-card__meta">
      <h3 class="project-card__title">Title</h3>
      <span class="project-card__year">2024</span>
    </div>
    <p class="project-card__desc">Description</p>
    <div class="project-card__tags">
      <span class="project-card__tag">Tag</span>
    </div>
  </div>
</a>
```

### Contact Links

```html
<!-- Primary -->
<a href="mailto:..." class="contact-link contact-link--primary">
  <svg>...</svg> email
</a>

<!-- Secondary -->
<a href="..." class="contact-link contact-link--secondary">
  <svg>...</svg> LinkedIn
</a>

<!-- Disabled (resume not yet configured) -->
<a href="#" class="contact-link contact-link--secondary contact-link--disabled">
  Resume / CV
</a>
```

---

## Hero Section

The hero fills the full viewport height and is split into two visual zones:

### Left Zone — Content

- **Label row**: `— UI/UX DESIGNER — MOBILE / SAAS / B2B` — Josefin Sans, 0.7rem, uppercase, 0.2em letter-spacing
- **Headline**: `I design digital / experiences for / *complex* products.` — Josefin Sans Bold, large responsive size. `<em>` renders in light italic and `var(--text-secondary)`
- **Sub-headline**: Short paragraph, 0.9375rem, `font-weight: 300`
- **CTAs**: Primary "Explore my work →" + Secondary "About me"

### Right Zone — Decorative Circles

Three concentric circle divs positioned absolutely:
- `.hero__deco-outer` — full border circle, `opacity: 0.5`
- `.hero__deco-mid` — inset 8%, `opacity: 0.35`
- `.hero__deco-filled` — inset 20%, filled lavender

The `.hero__deco` container is positioned `right: -10vw` so circles bleed off-screen intentionally.

### Scroll Indicator

```html
<div class="hero__scroll">
  <span class="hero__scroll-arrow">←</span>
  <span>SCROLL TO EXPLORE</span>
</div>
```

The `.hero__scroll` element has the `scrollSway` CSS animation — it slides 10px to the right and back, creating a side-to-side floating effect:

```css
@keyframes scrollSway {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(10px); }
}
/* Duration: 2.8s, easing: ease-in-out, infinite */
```

---

## Bento Showcase Grid

The About page includes a **Bento-style creative showcase** section for personal works (photography, graphic design, drawing, IT work). Located in `.showcase-section` at the bottom of the About page.

### Grid Structure

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 0.625rem;
}
```

### Item Span Variants

| Class | Grid Span | Use Case |
|-------|-----------|----------|
| `.bento-item--square` | 1 col × 1 row | Default square photo |
| `.bento-item--wide` | 2 cols × 1 row | Landscape / panoramic |
| `.bento-item--tall` | 1 col × 2 rows | Portrait photo |
| `.bento-item--large` | 2 cols × 2 rows | Hero / featured image |

### Placeholder State

When a category has no images (`items: []`), placeholder slots are automatically rendered with dashed borders and `+` icons — they show the developer where to add images and reference the correct `showcaseData` array path.

### How to Add Images

In `js/main.js`, find the `showcaseData` array and add items to the relevant category:

```js
{
  id: 'photography',
  items: [
    { src: '../images/showcase/photo-1.jpg', alt: 'Sunset at Manila Bay', span: 'wide' },
    { src: '../images/showcase/photo-2.jpg', alt: 'Street market detail', span: 'square' },
    { src: '../images/showcase/photo-3.jpg', alt: 'Portrait study', span: 'tall' },
  ],
}
```

Save images to `images/showcase/` relative to the project root.

---

## Navigation

### Structure — Desktop

```
[Logo]    [Work] [About] [Contact]    [● Open to opportunities]  [☀/☾]
```

### Structure — Mobile

```
[Logo]                                [☀/☾] [≡]
```

Mobile hamburger opens a full-width dropdown with all nav links.

### Logo & Favicon Behavior

- **Favicon / Browser tab**: `images/favicon.svg` (crisp vector SVG with `favicon.png` fallback)
- **Light mode nav logo**: `images/logo.png`
- **Dark mode nav logo**: `images/logo_darkmode.png`

Controlled with CSS class toggling — no JavaScript needed:

```css
.nav__logo .logo-dark  { display: none; }
[data-theme="dark"] .nav__logo .logo-light { display: none; }
[data-theme="dark"] .nav__logo .logo-dark  { display: block; }
```

### Scroll State

When scrolled past 40px, `.nav.scrolled` is applied:

```css
.nav.scrolled {
  background-color: var(--bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}
```

---

## Dark Mode

### Activation

- Auto-detects `prefers-color-scheme: dark` on first visit
- Toggle button in nav (`.nav__theme-btn`)
- Persisted to `localStorage` as key `theme` with value `'light'` or `'dark'`

### Preventing Flash (FOUC)

A blocking inline script in `<head>` reads localStorage before the page renders:

```html
<script>
  (function() {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = (saved === 'dark' || saved === 'light') ? saved : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
```

---

## Animations

### Fade-In on Scroll (`.fade-in`)

```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Delay modifiers**: `.delay-100` through `.delay-700` (100ms increments).

Triggered by `IntersectionObserver` in `initFadeIn()` at `threshold: 0.08`.

### Scroll Sway (Hero)

```css
@keyframes scrollSway {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(10px); }
}
```

### Available Dot Pulse

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
```

### Bento Image Hover Zoom

Images inside `.bento-item` scale to `1.05` on hover, duration `0.55s ease`.

### Custom Inverting Cursor (`mix-blend-mode: difference`)

Desktop devices with fine pointers (`(hover: hover) and (pointer: fine)`) feature a custom difference-blend cursor:
- **Rest State**: A 24px white circle that continually inverts the colors directly beneath it.
- **Hover State**: Automatically scales to 2.5× (60px) when hovering over interactive elements (`a`, `button`, `.project-card`, `.bento-item`, inputs, etc.), and expands to a dramatic 3.2× (77px) over the About profile photo (`.about-profile__photo`), inverting and highlighting the image.
- **Click State**: Scales down to 0.8× (or 2.0× while hovering) for tactile feedback.
- **Fluid Motion**: Hardware-accelerated 60/120fps linear interpolation (lerp) via `requestAnimationFrame`.
- **Touch/Mobile**: Hidden automatically on touch devices with no interference with native touch gestures.

> **Note:** All animations respect `prefers-reduced-motion: reduce` — when enabled, fade-in elements become immediately visible with no transition.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Change |
|-----------|-------|--------------|
| Mobile | `< 640px` | Single column, hamburger nav, bento 2 cols |
| Tablet | `≥ 640px` | 2-col grids, bento 3 cols |
| Desktop | `≥ 1024px` | Full 3–4 col layouts, decorative circles visible |

### Bento Grid Responsive

| Breakpoint | Columns | Row Height |
|-----------|---------|-----------|
| `< 640px` | 2 cols | 140px |
| `< 1024px` | 3 cols | 160px |
| `≥ 1024px` | 4 cols | 180px |

---

## How to Add Content

### Resume

1. Drop your PDF into the project (e.g. `resume/ilya-tan-resume.pdf`)
2. Open `js/main.js` → find `siteConfig`
3. Set: `resume: 'resume/ilya-tan-resume.pdf'`

Two buttons appear automatically: **View Resume** (opens in tab) + **Download CV** (forces download).

### Showcase Images

1. Save images to `images/showcase/`
2. Open `js/main.js` → find `showcaseData`
3. Push items into the category's `items` array with `src`, `alt`, and `span`

### New Project

1. Open `js/main.js` → find the `projects` array
2. Copy an existing object, update all fields including `slug`
3. Save cover image → `images/{slug}/cover.jpg`
4. Set `featured: true` for hero grid placement (max 3 featured)

---

*Last updated: October 2026*

