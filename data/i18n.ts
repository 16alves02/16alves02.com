export const languages = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "pt-PT", label: "Portuguese (Portugal)", nativeLabel: "Português (Portugal)" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "zh-CN", label: "Chinese", nativeLabel: "中文（简体）" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
  { code: "it", label: "Italian", nativeLabel: "Italiano" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  { code: "ko", label: "Korean", nativeLabel: "한국어" },
  { code: "pl", label: "Polish", nativeLabel: "Polski" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe" },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type Translation = {
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    start: string;
    language: string;
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
  };
  work: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    selected: string;
    selectedDescription: string;
    more: string;
    smaller: string;
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
    viewAll: string;
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
  projectPage: {
    technologies: string;
  };
  footer: string;
};

export const translations: Record<LanguageCode, Translation> = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact", start: "Start a project", language: "Language" },
    hero: {
      availability: "Open to selected website projects",
      title: "Software development student.",
      description: "Building websites, software projects and digital experiences while developing my professional path in software development.",
      work: "View my work",
      project: "Start a project",
      web: "Web",
      webDetail: "React, TypeScript, responsive interfaces",
      mobile: "Mobile",
      mobileDetail: "Kotlin, Android and practical apps",
      backend: "Backend",
      backendDetail: "PHP, REST APIs and MySQL",
    },
    work: {
      eyebrow: "Selected work",
      title: "Projects that show how I build.",
      titleAccent: "",
      description: "A mix of personal, academic and experimental software projects. No inflated metrics, just things I have actually built.",
      selected: "More projects",
      selectedDescription: "Smaller builds and fundamentals are part of the journey too.",
      more: "More work",
      smaller: "Smaller projects and fundamentals",
      all: "View all",
    },
    services: {
      eyebrow: "Freelance",
      title: "What I can build with you.",
      description: "Focused services for small projects, independent professionals and businesses that need something practical rather than over-engineered.",
      business: "Business websites",
      businessDescription: "Responsive websites for restaurants, coffee shops, salons, shops, professionals and small businesses.",
      landing: "Landing pages",
      landingDescription: "Focused pages for services, campaigns, products, portfolios and personal projects.",
      ecommerce: "E-commerce",
      ecommerceDescription: "Product-focused web experiences with clear browsing, responsive layouts and practical shopping flows.",
      custom: "Custom websites",
      customDescription: "Websites that need more than a standard template, including data, integrations and custom functionality.",
    },
    clients: {
      eyebrow: "Who I want to work with",
      title: "Real people, real businesses, real websites.",
      types: ["Restaurants", "Coffee shops", "Hair salons", "Local shops", "Small businesses", "Professionals", "Personal projects", "Tech teams"],
    },
    about: {
      eyebrow: "About",
      title: "Still learning. Already building.",
      body1: "I'm Leonardo, a Software Development student at the University of Aveiro and the person behind 16alves02. I'm building my professional path through personal, academic and experimental projects.",
      body2: "My course covers programming, web technologies, databases, software engineering, mobile development, interaction design and the development of complete software projects.",
      body3: "16alves02 is the public identity behind that work: a place for projects, experiments and the beginning of my freelance journey.",
      currently: "Currently building",
      development: "In development",
      saborDescription: "A management system for small bakeries and pastry shops, developed as an academic software project.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have something that needs building?",
      description: "Tell me what you are trying to build, what you already have and what the end result needs to look like. We can start from there.",
      conversation: "Start a conversation",
      github: "View GitHub",
    },
    common: {
      viewAll: "View all",
      viewProject: "View project",
      back: "Back to work",
      academic: "Academic project",
      type: "Type",
      status: "Status",
      period: "Period",
      preview: "Project preview",
      highlights: "Highlights",
      workedOn: "What I worked on",
      live: "Open live project",
      source: "View source",
      allProjects: "All projects",
    },
    workPage: {
      eyebrow: "01 / Work",
      title: "Projects, experiments",
      accent: "and things I've built.",
      description: "A collection of personal, academic and learning projects that document how I am developing my software skills.",
      moreEyebrow: "More work",
      moreTitle: "Smaller projects and fundamentals",
      nextStep: "Next step",
      nextTitle: "Looking for the GitHub source or a live project?",
    },
    projectPage: { technologies: "Technologies" },
    footer: "Software · Projects · Freelance",
  },
  "pt-PT": {
    nav: { work: "Projetos", services: "Serviços", about: "Sobre", contact: "Contacto", start: "Iniciar um projeto", language: "Idioma" },
    hero: {
      availability: "Disponível para projetos web selecionados",
      title: "Estudante de Desenvolvimento de Software.",
      description: "Crio websites, projetos de software e experiências digitais enquanto desenvolvo o meu percurso profissional em desenvolvimento de software.",
      work: "Ver os meus projetos",
      project: "Iniciar um projeto",
      web: "Web",
      webDetail: "React, TypeScript e interfaces responsivas",
      mobile: "Mobile",
      mobileDetail: "Kotlin, Android e aplicações práticas",
      backend: "Backend",
      backendDetail: "PHP, APIs REST e MySQL",
    },
    work: {
      eyebrow: "Projetos selecionados",
      title: "Projetos que mostram como desenvolvo.",
      titleAccent: "",
      description: "Uma mistura de projetos pessoais, académicos e experimentais. Sem métricas inventadas, apenas trabalho que construí.",
      selected: "Mais projetos",
      selectedDescription: "Projetos mais pequenos e fundamentos também fazem parte do percurso.",
      more: "Mais trabalho",
      smaller: "Projetos mais pequenos e fundamentos",
      all: "Ver todos",
    },
    services: {
      eyebrow: "Freelance",
      title: "O que posso construir contigo.",
      description: "Serviços focados para pequenos projetos, profissionais independentes e negócios que precisam de algo prático.",
      business: "Websites para negócios",
      businessDescription: "Websites responsivos para restaurantes, cafés, salões, lojas, profissionais e pequenos negócios.",
      landing: "Landing pages",
      landingDescription: "Páginas focadas em serviços, campanhas, produtos, portefólios e projetos pessoais.",
      ecommerce: "E-commerce",
      ecommerceDescription: "Experiências web orientadas para produtos, com navegação clara, layouts responsivos e processos de compra práticos.",
      custom: "Websites personalizados",
      customDescription: "Websites que precisam de mais do que um template, incluindo dados, integrações e funcionalidades personalizadas.",
    },
    clients: {
      eyebrow: "Com quem quero trabalhar",
      title: "Pessoas reais, negócios reais, websites reais.",
      types: ["Restaurantes", "Cafés", "Salões", "Lojas locais", "Pequenos negócios", "Profissionais", "Projetos pessoais", "Equipas de tecnologia"],
    },
    about: {
      eyebrow: "Sobre",
      title: "Ainda a aprender. Já a construir.",
      body1: "Sou o Leonardo, estudante de Desenvolvimento de Software na Universidade de Aveiro e a pessoa por detrás da 16alves02. Estou a construir o meu percurso profissional através de projetos pessoais, académicos e experimentais.",
      body2: "O meu curso abrange programação, tecnologias web, bases de dados, engenharia de software, desenvolvimento mobile, design de interação e desenvolvimento de projetos de software completos.",
      body3: "A 16alves02 é a identidade pública desse trabalho: um espaço para projetos, experiências e o início do meu percurso como freelancer.",
      currently: "A desenvolver atualmente",
      development: "Em desenvolvimento",
      saborDescription: "Um sistema de gestão para pequenas padarias e pastelarias, desenvolvido como projeto académico de software.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Tens algo que precisa de ser desenvolvido?",
      description: "Diz-me o que queres construir, o que já tens e como deve ser o resultado final. Podemos começar por aí.",
      conversation: "Iniciar conversa",
      github: "Ver GitHub",
    },
    common: {
      viewAll: "Ver todos",
      viewProject: "Ver projeto",
      back: "Voltar aos projetos",
      academic: "Projeto académico",
      type: "Tipo",
      status: "Estado",
      period: "Período",
      preview: "Pré-visualização",
      highlights: "Destaques",
      workedOn: "O que desenvolvi",
      live: "Abrir projeto",
      source: "Ver código",
      allProjects: "Todos os projetos",
    },
    workPage: {
      eyebrow: "01 / Projetos",
      title: "Projetos, experiências",
      accent: "e coisas que construí.",
      description: "Uma coleção de projetos pessoais, académicos e de aprendizagem que documentam o desenvolvimento das minhas competências.",
      moreEyebrow: "Mais trabalho",
      moreTitle: "Projetos mais pequenos e fundamentos",
      nextStep: "Próximo passo",
      nextTitle: "Procuras o código no GitHub ou um projeto online?",
    },
    projectPage: { technologies: "Tecnologias" },
    footer: "Software · Projetos · Freelance",
  },
  es: {
    nav: { work: "Proyectos", services: "Servicios", about: "Sobre mí", contact: "Contacto", start: "Iniciar un proyecto", language: "Idioma" },
    hero: { availability: "Disponible para proyectos web seleccionados", title: "Estudiante de Desarrollo de Software.", description: "Creo sitios web, proyectos de software y experiencias digitales mientras desarrollo mi trayectoria profesional.", work: "Ver mi trabajo", project: "Iniciar un proyecto", web: "Web", webDetail: "React, TypeScript e interfaces responsivas", mobile: "Móvil", mobileDetail: "Kotlin, Android y aplicaciones prácticas", backend: "Backend", backendDetail: "PHP, APIs REST y MySQL" },
    work: { eyebrow: "Proyectos seleccionados", title: "Proyectos que muestran cómo construyo.", titleAccent: "", description: "Una mezcla de proyectos personales, académicos y experimentales. Sin métricas infladas, solo cosas que realmente he construido.", selected: "Más proyectos", selectedDescription: "Los proyectos pequeños y los fundamentos también forman parte del camino.", more: "Más trabajo", smaller: "Proyectos pequeños y fundamentos", all: "Ver todos" },
    services: { eyebrow: "Freelance", title: "Lo que puedo construir contigo.", description: "Servicios para pequeños proyectos, profesionales independientes y negocios que necesitan algo práctico.", business: "Sitios web para negocios", businessDescription: "Sitios web responsivos para restaurantes, cafeterías, salones, tiendas, profesionales y pequeñas empresas.", landing: "Landing pages", landingDescription: "Páginas enfocadas en servicios, campañas, productos, portafolios y proyectos personales.", ecommerce: "E-commerce", ecommerceDescription: "Experiencias web centradas en productos, con navegación clara y procesos de compra prácticos.", custom: "Sitios web personalizados", customDescription: "Sitios que necesitan más que una plantilla, con datos, integraciones y funciones personalizadas." },
    clients: { eyebrow: "Con quién quiero trabajar", title: "Personas reales, negocios reales, sitios web reales.", types: ["Restaurantes", "Cafeterías", "Salones", "Tiendas locales", "Pequeñas empresas", "Profesionales", "Proyectos personales", "Equipos de tecnología"] },
    about: { eyebrow: "Sobre mí", title: "Sigo aprendiendo. Ya estoy construyendo.", body1: "Soy Leonardo, estudiante de Desarrollo de Software en la Universidad de Aveiro y la persona detrás de 16alves02. Estoy construyendo mi trayectoria mediante proyectos personales, académicos y experimentales.", body2: "Mi curso cubre programación, tecnologías web, bases de datos, ingeniería de software, desarrollo móvil, diseño de interacción y proyectos completos de software.", body3: "16alves02 es la identidad pública de ese trabajo: un espacio para proyectos, experimentos y el comienzo de mi camino freelance.", currently: "Desarrollando ahora", development: "En desarrollo", saborDescription: "Un sistema de gestión para pequeñas panaderías y pastelerías, desarrollado como proyecto académico de software." },
    contact: { eyebrow: "Contacto", title: "¿Tienes algo que necesite ser construido?", description: "Cuéntame qué quieres construir, qué tienes ya y cómo debe ser el resultado final. Podemos empezar desde ahí.", conversation: "Iniciar conversación", github: "Ver GitHub" },
    common: { viewAll: "Ver todos", viewProject: "Ver proyecto", back: "Volver al trabajo", academic: "Proyecto académico", type: "Tipo", status: "Estado", period: "Periodo", preview: "Vista previa", highlights: "Destacados", workedOn: "En qué trabajé", live: "Abrir proyecto", source: "Ver código", allProjects: "Todos los proyectos" },
    workPage: { eyebrow: "01 / Proyectos", title: "Proyectos, experimentos", accent: "y cosas que he construido.", description: "Una colección de proyectos personales, académicos y de aprendizaje que documentan cómo estoy desarrollando mis habilidades.", moreEyebrow: "Más trabajo", moreTitle: "Proyectos pequeños y fundamentos", nextStep: "Siguiente paso", nextTitle: "¿Buscas el código de GitHub o un proyecto online?" },
    projectPage: { technologies: "Tecnologías" },
    footer: "Software · Proyectos · Freelance",
  },
  fr: {
    nav: { work: "Projets", services: "Services", about: "À propos", contact: "Contact", start: "Démarrer un projet", language: "Langue" },
    hero: { availability: "Ouvert à certains projets web", title: "Étudiant en développement logiciel.", description: "Je crée des sites web, des projets logiciels et des expériences numériques tout en développant mon parcours professionnel.", work: "Voir mes projets", project: "Démarrer un projet", web: "Web", webDetail: "React, TypeScript et interfaces responsives", mobile: "Mobile", mobileDetail: "Kotlin, Android et applications pratiques", backend: "Backend", backendDetail: "PHP, API REST et MySQL" },
    work: { eyebrow: "Projets sélectionnés", title: "Des projets qui montrent ma façon de construire.", titleAccent: "", description: "Un mélange de projets personnels, académiques et expérimentaux. Pas de métriques gonflées, seulement ce que j'ai réellement construit.", selected: "Plus de projets", selectedDescription: "Les petits projets et les fondamentaux font aussi partie du parcours.", more: "Autres projets", smaller: "Petits projets et fondamentaux", all: "Tout voir" },
    services: { eyebrow: "Freelance", title: "Ce que je peux construire avec vous.", description: "Des services ciblés pour les petits projets, les indépendants et les entreprises qui ont besoin de quelque chose de pratique.", business: "Sites web professionnels", businessDescription: "Sites responsives pour restaurants, cafés, salons, boutiques, professionnels et petites entreprises.", landing: "Landing pages", landingDescription: "Pages dédiées aux services, campagnes, produits, portfolios et projets personnels.", ecommerce: "E-commerce", ecommerceDescription: "Expériences web orientées produits avec navigation claire et parcours d'achat pratiques.", custom: "Sites web personnalisés", customDescription: "Des sites qui vont au-delà d'un modèle standard, avec données, intégrations et fonctionnalités personnalisées." },
    clients: { eyebrow: "Avec qui je veux travailler", title: "De vraies personnes, de vraies entreprises, de vrais sites.", types: ["Restaurants", "Cafés", "Salons", "Commerces locaux", "Petites entreprises", "Professionnels", "Projets personnels", "Équipes tech"] },
    about: { eyebrow: "À propos", title: "J'apprends encore. Je construis déjà.", body1: "Je suis Leonardo, étudiant en développement logiciel à l'Université d'Aveiro et créateur de 16alves02. Je construis mon parcours grâce à des projets personnels, académiques et expérimentaux.", body2: "Ma formation couvre la programmation, les technologies web, les bases de données, le génie logiciel, le développement mobile, le design d'interaction et les projets logiciels complets.", body3: "16alves02 est l'identité publique de ce travail : un espace pour les projets, les expérimentations et le début de mon activité freelance.", currently: "En cours de développement", development: "En développement", saborDescription: "Un système de gestion pour petites boulangeries et pâtisseries, développé comme projet académique." },
    contact: { eyebrow: "Contact", title: "Vous avez quelque chose à construire ?", description: "Dites-moi ce que vous voulez construire, ce que vous avez déjà et à quoi le résultat final doit ressembler. Commençons par là.", conversation: "Démarrer une conversation", github: "Voir GitHub" },
    common: { viewAll: "Tout voir", viewProject: "Voir le projet", back: "Retour aux projets", academic: "Projet académique", type: "Type", status: "Statut", period: "Période", preview: "Aperçu du projet", highlights: "Points clés", workedOn: "Ce sur quoi j'ai travaillé", live: "Ouvrir le projet", source: "Voir le code", allProjects: "Tous les projets" },
    workPage: { eyebrow: "01 / Projets", title: "Projets, expériences", accent: "et réalisations.", description: "Une collection de projets personnels, académiques et d'apprentissage qui documentent le développement de mes compétences.", moreEyebrow: "Autres projets", moreTitle: "Petits projets et fondamentaux", nextStep: "Étape suivante", nextTitle: "Vous cherchez le code GitHub ou un projet en ligne ?" },
    projectPage: { technologies: "Technologies" },
    footer: "Logiciel · Projets · Freelance",
  },
  de: {
    nav: { work: "Projekte", services: "Services", about: "Über mich", contact: "Kontakt", start: "Projekt starten", language: "Sprache" },
    hero: { availability: "Offen für ausgewählte Webprojekte", title: "Student der Softwareentwicklung.", description: "Ich entwickle Websites, Softwareprojekte und digitale Erlebnisse und baue dabei meinen beruflichen Weg in der Softwareentwicklung auf.", work: "Meine Projekte", project: "Projekt starten", web: "Web", webDetail: "React, TypeScript und responsive Interfaces", mobile: "Mobile", mobileDetail: "Kotlin, Android und praktische Apps", backend: "Backend", backendDetail: "PHP, REST-APIs und MySQL" },
    work: { eyebrow: "Ausgewählte Projekte", title: "Projekte, die zeigen, wie ich entwickle.", titleAccent: "", description: "Eine Mischung aus persönlichen, akademischen und experimentellen Softwareprojekten. Keine aufgeblähten Zahlen, nur echte Projekte.", selected: "Weitere Projekte", selectedDescription: "Auch kleinere Projekte und Grundlagen gehören zum Weg dazu.", more: "Weitere Arbeiten", smaller: "Kleinere Projekte und Grundlagen", all: "Alle ansehen" },
    services: { eyebrow: "Freelance", title: "Was ich mit dir bauen kann.", description: "Fokussierte Services für kleine Projekte, Selbstständige und Unternehmen, die etwas Praktisches benötigen.", business: "Business-Websites", businessDescription: "Responsive Websites für Restaurants, Cafés, Salons, Geschäfte, Fachleute und kleine Unternehmen.", landing: "Landingpages", landingDescription: "Fokussierte Seiten für Services, Kampagnen, Produkte, Portfolios und persönliche Projekte.", ecommerce: "E-Commerce", ecommerceDescription: "Produktorientierte Web-Erlebnisse mit klarer Navigation und praktischen Kaufabläufen.", custom: "Individuelle Websites", customDescription: "Websites, die mehr als ein Standard-Template benötigen, inklusive Daten, Integrationen und individueller Funktionen." },
    clients: { eyebrow: "Mit wem ich arbeiten möchte", title: "Echte Menschen, echte Unternehmen, echte Websites.", types: ["Restaurants", "Cafés", "Salons", "Lokale Geschäfte", "Kleine Unternehmen", "Fachleute", "Persönliche Projekte", "Tech-Teams"] },
    about: { eyebrow: "Über mich", title: "Ich lerne noch. Ich baue schon.", body1: "Ich bin Leonardo, Student der Softwareentwicklung an der Universität Aveiro und die Person hinter 16alves02. Ich entwickle meinen beruflichen Weg durch persönliche, akademische und experimentelle Projekte.", body2: "Mein Studium umfasst Programmierung, Webtechnologien, Datenbanken, Software Engineering, Mobile Development, Interaktionsdesign und vollständige Softwareprojekte.", body3: "16alves02 ist die öffentliche Identität dahinter: ein Ort für Projekte, Experimente und den Beginn meiner Freelance-Laufbahn.", currently: "Aktuell in Entwicklung", development: "In Entwicklung", saborDescription: "Ein Managementsystem für kleine Bäckereien und Konditoreien, entwickelt als akademisches Softwareprojekt." },
    contact: { eyebrow: "Kontakt", title: "Du hast etwas, das gebaut werden muss?", description: "Erzähl mir, was du bauen möchtest, was bereits vorhanden ist und wie das Ergebnis aussehen soll. Wir können dort anfangen.", conversation: "Gespräch starten", github: "GitHub ansehen" },
    common: { viewAll: "Alle ansehen", viewProject: "Projekt ansehen", back: "Zurück zu den Projekten", academic: "Akademisches Projekt", type: "Typ", status: "Status", period: "Zeitraum", preview: "Projektvorschau", highlights: "Highlights", workedOn: "Woran ich gearbeitet habe", live: "Live-Projekt öffnen", source: "Quellcode ansehen", allProjects: "Alle Projekte" },
    workPage: { eyebrow: "01 / Projekte", title: "Projekte, Experimente", accent: "und Dinge, die ich gebaut habe.", description: "Eine Sammlung persönlicher, akademischer und Lernprojekte, die meine Entwicklung dokumentieren.", moreEyebrow: "Weitere Arbeiten", moreTitle: "Kleinere Projekte und Grundlagen", nextStep: "Nächster Schritt", nextTitle: "Suchst du den GitHub-Code oder ein Live-Projekt?" },
    projectPage: { technologies: "Technologien" },
    footer: "Software · Projekte · Freelance",
  },
  it: {
    nav: { work: "Progetti", services: "Servizi", about: "Chi sono", contact: "Contatti", start: "Inizia un progetto", language: "Lingua" },
    hero: { availability: "Disponibile per progetti web selezionati", title: "Studente di sviluppo software.", description: "Creo siti web, progetti software ed esperienze digitali mentre costruisco il mio percorso professionale.", work: "Vedi i miei progetti", project: "Inizia un progetto", web: "Web", webDetail: "React, TypeScript e interfacce responsive", mobile: "Mobile", mobileDetail: "Kotlin, Android e app pratiche", backend: "Backend", backendDetail: "PHP, API REST e MySQL" },
    work: { eyebrow: "Progetti selezionati", title: "Progetti che mostrano come costruisco.", titleAccent: "", description: "Un mix di progetti personali, accademici e sperimentali. Nessuna metrica gonfiata, solo ciò che ho realmente costruito.", selected: "Altri progetti", selectedDescription: "Anche i progetti più piccoli e le basi fanno parte del percorso.", more: "Altri lavori", smaller: "Progetti più piccoli e fondamentali", all: "Vedi tutti" },
    services: { eyebrow: "Freelance", title: "Cosa posso costruire con te.", description: "Servizi mirati per piccoli progetti, professionisti indipendenti e attività che hanno bisogno di qualcosa di pratico.", business: "Siti web per aziende", businessDescription: "Siti responsive per ristoranti, caffè, saloni, negozi, professionisti e piccole imprese.", landing: "Landing page", landingDescription: "Pagine mirate per servizi, campagne, prodotti, portfolio e progetti personali.", ecommerce: "E-commerce", ecommerceDescription: "Esperienze web orientate ai prodotti con navigazione chiara e processi di acquisto pratici.", custom: "Siti web personalizzati", customDescription: "Siti che richiedono più di un template standard, con dati, integrazioni e funzionalità personalizzate." },
    clients: { eyebrow: "Con chi voglio lavorare", title: "Persone vere, attività vere, siti web veri.", types: ["Ristoranti", "Caffè", "Saloni", "Negozi locali", "Piccole imprese", "Professionisti", "Progetti personali", "Team tecnologici"] },
    about: { eyebrow: "Chi sono", title: "Sto ancora imparando. Sto già costruendo.", body1: "Sono Leonardo, studente di sviluppo software all'Università di Aveiro e la persona dietro 16alves02. Sto costruendo il mio percorso attraverso progetti personali, accademici e sperimentali.", body2: "Il mio corso comprende programmazione, tecnologie web, database, ingegneria del software, sviluppo mobile, design dell'interazione e progetti software completi.", body3: "16alves02 è l'identità pubblica di questo lavoro: uno spazio per progetti, esperimenti e l'inizio del mio percorso freelance.", currently: "Attualmente in sviluppo", development: "In sviluppo", saborDescription: "Un sistema gestionale per piccole panetterie e pasticcerie, sviluppato come progetto accademico." },
    contact: { eyebrow: "Contatti", title: "Hai qualcosa che deve essere costruito?", description: "Raccontami cosa vuoi costruire, cosa hai già e come dovrebbe essere il risultato finale. Possiamo partire da lì.", conversation: "Inizia una conversazione", github: "Vedi GitHub" },
    common: { viewAll: "Vedi tutti", viewProject: "Vedi progetto", back: "Torna ai progetti", academic: "Progetto accademico", type: "Tipo", status: "Stato", period: "Periodo", preview: "Anteprima del progetto", highlights: "Punti chiave", workedOn: "Su cosa ho lavorato", live: "Apri progetto", source: "Vedi codice", allProjects: "Tutti i progetti" },
    workPage: { eyebrow: "01 / Progetti", title: "Progetti, esperimenti", accent: "e cose che ho costruito.", description: "Una raccolta di progetti personali, accademici e di apprendimento che documentano lo sviluppo delle mie competenze.", moreEyebrow: "Altri lavori", moreTitle: "Progetti più piccoli e fondamentali", nextStep: "Prossimo passo", nextTitle: "Cerchi il codice GitHub o un progetto online?" },
    projectPage: { technologies: "Tecnologie" },
    footer: "Software · Progetti · Freelance",
  },
  ja: {
    nav: { work: "プロジェクト", services: "サービス", about: "概要", contact: "連絡先", start: "プロジェクトを始める", language: "言語" },
    hero: { availability: "選択したWebプロジェクトを受付中", title: "ソフトウェア開発を学ぶ学生です。", description: "Webサイト、ソフトウェアプロジェクト、デジタル体験を制作しながら、ソフトウェア開発者としての道を築いています。", work: "制作実績を見る", project: "プロジェクトを始める", web: "Web", webDetail: "React、TypeScript、レスポンシブUI", mobile: "モバイル", mobileDetail: "Kotlin、Android、実用的なアプリ", backend: "バックエンド", backendDetail: "PHP、REST API、MySQL" },
    work: { eyebrow: "代表的な制作", title: "作り方がわかるプロジェクト。", titleAccent: "", description: "個人、学術、実験的なソフトウェアプロジェクトを掲載しています。実際に制作したものだけを紹介します。", selected: "その他のプロジェクト", selectedDescription: "小さな制作や基礎学習も成長の一部です。", more: "その他の制作", smaller: "小規模プロジェクトと基礎", all: "すべて見る" },
    services: { eyebrow: "フリーランス", title: "一緒に作れるもの。", description: "小規模プロジェクト、個人事業者、実用的なWebサイトを必要とする企業向けのサービスです。", business: "ビジネスWebサイト", businessDescription: "レストラン、カフェ、サロン、ショップ、専門家、中小企業向けのレスポンシブWebサイト。", landing: "ランディングページ", landingDescription: "サービス、キャンペーン、商品、ポートフォリオ、個人プロジェクト向けのページ。", ecommerce: "Eコマース", ecommerceDescription: "明確な商品閲覧と実用的な購入フローを備えたWeb体験。", custom: "カスタムWebサイト", customDescription: "データ、連携、独自機能を含む、テンプレート以上のWebサイト。" },
    clients: { eyebrow: "一緒に仕事をしたい相手", title: "人、ビジネス、Webサイトをリアルに。", types: ["レストラン", "カフェ", "サロン", "地域のショップ", "中小企業", "専門家", "個人プロジェクト", "テックチーム"] },
    about: { eyebrow: "概要", title: "まだ学んでいる。でも、もう作っています。", body1: "Leonardoです。アヴェイロ大学でソフトウェア開発を学び、16alves02として活動しています。個人、学術、実験的なプロジェクトを通して自分のキャリアを築いています。", body2: "プログラミング、Web技術、データベース、ソフトウェア工学、モバイル開発、インタラクションデザイン、完全なソフトウェアプロジェクトを学んでいます。", body3: "16alves02はその活動をまとめる公開ブランドであり、プロジェクト、実験、フリーランスへの第一歩を紹介する場所です。", currently: "現在制作中", development: "開発中", saborDescription: "小規模なパン屋・菓子店向けの管理システム。学術プロジェクトとして開発しています。" },
    contact: { eyebrow: "連絡先", title: "作ってほしいものがありますか？", description: "作りたいもの、すでにあるもの、最終的な形を教えてください。そこから始めましょう。", conversation: "相談を始める", github: "GitHubを見る" },
    common: { viewAll: "すべて見る", viewProject: "プロジェクトを見る", back: "プロジェクトに戻る", academic: "学術プロジェクト", type: "種類", status: "ステータス", period: "期間", preview: "プロジェクトプレビュー", highlights: "ポイント", workedOn: "取り組んだ内容", live: "公開版を開く", source: "ソースを見る", allProjects: "すべてのプロジェクト" },
    workPage: { eyebrow: "01 / プロジェクト", title: "プロジェクト、実験", accent: "そして作ってきたもの。", description: "個人、学術、学習プロジェクトを通して、ソフトウェアスキルの成長を紹介します。", moreEyebrow: "その他の制作", moreTitle: "小規模プロジェクトと基礎", nextStep: "次のステップ", nextTitle: "GitHubのソースや公開プロジェクトを探していますか？" },
    projectPage: { technologies: "技術" },
    footer: "ソフトウェア · プロジェクト · フリーランス",
  },
  ko: {
    nav: { work: "프로젝트", services: "서비스", about: "소개", contact: "연락처", start: "프로젝트 시작", language: "언어" },
    hero: { availability: "선별된 웹 프로젝트를 받고 있습니다", title: "소프트웨어 개발을 공부하는 학생입니다.", description: "웹사이트, 소프트웨어 프로젝트, 디지털 경험을 만들며 소프트웨어 개발 분야의 경력을 쌓고 있습니다.", work: "작업 보기", project: "프로젝트 시작", web: "웹", webDetail: "React, TypeScript, 반응형 인터페이스", mobile: "모바일", mobileDetail: "Kotlin, Android, 실용적인 앱", backend: "백엔드", backendDetail: "PHP, REST API, MySQL" },
    work: { eyebrow: "주요 작업", title: "제가 어떻게 만드는지 보여주는 프로젝트.", titleAccent: "", description: "개인, 학업, 실험 프로젝트를 함께 소개합니다. 실제로 만든 작업만 보여드립니다.", selected: "더 많은 프로젝트", selectedDescription: "작은 프로젝트와 기초 학습도 성장 과정의 일부입니다.", more: "더 많은 작업", smaller: "작은 프로젝트와 기초", all: "모두 보기" },
    services: { eyebrow: "프리랜스", title: "함께 만들 수 있는 것.", description: "소규모 프로젝트, 개인 사업자와 실용적인 웹사이트가 필요한 비즈니스를 위한 서비스입니다.", business: "비즈니스 웹사이트", businessDescription: "레스토랑, 카페, 미용실, 상점, 전문가 및 소규모 비즈니스를 위한 반응형 웹사이트.", landing: "랜딩 페이지", landingDescription: "서비스, 캠페인, 제품, 포트폴리오 및 개인 프로젝트를 위한 집중형 페이지.", ecommerce: "전자상거래", ecommerceDescription: "명확한 탐색과 실용적인 구매 흐름을 갖춘 제품 중심의 웹 경험.", custom: "맞춤형 웹사이트", customDescription: "데이터, 통합 및 맞춤 기능을 포함해 일반 템플릿 이상의 웹사이트." },
    clients: { eyebrow: "함께 일하고 싶은 대상", title: "실제 사람, 실제 비즈니스, 실제 웹사이트.", types: ["레스토랑", "카페", "미용실", "지역 상점", "소규모 비즈니스", "전문가", "개인 프로젝트", "테크 팀"] },
    about: { eyebrow: "소개", title: "아직 배우고 있습니다. 하지만 이미 만들고 있습니다.", body1: "저는 Leonardo이며 Aveiro 대학교에서 소프트웨어 개발을 공부하고 16alves02로 활동하고 있습니다. 개인, 학업, 실험 프로젝트를 통해 경력을 만들어가고 있습니다.", body2: "제 과정에서는 프로그래밍, 웹 기술, 데이터베이스, 소프트웨어 공학, 모바일 개발, 인터랙션 디자인과 전체 소프트웨어 프로젝트를 다룹니다.", body3: "16alves02는 이러한 작업을 위한 공개 브랜드이며 프로젝트, 실험, 프리랜스 여정의 시작을 담고 있습니다.", currently: "현재 개발 중", development: "개발 중", saborDescription: "소규모 베이커리와 제과점을 위한 관리 시스템으로, 학업 프로젝트로 개발 중입니다." },
    contact: { eyebrow: "연락처", title: "만들어야 할 것이 있나요?", description: "무엇을 만들고 싶은지, 이미 가지고 있는 것과 최종 결과의 모습을 알려주세요. 거기서 시작하겠습니다.", conversation: "대화 시작", github: "GitHub 보기" },
    common: { viewAll: "모두 보기", viewProject: "프로젝트 보기", back: "프로젝트로 돌아가기", academic: "학업 프로젝트", type: "유형", status: "상태", period: "기간", preview: "프로젝트 미리보기", highlights: "주요 내용", workedOn: "작업한 내용", live: "라이브 프로젝트 열기", source: "소스 보기", allProjects: "모든 프로젝트" },
    workPage: { eyebrow: "01 / 프로젝트", title: "프로젝트, 실험", accent: "그리고 제가 만든 것들.", description: "개인, 학업 및 학습 프로젝트를 통해 소프트웨어 역량의 성장을 보여드립니다.", moreEyebrow: "더 많은 작업", moreTitle: "작은 프로젝트와 기초", nextStep: "다음 단계", nextTitle: "GitHub 소스나 라이브 프로젝트를 찾고 있나요?" },
    projectPage: { technologies: "기술" },
    footer: "소프트웨어 · 프로젝트 · 프리랜스",
  },
  "zh-CN": {
    nav: { work: "项目", services: "服务", about: "关于", contact: "联系", start: "开始项目", language: "语言" },
    hero: { availability: "接受精选网站项目", title: "软件开发专业学生。", description: "我正在制作网站、软件项目和数字体验，同时逐步建立自己的软件开发职业道路。", work: "查看我的项目", project: "开始一个项目", web: "Web", webDetail: "React、TypeScript、响应式界面", mobile: "移动端", mobileDetail: "Kotlin、Android 和实用应用", backend: "后端", backendDetail: "PHP、REST API 和 MySQL" },
    work: { eyebrow: "精选项目", title: "展示我开发方式的项目。", titleAccent: "", description: "这里有个人、学术和实验性软件项目。没有夸大的数据，只有我真正做过的东西。", selected: "更多项目", selectedDescription: "小型项目和基础练习同样是成长的一部分。", more: "更多作品", smaller: "小型项目与基础练习", all: "查看全部" },
    services: { eyebrow: "自由职业", title: "我可以和你一起构建什么。", description: "面向小型项目、独立专业人士和需要实用网站的企业的服务。", business: "企业网站", businessDescription: "为餐厅、咖啡馆、美容院、商店、专业人士和小型企业提供响应式网站。", landing: "落地页", landingDescription: "用于服务、活动、产品、作品集和个人项目的专注型页面。", ecommerce: "电子商务", ecommerceDescription: "以产品为核心，提供清晰浏览、响应式布局和实用购买流程的网页体验。", custom: "定制网站", customDescription: "不仅是标准模板，还包括数据、集成和定制功能的网站。" },
    clients: { eyebrow: "我希望合作的对象", title: "真实的人，真实的企业，真实的网站。", types: ["餐厅", "咖啡馆", "美容院", "本地商店", "小型企业", "专业人士", "个人项目", "技术团队"] },
    about: { eyebrow: "关于我", title: "仍在学习，也已经在构建。", body1: "我是 Leonardo，在阿威罗大学学习软件开发，也是 16alves02 的创建者。我通过个人、学术和实验项目建立自己的职业道路。", body2: "我的课程涵盖编程、Web 技术、数据库、软件工程、移动开发、交互设计和完整的软件项目开发。", body3: "16alves02 是这些工作的公开品牌，用于展示项目、实验以及我自由职业道路的开始。", currently: "当前项目", development: "开发中", saborDescription: "面向小型面包店和糕点店的管理系统，作为学术软件项目开发。" },
    contact: { eyebrow: "联系", title: "有需要构建的东西吗？", description: "告诉我你想做什么、已经有什么，以及最终效果应该是什么样。我们可以从这里开始。", conversation: "开始交流", github: "查看 GitHub" },
    common: { viewAll: "查看全部", viewProject: "查看项目", back: "返回项目", academic: "学术项目", type: "类型", status: "状态", period: "时间", preview: "项目预览", highlights: "重点", workedOn: "我的工作内容", live: "打开在线项目", source: "查看源码", allProjects: "全部项目" },
    workPage: { eyebrow: "01 / 项目", title: "项目、实验", accent: "以及我构建的东西。", description: "通过个人、学术和学习项目记录我的软件技能成长。", moreEyebrow: "更多作品", moreTitle: "小型项目与基础", nextStep: "下一步", nextTitle: "想查看 GitHub 源码或在线项目吗？" },
    projectPage: { technologies: "技术" },
    footer: "软件 · 项目 · 自由职业",
  },
  hi: {
    nav: { work: "प्रोजेक्ट्स", services: "सेवाएँ", about: "मेरे बारे में", contact: "संपर्क", start: "प्रोजेक्ट शुरू करें", language: "भाषा" },
    hero: { availability: "चयनित वेबसाइट प्रोजेक्ट्स के लिए उपलब्ध", title: "सॉफ्टवेयर डेवलपमेंट का छात्र।", description: "मैं वेबसाइट, सॉफ्टवेयर प्रोजेक्ट और डिजिटल अनुभव बनाते हुए सॉफ्टवेयर डेवलपमेंट में अपना पेशेवर सफर बना रहा हूँ।", work: "मेरा काम देखें", project: "प्रोजेक्ट शुरू करें", web: "वेब", webDetail: "React, TypeScript और responsive interfaces", mobile: "मोबाइल", mobileDetail: "Kotlin, Android और practical apps", backend: "बैकएंड", backendDetail: "PHP, REST APIs और MySQL" },
    work: { eyebrow: "चयनित प्रोजेक्ट्स", title: "वे प्रोजेक्ट जो बताते हैं कि मैं कैसे बनाता हूँ।", titleAccent: "", description: "व्यक्तिगत, शैक्षणिक और प्रयोगात्मक सॉफ्टवेयर प्रोजेक्ट्स का मिश्रण। कोई बढ़ा-चढ़ाकर बताए गए आँकड़े नहीं, सिर्फ वास्तविक काम।", selected: "और प्रोजेक्ट्स", selectedDescription: "छोटे प्रोजेक्ट और बुनियादी अभ्यास भी सफर का हिस्सा हैं।", more: "और काम", smaller: "छोटे प्रोजेक्ट्स और आधारभूत कार्य", all: "सभी देखें" },
    services: { eyebrow: "फ्रीलांस", title: "मैं आपके साथ क्या बना सकता हूँ।", description: "छोटे प्रोजेक्ट्स, स्वतंत्र पेशेवरों और व्यावहारिक वेबसाइटों की जरूरत वाले व्यवसायों के लिए सेवाएँ।", business: "बिज़नेस वेबसाइट्स", businessDescription: "रेस्तराँ, कैफ़े, सैलून, दुकानों, पेशेवरों और छोटे व्यवसायों के लिए responsive websites।", landing: "लैंडिंग पेज", landingDescription: "सेवाओं, अभियानों, उत्पादों, पोर्टफोलियो और व्यक्तिगत प्रोजेक्ट्स के लिए केंद्रित पेज।", ecommerce: "ई-कॉमर्स", ecommerceDescription: "स्पष्ट ब्राउज़िंग और व्यावहारिक खरीद प्रक्रिया वाली product-focused web experiences।", custom: "कस्टम वेबसाइट्स", customDescription: "डेटा, इंटीग्रेशन और कस्टम सुविधाओं वाली वेबसाइटें।" },
    clients: { eyebrow: "मैं किनके साथ काम करना चाहता हूँ", title: "असली लोग, असली व्यवसाय, असली वेबसाइट्स।", types: ["रेस्तराँ", "कैफ़े", "सैलून", "स्थानीय दुकानें", "छोटे व्यवसाय", "पेशेवर", "व्यक्तिगत प्रोजेक्ट", "टेक टीम"] },
    about: { eyebrow: "मेरे बारे में", title: "अभी भी सीख रहा हूँ। पहले से बना रहा हूँ।", body1: "मैं Leonardo हूँ, University of Aveiro में Software Development का छात्र और 16alves02 के पीछे का व्यक्ति। मैं व्यक्तिगत, शैक्षणिक और प्रयोगात्मक प्रोजेक्ट्स के माध्यम से अपना पेशेवर रास्ता बना रहा हूँ।", body2: "मेरे कोर्स में प्रोग्रामिंग, वेब टेक्नोलॉजी, डेटाबेस, सॉफ्टवेयर इंजीनियरिंग, मोबाइल डेवलपमेंट, इंटरैक्शन डिज़ाइन और पूर्ण सॉफ्टवेयर प्रोजेक्ट्स शामिल हैं।", body3: "16alves02 इस काम की सार्वजनिक पहचान है: प्रोजेक्ट्स, प्रयोगों और मेरी फ्रीलांस यात्रा की शुरुआत के लिए एक जगह।", currently: "वर्तमान में बना रहा हूँ", development: "विकास में", saborDescription: "छोटी बेकरी और पेस्ट्री दुकानों के लिए प्रबंधन प्रणाली, एक अकादमिक सॉफ्टवेयर प्रोजेक्ट के रूप में विकसित।" },
    contact: { eyebrow: "संपर्क", title: "क्या कुछ ऐसा है जिसे बनाने की जरूरत है?", description: "बताइए कि आप क्या बनाना चाहते हैं, आपके पास अभी क्या है और अंतिम परिणाम कैसा होना चाहिए। हम वहीं से शुरू कर सकते हैं।", conversation: "बातचीत शुरू करें", github: "GitHub देखें" },
    common: { viewAll: "सभी देखें", viewProject: "प्रोजेक्ट देखें", back: "प्रोजेक्ट्स पर वापस", academic: "शैक्षणिक प्रोजेक्ट", type: "प्रकार", status: "स्थिति", period: "अवधि", preview: "प्रोजेक्ट प्रीव्यू", highlights: "मुख्य बातें", workedOn: "मैंने किस पर काम किया", live: "लाइव प्रोजेक्ट खोलें", source: "सोर्स देखें", allProjects: "सभी प्रोजेक्ट्स" },
    workPage: { eyebrow: "01 / प्रोजेक्ट्स", title: "प्रोजेक्ट्स, प्रयोग", accent: "और वे चीज़ें जो मैंने बनाई हैं।", description: "व्यक्तिगत, शैक्षणिक और सीखने के प्रोजेक्ट्स का संग्रह जो मेरी सॉफ्टवेयर कौशल यात्रा को दिखाता है।", moreEyebrow: "और काम", moreTitle: "छोटे प्रोजेक्ट्स और बुनियादी कार्य", nextStep: "अगला कदम", nextTitle: "क्या आप GitHub source या live project ढूँढ रहे हैं?" },
    projectPage: { technologies: "टेक्नोलॉजीज़" },
    footer: "सॉफ्टवेयर · प्रोजेक्ट्स · फ्रीलांस",
  },
  ar: {
    nav: { work: "المشاريع", services: "الخدمات", about: "نبذة", contact: "تواصل", start: "ابدأ مشروعًا", language: "اللغة" },
    hero: { availability: "متاح لمشاريع مواقع مختارة", title: "طالب في تطوير البرمجيات.", description: "أبني مواقع الويب ومشاريع البرمجيات والتجارب الرقمية بينما أطور مساري المهني في تطوير البرمجيات.", work: "شاهد أعمالي", project: "ابدأ مشروعًا", web: "ويب", webDetail: "React وTypeScript وواجهات متجاوبة", mobile: "جوال", mobileDetail: "Kotlin وAndroid وتطبيقات عملية", backend: "خلفية", backendDetail: "PHP وREST APIs وMySQL" },
    work: { eyebrow: "أعمال مختارة", title: "مشاريع توضح كيف أبني.", titleAccent: "", description: "مزيج من المشاريع الشخصية والأكاديمية والتجريبية. دون أرقام مبالغ فيها، فقط ما بنيته فعليًا.", selected: "المزيد من المشاريع", selectedDescription: "المشاريع الصغيرة والأساسيات جزء من الرحلة أيضًا.", more: "المزيد من الأعمال", smaller: "مشاريع أصغر وأساسيات", all: "عرض الكل" },
    services: { eyebrow: "عمل حر", title: "ما يمكنني بناؤه معك.", description: "خدمات مركزة للمشاريع الصغيرة والمهنيين المستقلين والأعمال التي تحتاج إلى حل عملي.", business: "مواقع أعمال", businessDescription: "مواقع متجاوبة للمطاعم والمقاهي والصالونات والمتاجر والمهنيين والشركات الصغيرة.", landing: "صفحات هبوط", landingDescription: "صفحات مركزة للخدمات والحملات والمنتجات والحقائب الشخصية والمشاريع الشخصية.", ecommerce: "التجارة الإلكترونية", ecommerceDescription: "تجارب ويب موجهة للمنتجات مع تصفح واضح وتدفقات شراء عملية.", custom: "مواقع مخصصة", customDescription: "مواقع تتجاوز القوالب القياسية مع البيانات والتكاملات والوظائف المخصصة." },
    clients: { eyebrow: "من أريد العمل معهم", title: "أشخاص حقيقيون، أعمال حقيقية، مواقع حقيقية.", types: ["مطاعم", "مقاهٍ", "صالونات", "متاجر محلية", "شركات صغيرة", "مهنيون", "مشاريع شخصية", "فرق تقنية"] },
    about: { eyebrow: "نبذة", title: "ما زلت أتعلم. وقد بدأت بالفعل في البناء.", body1: "أنا ليوناردو، طالب في تطوير البرمجيات بجامعة أفيرو، والشخص وراء 16alves02. أبني مساري المهني من خلال مشاريع شخصية وأكاديمية وتجريبية.", body2: "يغطي تخصصي البرمجة وتقنيات الويب وقواعد البيانات وهندسة البرمجيات وتطوير الجوال وتصميم التفاعل وتطوير مشاريع برمجية كاملة.", body3: "16alves02 هي الهوية العامة لهذا العمل: مساحة للمشاريع والتجارب وبداية رحلتي في العمل الحر.", currently: "أعمل عليه حاليًا", development: "قيد التطوير", saborDescription: "نظام إدارة للمخابز ومحلات الحلويات الصغيرة، مطور كمشروع برمجي أكاديمي." },
    contact: { eyebrow: "تواصل", title: "هل لديك شيء يحتاج إلى البناء؟", description: "أخبرني بما تريد بناءه، وما لديك بالفعل، وكيف تريد أن تكون النتيجة النهائية. يمكننا البدء من هنا.", conversation: "ابدأ محادثة", github: "عرض GitHub" },
    common: { viewAll: "عرض الكل", viewProject: "عرض المشروع", back: "العودة إلى المشاريع", academic: "مشروع أكاديمي", type: "النوع", status: "الحالة", period: "الفترة", preview: "معاينة المشروع", highlights: "أبرز النقاط", workedOn: "ما عملت عليه", live: "فتح المشروع", source: "عرض المصدر", allProjects: "كل المشاريع" },
    workPage: { eyebrow: "01 / المشاريع", title: "مشاريع وتجارب", accent: "وأشياء بنيتها.", description: "مجموعة من المشاريع الشخصية والأكاديمية والتعليمية التي توثق تطور مهاراتي في البرمجيات.", moreEyebrow: "المزيد من الأعمال", moreTitle: "مشاريع أصغر وأساسيات", nextStep: "الخطوة التالية", nextTitle: "هل تبحث عن مصدر GitHub أو مشروع مباشر؟" },
    projectPage: { technologies: "التقنيات" },
    footer: "برمجيات · مشاريع · عمل حر",
  },
  pl: {
    nav: { work: "Projekty", services: "Usługi", about: "O mnie", contact: "Kontakt", start: "Rozpocznij projekt", language: "Język" },
    hero: { availability: "Otwarte na wybrane projekty stron internetowych", title: "Student programowania.", description: "Tworzę strony internetowe, projekty oprogramowania i doświadczenia cyfrowe, rozwijając swoją ścieżkę zawodową w branży IT.", work: "Zobacz moje projekty", project: "Rozpocznij projekt", web: "Web", webDetail: "React, TypeScript i responsywne interfejsy", mobile: "Mobile", mobileDetail: "Kotlin, Android i praktyczne aplikacje", backend: "Backend", backendDetail: "PHP, REST API i MySQL" },
    work: { eyebrow: "Wybrane projekty", title: "Projekty, które pokazują, jak tworzę.", titleAccent: "", description: "Połączenie projektów osobistych, akademickich i eksperymentalnych. Bez zawyżonych statystyk, tylko to, co naprawdę stworzyłem.", selected: "Więcej projektów", selectedDescription: "Mniejsze projekty i podstawy również są częścią tej drogi.", more: "Więcej prac", smaller: "Mniejsze projekty i podstawy", all: "Zobacz wszystkie" },
    services: { eyebrow: "Freelance", title: "Co mogę stworzyć razem z Tobą.", description: "Usługi dla małych projektów, niezależnych specjalistów i firm, które potrzebują praktycznego rozwiązania.", business: "Strony firmowe", businessDescription: "Responsywne strony dla restauracji, kawiarni, salonów, sklepów, specjalistów i małych firm.", landing: "Landing pages", landingDescription: "Skupione strony dla usług, kampanii, produktów, portfolio i projektów osobistych.", ecommerce: "E-commerce", ecommerceDescription: "Doświadczenia zakupowe z czytelną nawigacją i praktycznym procesem zakupowym.", custom: "Indywidualne strony", customDescription: "Strony wykraczające poza standardowy szablon, z danymi, integracjami i własnymi funkcjami." },
    clients: { eyebrow: "Z kim chcę pracować", title: "Prawdziwi ludzie, prawdziwe firmy, prawdziwe strony.", types: ["Restauracje", "Kawiarnie", "Salony", "Lokalne sklepy", "Małe firmy", "Specjaliści", "Projekty osobiste", "Zespoły technologiczne"] },
    about: { eyebrow: "O mnie", title: "Wciąż się uczę. Już tworzę.", body1: "Jestem Leonardo, studentem programowania na Uniwersytecie w Aveiro i osobą stojącą za 16alves02. Buduję swoją ścieżkę zawodową poprzez projekty osobiste, akademickie i eksperymentalne.", body2: "Mój kierunek obejmuje programowanie, technologie internetowe, bazy danych, inżynierię oprogramowania, rozwój mobilny, projektowanie interakcji i kompletne projekty programistyczne.", body3: "16alves02 to publiczna marka tych działań: miejsce na projekty, eksperymenty i początek mojej drogi freelance.", currently: "Obecnie tworzę", development: "W trakcie rozwoju", saborDescription: "System zarządzania dla małych piekarni i cukierni, rozwijany jako akademicki projekt programistyczny." },
    contact: { eyebrow: "Kontakt", title: "Masz coś, co trzeba zbudować?", description: "Opowiedz mi, co chcesz stworzyć, co już masz i jak powinien wyglądać efekt końcowy. Możemy zacząć od tego.", conversation: "Rozpocznij rozmowę", github: "Zobacz GitHub" },
    common: { viewAll: "Zobacz wszystkie", viewProject: "Zobacz projekt", back: "Wróć do projektów", academic: "Projekt akademicki", type: "Typ", status: "Status", period: "Okres", preview: "Podgląd projektu", highlights: "Najważniejsze", workedOn: "Nad czym pracowałem", live: "Otwórz projekt online", source: "Zobacz kod", allProjects: "Wszystkie projekty" },
    workPage: { eyebrow: "01 / Projekty", title: "Projekty, eksperymenty", accent: "i rzeczy, które stworzyłem.", description: "Zbiór projektów osobistych, akademickich i edukacyjnych pokazujących rozwój moich umiejętności.", moreEyebrow: "Więcej prac", moreTitle: "Mniejsze projekty i podstawy", nextStep: "Następny krok", nextTitle: "Szukasz kodu na GitHubie lub projektu online?" },
    projectPage: { technologies: "Technologie" },
    footer: "Oprogramowanie · Projekty · Freelance",
  },
  tr: {
    nav: { work: "Projeler", services: "Hizmetler", about: "Hakkımda", contact: "İletişim", start: "Proje başlat", language: "Dil" },
    hero: { availability: "Seçili web projelerine açığım", title: "Yazılım geliştirme öğrencisi.", description: "Yazılım geliştirme alanındaki profesyonel yolumu oluştururken web siteleri, yazılım projeleri ve dijital deneyimler geliştiriyorum.", work: "Projelerimi gör", project: "Proje başlat", web: "Web", webDetail: "React, TypeScript ve duyarlı arayüzler", mobile: "Mobil", mobileDetail: "Kotlin, Android ve pratik uygulamalar", backend: "Backend", backendDetail: "PHP, REST API ve MySQL" },
    work: { eyebrow: "Seçili çalışmalar", title: "Nasıl geliştirdiğimi gösteren projeler.", titleAccent: "", description: "Kişisel, akademik ve deneysel yazılım projelerinden oluşan bir seçki. Abartılı metrikler yok, gerçekten geliştirdiğim işler var.", selected: "Daha fazla proje", selectedDescription: "Küçük projeler ve temel çalışmalar da bu yolculuğun bir parçası.", more: "Daha fazla çalışma", smaller: "Küçük projeler ve temeller", all: "Tümünü gör" },
    services: { eyebrow: "Freelance", title: "Birlikte neler geliştirebilirim.", description: "Pratik çözümlere ihtiyaç duyan küçük projeler, bağımsız profesyoneller ve işletmeler için hizmetler.", business: "İşletme web siteleri", businessDescription: "Restoranlar, kafeler, salonlar, mağazalar, profesyoneller ve küçük işletmeler için duyarlı web siteleri.", landing: "Landing page", landingDescription: "Hizmetler, kampanyalar, ürünler, portfolyolar ve kişisel projeler için odaklanmış sayfalar.", ecommerce: "E-ticaret", ecommerceDescription: "Net gezinme ve pratik alışveriş akışlarına sahip ürün odaklı web deneyimleri.", custom: "Özel web siteleri", customDescription: "Veri, entegrasyon ve özel işlevlerle standart şablonların ötesine geçen web siteleri." },
    clients: { eyebrow: "Kimlerle çalışmak istiyorum", title: "Gerçek insanlar, gerçek işletmeler, gerçek web siteleri.", types: ["Restoranlar", "Kafeler", "Salonlar", "Yerel mağazalar", "Küçük işletmeler", "Profesyoneller", "Kişisel projeler", "Teknoloji ekipleri"] },
    about: { eyebrow: "Hakkımda", title: "Hâlâ öğreniyorum. Şimdiden geliştiriyorum.", body1: "Ben Leonardo, Aveiro Üniversitesi'nde Yazılım Geliştirme öğrencisiyim ve 16alves02'nin arkasındaki kişiyim. Kişisel, akademik ve deneysel projelerle profesyonel yolumu oluşturuyorum.", body2: "Eğitimim programlama, web teknolojileri, veritabanları, yazılım mühendisliği, mobil geliştirme, etkileşim tasarımı ve kapsamlı yazılım projelerini kapsıyor.", body3: "16alves02 bu çalışmaların herkese açık kimliği: projeler, deneyler ve freelance yolculuğumun başlangıcı için bir alan.", currently: "Şu anda geliştiriliyor", development: "Geliştiriliyor", saborDescription: "Küçük fırınlar ve pastaneler için yönetim sistemi, akademik bir yazılım projesi olarak geliştiriliyor." },
    contact: { eyebrow: "İletişim", title: "Geliştirilmesi gereken bir şey mi var?", description: "Ne geliştirmek istediğinizi, elinizde ne olduğunu ve sonucun nasıl görünmesi gerektiğini anlatın. Buradan başlayabiliriz.", conversation: "Konuşmaya başla", github: "GitHub'ı gör" },
    common: { viewAll: "Tümünü gör", viewProject: "Projeyi gör", back: "Projelere dön", academic: "Akademik proje", type: "Tür", status: "Durum", period: "Dönem", preview: "Proje önizlemesi", highlights: "Öne çıkanlar", workedOn: "Üzerinde çalıştıklarım", live: "Canlı projeyi aç", source: "Kaynağı gör", allProjects: "Tüm projeler" },
    workPage: { eyebrow: "01 / Projeler", title: "Projeler, deneyler", accent: "ve geliştirdiğim şeyler.", description: "Yazılım becerilerimin gelişimini gösteren kişisel, akademik ve öğrenme projeleri koleksiyonu.", moreEyebrow: "Daha fazla çalışma", moreTitle: "Küçük projeler ve temeller", nextStep: "Sonraki adım", nextTitle: "GitHub kaynağını veya canlı bir projeyi mi arıyorsunuz?" },
    projectPage: { technologies: "Teknolojiler" },
    footer: "Yazılım · Projeler · Freelance",
  },
  nl: {
    nav: { work: "Projecten", services: "Diensten", about: "Over mij", contact: "Contact", start: "Start een project", language: "Taal" },
    hero: { availability: "Beschikbaar voor geselecteerde webprojecten", title: "Student softwareontwikkeling.", description: "Ik bouw websites, softwareprojecten en digitale ervaringen terwijl ik mijn professionele pad in softwareontwikkeling ontwikkel.", work: "Bekijk mijn werk", project: "Start een project", web: "Web", webDetail: "React, TypeScript en responsive interfaces", mobile: "Mobile", mobileDetail: "Kotlin, Android en praktische apps", backend: "Backend", backendDetail: "PHP, REST API's en MySQL" },
    work: { eyebrow: "Geselecteerd werk", title: "Projecten die laten zien hoe ik bouw.", titleAccent: "", description: "Een mix van persoonlijke, academische en experimentele softwareprojecten. Geen opgeblazen cijfers, alleen wat ik daadwerkelijk heb gebouwd.", selected: "Meer projecten", selectedDescription: "Kleinere projecten en fundamenten maken ook deel uit van de reis.", more: "Meer werk", smaller: "Kleinere projecten en fundamenten", all: "Alles bekijken" },
    services: { eyebrow: "Freelance", title: "Wat ik samen met jou kan bouwen.", description: "Gerichte diensten voor kleine projecten, zelfstandige professionals en bedrijven die iets praktisch nodig hebben.", business: "Zakelijke websites", businessDescription: "Responsive websites voor restaurants, koffiebars, salons, winkels, professionals en kleine bedrijven.", landing: "Landingpages", landingDescription: "Gerichte pagina's voor diensten, campagnes, producten, portfolio's en persoonlijke projecten.", ecommerce: "E-commerce", ecommerceDescription: "Productgerichte webervaringen met duidelijke navigatie en praktische aankoopflows.", custom: "Websites op maat", customDescription: "Websites die meer nodig hebben dan een standaardtemplate, inclusief data, integraties en maatwerkfunctionaliteit." },
    clients: { eyebrow: "Met wie ik wil werken", title: "Echte mensen, echte bedrijven, echte websites.", types: ["Restaurants", "Koffiebars", "Salons", "Lokale winkels", "Kleine bedrijven", "Professionals", "Persoonlijke projecten", "Techteams"] },
    about: { eyebrow: "Over mij", title: "Ik leer nog steeds. Ik bouw al.", body1: "Ik ben Leonardo, student softwareontwikkeling aan de Universiteit van Aveiro en de persoon achter 16alves02. Ik bouw mijn professionele pad via persoonlijke, academische en experimentele projecten.", body2: "Mijn opleiding omvat programmeren, webtechnologieën, databases, software-engineering, mobiele ontwikkeling, interaction design en complete softwareprojecten.", body3: "16alves02 is de publieke identiteit achter dat werk: een plek voor projecten, experimenten en het begin van mijn freelance traject.", currently: "Momenteel aan het bouwen", development: "In ontwikkeling", saborDescription: "Een managementsysteem voor kleine bakkerijen en banketbakkerijen, ontwikkeld als academisch softwareproject." },
    contact: { eyebrow: "Contact", title: "Heb je iets dat gebouwd moet worden?", description: "Vertel me wat je wilt bouwen, wat je al hebt en hoe het eindresultaat eruit moet zien. We kunnen daar beginnen.", conversation: "Een gesprek starten", github: "GitHub bekijken" },
    common: { viewAll: "Alles bekijken", viewProject: "Project bekijken", back: "Terug naar projecten", academic: "Academisch project", type: "Type", status: "Status", period: "Periode", preview: "Projectvoorbeeld", highlights: "Hoogtepunten", workedOn: "Waar ik aan heb gewerkt", live: "Live project openen", source: "Broncode bekijken", allProjects: "Alle projecten" },
    workPage: { eyebrow: "01 / Projecten", title: "Projecten, experimenten", accent: "en wat ik heb gebouwd.", description: "Een verzameling persoonlijke, academische en leerprojecten die mijn ontwikkeling in software laten zien.", moreEyebrow: "Meer werk", moreTitle: "Kleinere projecten en fundamenten", nextStep: "Volgende stap", nextTitle: "Op zoek naar de GitHub-broncode of een live project?" },
    projectPage: { technologies: "Technologieën" },
    footer: "Software · Projecten · Freelance",
  },
  ru: {
    nav: { work: "Проекты", services: "Услуги", about: "Обо мне", contact: "Контакты", start: "Начать проект", language: "Язык" },
    hero: { availability: "Открыт для выбранных веб-проектов", title: "Студент по разработке программного обеспечения.", description: "Создаю сайты, программные проекты и цифровые продукты, развивая профессиональный путь в разработке ПО.", work: "Посмотреть работы", project: "Начать проект", web: "Web", webDetail: "React, TypeScript и адаптивные интерфейсы", mobile: "Mobile", mobileDetail: "Kotlin, Android и практичные приложения", backend: "Backend", backendDetail: "PHP, REST API и MySQL" },
    work: { eyebrow: "Избранные работы", title: "Проекты, которые показывают, как я создаю.", titleAccent: "", description: "Личные, учебные и экспериментальные проекты. Без преувеличенных метрик, только то, что я действительно сделал.", selected: "Больше проектов", selectedDescription: "Небольшие проекты и основы тоже являются частью пути.", more: "Другие работы", smaller: "Небольшие проекты и основы", all: "Смотреть все" },
    services: { eyebrow: "Фриланс", title: "Что я могу создать вместе с вами.", description: "Услуги для небольших проектов, независимых специалистов и бизнеса, которому нужно практичное решение.", business: "Сайты для бизнеса", businessDescription: "Адаптивные сайты для ресторанов, кафе, салонов, магазинов, специалистов и малого бизнеса.", landing: "Лендинги", landingDescription: "Страницы для услуг, кампаний, продуктов, портфолио и личных проектов.", ecommerce: "E-commerce", ecommerceDescription: "Веб-интерфейсы для товаров с понятной навигацией и практичным процессом покупки.", custom: "Индивидуальные сайты", customDescription: "Сайты с данными, интеграциями и индивидуальными функциями сверх стандартного шаблона." },
    clients: { eyebrow: "С кем я хочу работать", title: "Реальные люди, реальные компании, реальные сайты.", types: ["Рестораны", "Кафе", "Салоны", "Местные магазины", "Малый бизнес", "Специалисты", "Личные проекты", "Технические команды"] },
    about: { eyebrow: "Обо мне", title: "Я всё ещё учусь. Но уже создаю.", body1: "Я Leonardo, студент по разработке программного обеспечения в Университете Авейру и создатель 16alves02. Развиваю профессиональный путь через личные, академические и экспериментальные проекты.", body2: "Учёба включает программирование, веб-технологии, базы данных, программную инженерию, мобильную разработку, дизайн взаимодействия и полноценные программные проекты.", body3: "16alves02 — публичная идентичность этой работы: место для проектов, экспериментов и начала моего фриланс-пути.", currently: "Сейчас разрабатываю", development: "В разработке", saborDescription: "Система управления для небольших пекарен и кондитерских, разработанная как академический проект." },
    contact: { eyebrow: "Контакты", title: "Есть что-то, что нужно создать?", description: "Расскажите, что вы хотите создать, что уже есть и каким должен быть конечный результат. Начнём с этого.", conversation: "Начать разговор", github: "Открыть GitHub" },
    common: { viewAll: "Смотреть все", viewProject: "Открыть проект", back: "Назад к проектам", academic: "Учебный проект", type: "Тип", status: "Статус", period: "Период", preview: "Предпросмотр проекта", highlights: "Основное", workedOn: "Над чем я работал", live: "Открыть проект", source: "Посмотреть код", allProjects: "Все проекты" },
    workPage: { eyebrow: "01 / Проекты", title: "Проекты, эксперименты", accent: "и то, что я создал.", description: "Коллекция личных, учебных и обучающих проектов, показывающая развитие моих навыков.", moreEyebrow: "Другие работы", moreTitle: "Небольшие проекты и основы", nextStep: "Следующий шаг", nextTitle: "Ищете код на GitHub или живой проект?" },
    projectPage: { technologies: "Технологии" },
    footer: "ПО · Проекты · Фриланс",
  },
};
