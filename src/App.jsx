import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Code2, BriefcaseBusiness, Mail, Moon, Sun, Menu, X } from 'lucide-react';

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
    footer: 'Desenhado e desenvolvido por Leonardo Alves.',
    workLabel: 'TRABALHO', profileLabel: 'PERFIL', backgroundLabel: 'PERCURSO', contactLabel: 'CONTACTO',
    focusLabel: 'FOCO', locationLabel: 'LOCALIZAÇÃO', educationLabel: 'FORMAÇÃO',
    focusValue: <>Desenvolvimento de Software<br />Web · Backend · Aplicações</>,
    locationValue: <>Oliveira de Azeméis, Portugal<br />Disponível para Aveiro, Porto e Coimbra</>,
    educationValue: <>CTeSP em Desenvolvimento de Software<br />Universidade de Aveiro · 2025–2027</>,
    availability: 'DISPONÍVEL PARA OPORTUNIDADES'
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
    footer: 'Designed and developed by Leonardo Alves.',
    workLabel: 'WORK', profileLabel: 'PROFILE', backgroundLabel: 'BACKGROUND', contactLabel: 'CONTACT',
    focusLabel: 'FOCUS', locationLabel: 'LOCATION', educationLabel: 'EDUCATION',
    focusValue: <>Software Development<br />Web · Backend · Applications</>,
    locationValue: <>Oliveira de Azeméis, Portugal<br />Open to Aveiro, Porto & Coimbra</>,
    educationValue: <>CTeSP Software Development<br />University of Aveiro · 2025–2027</>,
    availability: 'AVAILABLE FOR OPPORTUNITIES'
  }
};

