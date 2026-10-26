import { useEffect, useRef, useState } from 'react';
import { projects } from './data/projects.js';

const socials = [
  { label: 'GitHub', short: 'GH', url: 'https://github.com/16alves02', kind: 'code' },
  { label: 'LinkedIn', short: 'in', url: 'https://www.linkedin.com/in/leonardo-alves-502ba8291/', kind: 'work' },
  { label: 'Uiverse', short: 'UV', url: 'https://uiverse.io/16alves02', kind: 'social' },
];

const projectTranslations = {
  pt: {
    '01': { type: 'FRONTEND / CONCEITO DE E-COMMERCE', description: 'Um conceito de loja de basquetebol com descoberta e filtros de produtos, páginas de produto, favoritos, carrinho e um processo de compra simulado. Um projeto para explorar a experiência de compra do lado do frontend.' },
    '02': { type: 'WEB INTERATIVA / PROJETO PESSOAL', description: 'Uma experiência social de conversas e jogos, com vários modos, cartões interativos, gestos de deslize, animações e uma identidade visual própria.' },
    '03': { type: 'PROJETO ACADÉMICO / EM DESENVOLVIMENTO', description: 'Projeto académico para padarias, pastelarias, cafés e restaurantes. A versão documentada gere horários e assiduidade através de um painel Web em PHP, uma API REST e um quiosque Android em Kotlin; continua em desenvolvimento.' },
    '04': { type: 'FUNDAMENTOS WEB', description: 'Um pequeno gestor de tarefas desenvolvido sem framework de frontend. Um exercício prático de eventos, atualizações do DOM, filtros e armazenamento no browser.' },
    '05': { type: 'ILUSTRAÇÃO VETORIAL / ARTE POPULAR PORTUGUESA', description: 'Uma ilustração de uma carta de jogar inspirada nos Lenços de Namorados do Minho, desenvolvida em Affinity.' },
    '06': { type: 'FUNDAMENTOS DE PROGRAMAÇÃO', description: 'Um programa de consola em C que demonstra Selection Sort, Insertion Sort, Bubble Sort e um pequeno exemplo de Bogo Sort, com menu interativo e validação de entrada.' },
  },
};


const extraProjectTranslations = {
  es: {
    '01': { type: 'FRONTEND / CONCEPTO DE E-COMMERCE', description: 'Concepto de tienda de baloncesto con catálogo, filtros, páginas de producto, favoritos, carrito y compra simulada.' },
    '02': { type: 'WEB INTERACTIVA / PROYECTO PERSONAL', description: 'Experiencia social de conversación y juegos con varios modos, tarjetas interactivas, gestos y animaciones.' },
    '03': { type: 'PROYECTO ACADÉMICO / EN DESARROLLO', description: 'Proyecto académico para panaderías, pastelerías, cafeterías y restaurantes. La versión documentada gestiona horarios y asistencia mediante un panel web PHP, una API REST y un quiosco Android en Kotlin; sigue en desarrollo.' },
    '04': { type: 'FUNDAMENTOS WEB', description: 'Gestor de tareas sencillo sin framework de frontend, centrado en eventos, DOM, filtros y almacenamiento local.' },
    '06': { type: 'FUNDAMENTOS DE PROGRAMACIÓN', description: 'Programa de consola en C que muestra Selection Sort, Insertion Sort, Bubble Sort y un pequeño ejemplo de Bogo Sort, con menú interactivo y validación de entrada.' },
    '05': { type: 'ILUSTRACIÓN VECTORIAL / ARTE POPULAR PORTUGUÉS', description: 'Ilustración de una carta inspirada en los pañuelos de enamorados tradicionales de la región del Minho, creada en Affinity.' },
  },
  fr: {
    '01': { type: 'FRONTEND / CONCEPT E-COMMERCE', description: 'Concept de boutique de basketball avec catalogue, filtres, pages produit, favoris, panier et paiement simulé.' },
    '02': { type: 'WEB INTERACTIVE / PROJET PERSONNEL', description: 'Expérience sociale de conversation et de jeux avec plusieurs modes, cartes interactives, gestes et animations.' },
    '03': { type: 'PROJET ACADÉMIQUE / EN COURS', description: 'Projet académique pour boulangeries, pâtisseries, cafés et restaurants. La version documentée gère les horaires et la présence via un panneau web PHP, une API REST et une borne Android en Kotlin ; le développement continue.' },
    '04': { type: 'FONDAMENTAUX DU WEB', description: 'Gestionnaire de tâches sans framework frontend, axé sur les événements, le DOM, les filtres et le stockage local.' },
    '06': { type: 'FONDAMENTAUX DE PROGRAMMATION', description: 'Programme console en C présentant Selection Sort, Insertion Sort, Bubble Sort et un petit exemple de Bogo Sort, avec menu interactif et validation de saisie.' },
    '05': { type: 'ILLUSTRATION VECTORIELLE / ART POPULAIRE PORTUGAIS', description: 'Illustration d’une carte inspirée des mouchoirs d’amour traditionnels du Minho, réalisée dans Affinity.' },
  },
  it: {
    '01': { type: 'FRONTEND / CONCEPT E-COMMERCE', description: 'Concept di negozio di basket con catalogo, filtri, pagine prodotto, preferiti, carrello e checkout simulato.' },
    '02': { type: 'WEB INTERATTIVO / PROGETTO PERSONALE', description: 'Esperienza sociale di conversazioni e giochi con modalità diverse, schede interattive, gesti e animazioni.' },
    '03': { type: 'PROGETTO ACCADEMICO / IN SVILUPPO', description: 'Progetto accademico per panifici, pasticcerie, caffè e ristoranti. La versione documentata gestisce turni e presenze tramite un pannello web PHP, un’API REST e un chiosco Android in Kotlin; il progetto è ancora in sviluppo.' },
    '04': { type: 'FONDAMENTI WEB', description: 'Gestore di attività senza framework frontend, focalizzato su eventi, DOM, filtri e archiviazione locale.' },
    '06': { type: 'FONDAMENTI DI PROGRAMMAZIONE', description: 'Programma console in C che presenta Selection Sort, Insertion Sort, Bubble Sort e un piccolo esempio di Bogo Sort, con menu interattivo e convalida dell’input.' },
    '05': { type: 'ILLUSTRAZIONE VETTORIALE / ARTE POPOLARE PORTOGHESE', description: 'Illustrazione di una carta ispirata ai tradizionali fazzoletti degli innamorati del Minho, realizzata in Affinity.' },
  },
  de: {
    '01': { type: 'FRONTEND / E-COMMERCE-KONZEPT', description: 'Konzept für einen Basketball-Shop mit Katalog, Filtern, Produktseiten, Favoriten, Warenkorb und simuliertem Checkout.' },
    '02': { type: 'INTERAKTIVES WEB / PRIVATES PROJEKT', description: 'Interaktives Konzept für Gespräche und Spiele mit mehreren Modi, Karteninteraktionen, Gesten und Animationen.' },
    '03': { type: 'AKADEMISCHES PROJEKT / IN ENTWICKLUNG', description: 'Akademisches Softwareprojekt für Bäckereien, Konditoreien, Cafés und Restaurants. Die dokumentierte Version verwaltet Dienstpläne und Anwesenheit über ein PHP-Webportal, eine REST-API und ein Kotlin-Android-Terminal; das Projekt ist in Entwicklung.' },
    '04': { type: 'WEB-GRUNDLAGEN', description: 'Kleiner Aufgabenmanager ohne Frontend-Framework, mit Events, DOM-Updates, Filtern und lokalem Speicher.' },
    '06': { type: 'PROGRAMMIERGRUNDLAGEN', description: 'C-Konsolenprogramm mit Selection Sort, Insertion Sort, Bubble Sort und einem kleinen Bogo-Sort-Beispiel, interaktivem Menü und Eingabeprüfung.' },
    '05': { type: 'VEKTORILLUSTRATION / PORTUGIESISCHE VOLKSKUNST', description: 'Spielkartenillustration, inspiriert von den traditionellen Liebestüchern aus dem Minho, erstellt mit Affinity.' },
  },
  ja: {
    '01': { type: 'フロントエンド / ECコンセプト', description: '商品一覧、検索・フィルター、商品ページ、お気に入り、カート、模擬チェックアウトを備えたバスケットボール店のコンセプト。' },
    '02': { type: 'インタラクティブWeb / 個人プロジェクト', description: '複数のモード、カード操作、スワイプ、アニメーションを組み合わせた会話とゲームの体験。' },
    '03': { type: '学業プロジェクト / 開発中', description: 'パン屋、菓子店、カフェ、レストラン向けの学業プロジェクトです。現在のREADMEでは、PHP管理画面、REST API、Kotlin製Android端末による勤務シフトと出退勤の管理を説明しています。開発中です。' },
    '04': { type: 'Webの基礎', description: 'フロントエンドフレームワークを使わず、イベント、DOM、フィルター、ローカル保存を学ぶタスク管理アプリ。' },
    '06': { type: 'プログラミングの基礎', description: 'Selection Sort、Insertion Sort、Bubble Sortと小さなBogo Sortの例を示すC言語のコンソールプログラム。対話式メニューと入力検証を備えています。' },
    '05': { type: 'ベクターイラスト / ポルトガルの民芸', description: 'ミーニョ地方の伝統的な恋人たちのハンカチに着想を得たトランプのイラスト。Affinityで制作。' },
  },
};

