# Mimuads web

Frontend rebuild of [usemimu.com](https://usemimu.com) in Mimuads' brand colours and Aeonik typeface. Conversion-focused layout: centred hero with one illustrated visual, short copy, one idea per section, app-screen walkthrough, audience cards and a single closing CTA.

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
- `src/components/` — Nav, Hero, Steps (animated phone walkthrough), Verified, Audiences (hosts + agencies), Faq, Footer (incl. final CTA)
- `src/components/Illustrations.tsx` — original SVG storefronts, ad slides and screen network in the brand palette
- `src/hooks.ts` — scroll reveal
- `public/fonts/` — Aeonik (licensed to Mimuads), `public/fallback/` — logo screen loops

Light/dark mode follows the OS setting.
