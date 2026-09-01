# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

All 8 sections from the spec are implemented on `/` (Hero → Problem → Features → Trainer → Pricing → Testimonial → FAQ → Contact), plus a `/thanks` page the contact form redirects to. Before doing further implementation work, read both planning docs in full:

- `仕様書.md` — the project spec: goal, target audience, required page/sections, tech stack (Next.js + Tailwind CSS), and priorities (mobile display, load speed, CTA, basic SEO).
- `設計書.md` — the approved site structure and component design (page routing, section breakdown, planned directory layout under `app/`, `components/`, `data/`, `lib/`, and the SEO/performance approach). Treat this as the source of truth for how the project should be structured.

Follow the directory structure and component boundaries laid out in `設計書.md` rather than inventing a new structure, unless the user asks to change the design.

### Known gaps before this can go live

- **Placeholder content that must be replaced with real data**, each flagged with a comment at its source: `data/trainers.ts` (fabricated trainer names/bios/photos-as-initials), `data/pricing.ts` (invented prices/plan contents), `data/testimonials.ts` (fabricated member quotes — publishing these as real testimonials without genuine, consented reviews risks 景品表示法/stealth-marketing violations, not just an accuracy issue).
- **`components/contact/actions.ts` doesn't actually notify anyone yet.** It validates and logs to the server console, then redirects to `/thanks`. Wiring it to a real destination (email via Resend/SendGrid, a CRM, a spreadsheet, etc.) needs a decision on which service plus credentials — ask the user before picking one.
- No sticky mobile CTA bar, header/footer, or `/thanks`-based conversion tracking (GA4/ads tag) yet — mentioned as recommended in `設計書.md` but not requested/built so far.

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
