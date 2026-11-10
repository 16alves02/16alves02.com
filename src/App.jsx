import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, Moon, Sun, Menu, X } from 'lucide-react';

const content = {
  'pt-PT': {
    nav: ['Projetos', 'Sobre', 'Percurso', 'Contacto'],
    role: 'SOFTWARE DEVELOPER · PORTUGAL',
    headline: <>Desenvolvimento de<br /><em>software com propósito.</em></>,
    intro: 'Sou o Leonardo. Desenvolvo projetos web e aplicações, gosto de resolver problemas e de transformar ideias em software útil.',
    projects: 'Projetos selecionados',
    projectsIntro: 'Alguns dos projetos em que tenho trabalhado, entre desenvolvimento académico e projetos pessoais.',
    about: 'Um pouco sobre mim',
    aboutText: 'Sou estudante de Desenvolvimento de Software na Escola Superior Aveiro Norte, Universidade de Aveiro. Tenho experiência prática em desenvolvimento web e backend, e gosto de trabalhar em diferentes partes de um produto — da interface à lógica e aos dados.',
    experience: 'Experiência',
    education: 'Formação',
    contact: 'Vamos conversar?',
    contactText: 'Tens uma oportunidade, uma ideia ou queres falar sobre algum projeto? Envia-me uma mensagem.',
    name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem',
    send: 'Enviar mensagem', sending: 'A abrir formulário…',
    direct: 'Ou escreve diretamente para',
    cv: 'Descarregar CV',
    allProjects: 'Ver projeto', private: 'Projeto privado', progress: 'Em desenvolvimento',
    footer: 'Desenhado e desenvolvido por Leonardo Alves.'
  },
  en: {
    nav: ['Projects', 'About', 'Experience', 'Contact'],
    role: 'SOFTWARE DEVELOPER · PORTUGAL',
    headline: <>Building<br /><em>software with purpose.</em></>,
    intro: "I'm Leonardo. I build web projects and applications, enjoy solving problems, and turning ideas into useful software.",
    projects: 'Selected projects',
    projectsIntro: 'A selection of academic and personal projects I have been working on.',
    about: 'A little about me',
    aboutText: "I'm a Software Development student at Escola Superior Aveiro Norte, University of Aveiro. I have practical experience in web and backend development, and enjoy working across different parts of a product — from interfaces to logic and data.",
    experience: 'Experience',
    education: 'Education',
    contact: "Let's talk",
    contactText: 'Have an opportunity, an idea, or want to discuss a project? Send me a message.',
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message',
    send: 'Send message', sending: 'Opening form…',
    direct: 'Or email me directly at',
    cv: 'Download CV',
    allProjects: 'View project', private: 'Private project', progress: 'In development',
    footer: 'Designed and developed by Leonardo Alves.'
  }
};

const projects = [
  {
    name: 'SaborGest', year: '2026–27', type: 'ACADEMIC · WEB / ANDROID',
    description: 'Sistema académico de gestão para pequenos negócios de restauração, com painel web em PHP, API REST, base de dados relacional e quiosque Android em Kotlin.',\n    descriptionEn: 'An academic management system for small food businesses, with a PHP web panel, REST API, relational database and Kotlin Android kiosk.',
    stack: ['PHP', 'Kotlin', 'MySQL', 'REST API'],
    status: 'Em desenvolvimento',
    href: 'https://github.com/16alves02/SaborGest'
  },
  {
    name: 'RunLattice', year: '2026', type: 'PERSONAL · AUTOMATION',
    description: 'Protótipo de uma plataforma de automação com editor visual de workflows, execução assíncrona, webhooks assinados e integração Discord.',\n    descriptionEn: 'An early-stage workflow automation platform with a visual editor, background execution, signed webhooks and a Discord integration.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    status: 'Protótipo',
    href: 'https://github.com/16alves02/RunLattice'
  },
  {
    name: 'MRDR.', year: '2026', type: 'ALV16 STUDIOS · GAME',
    description: 'Jogo original de dedução criminal, com casos gerados proceduralmente, pistas interligadas e progressão de campanha. Continua em desenvolvimento.',\n    descriptionEn: 'An original criminal deduction game with procedurally generated cases, connected clues and campaign progression. Still in development.',
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor'],
    status: 'Em desenvolvimento'
  },
  {
    name: 'RAW.', year: '2026', type: 'ALV16 STUDIOS · SOCIAL GAME',
    description: 'Aplicação interativa de conversas e jogos sociais, com vários modos, cartões, baralhos e interface multilingue.',\n    descriptionEn: 'An interactive conversation and party-game app with multiple modes, cards, decks and a multilingual interface.',
    stack: ['React', 'JavaScript', 'PWA'],
    status: 'Código privado'
  },
  {
    name: 'HOOP', year: '2025', type: 'ACADEMIC · E-COMMERCE',
    description: 'Frontend académico de uma loja de basquetebol, com pesquisa, filtros, favoritos, carrinho e processo de compra simulado.',\n    descriptionEn: 'An academic basketball-store frontend with search, filters, favourites, a cart and a simulated checkout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://hoop-16alves02.netlify.app',
    source: 'https://github.com/16alves02/hoop'
  }
];

