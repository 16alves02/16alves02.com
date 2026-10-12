import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <div className="availability-badge mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Disponível para estágio curricular
          </div>

          <p className="muted-text mb-4 font-mono text-sm tracking-wide">
            OLÁ, SOU O LEONARDO ALVES
          </p>

          <h1 className="hero-title text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            React Frontend
            <br />
            <span className="accent">Developer.</span>
          </h1>

          <p className="muted-text mt-7 max-w-2xl text-lg leading-8 sm:text-xl">
            Desenvolvo interfaces web com foco na experiência do utilizador,
            no código organizado e em soluções funcionais.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="pill rounded-full border px-4 py-2 text-sm">
              Estágio curricular de 680h
            </span>
            <span className="pill rounded-full border px-4 py-2 text-sm">
              100% remoto
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="primary-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold">
              Ver projetos <ArrowUpRight size={18} />
            </a>
            <a
              href="https://github.com/16alves02"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-button rounded-full border p-3.5"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/16alves02"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-button rounded-full border p-3.5"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <a href="#about" className="muted-text mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
          Explorar <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}