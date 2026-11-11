import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Code2, Mail, Moon, Sun, Menu, X, BriefcaseBusiness, Camera } from 'lucide-react';

const content = {
  'pt-PT': {
    nav: ['Projetos', 'Sobre', 'Percurso', 'Contacto'],
    role: 'SOFTWARE DEVELOPER · PORTUGAL',
    headline: <>Desenvolvimento de<br /><em>software com propósito.</em></>,
    intro: 'Sou o Leonardo, Software Developer generalista. Trabalho em aplicações web, backend, APIs, dados e aplicações móveis.',
    projects: 'Projetos selecionados',
    projectsIntro: 'Uma seleção de trabalho pessoal e académico. O âmbito e o estado de cada projeto estão identificados.',
    about: 'Um pouco sobre mim',
    aboutText: 'Estudo Desenvolvimento de Software na ESAN, Universidade de Aveiro. Tenho experiência em desenvolvimento web e backend e desenvolvo projetos pessoais e académicos em várias áreas.',
    experience: 'Experiência',
    education: 'Formação',
    contact: 'Vamos conversar?',
    contactText: 'Tens uma oportunidade, uma ideia ou queres falar sobre algum projeto? Envia-me uma mensagem.',
    name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem',
    send: 'Enviar mensagem', sending: 'A enviar mensagem…',
    direct: 'Ou escreve diretamente para',
    cv: 'Descarregar CV',
    allProjects: 'Ver projeto', private: 'Projeto privado', progress: 'Em desenvolvimento',
    footer: 'Desenhado e desenvolvido por Leonardo Alves.',
    privacyLabel: 'Privacidade', termsLabel: 'Termos',
    workLabel: 'TRABALHO', profileLabel: 'PERFIL', backgroundLabel: 'PERCURSO', contactLabel: 'CONTACTO',
    focusLabel: 'FOCO', locationLabel: 'LOCALIZAÇÃO', educationLabel: 'FORMAÇÃO',
    focusValue: <>Desenvolvimento de Software<br />Web · Backend · Aplicações</>,
    locationValue: <>Oliveira de Azeméis, Portugal<br />Aveiro, Porto e Coimbra · preferência por remoto</>,
    educationValue: <>CTeSP em Desenvolvimento de Software<br />Universidade de Aveiro · 2025-2027</>,
    availability: 'DISPONÍVEL PARA ESTÁGIO CURRICULAR · FEVEREIRO 2027',
    skills: 'Competências técnicas', skillsIntro: 'Tecnologias e ferramentas utilizadas nos projetos apresentados.',
    skillsGroups: ['Linguagens', 'Frontend e aplicações', 'Backend e dados', 'Ferramentas'],
    internshipText: 'Procuro um estágio curricular remunerado de 680 horas, a partir de fevereiro de 2027. Estou baseado em Oliveira de Azeméis, com preferência por remoto e disponibilidade para Aveiro, Porto e Coimbra.',
    nextStep: 'PRÓXIMO OBJETIVO',
    educationHeading: 'CTeSP em Desenvolvimento de Software', educationPlace: 'Escola Superior Aveiro Norte · Universidade de Aveiro · 2025-2027',
    professionalCourse: 'Curso Profissional de Gestão e Programação de Sistemas Informáticos', professionalSchool: 'Escola Secundária Dr. Serafim Leite'
  },
  en: {
    nav: ['Projects', 'About', 'Experience', 'Contact'],
    role: 'SOFTWARE DEVELOPER · PORTUGAL',
    headline: <>Building<br /><em>software with purpose.</em></>,
    intro: "I'm Leonardo, a generalist Software Developer working across web applications, backend services, APIs, data and mobile apps.",
    projects: 'Selected projects',
    projectsIntro: 'A focused selection of personal and academic work, with each project scope and status clearly stated.',
    about: 'A little about me',
    aboutText: "I'm studying Software Development at ESAN, University of Aveiro, with practical experience in web and backend development and projects across different areas.",
    experience: 'Experience',
    education: 'Education',
    contact: "Let's talk",
    contactText: 'Have an opportunity, an idea, or want to discuss a project? Send me a message.',
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message',
    send: 'Send message', sending: 'Sending message…',
    direct: 'Or email me directly at',
    cv: 'Download CV',
    allProjects: 'View project', private: 'Private project', progress: 'In development',
    footer: 'Designed and developed by Leonardo Alves.',
    privacyLabel: 'Privacy', termsLabel: 'Terms',
    workLabel: 'WORK', profileLabel: 'PROFILE', backgroundLabel: 'BACKGROUND', contactLabel: 'CONTACT',
    focusLabel: 'FOCUS', locationLabel: 'LOCATION', educationLabel: 'EDUCATION',
    focusValue: <>Software Development<br />Web · Backend · Applications</>,
    locationValue: <>Oliveira de Azeméis, Portugal<br />Aveiro, Porto & Coimbra · remote preferred</>,
    educationValue: <>CTeSP Software Development<br />University of Aveiro · 2025-2027</>,
    availability: 'AVAILABLE FOR CURRICULAR INTERNSHIP · FEBRUARY 2027',
    skills: 'Technical skills', skillsIntro: 'Technologies and tools used across the projects shown here.',
    skillsGroups: ['Languages', 'Frontend & applications', 'Backend & data', 'Tools'],
    internshipText: 'Seeking a paid, 680-hour curricular internship from February 2027. Based in Oliveira de Azeméis, with a preference for remote work and availability across Aveiro, Porto and Coimbra.',
    nextStep: 'NEXT OBJECTIVE',
    educationHeading: 'CTeSP in Software Development', educationPlace: 'Escola Superior Aveiro Norte · University of Aveiro · 2025-2027',
    professionalCourse: 'Vocational Course in IT Systems Management and Programming', professionalSchool: 'Escola Secundária Dr. Serafim Leite'
  }
};

