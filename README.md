# 16alves02 Portfolio

Personal portfolio for Leonardo Alves, built with React 19 and Vite. The page presents selected projects, technical interests, education and contact details.

**[Open the live portfolio](https://16alves02-com.vercel.app)** · **[View this repository](https://github.com/16alves02/16alves02.com)**

## Highlights

- Responsive layout for desktop, tablet and mobile.
- Light and dark themes, with the selected theme saved locally.
- Seven language options: English, Portuguese (Portugal), Spanish, French, Italian, German and Japanese.
- Project previews use real screenshots or final artwork from the projects where those assets are available.
- Source links are only shown for public repositories; private repository URLs are deliberately omitted.
- A clear no-screenshot state is used when a project has no public preview asset.
- Accessible focus states and reduced-motion support.
- Orange `#EB4520` brand accent with neutral paper, charcoal and grey surfaces.
- Chamfer-inspired editorial direction: warm paper-and-ink surfaces, clipped 45-degree corners, serif display headings and monospace labels, adapted to the existing orange brand rather than copying a template.

## Featured projects

| Project | Status / focus | Public links |
| --- | --- | --- |
| HOOP | Educational basketball e-commerce frontend concept; checkout is simulated | [Public repository](https://github.com/16alves02/hoop) · [Live demo](https://hoop-16alves02.netlify.app) |
| RAW. | Interactive social conversation app; source repository is private | [Live demo](https://raw-app-bice.vercel.app) |
| SaborGest | Academic software project in development; source repository is private | No public demo or screenshot is available |
| Todo App | Vanilla JavaScript task manager with browser-local persistence | [Public repository](https://github.com/16alves02/todo-app) · [Live demo](https://todo-app-three-beta-56.vercel.app) |
| Two of Hearts | Vector playing-card illustration inspired by Lenços de Namorados | [Public repository and final artwork](https://github.com/16alves02/two-of-hearts-portuguese-folk-art) |
| ArraySorting | C console project demonstrating common sorting algorithms | [Public repository](https://github.com/16alves02/ArraySorting) |

The portfolio does not link to the private GitHub repositories for RAW. or SaborGest. The SaborGest card intentionally has no image: no public screenshot or demo was found in the available project documentation.

## Professional experience

The portfolio includes the professional roles described in Leonardo's profile, ordered from most recent to oldest:

| Role | Organization | Period |
| --- | --- | --- |
| CNC machine operator | Schmidt Light Metal Group | Feb 2025 – May 2026 |
| Store operator | MC | May – Aug 2024 |
| Backend developer intern | ClickBeauty / Alvocromático | Apr – Jul 2023 |
| Web development intern | Associação Estamos Juntos (AEJ) | Jul 2022 |

## Education

- **CTeSP, Software Development** — Escola Superior Aveiro Norte, Universidade de Aveiro · Sep 2025 – Jul 2027
- **CTeSP, CNC Programmer** — Oct 2024 – Jul 2025 · Enrolment currently frozen
- **Escola Secundária Dr. Serafim Leite** · 2020–2023

## Services shown on the portfolio

- Web development
- Database development
- Software testing
- Web design

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/16alves02/16alves02.com.git
cd 16alves02.com
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Select the Vite framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Review a preview deployment before promoting changes to production.

## Project structure

- `src/App.jsx` — page sections, project data and language copy.
- `src/styles.css` — component and layout styling.
- `src/index.css` — base styles and design tokens.
- `src/data/projects.js` — the single source of truth for project descriptions, stacks, public links and real preview assets.
- `public/` — logos, favicon and social preview assets.

## Author

Leonardo Alves · [GitHub](https://github.com/16alves02) · [LinkedIn](https://www.linkedin.com/in/16alves02/) · [Email](mailto:16alves02@gmail.com)

## SEO, accessibility and release checks

- A public `robots.txt` and a one-URL `sitemap.xml` are generated from `public/`.
- The document declares a canonical URL and Open Graph/Twitter share metadata using the portfolio's social preview artwork.
- `public/404.html` supplies a branded not-found page on static hosting.
- The main React page updates the document language to match the selected locale and includes a keyboard skip link.
- No analytics scripts or marketing cookies are installed. The selected language and theme are stored in local browser storage.
- Before release, verify the live page across viewport sizes, run link checks and a performance/accessibility audit, and confirm the production build status in Vercel.


## Asset and release notes

- Project previews use the actual public screenshots and final artwork from the projects. The original asset links are preserved.
- The existing 1200 × 630 `og-cover.svg` is used for Open Graph and Twitter sharing metadata.
- Google Fonts are consolidated into one stylesheet request and loaded non-blockingly, with system-font fallbacks.