const copy = {
  en: {
    navWork: 'Work', navAbout: 'About', navPath: 'Background', navContact: 'Contact', navButton: 'Say hello',
    role: 'JUNIOR SOFTWARE DEVELOPER', eyebrow: 'PERSONAL SITE / PORTUGAL / 2026',
    titleOne: 'I make things', titleTwo: 'for the web', titleEnd: '.',
    intro: 'I’m Leonardo, the person behind 16alves02. I build web projects, pay attention to the details, and like understanding what happens behind the interface too.',
    workButton: 'See selected work', internshipButton: 'Looking for a 680h internship',
    sideNote: 'FRONTEND MINDED. FULL-STACK CURIOUS.', scroll: 'SCROLL A LITTLE',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'BUILD / TEST / LEARN'],
    workKicker: '01 / THINGS I’VE BUILT', workTitle: 'Selected work',
    workIntro: 'A few real projects. What they do, what I used, and a link to try them or read the code.',
    viewLive: 'Open project', viewCode: 'Source code', inProgress: 'In development', previewUnavailable: 'No public screenshot is available yet.',
    aboutKicker: '02 / THE SHORT VERSION', aboutTitle: 'Still learning. Already building.',
    about1: 'I’m studying Software Development at Escola Superior Aveiro Norte, part of the University of Aveiro. My main focus right now is building useful, responsive web interfaces.',
    about2: 'My current projects use React, JavaScript and TypeScript, alongside PHP, REST APIs, MySQL/MariaDB, Kotlin for Android and C fundamentals.',
    about3: 'I prefer showing what I’ve made over claiming to know everything. The projects here are labelled honestly, including the ones that are still in progress.',
    skillsKicker: 'TOOLS I’VE WORKED WITH', skillsTitle: 'My current toolkit', skillsIntro: 'No percentages or made-up skill levels. Just the tools and concepts I’ve used in projects or coursework.',
    skillGroups: [
      ['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'],
      ['BACKEND + DATA', 'PHP', 'Kotlin', 'REST APIs', 'MySQL / MariaDB', 'Android'],
      ['FOUNDATIONS + TOOLS', 'C', 'Arrays', 'Sorting algorithms', 'Git', 'GitHub', 'Affinity'],
    ],
    pathKicker: '03 / EXPERIENCE THAT MATTERS HERE', pathTitle: 'A bit of experience beyond personal projects.',
    expOneRole: 'Back-end development', expOneDate: '2023', expOneText: 'Worked on PHP features, MySQL databases, internal web tools and maintenance of existing code.',
    expTwoRole: 'Web development', expTwoDate: '2022', expTwoText: 'Built websites with HTML, CSS, JavaScript and PHP, with some database setup and management.',
    educationKicker: 'EDUCATION', educationTitle: 'Software Development', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro',
    priorEducation: 'Technical course in Systems Management and Programming · 2020-2023',
    internshipKicker: 'NEXT STEP / 2027', internshipTitle: 'Looking for a team to learn with.', internshipText: 'I’m looking for a 680-hour curricular internship where I can contribute to real work, learn from a team and improve through feedback. Remote is my preference.',
    targetStart: 'Target start: February 2027', mode: 'Remote preferred', internshipCta: 'Talk about an internship', internshipMeta: '01 OPPORTUNITY / 680 HOURS', internshipBottom: 'LEARN IN A TEAM. CONTRIBUTE TO REAL WORK.', contactMeta: 'EMAIL / LINKS / NEXT STEP',
    contactKicker: '04 / CONTACT', contactTitle: 'Got something in mind?', contactText: 'For internship opportunities, collaboration or a web project, email is the easiest way to reach me.', emailLabel: 'EMAIL ME', socialsLabel: 'ELSEWHERE ON THE INTERNET', socialNote: 'Follow the work, not the oversharing.',
    footerNote: 'Designed and built by Leonardo Alves.', footerTop: 'Back to top ↑', email: 'Copy email', copied: 'Email copied',
  },
  pt: {
    navWork: 'Projetos', navAbout: 'Sobre', navPath: 'Percurso', navContact: 'Contacto', navButton: 'Fala comigo',
    role: 'JUNIOR SOFTWARE DEVELOPER', eyebrow: 'SITE PESSOAL / PORTUGAL / 2026',
    titleOne: 'Faço coisas', titleTwo: 'para a web', titleEnd: '.',
    intro: 'Sou o Leonardo, a pessoa por trás de 16alves02. Desenvolvo projetos web, presto atenção aos detalhes e gosto de perceber o que acontece para lá da interface.',
    workButton: 'Ver projetos', internshipButton: 'À procura de estágio de 680h',
    sideNote: 'FOCO NO FRONTEND. CURIOSIDADE PELO RESTO.', scroll: 'CONTINUA A DESCER',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CRIAR / TESTAR / APRENDER'],
    workKicker: '01 / COISAS QUE CONSTRUÍ', workTitle: 'Projetos selecionados',
    workIntro: 'Projetos reais. O que fazem, as tecnologias usadas e ligações para experimentar ou consultar o código.',
    viewLive: 'Abrir projeto', viewCode: 'Código-fonte', inProgress: 'Em desenvolvimento', previewUnavailable: 'Ainda não existe uma captura de ecrã pública.',
    aboutKicker: '02 / VERSÃO CURTA', aboutTitle: 'Ainda a aprender. Já a construir.',
    about1: 'Estou a estudar Desenvolvimento de Software na Escola Superior Aveiro Norte, da Universidade de Aveiro. Neste momento, o meu foco principal é criar interfaces web úteis e responsivas.',
    about2: 'Os meus projetos atuais usam React, JavaScript e TypeScript, além de PHP, APIs REST, MySQL/MariaDB, Kotlin para Android e fundamentos de C.',
    about3: 'Prefiro mostrar aquilo que fiz a dizer que sei tudo. Os projetos estão descritos com honestidade, incluindo os que ainda estão em desenvolvimento.',
    skillsKicker: 'FERRAMENTAS COM QUE JÁ TRABALHEI', skillsTitle: 'O meu toolkit atual', skillsIntro: 'Sem percentagens ou níveis inventados. Apenas ferramentas e conceitos que já usei em projetos ou trabalhos académicos.',
    skillGroups: [
      ['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'],
      ['BACKEND + DADOS', 'PHP', 'Kotlin', 'APIs REST', 'MySQL / MariaDB', 'Android'],
      ['FUNDAMENTOS + FERRAMENTAS', 'C', 'Arrays', 'Algoritmos de ordenação', 'Git', 'GitHub', 'Affinity'],
    ],
    pathKicker: '03 / EXPERIÊNCIA RELEVANTE', pathTitle: 'Alguma experiência para lá dos projetos pessoais.',
    expOneRole: 'Desenvolvimento back-end', expOneDate: '2023', expOneText: 'Trabalho com funcionalidades PHP, bases de dados MySQL, ferramentas web internas e manutenção de código existente.',
    expTwoRole: 'Desenvolvimento web', expTwoDate: '2022', expTwoText: 'Criação de websites com HTML, CSS, JavaScript e PHP, incluindo configuração e gestão de bases de dados.',
    educationKicker: 'FORMAÇÃO', educationTitle: 'Desenvolvimento de Software', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro',
    priorEducation: 'Curso profissional de Gestão e Programação de Sistemas Informáticos · 2020-2023',
    internshipKicker: 'PRÓXIMO PASSO / 2027', internshipTitle: 'À procura de uma equipa com quem aprender.', internshipText: 'Procuro um estágio curricular de 680 horas onde possa contribuir para trabalho real, aprender com uma equipa e evoluir com feedback. Tenho preferência por remoto.',
    targetStart: 'Início pretendido: fevereiro de 2027', mode: 'Preferência por remoto', internshipCta: 'Falar sobre estágio', internshipMeta: 'OPORTUNIDADE / 680 HORAS', internshipBottom: 'APRENDER EM EQUIPA. CONTRIBUIR PARA TRABALHO REAL.', contactMeta: 'EMAIL / LIGAÇÕES / PRÓXIMO PASSO',
    contactKicker: '04 / CONTACTO', contactTitle: 'Tens algo em mente?', contactText: 'Para oportunidades de estágio, colaboração ou um projeto web, o email é a forma mais simples de falar comigo.',
    emailLabel: 'ENVIA-ME UM EMAIL', socialsLabel: 'NOUTROS CANTOS DA INTERNET', socialNote: 'Acompanha o trabalho, sem exposição a mais.',
    footerNote: 'Design e código por Leonardo Alves.', footerTop: 'Voltar ao topo ↑', email: 'Copiar email', copied: 'Email copiado',
  },
};


