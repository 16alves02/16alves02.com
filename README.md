# 16alves02 Portfolio

Personal portfolio for Leonardo Alves, a Software Development student at Escola Superior Aveiro Norte, Universidade de Aveiro (2025–2027), building a path towards software engineering.

**[Open the portfolio](https://16alves02-com.vercel.app)** · **[GitHub profile](https://github.com/16alves02)**

## Professional direction

The long-term goal is to become a software engineer who can reason about and contribute to complete systems: interfaces, business logic, APIs, data persistence, background processing, testing and mobile applications.

The portfolio presents academic and personal projects as evidence of this learning path. It distinguishes what is implemented from what is still a prototype, in development or planned.

## Internship availability

Seeking a **paid 680-hour curricular software development internship starting in February 2027**, preferably in **Coimbra, Portugal**. Open to on-site, hybrid or remote opportunities.

- Start: February 2027
- Duration: 680 hours
- Preferred location: Coimbra, Portugal
- Work arrangement: On-site / hybrid / remote
- Type: Paid curricular internship

CV downloads:
- English: `/cv-leonardo-alves-en.pdf`
- Portuguese: `/cv-leonardo-alves-pt.pdf`

## Four featured projects

The portfolio highlights these projects in the same order.

| Project | Engineering focus | Technologies | Current status |
| --- | --- | --- | --- |
| **SaborGest** | Integrated management system with a PHP web panel, REST API, relational database and Kotlin Android kiosk. Scope includes schedules, attendance, stock and communication between clients. | PHP 8.3, PDO, REST API, MySQL/MariaDB, Kotlin, Android, Retrofit | Academic project in development; integration, acceptance and security validation remain. Not production-ready. |
| **RunLattice** | Workflow automation prototype exploring a visual editor, graph validation, API operations, persistence, execution history and asynchronous processing. | Next.js, React, TypeScript, Route Handlers, Zod, PostgreSQL, Prisma, Redis, BullMQ, Vitest | Worker simulates workflow traversal. External integrations, authentication and workspace isolation are not implemented. |
| **MRDR.** | Original deduction game exploring case generation and validation, a modular logic engine, campaign progression, achievements and automated tests. | React 19, TypeScript, Vite, Zustand, Vitest, Capacitor | In development. Project documentation describes 200 cases and automated checks for validity and unique solutions. |
| **RAW.** | Interactive conversation and party-game application with multiple modes, card interactions, swipe gestures, animated transitions, localisation and a mobile/PWA-oriented experience. | React, JavaScript, Tailwind CSS, Framer Motion, PWA, localisation | Live interactive project; source repository is private. |

## Additional projects

- **Nova Imagem by Maura Pereira** - client website in preparation with the salon owner. Service descriptions, imagery, opening hours and publication details require confirmation. A CMS-based content editing workflow is planned but not yet implemented or validated.
- **HOOP** - educational basketball-store frontend with product discovery, filters, favourites, cart and a simulated checkout; no real payments. [Repository](https://github.com/16alves02/hoop) · [Demo](https://hoop-16alves02.netlify.app)
- **Todo App** - browser task manager with filters and local persistence. [Repository](https://github.com/16alves02/todo-app) · [Demo](https://todo-app-three-beta-56.vercel.app)
- **ArraySorting** - C console program demonstrating Selection Sort, Insertion Sort, Bubble Sort and a small Bogo Sort example. [Repository](https://github.com/16alves02/ArraySorting)
- **Basket Hub** - academic group project for basketball management, covering teams, players, games, events, registrations, organisers, venues, sponsors, rankings and statistics. Built with Kotlin, Ktor, Thymeleaf and Exposed. [Group repository](https://github.com/bmgoliveira-UA/basket-hub)
- **Tocadiscos Editora** - command-line music-publisher catalogue manager developed by a four-person academic team. Leonardo Alves and Bruno Oliveira were the main contributors; Gabriela Tavares and Vinicius Toniato also participated. Built with Python, Pygame, Whoosh and pandas. [Group repository](https://github.com/13alves05/tocadiscos-editora)
- **Academic GitHub profile** - coursework and academic group projects are also organised under [13alves05](https://github.com/13alves05).
- **Two of Hearts** - vector playing-card illustration inspired by Lenços de Namorados from Minho. [Repository](https://github.com/16alves02/two-of-hearts-portuguese-folk-art)

## Technical foundation

These technologies are connected to coursework, previous software internships or the projects above; experience varies by tool.

- **Languages:** JavaScript, TypeScript, PHP, Kotlin, C
- **Frontend:** React, Next.js, Vite, React Router, HTML5, CSS3, Tailwind CSS, Framer Motion
- **Backend and APIs:** PHP, PDO, REST APIs, Next.js Route Handlers, Zod
- **Data and persistence:** SQL, MySQL/MariaDB, PostgreSQL, Prisma
- **Background processing:** Redis, BullMQ
- **Mobile:** Kotlin, Android, Capacitor
- **Testing and tools:** Vitest, Git, GitHub, Docker Compose

Node.js is used as the runtime environment for the Next.js project; it is not presented as a separate production backend project.

## Experience and education

Software development experience:
- Backend Development Intern - ClickBeauty / Alvocromático · Apr–Jul 2023 · PHP, MySQL, internal web systems and code maintenance.
- Web Development Intern - Associação Estamos Juntos (AEJ) · Jul 2022 · HTML, CSS, JavaScript, PHP and database integration.

Additional professional experience:
- CNC Machine Operator - Schmidt Light Metal Group · Feb 2025–May 2026.
- Store Operator - MC · May–Aug 2024.

Education:
- CTeSP in Software Development - Escola Superior Aveiro Norte, Universidade de Aveiro · 2025–2027 · In progress.
- Professional Course in IT Systems Management and Programming - Escola Secundária Dr. Serafim Leite · 2020–2023.

## Site features

- Responsive layout and seven languages: English, Portuguese (Portugal), Spanish, French, Italian, German and Japanese.
- Light/dark themes, keyboard navigation, skip link and reduced-motion support.
- CSS 3D project carousel with keyboard, pointer, touch and scroll controls.
- Editorial engineering stories with scroll-linked chapter emphasis and factual architecture diagrams.
- Language-aware CV downloads and prefilled internship enquiry email.
- Project cards distinguish public links, private repositories and development status.
- No WebGL or Three.js dependency.

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

## Project structure

- `src/App.jsx` - page sections, copy, language handling and navigation.
- `src/components/ProjectCarousel.jsx` - CSS 3D featured-project carousel and input handling.
- `src/components/EngineeringStories.jsx` - editorial engineering case studies and scroll progress.
- `src/styles.css` - layout, themes, responsive styling and motion preferences.
- `src/data/projects.js` - project descriptions, technology stacks, links and status.
- `public/` - downloadable CVs and site assets.

## Author

Leonardo Alves · [GitHub](https://github.com/16alves02) · [LinkedIn](https://www.linkedin.com/in/16alves02/) · [Email](mailto:16alves02@gmail.com)
