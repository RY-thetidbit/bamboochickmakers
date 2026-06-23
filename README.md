# Bamboo Chick Makers — Lead-Generation Website

A production-ready, SEO-first, conversion-focused website for **Bamboo Chick Makers** (bamboochickmakers.com) — a Vasant Vihar, New Delhi based bamboo chick manufacturing, customization & installation business serving Delhi NCR — South Delhi, New Delhi, Dwarka, Gurgaon and Noida.

Built to **generate WhatsApp inquiries and phone calls**, rank in local Google search, and convert mobile visitors.

---

## ⚙️ Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 15** (App Router, React Server Components) |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS 3** + custom design tokens |
| UI primitives | Shadcn-style (CVA `Button`) + bespoke components |
| Animation | **Framer Motion** |
| Icons | **Lucide React** |
| Forms | **React Hook Form** + **Zod** validation |
| SEO | Metadata API, JSON-LD schema, dynamic sitemap & robots |
| Hosting | **Vercel** (static-first; every page prerendered) |

---

## 🚀 Quick Start

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:3000
npm run build      # production build (prerenders all 40 routes)
npm start          # serve the production build
npm run typecheck  # strict TypeScript check
```

Node **20+** recommended (built & tested on Node 22).

---

## 📁 Project Structure

```
src/
├── app/                          # App Router — routes & file-based metadata
│   ├── layout.tsx                # Root layout: fonts, header/footer, global CTAs, org schema
│   ├── page.tsx                  # Homepage (12 sections)
│   ├── globals.css               # Tailwind layers + design-system component classes
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic sitemap.xml (all routes)
│   ├── manifest.ts               # PWA web manifest
│   ├── icon.svg                  # Favicon (auto-served by Next)
│   ├── opengraph-image.tsx       # Auto-generated branded OG image (1200×630)
│   ├── not-found.tsx             # Custom 404
│   ├── about-us/ products/ ...   # Static core pages
│   ├── products/[slug]/          # Product detail (SSG via generateStaticParams)
│   ├── blog/ + blog/[slug]/      # Blog index + SSG articles
│   └── bamboo-chick-<city>/      # 11 local-SEO landing pages (one folder each)
│
├── components/
│   ├── layout/                   # Header (sticky), Footer, Logo
│   ├── home/                     # Homepage section components
│   ├── sections/                 # Reusable page sections (FAQ, quote form, stats, guarantees…)
│   ├── cta/                      # Conversion system (see below)
│   ├── gallery/                  # Lightbox gallery, before/after slider, projects grid
│   ├── blog/ + city/             # Blog card, city page template
│   ├── ui/                       # Button, SectionHeading, Reveal, FAQ accordion, Breadcrumbs, PageHero
│   └── seo/                      # <JsonLd /> renderer
│
├── data/                         # All content lives here (edit these to update the site)
│   ├── products.ts  cities.ts  projects.ts  testimonials.ts  faqs.ts  blog.ts  content.ts
│
└── lib/
    ├── site.ts                   # 🔑 Single source of truth: business info, nav, WhatsApp messages
    ├── seo.ts                    # buildMetadata() generator
    ├── schema.ts                 # JSON-LD builders (LocalBusiness, Product, FAQ, Review, Breadcrumb…)
    └── utils.ts                  # cn(), whatsappLink(), telLink(), slugify()
```

---

## 🔑 Configure the Business (do this first)

All business details are centralized in **`src/lib/site.ts`**. Update before launch:

- `phoneDisplay` / `phone` / `whatsapp` — live number is **+91 70371 40055**; update here if it changes
- `email`, `address`, `geo` (lat/lng for maps & LocalBusiness schema)
- `social` links, `hours`, `rating`, `installationsCount`
- `waMessages` — the prefilled WhatsApp message templates

Content is data-driven — edit files in **`src/data/`** to change products, cities, projects, testimonials, FAQs and blog posts without touching components.

---

## 📞 WhatsApp Lead-Generation System

Every conversion path funnels to WhatsApp (primary) and phone (secondary):

| Component | Location |
|---|---|
| Sticky header Call + WhatsApp buttons | `components/layout/header.tsx` |
| Floating WhatsApp button (pulse) | `components/cta/floating-whatsapp.tsx` |
| Mobile sticky bottom CTA bar | `components/cta/mobile-cta-bar.tsx` |
| Reusable WhatsApp / Call buttons | `components/cta/whatsapp-button.tsx`, `call-button.tsx` |
| CTA bands after every major section | `components/cta/cta-band.tsx` |
| Lead form (RHF + Zod → opens WhatsApp prefilled) | `components/cta/lead-form.tsx` |

Prefilled messages are built with `whatsappLink(phone, message)` and are context-aware (product pages, city pages and the form all pass tailored messages).

> **Note:** The lead form opens WhatsApp with the captured details prefilled — no backend required. To also store leads, wire the `onSubmit` in `lead-form.tsx` to an API route / CRM / Google Sheet.

---

## 🔍 SEO Architecture

- **Per-page metadata** via `buildMetadata()` — title, description, canonical, Open Graph, Twitter cards, robots directives.
- **JSON-LD structured data** (`lib/schema.ts`, rendered by `<JsonLd />`):
  Organization, WebSite, LocalBusiness (global + per-city), Product, FAQPage, BreadcrumbList, Review, BlogPosting.
- **Dynamic `sitemap.xml`** and **`robots.txt`** (`app/sitemap.ts`, `app/robots.ts`) — include all products, cities and blog posts automatically.
- **Local SEO pages** — 11 city landing pages, each with unique title, meta description, intro copy, local areas, FAQs, schema, map and CTA.
- **Auto-generated OG image** (`app/opengraph-image.tsx`) — branded 1200×630 PNG.
- Semantic HTML, breadcrumbs, image `alt` text, `en-IN` locale.

**Before launch:** add your Google Search Console token in `src/app/layout.tsx` (`metadata.verification.google`) and submit `https://bamboochickmakers.com/sitemap.xml`.

