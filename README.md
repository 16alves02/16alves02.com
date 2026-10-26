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
- `src/data/projects.js` — project metadata module; check whether it is used before editing because the main page defines its own project list.
- `public/` — logos, favicon and social preview assets.

## Author

Leonardo Alves · [GitHub](https://github.com/16alves02) · [Email](mailto:16alves02@gmail.com)
