# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

All 8 sections from the spec are implemented on `/` (Hero → Problem → Features → Trainer → Pricing → Testimonial → FAQ → Contact), plus a `/thanks` page the contact form redirects to. Before doing further implementation work, read both planning docs in full:

- `仕様書.md` — the project spec: goal, target audience, required page/sections, tech stack (Next.js + Tailwind CSS), and priorities (mobile display, load speed, CTA, basic SEO).
- `設計書.md` — the approved site structure and component design (page routing, section breakdown, planned directory layout under `app/`, `components/`, `data/`, `lib/`, and the SEO/performance approach). Treat this as the source of truth for how the project should be structured.

Follow the directory structure and component boundaries laid out in `設計書.md` rather than inventing a new structure, unless the user asks to change the design.

### Known gaps before this can go live

- **Placeholder content that must be replaced with real data**, each flagged with a comment at its source: `data/trainers.ts` (fabricated trainer names/bios/photos-as-initials), `data/pricing.ts` (invented prices/plan contents), `data/testimonials.ts` (fabricated member quotes — publishing these as real testimonials without genuine, consented reviews risks 景品表示法/stealth-marketing violations, not just an accuracy issue), `components/layout/Header.tsx` / `Footer.tsx` (brand name is the placeholder wordmark "PERSONAL GYM", not a real logo).
- **`components/contact/actions.ts` doesn't actually notify anyone.** It validates and logs to the server console, then redirects to `/thanks`. This project is a portfolio sample, not a real business — per the user, wiring it to a real notification destination (email/CRM/etc.) is intentionally out of scope; don't add it unless asked.
- **`components/layout/Footer.tsx`'s legal links (プライバシーポリシー／特定商取引法に基づく表記) point to `#`.** The form collects personal data, so real pages with real business info are needed before launch — don't fabricate their content; ask the user for the actual business details.
- No `/thanks`-based conversion tracking (GA4/ads tag) yet.

### Layout components (added after the 8 sections)

