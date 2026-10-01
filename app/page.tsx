"use client";

import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Globe2, Layers3 } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

const services = [
  {
    title: "Business websites",
    description:
      "Responsive websites for restaurants, coffee shops, salons, shops, professionals and small businesses.",
    icon: Globe2,
  },
  {
    title: "Landing pages",
    description:
      "Focused pages for services, campaigns, products, portfolios and personal projects.",
    icon: Layers3,
  },
  {
    title: "E-commerce",
    description:
      "Product-focused web experiences with clear browsing, responsive layouts and practical shopping flows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Custom websites",
    description:
      "Websites that need more than a standard template, including data, integrations and custom functionality.",
    icon: Code2,
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#F5F2ED] sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-6 text-[#8F8981]">{description}</p>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { title: t.services.business, description: t.services.businessDescription, icon: Globe2 },
    { title: t.services.landing, description: t.services.landingDescription, icon: Layers3 },
    { title: t.services.ecommerce, description: t.services.ecommerceDescription, icon: BriefcaseBusiness },
    { title: t.services.custom, description: t.services.customDescription, icon: Code2 },
  ];

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      <section className="relative isolate flex min-h-screen items-center pt-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="absolute left-[10%] top-[24%] -z-10 h-64 w-64 rounded-full bg-[#FF7A18]/10 blur-[120px]" />
        <div className="absolute right-[4%] top-[8%] -z-10 h-96 w-96 rounded-full bg-[#FF7A18]/6 blur-[140px]" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7A18]/25 bg-[#FF7A18]/7 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFB173]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A18] shadow-[0_0_10px_rgba(255,122,24,0.7)]" />
                {t.hero.availability}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6D675F]">
                Portugal
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F2ED] sm:text-7xl lg:text-[6.6rem]">
              Software development
              <span className="block text-[#FF8B32]">student.</span>
            </h1>

            <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl text-base leading-7 text-[#A8A199] sm:text-lg">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="primary-button group px-5 py-3 text-sm"
                >
                  {t.hero.work}
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 py-3 text-sm font-medium text-[#F5F2ED] transition-colors hover:border-[#FF7A18]/45 hover:bg-[#FF7A18]/7"
                >
                  {t.hero.project}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid max-w-5xl gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
            {[
              ["01", t.hero.web, t.hero.webDetail],
              ["02", t.hero.mobile, t.hero.mobileDetail],
              ["03", t.hero.backend, t.hero.backendDetail],
            ].map(([number, title, detail]) => (
              <div key={number} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#5F5A54]">
                  {number}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#E8E3DC]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#77716A]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <SectionIntro
            eyebrow={t.work.eyebrow}
            title={t.work.title}
            description={t.work.description}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div key={project.slug} className={index === 0 ? "lg:col-span-2" : ""}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-5 rounded-3xl border border-dashed border-white/10 bg-white/[0.015] p-5 sm:p-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#625D56]">
                {t.work.selected}
              </p>
              <p className="mt-2 text-sm text-[#8D877F]">
                {t.work.selectedDescription}
              </p>
            </div>
            <a
              href="/work"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#F5F2ED] transition-colors hover:text-[#FF9A4B]"
            >
              {t.work.all} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <SectionIntro
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group bg-[#0D0C0B] p-6 transition-colors hover:bg-[#12100E] sm:p-7"
                >
                  <div className="mb-16 flex items-center justify-between">
                    <Icon size={20} strokeWidth={1.7} className="text-[#FF8E3D]" />
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[#504B45]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#F5F2ED]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#817B73]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
                {t.clients.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-5xl">
                {t.clients.title}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {t.clients.types.map((type) => (
                <span key={type} className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-2 text-xs text-[#A8A199]">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-white/6">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
              {t.about.eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#F5F2ED] sm:text-4xl">
              {t.about.title}
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-[#8F8981] sm:text-base">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
              <p>{t.about.body3}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/leonardo-alves-502ba8291/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#B5AFA7] transition-colors hover:border-white/20 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://uiverse.io/16alves02"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#B5AFA7] transition-colors hover:border-white/20 hover:text-white"
              >
                Uiverse
              </a>
              <a
                href="https://www.instagram.com/16alves02/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#B5AFA7] transition-colors hover:border-white/20 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6D675F]">
                {t.about.currently}
              </span>
              <span className="rounded-full border border-[#FF7A18]/20 bg-[#FF7A18]/7 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#FF9A4B]">
                {t.about.development}
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#F5F2ED]">
              SaborGest
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#88827A]">
              {t.about.saborDescription}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Kotlin", "Android", "PHP", "REST API", "MySQL", "Operations"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/7 bg-black/15 px-3.5 py-3 font-mono text-[10px] tracking-wide text-[#9C958D]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#FF7A18]/18 bg-[#11100E] p-7 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#FF7A18]/12 blur-[110px]" />

            <div className="relative max-w-3xl">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
                {t.contact.eyebrow}
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#989189] sm:text-base">
                {t.contact.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/leonardo-alves-502ba8291/"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button px-5 py-3 text-sm"
                >
                  {t.contact.conversation} <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://github.com/16alves02"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 py-3 text-sm font-medium text-[#F5F2ED] transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  {t.contact.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-[#F5F2ED]">
              16alves02
            </p>
            <p className="mt-1 text-xs text-[#615C55]">
              {t.footer}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-[#746E67]">
            <a className="transition-colors hover:text-[#F5F2ED]" href="#work">
              {t.nav.work}
            </a>
            <a className="transition-colors hover:text-[#F5F2ED]" href="#services">
              {t.nav.services}
            </a>
            <a className="transition-colors hover:text-[#F5F2ED]" href="#about">
              {t.nav.about}
            </a>
            <a className="transition-colors hover:text-[#F5F2ED]" href="#contact">
              {t.nav.contact}
            </a>
            <a
              className="transition-colors hover:text-[#F5F2ED]"
              href="https://github.com/16alves02"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