const languageOptions = [
  { code: 'en', short: 'EN', compact: 'EN', name: 'English', nativeName: 'English', htmlLang: 'en' },
  { code: 'pt-PT', short: 'PT-PT', compact: 'PT', name: 'Portuguese (Portugal)', nativeName: 'Português (Portugal)', htmlLang: 'pt-PT' },
  { code: 'es', short: 'ES', compact: 'ES', name: 'Spanish', nativeName: 'Español', htmlLang: 'es' },
  { code: 'fr', short: 'FR', compact: 'FR', name: 'French', nativeName: 'Français', htmlLang: 'fr' },
  { code: 'it', short: 'IT', compact: 'IT', name: 'Italian', nativeName: 'Italiano', htmlLang: 'it' },
  { code: 'de', short: 'DE', compact: 'DE', name: 'German', nativeName: 'Deutsch', htmlLang: 'de' },
  { code: 'ja', short: 'JA', compact: 'JA', name: 'Japanese', nativeName: '日本語', htmlLang: 'ja' },
];

const localeCopy = {
  en: copy.en,
  'pt-PT': copy.pt,
  es: {
    ...copy.en,
    navWork: 'Proyectos', navAbout: 'Sobre mí', navPath: 'Trayectoria', navContact: 'Contacto', navButton: 'Hablemos',
    role: 'DESARROLLADOR DE SOFTWARE JUNIOR', eyebrow: 'SITIO PERSONAL / PORTUGAL / 2026',
    titleOne: 'Creo cosas', titleTwo: 'para la web', titleEnd: '.',
    intro: 'Soy Leonardo, la persona detrás de 16alves02. Desarrollo proyectos web, cuido los detalles y me gusta entender también lo que ocurre detrás de la interfaz.',
    workButton: 'Ver proyectos', internshipButton: 'Busco prácticas de 680 h', sideNote: 'ENFOQUE FRONTEND. CURIOSIDAD FULL-STACK.', scroll: 'SIGUE BAJANDO',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CREAR / PROBAR / APRENDER'],
    workKicker: '01 / COSAS QUE HE CREADO', workTitle: 'Proyectos seleccionados', workIntro: 'Proyectos reales: qué hacen, qué tecnologías utilizan y enlaces para probarlos o consultar el código.',
    viewLive: 'Abrir proyecto', viewCode: 'Código fuente', inProgress: 'En desarrollo', previewUnavailable: 'Todavía no hay una captura pública disponible.',
    aboutKicker: '02 / VERSIÓN BREVE', aboutTitle: 'Sigo aprendiendo. Ya estoy creando.',
    about1: 'Estudio Desarrollo de Software en la Escola Superior Aveiro Norte, parte de la Universidad de Aveiro. Mi prioridad actual es crear interfaces web útiles y adaptables.',
    about2: 'Mis proyectos actuales utilizan React, JavaScript y TypeScript, además de PHP, API REST, MySQL/MariaDB, Kotlin para Android y fundamentos de C.',
    about3: 'Prefiero mostrar lo que he hecho antes que afirmar que lo sé todo. Los proyectos se describen con honestidad, incluidos los que siguen en desarrollo.',
    skillsKicker: 'HERRAMIENTAS QUE HE UTILIZADO', skillsTitle: 'Mi conjunto de herramientas', skillsIntro: 'Sin porcentajes ni niveles inventados. Solo tecnologías y conceptos utilizados en proyectos o estudios.',
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'], ['BACKEND + DATOS', 'PHP', 'Kotlin', 'API REST', 'MySQL / MariaDB', 'Android'], ['FUNDAMENTOS + HERRAMIENTAS', 'C', 'Arrays', 'Algoritmos de ordenación', 'Git', 'GitHub', 'Affinity']],
    pathKicker: '03 / EXPERIENCIA RELEVANTE', pathTitle: 'Experiencia más allá de los proyectos personales.',
    expOneRole: 'Desarrollo back-end', expOneDate: '2023', expOneText: 'Desarrollo de funcionalidades PHP, bases de datos MySQL, herramientas web internas y mantenimiento de código.',
    expTwoRole: 'Desarrollo web', expTwoDate: '2022', expTwoText: 'Creación de sitios web con HTML, CSS, JavaScript y PHP, además de configuración y gestión de bases de datos.',
    educationKicker: 'FORMACIÓN', educationTitle: 'Desarrollo de Software', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', priorEducation: 'Curso profesional de Gestión y Programación de Sistemas Informáticos · 2020-2023',
    internshipKicker: 'SIGUIENTE PASO / 2027', internshipTitle: 'Busco un equipo con el que aprender.', internshipText: 'Busco prácticas curriculares de 680 horas para contribuir a trabajo real, aprender de un equipo y mejorar con feedback. Prefiero el trabajo remoto.', targetStart: 'Inicio previsto: febrero de 2027', mode: 'Preferencia remota', internshipCta: 'Hablar de prácticas', internshipMeta: 'OPORTUNIDAD / 680 HORAS', internshipBottom: 'APRENDER EN EQUIPO. CONTRIBUIR A PROYECTOS REALES.', contactMeta: 'EMAIL / ENLACES / SIGUIENTE PASO',
    contactKicker: '04 / CONTACTO', contactTitle: '¿Tienes algo en mente?', contactText: 'Para prácticas, colaboraciones o proyectos web, el correo electrónico es la forma más sencilla de contactar conmigo.', emailLabel: 'ESCRÍBEME', socialsLabel: 'EN INTERNET', socialNote: 'Sigue el trabajo, sin compartir de más.',
    footerNote: 'Diseñado y desarrollado por Leonardo Alves.', footerTop: 'Volver arriba ↑', email: 'Copiar email', copied: 'Email copiado',
    chooseLanguage: 'Elegir idioma', activeLanguage: 'Activo', switchToLight: 'Cambiar a modo claro', switchToDark: 'Cambiar a modo oscuro', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
  },
  fr: {
    ...copy.en,
    navWork: 'Projets', navAbout: 'À propos', navPath: 'Parcours', navContact: 'Contact', navButton: 'Discutons',
    role: 'DÉVELOPPEUR LOGICIEL JUNIOR', eyebrow: 'SITE PERSONNEL / PORTUGAL / 2026',
    titleOne: 'Je crée des choses', titleTwo: 'pour le web', titleEnd: '.',
    intro: 'Je suis Leonardo, la personne derrière 16alves02. Je crée des projets web, soigne les détails et aime comprendre ce qui se passe derrière l’interface.',
    workButton: 'Voir les projets', internshipButton: 'Stage de 680 h recherché', sideNote: 'FOCUS FRONTEND. CURIOSITÉ FULL-STACK.', scroll: 'CONTINUER À DÉFILER',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CRÉER / TESTER / APPRENDRE'],
    workKicker: '01 / CE QUE J’AI CRÉÉ', workTitle: 'Projets sélectionnés', workIntro: 'Des projets réels : leur objectif, les technologies utilisées et les liens pour les tester ou consulter le code.',
    viewLive: 'Ouvrir le projet', viewCode: 'Code source', inProgress: 'En développement', previewUnavailable: 'Aucune capture publique n’est disponible pour le moment.',
    aboutKicker: '02 / EN BREF', aboutTitle: 'J’apprends encore. Je construis déjà.',
    about1: 'J’étudie le développement logiciel à l’Escola Superior Aveiro Norte, qui fait partie de l’Université d’Aveiro. Je me concentre sur des interfaces web utiles et adaptatives.',
    about2: 'Mes projets actuels utilisent React, JavaScript et TypeScript, ainsi que PHP, les API REST, MySQL/MariaDB, Kotlin pour Android et les bases du C.',
    about3: 'Je préfère montrer ce que j’ai réalisé plutôt que prétendre tout savoir. Les projets sont présentés honnêtement, y compris ceux encore en cours.',
    skillsKicker: 'OUTILS DÉJÀ UTILISÉS', skillsTitle: 'Ma boîte à outils actuelle', skillsIntro: 'Pas de pourcentages ni de niveaux inventés. Seulement les outils et concepts utilisés dans mes projets ou mes études.',
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'], ['BACKEND + DONNÉES', 'PHP', 'Kotlin', 'API REST', 'MySQL / MariaDB', 'Android'], ['BASES + OUTILS', 'C', 'Tableaux', 'Algorithmes de tri', 'Git', 'GitHub', 'Affinity']],
    pathKicker: '03 / EXPÉRIENCE PERTINENTE', pathTitle: 'Une expérience au-delà des projets personnels.',
    expOneRole: 'Développement back-end', expOneDate: '2023', expOneText: 'Développement de fonctionnalités PHP, bases de données MySQL, outils web internes et maintenance de code.',
    expTwoRole: 'Développement web', expTwoDate: '2022', expTwoText: 'Création de sites avec HTML, CSS, JavaScript et PHP, ainsi que configuration et gestion de bases de données.',
    educationKicker: 'FORMATION', educationTitle: 'Développement logiciel', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', priorEducation: 'Formation professionnelle en gestion et programmation de systèmes informatiques · 2020-2023',
    internshipKicker: 'PROCHAINE ÉTAPE / 2027', internshipTitle: 'Je cherche une équipe pour apprendre.', internshipText: 'Je recherche un stage curriculaire de 680 heures pour contribuer à des projets réels, apprendre en équipe et progresser grâce aux retours. Je privilégie le télétravail.', targetStart: 'Début souhaité : février 2027', mode: 'Télétravail privilégié', internshipCta: 'Parler du stage', internshipMeta: 'OPPORTUNITÉ / 680 HEURES', internshipBottom: 'APPRENDRE EN ÉQUIPE. CONTRIBUER À DES PROJETS RÉELS.', contactMeta: 'EMAIL / LIENS / PROCHAINE ÉTAPE',
    contactKicker: '04 / CONTACT', contactTitle: 'Un projet en tête ?', contactText: 'Pour un stage, une collaboration ou un projet web, le plus simple est de me contacter par e-mail.', emailLabel: 'M’ÉCRIRE', socialsLabel: 'AILLEURS SUR INTERNET', socialNote: 'Suivez le travail, sans trop en dévoiler.',
    footerNote: 'Conçu et développé par Leonardo Alves.', footerTop: 'Retour en haut ↑', email: 'Copier l’e-mail', copied: 'E-mail copié',
    chooseLanguage: 'Choisir la langue', activeLanguage: 'Actif', switchToLight: 'Passer au mode clair', switchToDark: 'Passer au mode sombre', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
  },
  it: {
    ...copy.en,
    navWork: 'Progetti', navAbout: 'Profilo', navPath: 'Percorso', navContact: 'Contatti', navButton: 'Parliamone',
    role: 'JUNIOR SOFTWARE DEVELOPER', eyebrow: 'SITO PERSONALE / PORTOGALLO / 2026',
    titleOne: 'Creo cose', titleTwo: 'per il web', titleEnd: '.',
    intro: 'Sono Leonardo, la persona dietro 16alves02. Creo progetti web, curo i dettagli e mi piace capire cosa succede anche dietro l’interfaccia.',
    workButton: 'Vedi i progetti', internshipButton: 'Cerco tirocinio di 680 ore', sideNote: 'FOCUS FRONTEND. CURIOSITÀ FULL-STACK.', scroll: 'CONTINUA A SCORRERE',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CREARE / TESTARE / IMPARARE'],
    workKicker: '01 / COSE CHE HO REALIZZATO', workTitle: 'Progetti selezionati', workIntro: 'Progetti reali: cosa fanno, quali tecnologie usano e link per provarli o consultare il codice.',
    viewLive: 'Apri progetto', viewCode: 'Codice sorgente', inProgress: 'In sviluppo', previewUnavailable: 'Non è ancora disponibile uno screenshot pubblico.',
    aboutKicker: '02 / IN BREVE', aboutTitle: 'Sto ancora imparando. Intanto costruisco.',
    about1: 'Studio Sviluppo Software presso la Escola Superior Aveiro Norte, parte dell’Università di Aveiro. Al momento mi concentro su interfacce web utili e responsive.',
    about2: 'I miei progetti attuali utilizzano React, JavaScript e TypeScript, oltre a PHP, API REST, MySQL/MariaDB, Kotlin per Android e le basi del C.',
    about3: 'Preferisco mostrare ciò che ho realizzato invece di affermare di sapere tutto. I progetti sono descritti con sincerità, compresi quelli ancora in corso.',
    skillsKicker: 'STRUMENTI GIÀ UTILIZZATI', skillsTitle: 'Il mio toolkit', skillsIntro: 'Niente percentuali o livelli inventati. Solo strumenti e concetti usati nei progetti o durante gli studi.',
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'], ['BACKEND + DATI', 'PHP', 'Kotlin', 'API REST', 'MySQL / MariaDB', 'Android'], ['FONDAMENTI + STRUMENTI', 'C', 'Array', 'Algoritmi di ordinamento', 'Git', 'GitHub', 'Affinity']],
    pathKicker: '03 / ESPERIENZA RILEVANTE', pathTitle: 'Esperienza oltre i progetti personali.',
    expOneRole: 'Sviluppo back-end', expOneDate: '2023', expOneText: 'Sviluppo di funzionalità PHP, database MySQL, strumenti web interni e manutenzione del codice.',
    expTwoRole: 'Sviluppo web', expTwoDate: '2022', expTwoText: 'Creazione di siti con HTML, CSS, JavaScript e PHP, oltre alla configurazione e gestione dei database.',
    educationKicker: 'FORMAZIONE', educationTitle: 'Sviluppo Software', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', priorEducation: 'Corso professionale di gestione e programmazione dei sistemi informatici · 2020-2023',
    internshipKicker: 'PROSSIMO PASSO / 2027', internshipTitle: 'Cerco un team con cui imparare.', internshipText: 'Cerco un tirocinio curricolare di 680 ore in cui contribuire a progetti reali, imparare da un team e migliorare grazie ai feedback. Preferisco il lavoro da remoto.', targetStart: 'Inizio previsto: febbraio 2027', mode: 'Preferenza da remoto', internshipCta: 'Parliamo del tirocinio', internshipMeta: 'OPPORTUNITÀ / 680 ORE', internshipBottom: 'IMPARARE INSIEME. CONTRIBUIRE A PROGETTI REALI.', contactMeta: 'EMAIL / LINK / PROSSIMO PASSO',
    contactKicker: '04 / CONTATTI', contactTitle: 'Hai un’idea in mente?', contactText: 'Per opportunità di tirocinio, collaborazioni o progetti web, l’e-mail è il modo più semplice per contattarmi.', emailLabel: 'SCRIVIMI', socialsLabel: 'ALTROVE SU INTERNET', socialNote: 'Segui il lavoro, senza condividere troppo.',
    footerNote: 'Design e sviluppo di Leonardo Alves.', footerTop: 'Torna in alto ↑', email: 'Copia e-mail', copied: 'E-mail copiata',
    chooseLanguage: 'Scegli la lingua', activeLanguage: 'Attivo', switchToLight: 'Passa alla modalità chiara', switchToDark: 'Passa alla modalità scura', openMenu: 'Apri menu', closeMenu: 'Chiudi menu',
  },
  de: {
    ...copy.en,
    navWork: 'Projekte', navAbout: 'Über mich', navPath: 'Werdegang', navContact: 'Kontakt', navButton: 'Kontakt aufnehmen',
    role: 'JUNIOR SOFTWAREENTWICKLER', eyebrow: 'PERSÖNLICHE WEBSITE / PORTUGAL / 2026',
    titleOne: 'Ich entwickle Dinge', titleTwo: 'für das Web', titleEnd: '.',
    intro: 'Ich bin Leonardo, die Person hinter 16alves02. Ich entwickle Webprojekte, achte auf Details und möchte verstehen, was hinter der Oberfläche passiert.',
    workButton: 'Projekte ansehen', internshipButton: 'Suche ein 680-Stunden-Praktikum', sideNote: 'FRONTEND-FOKUS. FULL-STACK-NEUGIER.', scroll: 'WEITER SCROLLEN',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'ENTWICKELN / TESTEN / LERNEN'],
    workKicker: '01 / MEINE PROJEKTE', workTitle: 'Ausgewählte Projekte', workIntro: 'Echte Projekte mit kurzer Beschreibung, verwendeten Technologien und Links zur Demo oder zum Quellcode.',
    viewLive: 'Projekt öffnen', viewCode: 'Quellcode', inProgress: 'In Entwicklung', previewUnavailable: 'Derzeit ist kein öffentlicher Screenshot verfügbar.',
    aboutKicker: '02 / KURZ ÜBER MICH', aboutTitle: 'Ich lerne weiter und setze Ideen um.',
    about1: 'Ich studiere Softwareentwicklung an der Escola Superior Aveiro Norte, einem Teil der Universität Aveiro. Mein aktueller Schwerpunkt sind nützliche, responsive Weboberflächen.',
    about2: 'Meine aktuellen Projekte nutzen React, JavaScript und TypeScript sowie PHP, REST-APIs, MySQL/MariaDB, Kotlin für Android und C-Grundlagen.',
    about3: 'Ich zeige lieber, was ich gebaut habe, statt zu behaupten, alles zu können. Die Projekte sind ehrlich beschrieben, auch wenn sie noch in Arbeit sind.',
    skillsKicker: 'BEREITS VERWENDETE TOOLS', skillsTitle: 'Mein aktueller Werkzeugkasten', skillsIntro: 'Keine erfundenen Prozentwerte oder Fähigkeitsstufen. Nur Werkzeuge und Konzepte, die ich in Projekten oder im Studium genutzt habe.',
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'], ['BACKEND + DATEN', 'PHP', 'Kotlin', 'REST-API', 'MySQL / MariaDB', 'Android'], ['GRUNDLAGEN + TOOLS', 'C', 'Arrays', 'Sortieralgorithmen', 'Git', 'GitHub', 'Affinity']],
    pathKicker: '03 / RELEVANTE ERFAHRUNG', pathTitle: 'Erfahrung über persönliche Projekte hinaus.',
    expOneRole: 'Backend-Entwicklung', expOneDate: '2023', expOneText: 'Entwicklung von PHP-Funktionen, MySQL-Datenbanken, internen Webtools und Wartung bestehenden Codes.',
    expTwoRole: 'Webentwicklung', expTwoDate: '2022', expTwoText: 'Erstellung von Websites mit HTML, CSS, JavaScript und PHP sowie Einrichtung und Verwaltung von Datenbanken.',
    educationKicker: 'AUSBILDUNG', educationTitle: 'Softwareentwicklung', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', priorEducation: 'Berufsausbildung in Systemverwaltung und Programmierung · 2020-2023',
    internshipKicker: 'NÄCHSTER SCHRITT / 2027', internshipTitle: 'Ich suche ein Team, von dem ich lernen kann.', internshipText: 'Ich suche ein 680-stündiges Pflichtpraktikum, um an realen Aufgaben mitzuwirken, im Team zu lernen und mich durch Feedback zu verbessern. Remote-Arbeit ist meine Präferenz.', targetStart: 'Geplanter Beginn: Februar 2027', mode: 'Remote bevorzugt', internshipCta: 'Über ein Praktikum sprechen', internshipMeta: 'CHANCE / 680 STUNDEN', internshipBottom: 'IM TEAM LERNEN. AN REALEN PROJEKTEN MITARBEITEN.', contactMeta: 'E-MAIL / LINKS / NÄCHSTER SCHRITT',
    contactKicker: '04 / KONTAKT', contactTitle: 'Hast du etwas im Sinn?', contactText: 'Für Praktika, Zusammenarbeit oder Webprojekte ist eine E-Mail der einfachste Weg, mich zu erreichen.', emailLabel: 'SCHREIB MIR', socialsLabel: 'SONST IM INTERNET', socialNote: 'Verfolge die Arbeit, nicht zu viele persönliche Details.',
    footerNote: 'Design und Entwicklung von Leonardo Alves.', footerTop: 'Nach oben ↑', email: 'E-Mail kopieren', copied: 'E-Mail kopiert',
    chooseLanguage: 'Sprache wählen', activeLanguage: 'Aktiv', switchToLight: 'Zum hellen Modus wechseln', switchToDark: 'Zum dunklen Modus wechseln', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen',
  },
  ja: {
    ...copy.en,
    navWork: '制作実績', navAbout: 'プロフィール', navPath: '経歴', navContact: 'お問い合わせ', navButton: '連絡する',
    role: 'ジュニアソフトウェア開発者', eyebrow: '個人サイト / ポルトガル / 2026',
    titleOne: 'Webのために', titleTwo: 'ものを作る', titleEnd: '。',
    intro: 'Leonardoです。16alves02として活動しています。Webプロジェクトを作り、細部に気を配り、画面の裏側の仕組みを理解することも大切にしています。',
    workButton: '制作実績を見る', internshipButton: '680時間のインターンを希望', sideNote: 'フロントエンド中心。フルスタックにも関心。', scroll: 'スクロールして続ける',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', '作る / 試す / 学ぶ'],
    workKicker: '01 / 制作したもの', workTitle: '主なプロジェクト', workIntro: '実際のプロジェクト、使用技術、デモやソースコードへのリンクを紹介します。',
    viewLive: 'プロジェクトを開く', viewCode: 'ソースコード', inProgress: '開発中', previewUnavailable: '公開できるスクリーンショットはまだありません。',
    aboutKicker: '02 / 簡単な自己紹介', aboutTitle: '学びながら、作り続ける。',
    about1: 'アヴェイロ大学の Escola Superior Aveiro Norte でソフトウェア開発を学んでいます。現在は、使いやすくレスポンシブなWebインターフェースに重点を置いています。',
    about2: '現在のプロジェクトではReact、JavaScript、TypeScriptに加え、PHP、REST API、MySQL/MariaDB、Android向けKotlin、C言語の基礎を扱っています。',
    about3: '何でもできると主張するより、実際に作ったものを見せたいと考えています。開発中のものも含め、各プロジェクトの状態を正直に記載しています。',
    skillsKicker: '使用経験のある技術', skillsTitle: '現在のツールセット', skillsIntro: '根拠のないスキル評価は載せず、プロジェクトや学業で使用した技術と概念を紹介します。',
    skillGroups: [['フロントエンド', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'], ['バックエンド・データ', 'PHP', 'Kotlin', 'REST API', 'MySQL / MariaDB', 'Android'], ['基礎・ツール', 'C', '配列', 'ソートアルゴリズム', 'Git', 'GitHub', 'Affinity']],
    pathKicker: '03 / 関連する経験', pathTitle: '個人プロジェクト以外の経験。',
    expOneRole: 'バックエンド開発', expOneDate: '2023', expOneText: 'PHP機能、MySQLデータベース、社内Webツールの開発と既存コードの保守に携わりました。',
    expTwoRole: 'Web開発', expTwoDate: '2022', expTwoText: 'HTML、CSS、JavaScript、PHPを用いたWebサイト制作とデータベースの設定・管理を行いました。',
    educationKicker: '学歴', educationTitle: 'ソフトウェア開発', educationDate: '2025-2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', priorEducation: '情報システム管理・プログラミングの職業課程 · 2020-2023',
    internshipKicker: '次のステップ / 2027', internshipTitle: 'チームで学べる環境を探しています。', internshipText: '実際の仕事に参加し、チームから学び、フィードバックを通して成長できる680時間のカリキュラム実習を希望しています。リモート勤務を希望します。', targetStart: '開始希望：2027年2月', mode: 'リモート勤務を希望', internshipCta: 'インターンについて連絡', internshipMeta: '機会 / 680時間', internshipBottom: 'チームで学び、実際のプロジェクトに貢献する。', contactMeta: 'メール / リンク / 次のステップ',
    contactKicker: '04 / お問い合わせ', contactTitle: '一緒に何かしませんか？', contactText: 'インターン、共同作業、Webプロジェクトについては、メールでの連絡が一番簡単です。', emailLabel: 'メールを送る', socialsLabel: 'ほかのSNS', socialNote: '個人情報を出しすぎず、作品を見てください。',
    footerNote: 'Leonardo Alves がデザイン・開発。', footerTop: 'トップへ戻る ↑', email: 'メールをコピー', copied: 'メールをコピーしました',
    chooseLanguage: '言語を選択', activeLanguage: '選択中', switchToLight: 'ライトモードに切り替え', switchToDark: 'ダークモードに切り替え', openMenu: 'メニューを開く', closeMenu: 'メニューを閉じる',
  },
};

localeCopy['pt-PT'] = {
  ...copy.pt,
  chooseLanguage: 'Escolher idioma', activeLanguage: 'Ativo', switchToLight: 'Ativar modo claro', switchToDark: 'Ativar modo escuro', openMenu: 'Abrir menu', closeMenu: 'Fechar menu',
};

localeCopy.en = {
  ...copy.en,
  chooseLanguage: 'Choose language', activeLanguage: 'Active', switchToLight: 'Switch to light mode', switchToDark: 'Switch to dark mode', openMenu: 'Open menu', closeMenu: 'Close menu',
};


const extraUiCopy = {
  en: { navigationLabel: 'Main navigation', tickerLabel: 'Technologies and approach', brandVisualLabel: '16alves02 brand artwork', aboutBandTagline: 'SOFTWARE / WEB / PRACTICE', aboutMiniOne: 'A SHORT INTRODUCTION.', aboutMiniTwo: 'NO BIG SPEECH.' },
  'pt-PT': { navigationLabel: 'Navegação principal', tickerLabel: 'Tecnologias e abordagem', brandVisualLabel: 'Elemento visual da marca 16alves02', aboutBandTagline: 'SOFTWARE / WEB / PRÁTICA', aboutMiniOne: 'UMA BREVE APRESENTAÇÃO.', aboutMiniTwo: 'SEM GRANDES DISCURSOS.' },
  es: { navigationLabel: 'Navegación principal', tickerLabel: 'Tecnologías y forma de trabajar', brandVisualLabel: 'Gráfico de marca 16alves02', aboutBandTagline: 'SOFTWARE / WEB / PRÁCTICA', aboutMiniOne: 'UNA BREVE PRESENTACIÓN.', aboutMiniTwo: 'SIN GRANDES DISCURSOS.' },
  fr: { navigationLabel: 'Navigation principale', tickerLabel: 'Technologies et approche', brandVisualLabel: 'Visuel de la marque 16alves02', aboutBandTagline: 'LOGICIEL / WEB / PRATIQUE', aboutMiniOne: 'UNE BRÈVE PRÉSENTATION.', aboutMiniTwo: 'SANS GRAND DISCOURS.' },
  it: { navigationLabel: 'Navigazione principale', tickerLabel: 'Tecnologie e approccio', brandVisualLabel: 'Grafica del marchio 16alves02', aboutBandTagline: 'SOFTWARE / WEB / PRATICA', aboutMiniOne: 'UNA BREVE PRESENTAZIONE.', aboutMiniTwo: 'SENZA GRANDI DISCORSI.' },
  de: { navigationLabel: 'Hauptnavigation', tickerLabel: 'Technologien und Arbeitsweise', brandVisualLabel: 'Grafik der Marke 16alves02', aboutBandTagline: 'SOFTWARE / WEB / PRAXIS', aboutMiniOne: 'EINE KURZE VORSTELLUNG.', aboutMiniTwo: 'OHNE GROSSE WORTE.' },
  ja: { navigationLabel: 'メインナビゲーション', tickerLabel: '技術と開発スタイル', brandVisualLabel: '16alves02のブランドグラフィック', aboutBandTagline: 'ソフトウェア / Web / 実践', aboutMiniOne: '簡単な自己紹介。', aboutMiniTwo: '長い説明はなし。' },
};

for (const [code, additions] of Object.entries(extraUiCopy)) {
  localeCopy[code] = { ...localeCopy[code], ...additions };
}

function ProjectArtwork({ type, name, image, imageAlt, previewUnavailable }) {
  if (image) {
    return (
      <div className={`project-preview-photo project-preview-${type}`}>
        <img
          className="project-photo"
          src={image}
          alt={imageAlt || `Actual project preview for ${name}`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.hidden = true;
            const fallback = event.currentTarget.nextElementSibling;
            if (fallback) fallback.hidden = false;
          }}
        />
        <div className="project-photo-fallback" hidden>
          <strong>{name}</strong>
          <span>{previewUnavailable}</span>
        </div>
      </div>
    );
  }

  if (type === 'sabor') {
    return (
      <div className="project-preview-unavailable">
        <span className="preview-label">PRIVATE PROJECT / IN DEVELOPMENT</span>
        <strong>{name}</strong>
        <p>{previewUnavailable}</p>
      </div>
    );
  }

  return (
    <div className="artwork artwork-code-real" aria-label="Real code excerpt from the ArraySorting repository">
      <div className="terminal-top"><span>CODE SAMPLE</span><small>Array Sorting.c / C</small></div>
      <pre className="real-code-sample"><code>{`void SelectionSort(int numbers[LIMIT]) {
    for (int i = 0; i < LIMIT - 1; i++) {
        int smallest = i;
        for (int j = i + 1; j < LIMIT; j++) {
            if (numbers[j] < numbers[smallest]) {
                smallest = j;
            }
        }
    }
}`}</code></pre>
      <div className="artwork-footer"><span>REAL SOURCE EXCERPT</span><span>C / ARRAYS</span></div>
    </div>
  );
}