- `components/layout/Header.tsx` — sticky top nav; anchor links + CTA hidden below `md`/`sm` to keep mobile minimal (the persistent CTA role is `StickyMobileCta`'s job on mobile).
- `components/layout/Footer.tsx` — brand, anchor quick-links, legal-link placeholders, dynamic copyright year.
- `components/layout/StickyMobileCta.tsx` — Client Component, `sm:hidden`; uses an `IntersectionObserver` on `#contact` to self-hide once the form's own CTA is in view, so the two don't visually stack. `app/page.tsx` adds `pb-20 sm:pb-0` to `<main>` to keep this bar from covering content.
- **Gotcha hit once, worth remembering:** `ui/Button.tsx`'s `baseClasses` always includes `inline-flex` unconditionally. Passing `className="hidden sm:inline-flex"` to `<Button>` does **not** hide it below `sm` — both `hidden` and the base `inline-flex` are unconditional utility classes on the same element, and Tailwind's compiled-CSS order (not the class-string order) decides the winner, which favored `inline-flex`. Fix: control visibility from a wrapping element (`<div className="hidden sm:block"><Button ... /></div>`) instead of passing display-toggling classes into `Button`'s own `className`.

### Review findings applied (see `レビュー.md` for the full audit)

- **Brand orange is `orange-700`/`orange-800`, not `orange-500`/`orange-600`.** axe-core found `orange-500` (bg) and `orange-600` (text) fail WCAG AA contrast (2.88–3.6:1 vs the 4.5:1 required) everywhere they were used — CTA buttons, badges, eyebrow labels, icons. Verified via luminance calculation and a re-run of axe-core (0 `color-contrast` violations after the change) that `orange-700`+ passes. Don't reintroduce `orange-500`/`orange-600` for text-on-light or white-text-on-orange usage without re-checking contrast.
- **`components/contact/contactSchema.ts` and `components/contact/contactFormState.ts` are deliberately separate files.** `contactSchema.ts` holds the zod schema (server-only — imported only by `actions.ts`, a `"use server"` file). `contactFormState.ts` holds the plain `ContactFormState` type and `initialContactFormState` constant that `ContactForm.tsx` (a Client Component) needs — it has zero zod import. Co-locating these previously leaked the whole zod library (~87KB gzip) into the client bundle, since `ContactForm.tsx` imported from the same module that also defined the zod schema; Next.js's client bundler included the schema too despite it being unused client-side. Verified by grepping the built `.next/static/chunks/*.js` for the string `"zod"` before/after. Keep any future zod (or other server-only-library) schema in a file that no Client Component imports from.
- **SEO basics added:** `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx` (dynamic OG image via `next/og`'s `ImageResponse`), `openGraph`/`twitter`/`metadataBase` in `app/layout.tsx`, and a `localBusinessJsonLd` (`ExerciseGym` schema) from `lib/seo.ts` rendered in `app/page.tsx`. All site-wide SEO constants (`SITE_URL`, `SITE_NAME`, `SITE_TITLE`, `SITE_DESCRIPTION`) live in `lib/seo.ts` — update them there, not per-file. `SITE_URL` defaults to the placeholder `https://example.com`; set `NEXT_PUBLIC_SITE_URL` (or edit the default) to the real domain before deploying, or `metadataBase`/sitemap/robots/OG-image URLs will all be wrong.
  - The JSON-LD's `telephone`/`address` are `"◯◯"`-style placeholders (see the comment in `lib/seo.ts`) — this is machine-readable data for search engines, not just UI copy, so don't let it go live unedited.
  - `opengraph-image.tsx` fetches real Noto Sans JP TTF bytes from Google Fonts' CSS API at request/build time and passes them to `ImageResponse`'s `fonts` option — this is a *different* mechanism from `next/font/google` and isn't subject to the CJK-subset limitation noted below; it's how the OG image avoids the same tofu-box bug.
  - `og:image` resolves to the dev server's own origin (`http://localhost:3000/...`) under `next dev` but correctly resolves against `metadataBase` (e.g. `https://example.com/...`) under `next build && next start` — this is expected Next.js behavior, not a bug; verify OG tags against a production server, not the dev server.

### Still open (not addressed, and out of scope per the user — this is a portfolio sample, not a real client site)

- `landmark-unique` a11y violation (axe-core): Header's and Footer's `<nav>` elements both lack an accessible name.
- `region` a11y violation (axe-core, mobile): `StickyMobileCta`'s fixed div isn't contained in any landmark.
- No **visible on-page** NAP info (the JSON-LD has placeholder NAP fields for crawlers, but nothing shown to actual visitors), no real legal pages, no conversion tracking, no real favicon — see `レビュー.md` for the full list.

## Commands

Package manager: npm. No test runner is configured yet.

```
npm run dev      # start dev server (Turbopack) at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # typecheck
```

## Architecture notes

- Next.js App Router, TypeScript, Tailwind CSS v4 (no `tailwind.config.js`; theme tokens live in `app/globals.css` via `@theme inline`).
- Follow the directory layout and component boundaries in `設計書.md`: `components/sections/*` are per-LP-section Server Components composed in `app/page.tsx`; `components/ui/*` holds shared primitives (e.g. `Button`, which renders as `<Link>` when given `href` or `<button>` otherwise); interactivity (accordion open state, the contact form) stays isolated to Client Components rather than spreading `"use client"` across section files.
- **Japanese font rendering:** `next/font/google`'s `Noto_Sans_JP` (`subsets: ["latin"]`, the only self-hostable option — Next.js's bundled font metadata excludes a `japanese` subset entirely, a known constraint: https://nextjs.org/docs/messages/google-fonts-missing-subsets, https://github.com/vercel/next.js/discussions/86336) rendered Japanese text as tofu boxes in this dev environment. Some community reports say `subsets: ["latin"] + preload: false` still renders Japanese fine elsewhere (the served `@font-face` CSS can include the glyphs regardless of the `subsets` option), so the exact root cause here wasn't fully isolated — it may be specific to this sandbox's build-time network access. Rather than debug further, we deliberately moved to an OS font stack instead (`--font-sans` in `app/globals.css`: Hiragino/Yu Gothic/Meiryo/system fallbacks), which sidesteps the risk entirely and better serves the spec's page-speed priority than shipping a multi-MB CJK webfont. If a future change reintroduces `next/font/google` for Japanese text, verify actual rendered output (a screenshot, not just a successful build) before relying on it.
- `next.config.ts` pins `turbopack.root` to the project directory — there's an unrelated `package-lock.json` in the parent home directory that Turbopack would otherwise misdetect as the workspace root.
