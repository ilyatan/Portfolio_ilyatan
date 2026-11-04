/**
 * Ilya Tan Portfolio — Main JavaScript
 * Handles: theme, nav, fade-in animations, lightbox, project routing
 */

/* ============================================================
   SITE DATA
   ============================================================ */
const siteConfig = {
  name: 'Ilya Tan',
  title: 'UI|UX Designer',
  specializations: ['Mobile Applications', 'SaaS', 'B2B Systems'],
  headline: 'I design digital experiences for complex products.',
  subHeadline: "I'm Edmund Diaz II also known as Ilya Tan, a UI/UX Designer focused on creating clear, intuitive, and visually refined digital experiences. I work across mobile applications, SaaS platforms, and B2B systems, turning complicated workflows into products people can understand and use with confidence.",
  email: 'memongski@outlook.com',
  linkedin: 'https://linkedin.com/in/edmund-diaz-ii',
  // ── Resume ─────────────────────────────────────────────────
  // To enable: drop your PDF into the project folder and set the path below.
  // Example: resume: 'resume/ilya-tan-resume.pdf'
  // Or use an external link: resume: 'https://drive.google.com/...'
  resume: null,
  available: true,
  availableText: 'Open for new adventures',
}

const projects = [
  {
    id: '1',
    slug: 'carecompanion',
    title: 'CareCompanion',
    description: 'An elderly-care companion app concept designed to help family members stay informed about elderly loved ones living alone — covering health monitoring, check-ins, and emergency alerts.',
    category: 'Mobile Application',
    role: 'UI Designer',
    tags: ['Mobile', 'Healthcare', 'UX', 'iOS', 'Android'],
    coverImage: { src: 'images/carecompanion/cover.jpg', alt: 'CareCompanion app interface' },
    gallery: [
      { src: 'images/carecompanion/screen-1.jpg', alt: 'Home screen', caption: 'Home & Status Overview' },
      { src: 'images/carecompanion/screen-2.jpg', alt: 'Health log', caption: 'Daily Health Log' },
    ],
    caseSections: [
      { id: 'overview', title: 'Overview', content: 'CareCompanion is a concept mobile app aimed at reducing the anxiety family members feel when an elderly parent lives alone. The app bridges the gap between physical visits with passive health monitoring and gentle daily check-ins.' },
      { id: 'challenge', title: 'The Challenge', content: 'Designing for two distinct user groups — elderly individuals who may have limited tech literacy, and adult children who need quick, digestible health summaries — required careful information architecture and dual interface design considerations.' },
      { id: 'contribution', title: 'My Contribution', content: 'I was responsible for the full UI design: information architecture, screen flows, component design, and final visual design across both the caregiver and elderly-facing interfaces.' },
      { id: 'highlights', title: 'Design Highlights', content: 'Large tap targets and high contrast for elderly users. Minimal cognitive load on the caregiver dashboard — status at a glance. Warm, non-clinical visual language to reduce anxiety.' },
    ],
    featured: true,
    year: '2026',
  },
  {
    id: '2',
    slug: 'stayio',
    title: 'Stayio',
    description: 'A property management mobile app for landlords and tenants — covering bills, tenant management, utility consumption tracking, and amenity bookings.',
    category: 'Mobile Application',
    role: 'UI Designer — Mobile App',
    tags: ['Mobile', 'PropTech', 'Dashboard', 'iOS'],
    coverImage: { src: 'images/stayio/cover.jpg', alt: 'Stayio property management app' },
    gallery: [
      { src: 'images/stayio/screen-1.jpg', alt: 'Dashboard', caption: 'Property Dashboard' },
      { src: 'images/stayio/screen-2.jpg', alt: 'Billing', caption: 'Bill Management' },
    ],
    caseSections: [
      { id: 'overview', title: 'Overview', content: 'Stayio is a property management platform with both web and mobile components. My scope was focused exclusively on the mobile application — the daily-use companion for landlords managing their properties on the go.' },
      { id: 'contribution', title: 'My Contribution', content: 'Designed the complete mobile app UI including the tenant roster, billing summaries, utility consumption views, and amenity booking flows. The web portal was handled separately by another team.' },
      { id: 'highlights', title: 'Design Highlights', content: 'Clear data hierarchy for multi-property landlords. A billing flow that reduces manual entry errors. Consistent component library across the mobile screens.' },
    ],
    featured: true,
    year: '2025',
  },
  {
    id: '3',
    slug: 'brts',
    title: 'BRTS — Chat Support & Analytics',
    description: 'An add-on feature set for an existing business platform — introducing a real-time chat support module and an analytics and reporting dashboard for operational insights.',
    category: 'B2B SaaS',
    role: 'UI Designer — Feature Add-on',
    tags: ['SaaS', 'B2B', 'Analytics', 'Chat', 'Dashboard'],
    coverImage: { src: 'images/brts/cover.jpg', alt: 'BRTS chat and analytics dashboard' },
    gallery: [
      { src: 'images/brts/screen-1.jpg', alt: 'Chat interface', caption: 'Chat Support Interface' },
      { src: 'images/brts/screen-2.jpg', alt: 'Analytics', caption: 'Analytics & Reporting' },
    ],
    caseSections: [
      { id: 'overview', title: 'Overview', content: 'BRTS is an established business platform. My contribution was designing two specific feature additions: a live chat support system for operators and clients, and a data analytics/reporting module for operational decision-making.' },
      { id: 'challenge', title: 'The Challenge', content: 'Introducing new features into an existing design system without disrupting familiar workflows. The new modules needed to feel native to the platform while adding meaningful new capabilities.' },
      { id: 'contribution', title: 'My Contribution', content: 'Designed the chat support interface, the analytics dashboard layouts, and the data visualization patterns. Worked within the existing platform\'s design language while proposing component enhancements.' },
    ],
    featured: true,
    year: '2025-2026',
  },
  {
    id: '4',
    slug: 'washos',
    title: 'WashOS',
    description: 'A laundry service platform covering the full journey — from customer-facing booking on mobile to the operational management web interface used by staff.',
    category: 'Service Platform',
    role: 'UI Designer',
    tags: ['Mobile', 'Web', 'Service Design', 'Operations'],
    coverImage: { src: 'images/washos/cover.jpg', alt: 'WashOS laundry platform' },
    gallery: [
      { src: 'images/washos/screen-1.jpg', alt: 'Booking flow', caption: 'Customer Booking Flow' },
      { src: 'images/washos/screen-2.jpg', alt: 'Operations', caption: 'Operations Dashboard' },
    ],
    caseSections: [
      { id: 'overview', title: 'Overview', content: 'WashOS is a laundry service platform with two distinct interfaces: a consumer-facing mobile app for scheduling and tracking laundry pickups, and an operations dashboard for staff to manage orders, routes, and status updates.' },
      { id: 'contribution', title: 'My Contribution', content: 'I personally designed the mobile app booking experience and the web-based operations interface. The project required balancing simplicity for customers with information density for operational staff.' },
      { id: 'highlights', title: 'Design Highlights', content: 'A booking flow reduced to three primary steps. A real-time order status interface for operations staff. Consistent visual language across mobile and web contexts.' },
    ],
    featured: false,
    year: '2025',
  },
  {
    id: '5',
    slug: 'goodapps',
    title: 'GoodApps & GoodKredit',
    description: 'A website redesign project focused on clearly presenting company information and services — guided by direct business direction from the CEO to improve clarity and brand presentation.',
    category: 'Website Redesign',
    role: 'UI Designer',
    tags: ['Web', 'Brand', 'Redesign', 'Corporate'],
    coverImage: { src: 'images/goodapps/cover.jpg', alt: 'GoodApps website redesign' },
    gallery: [
      { src: 'images/goodapps/screen-1.jpg', alt: 'Homepage', caption: 'Homepage Redesign' },
      { src: 'images/goodapps/screen-2.jpg', alt: 'Product page', caption: 'GoodKredit Product Page' },
    ],
    caseSections: [
      { id: 'overview', title: 'Overview', content: 'GoodApps and GoodKredit are sister products under the same company. The redesign focused on restructuring how the company presents its services — cleaner navigation, improved content hierarchy, and a more professional visual tone.' },
      { id: 'challenge', title: 'The Challenge', content: 'Working with clear executive direction means balancing business priorities with good design practice. The objective was straightforward: make the company\'s services understandable at a glance.' },
      { id: 'contribution', title: 'My Contribution', content: 'Handled the full visual redesign of both websites, following brand and content direction from the CEO. Focused on layout clarity, typography, and presenting service information in a digestible structure.' },
    ],
    featured: false,
    year: '2026',
  },
]

