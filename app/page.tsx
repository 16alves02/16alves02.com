import { ArrowDownRight, ArrowUpRight, Code2, Database, Globe2, Smartphone } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const services = [
  {
    title: "Websites",
    description:
      "Responsive websites and landing pages for people, professionals and small businesses.",
    icon: Globe2,
  },
  {
    title: "Web Applications",
    description:
      "Interactive frontend experiences built around real workflows, data and useful features.",
    icon: Code2,
  },
  {
    title: "Custom Software",
    description:
      "Small software systems designed around a specific process instead of a generic template.",
    icon: Database,
  },
  {
    title: "Mobile",
    description:
      "Android applications and mobile interfaces with a focus on practical everyday use.",
    icon: Smartphone,
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
                Available for selected freelance projects
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6D675F]">
                Portugal
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#F5F2ED] sm:text-7xl lg:text-[6.6rem]">
              I build software
              <span className="block text-[#FF8B32]">with purpose.</span>
            </h1>

            <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl text-base leading-7 text-[#A8A199] sm:text-lg">
                Web applications, mobile experiences and practical digital
                tools built by Leonardo Alves, also known online as 16alves02.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F5F2ED] px-5 py-3 text-sm font-medium text-[#0A0908] transition-transform hover:-translate-y-0.5"
                >
                  View my work
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 py-3 text-sm font-medium text-[#F5F2ED] transition-colors hover:border-[#FF7A18]/45 hover:bg-[#FF7A18]/7"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid max-w-5xl gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
            {[
              ["01", "Web", "React, TypeScript, responsive interfaces"],
              ["02", "Mobile", "Kotlin, Android and practical apps"],
              ["03", "Backend", "PHP, REST APIs and MySQL"],
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
            eyebrow="Selected work"
            title="Projects that show how I build."
            description="A mix of personal, academic and experimental software projects. No inflated metrics, just things I have actually built."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://github.com/16alves02"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A8A199] transition-colors hover:text-[#F5F2ED]"
            >
              See more on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <SectionIntro
            eyebrow="Freelance"
            title="What I can build with you."
            description="Focused services for small projects, independent professionals and businesses that need something practical rather than over-engineered."
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

      <section id="about" className="scroll-mt-24 border-t border-white/6">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF8E3D]">
              About
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#F5F2ED] sm:text-4xl">
              A developer building a serious career one project at a time.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-[#8F8981] sm:text-base">
              <p>
                I&apos;m Leonardo, a software developer based in Portugal. My
                work sits between useful software, clean interfaces and the
                technical details that make an application actually work.
              </p>
              <p>
                I learn by building. That means working across frontend,
                mobile, backend, APIs and databases, then improving the result
                through iteration.
              </p>
              <p>
                16alves02 is the public identity behind that work: a place for
                projects, experiments and, now, freelance development.
              </p>
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
                Currently building
              </span>
              <span className="rounded-full border border-[#FF7A18]/20 bg-[#FF7A18]/7 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#FF9A4B]">
                In development
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#F5F2ED]">
              SaborGest
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#88827A]">
              A management system for small bakeries and pastry shops,
              developed as an academic software project.
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
                Contact
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#F5F2ED] sm:text-5xl">
                Have something that needs building?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#989189] sm:text-base">
                Tell me what you are trying to build, what you already have
                and what the end result needs to look like. We can start from
                there.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/leonardo-alves-502ba8291/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5F2ED] px-5 py-3 text-sm font-medium text-[#0A0908] transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://github.com/16alves02"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 py-3 text-sm font-medium text-[#F5F2ED] transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  View GitHub
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
              Software · Projects · Freelance
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-[#746E67]">
            <a className="transition-colors hover:text-[#F5F2ED]" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-[#F5F2ED]" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-[#F5F2ED]" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-[#F5F2ED]" href="#contact">
              Contact
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