const projects = [
  {
    name: 'SaborGest', year: '2026-27', group: 'featured', featured: true, type: 'ACADEMIC · WEB / ANDROID', typePt: 'ACADÉMICO · WEB / ANDROID',
    description: 'Sistema de gestão para pequenos negócios de restauração, com painel Web, API REST em PHP e quiosque Android em Kotlin. Inclui colaboradores, horários, picagens, relatórios e operações de stock.',
    descriptionEn: 'A management system for small food businesses, with a PHP web panel, REST API and Kotlin Android kiosk. Covers staff, schedules, clock-ins, reports and stock operations.',
    stack: ['PHP', 'Kotlin', 'MySQL', 'REST API'],
    status: 'Em desenvolvimento · código privado',
    caseStudy: 'saborgest',
    statusEn: 'In development · private source'
  },
  {
    name: 'RunLattice', year: '2026', group: 'featured', featured: true, type: 'PERSONAL · AUTOMATION', typePt: 'PESSOAL · AUTOMAÇÃO',
    image: '/runlattice-logo.svg', imageAlt: 'Logótipo do RunLattice', imageAltEn: 'RunLattice logo', imageFit: 'contain',
    description: 'Protótipo de automação com workspaces, editor visual, modelos, execução assíncrona, webhooks assinados, agendamentos e propostas de workflows por IA sujeitas a revisão. A ação externa funcional envia mensagens para webhooks Discord; o worker suporta um trigger e, no máximo, uma condição. Ainda não está preparado para produção.',
    descriptionEn: 'An automation prototype with authenticated workspaces, a visual editor, templates and Redis/BullMQ background execution. It includes signed webhooks, scheduling and one live external action for Discord. AI planning produces review-only drafts. It is not production-ready.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    status: 'Protótipo em desenvolvimento',
    caseStudy: 'runlattice',
    href: 'https://github.com/16alves02/RunLattice'
  },
  {
    name: 'MRDR.', year: '2026', group: 'featured', featured: true, type: 'ALV16 STUDIOS · GAME', typePt: 'ALV16 STUDIOS · JOGO',
    image: '/mrdr-cover.svg', imageAlt: 'Imagem de identidade do jogo MRDR.', imageAltEn: 'MRDR game identity artwork', imageFit: 'cover',
    description: 'Jogo original de dedução criminal com casos procedurais, suspeitos, álibis, cronologias e pistas interligadas. O motor valida soluções únicas; a estrutura narrativa prevista contempla 20 mundos e 200 casos, ainda em desenvolvimento.',
    descriptionEn: 'An original crime-deduction game with procedural cases, suspects, alibis, timelines and connected clues. Its engine validates unique solutions; the planned narrative structure spans 20 worlds and 200 cases and remains in development.',
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor'],
    status: 'Em desenvolvimento',
    caseStudy: 'mrdr'
  },

  {
    name: 'HOOP', year: '2025-26', group: 'featured', featured: true, type: 'ACADEMIC · E-COMMERCE', typePt: 'ACADÉMICO · COMÉRCIO ELETRÓNICO',
    image: 'https://raw.githubusercontent.com/16alves02/hoop/main/public/img/screenshots/produto.PNG', imageAlt: 'Captura da página de produto da loja HOOP', imageAltEn: 'HOOP product page screenshot', imageFit: 'cover',
    description: 'Frontend académico de uma loja de basquetebol, com pesquisa, filtros, favoritos, carrinho e processo de compra simulado.',
    descriptionEn: 'An academic basketball-store frontend with search, filters, favourites, a cart and a simulated checkout.',
    stack: ['React', 'TypeScript', 'Vite', 'React Router'],
    href: 'https://hoop-16alves02.netlify.app',
    source: 'https://github.com/16alves02/hoop',
    caseStudy: 'hoop'
  },
  {
    name: 'RAW.', year: '2026', group: 'featured', featured: true, type: 'ALV16 STUDIOS · SOCIAL GAME', typePt: 'ALV16 STUDIOS · JOGO SOCIAL',
    description: 'Aplicação social de cartas com três modos de jogo, 27 baralhos e conteúdo em seis idiomas. Inclui sessões locais, favoritos e experiência PWA preparada para utilização offline.',
    descriptionEn: 'A card-based social app with three play modes, 27 decks and content in six languages. Includes local sessions, favourites and an offline-ready PWA experience.',
    stack: ['React', 'JavaScript', 'PWA'],
    status: 'Em desenvolvimento · demo pública', statusEn: 'In development · public demo',
    href: 'https://alv16studios.itch.io/raw-conversation-game',
    source: 'https://raw-app-bice.vercel.app', sourceLabel: 'Demo web',
    caseStudy: 'raw'
  },
  {
    name: 'Basket Hub', year: '2025-26', group: 'other', type: 'ACADEMIC · BASKETBALL PLATFORM', typePt: 'ACADÉMICO · PLATAFORMA DE BASQUETEBOL',
    description: 'Plataforma web académica para gestão de equipas, jogadores, jogos, inscrições, eventos, pavilhões e estatísticas de basquetebol.',
    descriptionEn: 'An academic web platform for managing basketball teams, players, games, registrations, events, venues and statistics.',
    stack: ['Kotlin', 'Ktor', 'Thymeleaf', 'H2'],
    status: 'Projeto académico', statusEn: 'Academic project',
    href: 'https://github.com/bmgoliveira-UA/basket-hub'
  },
  {
    name: 'Tocadiscos Editora', year: '2025-26', group: 'other', type: 'ACADEMIC · GROUP PROJECT', typePt: 'ACADÉMICO · PROJETO DE GRUPO',
    description: 'Aplicação de linha de comandos para gerir autores, álbuns e músicas, com pesquisa, relatórios financeiros, reprodução de áudio e histórico reversível.',
    descriptionEn: 'A command-line application for managing artists, albums and tracks, with search, financial reports, audio playback and reversible change history.',
    stack: ['Python', 'Pandas', 'Whoosh', 'Pygame'],
    status: 'Projeto académico de grupo', statusEn: 'Academic group project',
    href: 'https://github.com/13alves05/tocadiscos-editora'
  },

];

