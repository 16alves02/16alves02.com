import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Code2, Mail, Moon, Sun, Menu, X, BriefcaseBusiness, Camera, PlaySquare, MessageCircle, Palette, Github } from 'lucide-react';

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
    privacyLabel: 'Privacidade', termsLabel: 'Termos',
    workLabel: 'TRABALHO', profileLabel: 'PERFIL', backgroundLabel: 'PERCURSO', contactLabel: 'CONTACTO',
    focusLabel: 'FOCO', locationLabel: 'LOCALIZAÇÃO', educationLabel: 'FORMAÇÃO',
    focusValue: <>Desenvolvimento de Software<br />Web · Backend · Aplicações</>,
    locationValue: <>Oliveira de Azeméis, Portugal<br />Aveiro, Porto e Coimbra · preferência por remoto</>,
    educationValue: <>CTeSP em Desenvolvimento de Software<br />Universidade de Aveiro · 2025–2027</>,
    availability: 'À PROCURA DE ESTÁGIO CURRICULAR · FEVEREIRO 2027',
    skills: 'Competências técnicas', skillsIntro: 'Tecnologias e ferramentas utilizadas nos projetos apresentados.',
    skillsGroups: ['Linguagens', 'Frontend e aplicações', 'Backend e dados', 'Ferramentas'],
    internshipText: 'Procuro um estágio curricular remunerado de 680 horas, com início previsto em fevereiro de 2027 e preferência por trabalho remoto. Quero integrar uma equipa, contribuir para trabalho real e evoluir com acompanhamento e feedback.',
    nextStep: 'PRÓXIMO OBJETIVO',
    educationHeading: 'CTeSP em Desenvolvimento de Software', educationPlace: 'Escola Superior Aveiro Norte · Universidade de Aveiro · 2025–2027',
    professionalCourse: 'Curso Profissional de Gestão e Programação de Sistemas Informáticos', professionalSchool: 'Escola Secundária Dr. Serafim Leite'
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
    privacyLabel: 'Privacy', termsLabel: 'Terms',
    workLabel: 'WORK', profileLabel: 'PROFILE', backgroundLabel: 'BACKGROUND', contactLabel: 'CONTACT',
    focusLabel: 'FOCUS', locationLabel: 'LOCATION', educationLabel: 'EDUCATION',
    focusValue: <>Software Development<br />Web · Backend · Applications</>,
    locationValue: <>Oliveira de Azeméis, Portugal<br />Aveiro, Porto & Coimbra · remote preferred</>,
    educationValue: <>CTeSP Software Development<br />University of Aveiro · 2025–2027</>,
    availability: 'SEEKING A CURRICULAR INTERNSHIP · FEBRUARY 2027',
    skills: 'Technical skills', skillsIntro: 'Technologies and tools used across the projects shown here.',
    skillsGroups: ['Languages', 'Frontend & applications', 'Backend & data', 'Tools'],
    internshipText: 'I am seeking a paid, 680-hour curricular internship starting in February 2027, preferably remote. I would like to join a team, contribute to real work and grow through guidance and feedback.',
    nextStep: 'NEXT OBJECTIVE',
    educationHeading: 'CTeSP in Software Development', educationPlace: 'Escola Superior Aveiro Norte · University of Aveiro · 2025–2027',
    professionalCourse: 'Vocational Course in IT Systems Management and Programming', professionalSchool: 'Escola Secundária Dr. Serafim Leite'
  }
};

