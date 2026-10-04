# Mimuads web

Frontend rebuild of [usemimu.com](https://usemimu.com) — Mimuads brand colours, Aeonik typeface and copy, laid out in a modular, card-driven fintech-style composition (rounded full-bleed hero panel, device mockups, bento grids, dark contrast panels, large dark footer).

## Stack

Vite + React 19 + TypeScript, plain CSS with design tokens (`src/styles.css`). No backend — all CTAs link to the existing `ads.usemimu.com` / `host.usemimu.com` apps.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve dist/
```

## Structure

- `src/content.ts` — all copy, links and data (edit text here)
- `src/components/` — one component per section: Nav, Hero, Platform, Advertisers, Agencies, Hosts, HowItWorks, Faq, Footer (incl. CTA band)
- `src/hooks.ts` — scroll reveal, rotating hero word, count-up, light/dark theme
- `public/fonts/` — Aeonik (licensed to Mimuads), `public/fallback/` — logo screen loops

Light/dark mode follows the OS by default and can be toggled from the nav; the choice is remembered.