const aboutData = {
  heading: 'Designer by profession.\nCurious about everything else.',
  intro: [
    "I'm a UI Designer focused on making digital experiences feel intuitive — whether that's a mobile app someone uses every morning or a complex B2B system that a team depends on daily.",
    "My work sits at the intersection of clarity and craft. I care about the details: the weight of a button, the rhythm of a layout, the moment a confusing flow becomes obvious.",
    "Before design became my full-time focus, I spent a lot of time tinkering with tech — fixing phones, building PCs, setting up networks. That technical background still shapes how I approach problems: practically, not just aesthetically.",
  ],
  interests: [
    { id: 'photography', label: 'Photography', description: 'Capturing everyday moments and finding composition in ordinary places.', gallery: [] },
    { id: 'designs', label: 'Design and Mock-ups', description: 'Transit ad mockups, brand identities, marketing graphics, and promotional design.', gallery: [] },
    { id: 'it-support', label: 'IT & Technical Work', description: 'Phone repairs, PC builds, network setups, and hardware troubleshooting.', gallery: [] },
    { id: 'drawing', label: 'Drawing', description: 'Sketching characters and scenes — mostly for fun.', gallery: [] },
    { id: 'manga', label: 'Manga', description: 'An ongoing reading habit. Currently alternating between several series.', gallery: [] },
  ],
}

/* ============================================================
   SHOWCASE DATA — Creations / Beyond the Screen
   To add images: push items into the `items` array for each category.
   Each item shape: { src: '../images/showcase/filename.jpg', alt: 'Description', span: 'square' }
   span options: 'square' (1×1) | 'wide' (2 cols) | 'tall' (2 rows) | 'large' (2×2)
   ============================================================ */
