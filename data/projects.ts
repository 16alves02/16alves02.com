export type Project = {
  slug: string;
  name: string;
  description: string;
  type: string;
  technologies: string[];
  accent: string;
  liveUrl?: string;
  repositoryUrl: string;
};

export const projects: Project[] = [
  {
    slug: "hoop",
    name: "HOOP",
    description:
      "A basketball-focused e-commerce experience built around product discovery, shopping flow and responsive UI.",
    type: "Web application",
    technologies: ["React", "TypeScript", "Vite"],
    accent: "HOOP",
    liveUrl: "https://hoop-16alves02.netlify.app",
    repositoryUrl: "https://github.com/16alves02/hoop",
  },
  {
    slug: "raw",
    name: "RAW.",
    description:
      "An interactive social conversation experience built around questions, games, motion and real-world interaction.",
    type: "Interactive web experience",
    technologies: ["React", "Tailwind", "Framer Motion"],
    accent: "RAW.",
    liveUrl: "https://raw-app-bice.vercel.app",
    repositoryUrl: "https://github.com/16alves02/raw-app",
  },
  {
    slug: "todo-app",
    name: "Todo App",
    description:
      "A lightweight browser task manager focused on DOM interaction, filtering and local persistence.",
    type: "Web application",
    technologies: ["HTML", "CSS", "JavaScript"],
    accent: "TODO",
    liveUrl: "https://todo-app-three-beta-56.vercel.app",
    repositoryUrl: "https://github.com/16alves02/todo-app",
  },
  {
    slug: "arraysorting",
    name: "ArraySorting",
    description:
      "A C console project exploring classic sorting algorithms through explicit implementations and a simple terminal menu.",
    type: "Console application",
    technologies: ["C", "Algorithms", "Arrays"],
    accent: "C",
    repositoryUrl: "https://github.com/16alves02/ArraySorting",
  },
];
