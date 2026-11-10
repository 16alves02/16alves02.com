# Leonardo Alves — Software Developer Portfolio

Personal portfolio for Leonardo Alves, Software Developer and CTeSP Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro (2025–2027).

**[Open the portfolio](https://16alves02.pages.dev)** · **[Professional GitHub](https://github.com/16alves02)** · **[Academic GitHub](https://github.com/13alves05)** · **[LinkedIn](https://www.linkedin.com/in/16alves02/)**

## Professional profile

I am a Software Developer with practical experience in web development, backend development and application projects. My work includes user interfaces, business logic, REST APIs, relational databases, asynchronous processing and Android development.

The projects below show different parts of that work. Their descriptions distinguish implemented functionality from prototypes, academic simulations and work that is still in development.

## Internship

Seeking a **paid 680-hour curricular Software Development internship starting in February 2027**.

- **Location:** Oliveira de Azeméis and nearby areas for on-site opportunities.
- **Mobility:** Aveiro, Porto and Coimbra districts.
- **Work arrangement:** on-site, hybrid or remote.
- **Duration:** 680 hours.
- **Availability:** February 2027.

## Featured projects

| Project | What it demonstrates | Technologies | Status |
| --- | --- | --- | --- |
| **SaborGest** | An academic management system combining a PHP web panel, REST API, relational database and Kotlin Android kiosk. Its scope includes staff schedules, attendance records and stock movements. | PHP, PDO, REST API, MySQL/MariaDB, Kotlin, Android, Retrofit | In development. Integration, device-key configuration, Android validation, deployment and acceptance checks remain. Not production-ready. |
| **RunLattice** | A workflow automation prototype with authenticated organisation workspaces, a visual builder, PostgreSQL persistence and Redis/BullMQ execution. Implemented paths include signed inbound webhooks, scheduled triggers and a live Discord action. | Next.js, React, TypeScript, Better Auth, PostgreSQL, Prisma, Redis, BullMQ, Vitest | Early-stage prototype. Discord is the only live external action; durable step resumption and additional provider actions are not implemented. Not production-ready. |
| **MRDR.** | An original deduction game with procedural case generation, clue relationships, solution validation, campaign progression and automated tests. | React, TypeScript, Vite, Zustand, Vitest, Capacitor | In development. The game is not presented as a finished release. |
| **RAW.** | An interactive conversation and party-game application with multiple modes, card interactions, multilingual interface and a mobile/PWA-oriented experience. | React, JavaScript, Tailwind CSS, Framer Motion, PWA | Live interactive project. Source repository is private. |

## Additional projects

- **HOOP** — academic basketball-store frontend with product discovery, search, filters, favourites, cart and a simulated checkout. Authentication and payments are simulations; no real purchases are processed. [Repository](https://github.com/16alves02/hoop) · [Live demo](https://hoop-16alves02.netlify.app)
- **Nova Imagem by Maura Pereira** — website project for a local salon. Content and publication details still require confirmation; the content-management workflow is not yet configured for the owner.
- **Basket Hub** — academic group project for basketball management, covering teams, players, games, events, registrations, venues, sponsors, rankings and statistics. Built with Kotlin, Ktor, Thymeleaf and Exposed. [Official group repository](https://github.com/bmgoliveira-UA/basket-hub)
- **Tocadiscos Editora** — command-line music catalogue manager developed by a four-person academic team. Leonardo Alves and Bruno Oliveira were the main contributors; Gabriela Tavares and Vinicius Toniato also participated. Built with Python, Pygame, Whoosh and pandas. [Academic repository](https://github.com/13alves05/tocadiscos-editora)
- **Todo App** — browser task manager with filtering and local persistence. [Repository](https://github.com/16alves02/todo-app)
- **ArraySorting** — C console program demonstrating sorting algorithms. [Repository](https://github.com/16alves02/ArraySorting)
- **Two of Hearts** — vector playing-card illustration inspired by Lenços de Namorados from Minho. [Repository](https://github.com/16alves02/two-of-hearts-portuguese-folk-art)

More academic work and group projects are organised in the [academic GitHub profile](https://github.com/13alves05).

## Technical foundation

Technologies used across coursework, internships and projects. Practical experience varies by technology.

- **Languages:** JavaScript, TypeScript, PHP, Kotlin, C, Python
- **Frontend:** React, Next.js, Vite, React Router, HTML, CSS, Tailwind CSS
- **Backend and APIs:** PHP, PDO, REST APIs, Next.js Route Handlers
- **Data:** SQL, MySQL/MariaDB, PostgreSQL, Prisma
- **Background processing:** Redis, BullMQ
- **Mobile:** Kotlin, Android, Capacitor
- **Testing and tools:** Vitest, Git, GitHub, Docker Compose

## Experience

- **Backend Development Intern — ClickBeauty / Alvocromático** · Apr–Jul 2023 · PHP, MySQL, internal web systems and code maintenance.
- **Web Development Intern — Associação Estamos Juntos (AEJ)** · Jul 2022 · HTML, CSS, JavaScript, PHP and database integration.
- **CNC Machine Operator — Schmidt Light Metal Group** · Feb 2025–May 2026.
- **Store Operator — MC** · May–Aug 2024.

## Education

- **CTeSP in Software Development** — Escola Superior Aveiro Norte, Universidade de Aveiro · 2025–2027 · In progress.
- **Professional Course in IT Systems Management and Programming** — Escola Secundária Dr. Serafim Leite · 2020–2023.

## Website

The portfolio includes an interactive procedural 3D hero, depth-based project cards, responsive layouts, seven interface languages, persistent light and dark themes shared with the legal and 404 pages, language-aware CV downloads, project case studies and links to professional and social profiles.

## Immersive 3D experience

The homepage uses a custom procedural 3D scene rendered with native WebGL. It combines a rotating wireframe sphere, spatial orbits, a perspective grid and pointer-responsive parallax. Project cards use layered depth and restrained 3D transforms. The scene is decorative: all navigation and project information remain normal HTML content and do not depend on WebGL.

The renderer caps device pixel ratio, targets 30 frames per second, pauses when it leaves the viewport, respects `prefers-reduced-motion`, responds to container resizing and includes a CSS poster fallback for browsers without WebGL or when the graphics context is lost. The WebGL scene is split into its own bundle, while the engineering case-study section is loaded only as it approaches the viewport. Geometry is generated locally in the browser. No external 3D model, Three.js dependency or third-party asset is downloaded at runtime.

Project previews use verified artwork from the corresponding source repositories or public project deployments. Images are lazy-loaded and decoded asynchronously. Projects without a publicly usable image keep a clearly identified typographic preview rather than an invented product screenshot.

## Theme contrast and accessibility

The light and dark themes use separate text-accent and button-fill colors. Large content sections use neutral theme surfaces instead of saturated orange backgrounds, and filled controls use a foreground color with a WCAG AA contrast ratio of at least 4.5:1. The saved theme preference is also applied by the privacy, terms and 404 pages.

Run `npm run verify:theme` to check the theme color tokens, key WCAG AA contrast ratios, 3D scene fallback and motion handling. This check is included in GitHub Actions.

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/16alves02/16alves02.com.git
cd 16alves02.com
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Author

**Leonardo Alves** · [GitHub](https://github.com/16alves02) · [LinkedIn](https://www.linkedin.com/in/16alves02/) · [Email](mailto:alv16studios@gmail.com)

## Deployment

The portfolio is published with **Cloudflare Pages** at [16alves02.pages.dev](https://16alves02.pages.dev).

- **Repository:** `16alves02/16alves02.com`
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output:** `dist/`
- **Root directory:** `/`

Pull requests receive separate Cloudflare Pages preview deployments. The stable production URL remains the project subdomain above.


## Content management

The private content manager is available at `/admin`. It uses Supabase and Cloudflare Pages Functions. See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) before configuring the database, admin account and Cloudflare secrets. Changes should be reviewed in a pull request before production release.