const showcaseData = [
  {
    id: 'photography',
    label: 'Photography',
    description: 'Capturing everyday moments, portraits, and finding composition in ordinary places.',
    items: [
      { src: '../images/showcase/photography/cover.JPG', thumb: '../images/showcase/photography/thumbs/cover.jpg', alt: 'Cafe Portrait with Red Cup' },
      { src: '../images/showcase/photography/photo-1.JPG', thumb: '../images/showcase/photography/thumbs/photo-1.jpg', alt: 'Through the Cafe Window' },
      { src: '../images/showcase/photography/photo-2.jpg', thumb: '../images/showcase/photography/thumbs/photo-2.jpg', alt: 'Reflections & Candid Glance' },
      { src: '../images/showcase/photography/photo-3.JPG', thumb: '../images/showcase/photography/thumbs/photo-3.jpg', alt: 'Lost in a Book' },
      { src: '../images/showcase/photography/photo-4.JPG', thumb: '../images/showcase/photography/thumbs/photo-4.jpg', alt: 'Urban Fashion Portrait' },
      { src: '../images/showcase/photography/photo-5.JPG', thumb: '../images/showcase/photography/thumbs/photo-5.jpg', alt: 'Sunlit Ponytail & Bokeh' },
      { src: '../images/showcase/photography/photo-6.jpg', thumb: '../images/showcase/photography/thumbs/photo-6.jpg', alt: 'Golden Hour Lens Flare' },
      { src: '../images/showcase/photography/photo-7.jpg', thumb: '../images/showcase/photography/thumbs/photo-7.jpg', alt: 'Beside the Vintage Red Classic' },
      { src: '../images/showcase/photography/photo-8.jpg', thumb: '../images/showcase/photography/thumbs/photo-8.jpg', alt: 'Baby in the Park' },
      { src: '../images/showcase/photography/photo-9.jpg', thumb: '../images/showcase/photography/thumbs/photo-9.jpg', alt: 'Zuri\'s Milestone in the Park' },
      { src: '../images/showcase/photography/photo-10.jpg', thumb: '../images/showcase/photography/thumbs/photo-10.jpg', alt: 'Geometric Mural & Reflections' },
      { src: '../images/showcase/photography/photo-11.jpg', thumb: '../images/showcase/photography/thumbs/photo-11.jpg', alt: 'Overlooking the Canopy' },
      { src: '../images/showcase/photography/photo-12.jpg', thumb: '../images/showcase/photography/thumbs/photo-12.jpg', alt: 'Afternoon on the Porch Swing' },
      { src: '../images/showcase/photography/photo-13.jpg', thumb: '../images/showcase/photography/thumbs/photo-13.jpg', alt: 'Embrace on the Bamboo Bridge' },
      { src: '../images/showcase/photography/photo-14.jpg', thumb: '../images/showcase/photography/thumbs/photo-14.jpg', alt: 'Laughter in the Woods' },
      { src: '../images/showcase/photography/photo-15.jpg', thumb: '../images/showcase/photography/thumbs/photo-15.jpg', alt: 'Quiet Forest Moment' },
      { src: '../images/showcase/photography/photo-16.jpg', thumb: '../images/showcase/photography/thumbs/photo-16.jpg', alt: 'Melody from Above' },
      { src: '../images/showcase/photography/photo-17.jpg', thumb: '../images/showcase/photography/thumbs/photo-17.jpg', alt: 'Window Seat at the Cafe' },
      { src: '../images/showcase/photography/photo-18.jpg', thumb: '../images/showcase/photography/thumbs/photo-18.jpg', alt: 'Levitation in Mid-Air' },
      { src: '../images/showcase/photography/photo-19.jpg', thumb: '../images/showcase/photography/thumbs/photo-19.jpg', alt: 'Cafe Daydreaming' },
    ],
  },
  {
    id: 'designs',
    label: 'Design and Mock-ups',
    description: 'Transit ad mockups, brand identities, marketing graphics, and promotional design.',
    items: [
      { src: '../images/showcase/designs/d_cover.jpg', thumb: '../images/showcase/designs/thumbs/d_cover.jpg', alt: 'Bus Advertisement — Transit Campaign' },
      { src: '../images/showcase/designs/d_thumb_1.jpg', thumb: '../images/showcase/designs/thumbs/d_thumb_1.jpg', alt: 'Bus Advertisement — Retail & Route Campaign' },
      { src: '../images/showcase/designs/d_thumb_2.jpg', thumb: '../images/showcase/designs/thumbs/d_thumb_2.jpg', alt: 'Modern Minibus Ad — High Mobility Showcase' },
      { src: '../images/showcase/designs/d_thumb_3.jpg', thumb: '../images/showcase/designs/thumbs/d_thumb_3.jpg', alt: 'Rear Bus Ad Mockup — Highway Skyline' },
      { src: '../images/showcase/designs/d_thumb_4.jpg', thumb: '../images/showcase/designs/thumbs/d_thumb_4.jpg', alt: 'Minibus Side Wrap — Sunset Cityscape' },
      { src: '../images/showcase/designs/d_thumb_5.jpg', thumb: '../images/showcase/designs/thumbs/d_thumb_5.jpg', alt: 'LokalStore Launch Promo — QR Platform' },
      { src: '../images/showcase/designs/d_thumb_6.png', thumb: '../images/showcase/designs/thumbs/d_thumb_6.png', alt: 'SimplyShare Foundation — Brochure Design' },
      { src: '../images/showcase/designs/d_thumb_7.png', thumb: '../images/showcase/designs/thumbs/d_thumb_7.png', alt: 'Product Retouching — Perfume Mockup' },
      { src: '../images/showcase/designs/d_thumb_8.png', thumb: '../images/showcase/designs/thumbs/d_thumb_8.png', alt: 'Stayio — Brand Identity & Logo Design' },
      { src: '../images/showcase/designs/d_thumb_9.png', thumb: '../images/showcase/designs/thumbs/d_thumb_9.png', alt: '9tea — Fresh Tea Brand Identity' },
    ],
  },
  {
    id: 'drawing',
    label: 'Drawing',
    description: 'Sketching characters and scenes — mostly for fun.',
    items: [
      // { src: '../images/showcase/draw-1.jpg', alt: 'Description', span: 'square' },
      // { src: '../images/showcase/draw-2.jpg', alt: 'Description', span: 'wide' },
    ],
  },
  {
    id: 'it-work',
    label: 'IT & Technical Work',
    description: 'Phone repairs, PC builds, network setups, and hardware documentation.',
    items: [
      // { src: '../images/showcase/it-1.jpg', alt: 'Description', span: 'square' },
    ],
  },
]

/* ============================================================
   THEME
   ============================================================ */
