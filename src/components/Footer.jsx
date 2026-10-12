import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-divider border-t px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <a href="#home" className="font-mono text-sm font-medium">
          16alves02<span className="accent">.</span>
        </a>

        <p className="muted-text text-xs">
          © {new Date().getFullYear()} Leonardo Alves. Desenvolvido com React.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/16alves02" target="_blank" rel="noreferrer" aria-label="GitHub" className="muted-text">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/16alves02" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="muted-text">
            <Linkedin size={18} />
          </a>
          <a href="#home" aria-label="Voltar ao início" className="muted-text">
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}