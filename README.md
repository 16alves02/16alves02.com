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


## Launch readiness

- Language-aware CV download: Portuguese (Portugal) serves the Portuguese PDF; every other interface language serves the English PDF.
- Search indexing files are included in public/robots.txt and public/sitemap.xml.
- A canonical URL and Open Graph/Twitter metadata are configured in index.html, using a dedicated 1200 × 630 preview image.
- public/404.html provides a branded not-found page on Vercel.
- A skip-to-content link supports keyboard navigation. Theme and language preferences are saved locally in the browser; no analytics package is installed.

## Launch checks

- Run npm run build to validate the production bundle.
- Check that the CV button downloads the PT-PT PDF only when Portuguese (Portugal) is selected, and the English PDF for all other language options.
- Verify /robots.txt, /sitemap.xml, /og-cover.png and an invalid URL on the deployed preview.
- Test keyboard navigation, focus visibility, mobile layouts, social links, live demos and contact actions.
- Performance scores and external-link availability must be measured against the deployed build; they are not inferred from a successful compile.
