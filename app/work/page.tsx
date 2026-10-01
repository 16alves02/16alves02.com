"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

export default function WorkPage() {
  const { t } = useLanguage();

  const featured = projects.filter((project) => project.featured);
  const remaining = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <section className="relative overflow-hidden border-b border-white/7 pb-20 pt-36 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_18%,rgba(255,122,24,0.09),transparent_25rem)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="section-eyebrow">{t.workPage.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.06em] text-[#F5F2ED] sm:text-7xl lg:text-[6.7rem]">
              {t.workPage.title}
              <span className="block text-[#FF8B32]">{t.workPage.accent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#918A82] sm:text-lg">
              {t.workPage.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-5 lg:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 80}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <ProjectCard project={project} featured={index === 0} compact={index !== 0} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <div className="mb-10">
              <p className="section-eyebrow">{t.workPage.moreEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-4xl">
                {t.workPage.moreTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {remaining.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <ProjectCard project={project} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/7">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/9 bg-[#11100E] p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF7A18]/8 blur-[100px]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="section-eyebrow">{t.workPage.nextStep}</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#F5F2ED] sm:text-5xl">
                    {t.workPage.nextTitle}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/16alves02"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-[#E8E3DC] transition-all hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    GitHub
                    <ArrowUpRight size={15} />
                  </a>
                  <Link href="/#contact" className="primary-button px-4 py-3 text-sm">
                    {t.nav.start}
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/7">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-mono text-xs tracking-[0.16em] text-[#F5F2ED]">16alves02</p>
          <Link
            href="/"
            className="text-xs text-[#746E67] transition-colors hover:text-[#F5F2ED]"
          >
            16alves02.com
          </Link>
        </div>
      </footer>
    </main>
  );
}
