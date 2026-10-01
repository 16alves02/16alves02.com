"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { featuredProjects, projects } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#F5F2ED] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      <div className="max-w-md">
        {description && (
          <p className="text-sm leading-7 text-[#8F8981] sm:text-base">
            {description}
          </p>
        )}
        {action}
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const featuredProject = featuredProjects[0];

  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <section className="hero-section relative isolate overflow-hidden">
        <div className="hero-grid absolute inset-0 -z-20" />
        <div className="hero-glow hero-glow-one absolute left-[8%] top-[12%] -z-10" />
        <div className="hero-glow hero-glow-two absolute right-[-8%] top-[12%] -z-10" />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-36">
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="status-pill">
                <span className="status-dot" />
                {t.hero.availability}
              </span>
              <span className="hero-meta">Portugal</span>
            </div>

            <h1 className="mt-7 max-w-4xl text-[3.6rem] font-semibold leading-[0.91] tracking-[-0.065em] text-[#F7F3EE] sm:text-6xl lg:text-[5.8rem] xl:text-[6.7rem]">
              {t.hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#A39D95] sm:text-lg sm:leading-8">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="primary-button group px-5 py-3.5 text-sm">
                {t.hero.project}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#work"
                className="secondary-button group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm font-medium text-[#E9E4DD] transition-all hover:border-white/20 hover:bg-white/[0.05]"
              >
                {t.hero.work}
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/8 pt-5">
              {[t.hero.web, t.hero.mobile, t.hero.backend].map((item) => (
                <span key={item} className="hero-proof-item">
                  {item}
                </span>
              ))}
              <span className="hero-proof-item">University of Aveiro</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:pl-4">
            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full border border-[#FF7A18]/20 bg-[#FF7A18]/5 blur-sm lg:block" />

              <div className="browser-frame relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#100F0D] shadow-[0_35px_100px_rgba(0,0,0,0.38)]">
                <div className="flex h-11 items-center justify-between border-b border-white/8 bg-[#0C0B0A]/90 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B5E]" />
                    <span className="h-2 w-2 rounded-full bg-[#F4C95D]" />
                    <span className="h-2 w-2 rounded-full bg-[#4DD67B]" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.14em] text-[#59534D]">
                    16ALVES02 / FEATURED
                  </span>
                </div>

                <div className="p-2.5 sm:p-3">
                  <ProjectVisual project={featuredProject} priority />
                </div>

                <Link
                  href={`/work/${featuredProject.slug}`}
                  className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B0A09]/80 px-4 py-3.5 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-[#0B0A09]/90"
                >
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#6D675F]">
                      01 / HOOP
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#F5F2ED]">
                      {t.common.viewProject}
                    </p>
                  </div>
                  <ArrowRight size={17} className="text-[#FF9A4B]" />
                </Link>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden w-52 rounded-2xl border border-white/10 bg-[#0C0B0A]/92 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:block lg:-left-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#625D56]">
                    Current focus
                  </span>
                  <Sparkles size={14} className="text-[#FF9A4B]" />
                </div>
                <p className="mt-3 text-sm font-semibold text-[#F5F2ED]">
                  Websites & digital experiences
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Next.js"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[8px] text-[#8C867E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="border-y border-white/7 bg-white/[0.012]">
          <div className="marquee-track mx-auto flex max-w-none gap-10 px-5 py-4 sm:gap-14">
            {[...t.clients.types, t.services.business, t.services.landing, t.services.ecommerce, t.services.custom].map(
              (item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-10 font-mono text-[9px] uppercase tracking-[0.2em] text-[#69635C]"
                >
                  {item}
                  <span className="text-[#FF7A18]">✦</span>
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-32 border-t border-white/7">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow={t.work.eyebrow}
              title={t.work.title}
              description={t.work.description}
              action={
                <Link
                  href="/work"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#F5F2ED] transition-colors hover:text-[#FF9A4B]"
                >
                  {t.work.all}
                  <ArrowUpRight size={15} />
                </Link>
              }
            />
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 80}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  featured={index === 0}
                  compact={index !== 0}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-dashed border-white/9 bg-white/[0.015] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#625D56]">
                  {t.work.moreProjects}
                </p>
                <p className="mt-2 text-sm text-[#8D877F]">
                  {t.work.moreProjectsDescription}
                </p>
              </div>
              <Link
                href="/work"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-[#F0ECE6] transition-all hover:border-[#FF7A18]/30 hover:bg-[#FF7A18]/6"
              >
                {t.work.all}
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="scroll-mt-32 border-t border-white/7 bg-[#0C0B0A]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              description={t.services.description}
            />
          </Reveal>

          <div className="grid gap-3 lg:grid-cols-2">
            {[
              { number: "01", title: t.services.business, description: t.services.businessDescription, icon: Globe2 },
              { number: "02", title: t.services.landing, description: t.services.landingDescription, icon: Layers3 },
              { number: "03", title: t.services.ecommerce, description: t.services.ecommerceDescription, icon: ShoppingBag },
              { number: "04", title: t.services.custom, description: t.services.customDescription, icon: Code2 },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.number} delay={index * 70}>
                  <article className="service-card group relative min-h-60 overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#11100E] p-6 sm:p-8">
                    <div className="absolute right-6 top-6 font-mono text-[9px] tracking-[0.18em] text-[#4E4943]">
                      {service.number}
                    </div>
                    <Icon size={21} strokeWidth={1.6} className="text-[#FF8E3D]" />
                    <div className="mt-16 max-w-md">
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#F5F2ED]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#817B73]">
                        {service.description}
                      </p>
                    </div>
                    <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/8 text-[#5C5751] transition-all duration-300 group-hover:border-[#FF7A18]/25 group-hover:bg-[#FF7A18]/8 group-hover:text-[#FF9A4B]">
                      <ArrowUpRight size={16} />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140}>
            <div className="mt-12 flex flex-col gap-5 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(120deg,rgba(255,122,24,0.06),rgba(255,255,255,0.012))] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF8E3D]">
                  {t.clients.eyebrow}
                </p>
                <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-[#E9E4DD]">
                  {t.clients.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
                {t.clients.types.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-white/8 bg-black/10 px-3 py-1.5 text-[11px] text-[#989189]"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="scroll-mt-32 border-t border-white/7">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow={t.process.eyebrow}
              title={t.process.title}
              description={t.process.description}
            />
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 70}>
                <article className="process-card group h-full rounded-[1.75rem] border border-white/8 bg-white/[0.018] p-6 transition-all duration-300 hover:border-[#FF7A18]/18 hover:bg-[#11100E] sm:p-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#FF8E3D]">
                    {step.number}
                  </span>
                  <div className="mt-16">
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#F5F2ED]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#817B73]">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 border-t border-white/7 bg-[#0C0B0A]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-32">
          <Reveal>
            <div>
              <p className="section-eyebrow">{t.about.eyebrow}</p>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#F5F2ED] sm:text-5xl">
                {t.about.title}
              </h2>
              <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-[#8F8981] sm:text-base">
                <p>{t.about.body1}</p>
                <p>{t.about.body2}</p>
                <p>{t.about.body3}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  ["LinkedIn", "https://www.linkedin.com/in/leonardo-alves-502ba8291/"],
                  ["Uiverse", "https://uiverse.io/16alves02"],
                  ["GitHub", "https://github.com/16alves02"],
                  ["Instagram", "https://www.instagram.com/16alves02/"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/9 bg-white/[0.018] px-3.5 py-2.5 text-xs font-medium text-[#B8B1A8] transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-[#F5F2ED]"
                  >
                    {label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/9 bg-[#11100E] p-2.5 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-3">
              <ProjectVisual
                project={projects.find((project) => project.slug === "saborgest")!}
                compact
                priority={false}
              />
              <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
                {[
                  [t.about.currently, "SaborGest"],
                  [t.common.status, t.about.development],
                  [t.projectPage.technologies, "Kotlin · PHP · MySQL"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-black/15 p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#625D56]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#E4DED6]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/7">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
            />
          </Reveal>

          <div className="mx-auto max-w-4xl divide-y divide-white/8 border-y border-white/8">
            {t.faq.items.map((item, index) => (
              <Reveal key={item.question} delay={index * 60}>
                <details className="group py-5 sm:py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB173]">
                    <span className="text-base font-medium text-[#E9E4DD] sm:text-lg">
                      {item.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/8 text-[#6B655E] transition-all group-open:rotate-45 group-open:border-[#FF7A18]/25 group-open:text-[#FF9A4B]">
                      <span className="text-xl leading-none">+</span>
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 pr-10 text-sm leading-7 text-[#817B73] sm:text-base">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32 border-t border-white/7">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <div className="contact-panel relative overflow-hidden rounded-[2.5rem] border border-[#FF7A18]/25 p-7 sm:p-12 lg:p-16">
              <div className="contact-panel-grid absolute inset-0" />
              <div className="contact-panel-glow absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF7A18]/18 blur-[100px]" />

              <div className="relative max-w-4xl">
                <p className="section-eyebrow">{t.contact.eyebrow}</p>
                <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#F8F3ED] sm:text-6xl lg:text-7xl">
                  {t.contact.title}
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#AAA39A] sm:text-base">
                  {t.contact.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/leonardo-alves-502ba8291/"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button px-5 py-3.5 text-sm"
                  >
                    <MessageCircle size={16} />
                    {t.contact.conversation}
                  </a>
                  <a
                    href="https://github.com/16alves02"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-[#F5F2ED] transition-all hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    {t.contact.github}
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/8 pt-6 text-xs text-[#746E67]">
                  <span className="inline-flex items-center gap-2">
                    <Check size={14} className="text-[#FF9A4B]" />
                    {t.hero.availability}
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#504A44] sm:block" />
                  <span>Portugal</span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#504A44] sm:block" />
                  <span>{t.hero.availability}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/7">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-[#F5F2ED]">16alves02</p>
            <p className="mt-1 text-xs text-[#5E5952]">{t.footer}</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#716B64]">
            <a className="hover:text-[#F5F2ED]" href="#work">{t.nav.work}</a>
            <a className="hover:text-[#F5F2ED]" href="#services">{t.nav.services}</a>
            <a className="hover:text-[#F5F2ED]" href="#process">{t.nav.process}</a>
            <a className="hover:text-[#F5F2ED]" href="#about">{t.nav.about}</a>
            <a className="hover:text-[#F5F2ED]" href="#contact">{t.nav.contact}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
