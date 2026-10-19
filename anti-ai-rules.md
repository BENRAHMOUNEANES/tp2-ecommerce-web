# ⚠️ Anti-AI-Generated Design Rules
## Every Single Thing That Makes a Website Look AI-Generated — NEVER Do These

> This file is a strict ruleset. Before shipping ANY component, section, or page, audit it against every rule below. Violating these rules makes the portfolio look cheap, generic, and AI-slop.

---

## 🎨 COLOR RULES

### FORBIDDEN Colors & Patterns
- [ ] **NO** indigo-to-violet gradients (the #6366f1 → #8b5cf6 combo) — this is THE #1 AI signature
- [ ] **NO** Tailwind's default `blue-500` / `indigo-500` / `violet-500` as primary brand colors
- [ ] **NO** pure `#000000` black or pure `#FFFFFF` white as backgrounds — always use off-tones
- [ ] **NO** the classic "dark slate + purple accent" color scheme (Vercel-copycat look)
- [ ] **NO** generic "tech blue" (`#3B82F6`) as the only accent color
- [ ] **NO** neon green on black as the only contrast combination (overused hacker-aesthetic)
- [ ] **NO** rainbow gradient text on every heading
- [ ] **NO** `opacity-10` white blob shapes floating in backgrounds
- [ ] **NO** "glassmorphism" applied everywhere indiscriminately (backdrop-blur on every card)

### REQUIRED Color Practices
- [x] Use off-whites: `#F7F5F0`, `#FAF9F6`, `#F0EDE8` instead of `#FFFFFF`
- [x] Use near-blacks: `#0D0D0D`, `#111010`, `#0E0E11` instead of `#000000`
- [x] Use the 60-30-10 rule: 60% dominant neutral, 30% secondary, 10% accent only
- [x] Brand colors must be **custom and intentional**, not a Tailwind default
- [x] Limit palette to 3-4 total colors maximum
- [x] Accent color appears only on CTAs, links, and 1-2 key highlights
- [x] Test all text/background combos for WCAG AA contrast ratio

---

## 🔤 TYPOGRAPHY RULES

### FORBIDDEN Typography Choices
- [ ] **NO** Inter as the ONLY font on the site (it's the #1 AI default font choice)
- [ ] **NO** Roboto as the primary brand font
- [ ] **NO** Open Sans as the primary brand font
- [ ] **NO** Lato as the primary brand font
- [ ] **NO** ALL-CAPS headings that are just big and bold with no visual personality
- [ ] **NO** disproportionately oversized headings (e.g., 96px font with thin weight) that look decorative but say nothing
- [ ] **NO** mixing more than 2 font families
- [ ] **NO** using the same font weight for headings and body text
- [ ] **NO** default browser `system-ui` fonts — they render differently per OS
- [ ] **NO** uniform letter-spacing across ALL text (headlines should have negative tracking, body should be normal)

### REQUIRED Typography Practices
- [x] Use a **personality font** for headlines (Space Grotesk, Syne, Plus Jakarta Sans, Clash Display, Satoshi, DM Serif Display)
- [x] Use a **functional font** for body text (DM Sans, Satoshi, Plus Jakarta Sans, Geist)
- [x] Use `next/font` to self-host fonts — never link to Google Fonts CDN externally (CLS risk)
- [x] Headings should have **negative letter-spacing** (`letter-spacing: -0.02em` to `-0.05em`)
- [x] Body text should have **relaxed line-height** (`line-height: 1.6` to `1.8`)
- [x] Font weights must create **clear hierarchy**: e.g., 700 for h1, 600 for h2, 500 for h3, 400 for body
- [x] Use variable fonts when possible for performance
- [x] Consider **kinetic typography** — headers that animate letter-by-letter or word-by-word on scroll

---

## 📐 LAYOUT & SPACING RULES

### FORBIDDEN Layout Patterns
- [ ] **NO** the classic "Hero: big text left, image right" layout with a centered CTA below
- [ ] **NO** 3-card feature grid immediately after hero (the #1 template layout)
- [ ] **NO** "Trusted by 10,000+ teams" floating badge or social proof widget floating randomly in hero
- [ ] **NO** symmetrical, mirror-image sections repeating the same card pattern
- [ ] **NO** "Bento box" grid if it's just decorative — every bento cell must have actual content
- [ ] **NO** generic animated stats counters ("5+ Years", "100+ Projects") as the only "proof"
- [ ] **NO** animated scroll mouse icon at bottom of hero
- [ ] **NO** uniform padding across ALL sections (e.g., `py-24` on every single section)
- [ ] **NO** "mathematically perfect" spacing that feels rigid and cold — rhythm should feel organic
- [ ] **NO** empty decorative gaps between sections that serve no visual purpose
- [ ] **NO** dashboard/analytics-style widgets used decoratively in a non-SaaS portfolio
- [ ] **NO** "floating" UI screenshots just hovering in whitespace with no context

### REQUIRED Layout Practices
- [x] Use **asymmetric layouts** — break the grid intentionally in at least 2 key sections
- [x] Vary padding per section based on its content purpose (not a fixed spacing token for all)
- [x] Use **negative space strategically** — silence that guides the eye, not emptiness
- [x] At least one section should use a **non-standard column count** (e.g., 5-column, 7-column, or masonry)
- [x] Use **overlapping elements** or slightly offset grids to create depth
- [x] Sections should have **distinct visual identities** — not all the same bg color and card style
- [x] Every section should have a **clear visual flow** that guides the eye top → CTA

---

## 🎬 ANIMATION RULES

### FORBIDDEN Animation Patterns
- [ ] **NO** generic scroll-triggered `opacity: 0 → 1` fade-in on EVERY element (overused)
- [ ] **NO** cards that dim or fade on hover (buttons should GAIN energy, not lose it)
- [ ] **NO** "loading spinner" animations used as a design element
- [ ] **NO** infinite auto-scrolling marquee/ticker for tech stack logos (it screams template)
- [ ] **NO** parallax on background images unless extremely subtle
- [ ] **NO** page transitions that are slow (>400ms) and dramatic — keeps users waiting
- [ ] **NO** animations that play on repeat when the user isn't scrolling (CPU waste, annoying)
- [ ] **NO** `bounce` or `pulse` keyframe animations on important UI elements
- [ ] **NO** 3D globe/earth rotating animation (every AI portfolio has this now)
- [ ] **NO** particle.js / tsParticles generic "starfield" backgrounds

### REQUIRED Animation Practices
- [x] Use **staggered children animations** — list items and cards reveal sequentially, not all at once
- [x] Reserve complex animations for **hero only** — keep rest of the page subtle
- [x] Use GSAP ScrollTrigger for scroll-driven storytelling if needed
- [x] Use Framer Motion for React component transitions
- [x] Keep total animation duration per element under **600ms**
- [x] Animations must have **purposeful easing** — custom cubic-bezier, not `ease-in-out` defaults
- [x] Hover states should feel **responsive and snappy** — 150ms-200ms transitions max
- [x] Add `prefers-reduced-motion` media query support — respect users who disable animations
- [x] Micro-interactions: focus states, button press feedback, form validation — these make it feel crafted

---

## ✍️ COPYWRITING RULES

### FORBIDDEN Copy Patterns
- [ ] **NO** em dashes (—) used to connect every sentence fragment — it's the AI writing fingerprint
- [ ] **NO** vague aspirational taglines: "Build the Future", "Unlock Your Potential", "At the intersection of X and Y"
- [ ] **NO** "Here's an uncomfortable truth..." as a hook
- [ ] **NO** "Passionate developer who loves crafting beautiful experiences" — cliché, says nothing
- [ ] **NO** bullet lists that start with the same word pattern repeatedly
- [ ] **NO** "Results-driven", "Detail-oriented", "Team player" in the about section
- [ ] **NO** copy that only describes WHAT you did — always say WHY and the IMPACT

### REQUIRED Copy Practices
- [x] Write in **first person, direct voice** — "I build apps that..." not "Building apps that..."
- [x] Be **specific and concrete** — name the app, name the outcome, name the technology
- [x] Use **storytelling structure** for each project: Problem → Solution → Outcome
- [x] Your tagline must answer: "Who are you, what do you do, who do you do it for"
- [x] Keep hero headline under 10 words
- [x] Every section header should **intrigue** — not just label ("Things I've Built" > "Projects")

---

## 🧩 COMPONENT RULES

### FORBIDDEN Component Choices
- [ ] **NO** generic hero with stock photo / blob SVG as background decoration
- [ ] **NO** skill percentage progress bars (they're meaningless and outdated)
- [ ] **NO** skill cloud/tag soup (every bootcamp template has this)
- [ ] **NO** timeline that looks like a copy-paste from a template
- [ ] **NO** testimonial carousel with fake-looking generic avatars
- [ ] **NO** "What I offer" three-icon card grid in the services section
- [ ] **NO** contact form that looks like a Material UI default form
- [ ] **NO** navbar with `Home | About | Projects | Contact` in plain text links
- [ ] **NO** footer that is just a centered copyright text and social icons

### REQUIRED Component Practices
- [x] Build **custom, bespoke** versions of every component — even if inspired by a library
- [x] Every card should have a **microinteraction** (hover state, focus state, active state)
- [x] The navbar should feel **intentional** — custom cursor, active state, underline animation, etc.
- [x] Footer should contain something **useful or delightful** — not just a placeholder
- [x] Use **real screenshots or mockups** for every project — no placeholder lorem ipsum images
- [x] Project cards should show **tech stack icons** with tooltips
- [x] Skill section should be **categorized and visual** — not a flat list

---

## 🚀 PERFORMANCE RULES (Signals of Senior Development)

- [ ] **NO** importing entire libraries when only one component is used (no `import * from 'library'`)
- [ ] **NO** un-optimized images (always use `next/image`)
- [ ] **NO** layout shifts on load (fonts must be preloaded via `next/font`)
- [ ] **NO** loading third-party scripts that block the main thread
- [x] Target Lighthouse scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100
- [x] Use `React.lazy()` and `Suspense` for heavy components
- [x] Implement **Open Graph meta tags** for every page (LinkedIn/Twitter share previews)
- [x] All images must have `alt` attributes
- [x] Site must be fully responsive from 320px to 2560px wide

---

## 🔍 SEO RULES

- [x] `<title>` must include name + role (e.g., "Anes Benrahmoune | Flutter & Full-Stack Developer")
- [x] `<meta name="description">` — unique per page, 150-160 chars
- [x] `<meta property="og:image">` — custom-designed OG image, not a screenshot
- [x] All headings must follow `h1 → h2 → h3` hierarchy (only ONE h1 per page)
- [x] Use semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<header>`
- [x] Implement `robots.txt` and `sitemap.xml`
- [x] Use structured data (JSON-LD) for Person schema

---

## ✅ PRE-SHIP CHECKLIST

Before considering any page "done", verify:
- [ ] No indigo/violet gradient present
- [ ] No Inter-only typography
- [ ] No 3-card "features" grid immediately after hero
- [ ] No generic scroll-fade animations on every element
- [ ] No em dash overuse in copy
- [ ] Mobile tested at 375px width
- [ ] Lighthouse score checked (Performance ≥ 90)
- [ ] All images optimized and have alt text
- [ ] `prefers-reduced-motion` supported
- [ ] Open Graph tags present