const experience = [
  ['2025 — 2026', 'Operador de máquina CNC', 'Schmidt Light Metal Group'],
  ['2024', 'Operador de loja', 'MC'],
  ['2023', 'Estágio de desenvolvimento back-end', 'ClickBeauty / Alvocromático'],
  ['2022', 'Estágio de desenvolvimento Web', 'Associação Estamos Juntos (AEJ)']
];

export default function App() {
  const [language, setLanguage] = useState('pt-PT');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];
  const pt = language === 'pt-PT';
  const cv = pt ? '/cv-leonardo-alves-pt.pdf' : '/cv-leonardo-alves-en.pdf';

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className="header">
        <a className="wordmark" href="#top" aria-label="Leonardo Alves — início">16alves02<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
          {t.nav.map((label, i) => <a key={label} href={['#projects', '#about', '#experience', '#contact'][i]} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="text-button" onClick={() => setLanguage(pt ? 'en' : 'pt-PT')} aria-label="Change language">{pt ? 'EN' : 'PT'}</button>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="cv-link" href={cv} download><Download size={15} />{t.cv}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="eyebrow"><span className="status-dot" />{t.role}</div>
          <h1>{t.headline}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-links">
            <a className="primary-link" href="#projects">{t.projects} <ArrowDownRight size={17} /></a>
            <a className="secondary-link" href="mailto:16alves02@gmail.com"><Mail size={16} /> 16alves02@gmail.com</a>
          </div>
          <div className="hero-meta"><span>OLIVEIRA DE AZEMÉIS, PORTUGAL</span><span>AVAILABLE FOR OPPORTUNITIES</span></div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><div><span className="eyebrow-number">01 / WORK</span><h2>{t.projects}</h2></div><p>{t.projectsIntro}</p></div>
          <div className="project-list">
            {projects.map((project, i) => (
              <article className="project-row" key={project.name}>
                <span className="project-index">0{i + 1}</span>
                <div className="project-main">
                  <div className="project-topline"><span>{project.type}</span><span>{project.year}</span></div>
                  <h3>{project.name}</h3>
                  <p>{pt ? project.description : project.descriptionEn}</p>
                  <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-side">
                  <span className="project-status">{pt ? project.status : (project.name === 'RAW.' ? 'Private source' : project.name === 'RunLattice' ? 'Prototype' : project.name === 'HOOP' ? 'Academic project' : 'In development')}</span>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{t.allProjects} <ArrowUpRight size={16} /></a> : <span className="muted">{t.private}</span>}
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading"><div><span className="eyebrow-number">02 / PROFILE</span><h2>{t.about}</h2></div></div>
          <div className="about-grid"><p className="about-lead">{t.aboutText}</p><div className="about-details"><div><span>FOCUS</span><p>Software Development<br />Web · Backend · Applications</p></div><div><span>LOCATION</span><p>Oliveira de Azeméis, Portugal<br />Open to Aveiro, Porto & Coimbra</p></div><div><span>EDUCATION</span><p>CTeSP Software Development<br />Universidade de Aveiro · 2025–2027</p></div></div></div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading"><div><span className="eyebrow-number">03 / BACKGROUND</span><h2>{t.experience}</h2></div><p>{t.education}<br />CTeSP in Software Development<br />Escola Superior Aveiro Norte · Universidade de Aveiro<br />2025–2027</p></div>
          <div className="experience-list">{experience.map(([date, role, company]) => <div className="experience-row" key={company}><span>{date}</span><strong>{role}</strong><span>{company}</span></div>)}</div>
          <div className="education-note"><span>2020 — 2023</span><p>Curso Profissional de Gestão e Programação de Sistemas Informáticos<br />Escola Secundária Dr. Serafim Leite</p></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy"><span className="eyebrow-number">04 / CONTACT</span><h2>{t.contact}</h2><p>{t.contactText}</p><a href="mailto:16alves02@gmail.com">16alves02@gmail.com <ArrowUpRight size={16} /></a></div>
          <form className="contact-form" action="https://formsubmit.co/16alves02@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Novo contacto através do portefólio" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="honeypot" tabIndex="-1" autoComplete="off" />
            <label>{t.name}<input name="name" required maxLength="100" autoComplete="name" /></label>
            <label>{t.email}<input type="email" name="email" required maxLength="254" autoComplete="email" /></label>
            <label>{t.subject}<input name="subject" required maxLength="140" /></label>
            <label>{t.message}<textarea name="message" rows="4" required minLength="10" maxLength="4000" /></label>
            <button type="submit">{t.send} <ArrowUpRight size={17} /></button>
            <small>{t.direct} <a href="mailto:16alves02@gmail.com">16alves02@gmail.com</a></small>
          </form>
        </section>
      </main>

      <footer className="footer"><a className="wordmark" href="#top">16alves02<span>.</span></a><div className="socials"><a href="https://github.com/16alves02" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/16alves02/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:16alves02@gmail.com" aria-label="Email"><Mail /></a></div><span>© {new Date().getFullYear()} Leonardo Alves · {t.footer}</span></footer>
    </div>
  );
}
