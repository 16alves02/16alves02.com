# Leonardo Alves, Software Developer Portfolio

A lightweight, static portfolio for Leonardo Alves, Software Developer and Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro.

**Live site:** https://16alves02.pages.dev  
**GitHub:** https://github.com/16alves02  
**LinkedIn:** https://www.linkedin.com/in/16alves02/  
**Instagram:** https://www.instagram.com/16alves02/  
**Academic GitHub:** https://github.com/13alves05  
**Contact:** 16alves02@gmail.com

## About

Software Developer with practical experience in web and backend development, currently studying for a CTeSP in Software Development (2025-2027).

## Current objective

Seeking a **paid 680-hour curricular internship starting in February 2027**. Based in Oliveira de Azeméis, open to on-site work nearby and hybrid or remote opportunities across Aveiro, Porto and Coimbra.

## Technical skills

Technologies and tools used across the projects shown here:

- **Languages:** JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL
- **Frontend and applications:** HTML, CSS, React, Next.js, Vite, Android
- **Backend and data:** REST APIs, MySQL, PostgreSQL, Redis, Ktor
- **Tools:** Git, GitHub, Docker, Prisma

## Projects

- **SaborGest**, academic system for managing schedules, attendance and stock in small food businesses, with a PHP web panel, REST API and Kotlin Android kiosk. In development, source repository is private.
- **RunLattice**, workflow automation prototype with a visual editor, templates, background execution, scheduled and signed-webhook triggers, reviewable AI workflow drafts and a working Discord webhook action. The worker currently supports one trigger and at most one condition. Not production-ready.
- **MRDR.**, original crime-deduction game focused on analysing clues and solving cases. In development, source repository is private.
- **HOOP**, academic basketball-store frontend built with React, TypeScript, Vite and React Router. Includes search, filters, favourites, cart and a simulated checkout; it does not process real payments.
- **RAW.**, social card app with three modes, 27 decks and six languages. Public demos are available; the project remains in development and its source repository is private.
- **Basket Hub**, academic web platform for managing basketball teams, players, games, registrations, events, venues and statistics.
- **Tocadiscos Editora**, academic command-line application for managing artists, albums and tracks, with search, financial reports, audio playback and reversible change history.

Project descriptions distinguish academic work, prototypes and projects still in development from production-ready software.

## Education

- **CTeSP in Software Development**, Escola Superior Aveiro Norte, Universidade de Aveiro · 2025-2027
- **Professional Course in IT Systems Management and Programming**, Escola Secundária Dr. Serafim Leite · 2020-2023

## Experience

- CNC Machine Operator, Schmidt Light Metal Group · 2025-2026
- Store Operator, MC · 2024
- Backend Development Intern, ClickBeauty / Alvocromático · 2023
- Web Development Intern, Associação Estamos Juntos (AEJ) · 2022

## Technical approach

The site is intentionally static and lightweight: React, Vite, semantic HTML and CSS. It includes Portuguese and English content, light and dark themes, responsive navigation, project links, CV downloads and a contact form.

The contact form uses FormSubmit as a third-party form relay. There is no custom backend, database, CMS, admin area or Supabase dependency. The first submission may require confirming the destination email address with the form provider.

## Local development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

The production build is generated in `dist/` and deployed with Cloudflare Pages.
