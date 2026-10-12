import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "16alves02@gmail.com";

export default function Contact() {
  const emailConfigured = EMAIL.includes("@") && !EMAIL.includes("SUBSTITUIR");

  return (
    <section id="contact" className="section-padding section-divider">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">03 / CONTACTO</p>

        <div className="contact-card relative mt-8 overflow-hidden rounded-3xl border p-7 sm:p-12 lg:p-16">
          <div className="contact-glow pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="section-label font-mono">ABERTO A NOVAS OPORTUNIDADES</p>
            <h2 className="section-title mt-5">
              Vamos construir
              <br />
              <span className="muted-text">algo juntos?</span>
            </h2>
            <p className="muted-text mt-6 max-w-xl leading-7">
              Procuro uma empresa onde possa realizar o meu estágio curricular
              de 680 horas, totalmente remoto. Se procuras alguém motivado para
              aprender e contribuir, entra em contacto.
            </p>

            {emailConfigured ? (
              <a href={`mailto:${EMAIL}`} className="primary-button mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold">
                <Mail size={18} /> Enviar email <ArrowUpRight size={17} />
              </a>
            ) : (
              <p className="muted-text mt-8 text-sm">
                Falta configurar o endereço de email neste componente.
              </p>
            )}

            <div className="section-divider mt-10 flex flex-wrap gap-5 border-t pt-6">
              <a href="https://github.com/16alves02" target="_blank" rel="noreferrer" className="muted-text inline-flex items-center gap-2 text-sm">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/16alves02" target="_blank" rel="noreferrer" className="muted-text inline-flex items-center gap-2 text-sm">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}