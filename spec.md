# Portfolio – Project Spec

## Overview

Personal portfolio website for Barbara Lourenço (Babi), a Product & UX/UI Designer based in Longueuil, QC.

**References**
- Content: https://babilourenco.notion.site/hi-i-m-babi-2cb3639869c180f5ad6fc1a96f7710e9
- Design: https://portez.framer.website/
- Astro React integration: https://docs.astro.build/en/guides/integrations-guide/react/

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro |
| UI Components | React (Astro islands) |
| Styling | Tailwind CSS |
| Deployment | TBD |

---

## Design Direction

Based on the Portez theme:

- Minimal, content-first layout
- Strong typographic hierarchy
- Clean project cards (category tag + title)
- Sparse spacing — no decorative clutter
- Professional, contemporary aesthetic: "clarity, function, emotion"

### Design Tokens (to be extracted from Portez)

- **Colors:** TBD
- **Typography:** TBD — font family, sizes, weights
- **Spacing:** TBD

---

## Site Map & Routing

Multi-page architecture mirroring the Notion structure:

```
/                          → Home (hero + selected work preview + contact)
/about                     → About page (bio, skills, tools)
/work                      → All projects listing (all 18, filterable by category)
/work/[slug]               → Individual project detail page
```

### All project slugs

#### UX/UI Cases
| Slug | Title |
|---|---|
| `merinio-employee-experience` | Merinio — Employee Experience Redesign |
| `merinio-operations-dashboard` | Merinio — Operations & Dashboard Experience |
| `merinio-automation-bulk` | Merinio — Automation & Bulk Management |
| `motto-office-locator` | Motto Mortgage — Office Locator |
| `mondelez-club-platform` | Mondelez — Club Mondelez Platform |

#### Front-end Projects
| Slug | Title |
|---|---|
| `marista-interactive-totem` | MARISTA — Interactive Totem |
| `frimesa-website` | Frimesa — Website |
| `friminho-iogurte` | Friminho Iogurte — Infographic |
| `friminho-achocolatado` | Friminho Achocolatado — Infographic |

#### UI Projects
| Slug | Title |
|---|---|
| `motto-center` | Motto Center |
| `cormora` | Cormora |
| `meuPS` | MeuPS |
| `mon` | MON |

#### Study Projects
| Slug | Title |
|---|---|
| `cozy-psychological-care` | COZY — Remote Psychological Care |
| `eva-ux-bootcamp` | EVA — UX Design Bootcamp |
| `banco-itau-mobile-redesign` | Banco Itaú — Mobile App Home Redesign |
| `frais-healthy-recipes` | FRAIS — Healthy Recipes App |
| `meditation-app-ui` | Meditation App UI — Prototyping Study |

---

## Page Designs

### `/` — Home

Sections (scroll):
1. **Hero** — name, tagline, intro callout, CTAs (View my work / Get in touch)
2. **Selected Work** — featured UX/UI cases only (5 cards with image, category, title, short description → link to `/work/[slug]`)
3. **Contact** — email + LinkedIn

Hero copy:
> **hi, i'm babi**
> *a UX Designer guided by empathy*
> crafting intuitive, meaningful digital experiences where clarity, humanity, and technology meet

Callout:
> I specialize in building scalable design systems, optimizing user journeys, and launching new products from zero. With expertise in WCAG, inclusive design, and accessible UX, I focus on solutions that work for real people. I thrive in cross-functional teams and communicate easily with developers, PMs, and stakeholders.

---

### `/about` — About

Sections:
1. **Bio** — full paragraph text
2. **Beyond work** — personal interests as tags/pills
3. **UX Skills** — two-column list
4. **Tools** — two-column list

Bio text:
> I'm Barbara Lourenço, a Product & UX/UI Designer based in Longueuil, QC. With a multidisciplinary background in multimedia, web design, and frontend development, I create digital experiences that are intuitive, accessible, and visually thoughtful. I've worked with agencies, startups, and product companies in Brazil and Canada. My strengths include building scalable design systems, refining user journeys, and designing interfaces that balance clarity and creativity. After a recent maternity leave, I'm now looking for new opportunities in Product & UX Design while also exploring my artistic side through photography. I bring empathy, strategy, and a multidisciplinary lens to everything I design.

Beyond work tags: Oliver's mom · photography · traveling · reality shows · hands-on crafts · dog lover · brazilian funk · wine · friends

