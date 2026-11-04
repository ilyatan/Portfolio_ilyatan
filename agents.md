# Agents Documentation
## Ilya Tan — UI|UX Designer Portfolio

> This document is intended for AI coding agents working on this codebase. It describes the project architecture, file structure, rendering patterns, data models, update procedures, and known conventions so agents can make accurate changes without breaking the site.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Architecture: How the Site Works](#architecture-how-the-site-works)
4. [Data Models](#data-models)
5. [Rendering System](#rendering-system)
6. [Page Routing](#page-routing)
7. [Theme System](#theme-system)
8. [How to Make Common Changes](#how-to-make-common-changes)
9. [CSS Architecture](#css-architecture)
10. [Conventions & Gotchas](#conventions--gotchas)

---

## Project Overview

A **vanilla JavaScript, no-build-step portfolio website** for Ilya Tan, a UI|UX Designer.

- **No framework, no bundler** — plain HTML, CSS, and JS
- **Single JS file** (`main.js`) that renders all pages dynamically
- **Client-side routing** — page type detected from `window.location.pathname`
- **Single CSS file** (`style.css`) with CSS custom properties for theming
- **Google Fonts** — Josefin Sans (base/UI) + Cormorant Garamond (display/headings)

---

## File Structure

```
Portfolio_5_antigravity/
├── index.html              ← Entry point for ALL pages (root + subpages load same JS)
├── design.md               ← Visual/design documentation
├── agents.md               ← This file — dev/agent documentation
│
├── css/
│   └── style.css           ← All styles (single file, ~1500+ lines)
│
├── js/
│   └── main.js             ← All logic, data, and rendering (~900+ lines)
│
├── pages/
│   ├── about.html          ← About page HTML shell (loads same main.js)
│   └── work-detail.html    ← Project detail HTML shell (loads same main.js)
│
└── images/
    ├── favicon.svg          ← Vector address bar favicon icon
    ├── favicon.png          ← PNG fallback favicon
    ├── logo.png             ← Light mode logo
    ├── logo_darkmode.png    ← Dark mode logo
    ├── profile/
    │   └── ilya.jpg         ← Profile photo (About page)
    ├── showcase/            ← Personal work images (photography, design, etc.)
    │   ├── photography/     ← Full-resolution photos (cover.JPG, photo-N.jpg)
    │   │   └── thumbs/      ← Lightweight web-optimized thumbnails (360px)
    │   └── designs/         ← Graphic design & mock-ups (d_cover.jpg, d_thumb_N.ext)
    │       └── thumbs/      ← Lightweight web-optimized thumbnails (360px)
    ├── carecompanion/       ← Project images (cover.jpg, screen-N.jpg)
    ├── stayio/
    ├── brts/
    ├── washos/
    └── goodapps/
```

---

## Architecture: How the Site Works

### HTML Shells

All three pages (`index.html`, `pages/about.html`, `pages/work-detail.html`) are minimal HTML shells. They all have the same structure:

```html
<body>
  <div id="root"></div>
  <script src="js/main.js"></script>  <!-- or ../js/main.js for subpages -->
</body>
```

The `#root` div is empty — **all content is injected by JavaScript**.

### Rendering Flow

```
DOMContentLoaded fires
  → Theme.init() (reads localStorage / prefers-color-scheme)
  → Path detection from window.location.pathname
  → initHomePage() | initAboutPage() | initWorkDetailPage()
    → Builds HTML string
    → Sets root.innerHTML = ...
    → initNav() — sets up scroll listener, updates theme icons
    → initFadeIn() — sets up IntersectionObserver
```

---

## Data Models

All data lives in `js/main.js` as plain JavaScript constants.

### `siteConfig`

```js
const siteConfig = {
  name: 'Ilya Tan',
  title: 'UI|UX Designer',
  specializations: ['Mobile Applications', 'SaaS', 'B2B Systems'],
  headline: 'I design digital experiences for complex products.',
  subHeadline: 'Long description paragraph shown in hero...',
  email: 'memongski@outlook.com',
  linkedin: 'https://linkedin.com/in/...',
  resume: null,        // Set to a file path or URL string to enable resume links
  available: true,     // Controls the "Open to select opportunities" badge
}
```

### `projects[]`

Array of project objects. Each:

```js
{
  id: '1',
  slug: 'carecompanion',          // Used in URL: ?slug=carecompanion
  title: 'CareCompanion',
  description: 'Short description for card...',
  category: 'Mobile Application', // Shown as badge on card
  role: 'UI Designer',            // Shown in work detail info row
  tags: ['Mobile', 'Healthcare'], // Pill tags on card and detail page
  coverImage: {
    src: 'images/carecompanion/cover.jpg',  // Relative to root
    alt: 'Alt text',
  },
  gallery: [
    { src: 'images/.../screen-1.jpg', alt: '...', caption: '...' },
  ],
  caseSections: [
    { id: 'overview', title: 'Overview', content: 'Paragraph text...' },
  ],
  featured: true,    // true = shown in featured grid (max 3); false = secondary grid
  year: '2024',
}
```

**Image path note**: In `renderProjectCard()` (home page), paths are relative to root (`images/...`). In `initWorkDetailPage()`, images are prefixed with `../` automatically.

### `aboutData`

```js
const aboutData = {
  heading: 'Designer by profession.\nCurious about everything else.',
  intro: ['Paragraph 1...', 'Paragraph 2...', 'Paragraph 3...'],
  interests: [
    { id: 'photography', label: 'Photography', description: '...', gallery: [] },
    // ...
  ],
}
```

The `heading` uses `\n` for line breaks — the CSS applies `white-space: pre-line`.

### `showcaseData[]`

```js
const showcaseData = [
  {
    id: 'photography',
    label: 'Photography',
    description: 'Short category description',
    items: [
      // { src: '../images/showcase/photo-1.jpg', alt: 'Caption', span: 'wide' }
      // span: 'square' | 'wide' | 'tall' | 'large'
    ],
  },
  // ... more categories
]
```

When `items` is empty, the `renderBentoGrid()` function renders placeholder slots automatically.

---

## Rendering System

All page content is built using **template literal HTML strings** returned from render functions.

### Key Render Functions

| Function | Returns | Called by |
|----------|---------|-----------|
| `renderNav()` | Nav HTML (root-relative paths) | `initHomePage()` |
| `renderNavSubpage()` | Nav HTML (`../` relative paths) | `initAboutPage()`, `initWorkDetailPage()` |
| `renderProjectCard(project, variant, delay)` | Single card HTML | `initHomePage()` |
| `renderBentoGrid(category)` | Bento grid HTML | `initAboutPage()` |
| `renderFooter()` | Footer HTML | All init functions |
| `renderLightbox()` | Lightbox modal HTML | All init functions |

### Icons

All SVG icons are in the `Icons` object:

```js
const Icons = {
  sun: () => `<svg ...>...</svg>`,
  moon: () => `...`,
  arrowRight: () => `...`,
  arrowLeft: () => `...`,
  mail: () => `...`,
  linkedin: () => `...`,
  fileText: () => `...`,
  download: () => `...`,
  externalLink: () => `...`,
  menu: () => `...`,
  x: () => `...`,
  chevronLeft: () => `...`,
  chevronRight: () => `...`,
}
```

To add a new icon, add a new method that returns an SVG string. SVGs use `viewBox="0 0 24 24"` and rely on CSS for `stroke`, `fill`, `width`, `height`.

---

## Page Routing

The page router runs at the bottom of `main.js`:

```js
document.addEventListener('DOMContentLoaded', () => {
  Theme.init()

  const path = window.location.pathname
  const filename = path.split('/').pop()

  if (filename === 'index.html' || filename === '' || path.endsWith('/')) {
    initHomePage()
  } else if (filename === 'about.html') {
    initAboutPage()
  } else if (filename === 'work-detail.html') {
    initWorkDetailPage()
  }

  initCustomCursor()
})
```

To add a new page:
1. Create a new HTML shell in `pages/`
2. Add a new `else if` branch checking the filename
3. Create a corresponding `initNewPage()` function

---

## Theme System

The `Theme` object manages all theme state:

```js
Theme.get()     // Returns 'light' or 'dark'
Theme.set(val)  // Sets theme, updates icons, writes localStorage
Theme.toggle()  // Flips between light and dark
Theme.init()    // Called on DOMContentLoaded
Theme.updateIcons(theme)  // Updates all [data-theme-icon] elements
```

### Logo Switching

The nav renders two `<img>` elements per logo:

```html
<img class="logo-light" src="images/logo.png" alt="Ilya Tan">
<img class="logo-dark"  src="images/logo_darkmode.png" alt="Ilya Tan">
```

CSS controls visibility purely:

```css
.nav__logo .logo-dark  { display: none; }
[data-theme="dark"] .nav__logo .logo-light { display: none; }
[data-theme="dark"] .nav__logo .logo-dark  { display: block; }
```

**Important**: Do NOT use JS to toggle logos. The CSS approach works before JS runs, preventing logo flicker on page load.

---

## How to Make Common Changes

### Change siteConfig values

Edit the `siteConfig` object at the top of `js/main.js`. Changes take effect immediately — all render functions read from this object.

### Add / edit a project

Edit the `projects` array in `js/main.js`. The array order matters:
- `featured: true` projects appear in the featured grid in array order
- Non-featured projects appear in the secondary grid in array order

### Enable resume download

Set `siteConfig.resume` to the file path:
```js
resume: 'resume/ilya-tan-resume.pdf'
// or
resume: 'https://drive.google.com/file/d/.../view'
```

When set, two buttons render in the Contact section: **View Resume** and **Download CV**.

### Add showcase images

Append to the `items` array of the relevant category in `showcaseData`:

```js
items: [
  { src: '../images/showcase/photo-1.jpg', alt: 'Caption text', span: 'wide' },
]
```

The `src` path must be relative to the About page (`pages/about.html`), hence `../images/...`.

### Change font

1. Update the `@import` in `css/style.css` (line 7)
2. Update the `<link>` in `index.html` (line 11)
3. Update `font-family` in CSS where needed:
   - Body: `font-family` on `body` selector
   - Display: `.font-display`, `.section__heading`, `.about-heading`, `.work-detail__title`, `.next-project__link`

### Add a new nav link

Edit the `navLinks` array inside `renderNav()` and `renderNavSubpage()`. Both functions must be updated — they have different path prefixes (`images/...` vs `../images/...`).

### Add a new bento category

Append a new object to the `showcaseData` array in `js/main.js`:

```js
{
  id: 'new-category',
  label: 'Category Name',
  description: 'Short description.',
  items: [],
}
```

---

## CSS Architecture

### Single file, organized by sections

`style.css` is organized with comment block headers:

```
/* ============================================================
   SECTION NAME
   ============================================================ */
```

**Section order:**
1. Google Fonts import
2. CSS Variables (`:root` + `[data-theme="dark"]`)
3. Reset & Base
4. Scrollbar
5. Typography helpers
6. Layout / Container
7. Focus styles
8. Navigation
9. Animations (fade-in, delays)
10. Hero Section
11. Section Common + Buttons
12. Work Section + Project Cards
13. About Teaser
14. Contact Section
15. Footer
16. About Page
17. Work Detail Page
18. Lightbox
19. 404 Not Found
20. Resume / Contact disabled state
21. Showcase / Bento Grid
22. About Page Profile Role

### CSS Custom Properties

Never hard-code colors. Always use tokens:
- `var(--bg)` — backgrounds
- `var(--text-primary)` — main text
- `var(--text-secondary)` — muted text
- `var(--border)` — borders and dividers
- `var(--teal)` — accent/brand color
- `var(--transition)` — `0.3s ease` shorthand

### Responsive pattern

Mobile-first. Use `@media (min-width: N)` for progressive enhancement:

```css
/* Mobile default */
.some-grid { grid-template-columns: 1fr; }

/* Tablet+ */
@media (min-width: 640px) {
  .some-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .some-grid { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Conventions & Gotchas

### Image paths in JS

| Context | Path prefix |
|---------|------------|
| `initHomePage()` project cards | `images/project/file.jpg` (root-relative) |
| `initWorkDetailPage()` cover/gallery | `../` prefixed automatically: `../images/...` |
| `showcaseData` items (about page) | `../images/showcase/photography/file.ext` (with `thumbs/` fallback) |
| `initAboutPage()` profile photo | `../images/profile/ilya.jpg` |

### Template literals in render functions

All HTML is built using template literals (backtick strings) with `${}` interpolation. Quotes inside HTML attributes must use double quotes `"` since the outer string uses backticks. Nested template literals (for conditional rendering) use backticks inside `${}`:

```js
${condition ? `<div class="...">${value}</div>` : ''}
```

### `.fade-in` must be added to new elements

Any new element that should animate on scroll needs `class="fade-in"`. Add `delay-100` through `delay-700` for staggered animations.

### Lightbox is global

The lightbox is rendered once per page via `renderLightbox()`. The `openLightbox(items, index)` function is global and accepts an array of `{src, alt, caption}` objects.

### `siteConfig.resume = null` is intentional

The contact section renders a disabled placeholder button when `resume` is `null`. This avoids broken links. Update `resume` to a real path to enable the download and view buttons.

### Nav available badge

The "Open to select opportunities" badge is in the nav, NOT in the hero section. It's hidden on mobile via:

```css
@media (max-width: 767px) {
  .nav__right .nav__available { display: none; }
}
```

It's controlled by `siteConfig.available` (boolean).

---

*Last updated: October 2026*

