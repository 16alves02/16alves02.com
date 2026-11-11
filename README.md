# Leonardo Alves - Software Developer Portfolio

A lightweight, bilingual portfolio for Leonardo Alves, Software Developer and Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro.

**Live site:** https://16alves02.pages.dev  
**GitHub:** https://github.com/16alves02  
**LinkedIn:** https://www.linkedin.com/in/16alves02/  
**Contact:** 16alves02@gmail.com

## About

Software Developer with practical experience in web and backend development, currently studying for a CTeSP in Software Development (2025-2027). Interested in building complete software products across interfaces, application logic, APIs and data.

## Selected projects

- **SaborGest** - Academic management system for small food businesses, combining a PHP web panel, REST API, MySQL/MariaDB and a Kotlin Android kiosk. Includes staff scheduling, attendance and stock workflows. In development; not production-ready. Public source repository.
- **RunLattice** - Workflow automation prototype with authenticated workspaces, a visual editor, templates, Redis/BullMQ execution, signed webhooks, scheduled triggers, a live Discord action and reviewable AI workflow plans. Stripe billing flows are implemented but still require sandbox and end-to-end verification. Not production-ready.
- **MRDR.** - Original crime-deduction game built around evidence, suspects, alibis, timelines and connected clues. The functional version is complete; public web release, signed Android distribution and iOS validation remain pending.
- **RAW.** - Interactive social conversation and party-game app with three modes and multilingual content. A live web demo is available; source code is private.
- **HOOP** - Academic basketball-store frontend built with React and TypeScript. Includes product discovery, search, filters, favourites, cart and a simulated checkout. It does not process real purchases.
- **Basket Hub** - Academic group project for basketball management. The current code includes administrator bootstrap, token sessions and role- and scope-based access control. It is not production-ready and is not an individual-only project.
- **Tocadiscos Editora** - Academic group CLI application for managing a fictional music publisher catalogue, with search, royalty calculations, financial reports, audio playback and reversible change history.
- **Two of Hearts** - Vector playing-card illustration developed in Affinity, inspired by the traditional Lenços de Namorados from the Minho region.
- **Todo App** - Browser-based task manager using vanilla JavaScript and localStorage. Data stays in the browser and does not sync between devices.
- **ArraySorting** - C console application demonstrating Selection Sort, Insertion Sort, Bubble Sort and a Bogo Sort example. Developed as an earlier programming exercise.

Project descriptions distinguish individual work, group coursework, prototypes, live demos and software that is not ready for production.

## Technical skills

Technologies and tools used across the projects shown here:

- **Languages:** JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL
- **Frontend and applications:** HTML, CSS, React, Next.js, Vite, Android
- **Backend and data:** REST APIs, Ktor, MySQL, MariaDB, PostgreSQL, Redis
- **Tools and infrastructure:** Git, GitHub, Docker, Prisma, BullMQ

## Education

- **CTeSP in Software Development** - Escola Superior Aveiro Norte, Universidade de Aveiro (2025-2027)
- **Professional Course in IT Systems Management and Programming** - Escola Secundária Dr. Serafim Leite (2020-2023)

## Experience

- Backend Development Intern - ClickBeauty / Alvocromático (Apr-Jul 2023)
- Web Development Intern - Associação Estamos Juntos (AEJ) (Jul 2022)
- CNC Machine Operator - Schmidt Light Metal Group (Feb 2025-May 2026)
- Store Operator - MC (May-Aug 2024)

## Professional objective

Seeking a **paid 680-hour curricular internship**, expected to start in February 2027. Based in the Aveiro district, available for on-site opportunities near Oliveira de Azeméis and hybrid or remote opportunities across the Aveiro, Porto and Coimbra districts.

## Technical approach

The portfolio is a static React and Vite application with semantic HTML and CSS. It includes Portuguese and English content, light and dark themes, responsive navigation, project links, CV downloads and a contact form.

The contact form uses FormSubmit as a third-party form relay. Submissions are handled by that provider and are subject to its privacy policy and processing practices. The first submission may require confirming the destination email address. There is no custom backend, database, CMS or admin area. No analytics provider is currently connected, so clicks, CV downloads and form conversions are not measured.

## Local development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run verify:theme
npm run verify:production
npm run preview
```

The production build is generated in `dist/` and deployed with Cloudflare Pages.
