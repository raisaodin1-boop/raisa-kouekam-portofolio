# Raisa Odin — Portfolio

A premium, multilingual portfolio for an international Full Stack Software Engineer. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

Designed to impress recruiters across Canada, France, Germany, the UK, and the US.

## Features

- Minimalist premium design inspired by Vercel, Linear, and Stripe
- Full internationalization — English (default) and French
- Six pages: Home, About, Projects, Experience, Skills, Contact
- Smooth Framer Motion animations
- SEO optimized (metadata, Open Graph, Twitter Cards, sitemap, robots.txt)
- Fully responsive (desktop, tablet, mobile)
- Accessible (keyboard navigation, ARIA labels, color contrast)
- Deploy-ready for Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en` or `/fr` based on your browser language.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes (en, fr)
│   │   ├── page.tsx       # Home
│   │   ├── about/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── skills/
│   │   └── contact/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/            # Header, Footer, LanguageSwitcher
│   ├── ui/                # Button, Badge, SectionHeading
│   ├── home/              # Hero, FeaturedProjects
│   ├── about/
│   ├── projects/
│   ├── experience/
│   ├── skills/
│   └── contact/
├── data/
│   └── site.ts            # Site config, skills, project metadata
├── i18n/
│   ├── config.ts
│   ├── get-dictionary.ts
│   └── dictionaries/      # en.json, fr.json
└── lib/
    └── utils.ts
```

## Customization

1. **Personal info** — Edit `src/data/site.ts` (email, GitHub, LinkedIn, WhatsApp, resume URL)
2. **Translations** — Edit `src/i18n/dictionaries/en.json` and `fr.json`
3. **Skills** — Update categories in `src/data/site.ts`
4. **Projects** — Update tech stacks and URLs in `src/data/site.ts`; descriptions in translation files
5. **Experience** — Edit experience entries in translation files
6. **Profile photo** — Replace the placeholder in `src/components/home/Hero.tsx`

## Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router, Turbopack
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Update `siteConfig.url` in `src/data/site.ts` with your production domain after deployment.
