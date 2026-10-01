"use client";

import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { getProjectTranslation } from "@/data/i18n";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const { t, language } = useLanguage();
  const copy = getProjectTranslation(language, project.slug);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs text-[#78726A] transition-colors hover:text-[#F5F2ED]"
          >
            <ArrowLeft size={14} /> {t.common.back}
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF8E3D]">
                  {project.accent}
                </span>
                {project.academic && (
                  <span className="rounded-full border border-white/9 bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#8A837B]">
                    {t.common.academic}
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-[#F5F2ED] sm:text-7xl">
                {project.name}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-[#918A82] sm:text-lg">
                {copy.longDescription}
              </p>
            </div>

            <div className="rounded-3xl border border-white/8 bg-[#11100E] p-6">
              <div className="grid gap-5 text-sm">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#625D56]">
                    {t.common.type}
                  </p>
                  <p className="mt-2 text-[#EAE4DC]">{copy.type}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#625D56]">
                    {t.common.status}
                  </p>
                  <p className="mt-2 text-[#EAE4DC]">{copy.status}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#625D56]">
                    {t.common.period}
                  </p>
                  <p className="mt-2 text-[#EAE4DC]">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#11100E] p-7 sm:p-12">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px] opacity-20"
              style={{ background: project.color }}
            />
            <div className="relative grid min-h-80 items-end rounded-[1.4rem] border border-white/7 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] p-6 sm:p-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#625D56]">
                  {t.common.preview}
                </p>
                <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-5xl">
                  {project.name}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/9 bg-black/20 px-3 py-1.5 font-mono text-[10px] text-[#A8A199]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/6">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#FF8E3D]">
              {t.common.highlights}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED]">
              {t.common.workedOn}
            </h2>
          </div>

          <div className="space-y-4">
            {copy.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-white/8 pt-5"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#504B45]">
                  0{index + 1}
                </span>
                <p className="text-base leading-7 text-[#B1AAA2]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button px-5 py-3 text-sm"
              >
                {t.common.live} <ExternalLink size={15} />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-[#F5F2ED] transition-colors hover:border-white/20 hover:bg-white/5"
              >
                <Code2 size={15} /> {t.common.source}
              </a>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-8 sm:px-8 lg:px-10">
          <p className="font-mono text-xs tracking-[0.16em] text-[#F5F2ED]">
            16alves02
          </p>
          <Link
            href="/work"
            className="text-xs text-[#746E67] transition-colors hover:text-[#F5F2ED]"
          >
            {t.common.allProjects}
          </Link>
        </div>
      </footer>
    </main>
  );
}
