# Leonardo Alves — Software Developer Portfolio

A lightweight, static portfolio for Leonardo Alves, Software Developer and Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro.

**Live site:** https://16alves02.pages.dev  
**GitHub:** https://github.com/16alves02  
**LinkedIn:** https://www.linkedin.com/in/16alves02/  
**Contact:** 16alves02@gmail.com

## About

Software Developer with practical experience in web and backend development, currently studying for a CTeSP in Software Development (2025–2027).

## Selected work

- **SaborGest** — academic management system combining a PHP web panel, REST API, relational database and Kotlin Android kiosk. In development; not production-ready.
- **RunLattice** — early-stage workflow automation prototype with visual workflows, background execution, signed webhooks and a Discord action. Not production-ready.
- **MRDR.** — original criminal deduction game with procedurally generated cases and connected clues. In development.
- **RAW.** — interactive social conversation and party-game application. Source repository is private.
- **HOOP** — academic basketball-store frontend with product discovery, filters, favourites, cart and simulated checkout.

Project descriptions distinguish implemented work from prototypes and academic simulations.

## Education

- **CTeSP in Software Development** — Escola Superior Aveiro Norte, Universidade de Aveiro · 2025–2027
- **Professional Course in IT Systems Management and Programming** — Escola Secundária Dr. Serafim Leite · 2020–2023

## Experience

- Backend Development Intern — ClickBeauty / Alvocromático · Apr–Jul 2023
- Web Development Intern — Associação Estamos Juntos (AEJ) · Jul 2022
- CNC Machine Operator — Schmidt Light Metal Group · Feb 2025–May 2026
- Store Operator — MC · May–Aug 2024

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
