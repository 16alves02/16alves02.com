"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";
import { getProjectTranslation } from "@/data/i18n";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({
  project,
  compact = false,
  featured = false,
}: {
  project: Project;
  compact?: boolean;
  featured?: boolean;
}) {
  const { t, language } = useLanguage();
  const copy = getProjectTranslation(language, project.slug);

  return (
    <article
      className={`project-card group h-full overflow-hidden rounded-[2rem] border border-white/9 bg-[#11100E] shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_28px_90px_rgba(0,0,0,0.3)] ${featured ? "ring-1 ring-white/5" : ""}`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB173]"
      >
        <div className="relative p-2.5 sm:p-3">
          <ProjectVisual project={project} compact={compact} priority={featured && project.slug === "hoop"} />
          <div className="pointer-events-none absolute inset-x-7 bottom-7 flex items-center justify-between">
            <span
              className="rounded-full border bg-[#0B0A09]/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-md"
              style={{
                borderColor: `${project.color}40`,
                color: project.color,
              }}
            >
              {project.accent}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/25 text-[#F5F2ED] backdrop-blur-md transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        <div className={`px-5 pb-5 pt-2 sm:px-7 sm:pb-7 ${compact ? "" : "lg:px-8 lg:pb-8"}`}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-[#6F6962]">
              {copy.type}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#4F4A44]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-[#77716A]">
              {copy.status}
            </span>
          </div>

          <div className="mt-3 flex items-end justify-between gap-6">
            <h3 className={`font-semibold tracking-[-0.045em] text-[#F5F2ED] ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
              {project.name}
            </h3>
            <span className="hidden shrink-0 text-xs font-medium text-[#8F8981] transition-colors group-hover:text-[#FF9A4B] sm:block">
              {t.common.viewProject}
            </span>
          </div>

          <p className={`mt-4 max-w-3xl leading-7 text-[#8D877F] ${featured ? "text-base" : "text-sm"}`}>
            {copy.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/8 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] tracking-wide text-[#AFA9A0]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