const projects = [
  {
    name: 'SaborGest', year: '2026–27', type: 'ACADEMIC · WEB / ANDROID', typePt: 'ACADÉMICO · WEB / ANDROID',
    image: 'https://raw.githubusercontent.com/16alves02/SaborGest/main/web/assets/saborgest-logo.png', imageAlt: 'Logótipo do SaborGest', imageAltEn: 'SaborGest logo', imageFit: 'contain',
    description: 'Sistema académico de gestão de horários, assiduidade e stock para pequenos negócios de restauração, com painel web em PHP, API REST e quiosque Android em Kotlin.',
    descriptionEn: 'An academic system for managing schedules, attendance and stock in small food businesses, with a PHP web panel, REST API and Kotlin Android kiosk.',
    stack: ['PHP', 'Kotlin', 'MySQL', 'REST API'],
    status: 'Em desenvolvimento',
    href: 'https://github.com/16alves02/SaborGest'
  },
  {
    name: 'RunLattice', year: '2026', type: 'PERSONAL · AUTOMATION', typePt: 'PESSOAL · AUTOMAÇÃO',
    image: 'https://raw.githubusercontent.com/16alves02/RunLattice/main/public/brand/runlattice-logo.svg', imageAlt: 'Logótipo do RunLattice', imageAltEn: 'RunLattice logo', imageFit: 'contain',
    description: 'Protótipo de uma plataforma de automação com editor visual, modelos, execução em segundo plano, gatilhos agendados e por webhook, planeamento de workflows por IA em rascunhos sujeitos a revisão e integração Discord.',
    descriptionEn: 'An early-stage automation platform with a visual editor, templates, background execution, scheduled and webhook triggers, AI workflow planning that produces drafts for user review, and a Discord integration.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    status: 'Protótipo',
    href: 'https://github.com/16alves02/RunLattice'
  },
  {
    name: 'MRDR.', year: '2026', type: 'ALV16 STUDIOS · GAME', typePt: 'ALV16 STUDIOS · JOGO',
    image: '/mrdr-cover.svg', imageAlt: 'Imagem de identidade do jogo MRDR.', imageAltEn: 'MRDR game identity artwork', imageFit: 'cover',
    description: 'Jogo original de dedução criminal, centrado na análise de pistas e resolução de casos. Continua em desenvolvimento.',
    descriptionEn: 'An original criminal deduction game focused on analysing clues and solving cases. Still in development.',
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor'],
    status: 'Em desenvolvimento'
  },
  {
    name: 'RAW.', year: '2026', type: 'ALV16 STUDIOS · SOCIAL GAME', typePt: 'ALV16 STUDIOS · JOGO SOCIAL',
    description: 'Aplicação interativa de conversas e jogos sociais, com vários modos, cartões, baralhos e interface multilingue.',
    descriptionEn: 'An interactive conversation and party-game app with multiple modes, cards, decks and a multilingual interface.',
    stack: ['React', 'JavaScript', 'PWA'],
    status: 'Código privado'
  },
  {
    name: 'HOOP', year: '2025–26', type: 'ACADEMIC · E-COMMERCE', typePt: 'ACADÉMICO · COMÉRCIO ELETRÓNICO',
    image: 'https://raw.githubusercontent.com/16alves02/hoop/main/public/img/screenshots/home.PNG', imageAlt: 'Captura do ecrã inicial da loja HOOP', imageAltEn: 'HOOP storefront homepage screenshot', imageFit: 'cover',
    description: 'Frontend académico de uma loja de basquetebol, com pesquisa, filtros, favoritos, carrinho e processo de compra simulado.',
    descriptionEn: 'An academic basketball-store frontend with search, filters, favourites, a cart and a simulated checkout.',
    stack: ['React', 'TypeScript', 'Vite', 'React Router'],
    href: 'https://hoop-16alves02.netlify.app',
    source: 'https://github.com/16alves02/hoop'
  },
  {
    name: 'Basket Hub', year: '2025–26', type: 'ACADEMIC · BASKETBALL PLATFORM', typePt: 'ACADÉMICO · PLATAFORMA DE BASQUETEBOL',
    description: 'Plataforma web académica para gestão de equipas, jogadores, jogos, inscrições, eventos, pavilhões e estatísticas de basquetebol.',
    descriptionEn: 'An academic web platform for managing basketball teams, players, games, registrations, events, venues and statistics.',
    stack: ['Kotlin', 'Ktor', 'Thymeleaf', 'H2'],
    status: 'Projeto académico', statusEn: 'Academic project',
    href: 'https://github.com/13alves05/basket-hub'
  },
  {
    name: 'Tocadiscos Editora', year: '2025–26', type: 'ACADEMIC · GROUP PROJECT', typePt: 'ACADÉMICO · PROJETO DE GRUPO',
    description: 'Aplicação de linha de comandos para gerir autores, álbuns e músicas, com pesquisa, relatórios financeiros, reprodução de áudio e histórico reversível.',
    descriptionEn: 'A command-line application for managing artists, albums and tracks, with search, financial reports, audio playback and reversible change history.',
    stack: ['Python', 'Pandas', 'Whoosh', 'Pygame'],
    status: 'Projeto académico de grupo', statusEn: 'Academic group project',
    href: 'https://github.com/13alves05/tocadiscos-editora'
  },
  {
    name: 'Todo App', year: '2025', type: 'PERSONAL · WEB APPLICATION', typePt: 'PESSOAL · APLICAÇÃO WEB',
    image: 'https://raw.githubusercontent.com/16alves02/todo-app/main/assets/screenshot.png',
    imageAlt: 'Captura real da aplicação Todo App', imageAltEn: 'Todo App interface screenshot', imageFit: 'cover',
    description: 'Gestor de tarefas no browser com filtros, tarefas concluídas, armazenamento local e navegação por teclado.',
    descriptionEn: 'A browser-based task manager with filters, completed tasks, local storage and keyboard navigation.',
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    status: 'Demo disponível', statusEn: 'Live demo',
    href: 'https://todo-app-three-beta-56.vercel.app',
    source: 'https://github.com/16alves02/todo-app'
  },
  {
    name: 'ArraySorting', year: '2025', type: 'ACADEMIC · ALGORITHMS', typePt: 'ACADÉMICO · ALGORITMOS',
    description: 'Programa interativo em C para explorar Selection Sort, Insertion Sort, Bubble Sort e uma demonstração de Bogo Sort.',
    descriptionEn: 'An interactive C program exploring Selection Sort, Insertion Sort, Bubble Sort and a Bogo Sort demonstration.',
    stack: ['C', 'Algorithms', 'Arrays'],
    status: 'Exercício académico', statusEn: 'Academic exercise',
    href: 'https://github.com/16alves02/ArraySorting'
  },
  {
    name: 'Two of Hearts', year: '2026', type: 'ACADEMIC · VECTOR ILLUSTRATION', typePt: 'ACADÉMICO · ILUSTRAÇÃO VETORIAL',
    image: 'https://raw.githubusercontent.com/16alves02/two-of-hearts-portuguese-folk-art/main/assets/front.png',
    imageAlt: 'Ilustração vetorial final da carta Two of Hearts', imageAltEn: 'Final Two of Hearts vector illustration', imageFit: 'contain',
    description: 'Ilustração vetorial inspirada nos Lenços de Namorados do Minho, reinterpretando motivos tradicionais portugueses numa carta de jogar.',
    descriptionEn: 'A vector illustration inspired by the Minho love handkerchiefs, reinterpreting traditional Portuguese motifs as a playing card.',
    stack: ['Affinity', 'Vector Illustration', 'Portuguese Folk Art'],
    status: 'Projeto académico', statusEn: 'Academic project',
    href: 'https://github.com/16alves02/two-of-hearts-portuguese-folk-art'
  },
];