**UX Skills:** User Flows · Style Guides · Design Thinking · Wireframing · Qualitative & Quantitative Research · High-Fidelity Prototypes · Usability Testing · Personas · Accessibility · Design Systems · Heuristic Evaluation · Comparative Analysis

**Tools:** Figma · FigJam · Miro · Maze · Adobe Creative Suite · Webflow · WordPress · Jira · Notion · HTML · CSS · JavaScript

---

### `/work` — All Projects

- Page header: "work" or "cases"
- Filter tabs by category: All · UX/UI · Front-end · UI · Study
- Grid of all 18 project cards
- Each card: cover image, category tag, title, short description
- Card links to `/work/[slug]`

---

### `/work/[slug]` — Project Detail Page

There are **three distinct page templates** depending on project type. All share the same route `[slug].astro` but render different layouts based on `project.type`.

---

#### Template A — `type: "case"` (UX/UI Cases)
Deep structured case study. Used by: Merinio ×3, Motto Mortgage, Mondelez.

```
┌─────────────────────────────┐
│  ← Back to work             │
│  Category tags              │
│  Project Title              │
│  Role · Product · Platform  │
│  Duration · Focus           │
├─────────────────────────────┤
│  Overview paragraph         │
├─────────────────────────────┤
│  ## The Problem / Challenge │
├─────────────────────────────┤
│  ## Goals          (list)   │
├─────────────────────────────┤
│  ## My Role        (list)   │
├─────────────────────────────┤
│  ## Process        (list)   │
├─────────────────────────────┤
│  ## Key Solutions           │
│     ### Solution title      │
│     paragraph + images      │
│     [Figma embed]  (opt.)   │
│     (repeats per solution)  │
├─────────────────────────────┤
│  ## Impact / Outcome (list) │
├─────────────────────────────┤
│  ## Learnings               │
├─────────────────────────────┤
│  ← Prev          Next →     │
└─────────────────────────────┘
```

---

#### Template B — `type: "frontend"` (Front-end Projects)
Brief project showcase. Used by: MARISTA, Frimesa, Friminho ×2.

```
┌─────────────────────────────┐
│  ← Back to work             │
│  Category tags              │
│  Project Title              │
│  Stack: HTML | CSS | JS...  │
├─────────────────────────────┤
│  Overview paragraph         │
│  Insight / creative concept │
├─────────────────────────────┤
│  Image gallery (grid)       │
├─────────────────────────────┤
│  ← Prev          Next →     │
└─────────────────────────────┘
```

---

#### Template C — `type: "ui"` (UI Projects)
Grouped UI screens by feature. Used by: Motto Center, Cormora, MeuPS, MON.

```
┌─────────────────────────────┐
│  ← Back to work             │
│  Category tags              │
│  Project Title              │
│  Context note (client/role) │
├─────────────────────────────┤
│  ## Feature Group 1         │
│  screens / images           │
│  [Figma embed]  (opt.)      │
├─────────────────────────────┤
│  ## Feature Group 2         │
│  screens / images           │
│  [Figma embed]  (opt.)      │
│  (repeats per group)        │
├─────────────────────────────┤
│  ← Prev          Next →     │
└─────────────────────────────┘
```

---

#### Template D — `type: "study"` (Study Projects)
Full end-to-end UX process. Used by: COZY, EVA, Banco Itaú, FRAIS, Meditation App.

```
┌─────────────────────────────┐
│  ← Back to work             │
│  Category tags              │
│  Project Title              │
├─────────────────────────────┤
│  ## Overview / Context      │
│  (scenario, problem space)  │
├─────────────────────────────┤
│  ## Project Goal            │
├─────────────────────────────┤
│  ## Users / Personas        │
│  images                     │
├─────────────────────────────┤
│  ## User Context            │
│  (journey maps, stories)    │
│  images                     │
├─────────────────────────────┤
│  ## Research                │
│  (quantitative + qual.)     │
│  images                     │
├─────────────────────────────┤
│  ## Solution Alternatives   │
│  (HMW, impact matrix)       │
│  images                     │
├─────────────────────────────┤
│  ## Solution                │
│  (concept + branding)       │
├─────────────────────────────┤
│  ## Wireframes              │
│  images                     │
│  [Figma embed]  (opt.)      │
├─────────────────────────────┤
│  ## Usability Tests         │
├─────────────────────────────┤
│  ## High-fidelity Prototype │
│  images + video (if any)    │
│  [Figma embed]  (opt.)      │
├─────────────────────────────┤
│  ## Next Steps              │
├─────────────────────────────┤
│  ← Prev          Next →     │
└─────────────────────────────┘
```

