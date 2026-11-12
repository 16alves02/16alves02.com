import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Code2, Mail, Moon, Sun, Menu, X, BriefcaseBusiness, Camera } from 'lucide-react';
import portraitBase64 from '../assets/leonardo-portrait.jpg.base64?raw';

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
    locationValue: <>Aveiro, Portugal<br />Presencial perto de Oliveira de Azeméis · híbrido/remoto em Aveiro, Porto e Coimbra</>,
    educationValue: <>CTeSP em Desenvolvimento de Software<br />Universidade de Aveiro · 2025-2027</>,
    availability: 'DISPONÍVEL PARA ESTÁGIO CURRICULAR · FEVEREIRO 2027',
    skills: 'Competências técnicas', skillsIntro: 'Tecnologias e ferramentas utilizadas nos projetos apresentados.',
    skillsGroups: ['Linguagens', 'Frontend e aplicações', 'Backend e dados', 'Ferramentas'],
    internshipText: 'Procuro um estágio curricular remunerado de 680 horas, com início previsto em fevereiro de 2027. Tenho preferência por trabalho presencial perto de Oliveira de Azeméis ou por oportunidades híbridas/remotas nos distritos de Aveiro, Porto e Coimbra.',
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
    locationValue: <>Aveiro, Portugal<br />On-site near Oliveira de Azeméis · hybrid/remote across Aveiro, Porto and Coimbra</>,
    educationValue: <>CTeSP Software Development<br />University of Aveiro · 2025-2027</>,
    availability: 'AVAILABLE FOR CURRICULAR INTERNSHIP · FEBRUARY 2027',
    skills: 'Technical skills', skillsIntro: 'Technologies and tools used across the projects shown here.',
    skillsGroups: ['Languages', 'Frontend & applications', 'Backend & data', 'Tools'],
    internshipText: 'Seeking a paid, 680-hour curricular internship starting in February 2027. I prefer on-site work near Oliveira de Azeméis, or hybrid/remote opportunities across the Aveiro, Porto and Coimbra districts.',
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
    status: 'Em desenvolvimento',
    caseStudy: 'saborgest',
    href: 'https://github.com/16alves02/SaborGest',
    statusEn: 'In development'
  },
  {
    name: 'RunLattice', year: '2026', group: 'featured', featured: true, type: 'PERSONAL · AUTOMATION', typePt: 'PESSOAL · AUTOMAÇÃO',
    image: '/runlattice-logo.svg', imageAlt: 'Logótipo do RunLattice', imageAltEn: 'RunLattice logo', imageFit: 'contain',
    description: 'Protótipo de automação com workspaces autenticados, editor visual, modelos, execução com Redis/BullMQ, webhooks assinados, agendamentos e propostas de workflows por IA sujeitas a revisão. Discord é a única ação externa funcional; o worker suporta um trigger e, no máximo, uma condição. Os fluxos de faturação Stripe aguardam validação end-to-end.',
    descriptionEn: 'An automation prototype with authenticated workspaces, a visual editor, templates and Redis/BullMQ background execution. It includes signed webhooks, scheduling and one live external action for Discord. AI planning produces review-only drafts. Stripe billing flows still require end-to-end validation.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Stripe'],
    statusEn: 'Prototype in development',
    status: 'Protótipo em desenvolvimento',
    caseStudy: 'runlattice',
    href: 'https://github.com/16alves02/RunLattice'
  },
  {
    name: 'RAW.', year: '2026', group: 'featured', featured: true, type: 'ALV16 STUDIOS · SOCIAL GAME', typePt: 'ALV16 STUDIOS · JOGO SOCIAL',
    description: 'Aplicação social de cartas com três modos de jogo, 27 baralhos e conteúdo em seis idiomas. Inclui sessões locais, favoritos e experiência PWA preparada para utilização offline.',
    descriptionEn: 'A card-based social app with three play modes, 27 decks and content in six languages. Includes local sessions, favourites and an offline-ready PWA experience.',
    stack: ['React', 'JavaScript', 'PWA'],
    status: 'Demo pública · código privado', statusEn: 'Public demo · private source',
    href: 'https://alv16studios.itch.io/raw-conversation-game',
    source: 'https://raw-app-bice.vercel.app', sourceLabel: 'Demo web',
    caseStudy: 'raw'
  },
  {
    name: 'MRDR.', year: '2026', group: 'featured', featured: true, type: 'ALV16 STUDIOS · GAME', typePt: 'ALV16 STUDIOS · JOGO',
    image: '/mrdr-cover.svg', imageAlt: 'Imagem de identidade do jogo MRDR.', imageAltEn: 'MRDR game identity artwork', imageFit: 'cover',
    description: 'Jogo original de dedução criminal centrado na análise de provas, suspeitos, álibis, cronologias e pistas relacionadas. A versão funcional está concluída; a publicação pública e as versões nativas continuam pendentes.',
    descriptionEn: 'An original crime-deduction game built around evidence, suspects, alibis, timelines and connected clues. The functional version is complete; public release and native distribution remain pending.',
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor'],
    status: 'Versão funcional concluída · publicação pendente', statusEn: 'Functional version complete · release pending',
    caseStudy: 'mrdr',
    href: 'https://github.com/16alves02/mrdr'
  },

  {
    name: 'HOOP', year: '2025-26', group: 'other', type: 'ACADEMIC · E-COMMERCE', typePt: 'ACADÉMICO · COMÉRCIO ELETRÓNICO',
    image: 'https://raw.githubusercontent.com/16alves02/hoop/main/public/img/screenshots/produto.PNG', imageAlt: 'Captura da página de produto da loja HOOP', imageAltEn: 'HOOP product page screenshot', imageFit: 'cover',
    description: 'Frontend académico de uma loja de basquetebol, com pesquisa, filtros, favoritos, carrinho e processo de compra simulado.',
    descriptionEn: 'An academic basketball-store frontend with search, filters, favourites, a cart and a simulated checkout.',
    stack: ['React', 'TypeScript', 'Vite', 'React Router'],
    href: 'https://hoop-16alves02.netlify.app',
    source: 'https://github.com/16alves02/hoop',
    caseStudy: 'hoop'
  },
  {
    name: 'Basket Hub', year: '2025-26', group: 'other', type: 'ACADEMIC · BASKETBALL PLATFORM', typePt: 'ACADÉMICO · PLATAFORMA DE BASQUETEBOL',
    description: 'Projeto académico de grupo para gestão de basquetebol, com equipas, jogadores, jogos, eventos, inscrições e classificações.',
    descriptionEn: 'An academic group project for basketball management, covering teams, players, games, events, registrations and standings.',
    stack: ['Kotlin', 'Ktor', 'Thymeleaf', 'Exposed', 'H2'],
    status: 'Projeto académico de grupo · não preparado para produção', statusEn: 'Academic group project · not production-ready',
    href: 'https://github.com/bmgoliveira-UA/basket-hub',
    caseStudy: 'basket-hub'
  },
  {
    name: 'Nova Imagem by Maura Pereira', year: '2026', group: 'other', type: 'CLIENT WEBSITE', typePt: 'WEBSITE PARA CLIENTE',
    image: 'https://d33wubrfki0l68.cloudfront.net/6af47378b2584cfca32dc1e6/screenshot_2026-11-11-13-55-16-0000.webp', imageAlt: 'Screenshot of the published Nova Imagem by Maura Pereira website', imageAltPt: 'Captura do website publicado Nova Imagem by Maura Pereira', imageFit: 'cover',
    description: 'Website publicado para um salão de cabeleireiro em Cucujães, com informação sobre serviços, galeria, horário e contactos por telefone e WhatsApp. Não inclui marcações online; a gestão de conteúdos por CMS continua pendente.',
    descriptionEn: 'Published website for a hair salon in Cucujães, with service information, a gallery, opening hours and phone and WhatsApp contact options. It does not include online booking; CMS-based content editing is still pending.',
    stack: [],
    status: 'Website publicado · CMS por configurar', statusEn: 'Website published · CMS setup pending',
    href: 'https://novaimagembymaurapereira.netlify.app',
    caseStudy: 'nova-imagem'
  },
  {
    name: 'Tocadiscos Editora', year: '2025-26', group: 'other', type: 'ACADEMIC · GROUP PROJECT', typePt: 'ACADÉMICO · PROJETO DE GRUPO',
    description: 'Aplicação de linha de comandos para gerir autores, álbuns e músicas, com pesquisa, relatórios financeiros, reprodução de áudio e histórico reversível.',
    descriptionEn: 'A command-line application for managing artists, albums and tracks, with search, financial reports, audio playback and reversible change history.',
    stack: ['Python', 'Pandas', 'Whoosh', 'Pygame'],
    status: 'Projeto académico de grupo', statusEn: 'Academic group project',
    href: 'https://github.com/13alves05/tocadiscos-editora'
  },
  {
    name: 'Two of Hearts', year: '2026', group: 'other', type: 'ACADEMIC · VECTOR ILLUSTRATION', typePt: 'ACADÉMICO · ILUSTRAÇÃO VETORIAL',
    image: 'https://raw.githubusercontent.com/16alves02/two-of-hearts-portuguese-folk-art/main/assets/front.png',
    imageAlt: 'Ilustração final da carta Two of Hearts', imageAltEn: 'Final Two of Hearts playing-card illustration', imageFit: 'contain',
    description: 'Ilustração vetorial de uma carta de jogar inspirada nos Lenços de Namorados do Minho, desenvolvida em Affinity e baseada em motivos da tradição popular portuguesa.',
    descriptionEn: 'A vector playing-card illustration inspired by the Minho love handkerchiefs, developed in Affinity and based on Portuguese folk-art motifs.',
    stack: ['Affinity', 'Vector illustration', 'Portuguese folk art'],
    status: 'Projeto académico', statusEn: 'Academic project',
    href: 'https://github.com/16alves02/two-of-hearts-portuguese-folk-art'
  },
  {
    name: 'Todo App', year: '2025', group: 'other', type: 'PERSONAL · WEB APPLICATION', typePt: 'PESSOAL · APLICAÇÃO WEB',
    image: 'https://raw.githubusercontent.com/16alves02/todo-app/main/assets/screenshot.png',
    imageAlt: 'Captura real da aplicação Todo App', imageAltEn: 'Actual Todo App screenshot',
    description: 'Gestor de tarefas no browser com filtros, tarefas concluídas, armazenamento local e navegação por teclado. Os dados ficam guardados apenas no browser utilizado.',
    descriptionEn: 'A browser-based task manager with filters, completed tasks, local storage and keyboard navigation. Data stays in the browser where it was created.',
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    status: 'Demo disponível', statusEn: 'Live demo',
    href: 'https://todo-app-three-beta-56.vercel.app',
    source: 'https://github.com/16alves02/todo-app'
  },
  {
    name: 'ArraySorting', year: '2023', group: 'other', type: 'EARLY PROJECT · 12.º ANO', typePt: 'PROJETO INICIAL · 12.º ANO',
    description: 'Programa de consola em C que demonstra Selection Sort, Insertion Sort, Bubble Sort e um exemplo de Bogo Sort, com menu interativo e validação de entradas.',
    descriptionEn: 'A C console program demonstrating Selection Sort, Insertion Sort, Bubble Sort and a Bogo Sort example, with an interactive menu and input validation.',
    stack: ['C', 'Arrays', 'Sorting algorithms'],
    status: 'Projeto escolar', statusEn: 'School project',
    href: 'https://github.com/16alves02/ArraySorting'
  },

];

