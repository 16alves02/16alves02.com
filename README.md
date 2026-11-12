# Leonardo Alves - Software Developer Portfolio

A bilingual portfolio for Leonardo Alves, Software Developer and Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro.

**Live site:** https://16alves02.pages.dev  
**GitHub:** https://github.com/16alves02  
**LinkedIn:** https://www.linkedin.com/in/16alves02/  
**Contact:** 16alves02@gmail.com

## About

Software Developer with practical experience in web and backend development, currently studying for a CTeSP in Software Development (2025-2027). Interested in building complete software products across interfaces, application logic, APIs, data and mobile applications.

## Current objective

Seeking a **paid 680-hour curricular internship**, expected to start in February 2027. The portfolio location is Aveiro, Portugal. Available for on-site opportunities near Oliveira de Azeméis and hybrid or remote opportunities across the Aveiro, Porto and Coimbra districts.

## Technical skills

Technologies and tools used across the projects shown here:

- **Languages:** JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL
- **Frontend and applications:** HTML, CSS, React, Next.js, Vite, Android
- **Backend and data:** REST APIs, Ktor, MySQL, MariaDB, PostgreSQL, Redis
- **Tools and infrastructure:** Git, GitHub, Docker, Prisma, BullMQ, Stripe

## Selected projects

- **SaborGest** - Academic management system for small food businesses, combining a PHP web panel, REST API, MySQL/MariaDB and a Kotlin Android kiosk. Includes staff scheduling, attendance and stock workflows. In development; not production-ready. Public source repository.
- **RunLattice** - Workflow automation prototype with authenticated workspaces, a visual editor, templates, Redis/BullMQ execution, signed webhooks, scheduled triggers, a live Discord action and reviewable AI workflow plans. Stripe billing flows are implemented but still require sandbox and end-to-end verification. Not production-ready.
- **RAW.** - Interactive social conversation and party-game app with three modes, 27 decks and content in six languages. Public web and itch.io demos are available; source code is private.
- **MRDR.** - Original crime-deduction game built around evidence, suspects, alibis, timelines and connected clues. The functional version is complete; public web release, signed Android distribution and iOS validation remain pending.
- **HOOP** - Academic basketball-store frontend built with React and TypeScript. Includes product discovery, search, filters, favourites, cart and a simulated checkout. It does not process real purchases.
- **Basket Hub** - Academic group project for basketball management, covering teams, players, games, events, registrations, venues, organisers, sponsors, standings and statistics. Built with Kotlin, Ktor, Thymeleaf, Exposed and H2. It has no route authentication or authorisation, uses permissive CORS (`anyHost()`), and has limited automated tests; it is not production-ready or individual-only work.
- **Tocadiscos Editora** - Academic group CLI application for managing a fictional music publisher catalogue, with search, royalty calculations, financial reports, audio playback and reversible change history.
- **Nova Imagem by Maura Pereira** - Published client website for a hair salon, with service information, gallery, opening hours and direct contact. Online booking is not implemented; Sanity CMS setup remains pending.

Additional academic and personal work includes Two of Hearts, Todo App and ArraySorting.

Project descriptions distinguish individual work, group coursework, prototypes, live demos and software that is not ready for production.

## Education

- **CTeSP in Software Development** - Escola Superior Aveiro Norte, Universidade de Aveiro (2025-2027)
- **Professional Course in IT Systems Management and Programming** - Escola Secundária Dr. Serafim Leite (2020-2023)

## Experience

- Backend Development Intern - ClickBeauty / Alvocromático (Apr-Jul 2023)
- Web Development Intern - Associação Estamos Juntos (AEJ) (Jul 2022)
- CNC Machine Operator - Schmidt Light Metal Group (Feb 2025-May 2026)
- Store Operator - MC (May-Aug 2024)

## Technical approach

The portfolio uses React, Vite, semantic HTML and CSS. It includes Portuguese and English content, light and dark themes, responsive navigation, project case studies, CV downloads and a contact form.

The contact form uses FormSubmit as a third-party form relay. Submissions are handled by that provider and are subject to its privacy policy and processing practices. The first submission may require confirming the destination email address. There is no custom backend, database, CMS or admin area. The privacy notice documents Cloudflare Web Analytics for aggregate technical and performance metrics. No custom event tracking or conversion measurement is implemented for project clicks, CV downloads or contact submissions.

## Local development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Build and validate:

```bash
npm run build
npm run verify:theme
npm run verify:production
npm run preview
```

The production build is generated in `dist/` and deployed with Cloudflare Pages. The current toolchain uses the supported Vite 6.4.6 patch line.

The bilingual CV PDFs are generated from `scripts/generate_cvs.py`. To regenerate them locally, install ReportLab with `python -m pip install reportlab` and run `python scripts/generate_cvs.py`. The `Regenerate CV PDFs` GitHub Actions workflow performs this update when the generator changes.
