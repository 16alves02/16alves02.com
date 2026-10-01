"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects, projects } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

export default function WorkPage() {
  const { t } = useLanguage();
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="border-b border-white/6 pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
            {t.workPage.eyebrow}
          </p>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-[#F5F2ED] sm:text-7xl">
              {t.workPage.title}
              <span className="block text-[#FF8B32]">{t.workPage.accent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#918A82] sm:text-lg">
              {t.workPage.description}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div key={project.slug} className={index === 0 ? "lg:col-span-2" : ""}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="mb-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
              {t.workPage.moreEyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-4xl">
              {t.workPage.moreTitle}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/8 bg-[#11100E] p-7 sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#FF8E3D]">
              {t.workPage.nextStep}
            </p>
            <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-4xl">
                {t.workPage.nextTitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/16alves02"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-medium text-[#F5F2ED] transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  GitHub <ArrowUpRight size={15} />
                </a>
                <Link href="/#contact" className="primary-button px-4 py-2.5 text-sm">
                  {t.nav.start}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
