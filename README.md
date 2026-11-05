# 16alves02 Portfolio

Personal portfolio for Leonardo Alves, a Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro.

**[Open the live portfolio](https://16alves02-com.vercel.app)** · **[View the repository](https://github.com/16alves02/16alves02.com)**

## Internship availability

Leonardo is seeking a **paid 680-hour curricular internship starting in February 2027**, preferably in **Coimbra, Portugal**. On-site, hybrid and remote arrangements are considered.

Language-aware CV downloads:
- English: `/cv-leonardo-alves-en.pdf`
- Portuguese: `/cv-leonardo-alves-pt.pdf`

## Featured projects

| Project | Focus | Status |
| --- | --- | --- |
| SaborGest | PHP 8.3, PDO, REST API, MySQL/MariaDB, Kotlin Android kiosk | Academic project in development |
| RunLattice | Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, BullMQ | Prototype in development |
| MRDR. | React 19, TypeScript, Zustand, Vitest, Capacitor | In development |
| RAW. | React, JavaScript, Tailwind CSS, Framer Motion | Live interactive project |

SaborGest and RunLattice include expandable technical case studies on the portfolio covering problem context, architecture, contribution, engineering challenges and current result/limitations.

### Project status and accuracy

- **SaborGest** is an academic prototype. It is still being integrated and validated and is not production-ready.
- **RunLattice** persists workflow definitions and run records and queues simulated graph traversal through BullMQ. The worker does not yet call external services. Authentication and workspace isolation are not implemented.
- **MRDR.** is still in development.
- **RAW.** links to its live application. Its source repository is private.
- **HOOP** remains in the project list as an educational frontend concept; authentication and checkout are simulated and no real payments are processed.

Source links are shown only for public repositories. Private repositories are not exposed.

## Profile and experience

The portfolio presents software development across frontend, backend, data and mobile projects. It also connects Leonardo's previous CNC machine operation experience with precision, quality checks and systematic troubleshooting.

Professional experience:
- CNC Machine Operator — Schmidt Light Metal Group · Feb 2025–May 2026
- Store Operator — MC · May–Aug 2024
- Backend Developer Intern — ClickBeauty / Alvocromático · Apr–Jul 2023
- Web Development Intern — Associação Estamos Juntos (AEJ) · Jul 2022

Education:
- CTeSP in Software Development — Escola Superior Aveiro Norte, Universidade de Aveiro · 2025–2027, in progress
- Professional Course in IT Systems Management and Programming — Escola Secundária Dr. Serafim Leite · 2020–2023

## Technical stack shown

- **Frontend:** React, TypeScript, JavaScript, Next.js, Vite, React Router, Tailwind CSS
- **Backend and APIs:** PHP, Node.js, REST APIs, PDO, Prisma
- **Data and queues:** SQL, MySQL/MariaDB, PostgreSQL, Redis, BullMQ
- **Mobile and quality:** Kotlin/Android, Capacitor, Vitest, C, Git, GitHub

The site lists technologies used in coursework and projects; experience varies by tool.

## Site features

- Responsive layout for desktop, tablet and mobile.
- Light and dark themes.
- Seven language options: English, Portuguese (Portugal), Spanish, French, Italian, German and Japanese.
- Expandable project case studies for SaborGest and RunLattice.
- English and Portuguese CV downloads.
- Internship availability visible in the hero and dedicated section.
- Prefilled email subject and body for internship enquiries.
- Public screenshots or final artwork where available.
- Accessible focus states, skip link and reduced-motion support.
- No analytics scripts or marketing cookies.

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/16alves02/16alves02.com.git
cd 16alves02.com
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Vercel

The repository is connected to the `16alves02-com` Vercel project. Pushes to `main` trigger production deployments; branches generate previews.

## Project structure

- `src/App.jsx` — page sections, copy, navigation, case-study presentation and language handling.
- `src/styles.css` — component and layout styling.
- `src/index.css` — base styles and design tokens.
- `src/data/projects.js` — project descriptions, stacks, links, case studies and preview assets.
- `public/` — logos, favicon, social preview assets and downloadable CV PDFs.

## Author

Leonardo Alves · [GitHub](https://github.com/16alves02) · [LinkedIn](https://www.linkedin.com/in/16alves02/) · [Email](mailto:16alves02@gmail.com)