All sections are optional — the template only renders sections with content.

---

## Content Model

### Project (shared base)
```ts
{
  slug: string
  title: string
  category: string[]             // e.g. ["UX/UI", "SaaS", "Web App"]
  type: "case" | "frontend" | "ui" | "study"
  featured: boolean              // true = shown on home page selected work
  coverImage: string             // local path in /public/assets/projects/
  shortDescription: string       // used on listing cards
}
```

### ProjectCase extends Project (`type: "case"`)
```ts
{
  role: string
  product: string
  platform: string
  duration: string
  focus: string
  overview: string
  problem: string
  goals: string[]
  myRole: string[]
  process: string[]
  solutions: {
    title: string
    description: string
    images: string[]
    figmaUrl?: string            // Figma embed after solution images
  }[]
  impact: string[]
  learnings: string
}
```

### ProjectFrontend extends Project (`type: "frontend"`)
```ts
{
  overview: string
  insight?: string               // creative concept / inspiration note
  stack: string[]                // e.g. ["HTML", "CSS", "PUG", "JavaScript"]
  images: string[]
}
```

### ProjectUI extends Project (`type: "ui"`)
```ts
{
  contextNote: string            // e.g. "Projects made at Matilha Estúdio as UI Designer"
  groups: {
    title: string
    images: string[]
    figmaUrl?: string            // Figma embed per feature group
  }[]
}
```

### ProjectStudy extends Project (`type: "study"`)
```ts
{
  overview: string
  goal: string
  personas?: { title: string; image: string }[]
  userContext?: { title: string; description: string; image?: string }[]
  research?: { title: string; content: string; image?: string }[]
  solutionAlternatives?: { content: string; images: string[] }
  solution?: { concept: string; branding?: string; images: string[] }
  wireframes?: {
    description: string
    images: string[]
    figmaUrl?: string            // Figma embed of wireframe prototype
  }
  usabilityTests?: string[]      // list of issues found
  prototype?: {
    description: string
    images: string[]
    videoUrl?: string
    figmaUrl?: string            // Figma embed of high-fidelity prototype
  }
  nextSteps?: string
}
```

### Skill
```ts
{
  label: string
  group: "ux" | "tools"
}
```

---

## File Structure

```
portfolio/
├── public/
│   └── assets/
│       └── projects/                    # one folder per project slug
│           ├── merinio-employee-experience/
│           ├── marista-interactive-totem/
│           ├── cozy-psychological-care/
│           └── ...
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.tsx              # React island (hover state)
│   │   ├── ProjectGrid.astro
│   │   ├── ProjectFilter.tsx            # React island (filter tabs on /work)
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── project/
│   │       ├── ProjectNav.astro         # breadcrumb + prev/next shared by all detail pages
│   │       ├── FigmaEmbed.astro         # iframe wrapper for Figma embeds
│   │       ├── CaseDetail.astro         # Template A — UX/UI case
│   │       ├── FrontendDetail.astro     # Template B — front-end projects
│   │       ├── UIDetail.astro           # Template C — UI projects
│   │       └── StudyDetail.astro        # Template D — study projects
│   ├── layouts/
│   │   ├── BaseLayout.astro             # head, nav, footer
│   │   └── ProjectLayout.astro          # wraps all detail pages
│   ├── pages/
│   │   ├── index.astro                  # /
│   │   ├── about.astro                  # /about
│   │   └── work/
│   │       ├── index.astro              # /work
│   │       └── [slug].astro             # /work/[slug] — picks template by type
│   ├── data/
│   │   ├── projects/
│   │   │   ├── index.ts                 # exports all projects[]
│   │   │   ├── cases.ts                 # 5 UX/UI case projects
│   │   │   ├── frontend.ts              # 4 front-end projects
│   │   │   ├── ui.ts                    # 4 UI projects
│   │   │   └── study.ts                 # 5 study projects
│   │   └── skills.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Open Questions

- [ ] Extract exact colors, fonts, and spacing from Portez theme
- [ ] Project images — download from Notion S3 and commit locally (recommended) or lazy-load from S3?
- [ ] Deployment target (Vercel, Netlify, GitHub Pages?)
- [ ] Custom domain?
- [ ] Dark mode support?
- [ ] Scroll/page transition animations?