---

## ⚡ Performance

- Every route is **statically prerendered** (○ Static / ● SSG) — no server render on request.
- `next/image` with AVIF/WebP, lazy loading, and explicit `sizes`.
- `next/font` self-hosts Poppins + Inter (no layout shift, no external requests).
- Shared JS ~105 kB; `prefers-reduced-motion` respected.
- Security headers set in `next.config.mjs`; long-cache headers in `vercel.json`.

> Images currently use Unsplash placeholders (whitelisted in `next.config.mjs`). Replace with real, optimized photos and host them in `/public` or a CDN/Cloudinary for best Core Web Vitals.

---

## 🌐 Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In **Vercel → New Project**, import the repo. Framework auto-detects as **Next.js** — no build config needed.
3. (Optional) Set env vars from `.env.example` (e.g. `NEXT_PUBLIC_SITE_URL`).
4. Add the custom domain **bamboochickmakers.com** in **Settings → Domains** and point DNS as instructed.
5. Deploy. `vercel.json` pins the **`bom1` (Mumbai) region** — Vercel’s only India edge region — for the lowest latency to your Delhi NCR audience.

CLI alternative:
```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

---

## 🧭 Routes

`/` · `/about-us` · `/products` (+ 12 product detail pages) · `/custom-solutions` · `/gallery` · `/completed-projects` · `/testimonials` · `/faqs` · `/contact-us` · `/service-areas` · `/blog` (+ 6 articles) · `/privacy-policy` · `/terms-and-conditions`

**Products:** bamboo-chick · bamboo-blinds · bamboo-curtains · balcony-bamboo-chick · terrace-bamboo-chick · fancy-bamboo-chick · zebra-blinds · roller-blinds · vertical-blinds · anti-bird-net (pigeon net) · bamboo-jafri · bamboo-hut

**Local SEO (12 Delhi NCR city pages):** `/bamboo-chick-delhi`, `/bamboo-chick-new-delhi`, `/bamboo-chick-vasant-vihar`, `/bamboo-chick-vasant-kunj`, `/bamboo-chick-greater-kailash`, `/bamboo-chick-defence-colony`, `/bamboo-chick-saket`, `/bamboo-chick-hauz-khas`, `/bamboo-chick-south-delhi`, `/bamboo-chick-dwarka`, `/bamboo-chick-gurgaon`, `/bamboo-chick-noida`

## 🖼️ Product Images

Product, gallery and banner photos are hosted locally in **`public/images/`** and referenced as `/images/<name>.jpg`. A few generic "before" reference shots in the before/after slider still load from Unsplash (whitelisted in `next.config.mjs`).

> ⚠️ The product photos currently in `public/images/` were sourced from an existing same-business site to populate the catalogue. **Before going live, replace them with your own original, high-resolution installation photos** — this avoids any copyright/duplicate-content issues and improves quality (several source images are only 270×270). Keep the same filenames to swap them in without code changes, or update the paths in `src/data/products.ts`, `src/data/projects.ts`, `src/data/content.ts` and `src/app/gallery/page.tsx`.

---

## 📈 Future Scalability

- **CMS**: move `src/data/*` into Sanity / Contentlayer / a headless CMS for non-dev editing.
- **Lead capture backend**: add a Next.js Route Handler to log form submissions to a CRM, email, or Google Sheet (in addition to WhatsApp).
- **Reviews**: integrate the Google Places API to pull live reviews into the testimonials section.
- **Blog at scale**: swap the static blog data for MDX or a CMS; pagination & category routes are easy to add.
- **Analytics**: add Vercel Analytics + GA4/GTM (env vars scaffolded in `.env.example`).
- **More cities/products**: add an entry to `src/data/cities.ts` / `products.ts`; product & blog routes auto-generate. For a new city, copy a `bamboo-chick-<city>/page.tsx` folder (or migrate cities to a single route group when the list grows large).
- **A/B testing & exit-intent**: the CTA components are isolated and easy to wrap with experiment logic.

---

© 2014–2026 Bamboo Chick Makers. Built as a premium, conversion-first local SEO website.
