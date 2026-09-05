# Anil Kumar Pasupuleti — Portfolio

A dark-first developer portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Next.js 16** (App Router, static export-friendly)
- **TypeScript**
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css` (`@theme inline`)
- **Framer Motion** — scroll reveals, staggered text, the hero dependency-graph canvas, and the project visuals
- **Self-hosted fonts** via `@fontsource-variable/inter` and `@fontsource/jetbrains-mono` (no runtime calls to Google Fonts, so it builds and renders correctly even with no network access)

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build      # production build
npm run start       # serve the production build
npm run lint         # ESLint
```

## Updating content

Everything editorial lives under `src/data/` as plain TypeScript objects — no need to touch component code to update copy:

| File | Contents |
| --- | --- |
| `src/data/profile.ts` | Name, role, tagline, location, email, phone, social links |
| `src/data/skills.ts` | Tech stack groups shown in the Skills section |
| `src/data/projects.ts` | CodeOrbit, LawBot, NextWork project copy and tech tags |
| `src/data/github.ts` | Selected GitHub repos (pulled from the public GitHub REST API — re-fetch `https://api.github.com/users/Anilll-coder/repos` and update this file to refresh) |
| `src/data/education.ts` | Education history, certifications, achievements |

## Structure

```
src/
  app/            # root layout, page, global styles, metadata
  components/
    layout/       # navbar, footer, scroll progress
    sections/     # one component per landing-page section
    ui/           # buttons, badges, icons, section wrapper
    visuals/      # hero graph canvas + per-project SVG illustrations
  data/           # editable content (see table above)
  lib/            # Framer Motion variants, small utilities
```

## Notes

- The hero visual is a self-animating `<canvas>` node graph (mouse-reactive); the project illustrations are hand-built SVGs animated with Framer Motion.
- All animation respects `prefers-reduced-motion` via a single `MotionConfig reducedMotion="user"` provider (`src/components/MotionProvider.tsx`) rather than per-component checks, so behavior stays consistent between server and client render.
- GitHub stats (stars/forks) reflect the public API response at the time this was written — there are no fabricated numbers anywhere on the site. LeetCode links out to the live profile rather than showing invented solve counts.

## Deploying

Any Next.js host works. For Vercel: push this to a GitHub repo and import it at [vercel.com/new](https://vercel.com/new) — no configuration needed.
