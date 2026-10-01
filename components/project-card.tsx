"use client";

import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] ${compact ? "" : "h-full"}`}
    >
      <div
        className={`relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[#11100E] p-5 ${compact ? "min-h-52" : "min-h-72"}`}
        style={
          {
            "--project-accent": project.color,
          } as CSSProperties
        }
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-15 blur-[85px] transition-transform duration-500 group-hover:scale-125" style={{ background: project.color }} />

        <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#77716A]">
              {project.accent}
            </span>
            <span
              className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]"
              style={{
                borderColor: `${project.color}35`,
                color: project.color,
                background: `${project.color}10`,
              }}
            >
              {project.status === "In development" ? t.about.development : project.year}
            </span>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5F5A54]">
              {project.type}
            </p>
            <div className="mt-3 flex items-end justify-between gap-5">
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#F5F2ED]">
                {project.name}
              </h3>
              <ArrowUpRight
                size={20}
                className="mb-1 shrink-0 text-[#5F5A54] transition-colors group-hover:text-[#F5F2ED]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
        <p className="max-w-2xl text-sm leading-6 text-[#9B958D]">
          {project.shortDescription}
        </p>

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

        <div className="mt-5 border-t border-white/8 pt-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F2ED] transition-colors hover:text-[#FF9A4B]"
          >
            {t.common.viewProject} <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