const skillGroups = [
  { key: 'languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Kotlin', 'Python', 'C', 'SQL'] },
  { key: 'frontend', items: ['HTML', 'CSS', 'React', 'Next.js', 'Vite', 'Android'] },
  { key: 'backend', items: ['REST APIs', 'MySQL', 'PostgreSQL', 'Redis', 'Ktor', 'Stripe'] },
  { key: 'tools', items: ['Git', 'GitHub', 'Docker', 'Prisma', 'BullMQ'] }
];

const experience = [
  ['fev. 2025 - mai. 2026', 'Feb 2025 - May 2026', 'Operador de máquina CNC', 'CNC Machine Operator', 'Schmidt Light Metal Group', 'Experiência industrial que reforçou o rigor, a precisão, o controlo de qualidade e a disciplina de processos.', 'Industrial experience that strengthened precision, quality awareness and process discipline.'],
  ['mai. - ago. 2024', 'May - Aug 2024', 'Operador de loja', 'Store Assistant', 'MC', 'Experiência em operações de loja, organização e trabalho em equipa.', 'Experience in store operations, organisation and teamwork.'],
  ['abr. - jul. 2023', 'Apr - Jul 2023', 'Estágio de desenvolvimento back-end', 'Backend Development Intern', 'ClickBeauty / Alvocromático', 'Estágio na área de desenvolvimento backend.', 'Internship in backend development.'],
  ['jul. 2022', 'Jul 2022', 'Estágio de desenvolvimento Web', 'Web Development Intern', 'Associação Estamos Juntos (AEJ)', 'Estágio na área de desenvolvimento Web.', 'Internship in Web development.']
];

