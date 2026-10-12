import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Pré-visualização do projeto ${project.name}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    );
  }

  return (
    <div className="flex h-full min-h-56 flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-lime-950">
      <span className="font-mono text-5xl font-bold text-white">
        RAW<span className="text-lime-400">.</span>
      </span>
      <span className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-400">
        Design meets function
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-divider">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-label">02 / PROJETOS</p>
          <h2 className="section-title">
            Trabalho que fala
            <br />
            <span className="muted-text">por si.</span>
          </h2>
          <p className="muted-text mt-5 max-w-xl leading-7">
            Projetos que desenvolvi, explorando diferentes abordagens e tecnologias
            no ecossistema React.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="surface-card group overflow-hidden rounded-2xl border transition duration-300">
              <div className="project-preview relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <ProjectPreview project={project} />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 font-mono text-xs text-zinc-300">
                  0{index + 1} / PROJECT
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-semibold text-zinc-950">
                  {project.category}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="strong-text text-2xl font-bold">{project.name}</h3>
                    <p className="muted-text mt-3 leading-7">{project.description}</p>
                  </div>
                  <ArrowUpRight size={22} className="accent shrink-0" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pill rounded-md px-2.5 py-1.5 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="section-divider mt-7 flex flex-wrap gap-5 border-t pt-5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="muted-text inline-flex items-center gap-2 text-sm">
                    <Github size={17} /> Código-fonte
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="muted-text inline-flex items-center gap-2 text-sm">
                    <ExternalLink size={16} /> Ver demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://github.com/16alves02" target="_blank" rel="noreferrer" className="muted-text inline-flex items-center gap-2 text-sm">
            Explorar mais no GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}