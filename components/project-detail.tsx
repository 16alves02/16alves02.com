"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { getProjectTranslation } from "@/data/i18n";
import { projects, type Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

export function ProjectDetail({ project }: { project: Project }) {
  const { t, language } = useLanguage();
  const copy = getProjectTranslation(language, project.slug);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="border-b border-white/7 pb-16 pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.018] px-3.5 py-2 text-xs text-[#8A837B] transition-all hover:border-white/15 hover:bg-white/[0.04] hover:text-[#F5F2ED]"
            >
              <ArrowLeft size={13} />
              {t.common.back}
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_19rem] lg:items-end">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF8E3D]">
                  {project.accent}
                </span>
                {project.academic && (
                  <span className="rounded-full border border-white/9 bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#8A837B]">
                    {t.common.academic}
                  </span>
                )}
              </div>

              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#F5F2ED] sm:text-7xl lg:text-[6.5rem]">
                {project.name}
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#918A82] sm:text-lg">
                {copy.longDescription}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <aside className="rounded-[1.75rem] border border-white/9 bg-[#11100E] p-5 sm:p-6">
                <div className="grid gap-5">
                  {[
                    [t.common.type, copy.type],
                    [t.common.status, copy.status],
                    [t.common.period, project.year],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#625D56]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#EAE4DC]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-white/7">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
          <Reveal>
            <div className="rounded-[2rem] border border-white/9 bg-[#0D0C0B] p-2.5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:p-3">
              <ProjectVisual project={project} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/7">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
          <Reveal>
            <div>
              <p className="section-eyebrow">{t.common.highlights}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#F5F2ED] sm:text-5xl">
                {t.common.workedOn}
              </h2>
            </div>
          </Reveal>

          <div className="space-y-0">
            {copy.highlights.map((highlight, index) => (
              <Reveal key={highlight} delay={index * 60}>
                <div className="group grid grid-cols-[auto_1fr] gap-5 border-t border-white/8 py-5 sm:gap-8 sm:py-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#4F4A44]">
                    0{index + 1}
                  </span>
                  <p className="max-w-2xl text-base leading-7 text-[#B1AAA2] transition-colors group-hover:text-[#E1DCD5] sm:text-lg">
                    {highlight}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/7 bg-[#0C0B0A]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-[1.75rem] border border-white/9 bg-[#11100E] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="section-eyebrow">{t.projectPage.technologies}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#F5F2ED]">
                    {project.name}
                  </h2>
                </div>
                <Code2 size={19} className="text-[#6D675F]" />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/9 bg-white/[0.025] px-3 py-2 font-mono text-[10px] text-[#A8A199]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-[#FF7A18]/18 bg-[linear-gradient(145deg,rgba(255,122,24,0.08),rgba(255,255,255,0.012))] p-6 sm:p-8">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF8E3D]">
                  {t.common.viewProject}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#918A82]">
                  {copy.shortDescription}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button px-4 py-3 text-sm"
                  >
                    {t.common.live}
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-[#E9E4DD] transition-all hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    {t.common.source}
                    <Code2 size={15} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <Reveal>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block rounded-[2rem] border border-white/8 bg-[#11100E] p-6 transition-all hover:border-white/15 hover:bg-[#151311] sm:p-8"
            >
              <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-eyebrow">{t.work.moreProjects}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#F5F2ED] sm:text-5xl">
                    {nextProject.name}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#817B73]">
                    {getProjectTranslation(language, nextProject.slug).shortDescription}
                  </p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#8D877F] transition-all group-hover:border-[#FF7A18]/25 group-hover:bg-[#FF7A18]/8 group-hover:text-[#FF9A4B]">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/7">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-8 sm:px-8 lg:px-10">
          <p className="font-mono text-xs tracking-[0.16em] text-[#F5F2ED]">16alves02</p>
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
