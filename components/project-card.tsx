import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A18]/30 hover:bg-white/[0.04]">
      <div className="relative flex min-h-62 items-end overflow-hidden rounded-[1.4rem] border border-white/8 bg-[#11100E] p-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#FF7A18]/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
        <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.24em] text-[#7B756D]">
          {project.type}
        </div>
        <div className="relative z-10 ml-auto rounded-2xl border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-xs tracking-[0.22em] text-[#FFB173]">
            {project.accent}
          </span>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[#F5F2ED]">
              {project.name}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#9B958D]">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            size={19}
            className="mt-1 shrink-0 text-[#5F5A54] transition-colors group-hover:text-[#FF7A18]"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/8 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] tracking-wide text-[#AFA9A0]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/8 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F2ED] transition-colors hover:text-[#FF9A4B]"
            >
              Live project <ArrowUpRight size={14} />
            </a>
          )}
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8F8981] transition-colors hover:text-[#F5F2ED]"
          >
            <Code2 size={14} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