const skillGroups = [
  { key: 'languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Kotlin', 'Python', 'C', 'SQL'] },
  { key: 'frontend', items: ['HTML', 'CSS', 'React', 'Next.js', 'Vite', 'Android'] },
  { key: 'backend', items: ['REST APIs', 'MySQL', 'PostgreSQL', 'Redis', 'Ktor'] },
  { key: 'tools', items: ['Git', 'GitHub', 'Docker', 'Prisma'] }
];

const experience = [
  ['fev. 2025 - mai. 2026', 'Feb 2025 - May 2026', 'Operador de máquina CNC', 'CNC Machine Operator', 'Schmidt Light Metal Group'],
  ['mai. - ago. 2024', 'May - Aug 2024', 'Operador de loja', 'Store Assistant', 'MC'],
  ['abr. - jul. 2023', 'Apr - Jul 2023', 'Estágio de desenvolvimento back-end', 'Backend Development Intern', 'ClickBeauty / Alvocromático'],
  ['jul. 2022', 'Jul 2022', 'Estágio de desenvolvimento Web', 'Web Development Intern', 'Associação Estamos Juntos (AEJ)']
];

export default function App() {
  const [language, setLanguage] = useState('pt-PT');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const t = content[language];
  const pt = language === 'pt-PT';
  const cv = pt ? '/cv-leonardo-alves-pt.pdf' : '/cv-leonardo-alves-en.pdf';
  const socialLinks = [
    [BriefcaseBusiness, 'LinkedIn', 'https://www.linkedin.com/in/16alves02/'],
    [Code2, 'GitHub pessoal', 'https://github.com/16alves02'],
    [Code2, 'GitHub académico', 'https://github.com/13alves05'],
    [Camera, 'Instagram', 'https://www.instagram.com/16alves02/']
  ];

  useEffect(() => {
    document.documentElement.lang = pt ? 'pt-PT' : 'en';
    document.title = pt ? 'Leonardo Alves | Software Developer em Portugal' : 'Leonardo Alves | Software Developer in Portugal';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = pt
      ? 'Portefólio de Leonardo Alves, Software Developer em Portugal. Explora projetos de software, aplicações web, backend e desenvolvimento Android.'
      : 'Portfolio of Leonardo Alves, Software Developer in Portugal. Explore software projects, web applications, backend and Android development.';
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = pt ? 'Leonardo Alves, Software Developer' : 'Leonardo Alves, Software Developer';
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
    if (themeColor) themeColor.content = dark ? '#02020E' : '#FDFDF1';
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
        <a className="wordmark brand-lockup" href="#top"><img className="brand-logo" src="/logo.png" alt="" width="34" height="34" /><span>16alves02<span>.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? (pt ? 'Fechar menu' : 'Close menu') : (pt ? 'Abrir menu' : 'Open menu')} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav id="primary-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label={pt ? 'Navegação principal' : 'Main navigation'}>
          {t.nav.map((label, i) => <a key={label} href={['#projects', '#about', '#experience', '#contact'][i]} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="text-button" onClick={() => setLanguage(pt ? 'en' : 'pt-PT')} aria-label={pt ? 'EN, mudar idioma para inglês' : 'PT, switch language to Portuguese'}>{pt ? 'EN' : 'PT'}</button>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? (pt ? 'Ativar tema claro' : 'Enable light theme') : (pt ? 'Ativar tema escuro' : 'Enable dark theme')} aria-pressed={dark}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="header-contact" href="#contact">{pt ? "Contacto" : "Contact"} <ArrowUpRight size={15}/></a><a className="cv-link" href={cv} download><Download size={15} />{t.cv}</a>
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
          <figure className="hero-portrait hero-reveal hero-reveal-3"><img src="/leonardo-portrait.jpg" alt={pt ? 'Retrato a preto e branco de Leonardo Alves' : 'Black and white portrait of Leonardo Alves'} fetchPriority="high" decoding="async" /><figcaption>LEONARDO ALVES <span>·</span> 16ALVES02</figcaption></figure>
          <div className="hero-meta hero-reveal hero-reveal-5"><span>OLIVEIRA DE AZEMÉIS, PORTUGAL</span><span>{t.availability}</span></div>
        </section>

        <section className="section projects-section reveal" id="projects">
          <div className="section-heading"><div><span className="eyebrow-number">01 / {t.workLabel}</span><h2>{t.projects}</h2></div><p>{t.projectsIntro}</p></div>
          {[
            { key: 'featured', title: pt ? 'Projetos em destaque' : 'Featured projects', description: pt ? 'Os projetos que melhor demonstram a minha experiência e abordagem ao desenvolvimento.' : 'The projects that best demonstrate my experience and approach to software development.' },
            { key: 'other', title: pt ? 'Projetos complementares' : 'Additional projects', description: pt ? 'Trabalho académico individual e de grupo, incluindo um projeto de ilustração.' : 'Individual and team academic work, including a vector illustration project.' }
          ].map(group => (
            <div className={`project-group project-group-${group.key}`} key={group.key}>
              <div className="project-group-heading">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="project-list">
                {projects.filter(project => project.group === group.key).map(project => (
                  <article className={`project-row reveal ${project.featured ? 'featured-project' : ''}`} key={project.name}>
                    <span className="project-index">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                    <div className="project-main">
                      {project.image && <img className={`project-preview ${project.imageFit === 'contain' ? 'project-preview-contain' : ''} ${project.name === 'RunLattice' ? 'project-preview-runlattice' : ''}`} src={project.name === 'RunLattice' && !dark ? '/runlattice-logo-light.svg' : project.image} alt={pt ? project.imageAlt : project.imageAltEn} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.hidden = true; }} />}
                      <div className="project-topline"><span>{pt ? project.typePt : project.type}</span><span>{project.year}</span></div>
                      <h3>{project.name}</h3>
                      <p>{pt ? project.description : project.descriptionEn}</p>
                      <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                    </div>
                    <div className="project-side">
                      <span className="project-status">{pt ? project.status : (project.statusEn || (project.name === 'RAW.' ? 'Public demo · private source' : project.name === 'RunLattice' ? 'Prototype' : project.name === 'HOOP' ? 'Academic project' : 'In development'))}</span>
                      {project.caseStudy && <a href={`/projects/${project.caseStudy}.html`}>{pt ? 'Estudo de caso' : 'Case study'} <ArrowUpRight size={16} /></a>}
                      {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{t.allProjects} <ArrowUpRight size={16} /></a> : <span className="muted">{t.private}</span>}
                      {project.source && <a href={project.source} target="_blank" rel="noreferrer">{project.sourceLabel || 'GitHub'} <ArrowUpRight size={15} /></a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="section about-section reveal" id="about">
          <div className="section-heading"><div><span className="eyebrow-number">02 / {t.profileLabel}</span><h2>{t.about}</h2></div></div>
          <div className="about-grid"><p className="about-lead">{t.aboutText}</p><div className="about-details"><div><span>{t.focusLabel}</span><p>{t.focusValue}</p></div><div><span>{t.locationLabel}</span><p>{t.locationValue}</p></div><div><span>{t.educationLabel}</span><p>{t.educationValue}</p></div></div></div>
        </section>

        <section className="section skills-section reveal" id="skills"><div className="section-heading"><div><span className="eyebrow-number">03 / {pt ? 'COMPETÊNCIAS' : 'SKILLS'}</span><h2>{t.skills}</h2></div><p>{t.skillsIntro}</p></div><div className="skills-grid">{skillGroups.map((group, i) => <div className="skill-group" key={group.key}><span>{t.skillsGroups[i]}</span><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

        <section className="section experience-section reveal" id="experience">
          <div className="section-heading"><div><span className="eyebrow-number">04 / {t.backgroundLabel}</span><h2>{t.experience}</h2></div><p>{t.education}<br />{t.educationHeading}<br />{t.educationPlace}</p></div>
          <div className="experience-list">{experience.map(([datePt, dateEn, rolePt, roleEn, company]) => <div className="experience-row reveal" key={company}><span>{pt ? datePt : dateEn}</span><strong>{pt ? rolePt : roleEn}</strong><span>{company}</span></div>)}</div>
          <div className="education-note"><span>2020, 2023</span><p>{t.professionalCourse}<br />{t.professionalSchool}</p></div>
        </section>

        <section className="internship-note reveal"><div><span className="eyebrow-number">{t.nextStep}</span><p>{t.internshipText}</p></div></section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-copy"><span className="eyebrow-number">05 / {t.contactLabel}</span><h2>{t.contact}</h2><p>{t.contactText}</p><a href="mailto:16alves02@gmail.com">16alves02@gmail.com <ArrowUpRight size={16} /></a></div>
          <form className="contact-form" action="https://formsubmit.co/16alves02@gmail.com" method="POST" onInvalid={() => setFormError(pt ? "Verifica os campos obrigatórios e o formato do email." : "Please check the required fields and email format.")} onSubmit={() => { setFormError(""); setIsSubmitting(true); }}>
            <input type="hidden" name="_subject" value={pt ? "Novo contacto através do portefólio" : "New message from the portfolio"} />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://16alves02.pages.dev/thanks.html" />
            <input type="text" name="_honey" className="honeypot" tabIndex="-1" aria-hidden="true" autoComplete="off" />
            <label>{t.name}<input name="name" required maxLength="100" autoComplete="name" /></label>
            <label>{t.email}<input type="email" name="email" required maxLength="254" autoComplete="email" /></label>
            <label>{t.subject}<input name="subject" required maxLength="140" /></label>
            <label>{t.message}<textarea name="message" rows="4" required minLength="10" maxLength="4000" /></label>
            {formError && <p className="form-error" role="alert">{formError}</p>}
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? t.sending : t.send} <ArrowUpRight size={17} /></button>
            <small>{t.direct} <a href="mailto:16alves02@gmail.com">16alves02@gmail.com</a></small>
          </form>
        </section>
        <section className="section faq-section reveal" id="faq">
          <div className="section-heading"><div><span className="eyebrow-number">06 / FAQ</span><h2>{pt ? 'Perguntas para recrutadores' : 'Recruiter questions'}</h2></div><p>{pt ? 'Informação prática sobre o meu perfil, experiência e disponibilidade.' : 'Practical information about my profile, experience and availability.'}</p></div>
          <div className="faq-list">{(pt ? [
            ['Que oportunidade procuras?', 'Um estágio curricular remunerado de 680 horas, a partir de fevereiro de 2027, no âmbito do CTeSP em Desenvolvimento de Software.'],
            ['Como te posicionas profissionalmente?', 'Sou Software Developer generalista. Tenho interesse em desenvolvimento de software, web, backend, APIs, bases de dados e aplicações.'],
            ['Onde estás disponível para trabalhar?', 'Estou baseado em Oliveira de Azeméis e considero oportunidades em Aveiro, Porto e Coimbra. Tenho preferência por trabalho remoto e disponibilidade para regimes híbrido ou presencial.'],
            ['Que experiência profissional tens em desenvolvimento?', 'Fiz um estágio de backend na ClickBeauty / Alvocromático, de abril a julho de 2023, e um estágio de desenvolvimento Web na Associação Estamos Juntos, em julho de 2022.'],
            ['Que projetos devo analisar primeiro?', 'SaborGest demonstra integração Web, API, base de dados e Android; RunLattice é um protótipo de automação; MRDR. é um jogo original em desenvolvimento; RAW. tem uma demo pública; HOOP é um frontend académico individual.'],
            ['Os projetos estão concluídos e o código é público?', 'Não. O estado está indicado em cada projeto. SaborGest e MRDR. estão em desenvolvimento, RunLattice é um protótipo e RAW. continua em desenvolvimento. Alguns repositórios são privados; as demos públicas estão ligadas.'],
            ['Que tecnologias utilizas?', 'JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL, React, Next.js, APIs REST, MySQL/MariaDB, PostgreSQL, Redis, Docker e Prisma. A experiência prática varia por tecnologia e projeto.'],
            ['Como posso contactar-te?', 'Pelo formulário desta página, por email em 16alves02@gmail.com ou através do LinkedIn, disponível no rodapé.']
          ] : [
            ['What opportunity are you seeking?', 'A paid, 680-hour curricular internship starting in February 2027 as part of my Software Development CTeSP.'],
            ['How do you position yourself professionally?', 'I am a generalist Software Developer interested in software development, web, backend, APIs, databases and applications.'],
            ['Where are you available to work?', 'I am based in Oliveira de Azeméis and consider opportunities across Aveiro, Porto and Coimbra. I prefer remote work and am also open to hybrid or on-site roles.'],
            ['What professional software experience do you have?', 'I completed a backend internship at ClickBeauty / Alvocromático from April to July 2023 and a Web development internship at Associação Estamos Juntos in July 2022.'],
            ['Which projects should I review first?', 'SaborGest demonstrates Web, API, database and Android integration; RunLattice is an automation prototype; MRDR. is an original game in development; RAW. has a public demo; HOOP is an individual academic frontend project.'],
            ['Are the projects finished and is the source public?', 'No. Each project status is stated. SaborGest and MRDR. are in development, RunLattice is a prototype and RAW. remains in development. Some repositories are private; public demos are linked.'],
            ['What can RunLattice currently execute?', 'The prototype runs workflows manually, through signed webhooks or on a schedule. Its implemented external action sends messages to Discord webhooks. The worker supports one trigger and at most one condition. Arbitrary code execution and additional provider actions are not implemented yet.'],
            ['Which technologies have you used?', 'JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL, React, Next.js, REST APIs, MySQL/MariaDB, PostgreSQL, Redis, Docker and Prisma. Practical depth varies by technology and project.'],
            ['How can I contact you?', 'Use the contact form, email 16alves02@gmail.com or connect through LinkedIn, linked in the footer.']
          ]).map(([q,a]) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
        </section>
      </main>

      <a className="mobile-contact-cta" href="#contact"><Mail size={16}/>{pt ? 'Entrar em contacto' : 'Contact me'}</a>
      <footer className="footer"><a className="wordmark brand-lockup" href="#top"><img className="brand-logo" src="/logo.png" alt="" width="34" height="34" /><span>16alves02<span>.</span></span></a><div className="socials">{socialLinks.map(([Icon, label, href]) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={label} title={label}><Icon size={17} strokeWidth={1.7}/><span>{label}</span></a>)}</div><nav className="legal-links" aria-label={pt ? 'Informação legal' : 'Legal information'}><a href="/faq.html">FAQ</a><a href="/privacy.html">{t.privacyLabel}</a><a href="/terms.html">{t.termsLabel}</a></nav><span>© {new Date().getFullYear()} Leonardo Alves · {t.footer}</span></footer>
    </div>
  );
}
