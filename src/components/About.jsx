import { Code2, GitBranch, Laptop, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento frontend",
    description: "Criação de interfaces com React, JavaScript, TypeScript, HTML e CSS.",
  },
  {
    icon: GitBranch,
    title: "Git e GitHub",
    description: "Controlo de versões, organização de repositórios e colaboração.",
  },
  {
    icon: Laptop,
    title: "Desenvolvimento ágil",
    description: "Organização de tarefas, desenvolvimento iterativo e aprendizagem contínua.",
  },
  {
    icon: MapPin,
    title: "Trabalho remoto",
    description: "Disponibilidade para realizar o estágio remotamente a partir de Coimbra.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-label">01 / SOBRE MIM</p>
          <h2 className="section-title">
            Curioso por natureza.
            <br />
            <span className="muted-text">Desenvolvedor em evolução.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="muted-text space-y-5 text-base leading-8">
            <p>
              Sou o Leonardo, estudante do CTeSP em Desenvolvimento de Software
              na Escola Superior Aveiro Norte da Universidade de Aveiro (ESAN-UA).
            </p>
            <p>
              Tenho particular interesse no desenvolvimento frontend e na criação
              de websites e aplicações com interfaces intuitivas, responsivas e
              visualmente consistentes.
            </p>
            <p>
              Procuro um estágio curricular de <strong className="strong-text">680 horas</strong>,
              em regime <strong className="strong-text">100% remoto</strong>.
              Quero aplicar os conhecimentos adquiridos, contribuir para projetos
              reais e evoluir num ambiente de equipa.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="surface-card rounded-2xl border p-5 transition">
                <div className="icon-tile mb-5 inline-flex rounded-xl p-3">
                  <Icon size={21} />
                </div>
                <h3 className="strong-text mb-2 font-semibold">{title}</h3>
                <p className="muted-text text-sm leading-6">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-divider mt-12 border-t pt-7">
          <p className="muted-text mb-4 font-mono text-xs uppercase tracking-widest">
            Tecnologias e ferramentas
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Vite", "Git", "GitHub", "REST APIs"].map((skill) => (
              <span key={skill} className="pill rounded-lg border px-3 py-2 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}