# HerWealth Global — Phase 1 MVP Website

The official website for **HerWealth Global**, a student-led educational platform empowering young women through leadership, entrepreneurship, financial literacy, investing education, confidence-building, and global awareness.

---

## Tech Stack

- [Astro](https://astro.build) — static site framework
- TypeScript — type-safe development
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- Markdown content collections — easy content editing
- Vercel — deployment

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

---

## Project Structure

```
herwealth-global/
├── public/
│   └── logo.png              # Site logo (200×200 PNG)
├── src/
│   ├── content/
│   │   ├── academy/          # Academy track markdown files
│   │   ├── events/           # Event markdown files
│   │   ├── resources/        # Resource markdown files
│   │   └── faq/              # (optional) FAQ markdown files
│   ├── data/
│   │   ├── site.ts           # ⭐ Central site config (links, slogan, disclaimer)
│   │   ├── navigation.ts     # Navigation items
│   │   ├── values.ts         # Core values data
│   │   └── benefits.ts       # Member benefits data
│   ├── layouts/
│   │   └── BaseLayout.astro  # Shared HTML wrapper (head, header, footer)
│   ├── components/
│   │   ├── Header.astro      # Sticky header with mobile menu
│   │   ├── Footer.astro      # Footer with disclaimer and links
│   │   ├── AcademyCard.astro # Academy track card
│   │   ├── EventCard.astro   # Event card
│   │   ├── FAQList.astro     # Accordion FAQ list
│   │   ├── ValueCard.astro   # Core value card
│   │   ├── CTASection.astro  # Full-width call-to-action section
│   │   ├── Section.astro     # Reusable page section wrapper
│   │   ├── SectionHeader.astro # Section title + subtitle
│   │   └── ButtonLink.astro  # Styled link button
│   ├── pages/
│   │   ├── index.astro       # Home
│   │   ├── about.astro       # About
│   │   ├── academy.astro     # Academy
│   │   ├── events.astro      # Events
│   │   ├── join.astro        # Join
│   │   ├── faq.astro         # FAQ
│   │   └── contact.astro     # Contact
│   ├── styles/
│   │   └── global.css        # Global styles, brand colors, typography
│   └── content.config.ts     # Content collection schemas
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

---

## How to Edit Content

### Update site-wide settings

Edit `src/data/site.ts` to update:

- Organization name
- Founder name
- Slogan
- Join form URL
- Instagram URL
- Email (currently TBD)
- Investing disclaimer

This is the **single source of truth** for all shared site information.

### Add or edit events

Events live in `src/content/events/`. Each event is a markdown file with frontmatter.

**Example event file:**

```markdown
---
title: "Women in Finance Workshop"
date: "TBD"
time: "TBD"
location: "TBD"
category: "Workshop"
registrationUrl: "https://forms.gle/uT14TH4yRBkrFqQo9"
whoCanAttend: "All students welcome. No experience required."
whatToBring: "Notebook, laptop or tablet if available, and curiosity."
dressCode: "Business casual encouraged, not required."
cost: "TBD"
contactPerson: "TBD"
skillLevel: "Beginner-friendly"
status: "coming-soon"
featured: true
---

Event description goes here.
```

**Status options:** `upcoming` | `coming-soon` | `past`

Set `featured: true` to show the event on the homepage.

### Update academy tracks

Academy tracks live in `src/content/academy/`. Edit the markdown files to update descriptions or topic lists.

### Update navigation

Edit `src/data/navigation.ts` to add, remove, or reorder navigation items.

### Update values or benefits

Edit `src/data/values.ts` and `src/data/benefits.ts` to update the core values and member benefits sections.

---

## TBD Placeholders

The following values are not yet finalized and appear as placeholders throughout the site:

| Field | Location |
|---|---|
| Email address | `src/data/site.ts` → `email` |
| Web domain | `src/data/site.ts` → `domain` |
| Founder bio | About page founder card |
| Event dates/times/locations | `src/content/events/*.md` |
| Meeting schedule | FAQ page |

When these become available, update `src/data/site.ts` and the relevant content files.

---

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Astro.

### Option 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click "Add New Project".
3. Import the repository.
4. Vercel auto-detects Astro and configures build settings.
5. Click "Deploy".

**Build settings (auto-detected by Vercel):**

| Setting | Value |
|---|---|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node.js Version | 18.x or higher |

**Environment variables:** None required. The site is fully static with no secrets.

### Option 3: Manual deploy

```bash
npm run build
# Upload the contents of ./dist to any static hosting
```

---

## Important Links

- Join form: https://forms.gle/uT14TH4yRBkrFqQo9
- Instagram: https://www.instagram.com/herwealthglobal.official/

---

## Financial Education Disclaimer

HerWealth Global's financial literacy and investing content is for educational purposes only and does not provide financial advice or investment recommendations.
