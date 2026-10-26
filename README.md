# 16alves02 Portfolio

Personal portfolio for Leonardo Alves, built with React 19 and Vite. The site presents selected projects, technical interests, education and contact links.

**[Open the live portfolio](https://16alves02-com.vercel.app)** · **[View the source](https://github.com/16alves02/16alves02.com)**

## Highlights

- Responsive layout for desktop, tablet and mobile.
- Light and dark themes, with the selected theme saved locally.
- Seven language options: English, Portuguese (Portugal), Spanish, French, Italian, German and Japanese.
- Project cards with source links and live demos where a public demo is available.
- Accessible focus states and reduced-motion support.
- Brand palette built around orange `#EB4520`, with neutral paper, charcoal and grey surfaces.
- Logo and social preview assets in `public/`.

## Featured projects

| Project | Status / focus | Links |
| --- | --- | --- |
| HOOP | Basketball e-commerce frontend concept | [Repository](https://github.com/16alves02/hoop) · [Demo](https://hoop-16alves02.netlify.app) |
| RAW. | Interactive social conversation app | [Repository](https://github.com/16alves02/raw-app) · [Demo](https://raw-app-bice.vercel.app) |
| SaborGest | Academic management system; in development | Private repository; no public source link |
| Todo App | Vanilla JavaScript task manager | [Repository](https://github.com/16alves02/todo-app) · [Demo](https://todo-app-three-beta-56.vercel.app) |
| Two of Hearts | Portuguese folk-art inspired project | [Repository](https://github.com/16alves02/two-of-hearts-portuguese-folk-art) |
| ArraySorting | C sorting-algorithm console project | [Repository](https://github.com/16alves02/ArraySorting) |

Project descriptions intentionally distinguish live demos from source repositories and mark SaborGest as in development. The private RAW. and SaborGest repositories may not be accessible to visitors without permission.

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
5. Deploy a preview before promoting changes to production.

## Project structure

- `src/App.jsx` — page sections, project data and language copy.
- `src/styles.css` — component and layout styling.
- `src/index.css` — base styles and design tokens.
- `src/data/projects.js` — project metadata module (check whether it is used before editing; the main page currently defines its own project list).
- `public/` — logos, favicon and social preview assets.

## Author

Leonardo Alves · [GitHub](https://github.com/16alves02) · [Email](mailto:16alves02@gmail.com)