function ProjectCard({ project, t, featured = false, language = 'en' }) {
  const projectLocale = language === 'pt-PT' ? 'pt' : language;
  const details = extraProjectTranslations[language]?.[project.number] || projectTranslations[projectLocale]?.[project.number] || project;
  return (
    <article className={`project-card project-${project.visual} ${featured ? 'project-featured' : ''}`}>
      <div className="project-visual-wrap"><ProjectArtwork type={project.visual} name={project.name} image={project.image} imageAlt={project.imageAlt} previewUnavailable={t.previewUnavailable} /><span className="project-number">{project.number} / 06</span></div>
      <div className="project-info">
        <div className="project-meta"><span>{details.type}</span><span>{project.year}</span></div>
        <h3>{project.name}<span className="brand-dot">.</span></h3>
        <p>{details.description}</p>
        <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-primary">{t.viewLive} <span>↗</span></a>}
          {project.source && <a href={project.source} target="_blank" rel="noreferrer" className="project-link">{t.viewCode} <span>↗</span></a>}
          {!project.live && project.visual === 'sabor' && <span className="project-status">{t.inProgress}</span>}
        </div>
      </div>
    </article>
  );
}

function SocialLink({ social }) {
  return <a className={`social-link social-${social.kind}`} href={social.url} target="_blank" rel="noreferrer"><span className="social-mark">{social.short}</span><span>{social.label}</span><span className="social-arrow">↗</span></a>;
}

function GlobeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>;
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.7 8.7 0 1 0 20.5 15.2Z" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.2 4.2L19 6.8" /></svg>;
}

function ChevronIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>;
}

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem('16alves02-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* Storage can be unavailable in restricted contexts. */ }
  return 'light';
}

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem('16alves02-language');
    if (saved && localeCopy[saved]) return saved;
  } catch { /* Storage can be unavailable in restricted contexts. */ }
  return 'en';
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const languageMenuRef = useRef(null);
  const t = localeCopy[language] || localeCopy.en;
  const activeLanguage = languageOptions.find((option) => option.code === language) || languageOptions[0];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) themeColorMeta.content = theme === 'dark' ? '#111110' : '#f7f3ec';
    try { window.localStorage.setItem('16alves02-theme', theme); } catch { /* Ignore storage errors. */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = activeLanguage.htmlLang;
    try { window.localStorage.setItem('16alves02-language', language); } catch { /* Ignore storage errors. */ }
  }, [language, activeLanguage.htmlLang]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!languageMenuRef.current?.contains(event.target)) setLanguageOpen(false);
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setLanguageOpen(false);
    }
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleCopyEmail() {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText('16alves02@gmail.com').then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }).catch(() => { window.location.href = 'mailto:16alves02@gmail.com'; });
    } else {
      window.location.href = 'mailto:16alves02@gmail.com';
    }
  }

  function goTo(id) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  function selectLanguage(code) {
    setLanguage(code);
    setLanguageOpen(false);
  }

  function toggleTheme() {
    setTheme((current) => current === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="16alves02 home">
            <img src="/logo.png" alt="LA logo" />
            <span>16alves02<span className="brand-dot">.</span></span>
          </a>

          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label={t.navigationLabel}>
            <button onClick={() => goTo('work')}>{t.navWork}</button>
            <button onClick={() => goTo('about')}>{t.navAbout}</button>
            <button onClick={() => goTo('background')}>{t.navPath}</button>
            <button onClick={() => goTo('contact')}>{t.navContact}</button>
          </nav>

          <div className="header-right">
            <div className="language-picker" ref={languageMenuRef}>
              <button
                type="button"
                className="header-icon-button language-trigger"
                aria-label={t.chooseLanguage}
                aria-haspopup="listbox"
                aria-expanded={languageOpen}
                aria-controls="language-options"
                onClick={() => setLanguageOpen((open) => !open)}
              >
                <GlobeIcon />
                <span className="language-full-code">{activeLanguage.short}</span>
                <span className="language-compact-code">{activeLanguage.compact}</span>
                <ChevronIcon />
              </button>
              {languageOpen && (
                <div className="language-menu" id="language-options" role="listbox" aria-label={t.chooseLanguage}>
                  <div className="language-menu-heading">{t.chooseLanguage}</div>
                  {languageOptions.map((option) => {
                    const active = option.code === language;
                    return (
                      <button
                        type="button"
                        key={option.code}
                        className={`language-option ${active ? 'is-active' : ''}`}
                        role="option"
                        aria-selected={active}
                        onClick={() => selectLanguage(option.code)}
                      >
                        <span className="language-option-copy">
                          <span className="language-native">{option.nativeName}</span>
                          <span className="language-english">{option.name}</span>
                        </span>
                        <span className="language-option-end">
                          <span className="language-code">{option.short}</span>
                          {active && <><CheckIcon /><span className="active-language-label">{t.activeLanguage}</span></>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              className="header-icon-button theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? t.switchToDark : t.switchToLight}
              title={theme === 'light' ? t.switchToDark : t.switchToLight}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>

            <button className="header-contact" onClick={() => goTo('contact')}>{t.navButton} <span>↗</span></button>
          </div>

          <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? t.closeMenu : t.openMenu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-back-number" aria-hidden="true">16</div>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-meta"><span className="status-dot" />{t.role}<span className="meta-slash">/</span>{t.eyebrow}</div>
              <h1>{t.titleOne}<br /><span className="hero-orange">{t.titleTwo}</span><span className="hero-period">{t.titleEnd}</span></h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions"><button className="button button-dark" onClick={() => goTo('work')}>{t.workButton}<span>↘</span></button><button className="button button-outline" onClick={() => goTo('internship')}>{t.internshipButton}<span>↗</span></button></div>
              <div className="hero-footnote"><span className="footnote-mark">✳</span><span>{t.sideNote}</span><span className="hero-small-mark">16 / 02</span></div>
            </div>
            <div className="hero-art" role="img" aria-label={t.brandVisualLabel}>
              <div className="hero-art-label label-top">PERSONAL<br />CODE / 026</div>
              <div className="hero-logo-panel"><img src="/logo.png" alt="16alves02 LA logo" /><span className="logo-panel-note">INTERNET PERSON / SINCE FOREVER-ISH</span></div>
              <div className="hero-sticker sticker-one">HELLO<br /><span>WORLD!</span></div>
              <div className="hero-sticker sticker-two"><span>HTML</span><b>+</b><span>CSS</span><b>+</b><span>JS</span></div>
              <div className="hero-art-label label-bottom">BUILT WITH<br />CURIOSITY ↗</div>
              <div className="hero-star star-one">✳</div><div className="hero-star star-two">✦</div>
            </div>
          </div>
          <div className="hero-scroll"><span>{t.scroll}</span><span className="scroll-line" /></div>
        </section>

        <div className="ticker" aria-label={t.tickerLabel}><div className="ticker-track">{[...t.ticker, ...t.ticker].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✳</b></span>)}</div></div>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><div><p className="section-kicker"><span>01</span> / {t.workKicker.split('/ ').slice(1).join('/ ')}</p><h2>{t.workTitle}<span className="brand-dot">.</span></h2></div><p className="section-description">{t.workIntro}</p></div>
          <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} t={t} language={language} featured={index < 2} />)}</div>
        </section>

        <section className="about-section" id="about">
          <div className="about-band"><span>02 / {t.navAbout.toUpperCase()}</span><span>16ALVES02®</span><span>{t.aboutBandTagline}</span></div>
          <div className="about-inner section-pad">
            <div className="about-title-col"><p className="section-kicker">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><div className="about-logo"><img src="/logo.png" alt="LA" /><span>{t.aboutMiniOne}<br />{t.aboutMiniTwo}</span></div></div>
            <div className="about-copy"><p>{t.about1}</p><p>{t.about2}</p><p>{t.about3}</p><div className="about-signoff"><span>LEONARDO ALVES</span><span>AKA 16ALVES02 <b>✳</b></span></div></div>
          </div>
        </section>

        <section className="skills-section section-pad">
          <div className="section-heading"><div><p className="section-kicker">{t.skillsKicker}</p><h2>{t.skillsTitle}<span className="brand-dot">.</span></h2></div><p className="section-description">{t.skillsIntro}</p></div>
          <div className="skills-rows">{t.skillGroups.map((group, i) => <div className="skill-row" key={group[0]}><div className="skill-label"><span>0{i + 1}</span>{group[0]}</div><div className="skill-items">{group.slice(1).map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section className="background-section section-pad" id="background">
          <div className="section-heading"><div><p className="section-kicker">{t.pathKicker}</p><h2>{t.pathTitle}<span className="brand-dot">.</span></h2></div><div className="education-card"><span className="education-label">{t.educationKicker}</span><h3>{t.educationTitle}</h3><span className="education-date">{t.educationDate}</span><p>{t.educationWhere}</p><div className="education-rule"/><p className="prior-education">{t.priorEducation}</p></div></div>
          <div className="experience-list"><article className="experience-item"><span className="experience-year">{t.expOneDate}</span><div><h3>{t.expOneRole}</h3><p>{t.expOneText}</p><div className="tag-list"><span>PHP</span><span>MySQL</span><span>Maintenance</span></div></div><span className="experience-symbol">↗</span></article><article className="experience-item"><span className="experience-year">{t.expTwoDate}</span><div><h3>{t.expTwoRole}</h3><p>{t.expTwoText}</p><div className="tag-list"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>PHP</span></div></div><span className="experience-symbol">↗</span></article></div>
        </section>

        <section className="internship-section" id="internship">
          <div className="internship-inner"><div className="internship-top"><span>{t.internshipKicker}</span><span>{t.internshipMeta}</span></div><div className="internship-content"><div className="internship-number">680<span>h</span></div><div className="internship-copy"><h2>{t.internshipTitle}</h2><p>{t.internshipText}</p><div className="internship-facts"><span>✳ {t.targetStart}</span><span>✳ {t.mode}</span><span>✳ CTeSP / ESAN-UA</span></div><a className="button button-dark" href={`mailto:16alves02@gmail.com?subject=${encodeURIComponent(t.internshipMeta)}`}>{t.internshipCta}<span>↗</span></a></div></div><div className="internship-bottom"><span>{t.internshipBottom}</span><span>16ALVES02 / 2027</span></div></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top"><p className="section-kicker">{t.contactKicker}</p><span>{t.contactMeta}</span></div><h2>{t.contactTitle}<span className="brand-dot">.</span></h2><div className="contact-bottom"><div><p>{t.contactText}</p><span className="contact-email-label">{t.emailLabel}</span><a className="contact-email" href="mailto:16alves02@gmail.com">16alves02@gmail.com <span>↗</span></a><button className="copy-email" onClick={handleCopyEmail}>{copied ? t.copied : t.email}</button></div><div className="socials-block"><p className="section-kicker">{t.socialsLabel}</p><div className="social-links">{socials.map((social) => <SocialLink key={social.label} social={social} />)}</div><p className="social-note">{t.socialNote}</p></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home"><img src="/logo.png" alt="" /><span>16alves02<span className="brand-dot">.</span></span></a><p>{t.footerNote}</p><a href="#home" className="back-top">{t.footerTop}</a><span className="footer-year">© 2026</span></footer>
    </div>
  );
}