const projects = [
  {
    name: 'SaborGest', year: '2026–27', type: 'ACADEMIC · WEB / ANDROID',
    image: 'https://raw.githubusercontent.com/16alves02/SaborGest/main/web/assets/saborgest-logo.png', imageAlt: 'Logótipo do SaborGest', imageFit: 'contain',
    description: 'Sistema académico de gestão para pequenos negócios de restauração, com painel web em PHP, API REST, base de dados relacional e quiosque Android em Kotlin.',
    descriptionEn: 'An academic management system for small food businesses, with a PHP web panel, REST API, relational database and Kotlin Android kiosk.',
    stack: ['PHP', 'Kotlin', 'MySQL', 'REST API'],
    status: 'Em desenvolvimento',
    href: 'https://github.com/16alves02/SaborGest'
  },
  {
    name: 'RunLattice', year: '2026', type: 'PERSONAL · AUTOMATION',
    image: 'https://raw.githubusercontent.com/16alves02/RunLattice/main/public/brand/runlattice-logo.svg', imageAlt: 'Logótipo do RunLattice', imageFit: 'contain',
    description: 'Protótipo de uma plataforma de automação com editor visual de workflows, execução assíncrona, webhooks assinados e integração Discord.',
    descriptionEn: 'An early-stage workflow automation platform with a visual editor, background execution, signed webhooks and a Discord integration.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    status: 'Protótipo',
    href: 'https://github.com/16alves02/RunLattice'
  },
  {
    name: 'MRDR.', year: '2026', type: 'ALV16 STUDIOS · GAME',
    image: '/mrdr-cover.svg', imageAlt: 'Imagem de identidade do jogo MRDR.', imageFit: 'cover',
    description: 'Jogo original de dedução criminal, centrado na análise de pistas e resolução de casos. Continua em desenvolvimento.',
    descriptionEn: 'An original criminal deduction game focused on analysing clues and solving cases. Still in development.',
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor'],
    status: 'Em desenvolvimento'
  },
  {
    name: 'RAW.', year: '2026', type: 'ALV16 STUDIOS · SOCIAL GAME',
    description: 'Aplicação interativa de conversas e jogos sociais, com vários modos, cartões, baralhos e interface multilingue.',
    descriptionEn: 'An interactive conversation and party-game app with multiple modes, cards, decks and a multilingual interface.',
    stack: ['React', 'JavaScript', 'PWA'],
    status: 'Código privado'
  },
  {
    name: 'HOOP', year: '2025', type: 'ACADEMIC · E-COMMERCE',
    image: 'https://raw.githubusercontent.com/16alves02/hoop/main/public/img/screenshots/home.PNG', imageAlt: 'Captura do ecrã inicial da loja HOOP', imageFit: 'cover',
    description: 'Frontend académico de uma loja de basquetebol, com pesquisa, filtros, favoritos, carrinho e processo de compra simulado.',
    descriptionEn: 'An academic basketball-store frontend with search, filters, favourites, a cart and a simulated checkout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://hoop-16alves02.netlify.app',
    source: 'https://github.com/16alves02/hoop'
  },
  {
    name: 'Basket Hub', year: '2025–26', type: 'ACADEMIC · BASKETBALL PLATFORM',
    description: 'Plataforma web académica para gestão de equipas, jogadores, jogos, inscrições, eventos, pavilhões e estatísticas de basquetebol.',
    descriptionEn: 'An academic web platform for managing basketball teams, players, games, registrations, events, venues and statistics.',
    stack: ['Kotlin', 'Ktor', 'Thymeleaf', 'H2'],
    status: 'Projeto académico', statusEn: 'Academic project',
    href: 'https://github.com/13alves05/basket-hub'
  },
  {
    name: 'Tocadiscos Editora', year: '2025–26', type: 'ACADEMIC · GROUP PROJECT',
    description: 'Aplicação de linha de comandos para gerir autores, álbuns e músicas, com pesquisa, relatórios financeiros, reprodução de áudio e histórico reversível.',
    descriptionEn: 'A command-line application for managing artists, albums and tracks, with search, financial reports, audio playback and reversible change history.',
    stack: ['Python', 'Pandas', 'Whoosh', 'Pygame'],
    status: 'Projeto académico de grupo', statusEn: 'Academic group project',
    href: 'https://github.com/13alves05/tocadiscos-editora'
  },
  {
    name: 'Todo App', year: '2025', type: 'PERSONAL · WEB APPLICATION',
    image: 'https://raw.githubusercontent.com/16alves02/todo-app/main/assets/screenshot.png',
    imageAlt: 'Captura real da aplicação Todo App', imageFit: 'cover',
    description: 'Gestor de tarefas no browser com filtros, tarefas concluídas, armazenamento local e navegação por teclado.',
    descriptionEn: 'A browser-based task manager with filters, completed tasks, local storage and keyboard navigation.',
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    status: 'Demo disponível', statusEn: 'Live demo',
    href: 'https://todo-app-three-beta-56.vercel.app',
    source: 'https://github.com/16alves02/todo-app'
  },
  {
    name: 'ArraySorting', year: '2025', type: 'ACADEMIC · ALGORITHMS',
    description: 'Programa interativo em C para explorar Selection Sort, Insertion Sort, Bubble Sort e uma demonstração de Bogo Sort.',
    descriptionEn: 'An interactive C program exploring Selection Sort, Insertion Sort, Bubble Sort and a Bogo Sort demonstration.',
    stack: ['C', 'Algorithms', 'Arrays'],
    status: 'Exercício académico', statusEn: 'Academic exercise',
    href: 'https://github.com/16alves02/ArraySorting'
  },
  {
    name: 'Two of Hearts', year: '2026', type: 'ACADEMIC · VECTOR ILLUSTRATION',
    image: 'https://raw.githubusercontent.com/16alves02/two-of-hearts-portuguese-folk-art/main/assets/front.png',
    imageAlt: 'Ilustração vetorial final da carta Two of Hearts', imageFit: 'contain',
    description: 'Ilustração vetorial inspirada nos Lenços de Namorados do Minho, reinterpretando motivos tradicionais portugueses numa carta de jogar.',
    descriptionEn: 'A vector illustration inspired by the Minho love handkerchiefs, reinterpreting traditional Portuguese motifs as a playing card.',
    stack: ['Affinity', 'Vector Illustration', 'Portuguese Folk Art'],
    status: 'Projeto académico', statusEn: 'Academic project',
    href: 'https://github.com/16alves02/two-of-hearts-portuguese-folk-art'
  },
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

  useEffect(() => {
    document.documentElement.lang = pt ? 'pt-PT' : 'en';
  }, [pt]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
    document.documentElement.classList.add('motion-ready');
    elements.forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); };
  }, []);

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className="header">
        <a className="wordmark brand-lockup" href="#top"><img src="/brand-mark.svg" alt="" width="34" height="34" /><span>16alves02<span>.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
          {t.nav.map((label, i) => <a key={label} href={['#projects', '#about', '#experience', '#contact'][i]} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="text-button" onClick={() => setLanguage(pt ? 'en' : 'pt-PT')}>{pt ? 'EN' : 'PT'}</button>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="cv-link" href={cv} download><Download size={15} />{t.cv}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="eyebrow hero-reveal hero-reveal-1"><span className="status-dot" />{t.role}</div>
          <h1 className="hero-reveal hero-reveal-2">{t.headline}</h1>
          <p className="hero-intro hero-reveal hero-reveal-3">{t.intro}</p>
          <div className="hero-links hero-reveal hero-reveal-4">
            <a className="primary-link" href="#projects">{t.projects} <ArrowDownRight size={17} /></a>
            <a className="secondary-link" href="mailto:16alves02@gmail.com"><Mail size={16} /> 16alves02@gmail.com</a>
          </div>
          <div className="hero-meta hero-reveal hero-reveal-5"><span>OLIVEIRA DE AZEMÉIS, PORTUGAL</span><span>{t.availability}</span></div>
        </section>

        <section className="section projects-section reveal" id="projects">
          <div className="section-heading"><div><span className="eyebrow-number">01 / {t.workLabel}</span><h2>{t.projects}</h2></div><p>{t.projectsIntro}</p></div>
          <div className="project-list">
            {projects.map((project, i) => (
              <article className="project-row reveal" key={project.name}>
                <span className="project-index">0{i + 1}</span>
                <div className="project-main">
                  {project.image && <img className={`project-preview ${project.imageFit === 'contain' ? 'project-preview-contain' : ''}`} src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />}
                  <div className="project-topline"><span>{project.type}</span><span>{project.year}</span></div>
                  <h3>{project.name}</h3>
                  <p>{pt ? project.description : project.descriptionEn}</p>
                  <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-side">
                  <span className="project-status">{pt ? project.status : (project.statusEn || (project.name === 'RAW.' ? 'Private source' : project.name === 'RunLattice' ? 'Prototype' : project.name === 'HOOP' ? 'Academic project' : 'In development'))}</span>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{t.allProjects} <ArrowUpRight size={16} /></a> : <span className="muted">{t.private}</span>}
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer">GitHub <Code2 size={15} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section reveal" id="about">
          <div className="section-heading"><div><span className="eyebrow-number">02 / {t.profileLabel}</span><h2>{t.about}</h2></div></div>
          <div className="about-grid"><p className="about-lead">{t.aboutText}</p><div className="about-details"><div><span>{t.focusLabel}</span><p>{t.focusValue}</p></div><div><span>{t.locationLabel}</span><p>{t.locationValue}</p></div><div><span>{t.educationLabel}</span><p>{t.educationValue}</p></div></div></div>
        </section>

        <section className="section experience-section reveal" id="experience">
          <div className="section-heading"><div><span className="eyebrow-number">03 / {t.backgroundLabel}</span><h2>{t.experience}</h2></div><p>{t.education}<br />{pt ? <>CTeSP em Desenvolvimento de Software<br />Escola Superior Aveiro Norte · Universidade de Aveiro</> : <>CTeSP in Software Development<br />Escola Superior Aveiro Norte · University of Aveiro</>}<br />2025–2027</p></div>
          <div className="experience-list">{experience.map(([date, role, company]) => <div className="experience-row reveal" key={company}><span>{date}</span><strong>{role}</strong><span>{company}</span></div>)}</div>
          <div className="education-note"><span>2020 — 2023</span><p>Curso Profissional de Gestão e Programação de Sistemas Informáticos<br />Escola Secundária Dr. Serafim Leite</p></div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-copy"><span className="eyebrow-number">04 / {t.contactLabel}</span><h2>{t.contact}</h2><p>{t.contactText}</p><a href="mailto:16alves02@gmail.com">16alves02@gmail.com <ArrowUpRight size={16} /></a></div>
          <form className="contact-form" action="https://formsubmit.co/16alves02@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Novo contacto através do portefólio" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="honeypot" tabIndex="-1" aria-hidden="true" autoComplete="off" />
            <label>{t.name}<input name="name" required maxLength="100" autoComplete="name" /></label>
            <label>{t.email}<input type="email" name="email" required maxLength="254" autoComplete="email" /></label>
            <label>{t.subject}<input name="subject" required maxLength="140" /></label>
            <label>{t.message}<textarea name="message" rows="4" required minLength="10" maxLength="4000" /></label>
            <button type="submit">{t.send} <ArrowUpRight size={17} /></button>
            <small>{t.direct} <a href="mailto:16alves02@gmail.com">16alves02@gmail.com</a></small>
          </form>
        </section>
      </main>

      <footer className="footer"><a className="wordmark brand-lockup" href="#top"><img src="/brand-mark.svg" alt="" width="34" height="34" /><span>16alves02<span>.</span></span></a><div className="socials"><a href="https://github.com/16alves02" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://www.linkedin.com/in/16alves02/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a><a href="https://github.com/13alves05" target="_blank" rel="noreferrer" aria-label="GitHub académico"><Code2 /></a><a href="https://www.instagram.com/16alves02/" target="_blank" rel="noreferrer" aria-label="Instagram"><ArrowUpRight /></a><a href="https://www.youtube.com/@16alves02" target="_blank" rel="noreferrer" aria-label="YouTube"><ArrowUpRight /></a><a href="https://www.twitch.tv/16alves02" target="_blank" rel="noreferrer" aria-label="Twitch"><ArrowUpRight /></a><a href="https://uiverse.io/16alves02" target="_blank" rel="noreferrer" aria-label="Uiverse"><Code2 /></a><a href="mailto:16alves02@gmail.com" aria-label="Email"><Mail /></a></div><span>© {new Date().getFullYear()} Leonardo Alves · {t.footer}</span></footer>
    </div>
  );
}
