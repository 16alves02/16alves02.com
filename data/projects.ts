export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  type: string;
  status: string;
  year: string;
  technologies: string[];
  accent: string;
  color: string;
  featured?: boolean;
  academic?: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "hoop",
    name: "HOOP",
    shortDescription:
      "A basketball-focused e-commerce experience built around product discovery, shopping flow and responsive UI.",
    longDescription:
      "A personal frontend project exploring how a sports-focused store could turn a catalogue into a complete digital shopping experience.",
    type: "E-commerce / Web",
    status: "Completed personal project",
    year: "2025-2026",
    technologies: ["React", "TypeScript", "Vite", "Context API"],
    accent: "01 / HOOP",
    color: "#F2C94C",
    featured: true,
    liveUrl: "https://hoop-16alves02.netlify.app",
    repositoryUrl: "https://github.com/16alves02/hoop",
    highlights: [
      "Responsive product browsing and discovery",
      "Cart and favourites flows with local persistence",
      "Multi-step simulated checkout experience",
    ],
  },
  {
    slug: "raw",
    name: "RAW.",
    shortDescription:
      "An interactive social conversation experience built around questions, games, movement and real-world interaction.",
    longDescription:
      "An experimental frontend project focused on interaction design, content-driven game modes and a strong visual identity.",
    type: "Interactive Web",
    status: "Completed personal project",
    year: "2025-2026",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    accent: "02 / RAW.",
    color: "#00F0FF",
    featured: true,
    liveUrl: "https://raw-app-bice.vercel.app",
    repositoryUrl: "https://github.com/16alves02/raw-app",
    highlights: [
      "Three distinct conversation and game modes",
      "Tap and swipe-driven card interaction",
      "Motion, haptics and responsive UI feedback",
    ],
  },
  {
    slug: "saborgest",
    name: "SaborGest",
    shortDescription:
      "A management system designed around operational workflows found in small bakeries and pastry shops.",
    longDescription:
      "An academic software project developed around a realistic business scenario, covering employee management, shifts, working hours, production, stock and operational information.",
    type: "Academic Software Project",
    status: "In development",
    year: "2026-2027",
    technologies: ["Kotlin", "Android", "PHP", "REST API", "MySQL"],
    accent: "03 / SABORGEST",
    color: "#FF7A18",
    featured: true,
    academic: true,
    highlights: [
      "Android applications for different user roles",
      "REST API and database-backed workflows",
      "Software requirements, testing and project documentation",
    ],
  },
  {
    slug: "todo-app",
    name: "Todo App",
    shortDescription:
      "A lightweight browser task manager focused on DOM interaction, filtering and local persistence.",
    longDescription:
      "A small personal project used to practise the fundamentals of interactive browser applications without a frontend framework.",
    type: "Web Fundamentals",
    status: "Completed personal project",
    year: "2025-2026",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    accent: "04 / TODO",
    color: "#BDB8AF",
    highlights: [
      "Task creation and completion flows",
      "Filtering and dynamic DOM updates",
      "Persistent browser storage",
    ],
  },
  {
    slug: "arraysorting",
    name: "ArraySorting",
    shortDescription:
      "A C console project exploring classic sorting algorithms through explicit implementations and a simple terminal menu.",
    longDescription:
      "One of the earliest projects in the portfolio, built to practise algorithms, arrays, functions and program flow.",
    type: "Algorithms / C",
    status: "Completed learning project",
    year: "2023-2026",
    technologies: ["C", "Algorithms", "Arrays", "Functions"],
    accent: "05 / C",
    color: "#A8B9CC",
    highlights: [
      "Selection, insertion and bubble sort",
      "Bogo Sort as an educational demonstration",
      "Simple console-based interaction",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