const Theme = {
  get() {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  },
  set(value) {
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
    Theme.updateIcons(value)
  },
  toggle() {
    const next = Theme.get() === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    Theme.set(next)
  },
  updateIcons(theme) {
    document.querySelectorAll('[data-theme-icon]').forEach(el => {
      el.innerHTML = theme === 'dark' ? Icons.sun() : Icons.moon()
    })
    document.querySelectorAll('[data-theme-label]').forEach(el => {
      el.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`)
    })
  },
  init() {
    Theme.set(Theme.get())
  },
}

/* ============================================================
   SVG ICONS
   ============================================================ */
const Icons = {
  sun: () => `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: () => `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  arrowRight: () => `<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: () => `<svg viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  mail: () => `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  linkedin: () => `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  fileText: () => `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  menu: () => `<svg viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x: () => `<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronLeft: () => `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: () => `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  maximize: () => `<svg viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>`,
  download: () => `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  externalLink: () => `<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
}

/* ============================================================
   NAV
   ============================================================ */
function renderNav() {
  const navLinks = [
    { href: 'index.html#work', label: 'Work' },
    { href: 'pages/about.html', label: 'About' },
    { href: 'index.html#contact', label: 'Contact' },
  ]

  return `
    <nav class="nav" id="nav">
      <div class="nav__inner">
        <a href="index.html" class="nav__logo" aria-label="Ilya Tan — Home">
          <img class="logo-light" src="images/logo.png" alt="Ilya Tan" height="28">
          <img class="logo-dark"  src="images/logo_darkmode.png" alt="Ilya Tan" height="28">
        </a>
        <div class="nav__links">
          ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        </div>
        <div class="nav__right">
          ${siteConfig.available ? `
          <div class="nav__available">
            <div class="nav__available-dot"></div>
            <span>${siteConfig.availableText || 'Open for new adventures'}</span>
          </div>` : ''}
          <button class="nav__theme-btn" data-theme-label aria-label="Toggle theme" onclick="Theme.toggle()">
            <span data-theme-icon>${Icons.moon()}</span>
          </button>
          <button class="nav__hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" onclick="toggleMobileMenu()">
            <span id="hamburgerIcon">${Icons.menu()}</span>
          </button>
        </div>
      </div>
      <div class="nav__mobile-menu" id="mobileMenu">
        ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    </nav>
  `
}

// For sub-pages (adjust relative paths)
function renderNavSubpage() {
  const navLinks = [
    { href: '../index.html#work', label: 'Work' },
    { href: 'about.html', label: 'About' },
    { href: '../index.html#contact', label: 'Contact' },
  ]

  return `
    <nav class="nav" id="nav">
      <div class="nav__inner">
        <a href="../index.html" class="nav__logo" aria-label="Ilya Tan — Home">
          <img class="logo-light" src="../images/logo.png" alt="Ilya Tan" height="28">
          <img class="logo-dark"  src="../images/logo_darkmode.png" alt="Ilya Tan" height="28">
        </a>
        <div class="nav__links">
          ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        </div>
        <div class="nav__right">
          ${siteConfig.available ? `
          <div class="nav__available">
            <div class="nav__available-dot"></div>
            <span>${siteConfig.availableText || 'Open for new adventures'}</span>
          </div>` : ''}
          <button class="nav__theme-btn" data-theme-label aria-label="Toggle theme" onclick="Theme.toggle()">
            <span data-theme-icon>${Icons.moon()}</span>
          </button>
          <button class="nav__hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" onclick="toggleMobileMenu()">
            <span id="hamburgerIcon">${Icons.menu()}</span>
          </button>
        </div>
      </div>
      <div class="nav__mobile-menu" id="mobileMenu">
        ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    </nav>
  `
}

function initNav() {
  // Scroll effect
  const nav = document.getElementById('nav')
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  }

  // Update theme icons now that nav is in DOM
  Theme.updateIcons(Theme.get())
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu')
  const btn = document.getElementById('hamburger')
  const icon = document.getElementById('hamburgerIcon')
  if (!menu) return
  const isOpen = menu.classList.toggle('open')
  btn.setAttribute('aria-expanded', isOpen)
  icon.innerHTML = isOpen ? Icons.x() : Icons.menu()
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initFadeIn() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
let lightboxItems = []
let lightboxIndex = 0

function openLightbox(items, index) {
  lightboxItems = items
  lightboxIndex = index
  renderLightboxContent()
  document.getElementById('lightbox').classList.add('open')
  document.body.style.overflow = 'hidden'
  document.addEventListener('keydown', lightboxKeyHandler)
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open')
  document.body.style.overflow = ''
  document.removeEventListener('keydown', lightboxKeyHandler)
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length
  renderLightboxContent()
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length
  renderLightboxContent()
}

function lightboxKeyHandler(e) {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lightboxPrev()
  if (e.key === 'ArrowRight') lightboxNext()
}

function renderLightboxContent() {
  const item = lightboxItems[lightboxIndex]
  const content = document.getElementById('lightboxContent')
  const counter = document.getElementById('lightboxCounter')

  content.innerHTML = `
    <img class="lightbox__img" src="${item.src}" alt="${item.alt}">
    ${item.caption ? `<p class="lightbox__caption">${item.caption}</p>` : ''}
  `

  if (counter) {
    counter.textContent = lightboxItems.length > 1
      ? `${lightboxIndex + 1} / ${lightboxItems.length}`
      : ''
  }

  // Show/hide nav arrows
  const prevBtn = document.getElementById('lightboxPrev')
  const nextBtn = document.getElementById('lightboxNext')
  if (prevBtn) prevBtn.style.display = lightboxItems.length > 1 ? 'block' : 'none'
  if (nextBtn) nextBtn.style.display = lightboxItems.length > 1 ? 'block' : 'none'
}

function renderLightbox() {
  return `
    <div class="lightbox" id="lightbox" onclick="closeLightbox()" role="dialog" aria-modal="true" aria-label="Image lightbox">
      <button class="lightbox__close" onclick="closeLightbox()" aria-label="Close lightbox">${Icons.x()}</button>
      <button class="lightbox__prev" id="lightboxPrev" onclick="event.stopPropagation(); lightboxPrev()" aria-label="Previous image">${Icons.chevronLeft()}</button>
      <div class="lightbox__content" id="lightboxContent" onclick="event.stopPropagation()"></div>
      <button class="lightbox__next" id="lightboxNext" onclick="event.stopPropagation(); lightboxNext()" aria-label="Next image">${Icons.chevronRight()}</button>
      <div class="lightbox__counter" id="lightboxCounter"></div>
    </div>
  `
}

/* ============================================================
   PROJECT CARD
   ============================================================ */
function renderProjectCard(project, variant = 'medium', delay = 0) {
  const isLarge = variant === 'large'

  return `
    <a href="pages/work-detail.html?slug=${project.slug}"
       class="project-card ${isLarge ? 'project-card--large' : ''} fade-in${delay ? ` delay-${delay}` : ''}">
      <div class="project-card__image-wrap">
        <img
          src="${project.coverImage.src}"
          alt="${project.coverImage.alt}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.querySelector('.project-card__placeholder').style.display='flex'"
        >
        <div class="project-card__placeholder" style="display:none">${project.title}</div>
        <div class="project-card__overlay"></div>
        <span class="project-card__badge">${project.category}</span>
      </div>
      <div class="project-card__info">
        <div class="project-card__meta">
          <div>
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__desc">${project.description}</p>
          </div>
          <span class="project-card__year">${project.year || ''}</span>
        </div>
        <div class="project-card__tags">
          ${project.tags.slice(0, 3).map(t => `<span class="project-card__tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `
}

/* ============================================================
   FOOTER
   ============================================================ */
function renderFooter() {
  return `
    <footer>
      <div class="footer__inner">
        <p>© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.</p>
        <p>UI|UX Designer — Cebu, Philippines</p>
      </div>
    </footer>
  `
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function initHomePage() {
  const root = document.getElementById('root')
  if (!root) return

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  root.innerHTML = `
    ${renderNav()}

    <main>
      <!-- HERO -->
      <section class="hero" id="hero">
        <!-- Content -->
        <div class="hero__content">
          <!-- Label row -->
          <p class="hero__label-row fade-in delay-100">
            — ${siteConfig.title} — ${siteConfig.specializations.join(' / ')}
          </p>

          <!-- Headline -->
          <h1 class="hero__name fade-in delay-200">
            I design digital<br>
            experiences for<br>
            <em>complex</em> products.
          </h1>

          <!-- Sub-headline -->
          <p class="hero__headline fade-in delay-300">${siteConfig.subHeadline}</p>

          <!-- CTAs -->
          <div class="hero__ctas fade-in delay-400">
            <a href="#work" class="btn-primary" onclick="event.preventDefault(); document.getElementById('work')?.scrollIntoView({behavior:'smooth'})">
              Explore my work
              <svg class="btn-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="pages/about.html" class="btn-secondary">About me</a>
          </div>
        </div>

        <!-- Decorative circles -->
        <div class="hero__deco fade-in delay-500" aria-hidden="true">
          <div class="hero__deco-outer"></div>
          <div class="hero__deco-mid"></div>
          <div class="hero__deco-filled"></div>
        </div>

        <!-- Scroll indicator -->
        <div class="hero__scroll fade-in delay-600" aria-hidden="true">
          <span class="hero__scroll-arrow">←</span>
          <span>Scroll to explore</span>
        </div>
      </section>

      <!-- SELECTED WORK -->
      <section id="work" class="section container">
        <div class="work-header fade-in">
          <h2 class="section__heading font-display">Selected Work</h2>
          <span class="work-count">${projects.length} Projects</span>
        </div>

        <!-- Featured -->
        ${featured.length > 0 ? `
        <div class="work-grid-featured">
          ${featured[0] ? renderProjectCard(featured[0], 'large', 0) : ''}
          <div class="work-grid-featured__secondary">
            ${featured.slice(1, 3).map((p, i) => renderProjectCard(p, 'medium', (i + 1) * 100)).join('')}
          </div>
        </div>` : ''}

        <!-- Rest -->
        ${rest.length > 0 ? `
        <div class="work-grid-rest">
          ${rest.map((p, i) => renderProjectCard(p, 'medium', i * 100)).join('')}
        </div>` : ''}
      </section>

      <!-- ABOUT TEASER -->
      <section class="section section--bordered">
        <div class="container">
          <div class="about-teaser">
            <div class="fade-in">
              <p class="section__eyebrow">About</p>
              <h2 class="section__heading font-display" style="margin-bottom:1.5rem;">
                Designer by profession.<br><em>Curious about everything else.</em>
              </h2>
              <p style="color:var(--text-secondary);line-height:1.75;margin-bottom:2rem;max-width:400px;font-weight:300;">
                I'm a UI|UX Designer focused on making digital experiences feel intuitive —
                whether that's a mobile app or a complex B2B system that a team depends on daily.
              </p>
              <a href="pages/about.html" class="about-teaser__read-more">
                Read more about me
                ${Icons.arrowRight()}
              </a>
            </div>
            <div class="interest-cards fade-in delay-200">
              ${['Photography', 'Graphic Design', 'IT & Hardware', 'Drawing'].map(i => `
              <div class="interest-card"><p>${i}</p></div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="section section--bordered">
        <div class="container">
          <div class="fade-in">
            <p class="section__eyebrow">Contact</p>
            <h2 class="section__heading font-display" style="margin-bottom:1rem;">Let's work together.</h2>
            <p class="contact-body">
              I'm open to freelance projects, full-time opportunities, and interesting collaborations.
            </p>
          </div>
          <div class="contact-links fade-in delay-200">
            <a href="mailto:${siteConfig.email}" class="contact-link contact-link--primary">
              ${Icons.mail()}
              ${siteConfig.email}
            </a>
            <a href="${siteConfig.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link contact-link--secondary">
              ${Icons.linkedin()}
              LinkedIn
            </a>
            ${siteConfig.resume ? `
            <a href="${siteConfig.resume}" target="_blank" rel="noopener noreferrer" class="contact-link contact-link--secondary" title="View Resume">
              ${Icons.externalLink()}
              View Resume
            </a>
            <a href="${siteConfig.resume}" download class="contact-link contact-link--secondary" title="Download Resume">
              ${Icons.download()}
              Download CV
            </a>` : `
            <a href="#" class="contact-link contact-link--secondary contact-link--disabled" title="Add your resume path to siteConfig.resume in main.js">
              ${Icons.fileText()}
              Resume / CV
            </a>`}
          </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
    ${renderLightbox()}
  `

  initNav()
  initFadeIn()
}

/* ============================================================
   ABOUT PAGE
   ============================================================ */
function renderBentoGrid(category) {
  const hasItems = category.items.length > 0

  if (hasItems) {
    return category.items.map(item => `
      <div class="bento-item bento-item--${item.span || 'square'}" onclick="openLightbox([{src:'${item.src}',alt:'${item.alt}'}], 0)">
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
        <div class="bento-item__overlay"></div>
        ${item.alt ? `<span class="bento-item__caption">${item.alt}</span>` : ''}
      </div>
    `).join('')
  }

  // Placeholder layout (4 slots: 1 wide + 3 square)
  return `
    <div class="bento-item bento-item--wide bento-placeholder">
      <div class="bento-placeholder__inner">
        <span class="bento-placeholder__icon">+</span>
        <p class="bento-placeholder__text">${category.label}</p>
        <span class="bento-placeholder__hint">Coming soon</span>
      </div>
    </div>
    <div class="bento-item bento-item--square bento-placeholder">
      <div class="bento-placeholder__inner">
        <span class="bento-placeholder__icon">+</span>
        <p class="bento-placeholder__text">Work</p>
      </div>
    </div>
    <div class="bento-item bento-item--square bento-placeholder">
      <div class="bento-placeholder__inner">
        <span class="bento-placeholder__icon">+</span>
        <p class="bento-placeholder__text">Work</p>
      </div>
    </div>
  `
}

/* ── Interactive Photography Gallery ────────────────────── */
let currentPhotoIndex = 0

function renderPhotographyGallery(category) {
  const items = category.items || []
  if (items.length === 0) {
    return `<div class="bento-grid">${renderBentoGrid(category)}</div>`
  }

  const initial = items[0]
  const total = items.length
  const totalFormatted = total < 10 ? '0' + total : total

  return `
    <div class="photo-gallery" id="photography-gallery">
      <!-- Left Hero Column (Desktop: Left, Mobile: Top) -->
      <div class="photo-gallery__hero-col">
        <div class="photo-gallery__hero-frame" id="photo-hero-frame" onclick="openPhotoLightbox(currentPhotoIndex)" title="Click to view fullscreen">
          <img id="photo-hero-img" class="photo-gallery__hero-img" src="${initial.src}" alt="${initial.alt || category.label}" onerror="this.onerror=null; if('${initial.thumb}') this.src='${initial.thumb}'">
          
          <div class="photo-gallery__hero-overlay">
            <span class="photo-gallery__badge" id="photo-hero-counter">01 / ${totalFormatted}</span>
            <button type="button" class="photo-gallery__expand-btn" aria-label="Open fullscreen" title="Open fullscreen" onclick="event.stopPropagation(); openPhotoLightbox(currentPhotoIndex)">
              ${Icons.maximize()}
            </button>
          </div>

          <div class="photo-gallery__hero-caption" id="photo-hero-caption">
            ${initial.alt || category.label}
          </div>
        </div>
      </div>

      <!-- Right Thumbnail Column (Desktop: Right, Mobile: Bottom) -->
      <div class="photo-gallery__side-col">
        <div class="photo-gallery__meta">
          <div class="photo-gallery__meta-header">
            <span class="photo-gallery__meta-eyebrow">Interactive Gallery</span>
            <span class="photo-gallery__meta-hint">Hover to zoom • Click to preview</span>
          </div>
          <h4 class="photo-gallery__meta-title" id="photo-meta-title">${initial.alt || category.label}</h4>
        </div>

        <div class="photo-gallery__grid" id="photo-gallery-grid" role="region" aria-label="Photography thumbnails">
          ${items.map((item, idx) => `
            <button
              type="button"
              class="photo-gallery__thumb ${idx === 0 ? 'photo-gallery__thumb--active' : ''}"
              data-index="${idx}"
              onclick="selectHeroPhoto(${idx})"
              aria-label="${item.alt || `Photo ${idx + 1}`}"
              title="${item.alt || `Photo ${idx + 1}`}"
            >
              <img src="${item.thumb || item.src}" alt="${item.alt || `Photo ${idx + 1}`}" loading="lazy" onerror="this.onerror=null; this.src='${item.src}'">
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

function selectHeroPhoto(index) {
  const photoCat = showcaseData.find(c => c.id === 'photography')
  if (!photoCat || !photoCat.items || !photoCat.items[index]) return

  const item = photoCat.items[index]
  currentPhotoIndex = index

  const heroImg = document.getElementById('photo-hero-img')
  const heroCounter = document.getElementById('photo-hero-counter')
  const heroCaption = document.getElementById('photo-hero-caption')
  const metaTitle = document.getElementById('photo-meta-title')
  const thumbs = document.querySelectorAll('#photo-gallery-grid .photo-gallery__thumb')

  if (heroImg) {
    heroImg.style.opacity = '0.35'
    heroImg.style.transform = 'scale(0.98)'

    const preloader = new Image()
    preloader.src = item.src
    const applyImage = () => {
      if (currentPhotoIndex === index) {
        heroImg.src = item.src
        heroImg.alt = item.alt || photoCat.label
        heroImg.style.opacity = '1'
        heroImg.style.transform = 'scale(1)'
      }
    }
    preloader.onload = applyImage
    preloader.onerror = () => {
      if (currentPhotoIndex === index) {
        heroImg.src = item.thumb || item.src
        heroImg.alt = item.alt || photoCat.label
        heroImg.style.opacity = '1'
        heroImg.style.transform = 'scale(1)'
      }
    }
    setTimeout(applyImage, 180)
  }

  const total = photoCat.items.length
  const currentFormatted = (index + 1) < 10 ? '0' + (index + 1) : (index + 1)
  const totalFormatted = total < 10 ? '0' + total : total

  if (heroCounter) heroCounter.textContent = `${currentFormatted} / ${totalFormatted}`
  if (heroCaption) heroCaption.textContent = item.alt || photoCat.label
  if (metaTitle) metaTitle.textContent = item.alt || photoCat.label

  thumbs.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('photo-gallery__thumb--active')
    } else {
      thumb.classList.remove('photo-gallery__thumb--active')
    }
  })
}

function openPhotoLightbox(index = 0) {
  const photoCat = showcaseData.find(c => c.id === 'photography')
  if (!photoCat || !photoCat.items || photoCat.items.length === 0) return

  const lightboxItems = photoCat.items.map(item => ({
    src: item.src,
    alt: item.alt || photoCat.label,
    caption: item.alt || ''
  }))

  openLightbox(lightboxItems, index)
}

window.selectHeroPhoto = selectHeroPhoto
window.openPhotoLightbox = openPhotoLightbox

/* ── Interactive Design & Mock-ups Gallery (Alternate Layout) ── */
let currentDesignIndex = 0

function renderDesignGallery(category) {
  const items = category.items || []
  if (items.length === 0) {
    return `<div class="bento-grid">${renderBentoGrid(category)}</div>`
  }

  const initial = items[0]
  const total = items.length
  const totalFormatted = total < 10 ? '0' + total : total

  return `
    <div class="photo-gallery photo-gallery--alternate" id="designs-gallery">
      <!-- Right Hero Column (Desktop: Right, Mobile: Top) -->
      <div class="photo-gallery__hero-col">
        <div class="photo-gallery__hero-frame photo-gallery__hero-frame--design" id="design-hero-frame" onclick="openDesignLightbox(currentDesignIndex)" title="Click to view fullscreen">
          <img id="design-hero-img" class="photo-gallery__hero-img photo-gallery__hero-img--design" src="${initial.src}" alt="${initial.alt || category.label}" onerror="this.onerror=null; if('${initial.thumb}') this.src='${initial.thumb}'">
          
          <div class="photo-gallery__hero-overlay">
            <span class="photo-gallery__badge" id="design-hero-counter">01 / ${totalFormatted}</span>
            <button type="button" class="photo-gallery__expand-btn" aria-label="Open fullscreen" title="Open fullscreen" onclick="event.stopPropagation(); openDesignLightbox(currentDesignIndex)">
              ${Icons.maximize()}
            </button>
          </div>

          <div class="photo-gallery__hero-caption" id="design-hero-caption">
            ${initial.alt || category.label}
          </div>
        </div>
      </div>

      <!-- Left Thumbnail Column (Desktop: Left, Mobile: Bottom) -->
      <div class="photo-gallery__side-col">
        <div class="photo-gallery__meta">
          <div class="photo-gallery__meta-header">
            <span class="photo-gallery__meta-eyebrow">Design & Mock-ups</span>
            <span class="photo-gallery__meta-hint">Hover to zoom • Click to preview</span>
          </div>
          <h4 class="photo-gallery__meta-title" id="design-meta-title">${initial.alt || category.label}</h4>
        </div>

        <div class="photo-gallery__grid photo-gallery__grid--designs" id="design-gallery-grid" role="region" aria-label="Design and mock-up thumbnails">
          ${items.map((item, idx) => `
            <button
              type="button"
              class="photo-gallery__thumb ${idx === 0 ? 'photo-gallery__thumb--active' : ''}"
              data-index="${idx}"
              onclick="selectHeroDesign(${idx})"
              aria-label="${item.alt || `Design ${idx + 1}`}"
              title="${item.alt || `Design ${idx + 1}`}"
            >
              <img src="${item.thumb || item.src}" alt="${item.alt || `Design ${idx + 1}`}" loading="lazy" onerror="this.onerror=null; this.src='${item.src}'">
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

function selectHeroDesign(index) {
  const designCat = showcaseData.find(c => c.id === 'designs' || c.id === 'graphic-design')
  if (!designCat || !designCat.items || !designCat.items[index]) return

  const item = designCat.items[index]
  currentDesignIndex = index

  const heroImg = document.getElementById('design-hero-img')
  const heroCounter = document.getElementById('design-hero-counter')
  const heroCaption = document.getElementById('design-hero-caption')
  const metaTitle = document.getElementById('design-meta-title')
  const thumbs = document.querySelectorAll('#design-gallery-grid .photo-gallery__thumb')

  if (heroImg) {
    heroImg.style.opacity = '0.35'
    heroImg.style.transform = 'scale(0.98)'

    const preloader = new Image()
    preloader.src = item.src
    const applyImage = () => {
      if (currentDesignIndex === index) {
        heroImg.src = item.src
        heroImg.alt = item.alt || designCat.label
        heroImg.style.opacity = '1'
        heroImg.style.transform = 'scale(1)'
      }
    }
    preloader.onload = applyImage
    preloader.onerror = () => {
      if (currentDesignIndex === index) {
        heroImg.src = item.thumb || item.src
        heroImg.alt = item.alt || designCat.label
        heroImg.style.opacity = '1'
        heroImg.style.transform = 'scale(1)'
      }
    }
    setTimeout(applyImage, 180)
  }

  const total = designCat.items.length
  const currentFormatted = (index + 1) < 10 ? '0' + (index + 1) : (index + 1)
  const totalFormatted = total < 10 ? '0' + total : total

  if (heroCounter) heroCounter.textContent = `${currentFormatted} / ${totalFormatted}`
  if (heroCaption) heroCaption.textContent = item.alt || designCat.label
  if (metaTitle) metaTitle.textContent = item.alt || designCat.label

  thumbs.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('photo-gallery__thumb--active')
    } else {
      thumb.classList.remove('photo-gallery__thumb--active')
    }
  })
}

function openDesignLightbox(index = 0) {
  const designCat = showcaseData.find(c => c.id === 'designs' || c.id === 'graphic-design')
  if (!designCat || !designCat.items || designCat.items.length === 0) return

  const lightboxItems = designCat.items.map(item => ({
    src: item.src,
    alt: item.alt || designCat.label,
    caption: item.alt || ''
  }))

  openLightbox(lightboxItems, index)
}

window.selectHeroDesign = selectHeroDesign
window.openDesignLightbox = openDesignLightbox

function initAboutPage() {
  const root = document.getElementById('root')
  if (!root) return

  root.innerHTML = `
    ${renderNavSubpage()}

    <main class="about-page">
      <div class="container">
        <a href="../index.html" class="back-link fade-in">
          ${Icons.arrowLeft()}
          Back to Home
        </a>

        <h1 class="about-heading fade-in delay-100">${aboutData.heading}</h1>

        <div class="about-bio">
          <div class="about-bio__text">
            ${aboutData.intro.map((p, i) => `
              <p class="fade-in delay-${(i + 1) * 100}">${p}</p>
            `).join('')}
          </div>
          <div class="fade-in delay-200">
            <div class="about-profile__photo">
              <img
                src="../images/profile/ilyatan_profile.jpg"
                alt="Ilya Tan — UI|UX Designer"
                onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;color:var(--text-secondary);font-size:14px;&quot;>Profile Photo</span>')"
              >
            </div>
            <div class="about-profile__info" style="margin-top:1rem;">
              <p>Ilya Tan</p>
              <p>Edmund Diaz II</p>
              <p>UI|UX Designer</p>
              <p>Cebu, Philippines</p>
            </div>
          </div>
        </div>

        <!-- Interests -->
        <div class="fade-in" style="border-top:1px solid var(--border);padding-top:4rem;margin-bottom:6rem;">
          <p class="section__eyebrow" style="margin-bottom:2rem;">Interests</p>
          <div class="interests-grid">
            ${aboutData.interests.map(interest => `
              <div class="interests-grid__item">
                <p class="interests-grid__label">${interest.label}</p>
                ${interest.description ? `<p class="interests-grid__desc">${interest.description}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- ── Showcase / Creations (Bento) ─────────────────── -->
      <div class="showcase-section container">
        <div class="showcase-section__intro fade-in">
          <p class="section__eyebrow">Creations</p>
          <h2 class="showcase-section__heading">Beyond the screen.</h2>
          <p class="showcase-section__sub">
            A collection of personal work outside UI design — photography, design & mock-ups, drawing, and more.
          </p>
        </div>

        ${showcaseData.map((category, i) => `
        <div class="showcase-category fade-in delay-${Math.min((i + 1) * 100, 400)}">
          <div class="showcase-category__header">
            <h3 class="showcase-category__title">${category.label}</h3>
            <p class="showcase-category__desc">${category.description}</p>
          </div>
          ${category.id === 'photography'
      ? renderPhotographyGallery(category)
      : (category.id === 'designs' || category.id === 'graphic-design')
        ? renderDesignGallery(category)
        : `<div class="bento-grid">${renderBentoGrid(category)}</div>`
    }
        </div>
        `).join('')}
      </div>
    </main>

    ${renderFooter()}
    ${renderLightbox()}
  `

  initNav()
  initFadeIn()
}

/* ============================================================
   WORK DETAIL PAGE
   ============================================================ */
function initWorkDetailPage() {
  const root = document.getElementById('root')
  if (!root) return

  const params = new URLSearchParams(window.location.search)
  const slug = params.get('slug')
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    root.innerHTML = `
      ${renderNavSubpage()}
      <div class="not-found container" style="padding-top:6rem;">
        <h1>404</h1>
        <p>Project not found.</p>
        <a href="../index.html" class="btn-primary">← Go Home</a>
      </div>
      ${renderFooter()}
    `
    initNav()
    return
  }

  // Find next project for navigation
  const idx = projects.indexOf(project)
  const nextProject = projects[(idx + 1) % projects.length]

  document.title = `${project.title} — Ilya Tan`

  root.innerHTML = `
    ${renderNavSubpage()}

    <main class="work-detail">
      <div class="container">
        <!-- Back -->
        <a href="../index.html#work" class="back-link fade-in">
          ${Icons.arrowLeft()}
          Back to Work
        </a>

        <!-- Hero info -->
        <div class="work-detail__hero">
          <div class="work-detail__meta-row fade-in delay-100">
            <h1 class="work-detail__title">${project.title}</h1>
          </div>

          <div class="work-detail__info-row fade-in delay-200">
            <div class="work-detail__info-item">
              <label>Category</label>
              <span>${project.category}</span>
            </div>
            <div class="work-detail__info-item">
              <label>Role</label>
              <span>${project.role}</span>
            </div>
            ${project.year ? `
            <div class="work-detail__info-item">
              <label>Year</label>
              <span>${project.year}</span>
            </div>` : ''}
          </div>

          <div class="work-detail__tags fade-in delay-300">
            ${project.tags.map(t => `<span class="work-detail__tag">${t}</span>`).join('')}
          </div>

          <!-- Cover image -->
          <div class="work-detail__cover fade-in delay-400">
            <img
              src="../${project.coverImage.src}"
              alt="${project.coverImage.alt}"
              onerror="this.style.display='none'; this.parentElement.classList.add('work-detail__cover-placeholder'); this.parentElement.innerHTML='<div class=&quot;work-detail__cover-placeholder&quot;>${project.title}</div>'"
            >
          </div>
        </div>

        <!-- Case Study -->
        ${project.caseSections && project.caseSections.length > 0 ? `
        <div class="case-study">
          ${project.caseSections.map((sec, i) => `
          <div class="case-section fade-in delay-${Math.min((i + 1) * 100, 500)}">
            <p class="case-section__title">${sec.title}</p>
            <p class="case-section__content">${sec.content}</p>
          </div>
          `).join('')}
        </div>` : ''}

        <!-- Gallery -->
        ${project.gallery && project.gallery.length > 0 ? `
        <div class="work-gallery fade-in">
          <p class="work-gallery__heading">Project Gallery</p>
          <div class="work-gallery__grid">
            ${project.gallery.map((item, i) => `
            <button
              class="work-gallery__item"
              onclick="openLightbox(projectGallery, ${i})"
              aria-label="View ${item.alt}"
            >
              <img
                src="../${item.src}"
                alt="${item.alt}"
                loading="lazy"
                onerror="this.style.display='none'"
              >
              ${item.caption ? `<span class="work-gallery__caption">${item.caption}</span>` : ''}
            </button>
            `).join('')}
          </div>
        </div>` : ''}

        <!-- Next project -->
        <div class="next-project fade-in">
          <p class="next-project__label">Next Project</p>
          <a href="work-detail.html?slug=${nextProject.slug}" class="next-project__link">
            ${nextProject.title}
            ${Icons.arrowRight()}
          </a>
        </div>
      </div>
    </main>

    ${renderFooter()}
    ${renderLightbox()}
  `

  // Expose gallery for lightbox
  window.projectGallery = project.gallery

  initNav()
  initFadeIn()
}

/* ============================================================
   CUSTOM INVERTING CURSOR
   ============================================================ */
function initCustomCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  let cursor = document.getElementById('customCursor')
  if (!cursor) {
    cursor = document.createElement('div')
    cursor.id = 'customCursor'
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)
  }

  let mouseX = -100
  let mouseY = -100
  let currentX = -100
  let currentY = -100
  let currentScale = 1
  let targetScale = 1
  let isHovering = false
  let isPhotoHover = false
  let isDown = false
  let firstMove = true

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    if (firstMove) {
      currentX = mouseX
      currentY = mouseY
      firstMove = false
    }
    cursor.style.opacity = '1'
  })

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0'
  })

  document.addEventListener('mousedown', () => {
    isDown = true
  })

  document.addEventListener('mouseup', () => {
    isDown = false
  })

  // Selectors that trigger the expanded inverting cursor
  const hoverSelector = 'a, button, [role="button"], input, textarea, select, .project-card, .bento-item, .interest-card, .work-gallery__item, .hero__scroll, .nav__logo, .nav__available, .back-link, .about-profile__photo, .photo-gallery__hero-frame, .photo-gallery__thumb'
  const photoSelector = '.about-profile__photo, .photo-gallery__hero-frame'

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(photoSelector)) {
      isHovering = true
      isPhotoHover = true
    } else if (e.target.closest(hoverSelector)) {
      isHovering = true
      isPhotoHover = false
    }
  })

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(photoSelector)) {
      isHovering = false
      isPhotoHover = false
    } else if (e.target.closest(hoverSelector)) {
      isHovering = false
      isPhotoHover = false
    }
  })

  function renderCursor() {
    currentX += (mouseX - currentX) * 0.22
    currentY += (mouseY - currentY) * 0.22

    if (isDown) {
      targetScale = isHovering ? 2.0 : 0.8
    } else if (isPhotoHover) {
      targetScale = 3.2
    } else if (isHovering) {
      targetScale = 2.5
    } else {
      targetScale = 1
    }

    currentScale += (targetScale - currentScale) * 0.18

    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentScale.toFixed(3)})`
    requestAnimationFrame(renderCursor)
  }

  requestAnimationFrame(renderCursor)
}

/* ============================================================
   PAGE ROUTER — detect which page we're on
   ============================================================ */
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