const skillGroups = [
  { key: 'languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Kotlin', 'Python', 'C', 'SQL'] },
  { key: 'frontend', items: ['HTML', 'CSS', 'React', 'Next.js', 'Vite', 'Android'] },
  { key: 'backend', items: ['REST APIs', 'MySQL', 'PostgreSQL', 'Redis', 'Ktor'] },
  { key: 'tools', items: ['Git', 'GitHub', 'Docker', 'Prisma'] }
];

const experience = [
  ['2025 — 2026', 'Operador de máquina CNC', 'CNC Machine Operator', 'Schmidt Light Metal Group'],
  ['2024', 'Operador de loja', 'Store Assistant', 'MC'],
  ['2023', 'Estágio de desenvolvimento back-end', 'Backend Development Intern', 'ClickBeauty / Alvocromático'],
  ['2022', 'Estágio de desenvolvimento Web', 'Web Development Intern', 'Associação Estamos Juntos (AEJ)']
];

export default function App() {
  const [language, setLanguage] = useState('pt-PT');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = content[language];
  const pt = language === 'pt-PT';
  const cv = pt ? '/cv-leonardo-alves-pt.pdf' : '/cv-leonardo-alves-en.pdf';
  const socialLinks = [
    [Github, 'GitHub', 'https://github.com/16alves02'],
    [BriefcaseBusiness, 'LinkedIn', 'https://www.linkedin.com/in/16alves02/'],
    [Code2, 'GitHub académico', 'https://github.com/13alves05'],
    [Camera, 'Instagram', 'https://www.instagram.com/16alves02/'],
    [PlaySquare, 'YouTube', 'https://www.youtube.com/@16alves02'],
    [MessageCircle, 'Twitch', 'https://www.twitch.tv/16alves02'],
    [Palette, 'Uiverse', 'https://uiverse.io/16alves02'],
    [Mail, 'Email', 'mailto:16alves02@gmail.com']
  ];

  useEffect(() => {
    document.documentElement.lang = pt ? 'pt-PT' : 'en';
    document.title = pt ? 'Leonardo Alves | Software Developer em Portugal' : 'Leonardo Alves | Software Developer in Portugal';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = pt
      ? 'Portefólio de Leonardo Alves, Software Developer em Portugal. Explora projetos de software, aplicações web, backend e desenvolvimento Android.'
      : 'Portfolio of Leonardo Alves, Software Developer in Portugal. Explore software projects, web applications, backend and Android development.';
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = pt ? 'Leonardo Alves — Software Developer' : 'Leonardo Alves — Software Developer';
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = pt
      ? 'Projetos de software, desenvolvimento web e aplicações por Leonardo Alves.'
      : 'Software projects, web development and applications by Leonardo Alves.';
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = pt ? 'Leonardo Alves | Software Developer' : 'Leonardo Alves | Software Developer';
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.content = pt
      ? 'Projetos pessoais e académicos em desenvolvimento web, backend e aplicações.'
      : 'Personal and academic projects in web development, backend and applications.';
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = pt ? 'pt_PT' : 'en_GB';
  }, [pt]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = dark ? '#171715' : '#fafaf8';
  }, [dark]);

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
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? (pt ? 'Fechar menu' : 'Close menu') : (pt ? 'Abrir menu' : 'Open menu')} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav id="primary-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label={pt ? 'Navegação principal' : 'Main navigation'}>
          {t.nav.map((label, i) => <a key={label} href={['#projects', '#about', '#experience', '#contact'][i]} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="text-button" onClick={() => setLanguage(pt ? 'en' : 'pt-PT')} aria-label={pt ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'}>{pt ? 'EN' : 'PT'}</button>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? (pt ? 'Ativar tema claro' : 'Enable light theme') : (pt ? 'Ativar tema escuro' : 'Enable dark theme')} aria-pressed={dark}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="cv-link" href={cv} download><Download size={15} />{t.cv}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero hero-with-portrait">
          <div className="hero-copy">
            <div className="eyebrow hero-reveal hero-reveal-1"><span className="status-dot" />{t.role}</div>
            <h1 className="hero-reveal hero-reveal-2">{t.headline}</h1>
            <p className="hero-intro hero-reveal hero-reveal-3">{t.intro}</p>
            <div className="hero-links hero-reveal hero-reveal-4">
              <a className="primary-link" href="#projects">{t.projects} <ArrowDownRight size={17} /></a>
              <a className="secondary-link" href="#contact"><Mail size={16} /> {pt ? 'Falar comigo' : 'Get in touch'}</a>
            </div>
          </div>
          <figure className="hero-portrait hero-reveal hero-reveal-3"><img src="/leonardo-portrait.svg" alt={pt ? 'Retrato a preto e branco de Leonardo Alves' : 'Black and white portrait of Leonardo Alves'} fetchPriority="high" decoding="async" /><figcaption>LEONARDO ALVES <span>·</span> 16ALVES02</figcaption></figure>
          <div className="hero-meta hero-reveal hero-reveal-5"><span>OLIVEIRA DE AZEMÉIS, PORTUGAL</span><span>{t.availability}</span></div>
        </section>

        <section className="section projects-section reveal" id="projects">
          <div className="section-heading"><div><span className="eyebrow-number">01 / {t.workLabel}</span><h2>{t.projects}</h2></div><p>{t.projectsIntro}</p></div>
          <div className="project-list">
            {projects.map((project, i) => (
              <article className="project-row reveal" key={project.name}>
                <span className="project-index">0{i + 1}</span>
                <div className="project-main">
                  {project.image && <img className={`project-preview ${project.imageFit === 'contain' ? 'project-preview-contain' : ''}`} src={project.image} alt={pt ? project.imageAlt : project.imageAltEn} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.hidden = true; }} />}
                  <div className="project-topline"><span>{pt ? project.typePt : project.type}</span><span>{project.year}</span></div>
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

        <section className="section skills-section reveal" id="skills"><div className="section-heading"><div><span className="eyebrow-number">03 / {pt ? 'COMPETÊNCIAS' : 'SKILLS'}</span><h2>{t.skills}</h2></div><p>{t.skillsIntro}</p></div><div className="skills-grid">{skillGroups.map((group, i) => <div className="skill-group" key={group.key}><span>{t.skillsGroups[i]}</span><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

        <section className="section experience-section reveal" id="experience">
          <div className="section-heading"><div><span className="eyebrow-number">04 / {t.backgroundLabel}</span><h2>{t.experience}</h2></div><p>{t.education}<br />{t.educationHeading}<br />{t.educationPlace}</p></div>
          <div className="experience-list">{experience.map(([date, rolePt, roleEn, company]) => <div className="experience-row reveal" key={company}><span>{date}</span><strong>{pt ? rolePt : roleEn}</strong><span>{company}</span></div>)}</div>
          <div className="education-note"><span>2020 — 2023</span><p>{t.professionalCourse}<br />{t.professionalSchool}</p></div>
        </section>

        <section className="internship-note reveal"><div><span className="eyebrow-number">{t.nextStep}</span><p>{t.internshipText}</p></div></section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-copy"><span className="eyebrow-number">05 / {t.contactLabel}</span><h2>{t.contact}</h2><p>{t.contactText}</p><a href="mailto:16alves02@gmail.com">16alves02@gmail.com <ArrowUpRight size={16} /></a></div>
          <form className="contact-form" action="https://formsubmit.co/16alves02@gmail.com" method="POST" onSubmit={() => setIsSubmitting(true)}>
            <input type="hidden" name="_subject" value={pt ? "Novo contacto através do portefólio" : "New message from the portfolio"} />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://16alves02.pages.dev/thanks.html" />
            <input type="text" name="_honey" className="honeypot" tabIndex="-1" aria-hidden="true" autoComplete="off" />
            <label>{t.name}<input name="name" required maxLength="100" autoComplete="name" /></label>
            <label>{t.email}<input type="email" name="email" required maxLength="254" autoComplete="email" /></label>
            <label>{t.subject}<input name="subject" required maxLength="140" /></label>
            <label>{t.message}<textarea name="message" rows="4" required minLength="10" maxLength="4000" /></label>
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? t.sending : t.send} <ArrowUpRight size={17} /></button>
            <small>{t.direct} <a href="mailto:16alves02@gmail.com">16alves02@gmail.com</a></small>
          </form>
        </section>
        <section className="section faq-section reveal" id="faq"><div className="section-heading"><div><span className="eyebrow-number">06 / FAQ</span><h2>{pt ? 'Perguntas frequentes' : 'Frequently asked questions'}</h2></div><p>{pt ? 'Respostas rápidas sobre o meu percurso, projetos e disponibilidade.' : 'Quick answers about my background, projects and availability.'}</p></div><div className="faq-list">{(pt ? [
          ['Estás à procura de estágio?', 'Sim. Procuro um estágio curricular de 680 horas, com início previsto em fevereiro de 2027. Tenho preferência por uma oportunidade remunerada e trabalho remoto.'],
          ['Os projetos apresentados estão concluídos?', 'Não todos. O estado é indicado em cada projeto: alguns são trabalhos académicos concluídos, outros são protótipos ou continuam em desenvolvimento.'],
          ['Que tipo de trabalho procuras?', 'Sou Software Developer generalista e tenho interesse em desenvolvimento web, backend e aplicações. Estou disponível para aprender novas tecnologias conforme as necessidades da equipa.'],
          ['Como posso entrar em contacto?', 'Podes utilizar o formulário desta página ou escrever diretamente para 16alves02@gmail.com.']
        ] : [
          ['Are you looking for an internship?', 'Yes. I am seeking a 680-hour curricular internship starting in February 2027. I prefer a paid opportunity and remote work.'],
          ['Are all showcased projects finished?', 'No. Each project has its own status: some are completed academic assignments, while others are prototypes or remain in development.'],
          ['What kind of work are you interested in?', 'I am a generalist Software Developer interested in web development, backend systems and applications. I am open to learning technologies that fit the team’s needs.'],
          ['How can I contact you?', 'Use the contact form on this page or email me directly at 16alves02@gmail.com.']
        ]).map(([q,a]) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      </main>

      <a className="mobile-contact-cta" href="#contact"><Mail size={16}/>{pt ? 'Entrar em contacto' : 'Contact me'}</a>
      <footer className="footer"><a className="wordmark brand-lockup" href="#top"><img src="/brand-mark.svg" alt="" width="34" height="34" /><span>16alves02<span>.</span></span></a><div className="socials">{socialLinks.map(([Icon, label, href]) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={label} title={label}><Icon size={17} strokeWidth={1.7}/></a>)}</div><nav className="legal-links" aria-label={pt ? 'Informação legal' : 'Legal information'}><a href="/faq.html">FAQ</a><a href="/privacy.html">{t.privacyLabel}</a><a href="/terms.html">{t.termsLabel}</a></nav><span>© {new Date().getFullYear()} Leonardo Alves · {t.footer}</span></footer>
    </div>
  );
}
