export const languages = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "pt-PT", label: "Portuguese (Portugal)", nativeLabel: "Português (Portugal)" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "zh-CN", label: "Chinese (Simplified)", nativeLabel: "中文（简体）" },
  { code: "fr", label: "French", nativeLabel: "Français" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export type ProjectTranslation = {
  shortDescription: string;
  longDescription: string;
  type: string;
  status: string;
  highlights: string[];
  imageAlt: string;
};

type Translation = {
  nav: {
    work: string;
    services: string;
    process: string;
    about: string;
    contact: string;
    start: string;
    language: string;
    languageHint: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    availability: string;
    title: string;
    description: string;
    work: string;
    project: string;
    web: string;
    webDetail: string;
    mobile: string;
    mobileDetail: string;
    backend: string;
    backendDetail: string;
    focus: string;
    focusDetail: string;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    moreProjects: string;
    moreProjectsDescription: string;
    all: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    business: string;
    businessDescription: string;
    landing: string;
    landingDescription: string;
    ecommerce: string;
    ecommerceDescription: string;
    custom: string;
    customDescription: string;
  };
  clients: {
    eyebrow: string;
    title: string;
    types: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    body3: string;
    currently: string;
    development: string;
    saborDescription: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    conversation: string;
    github: string;
  };
  common: {
    viewProject: string;
    back: string;
    academic: string;
    type: string;
    status: string;
    period: string;
    preview: string;
    highlights: string;
    workedOn: string;
    live: string;
    source: string;
    allProjects: string;
  };
  workPage: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    moreEyebrow: string;
    moreTitle: string;
    nextStep: string;
    nextTitle: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  projectPage: {
    technologies: string;
  };
  projects: Record<string, ProjectTranslation>;
  footer: string;
};

const projectTranslations: Record<LanguageCode, Record<string, ProjectTranslation>> = {
  en: {
    hoop: {
      shortDescription:
        "A basketball-focused e-commerce experience built around product discovery, shopping flow and responsive UI.",
      longDescription:
        "A personal frontend project exploring how a sports-focused store could turn a catalogue into a complete digital shopping experience.",
      type: "E-commerce / Web",
      status: "Completed personal project",
      highlights: [
        "Responsive product browsing and discovery",
        "Cart and favourites flows with local persistence",
        "Multi-step simulated checkout experience",
      ],
      imageAlt: "HOOP homepage interface preview",
    },
    raw: {
      shortDescription:
        "An interactive social conversation experience built around questions, games, movement and real-world interaction.",
      longDescription:
        "An experimental frontend project focused on interaction design, content-driven game modes and a strong visual identity.",
      type: "Interactive Web",
      status: "Completed personal project",
      highlights: [
        "Three distinct conversation and game modes",
        "Tap and swipe-driven card interaction",
        "Motion, haptics and responsive UI feedback",
      ],
      imageAlt: "RAW interactive conversation experience preview",
    },
    saborgest: {
      shortDescription:
        "A management system designed around operational workflows found in small bakeries and pastry shops.",
      longDescription:
        "An academic software project developed around a realistic business scenario, covering employee management, shifts, working hours, production, stock and operational information.",
      type: "Academic Software Project",
      status: "In development",
      highlights: [
        "Android applications for different user roles",
        "REST API and database-backed workflows",
        "Software requirements, testing and project documentation",
      ],
      imageAlt: "SaborGest operations dashboard concept preview",
    },
    "todo-app": {
      shortDescription:
        "A lightweight browser task manager focused on DOM interaction, filtering and local persistence.",
      longDescription:
        "A small personal project used to practise the fundamentals of interactive browser applications without a frontend framework.",
      type: "Web Fundamentals",
      status: "Completed learning project",
      highlights: [
        "Task creation and completion flows",
        "Filtering and dynamic DOM updates",
        "Persistent browser storage",
      ],
      imageAlt: "Todo App task manager interface preview",
    },
    arraysorting: {
      shortDescription:
        "A C console project exploring classic sorting algorithms through explicit implementations and a simple terminal menu.",
      longDescription:
        "One of the earliest projects in the portfolio, built to practise algorithms, arrays, functions and program flow.",
      type: "Algorithms / C",
      status: "Completed learning project",
      highlights: [
        "Selection, insertion and bubble sort",
        "Bogo Sort as an educational demonstration",
        "Simple console-based interaction",
      ],
      imageAlt: "ArraySorting terminal interface preview",
    },
  },
  "pt-PT": {
    hoop: {
      shortDescription:
        "Uma experiência de e-commerce focada em basquetebol, descoberta de produtos, navegação de compra e UI responsiva.",
      longDescription:
        "Um projeto pessoal de frontend que explora como uma loja de artigos desportivos pode transformar um catálogo numa experiência de compra completa.",
      type: "E-commerce / Web",
      status: "Projeto pessoal concluído",
      highlights: [
        "Navegação e descoberta de produtos responsiva",
        "Carrinho e favoritos com persistência local",
        "Processo de checkout simulado em várias etapas",
      ],
      imageAlt: "Pré-visualização da homepage do HOOP",
    },
    raw: {
      shortDescription:
        "Uma experiência interativa de conversas e jogos baseada em perguntas, movimento e interação no mundo real.",
      longDescription:
        "Um projeto experimental de frontend focado em design de interação, modos de jogo orientados por conteúdo e uma identidade visual forte.",
      type: "Web Interativa",
      status: "Projeto pessoal concluído",
      highlights: [
        "Três modos distintos de conversa e jogo",
        "Interação com cartões através de toque e swipe",
        "Movimento, haptics e feedback responsivo",
      ],
      imageAlt: "Pré-visualização da experiência interativa RAW.",
    },
    saborgest: {
      shortDescription:
        "Um sistema de gestão pensado para os fluxos operacionais de pequenas padarias e pastelarias.",
      longDescription:
        "Um projeto académico de software baseado num cenário empresarial realista, abrangendo gestão de funcionários, turnos, horas de trabalho, produção, stock e informação operacional.",
      type: "Projeto Académico de Software",
      status: "Em desenvolvimento",
      highlights: [
        "Aplicações Android para diferentes perfis de utilizador",
        "API REST e fluxos ligados à base de dados",
        "Requisitos, testes e documentação de software",
      ],
      imageAlt: "Pré-visualização conceptual do dashboard operacional do SaborGest",
    },
    "todo-app": {
      shortDescription:
        "Um gestor de tarefas leve para browser, focado em interação com o DOM, filtros e persistência local.",
      longDescription:
        "Um pequeno projeto pessoal usado para praticar os fundamentos de aplicações interativas no browser sem um framework frontend.",
      type: "Fundamentos Web",
      status: "Projeto de aprendizagem concluído",
      highlights: [
        "Criação e conclusão de tarefas",
        "Filtros e atualizações dinâmicas do DOM",
        "Armazenamento persistente no browser",
      ],
      imageAlt: "Pré-visualização da interface do gestor de tarefas Todo App",
    },
    arraysorting: {
      shortDescription:
        "Um projeto de consola em C que explora algoritmos clássicos de ordenação através de implementações explícitas e um menu simples.",
      longDescription:
        "Um dos primeiros projetos do portefólio, criado para praticar algoritmos, arrays, funções e fluxo de execução.",
      type: "Algoritmos / C",
      status: "Projeto de aprendizagem concluído",
      highlights: [
        "Selection sort, insertion sort e bubble sort",
        "Bogo Sort como demonstração educativa",
        "Interação simples através da consola",
      ],
      imageAlt: "Pré-visualização da interface de consola do ArraySorting",
    },
  },
  es: {
    hoop: {
      shortDescription:
        "Una experiencia de e-commerce centrada en el baloncesto, el descubrimiento de productos y una UI responsiva.",
      longDescription:
        "Un proyecto personal de frontend que explora cómo una tienda deportiva puede convertir un catálogo en una experiencia de compra completa.",
      type: "E-commerce / Web",
      status: "Proyecto personal terminado",
      highlights: [
        "Navegación y descubrimiento de productos responsivos",
        "Carrito y favoritos con persistencia local",
        "Proceso de checkout simulado en varios pasos",
      ],
      imageAlt: "Vista previa de la homepage de HOOP",
    },
    raw: {
      shortDescription:
        "Una experiencia interactiva de conversación basada en preguntas, juegos, movimiento e interacción real.",
      longDescription:
        "Un proyecto experimental de frontend centrado en el diseño de interacción, modos de juego y una identidad visual marcada.",
      type: "Web Interactiva",
      status: "Proyecto personal terminado",
      highlights: [
        "Tres modos distintos de conversación y juego",
        "Interacción con tarjetas mediante toque y swipe",
        "Movimiento, hápticos y feedback responsivo",
      ],
      imageAlt: "Vista previa de la experiencia interactiva RAW.",
    },
    saborgest: {
      shortDescription:
        "Un sistema de gestión diseñado para los flujos operativos de pequeñas panaderías y pastelerías.",
      longDescription:
        "Un proyecto académico de software basado en un escenario empresarial realista, con gestión de empleados, turnos, horas de trabajo, producción, stock e información operativa.",
      type: "Proyecto Académico de Software",
      status: "En desarrollo",
      highlights: [
        "Aplicaciones Android para diferentes perfiles",
        "API REST y flujos conectados a base de datos",
        "Requisitos, pruebas y documentación del software",
      ],
      imageAlt: "Vista previa conceptual del dashboard de SaborGest",
    },
    "todo-app": {
      shortDescription:
        "Un gestor de tareas ligero para navegador, centrado en el DOM, filtros y persistencia local.",
      longDescription:
        "Un pequeño proyecto personal para practicar los fundamentos de aplicaciones interactivas en el navegador sin un framework frontend.",
      type: "Fundamentos Web",
      status: "Proyecto de aprendizaje terminado",
      highlights: [
        "Creación y finalización de tareas",
        "Filtros y actualizaciones dinámicas del DOM",
        "Almacenamiento persistente en el navegador",
      ],
      imageAlt: "Vista previa de la interfaz de Todo App",
    },
    arraysorting: {
      shortDescription:
        "Un proyecto de consola en C que explora algoritmos clásicos de ordenación mediante implementaciones explícitas y un menú sencillo.",
      longDescription:
        "Uno de los primeros proyectos del portfolio, creado para practicar algoritmos, arrays, funciones y flujo de ejecución.",
      type: "Algoritmos / C",
      status: "Proyecto de aprendizaje terminado",
      highlights: [
        "Selection sort, insertion sort y bubble sort",
        "Bogo Sort como demostración educativa",
        "Interacción sencilla desde la consola",
      ],
      imageAlt: "Vista previa de la interfaz de consola de ArraySorting",
    },
  },
  "zh-CN": {
    hoop: {
      shortDescription:
        "一个以篮球为主题的电商体验，专注于产品发现、购物流程和响应式界面。",
      longDescription:
        "一个个人前端项目，探索如何将体育用品目录转化为完整的数字购物体验。",
      type: "电商 / Web",
      status: "已完成的个人项目",
      highlights: [
        "响应式产品浏览与发现",
        "购物车和收藏夹支持本地持久化",
        "多步骤模拟结账流程",
      ],
      imageAlt: "HOOP 首页界面预览",
    },
    raw: {
      shortDescription:
        "一个围绕问题、游戏、动作和现实互动设计的互动式社交对话体验。",
      longDescription:
        "一个实验性前端项目，专注于交互设计、内容驱动的游戏模式和鲜明的视觉风格。",
      type: "互动 Web",
      status: "已完成的个人项目",
      highlights: [
        "三种不同的对话与游戏模式",
        "支持点击和滑动的卡片交互",
        "动画、触感反馈和响应式 UI",
      ],
      imageAlt: "RAW 互动对话体验预览",
    },
    saborgest: {
      shortDescription:
        "一个围绕小型面包店和糕点店运营流程设计的管理系统。",
      longDescription:
        "一个基于真实商业场景的学术软件项目，涵盖员工管理、班次、工时、生产、库存和运营信息。",
      type: "学术软件项目",
      status: "开发中",
      highlights: [
        "面向不同用户角色的 Android 应用",
        "REST API 与数据库驱动的工作流程",
        "软件需求、测试和项目文档",
      ],
      imageAlt: "SaborGest 运营 dashboard 概念预览",
    },
    "todo-app": {
      shortDescription:
        "一个轻量级浏览器任务管理器，专注于 DOM 交互、筛选和本地持久化。",
      longDescription:
        "一个用于练习浏览器交互应用基础的小型个人项目，没有使用前端框架。",
      type: "Web 基础",
      status: "已完成的学习项目",
      highlights: [
        "任务创建与完成流程",
        "筛选与动态 DOM 更新",
        "浏览器持久化存储",
      ],
      imageAlt: "Todo App 任务管理界面预览",
    },
    arraysorting: {
      shortDescription:
        "一个 C 控制台项目，通过明确实现和简单终端菜单探索经典排序算法。",
      longDescription:
        "作品集最早的项目之一，用于练习算法、数组、函数和程序流程。",
      type: "算法 / C",
      status: "已完成的学习项目",
      highlights: [
        "选择、插入和冒泡排序",
        "Bogo Sort 教学演示",
        "简单的控制台交互",
      ],
      imageAlt: "ArraySorting 终端界面预览",
    },
  },
  fr: {
    hoop: {
      shortDescription:
        "Une expérience e-commerce orientée basket, centrée sur la découverte des produits, le parcours d'achat et une interface responsive.",
      longDescription:
        "Un projet frontend personnel qui explore comment une boutique sportive peut transformer un catalogue en expérience d'achat complète.",
      type: "E-commerce / Web",
      status: "Projet personnel terminé",
      highlights: [
        "Navigation et découverte de produits responsives",
        "Panier et favoris avec persistance locale",
        "Parcours de paiement simulé en plusieurs étapes",
      ],
      imageAlt: "Aperçu de la page d'accueil de HOOP",
    },
    raw: {
      shortDescription:
        "Une expérience interactive de conversation basée sur les questions, les jeux, le mouvement et l'interaction réelle.",
      longDescription:
        "Un projet frontend expérimental axé sur le design d'interaction, les modes de jeu et une identité visuelle forte.",
      type: "Web interactif",
      status: "Projet personnel terminé",
      highlights: [
        "Trois modes distincts de conversation et de jeu",
        "Interaction avec cartes par toucher et swipe",
        "Mouvement, haptique et feedback responsive",
      ],
      imageAlt: "Aperçu de l'expérience interactive RAW.",
    },
    saborgest: {
      shortDescription:
        "Un système de gestion conçu autour des flux opérationnels des petites boulangeries et pâtisseries.",
      longDescription:
        "Un projet académique basé sur un scénario métier réaliste, couvrant la gestion des employés, des équipes, des heures de travail, de la production, des stocks et des informations opérationnelles.",
      type: "Projet logiciel académique",
      status: "En développement",
      highlights: [
        "Applications Android pour différents rôles",
        "API REST et flux connectés à la base de données",
        "Exigences, tests et documentation logicielle",
      ],
      imageAlt: "Aperçu conceptuel du tableau de bord de SaborGest",
    },
    "todo-app": {
      shortDescription:
        "Un gestionnaire de tâches léger pour navigateur, centré sur le DOM, le filtrage et la persistance locale.",
      longDescription:
        "Un petit projet personnel utilisé pour pratiquer les bases des applications web interactives sans framework frontend.",
      type: "Fondamentaux Web",
      status: "Projet d'apprentissage terminé",
      highlights: [
        "Création et achèvement des tâches",
        "Filtrage et mises à jour dynamiques du DOM",
        "Stockage persistant dans le navigateur",
      ],
      imageAlt: "Aperçu de l'interface Todo App",
    },
    arraysorting: {
      shortDescription:
        "Un projet console en C qui explore les algorithmes de tri classiques avec des implémentations explicites et un menu terminal simple.",
      longDescription:
        "L'un des premiers projets du portfolio, créé pour pratiquer les algorithmes, les tableaux, les fonctions et le flux d'exécution.",
      type: "Algorithmes / C",
      status: "Projet d'apprentissage terminé",
      highlights: [
        "Tri par sélection, insertion et bulles",
        "Bogo Sort comme démonstration pédagogique",
        "Interaction simple dans la console",
      ],
      imageAlt: "Aperçu de l'interface console d'ArraySorting",
    },
  },
} satisfies Record<LanguageCode, Record<string, ProjectTranslation>>;

const ui = {
  en: {
    nav: {
      work: "Work", services: "Services", process: "Process", about: "About", contact: "Contact",
      start: "Start a project", language: "Language", languageHint: "Select the language for this website",
      openMenu: "Open navigation menu", closeMenu: "Close navigation menu",
    },
    hero: {
      availability: "Open to selected website projects",
      title: "Websites that make your business look the part.",
      description: "I'm Leonardo, a Software Development student from Portugal. I build responsive websites for small businesses, professionals and personal brands.",
      work: "See my work", project: "Start a website",
      web: "Web", webDetail: "React, TypeScript, responsive interfaces",
      mobile: "Mobile", mobileDetail: "Kotlin, Android and practical apps",
      backend: "Backend", backendDetail: "PHP, REST APIs and MySQL", focus: "Current focus", focusDetail: "Websites & digital experiences",
    },
    work: {
      eyebrow: "Selected work", title: "Real projects. Built from scratch.",
      description: "A visual look at the websites, interfaces and software projects behind 16alves02.",
      moreProjects: "A closer look",
      moreProjectsDescription: "Open a project to see what I built, the technology behind it and the live result.",
      all: "Explore all work",
    },
    services: {
      eyebrow: "Freelance", title: "What I can build with you.",
      description: "Focused services for small projects, independent professionals and businesses that need something practical rather than over-engineered.",
      business: "Business websites", businessDescription: "Responsive websites for restaurants, coffee shops, salons, shops, professionals and small businesses.",
      landing: "Landing pages", landingDescription: "Focused pages for services, campaigns, products, portfolios and personal projects.",
      ecommerce: "E-commerce", ecommerceDescription: "Product-focused web experiences with clear browsing, responsive layouts and practical shopping flows.",
      custom: "Custom websites", customDescription: "Websites that need more than a standard template, including data, integrations and custom functionality.",
    },
    clients: {
      eyebrow: "Who I want to work with", title: "Real people, real businesses, real websites.",
      types: ["Restaurants", "Coffee shops", "Hair salons", "Local shops", "Small businesses", "Professionals", "Personal projects", "Tech teams"],
    },
    about: {
      eyebrow: "About", title: "Still learning. Already building.",
      body1: "I'm Leonardo, a Software Development student at the University of Aveiro and the person behind 16alves02. I'm building my professional path through personal, academic and experimental projects.",
      body2: "My course covers programming, web technologies, databases, software engineering, mobile development, interaction design and the development of complete software projects.",
      body3: "16alves02 is the public identity behind that work: a place for projects, experiments and the beginning of my freelance journey.",
      currently: "Currently building", development: "In development",
      saborDescription: "A management system for small bakeries and pastry shops, developed as an academic software project.",
    },
    contact: {
      eyebrow: "Contact", title: "Have something that needs building?",
      description: "Tell me what you are trying to build, what you already have and what the end result needs to look like. We can start from there.",
      conversation: "Start a conversation", github: "View GitHub",
    },
    common: {
      viewProject: "View project", back: "Back to work", academic: "Academic project",
      type: "Type", status: "Status", period: "Period", preview: "Project preview",
      highlights: "Highlights", workedOn: "What I worked on", live: "Open live project",
      source: "View source", allProjects: "All projects",
    },
    workPage: {
      eyebrow: "01 / Work", title: "Projects, experiments", accent: "and things I've built.",
      description: "A collection of personal, academic and learning projects that document how I am developing my software skills.",
      moreEyebrow: "More work", moreTitle: "Smaller projects and fundamentals",
      nextStep: "Next step", nextTitle: "Looking for the GitHub source or a live project?",
    },
    process: {
      eyebrow: "The process", title: "From idea to a website you can actually use.",
      description: "A straightforward process designed to keep the project clear, collaborative and focused on the final result.",
      steps: [
        { number: "01", title: "Discover", description: "We define what you need, who it is for and what the website needs to achieve." },
        { number: "02", title: "Plan", description: "I turn the idea into a clear structure, content direction and technical plan." },
        { number: "03", title: "Build", description: "I develop the responsive website, refine the interface and keep you involved." },
        { number: "04", title: "Launch", description: "We review the final result, make the last adjustments and get it ready to go live." },
      ],
    },
    faq: {
      eyebrow: "Questions", title: "Before we start.",
      items: [
        { question: "What kind of websites do you build?", answer: "Business websites, landing pages, personal websites, portfolios, e-commerce experiences and custom websites for small projects." },
        { question: "Do you work with small businesses?", answer: "Yes. Restaurants, cafés, salons, shops, professionals and other small businesses are exactly the kind of projects I want to work on." },
        { question: "Will the website work on mobile?", answer: "Yes. Responsive behaviour is part of the build, so the experience is designed for phones, tablets and desktop screens." },
        { question: "How does a project start?", answer: "Send me the idea, the business or project context and what you already have. We can use that first conversation to define the next step." },
      ],
    },
    projectPage: { technologies: "Technologies" },
    footer: "Software · Projects · Freelance",
  },
  "pt-PT": {
    nav: {
      work: "Projetos", services: "Serviços", process: "Processo", about: "Sobre", contact: "Contacto",
      start: "Iniciar um projeto", language: "Idioma", languageHint: "Seleciona o idioma deste site",
      openMenu: "Abrir menu de navegação", closeMenu: "Fechar menu de navegação",
    },
    hero: {
      availability: "Disponível para projetos web selecionados",
      title: "Sites que fazem o teu negócio estar à altura.",
      description: "Sou o Leonardo, estudante de Desenvolvimento de Software em Portugal. Crio sites adaptáveis para pequenos negócios, profissionais e projetos pessoais.",
      work: "Ver os meus projetos", project: "Criar um site",
      web: "Web", webDetail: "React, TypeScript e interfaces adaptáveis",
      mobile: "Aplicações móveis", mobileDetail: "Kotlin, Android e aplicações práticas",
      backend: "Servidor", backendDetail: "PHP, APIs REST e MySQL", focus: "Foco atual", focusDetail: "Sites e experiências digitais",
    },
    work: {
      eyebrow: "Projetos selecionados", title: "Projetos reais. Feitos de raiz.",
      description: "Uma visão visual dos sites, interfaces e projetos de software por detrás da 16alves02.",
      moreProjects: "Ver em detalhe", moreProjectsDescription: "Abre um projeto para veres o que construí, a tecnologia utilizada e a versão disponível online.",
      all: "Explorar projetos",
    },
    services: {
      eyebrow: "Trabalho independente", title: "O que posso construir contigo.",
      description: "Serviços focados para pequenos projetos, profissionais independentes e negócios que precisam de algo prático.",
      business: "Sites para negócios", businessDescription: "Sites adaptáveis para restaurantes, cafés, salões, lojas, profissionais e pequenos negócios.",
      landing: "Páginas de apresentação", landingDescription: "Páginas focadas em serviços, campanhas, produtos, portefólios e projetos pessoais.",
      ecommerce: "Lojas online", ecommerceDescription: "Experiências web orientadas para produtos, com navegação clara, layouts adaptáveis e processos de compra práticos.",
      custom: "Websites personalizados", customDescription: "Sites que precisam de mais do que um modelo, incluindo dados, integrações e funcionalidades personalizadas.",
    },
    clients: {
      eyebrow: "Com quem quero trabalhar", title: "Pessoas reais, negócios reais, sites reais.",
      types: ["Restaurantes", "Cafés", "Salões", "Lojas locais", "Pequenos negócios", "Profissionais", "Projetos pessoais", "Equipas de tecnologia"],
    },
    about: {
      eyebrow: "Sobre", title: "Ainda a aprender. Já a construir.",
      body1: "Sou o Leonardo, estudante de Desenvolvimento de Software na Universidade de Aveiro e a pessoa por detrás da 16alves02. Estou a construir o meu percurso profissional através de projetos pessoais, académicos e experimentais.",
      body2: "O meu curso abrange programação, tecnologias web, bases de dados, engenharia de software, desenvolvimento móvel, design de interação e desenvolvimento de projetos de software completos.",
      body3: "A 16alves02 é a identidade pública desse trabalho: um espaço para projetos, experiências e o início do meu percurso profissional independente.",
      currently: "A desenvolver atualmente", development: "Em desenvolvimento",
      saborDescription: "Um sistema de gestão para pequenas padarias e pastelarias, desenvolvido como projeto académico de software.",
    },
    contact: {
      eyebrow: "Contacto", title: "Tens algo que precisa de ser desenvolvido?",
      description: "Diz-me o que queres construir, o que já tens e como deve ser o resultado final. Podemos começar por aí.",
      conversation: "Iniciar conversa", github: "Ver GitHub",
    },
    common: {
      viewProject: "Ver projeto", back: "Voltar aos projetos", academic: "Projeto académico",
      type: "Tipo", status: "Estado", period: "Período", preview: "Pré-visualização",
      highlights: "Destaques", workedOn: "O que desenvolvi", live: "Abrir projeto",
      source: "Ver código", allProjects: "Todos os projetos",
    },
    workPage: {
      eyebrow: "01 / Projetos", title: "Projetos, experiências", accent: "e coisas que construí.",
      description: "Uma coleção de projetos pessoais, académicos e de aprendizagem que documentam o desenvolvimento das minhas competências.",
      moreEyebrow: "Mais trabalho", moreTitle: "Projetos mais pequenos e fundamentos",
      nextStep: "Próximo passo", nextTitle: "Procuras o código no GitHub ou um projeto online?",
    },
    process: {
      eyebrow: "O processo", title: "Da ideia a um site que podes realmente usar.",
      description: "Um processo simples para manter o projeto claro, colaborativo e focado no resultado final.",
      steps: [
        { number: "01", title: "Descobrir", description: "Definimos o que precisas, para quem é e o que o site deve alcançar." },
        { number: "02", title: "Planear", description: "Transformo a ideia numa estrutura clara, numa direção de conteúdo e num plano técnico." },
        { number: "03", title: "Construir", description: "Desenvolvo o site adaptável, aperfeiçoo a interface e mantenho-te envolvido." },
        { number: "04", title: "Lançar", description: "Revemos o resultado final, fazemos os últimos ajustes e deixamos tudo pronto para publicar." },
      ],
    },
    faq: {
      eyebrow: "Perguntas", title: "Antes de começarmos.",
      items: [
        { question: "Que tipo de websites desenvolves?", answer: "Sites para negócios, páginas de apresentação, sites pessoais, portefólios, lojas online e sites personalizados para projetos de pequena dimensão." },
        { question: "Trabalhas com pequenos negócios?", answer: "Sim. Restaurantes, cafés, salões, lojas, profissionais e outros pequenos negócios são precisamente o tipo de projetos em que quero trabalhar." },
        { question: "O site funciona em telemóvel?", answer: "Sim. A adaptação a diferentes ecrãs faz parte do desenvolvimento, por isso a experiência é pensada para telemóveis, tablets e computadores." },
        { question: "Como começa um projeto?", answer: "Envia-me a ideia, o contexto do negócio ou projeto e aquilo que já tens. A partir dessa primeira conversa definimos o próximo passo." },
      ],
    },
    projectPage: { technologies: "Tecnologias" },
    footer: "Software · Projetos · Trabalho independente",
  },
  es: {
    nav: {
      work: "Proyectos", services: "Servicios", process: "Proceso", about: "Sobre mí", contact: "Contacto",
      start: "Iniciar un proyecto", language: "Idioma", languageHint: "Selecciona el idioma de este sitio",
      openMenu: "Abrir menú de navegación", closeMenu: "Cerrar menú de navegación",
    },
    hero: {
      availability: "Disponible para proyectos web seleccionados",
      title: "Sitios web que hacen que tu negocio esté a la altura.",
      description: "Soy Leonardo, estudiante de Desarrollo de Software en Portugal. Creo sitios web adaptables para pequeños negocios, profesionales y proyectos personales.",
      work: "Ver mi trabajo", project: "Crear un sitio web",
      web: "Web", webDetail: "React, TypeScript e interfaces adaptables",
      mobile: "Móvil", mobileDetail: "Kotlin, Android y aplicaciones prácticas",
      backend: "Backend", backendDetail: "PHP, APIs REST y MySQL", focus: "Enfoque actual", focusDetail: "Sitios web y experiencias digitales",
    },
    work: {
      eyebrow: "Proyectos seleccionados", title: "Proyectos reales. Hechos desde cero.",
      description: "Una mirada visual a los sitios web, interfaces y proyectos de software detrás de 16alves02.",
      moreProjects: "Ver en detalle", moreProjectsDescription: "Abre un proyecto para ver qué construí, la tecnología utilizada y el resultado en línea.",
      all: "Explorar proyectos",
    },
    services: {
      eyebrow: "Trabajo independiente", title: "Lo que puedo construir contigo.",
      description: "Servicios para pequeños proyectos, profesionales independientes y negocios que necesitan algo práctico.",
      business: "Sitios web para negocios", businessDescription: "Sitios web responsivos para restaurantes, cafeterías, salones, tiendas, profesionales y pequeñas empresas.",
      landing: "Páginas de destino", landingDescription: "Páginas para servicios, campañas, productos, portafolios y proyectos personales.",
      ecommerce: "Comercio electrónico", ecommerceDescription: "Experiencias web centradas en productos, con navegación clara y procesos de compra prácticos.",
      custom: "Sitios web personalizados", customDescription: "Sitios que necesitan más que una plantilla, con datos, integraciones y funciones personalizadas.",
    },
    clients: {
      eyebrow: "Con quién quiero trabajar", title: "Personas reales, negocios reales, sitios web reales.",
      types: ["Restaurantes", "Cafeterías", "Salones", "Tiendas locales", "Pequeñas empresas", "Profesionales", "Proyectos personales", "Equipos tecnológicos"],
    },
    about: {
      eyebrow: "Sobre mí", title: "Sigo aprendiendo. Ya estoy construyendo.",
      body1: "Soy Leonardo, estudiante de Desarrollo de Software en la Universidad de Aveiro y la persona detrás de 16alves02. Estoy construyendo mi trayectoria mediante proyectos personales, académicos y experimentales.",
      body2: "Mi curso cubre programación, tecnologías web, bases de datos, ingeniería de software, desarrollo móvil, diseño de interacción y proyectos completos de software.",
      body3: "16alves02 es la identidad pública de ese trabajo: un espacio para proyectos, experimentos y el comienzo de mi trayectoria profesional independiente.",
      currently: "Desarrollando ahora", development: "En desarrollo",
      saborDescription: "Un sistema de gestión para pequeñas panaderías y pastelerías, desarrollado como proyecto académico de software.",
    },
    contact: {
      eyebrow: "Contacto", title: "¿Tienes algo que necesite ser construido?",
      description: "Cuéntame qué quieres construir, qué tienes ya y cómo debe ser el resultado final. Podemos empezar desde ahí.",
      conversation: "Iniciar conversación", github: "Ver GitHub",
    },
    common: {
      viewProject: "Ver proyecto", back: "Volver a los proyectos", academic: "Proyecto académico",
      type: "Tipo", status: "Estado", period: "Periodo", preview: "Vista previa",
      highlights: "Destacados", workedOn: "En qué trabajé", live: "Abrir proyecto",
      source: "Ver código", allProjects: "Todos los proyectos",
    },
    workPage: {
      eyebrow: "01 / Proyectos", title: "Proyectos, experimentos", accent: "y cosas que he construido.",
      description: "Una colección de proyectos personales, académicos y de aprendizaje que documentan cómo estoy desarrollando mis habilidades.",
      moreEyebrow: "Más proyectos", moreTitle: "Proyectos pequeños y fundamentos",
      nextStep: "Siguiente paso", nextTitle: "¿Buscas el código de GitHub o un proyecto online?",
    },
    process: {
      eyebrow: "El proceso", title: "De la idea a un sitio web que realmente puedas usar.",
      description: "Un proceso directo para mantener el proyecto claro, colaborativo y centrado en el resultado final.",
      steps: [
        { number: "01", title: "Descubrir", description: "Definimos qué necesitas, para quién es y qué debe conseguir el sitio." },
        { number: "02", title: "Planificar", description: "Convierto la idea en una estructura clara, una dirección de contenido y un plan técnico." },
        { number: "03", title: "Construir", description: "Desarrollo el sitio responsivo, refino la interfaz y mantengo tu participación." },
        { number: "04", title: "Lanzar", description: "Revisamos el resultado, hacemos los últimos ajustes y lo dejamos listo para publicar." },
      ],
    },
    faq: {
      eyebrow: "Preguntas", title: "Antes de empezar.",
      items: [
        { question: "¿Qué tipo de sitios web construyes?", answer: "Sitios web para negocios, landing pages, páginas personales, portafolios, experiencias de comercio electrónico y sitios personalizados para proyectos pequeños." },
        { question: "¿Trabajas con pequeños negocios?", answer: "Sí. Restaurantes, cafeterías, salones, tiendas, profesionales y otros pequeños negocios son exactamente el tipo de proyectos en los que quiero trabajar." },
        { question: "¿El sitio funcionará en móvil?", answer: "Sí. El diseño adaptable forma parte del desarrollo, por lo que la experiencia está pensada para móviles, tabletas y ordenadores." },
        { question: "¿Cómo empieza un proyecto?", answer: "Envíame la idea, el contexto del negocio o proyecto y lo que ya tienes. Con esa primera conversación podemos definir el siguiente paso." },
      ],
    },
    projectPage: { technologies: "Tecnologías" },
    footer: "Software · Proyectos · Trabajo independiente",
  },
  "zh-CN": {
    nav: {
      work: "项目", services: "服务", process: "流程", about: "关于", contact: "联系",
      start: "开始项目", language: "语言", languageHint: "选择此网站的语言",
      openMenu: "打开导航菜单", closeMenu: "关闭导航菜单",
    },
    hero: {
      availability: "接受精选网站项目",
      title: "让你的企业网站真正展现品牌实力。",
      description: "我是 Leonardo，来自葡萄牙的软件开发学生。我为小型企业、专业人士和个人项目制作响应式网站。",
      work: "查看我的项目", project: "创建网站",
      web: "网站", webDetail: "React、TypeScript、响应式界面",
      mobile: "移动端", mobileDetail: "Kotlin、Android 和实用应用",
      backend: "后端", backendDetail: "PHP、REST API 和 MySQL", focus: "当前方向", focusDetail: "网站与数字体验",
    },
    work: {
      eyebrow: "精选项目", title: "真实项目，从零开始构建。",
      description: "用视觉方式展示 16alves02 背后的站点、界面和软件项目。",
      moreProjects: "查看详情", moreProjectsDescription: "打开项目，了解我构建了什么、使用了哪些技术以及在线结果。",
      all: "探索全部项目",
    },
    services: {
      eyebrow: "自由职业", title: "我可以和你一起构建什么。",
      description: "面向小型项目、独立专业人士和需要实用网站的企业的服务。",
      business: "企业网站", businessDescription: "为餐厅、咖啡馆、美容院、商店、专业人士和小型企业提供响应式网站。",
      landing: "落地页", landingDescription: "用于服务、活动、产品、作品集和个人项目的专注型页面。",
      ecommerce: "电子商务", ecommerceDescription: "以产品为核心，提供清晰浏览、响应式布局和实用购买流程的网页体验。",
      custom: "定制网站", customDescription: "不仅是标准模板，还包括数据、集成和定制功能的网站。",
    },
    clients: {
      eyebrow: "我希望合作的对象", title: "真实的人，真实的企业，真实的网站。",
      types: ["餐厅", "咖啡馆", "美容院", "本地商店", "小型企业", "专业人士", "个人项目", "技术团队"],
    },
    about: {
      eyebrow: "关于我", title: "仍在学习，也已经在构建。",
      body1: "我是 Leonardo，在阿威罗大学学习软件开发，也是 16alves02 的创建者。我通过个人、学术和实验项目建立自己的职业道路。",
      body2: "我的课程涵盖编程、网络技术、数据库、软件工程、移动开发、交互设计和完整的软件项目开发。",
      body3: "16alves02 是这些工作的公开品牌，用于展示项目、实验以及我自由职业道路的开始。",
      currently: "当前项目", development: "开发中",
      saborDescription: "面向小型面包店和糕点店的管理系统，作为学术软件项目开发。",
    },
    contact: {
      eyebrow: "联系", title: "有需要构建的东西吗？",
      description: "告诉我你想做什么、已经有什么，以及最终效果应该是什么样。我们可以从这里开始。",
      conversation: "开始交流", github: "查看 GitHub",
    },
    common: {
      viewProject: "查看项目", back: "返回项目", academic: "学术项目",
      type: "类型", status: "状态", period: "时间", preview: "项目预览",
      highlights: "重点", workedOn: "我的工作内容", live: "打开在线项目",
      source: "查看源码", allProjects: "全部项目",
    },
    workPage: {
      eyebrow: "01 / 项目", title: "项目、实验", accent: "以及我构建的东西。",
      description: "通过个人、学术和学习项目记录我的软件技能成长。",
      moreEyebrow: "更多项目", moreTitle: "小型项目与基础练习",
      nextStep: "下一步", nextTitle: "想查看 GitHub 源码或在线项目吗？",
    },
    process: {
      eyebrow: "开发流程", title: "从想法到真正可以使用的网站。",
      description: "一个直接清晰的流程，让项目保持透明、协作和以最终结果为中心。",
      steps: [
        { number: "01", title: "了解", description: "明确需求、目标用户以及网站需要实现的目标。" },
        { number: "02", title: "规划", description: "将想法转化为清晰的结构、内容方向和技术计划。" },
        { number: "03", title: "构建", description: "开发响应式网站、完善界面，并保持与你的沟通。" },
        { number: "04", title: "上线", description: "检查最终结果，完成最后调整并准备正式发布。" },
      ],
    },
    faq: {
      eyebrow: "常见问题", title: "开始之前。",
      items: [
        { question: "你开发什么类型的网站？", answer: "企业网站、落地页、个人网站、作品集、电商体验以及适合小型项目的定制网站。" },
        { question: "你接受小型企业项目吗？", answer: "接受。餐厅、咖啡馆、美容院、商店、专业人士和其他小型企业正是我希望合作的对象。" },
        { question: "网站会适配手机吗？", answer: "会。响应式设计属于开发的一部分，网站会针对手机、平板和桌面屏幕进行设计。" },
        { question: "项目如何开始？", answer: "把你的想法、业务或项目背景以及现有内容发给我。我们可以从第一次沟通开始确定下一步。" },
      ],
    },
    projectPage: { technologies: "技术" },
    footer: "软件 · 项目 · 独立工作",
  },
  fr: {
    nav: {
      work: "Projets", services: "Services", process: "Processus", about: "À propos", contact: "Contact",
      start: "Démarrer un projet", language: "Langue", languageHint: "Choisissez la langue de ce site",
      openMenu: "Ouvrir le menu de navigation", closeMenu: "Fermer le menu de navigation",
    },
    hero: {
      availability: "Ouvert à certains projets web",
      title: "Des sites web qui mettent votre activité à la hauteur.",
      description: "Je suis Leonardo, étudiant en développement logiciel au Portugal. Je crée des sites web responsifs pour les petites entreprises, les professionnels et les projets personnels.",
      work: "Voir mes projets", project: "Créer un site internet",
      web: "Web", webDetail: "React, TypeScript et interfaces adaptatives",
      mobile: "Applications mobiles", mobileDetail: "Kotlin, Android et applications pratiques",
      backend: "Serveur", backendDetail: "PHP, API REST et MySQL", focus: "Focus actuel", focusDetail: "Sites web et expériences numériques",
    },
    work: {
      eyebrow: "Projets sélectionnés", title: "De vrais projets. Construits de zéro.",
      description: "Un aperçu visuel des sites, interfaces et projets logiciels derrière 16alves02.",
      moreProjects: "Voir en détail", moreProjectsDescription: "Ouvrez un projet pour découvrir ce que j'ai construit, les technologies utilisées et le résultat en ligne.",
      all: "Explorer les projets",
    },
    services: {
      eyebrow: "Activité indépendante", title: "Ce que je peux construire avec vous.",
      description: "Des services ciblés pour les petits projets, les indépendants et les entreprises qui ont besoin de quelque chose de pratique.",
      business: "Sites web professionnels", businessDescription: "Sites responsifs pour restaurants, cafés, salons, boutiques, professionnels et petites entreprises.",
      landing: "Pages de destination", landingDescription: "Pages dédiées aux services, campagnes, produits, portfolios et projets personnels.",
      ecommerce: "Commerce en ligne", ecommerceDescription: "Expériences web orientées produits avec navigation claire et parcours d'achat pratiques.",
      custom: "Sites web personnalisés", customDescription: "Des sites qui vont au-delà d'un modèle standard, avec données, intégrations et fonctionnalités personnalisées.",
    },
    clients: {
      eyebrow: "Avec qui je veux travailler", title: "De vraies personnes, de vraies entreprises, de vrais sites.",
      types: ["Restaurants", "Cafés", "Salons", "Commerces locaux", "Petites entreprises", "Professionnels", "Projets personnels", "Équipes techniques"],
    },
    about: {
      eyebrow: "À propos", title: "J'apprends encore. Je construis déjà.",
      body1: "Je suis Leonardo, étudiant en développement logiciel à l'Université d'Aveiro et créateur de 16alves02. Je construis mon parcours grâce à des projets personnels, académiques et expérimentaux.",
      body2: "Ma formation couvre la programmation, les technologies web, les bases de données, le génie logiciel, le développement mobile, le design d'interaction et les projets logiciels complets.",
      body3: "16alves02 est l'identité publique de ce travail : un espace pour les projets, les expérimentations et le début de mon activité indépendante.",
      currently: "En cours de développement", development: "En développement",
      saborDescription: "Un système de gestion pour petites boulangeries et pâtisseries, développé comme projet académique.",
    },
    contact: {
      eyebrow: "Contact", title: "Vous avez quelque chose à construire ?",
      description: "Dites-moi ce que vous voulez construire, ce que vous avez déjà et à quoi le résultat final doit ressembler. Commençons par là.",
      conversation: "Démarrer une conversation", github: "Voir GitHub",
    },
    common: {
      viewProject: "Voir le projet", back: "Retour aux projets", academic: "Projet académique",
      type: "Type", status: "Statut", period: "Période", preview: "Aperçu du projet",
      highlights: "Points clés", workedOn: "Ce sur quoi j'ai travaillé", live: "Ouvrir le projet",
      source: "Voir le code", allProjects: "Tous les projets",
    },
    workPage: {
      eyebrow: "01 / Projets", title: "Projets, expériences", accent: "et réalisations.",
      description: "Une collection de projets personnels, académiques et d'apprentissage qui documentent le développement de mes compétences.",
      moreEyebrow: "Autres projets", moreTitle: "Petits projets et fondamentaux",
      nextStep: "Étape suivante", nextTitle: "Vous cherchez le code GitHub ou un projet en ligne ?",
    },
    process: {
      eyebrow: "Le processus", title: "De l'idée à un site que vous pouvez réellement utiliser.",
      description: "Un processus simple pour garder le projet clair, collaboratif et centré sur le résultat final.",
      steps: [
        { number: "01", title: "Découvrir", description: "Nous définissons vos besoins, votre public et ce que le site doit accomplir." },
        { number: "02", title: "Planifier", description: "Je transforme l'idée en structure claire, direction de contenu et plan technique." },
        { number: "03", title: "Construire", description: "Je développe le site adaptatif, affine l'interface et vous garde impliqué." },
        { number: "04", title: "Lancer", description: "Nous vérifions le résultat, faisons les derniers ajustements et préparons la mise en ligne." },
      ],
    },
    faq: {
      eyebrow: "Questions", title: "Avant de commencer.",
      items: [
        { question: "Quels types de sites construisez-vous ?", answer: "Sites professionnels, pages de destination, sites personnels, portfolios, expériences commerce en ligne et sites personnalisés pour les petits projets." },
        { question: "Travaillez-vous avec les petites entreprises ?", answer: "Oui. Restaurants, cafés, salons, boutiques, professionnels et autres petites entreprises sont précisément le type de projets sur lesquels je souhaite travailler." },
        { question: "Le site fonctionnera-t-il sur téléphone ?", answer: "Oui. Le responsive fait partie du développement, avec une expérience pensée pour les téléphones, tablettes et ordinateurs." },
        { question: "Comment commence un projet ?", answer: "Envoyez-moi votre idée, le contexte de votre activité ou projet et ce que vous avez déjà. Nous pouvons définir la prochaine étape à partir de ce premier échange." },
      ],
    },
    projectPage: { technologies: "Technologies" },
    footer: "Logiciel · Projets · Activité indépendante",
  },
} satisfies Record<LanguageCode, Omit<Translation, "projects">>;

export const translations = {
  en: { ...ui.en, projects: projectTranslations.en },
  "pt-PT": { ...ui["pt-PT"], projects: projectTranslations["pt-PT"] },
  es: { ...ui.es, projects: projectTranslations.es },
  "zh-CN": { ...ui["zh-CN"], projects: projectTranslations["zh-CN"] },
  fr: { ...ui.fr, projects: projectTranslations.fr },
} satisfies Record<LanguageCode, Translation>;

export function getProjectTranslation(
  language: LanguageCode,
  slug: string,
): ProjectTranslation {
  return translations[language].projects[slug] ?? translations.en.projects[slug];
}
