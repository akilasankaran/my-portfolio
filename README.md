# Lead Frontend Engineer Portfolio

Premium personal portfolio built with Astro, Tailwind CSS v4, TypeScript, and Framer Motion.

## Stack

- [Astro](https://astro.build) 5
- [Tailwind CSS](https://tailwindcss.com) v4
- [React](https://react.dev) + [Framer Motion](https://www.framer.com/motion/) (minimal islands)
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Customize

Edit content in `src/data/`:

- `site.ts` — name, contact, hero metrics
- `experience.ts` — work history
- `projects.ts` — case studies
- `strengths.ts` — technical strengths
- `writing.ts` — articles and notes

## Structure

```
src/
├── components/
│   ├── chrome/       # Header, footer
│   ├── content/      # Page sections
│   ├── motion/       # Framer Motion islands
│   └── primitives/   # Reusable UI building blocks
├── data/             # Content (no CMS)
├── layouts/
├── pages/
└── styles/
```