export default function App() {
  const shouldReduceMotion = useReducedMotion();
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
          <motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="eyebrow hero-reveal hero-reveal-1"><span className="status-dot" />{t.role}</div>
            <h1 className="hero-reveal hero-reveal-2">{t.headline}</h1>
            <p className="hero-intro hero-reveal hero-reveal-3">{t.intro}</p>
            <div className="hero-links hero-reveal hero-reveal-4">
              <a className="primary-link" href="#projects">{t.projects} <ArrowDownRight size={17} /></a>
              <a className="secondary-link" href="#contact"><Mail size={16} /> {pt ? 'Falar comigo' : 'Get in touch'}</a>
            </div>
          </motion.div>
          <motion.figure className="hero-portrait hero-reveal hero-reveal-3" initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}><img src={`data:image/jpeg;base64,${portraitBase64.trim()}`} alt={pt ? 'Retrato a preto e branco de Leonardo Alves' : 'Black and white portrait of Leonardo Alves'} fetchPriority="high" decoding="async" /><figcaption>LEONARDO ALVES <span>·</span> 16ALVES02</figcaption></motion.figure>
          <motion.div className="hero-meta hero-reveal hero-reveal-5" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}><span>AVEIRO, PORTUGAL</span><span>{t.availability}</span></motion.div>
        </section>

        <motion.section className="section projects-section reveal" id="projects" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
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
                  <motion.article className={`project-row reveal ${project.featured ? 'featured-project' : ''}`} key={project.name} initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={shouldReduceMotion ? undefined : { x: 4 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
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
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section className="section about-section reveal" id="about" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }}>
          <div className="section-heading"><div><span className="eyebrow-number">02 / {t.profileLabel}</span><h2>{t.about}</h2></div></div>
          <div className="about-grid"><p className="about-lead">{t.aboutText}</p><div className="about-details"><div><span>{t.focusLabel}</span><p>{t.focusValue}</p></div><div><span>{t.locationLabel}</span><p>{t.locationValue}</p></div><div><span>{t.educationLabel}</span><p>{t.educationValue}</p></div></div></div>
        </motion.section>

        <motion.section className="section skills-section reveal" id="skills" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }}><div className="section-heading"><div><span className="eyebrow-number">03 / {pt ? 'COMPETÊNCIAS' : 'SKILLS'}</span><h2>{t.skills}</h2></div><p>{t.skillsIntro}</p></div><div className="skills-grid">{skillGroups.map((group, i) => <motion.div className="skill-group" key={group.key} initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}><span>{t.skillsGroups[i]}</span><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div></motion.section>

        <motion.section className="section experience-section reveal" id="experience" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }}>
          <div className="section-heading"><div><span className="eyebrow-number">04 / {t.backgroundLabel}</span><h2>{t.experience}</h2></div><p>{t.education}<br />{t.educationHeading}<br />{t.educationPlace}</p></div>
          <div className="experience-list">{experience.map(([datePt, dateEn, rolePt, roleEn, company, detailPt, detailEn]) => <motion.div className="experience-row reveal" key={company} initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}><span>{pt ? datePt : dateEn}</span><strong>{pt ? rolePt : roleEn}</strong><span>{company}</span><p className="experience-description">{pt ? detailPt : detailEn}</p></motion.div>)}</div>
          <div className="education-note"><span>2020, 2023</span><p>{t.professionalCourse}<br />{t.professionalSchool}</p></div>
        </motion.section>

        <motion.section className="internship-note reveal" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}><div><span className="eyebrow-number">{t.nextStep}</span><p>{t.internshipText}</p></div></motion.section>

        <motion.section className="contact-section reveal" id="contact" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }}>
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
        </motion.section>
        <motion.section className="section faq-section reveal" id="faq" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }}>
          <div className="section-heading"><div><span className="eyebrow-number">06 / FAQ</span><h2>{pt ? 'Perguntas para recrutadores' : 'Recruiter questions'}</h2></div><p>{pt ? 'Informação prática sobre o meu perfil, experiência e disponibilidade.' : 'Practical information about my profile, experience and availability.'}</p></div>
          <div className="faq-list">{(pt ? [
            ['Que oportunidade procuras?', 'Um estágio curricular remunerado de 680 horas, a partir de fevereiro de 2027, no âmbito do CTeSP em Desenvolvimento de Software.'],
            ['Como te posicionas profissionalmente?', 'Sou Software Developer generalista. Tenho interesse em desenvolvimento de software, web, backend, APIs, bases de dados e aplicações.'],
            ['Onde estás disponível para trabalhar?', 'A localização principal do portefólio é Aveiro. Procuro oportunidades presenciais perto de Oliveira de Azeméis ou em regime híbrido/remoto nos distritos de Aveiro, Porto e Coimbra.'],
            ['Que experiência profissional tens em desenvolvimento?', 'Fiz um estágio de backend na ClickBeauty / Alvocromático, de abril a julho de 2023, e um estágio de desenvolvimento Web na Associação Estamos Juntos, em julho de 2022.'],
            ['Que projetos devo analisar primeiro?', 'SaborGest demonstra integração Web, API, base de dados e Android; RunLattice é um protótipo de automação; MRDR. é um jogo original de dedução com versão funcional concluída; RAW. tem demos públicas; HOOP é um frontend académico individual.'],
            ['Os projetos estão concluídos e o código é público?', 'O estado está indicado em cada projeto. SaborGest está em desenvolvimento; RunLattice é um protótipo; MRDR. tem a versão funcional concluída, com distribuição pública pendente; RAW. tem demos públicas e código privado. Os projetos académicos de grupo estão identificados como tal.'],
            ['Que tecnologias utilizas?', 'JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL, React, Next.js, APIs REST, MySQL/MariaDB, PostgreSQL, Redis, Docker e Prisma. A experiência prática varia por tecnologia e projeto.'],
            ['Como posso contactar-te?', 'Pelo formulário desta página, por email em 16alves02@gmail.com ou através do LinkedIn, disponível no rodapé.']
          ] : [
            ['What opportunity are you seeking?', 'A paid, 680-hour curricular internship starting in February 2027 as part of my Software Development CTeSP.'],
            ['How do you position yourself professionally?', 'I am a generalist Software Developer interested in software development, web, backend, APIs, databases and applications.'],
            ['Where are you available to work?', 'My portfolio location is Aveiro. I am seeking on-site opportunities near Oliveira de Azeméis, or hybrid/remote roles across the Aveiro, Porto and Coimbra districts.'],
            ['What professional software experience do you have?', 'I completed a backend internship at ClickBeauty / Alvocromático from April to July 2023 and a Web development internship at Associação Estamos Juntos in July 2022.'],
            ['Which projects should I review first?', 'SaborGest demonstrates Web, API, database and Android integration; RunLattice is an automation prototype; MRDR. is an original deduction game with a completed functional version; RAW. has public demos; HOOP is an individual academic frontend project.'],
            ['Are the projects finished and is the source public?', 'Each project status is stated. SaborGest is in development; RunLattice is a prototype; MRDR. has a completed functional version, with public distribution pending; RAW. has public demos and private source code. Academic group projects are identified as such.'],
            ['What can RunLattice currently execute?', 'The prototype runs workflows manually, through signed webhooks or on a schedule. Its implemented external action sends messages to Discord webhooks. The worker supports one trigger and at most one condition. Arbitrary code execution and additional provider actions are not implemented yet.'],
            ['Which technologies have you used?', 'JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL, React, Next.js, REST APIs, MySQL/MariaDB, PostgreSQL, Redis, Docker and Prisma. Practical depth varies by technology and project.'],
            ['How can I contact you?', 'Use the contact form, email 16alves02@gmail.com or connect through LinkedIn, linked in the footer.']
          ]).map(([q,a]) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
        </motion.section>
      </main>

      <a className="mobile-contact-cta" href="#contact"><Mail size={16}/>{pt ? 'Entrar em contacto' : 'Contact me'}</a>
      <footer className="footer"><a className="wordmark brand-lockup" href="#top"><img className="brand-logo" src="/logo.png" alt="" width="34" height="34" /><span>16alves02<span>.</span></span></a><div className="socials">{socialLinks.map(([Icon, label, href]) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={label} title={label}><Icon size={17} strokeWidth={1.7}/><span>{label}</span></a>)}</div><nav className="legal-links" aria-label={pt ? 'Informação legal' : 'Legal information'}><a href="/faq.html">FAQ</a><a href="/privacy.html">{t.privacyLabel}</a><a href="/terms.html">{t.termsLabel}</a></nav><span>© {new Date().getFullYear()} Leonardo Alves · {t.footer}</span></footer>
    </div>
  );
}
