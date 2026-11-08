import { useEffect, useRef, useState } from 'react';
import { projects } from './data/projects.js';

const socials = [
  { label: 'GitHub', short: 'GH', url: 'https://github.com/16alves02', kind: 'code' },
  { label: 'LinkedIn', short: 'in', url: 'https://www.linkedin.com/in/16alves02/', kind: 'work' },
  { label: 'GitHub académico', short: 'UA', url: 'https://github.com/13alves05', kind: 'work' },
];

const experienceByLanguage = {
  en: [
    { id: 'clickbeauty', date: 'Apr – Jul 2023', role: 'Backend developer intern', company: 'ClickBeauty / Alvocromático · Internship', description: 'Backend development with PHP and MySQL, internal web systems and code maintenance.', tags: ['PHP', 'MySQL', 'Backend'] },
    { id: 'aej', date: 'Jul 2022', role: 'Web development intern', company: 'Associação Estamos Juntos (AEJ) · Internship', description: 'Built a website with HTML, CSS, JavaScript and PHP, including database integration for registration workflows.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: 'Feb 2025 – May 2026', role: 'CNC machine operator', company: 'Schmidt Light Metal Group · Additional experience', description: 'Operated CNC machinery, monitored production processes and carried out quality control.', tags: [] },
    { id: 'mc', date: 'May – Aug 2024', role: 'Store operator', company: 'MC · Additional experience', description: 'Customer service, shelf replenishment, store organisation and stock management.', tags: [] },
  ],
  'pt-PT': [
    { id: 'clickbeauty', date: 'abr. – jul. 2023', role: 'Estagiário de desenvolvimento back-end', company: 'ClickBeauty / Alvocromático · Estágio', description: 'Desenvolvimento backend em PHP e MySQL, apoio a sistemas Web internos e manutenção de código.', tags: ['PHP', 'MySQL', 'Back-end'] },
    { id: 'aej', date: 'jul. 2022', role: 'Estagiário de desenvolvimento Web', company: 'Associação Estamos Juntos (AEJ) · Estágio', description: 'Desenvolvimento de website com HTML, CSS, JavaScript e PHP, incluindo integração de base de dados para registos.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: 'fev. 2025 – mai. 2026', role: 'Operador de máquina CNC', company: 'Schmidt Light Metal Group · Experiência adicional', description: 'Operação de máquinas CNC, acompanhamento da produção e controlo de qualidade.', tags: [] },
    { id: 'mc', date: 'mai. – ago. 2024', role: 'Operador de loja', company: 'MC · Experiência adicional', description: 'Atendimento ao cliente, reposição, organização da loja e gestão de stocks.', tags: [] },
  ],
  es: [
    { id: 'clickbeauty', date: 'abr. – jul. 2023', role: 'Prácticas de desarrollo backend', company: 'ClickBeauty / Alvocromático · Prácticas', description: 'Desarrollo backend con PHP y MySQL, sistemas web internos y mantenimiento de código.', tags: ['PHP', 'MySQL', 'Backend'] },
    { id: 'aej', date: 'jul. 2022', role: 'Prácticas de desarrollo web', company: 'Associação Estamos Juntos (AEJ) · Prácticas', description: 'Desarrollo de un sitio con HTML, CSS, JavaScript y PHP, incluida la integración de bases de datos para registros.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: 'feb. 2025 – may. 2026', role: 'Operador de máquina CNC', company: 'Schmidt Light Metal Group · Experiencia adicional', description: 'Operación de máquinas CNC, seguimiento de la producción y control de calidad.', tags: [] },
    { id: 'mc', date: 'may. – ago. 2024', role: 'Operador de tienda', company: 'MC · Experiencia adicional', description: 'Atención al cliente, reposición, organización de la tienda y gestión de existencias.', tags: [] },
  ],
  fr: [
    { id: 'clickbeauty', date: 'avr. – juil. 2023', role: 'Stagiaire développeur backend', company: 'ClickBeauty / Alvocromático · Stage', description: 'Développement backend en PHP et MySQL, systèmes web internes et maintenance du code.', tags: ['PHP', 'MySQL', 'Backend'] },
    { id: 'aej', date: 'juil. 2022', role: 'Stagiaire en développement web', company: 'Associação Estamos Juntos (AEJ) · Stage', description: 'Création d’un site avec HTML, CSS, JavaScript et PHP, avec intégration de base de données pour les inscriptions.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: 'févr. 2025 – mai 2026', role: 'Opérateur de machine CNC', company: 'Schmidt Light Metal Group · Expérience complémentaire', description: 'Utilisation de machines CNC, suivi de la production et contrôle qualité.', tags: [] },
    { id: 'mc', date: 'mai – août 2024', role: 'Employé de magasin', company: 'MC · Expérience complémentaire', description: 'Service client, réapprovisionnement, organisation du magasin et gestion des stocks.', tags: [] },
  ],
  it: [
    { id: 'clickbeauty', date: 'apr. – lug. 2023', role: 'Tirocinante sviluppatore backend', company: 'ClickBeauty / Alvocromático · Tirocinio', description: 'Sviluppo backend con PHP e MySQL, sistemi web interni e manutenzione del codice.', tags: ['PHP', 'MySQL', 'Backend'] },
    { id: 'aej', date: 'lug. 2022', role: 'Tirocinante sviluppo web', company: 'Associação Estamos Juntos (AEJ) · Tirocinio', description: 'Realizzazione di un sito con HTML, CSS, JavaScript e PHP, inclusa l’integrazione di database per le registrazioni.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: 'feb. 2025 – mag. 2026', role: 'Operatore macchina CNC', company: 'Schmidt Light Metal Group · Esperienza aggiuntiva', description: 'Esperienza professionale aggiuntiva al di fuori dello sviluppo software.', tags: [] },
    { id: 'mc', date: 'mag. – ago. 2024', role: 'Addetto alle vendite', company: 'MC · Esperienza aggiuntiva', description: 'Esperienza aggiuntiva nelle operazioni di negozio e assistenza clienti.', tags: [] },
  ],
  de: [
    { id: 'clickbeauty', date: 'Apr. – Jul. 2023', role: 'Praktikant Backend-Entwicklung', company: 'ClickBeauty / Alvocromático · Praktikum', description: 'Backend-Entwicklung mit PHP und MySQL, internen Websystemen und Codepflege.', tags: ['PHP', 'MySQL', 'Backend'] },
    { id: 'aej', date: 'Jul. 2022', role: 'Praktikant Webentwicklung', company: 'Associação Estamos Juntos (AEJ) · Praktikum', description: 'Erstellung einer Website mit HTML, CSS, JavaScript und PHP, einschliesslich Datenbankintegration für Anmeldungen.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: 'Feb. 2025 – Mai 2026', role: 'CNC-Maschinenbediener', company: 'Schmidt Light Metal Group · Zusätzliche Erfahrung', description: 'Zusätzliche Berufserfahrung ausserhalb der Softwareentwicklung.', tags: [] },
    { id: 'mc', date: 'Mai – Aug. 2024', role: 'Mitarbeiter im Einzelhandel', company: 'MC · Zusätzliche Erfahrung', description: 'Zusätzliche Erfahrung im Einzelhandel und Kundenservice.', tags: [] },
  ],
  ja: [
    { id: 'clickbeauty', date: '2023年4月 – 7月', role: 'バックエンド開発インターン', company: 'ClickBeauty / Alvocromático · インターン', description: 'PHPとMySQLによるバックエンド開発、社内Webシステム、コードの保守。', tags: ['PHP', 'MySQL', 'バックエンド'] },
    { id: 'aej', date: '2022年7月', role: 'Web開発インターン', company: 'Associação Estamos Juntos (AEJ) · インターン', description: 'HTML、CSS、JavaScript、PHPを使用したWebサイト開発と登録用データベース連携。', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { id: 'cnc', date: '2025年2月 – 2026年5月', role: 'CNC機械オペレーター', company: 'Schmidt Light Metal Group · その他の職歴', description: 'ソフトウェア開発以外の職務経験。', tags: [] },
    { id: 'mc', date: '2024年5月 – 8月', role: '店舗スタッフ', company: 'MC · その他の職歴', description: '店舗運営とカスタマーサポートの職務経験。', tags: [] },
  ],
};

const projectTranslations = {
  pt: {
    '01': { type: 'FRONTEND / CONCEITO DE E-COMMERCE', description: 'Um conceito de loja de basquetebol com descoberta e filtros de produtos, páginas de produto, favoritos, carrinho e um processo de compra simulado. Um projeto para explorar a experiência de compra do lado do frontend.' },
    '02': { type: 'WEB INTERATIVA / PROJETO PESSOAL', description: 'Uma experiência social de conversas e jogos, com vários modos, cartões interativos, gestos de deslize, animações e uma identidade visual própria.' },
    '03': { type: 'SISTEMA DE GESTÃO / PROJETO ACADÉMICO', description: 'Sistema académico de gestão para negócios de restauração, com painel Web em PHP, API REST, base de dados MySQL / MariaDB e quiosque Android em Kotlin. A documentação inclui gestão de horários, assiduidade e stock. O projeto continua em desenvolvimento e ainda não está pronto para produção.', status: 'Em desenvolvimento' },
    '07': { type: 'PLATAFORMA DE AUTOMAÇÃO / PROTÓTIPO', description: 'Protótipo de uma plataforma de automação de workflows, com editor visual de gatilhos, condições e ações, gestão de workflows com PostgreSQL e fila de execução com Redis e BullMQ. O worker simula atualmente a execução; as integrações com serviços externos ainda não estão implementadas.', status: 'Protótipo em desenvolvimento' },
    '08': { type: 'JOGO ORIGINAL DE DEDUÇÃO / EM DESENVOLVIMENTO', description: 'Jogo original de dedução criminal baseado em casos gerados proceduralmente, pistas cruzadas e uma campanha inspirada no mapa de Portugal. Inclui motor de dedução, validação de casos, progressão local, conquistas e desafios diários. Continua em desenvolvimento.', status: 'Em desenvolvimento' },
    '04': { type: 'FUNDAMENTOS WEB', description: 'Um pequeno gestor de tarefas desenvolvido sem framework de frontend. Um exercício prático de eventos, atualizações do DOM, filtros e armazenamento no browser.' },
    '05': { type: 'ILUSTRAÇÃO VETORIAL / ARTE POPULAR PORTUGUESA', description: 'Uma ilustração de uma carta de jogar inspirada nos Lenços de Namorados do Minho, desenvolvida em Affinity.' },
    '06': { type: 'FUNDAMENTOS DE PROGRAMAÇÃO', description: 'Um programa de consola em C que demonstra Selection Sort, Insertion Sort, Bubble Sort e um pequeno exemplo de Bogo Sort, com menu interativo e validação de entrada.' },
    '09': { type: 'WEBSITE DE CLIENTE / EM PREPARAÇÃO', description: 'Projeto de website para um salão local, preparado com a proprietária. A estrutura e o fluxo de conteúdos estão em preparação; serviços, imagens, horários e publicação dependem de confirmação. Está planeado um fluxo de edição por CMS, ainda não implementado nem validado.', status: 'Em preparação' },
    '10': { type: 'PROJETO ACADÉMICO DE GRUPO / APLICAÇÃO CLI', description: 'Aplicação de linha de comandos desenvolvida por uma equipa de quatro elementos para gerir o catálogo de uma editora musical fictícia. Inclui autores, álbuns, músicas, direitos editoriais, relatórios, pesquisa, reprodução de áudio e histórico com reversão.', status: 'Projeto académico de grupo' },
    '11': { type: 'PROJETO ACADÉMICO DE GRUPO / GESTÃO DE BASQUETEBOL', description: 'Projeto de grupo desenvolvido no contexto do curso para gestão de basquetebol, abrangendo equipas, jogadores, jogos, eventos, inscrições, organizadores, recintos, patrocinadores, classificações e estatísticas. O repositório indicado é a entrega do grupo.', status: 'Projeto académico de grupo' },
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
    skillGroups: [["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],["BACKEND Y API","PHP","Node.js runtime","API REST","PDO","Prisma"],["DATOS Y COLAS","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],["MÓVIL Y CALIDAD","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]],
    '09': { type: "SITIO WEB DE CLIENTE / EN PREPARACIÓN", description: "Proyecto web para un salón local, en preparación con la propietaria. La estructura y el flujo de contenidos están en preparación; los servicios, imágenes, horarios y publicación requieren confirmación. Se prevé un flujo de edición mediante CMS, todavía no implementado ni validado.", status: "En preparación" },
  },
  fr: {
    '01': { type: 'FRONTEND / CONCEPT E-COMMERCE', description: 'Concept de boutique de basketball avec catalogue, filtres, pages produit, favoris, panier et paiement simulé.' },
    '02': { type: 'WEB INTERACTIVE / PROJET PERSONNEL', description: 'Expérience sociale de conversation et de jeux avec plusieurs modes, cartes interactives, gestes et animations.' },
    '03': { type: 'PROJET ACADÉMIQUE / EN COURS', description: 'Projet académique pour boulangeries, pâtisseries, cafés et restaurants. La version documentée gère les horaires et la présence via un panneau web PHP, une API REST et une borne Android en Kotlin ; le développement continue.' },
    '04': { type: 'FONDAMENTAUX DU WEB', description: 'Gestionnaire de tâches sans framework frontend, axé sur les événements, le DOM, les filtres et le stockage local.' },
    '06': { type: 'FONDAMENTAUX DE PROGRAMMATION', description: 'Programme console en C présentant Selection Sort, Insertion Sort, Bubble Sort et un petit exemple de Bogo Sort, avec menu interactif et validation de saisie.' },
    '05': { type: 'ILLUSTRATION VECTORIELLE / ART POPULAIRE PORTUGAIS', description: 'Illustration d’une carte inspirée des mouchoirs d’amour traditionnels du Minho, réalisée dans Affinity.' },
    skillGroups: [["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],["BACKEND & API","PHP","Node.js runtime","API REST","PDO","Prisma"],["DONNÉES & FILES","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],["MOBILE & QUALITÉ","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]],
    '09': { type: "SITE CLIENT / EN PRÉPARATION", description: "Projet de site web pour un salon local, préparé avec la propriétaire. La structure et le flux de contenu sont en préparation ; les services, images, horaires et la publication restent à confirmer. Un processus de gestion via CMS est prévu, mais n’est pas encore implémenté ni validé.", status: "En préparation" },
  },
  it: {
    '01': { type: 'FRONTEND / CONCEPT E-COMMERCE', description: 'Concept di negozio di basket con catalogo, filtri, pagine prodotto, preferiti, carrello e checkout simulato.' },
    '02': { type: 'WEB INTERATTIVO / PROGETTO PERSONALE', description: 'Esperienza sociale di conversazioni e giochi con modalità diverse, schede interattive, gesti e animazioni.' },
    '03': { type: 'PROGETTO ACCADEMICO / IN SVILUPPO', description: 'Progetto accademico per panifici, pasticcerie, caffè e ristoranti. La versione documentata gestisce turni e presenze tramite un pannello web PHP, un’API REST e un chiosco Android in Kotlin; il progetto è ancora in sviluppo.' },
    '04': { type: 'FONDAMENTI WEB', description: 'Gestore di attività senza framework frontend, focalizzato su eventi, DOM, filtri e archiviazione locale.' },
    '06': { type: 'FONDAMENTI DI PROGRAMMAZIONE', description: 'Programma console in C che presenta Selection Sort, Insertion Sort, Bubble Sort e un piccolo esempio di Bogo Sort, con menu interattivo e convalida dell’input.' },
    '05': { type: 'ILLUSTRAZIONE VETTORIALE / ARTE POPOLARE PORTOGHESE', description: 'Illustrazione di una carta ispirata ai tradizionali fazzoletti degli innamorati del Minho, realizzata in Affinity.' },
    skillGroups: [["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],["BACKEND & API","PHP","Node.js runtime","API REST","PDO","Prisma"],["DATI & CODE","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],["MOBILE & QUALITÀ","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]],
    '09': { type: "SITO WEB CLIENTE / IN PREPARAZIONE", description: "Progetto web per un salone locale, in preparazione con la proprietaria. Struttura e flusso dei contenuti sono in preparazione; servizi, immagini, orari e pubblicazione richiedono conferma. È previsto un flusso di modifica tramite CMS, non ancora implementato né convalidato.", status: "In preparazione" },
  },
  de: {
    '01': { type: 'FRONTEND / E-COMMERCE-KONZEPT', description: 'Konzept für einen Basketball-Shop mit Katalog, Filtern, Produktseiten, Favoriten, Warenkorb und simuliertem Checkout.' },
    '02': { type: 'INTERAKTIVES WEB / PRIVATES PROJEKT', description: 'Interaktives Konzept für Gespräche und Spiele mit mehreren Modi, Karteninteraktionen, Gesten und Animationen.' },
    '03': { type: 'AKADEMISCHES PROJEKT / IN ENTWICKLUNG', description: 'Akademisches Softwareprojekt für Bäckereien, Konditoreien, Cafés und Restaurants. Die dokumentierte Version verwaltet Dienstpläne und Anwesenheit über ein PHP-Webportal, eine REST-API und ein Kotlin-Android-Terminal; das Projekt ist in Entwicklung.' },
    '04': { type: 'WEB-GRUNDLAGEN', description: 'Kleiner Aufgabenmanager ohne Frontend-Framework, mit Events, DOM-Updates, Filtern und lokalem Speicher.' },
    '06': { type: 'PROGRAMMIERGRUNDLAGEN', description: 'C-Konsolenprogramm mit Selection Sort, Insertion Sort, Bubble Sort und einem kleinen Bogo-Sort-Beispiel, interaktivem Menü und Eingabeprüfung.' },
    '05': { type: 'VEKTORILLUSTRATION / PORTUGIESISCHE VOLKSKUNST', description: 'Spielkartenillustration, inspiriert von den traditionellen Liebestüchern aus dem Minho, erstellt mit Affinity.' },
    skillGroups: [["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],["BACKEND & APIS","PHP","Node.js runtime","REST APIs","PDO","Prisma"],["DATEN & QUEUES","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],["MOBILE & QUALITÄT","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]],
    '09': { type: "KUNDENWEBSITE / IN VORBEREITUNG", description: "Website-Projekt für einen lokalen Salon, das gemeinsam mit der Inhaberin vorbereitet wird. Struktur und Inhaltsablauf sind in Vorbereitung; Leistungen, Bilder, Öffnungszeiten und Veröffentlichung müssen noch bestätigt werden. Ein CMS-basierter Bearbeitungsablauf ist geplant, aber noch nicht implementiert oder validiert.", status: "In Vorbereitung" },
  },
  ja: {
    '01': { type: 'フロントエンド / ECコンセプト', description: '商品一覧、検索・フィルター、商品ページ、お気に入り、カート、模擬チェックアウトを備えたバスケットボール店のコンセプト。' },
    '02': { type: 'インタラクティブWeb / 個人プロジェクト', description: '複数のモード、カード操作、スワイプ、アニメーションを組み合わせた会話とゲームの体験。' },
    '03': { type: '学業プロジェクト / 開発中', description: 'パン屋、菓子店、カフェ、レストラン向けの学業プロジェクトです。現在のREADMEでは、PHP管理画面、REST API、Kotlin製Android端末による勤務シフトと出退勤の管理を説明しています。開発中です。' },
    '04': { type: 'Webの基礎', description: 'フロントエンドフレームワークを使わず、イベント、DOM、フィルター、ローカル保存を学ぶタスク管理アプリ。' },
    '06': { type: 'プログラミングの基礎', description: 'Selection Sort、Insertion Sort、Bubble Sortと小さなBogo Sortの例を示すC言語のコンソールプログラム。対話式メニューと入力検証を備えています。' },
    '05': { type: 'ベクターイラスト / ポルトガルの民芸', description: 'ミーニョ地方の伝統的な恋人たちのハンカチに着想を得たトランプのイラスト。Affinityで制作。' },
    skillGroups: [["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],["BACKEND / API","PHP","Node.js runtime","REST API","PDO","Prisma"],["データ / キュー","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],["モバイル / 品質","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]],
    '09': { type: "クライアント向けウェブサイト / 準備中", description: "地域のヘアサロン向けウェブサイトをオーナーと準備しています。サイト構成とコンテンツ管理フローは準備段階で、サービス、画像、営業時間、公開内容はオーナーの確認が必要です。CMSによる編集フローを予定していますが、まだ実装・検証されていません。", status: "準備中" },
  },
};

const copy = {
  en: {
    navWork: 'Work', navAbout: 'About', navPath: 'Background', navContact: 'Contact', navButton: 'Discuss internship',
    role: 'SOFTWARE DEVELOPER / SOFTWARE DEVELOPMENT STUDENT', eyebrow: 'OLIVEIRA DE AZEMÉIS / AVEIRO / PORTUGAL',
    titleOne: 'I build', titleTwo: 'software', titleEnd: '.',
    intro: 'I’m Leonardo, a Software Developer and Software Development student at the University of Aveiro. Based in Oliveira de Azeméis, in the Aveiro district, I build web, backend and mobile projects. I’m preparing my next step in Coimbra, where I aim to continue my studies and pursue professional opportunities.',
    workButton: 'See selected work', internshipButton: 'Looking for a 680h internship',
    sideNote: 'SOFTWARE DEVELOPMENT. ALWAYS LEARNING.', scroll: 'SCROLL A LITTLE',
    ticker: ['SOFTWARE DEVELOPMENT', 'WEB / BACKEND / MOBILE', 'AVEIRO → COIMBRA', 'BUILD / TEST / IMPROVE'],
    locationKicker: 'CURRENT BASE / NEXT CHAPTER', locationTitle: 'Aveiro is home. Coimbra is the next step.', locationText: 'I’m based in Oliveira de Azeméis, in the Aveiro district, Portugal. I’m looking to relocate to Coimbra to continue my studies and build my professional career there. I’m open to opportunities in Aveiro and Coimbra, as well as remote or hybrid roles.', locationFacts: ['CURRENT LOCATION · OLIVEIRA DE AZEMÉIS, AVEIRO', 'TARGET · COIMBRA, PORTUGAL', 'OPEN TO · EMPLOYMENT / INTERNSHIP / HYBRID / REMOTE'], 
    workKicker: '01 / PROJECTS AND ENGINEERING WORK', workTitle: 'Selected projects',
    workIntro: 'A focused selection of academic and personal projects, with the architecture, technologies and implementation details behind each one.',
    viewLive: 'Open project', viewCode: 'Source code', inProgress: 'In development', previewUnavailable: 'No public screenshot is available yet.',
    aboutKicker: '02 / ENGINEERING PROFILE', aboutTitle: 'A generalist software developer, learning by building.' ,
    about1: 'I’m studying Software Development (CTeSP) at Escola Superior Aveiro Norte, part of the University of Aveiro. My training covers programming, algorithms, databases, software engineering and web and mobile development. I’m currently based in Oliveira de Azeméis, Aveiro.',
    about2: 'I have completed practical internships in backend and web development, working with PHP, MySQL, HTML, CSS and JavaScript. These experiences introduced me to real development tasks and gave me an early opportunity to work with existing code and database-backed applications.',
    about3: 'I have also completed practical experiences in backend and web development. My current projects span React and TypeScript interfaces, PHP and REST APIs, relational databases, Redis/BullMQ workflows and Android with Kotlin. I value clear structure, maintainable code and understanding why a solution works.',
    servicesKicker: 'ENGINEERING FOCUS', servicesTitle: 'Areas I work across', servicesIntro: 'A broad software development foundation, with practical work across interfaces, APIs, data and mobile applications.', serviceItems: [['Web applications', 'Responsive interfaces and application workflows using React, TypeScript and Next.js.'], ['Backend & APIs', 'Server-side features, REST endpoints, validation and database-backed functionality.'], ['Data & processing', 'Relational data models, SQL persistence and asynchronous job queues.'], ['Mobile development', 'Android development with Kotlin and mobile-oriented projects with Capacitor.']],
    skillGroups: [
      ["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],
      ["BACKEND & APIs","PHP","Node.js runtime","REST APIs","PDO","Prisma"],
      ["DATA & QUEUES","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],
      ["MOBILE & QUALITY","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]
    ],
    pathKicker: '03 / PROFESSIONAL EXPERIENCE', pathTitle: 'Technical internships and experience beyond software projects.',
    educationKicker: 'EDUCATION', educationTitle: 'Software Development', educationDate: 'Sep 2025 – Jul 2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro',
    educationAdditional: '',
    priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: 'PROFESSIONAL OPPORTUNITIES / AVEIRO → COIMBRA', internshipTitle: 'Looking for my next opportunity in Coimbra.', internshipText: 'I’m based in Oliveira de Azeméis, Aveiro, and I’m planning to move to Coimbra to continue my studies and develop my career. I’m looking for software development opportunities, including employment and a paid 680-hour curricular internship from February 2027. I’m open to on-site, hybrid or remote work and keen to contribute to a team while continuing to learn.',
    targetStart: 'Available for opportunities now', mode: 'Aveiro / Coimbra / hybrid / remote', paidPreference: '680-hour paid internship · Feb 2027', internshipCta: 'Discuss an opportunity', internshipMeta: 'EMPLOYMENT / PAID 680-HOUR INTERNSHIP', internshipBottom: 'LEARN IN A TEAM. CONTRIBUTE TO REAL WORK.', contactMeta: 'EMAIL / LINKS / NEXT STEP',
    contactKicker: '04 / CONTACT', contactTitle: 'Let’s discuss an opportunity.', contactText: 'I’m based in Aveiro and looking for professional opportunities in Coimbra as I plan to continue my studies there. I’m open to employment, internships and remote or hybrid roles. Download my CV or email me directly.', emailLabel: 'EMAIL ME', socialsLabel: 'ELSEWHERE ON THE INTERNET', socialNote: 'Follow the work, not the oversharing.',
    footerNote: 'Designed and built by Leonardo Alves.', footerTop: 'Back to top ↑', email: 'Copy email', copied: 'Email copied',
  },
  pt: {
    navWork: 'Projetos', navAbout: 'Sobre', navPath: 'Percurso', navContact: 'Contacto', navButton: 'Falar sobre estágio',
    role: 'SOFTWARE DEVELOPER / ESTUDANTE DE DESENVOLVIMENTO DE SOFTWARE', eyebrow: 'OLIVEIRA DE AZEMÉIS / AVEIRO / PORTUGAL',
    titleOne: 'Desenvolvo', titleTwo: 'software', titleEnd: '.',
    intro: 'Sou o Leonardo, Software Developer e estudante de Desenvolvimento de Software na Universidade de Aveiro. Vivo em Oliveira de Azeméis, no distrito de Aveiro, e desenvolvo projetos web, backend e mobile. Estou a preparar a próxima etapa em Coimbra, onde pretendo prosseguir os estudos e encontrar oportunidades profissionais.',
    workButton: 'Ver projetos', internshipButton: 'À procura de estágio de 680h',
    sideNote: 'DESENVOLVIMENTO DE SOFTWARE. SEMPRE A APRENDER.', scroll: 'CONTINUA A DESCER',
    ticker: ['DESENVOLVIMENTO DE SOFTWARE', 'WEB / BACKEND / MOBILE', 'AVEIRO → COIMBRA', 'CRIAR / TESTAR / MELHORAR'],
    locationKicker: 'BASE ATUAL / PRÓXIMA ETAPA', locationTitle: 'Aveiro é a minha base. Coimbra é o próximo passo.', locationText: 'Estou em Oliveira de Azeméis, no distrito de Aveiro, Portugal. Procuro oportunidades profissionais em Aveiro e Coimbra e pretendo mudar-me para Coimbra para prosseguir os estudos e desenvolver aí o meu percurso profissional. Também estou disponível para trabalho híbrido ou remoto.', locationFacts: ['LOCALIZAÇÃO ATUAL · OLIVEIRA DE AZEMÉIS, AVEIRO', 'OBJETIVO · COIMBRA, PORTUGAL', 'DISPONIBILIDADE · EMPREGO / ESTÁGIO / HÍBRIDO / REMOTO'], 
    workKicker: '01 / PROJETOS E TRABALHO TÉCNICO', workTitle: 'Projetos em destaque',
    workIntro: 'Uma seleção de projetos académicos e pessoais, com a arquitetura, tecnologias e decisões de implementação.',
    viewLive: 'Abrir projeto', viewCode: 'Código-fonte', inProgress: 'Em desenvolvimento', previewUnavailable: 'Ainda não existe uma captura de ecrã pública.',
    aboutKicker: '02 / PERFIL DE ENGENHARIA', aboutTitle: 'Software Developer generalista, com aprendizagem prática.' ,
    about1: 'Sou estudante do CTeSP de Desenvolvimento de Software na Escola Superior Aveiro Norte, da Universidade de Aveiro. A minha formação inclui programação, algoritmos, bases de dados, engenharia de software e desenvolvimento web e mobile. Atualmente vivo em Oliveira de Azeméis, Aveiro.',
    about2: 'Tive experiências práticas em estágios de desenvolvimento backend e Web, com PHP, MySQL, HTML, CSS e JavaScript. Estas experiências deram-me contacto com tarefas reais de desenvolvimento, manutenção de código existente e aplicações apoiadas por bases de dados.',
    about3: 'Também tive experiências práticas em desenvolvimento backend e web. Os meus projetos atuais abrangem interfaces com React e TypeScript, PHP e APIs REST, bases de dados relacionais, workflows com Redis/BullMQ e Android com Kotlin. Valorizo código organizado, manutenção e compreensão das decisões técnicas.',
    servicesKicker: 'FOCO TÉCNICO', servicesTitle: 'Áreas de desenvolvimento', servicesIntro: 'Uma base abrangente em desenvolvimento de software, com trabalho prático em interfaces, APIs, dados e aplicações móveis.', serviceItems: [['Aplicações web', 'Interfaces responsivas e fluxos de aplicação com React, TypeScript e Next.js.'], ['Backend e APIs', 'Funcionalidades server-side, endpoints REST, validação e integração com bases de dados.'], ['Dados e processamento', 'Modelação relacional, persistência SQL e filas de processamento assíncrono.'], ['Desenvolvimento mobile', 'Android com Kotlin e projetos orientados a mobile com Capacitor.']],
    skillGroups: [
      ['FRONTEND', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'React Router', 'Tailwind CSS'],
      ['BACKEND E APIs', 'PHP', 'Node.js runtime', 'APIs REST', 'PDO', 'Prisma'],
      ['DADOS E FILAS', 'SQL', 'MySQL / MariaDB', 'PostgreSQL', 'Redis', 'BullMQ'],
      ['MOBILE E QUALIDADE', 'Kotlin / Android', 'Capacitor', 'Vitest', 'C', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / EXPERIÊNCIA PROFISSIONAL', pathTitle: 'Estágios técnicos e experiência para lá dos projetos de software.',
    educationKicker: 'FORMAÇÃO', educationTitle: 'Desenvolvimento de Software', educationDate: 'set. 2025 – jul. 2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro',
    educationAdditional: '',
    priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: 'OPORTUNIDADES PROFISSIONAIS / AVEIRO → COIMBRA', internshipTitle: 'Procuro a próxima oportunidade em Coimbra.', internshipText: 'Atualmente vivo em Oliveira de Azeméis, Aveiro, e pretendo mudar-me para Coimbra para prosseguir os estudos e desenvolver a minha carreira. Procuro oportunidades em desenvolvimento de software, incluindo emprego e um estágio curricular remunerado de 680 horas a partir de fevereiro de 2027. Estou disponível para trabalho presencial, híbrido ou remoto e quero contribuir para uma equipa enquanto continuo a aprender.',
    targetStart: 'Disponível para oportunidades', mode: 'Aveiro / Coimbra / híbrido / remoto', paidPreference: 'Estágio remunerado · 680h · fev. 2027', internshipCta: 'Falar sobre uma oportunidade', internshipMeta: 'EMPREGO / ESTÁGIO REMUNERADO DE 680 HORAS', internshipBottom: 'APRENDER EM EQUIPA. CONTRIBUIR PARA TRABALHO REAL.', contactMeta: 'EMAIL / LIGAÇÕES / PRÓXIMO PASSO',
    contactKicker: '04 / CONTACTO', contactTitle: 'Vamos falar sobre uma oportunidade.', contactText: 'Estou em Aveiro e procuro oportunidades profissionais em Coimbra, onde pretendo prosseguir os estudos. Estou disponível para emprego, estágios e funções remotas ou híbridas. Descarrega o meu CV ou envia-me um email.',
    emailLabel: 'ENVIA-ME UM EMAIL', socialsLabel: 'NOUTROS CANTOS DA INTERNET', socialNote: 'Acompanha o trabalho, sem exposição a mais.',
    footerNote: 'Design e código por Leonardo Alves.', footerTop: 'Voltar ao topo ↑', email: 'Copiar email', copied: 'Email copiado',
  },
};


const languageOptions = [
  { code: 'pt-PT', short: 'PT-PT', compact: 'PT', name: 'Portuguese (Portugal)', nativeName: 'Português (Portugal)', htmlLang: 'pt-PT' },
  { code: 'en', short: 'EN', compact: 'EN', name: 'English', nativeName: 'English', htmlLang: 'en' },
];

const localeCopy = {
  en: copy.en,
  'pt-PT': copy.pt,
  es: {
    ...copy.en,
    navWork: 'Proyectos', navAbout: 'Sobre mí', navPath: 'Trayectoria', navContact: 'Contacto', navButton: 'Hablemos',
    role: 'ESTUDIANTE DE DESARROLLO DE SOFTWARE / DESARROLLADOR JUNIOR', eyebrow: 'SITIO PERSONAL / PORTUGAL / 2026',
    titleOne: 'Creo cosas', titleTwo: 'para la web', titleEnd: '.',
    intro: 'Soy Leonardo, la persona detrás de 16alves02. Desarrollo proyectos web, cuido los detalles y me gusta entender también lo que ocurre detrás de la interfaz.',
    workButton: 'Ver proyectos', internshipButton: 'Busco prácticas de 680 h', sideNote: 'ENFOQUE FRONTEND. CURIOSIDAD FULL-STACK.', scroll: 'SIGUE BAJANDO',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CREAR / PROBAR / APRENDER'],
    workKicker: '01 / COSAS QUE HE CREADO', workTitle: 'Proyectos seleccionados', workIntro: 'Proyectos reales: qué hacen, qué tecnologías utilizan y enlaces para probarlos o consultar el código.',
    viewLive: 'Abrir proyecto', viewCode: 'Código fuente', inProgress: 'En desarrollo', previewUnavailable: 'Todavía no hay una captura pública disponible.',
    aboutKicker: '02 / VERSIÓN BREVE', aboutTitle: 'Sigo aprendiendo. Ya estoy creando.',
    about1: 'Estudio el CTeSP de Desarrollo de Software en la Escola Superior Aveiro Norte, Universidad de Aveiro. Me interesan el desarrollo frontend, las aplicaciones web y los fundamentos de ingeniería de software.',
    about2: 'Mi formación incluye algoritmos, programación orientada a objetos, desarrollo web y móvil, bases de datos, ingeniería de software y análisis de sistemas, con un fuerte componente práctico.',
    about3: 'Tengo experiencia práctica con HTML, CSS, JavaScript, PHP y MySQL, incluidos los periodos de prácticas en backend en ClickBeauty / Alvocromático y en desarrollo web en Associação Estamos Juntos. Me centro en crear aplicaciones web modernas, funcionales y adaptables.',
    servicesKicker: 'SERVICIOS', servicesTitle: 'En qué puedo ayudar', servicesIntro: 'Apoyo práctico para sitios web y pequeños proyectos digitales.', serviceItems: [['Desarrollo web', 'Sitios adaptables y experiencias web funcionales.'], ['Desarrollo de bases de datos', 'Estructuras SQL y funciones conectadas a bases de datos.'], ['Pruebas de software', 'Comprobaciones manuales, validación y resolución de problemas.'], ['Diseño web', 'Interfaces claras y adaptables centradas en la usabilidad.']],
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Vite'], ['BACKEND + DATOS', 'PHP', 'Node.js', 'API REST', 'SQL', 'MySQL / MariaDB'], ['LENGUAJES + HERRAMIENTAS', 'C', 'Kotlin / Android', 'Python', 'Git', 'GitHub', 'npm', 'Affinity']],
    pathKicker: '03 / EXPERIENCIA PROFESIONAL', pathTitle: 'Prácticas técnicas y experiencia más allá de los proyectos de software.',
    educationKicker: 'FORMACIÓN', educationTitle: 'Desarrollo de Software', educationDate: 'sep. 2025 – jul. 2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', educationAdditional: '', priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: 'SIGUIENTE PASO / 2027', internshipTitle: 'Busco un equipo con el que aprender.', internshipText: 'Busco unas prácticas curriculares de 680 horas, a partir de febrero de 2027. Estoy planeando mudarme a Coimbra, por lo que me interesan especialmente las oportunidades presenciales o híbridas allí, aunque también estoy abierto al trabajo remoto. Preferiría que las prácticas fueran remuneradas. Quiero contribuir a trabajo real, aprender en equipo y crecer con feedback.', targetStart: 'Inicio previsto: febrero de 2027', mode: 'Coimbra: presencial/híbrido o remoto', paidPreference: 'Preferencia por prácticas remuneradas', internshipCta: 'Hablar de prácticas', internshipMeta: 'OPORTUNIDAD / 680 HORAS', internshipBottom: 'APRENDER EN EQUIPO. CONTRIBUIR A PROYECTOS REALES.', contactMeta: 'EMAIL / ENLACES / SIGUIENTE PASO',
    contactKicker: '04 / CONTACTO', contactTitle: '¿Tienes algo en mente?', contactText: 'Para prácticas, colaboraciones o proyectos web, el correo electrónico es la forma más sencilla de contactar conmigo.', emailLabel: 'ESCRÍBEME', socialsLabel: 'EN INTERNET', socialNote: 'Sigue el trabajo, sin compartir de más.',
    footerNote: 'Diseñado y desarrollado por Leonardo Alves.', footerTop: 'Volver arriba ↑', email: 'Copiar email', copied: 'Email copiado',
    chooseLanguage: 'Elegir idioma', activeLanguage: 'Activo', switchToLight: 'Cambiar a modo claro', switchToDark: 'Cambiar a modo oscuro', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
  },
  fr: {
    ...copy.en,
    navWork: 'Projets', navAbout: 'À propos', navPath: 'Parcours', navContact: 'Contact', navButton: 'Discutons',
    role: 'ÉTUDIANT EN DÉVELOPPEMENT LOGICIEL / DÉVELOPPEUR JUNIOR', eyebrow: 'SITE PERSONNEL / PORTUGAL / 2026',
    titleOne: 'Je crée des choses', titleTwo: 'pour le web', titleEnd: '.',
    intro: 'Je suis Leonardo, la personne derrière 16alves02. Je crée des projets web, soigne les détails et aime comprendre ce qui se passe derrière l’interface.',
    workButton: 'Voir les projets', internshipButton: 'Stage de 680 h recherché', sideNote: 'FOCUS FRONTEND. CURIOSITÉ FULL-STACK.', scroll: 'CONTINUER À DÉFILER',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CRÉER / TESTER / APPRENDRE'],
    workKicker: '01 / CE QUE J’AI CRÉÉ', workTitle: 'Projets sélectionnés', workIntro: 'Des projets réels : leur objectif, les technologies utilisées et les liens pour les tester ou consulter le code.',
    viewLive: 'Ouvrir le projet', viewCode: 'Code source', inProgress: 'En développement', previewUnavailable: 'Aucune capture publique n’est disponible pour le moment.',
    aboutKicker: '02 / EN BREF', aboutTitle: 'J’apprends encore. Je construis déjà.',
    about1: 'Je suis étudiant en CTeSP de développement logiciel à l’Escola Superior Aveiro Norte, Université d’Aveiro. Je m’intéresse au frontend, aux applications web et aux bases de l’ingénierie logicielle.',
    about2: 'Ma formation comprend les algorithmes, la programmation orientée objet, le développement web et mobile, les bases de données, le génie logiciel et l’analyse des systèmes, avec une forte composante pratique.',
    about3: 'J’ai une expérience pratique de HTML, CSS, JavaScript, PHP et MySQL, notamment lors de stages en backend chez ClickBeauty / Alvocromático et en développement web à l’Associação Estamos Juntos. Je m’intéresse aux applications web modernes, fonctionnelles et adaptatives.',
    servicesKicker: 'SERVICES', servicesTitle: 'Comment je peux aider', servicesIntro: 'Un accompagnement pratique pour les sites web et les petits projets numériques.', serviceItems: [['Développement web', 'Sites adaptatifs et expériences web fonctionnelles.'], ['Développement de bases de données', 'Structures SQL et fonctionnalités connectées aux données.'], ['Tests logiciels', 'Vérifications manuelles, validation et diagnostic.'], ['Web design', 'Interfaces claires et adaptatives, pensées pour l’utilisabilité.']],
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Vite'], ['BACKEND + DONNÉES', 'PHP', 'Node.js', 'API REST', 'SQL', 'MySQL / MariaDB'], ['LANGAGES + OUTILS', 'C', 'Kotlin / Android', 'Python', 'Git', 'GitHub', 'npm', 'Affinity']],
    pathKicker: '03 / EXPÉRIENCE PROFESSIONNELLE', pathTitle: 'Stages techniques et expérience au-delà des projets logiciels.',
    educationKicker: 'FORMATION', educationTitle: 'Développement logiciel', educationDate: 'sept. 2025 – juil. 2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', educationAdditional: '', priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: 'PROCHAINE ÉTAPE / 2027', internshipTitle: 'Je cherche une équipe pour apprendre.', internshipText: 'Je recherche un stage curriculaire de 680 heures à partir de février 2027. Je prévois de déménager à Coimbra et privilégie donc les opportunités sur place ou hybrides dans cette ville, tout en restant ouvert au télétravail. Un stage rémunéré serait idéal. Je souhaite contribuer à des projets réels, apprendre en équipe et progresser grâce aux retours.', targetStart: 'Début souhaité : février 2027', mode: 'Coimbra : sur place/hybride ou à distance', paidPreference: 'Stage rémunéré souhaité', internshipCta: 'Parler du stage', internshipMeta: 'OPPORTUNITÉ / 680 HEURES', internshipBottom: 'APPRENDRE EN ÉQUIPE. CONTRIBUER À DES PROJETS RÉELS.', contactMeta: 'EMAIL / LIENS / PROCHAINE ÉTAPE',
    contactKicker: '04 / CONTACT', contactTitle: 'Un projet en tête ?', contactText: 'Pour un stage, une collaboration ou un projet web, le plus simple est de me contacter par e-mail.', emailLabel: 'M’ÉCRIRE', socialsLabel: 'AILLEURS SUR INTERNET', socialNote: 'Suivez le travail, sans trop en dévoiler.',
    footerNote: 'Conçu et développé par Leonardo Alves.', footerTop: 'Retour en haut ↑', email: 'Copier l’e-mail', copied: 'E-mail copié',
    chooseLanguage: 'Choisir la langue', activeLanguage: 'Actif', switchToLight: 'Passer au mode clair', switchToDark: 'Passer au mode sombre', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
  },
  it: {
    ...copy.en,
    navWork: 'Progetti', navAbout: 'Profilo', navPath: 'Percorso', navContact: 'Contatti', navButton: 'Parliamone',
    role: 'STUDENTE DI SVILUPPO SOFTWARE / SVILUPPATORE JUNIOR', eyebrow: 'SITO PERSONALE / PORTOGALLO / 2026',
    titleOne: 'Creo cose', titleTwo: 'per il web', titleEnd: '.',
    intro: 'Sono Leonardo, la persona dietro 16alves02. Creo progetti web, curo i dettagli e mi piace capire cosa succede anche dietro l’interfaccia.',
    workButton: 'Vedi i progetti', internshipButton: 'Cerco tirocinio di 680 ore', sideNote: 'FOCUS FRONTEND. CURIOSITÀ FULL-STACK.', scroll: 'CONTINUA A SCORRERE',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'CREARE / TESTARE / IMPARARE'],
    workKicker: '01 / COSE CHE HO REALIZZATO', workTitle: 'Progetti selezionati', workIntro: 'Progetti reali: cosa fanno, quali tecnologie usano e link per provarli o consultare il codice.',
    viewLive: 'Apri progetto', viewCode: 'Codice sorgente', inProgress: 'In sviluppo', previewUnavailable: 'Non è ancora disponibile uno screenshot pubblico.',
    aboutKicker: '02 / IN BREVE', aboutTitle: 'Sto ancora imparando. Intanto costruisco.',
    about1: 'Studio il CTeSP in Sviluppo Software presso la Escola Superior Aveiro Norte, Università di Aveiro. Mi interessano soprattutto frontend, applicazioni web e fondamenti di ingegneria del software.',
    about2: 'La mia formazione comprende algoritmi, programmazione orientata agli oggetti, sviluppo web e mobile, database, ingegneria del software e analisi dei sistemi, con una forte componente pratica.',
    about3: 'Ho esperienza pratica con HTML, CSS, JavaScript, PHP e MySQL, anche attraverso tirocini backend presso ClickBeauty / Alvocromático e di sviluppo web presso Associação Estamos Juntos. Mi interessano applicazioni web moderne, funzionali e responsive.',
    servicesKicker: 'SERVIZI', servicesTitle: 'Come posso aiutare', servicesIntro: 'Supporto pratico per siti web e piccoli progetti digitali.', serviceItems: [['Sviluppo web', 'Siti responsive ed esperienze web funzionali.'], ['Sviluppo di database', 'Strutture SQL e funzionalità collegate ai dati.'], ['Test del software', 'Controlli manuali, validazione e risoluzione dei problemi.'], ['Web design', 'Interfacce chiare e responsive, attente all’usabilità.']],
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Vite'], ['BACKEND + DATI', 'PHP', 'Node.js', 'API REST', 'SQL', 'MySQL / MariaDB'], ['LINGUAGGI + STRUMENTI', 'C', 'Kotlin / Android', 'Python', 'Git', 'GitHub', 'npm', 'Affinity']],
    pathKicker: '03 / ESPERIENZA PROFESSIONALE', pathTitle: 'Tirocini tecnici ed esperienza oltre i progetti software.',
    educationKicker: 'FORMAZIONE', educationTitle: 'Sviluppo Software', educationDate: 'set. 2025 – lug. 2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', educationAdditional: '', priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: 'PROSSIMO PASSO / 2027', internshipTitle: 'Cerco un team con cui imparare.', internshipText: 'Cerco un tirocinio curricolare di 680 ore a partire da febbraio 2027. Sto pianificando di trasferirmi a Coimbra, quindi sono particolarmente interessato a opportunità in presenza o ibride in città, restando aperto anche al lavoro da remoto. Preferirei un tirocinio retribuito. Vorrei contribuire a progetti reali, imparare da un team e crescere grazie ai feedback.', targetStart: 'Inizio previsto: febbraio 2027', mode: 'Coimbra: in presenza/ibrido o da remoto', paidPreference: 'Preferenza per tirocinio retribuito', internshipCta: 'Parliamo del tirocinio', internshipMeta: 'OPPORTUNITÀ / 680 ORE', internshipBottom: 'IMPARARE INSIEME. CONTRIBUIRE A PROGETTI REALI.', contactMeta: 'EMAIL / LINK / PROSSIMO PASSO',
    contactKicker: '04 / CONTATTI', contactTitle: 'Hai un’idea in mente?', contactText: 'Per opportunità di tirocinio, collaborazioni o progetti web, l’e-mail è il modo più semplice per contattarmi.', emailLabel: 'SCRIVIMI', socialsLabel: 'ALTROVE SU INTERNET', socialNote: 'Segui il lavoro, senza condividere troppo.',
    footerNote: 'Design e sviluppo di Leonardo Alves.', footerTop: 'Torna in alto ↑', email: 'Copia e-mail', copied: 'E-mail copiata',
    chooseLanguage: 'Scegli la lingua', activeLanguage: 'Attivo', switchToLight: 'Passa alla modalità chiara', switchToDark: 'Passa alla modalità scura', openMenu: 'Apri menu', closeMenu: 'Chiudi menu',
  },
  de: {
    ...copy.en,
    navWork: 'Projekte', navAbout: 'Über mich', navPath: 'Werdegang', navContact: 'Kontakt', navButton: 'Kontakt aufnehmen',
    role: 'SOFTWAREENTWICKLUNGSSTUDENT / JUNIOR-ENTWICKLER', eyebrow: 'PERSÖNLICHE WEBSITE / PORTUGAL / 2026',
    titleOne: 'Ich entwickle Dinge', titleTwo: 'für das Web', titleEnd: '.',
    intro: 'Ich bin Leonardo, die Person hinter 16alves02. Ich entwickle Webprojekte, achte auf Details und möchte verstehen, was hinter der Oberfläche passiert.',
    workButton: 'Projekte ansehen', internshipButton: 'Suche ein 680-Stunden-Praktikum', sideNote: 'FRONTEND-FOKUS. FULL-STACK-NEUGIER.', scroll: 'WEITER SCROLLEN',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', 'ENTWICKELN / TESTEN / LERNEN'],
    workKicker: '01 / MEINE PROJEKTE', workTitle: 'Ausgewählte Projekte', workIntro: 'Echte Projekte mit kurzer Beschreibung, verwendeten Technologien und Links zur Demo oder zum Quellcode.',
    viewLive: 'Projekt öffnen', viewCode: 'Quellcode', inProgress: 'In Entwicklung', previewUnavailable: 'Derzeit ist kein öffentlicher Screenshot verfügbar.',
    aboutKicker: '02 / KURZ ÜBER MICH', aboutTitle: 'Ich lerne weiter und setze Ideen um.',
    about1: 'Ich studiere das CTeSP-Programm Softwareentwicklung an der Escola Superior Aveiro Norte der Universität Aveiro. Meine Interessen sind Frontend-Entwicklung, Webanwendungen und Grundlagen der Softwaretechnik.',
    about2: 'Meine Ausbildung umfasst Algorithmen, objektorientierte Programmierung, Web- und Mobile-Entwicklung, Datenbanken, Softwaretechnik und Systemanalyse mit einem hohen Praxisanteil.',
    about3: 'Ich habe praktische Erfahrung mit HTML, CSS, JavaScript, PHP und MySQL, unter anderem durch Praktika in der Backend-Entwicklung bei ClickBeauty / Alvocromático und in der Webentwicklung bei Associação Estamos Juntos. Ich interessiere mich für moderne, funktionale und responsive Webanwendungen.',
    servicesKicker: 'LEISTUNGEN', servicesTitle: 'Wobei ich unterstützen kann', servicesIntro: 'Praktische Unterstützung für Websites und kleinere digitale Projekte.', serviceItems: [['Webentwicklung', 'Responsive Websites und funktionale Web-Erlebnisse.'], ['Datenbankentwicklung', 'SQL-Strukturen und datenbankgestützte Funktionen.'], ['Softwaretests', 'Manuelle Prüfungen, Validierung und Fehlersuche.'], ['Webdesign', 'Klare, responsive und benutzerfreundliche Oberflächen.']],
    skillGroups: [['FRONTEND', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Vite'], ['BACKEND + DATEN', 'PHP', 'Node.js', 'REST-APIs', 'SQL', 'MySQL / MariaDB'], ['SPRACHEN + TOOLS', 'C', 'Kotlin / Android', 'Python', 'Git', 'GitHub', 'npm', 'Affinity']],
    pathKicker: '03 / BERUFSERFAHRUNG', pathTitle: 'Technische Praktika und Erfahrung über Softwareprojekte hinaus.',
    educationKicker: 'AUSBILDUNG', educationTitle: 'Softwareentwicklung', educationDate: 'Sep. 2025 – Jul. 2027', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', educationAdditional: '', priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: 'NÄCHSTER SCHRITT / 2027', internshipTitle: 'Ich suche ein Team, von dem ich lernen kann.', internshipText: 'Ich suche ab Februar 2027 ein 680-stündiges Pflichtpraktikum. Ich plane, nach Coimbra zu ziehen, und interessiere mich deshalb besonders für Präsenz- oder Hybridmöglichkeiten dort, bin aber auch für Remote-Arbeit offen. Ein bezahltes Praktikum wäre mir am liebsten. Ich möchte an realen Aufgaben mitarbeiten, im Team lernen und mich durch Feedback weiterentwickeln.', targetStart: 'Geplanter Beginn: Februar 2027', mode: 'Coimbra: vor Ort/hybrid oder remote', paidPreference: 'Bezahltes Praktikum bevorzugt', internshipCta: 'Über ein Praktikum sprechen', internshipMeta: 'CHANCE / 680 STUNDEN', internshipBottom: 'IM TEAM LERNEN. AN REALEN PROJEKTEN MITARBEITEN.', contactMeta: 'E-MAIL / LINKS / NÄCHSTER SCHRITT',
    contactKicker: '04 / KONTAKT', contactTitle: 'Hast du etwas im Sinn?', contactText: 'Für Praktika, Zusammenarbeit oder Webprojekte ist eine E-Mail der einfachste Weg, mich zu erreichen.', emailLabel: 'SCHREIB MIR', socialsLabel: 'SONST IM INTERNET', socialNote: 'Verfolge die Arbeit, nicht zu viele persönliche Details.',
    footerNote: 'Design und Entwicklung von Leonardo Alves.', footerTop: 'Nach oben ↑', email: 'E-Mail kopieren', copied: 'E-Mail kopiert',
    chooseLanguage: 'Sprache wählen', activeLanguage: 'Aktiv', switchToLight: 'Zum hellen Modus wechseln', switchToDark: 'Zum dunklen Modus wechseln', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen',
  },
  ja: {
    ...copy.en,
    navWork: '制作実績', navAbout: 'プロフィール', navPath: '経歴', navContact: 'お問い合わせ', navButton: '連絡する',
    role: 'ソフトウェア開発学生 / ジュニアソフトウェア開発者', eyebrow: '個人サイト / ポルトガル / 2026',
    titleOne: 'Webのために', titleTwo: 'ものを作る', titleEnd: '。',
    intro: 'Leonardoです。16alves02として活動しています。Webプロジェクトを作り、細部に気を配り、画面の裏側の仕組みを理解することも大切にしています。',
    workButton: '制作実績を見る', internshipButton: '680時間のインターンを希望', sideNote: 'フロントエンド中心。フルスタックにも関心。', scroll: 'スクロールして続ける',
    ticker: ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PHP + SQL', '作る / 試す / 学ぶ'],
    workKicker: '01 / 制作したもの', workTitle: '主なプロジェクト', workIntro: '実際のプロジェクト、使用技術、デモやソースコードへのリンクを紹介します。',
    viewLive: 'プロジェクトを開く', viewCode: 'ソースコード', inProgress: '開発中', previewUnavailable: '公開できるスクリーンショットはまだありません。',
    aboutKicker: '02 / 簡単な自己紹介', aboutTitle: '学びながら、作り続ける。',
    about1: 'アヴェイロ大学の Escola Superior Aveiro Norte でソフトウェア開発のCTeSP課程を学んでいます。フロントエンド、Webアプリケーション、ソフトウェア工学の基礎に関心があります。',
    about2: '学習内容にはアルゴリズム、オブジェクト指向プログラミング、Web・モバイル開発、データベース、ソフトウェア工学、システム分析が含まれ、実践的な課題にも取り組んでいます。',
    about3: 'HTML、CSS、JavaScript、PHP、MySQLを使った実践経験があり、ClickBeauty / Alvocromáticoでのバックエンド実習、Associação Estamos JuntosでのWeb開発実習を経験しました。現代的で使いやすく、レスポンシブなWebアプリケーションに関心があります。',
    servicesKicker: 'サービス', servicesTitle: 'お手伝いできること', servicesIntro: 'Webサイトや小規模なデジタルプロジェクトへの実践的なサポート。', serviceItems: [['Web開発', 'レスポンシブなサイトと実用的なWeb体験。'], ['データベース開発', 'SQL構造とデータベース連携機能。'], ['ソフトウェアテスト', '手動確認、検証、問題の切り分け。'], ['Webデザイン', '使いやすさを重視した明快でレスポンシブなUI。']],
    skillGroups: [['フロントエンド', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Vite'], ['バックエンド・データ', 'PHP', 'Node.js', 'REST API', 'SQL', 'MySQL / MariaDB'], ['言語・ツール', 'C', 'Kotlin / Android', 'Python', 'Git', 'GitHub', 'npm', 'Affinity']],
    pathKicker: '03 / 職務経験', pathTitle: '技術系インターンシップとソフトウェア制作以外の経験。',
    educationKicker: '学歴', educationTitle: 'ソフトウェア開発', educationDate: '2025年9月 – 2027年7月', educationWhere: 'CTeSP · Escola Superior Aveiro Norte · Universidade de Aveiro', educationAdditional: '', priorEducation: 'Escola Secundária Dr. Serafim Leite · 2020–2023',
    internshipKicker: '次のステップ / 2027', internshipTitle: 'チームで学べる環境を探しています。', internshipText: '2027年2月から始まる680時間のカリキュラム実習を希望しています。Coimbraへの転居を計画しているため、特に現地勤務またはハイブリッド勤務に関心がありますが、リモート勤務も可能です。できれば有給の実習を希望します。実際の業務に貢献し、チームから学び、フィードバックを通して成長したいと考えています。', targetStart: '開始希望：2027年2月', mode: 'Coimbra：現地/ハイブリッド・リモート可', paidPreference: '有給の実習を希望', internshipCta: 'インターンについて連絡', internshipMeta: '機会 / 680時間', internshipBottom: 'チームで学び、実際のプロジェクトに貢献する。', contactMeta: 'メール / リンク / 次のステップ',
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

const recruitmentCopy = {
  en: {
    availabilityLabel:'PROFESSIONAL AVAILABILITY', targetStart:'Start: February 2027', hours:'680 hours', location:'Aveiro → Coimbra, Portugal', paidStatus:'Paid curricular internship', cvDownload:'Download CV',
    caseStudyLabel:'Technical breakdown', caseStudyProblem:'Problem & context', caseStudyArchitecture:'Architecture', caseStudyContribution:'My contribution', caseStudyChallenges:'Engineering challenges', caseStudyResult:'Current result & limits', contactEmailCta:'Discuss an opportunity',
    skillsKicker:'TECHNICAL SKILLS', skillsTitle:'Technologies I work with', skillsIntro:'Technologies used in coursework, internships and current projects. Experience varies by tool.',
    internshipBottom:'CONTRIBUTE TO REAL WORK. LEARN FROM THE TEAM.',
    skillGroups: [["FRONTEND","HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Vite","React Router","Tailwind CSS"],["BACKEND E APIs","PHP","Node.js runtime","APIs REST","PDO","Prisma"],["DADOS E FILAS","SQL","MySQL / MariaDB","PostgreSQL","Redis","BullMQ"],["MOBILE E QUALIDADE","Kotlin / Android","Capacitor","Vitest","C","Git","GitHub"]],
  },
  'pt-PT': {
    availabilityLabel:'DISPONIBILIDADE PROFISSIONAL', targetStart:'Início: fevereiro de 2027', hours:'680 horas', location:'Aveiro → Coimbra, Portugal', paidStatus:'Estágio curricular remunerado', cvDownload:'Descarregar CV',
    caseStudyLabel:'Detalhe técnico', caseStudyProblem:'Problema e contexto', caseStudyArchitecture:'Arquitetura', caseStudyContribution:'Contributo pessoal', caseStudyChallenges:'Desafios técnicos', caseStudyResult:'Resultado atual e limitações', contactEmailCta:'Falar sobre uma oportunidade',
    skillsKicker:'COMPETÊNCIAS TÉCNICAS', skillsTitle:'Tecnologias que utilizo', skillsIntro:'Tecnologias utilizadas na formação, em estágios e nos projetos atuais. O nível de experiência varia consoante a ferramenta.',
    internshipBottom:'CONTRIBUIR PARA TRABALHO REAL. APRENDER COM A EQUIPA.',
  },
  es: {
    availabilityLabel:'DISPONIBILIDAD DE PRÁCTICAS', targetStart:'Inicio: febrero de 2027', hours:'680 horas', location:'Coímbra, Portugal', paidStatus:'Prácticas curriculares remuneradas', cvDownload:'Descargar CV',
    caseStudyLabel:'Detalle técnico', caseStudyProblem:'Problema y contexto', caseStudyArchitecture:'Arquitectura', caseStudyContribution:'Mi contribución', caseStudyChallenges:'Retos de ingeniería', caseStudyResult:'Resultado y límites actuales', contactEmailCta:'Enviar email sobre las prácticas',
    skillsKicker:'COMPETENCIAS TÉCNICAS', skillsTitle:'Tecnologías que utilizo', skillsIntro:'Tecnologías utilizadas en formación, prácticas y proyectos actuales. La experiencia varía según la herramienta.',
    internshipKicker:'DISPONIBILIDAD DE PRÁCTICAS / 2027', internshipTitle:'Busco unas prácticas curriculares remuneradas de desarrollo de software en Coímbra.',
    internshipText:'Busco unas prácticas curriculares remuneradas de 680 horas a partir de febrero de 2027. Coímbra es mi ubicación preferida y estoy disponible para trabajar presencialmente, en modalidad híbrida o a distancia. Quiero contribuir a proyectos reales, aprender de desarrolladores con experiencia y seguir desarrollando mis fundamentos de ingeniería de software.',
    internshipCta:'Escribir sobre las prácticas', internshipMeta:'PRÁCTICAS CURRICULARES REMUNERADAS / 680 HORAS', internshipBottom:'CONTRIBUIR A PROYECTOS REALES. APRENDER EN EQUIPO.',
    mode:'Coímbra: presencial / híbrido / remoto', paidPreference:'Prácticas curriculares remuneradas',
    contactTitle:'Hablemos de una oportunidad.', contactText:'Estoy disponible para unas prácticas curriculares remuneradas de 680 horas desde febrero de 2027, preferiblemente en Coímbra. Descarga mi CV o escríbeme para hablar de una oportunidad.',
  },
  fr: {
    availabilityLabel:'DISPONIBILITÉ DE STAGE', targetStart:'Début : février 2027', hours:'680 heures', location:'Coimbra, Portugal', paidStatus:'Stage curriculaire rémunéré', cvDownload:'Télécharger le CV',
    caseStudyLabel:'Détail technique', caseStudyProblem:'Problème et contexte', caseStudyArchitecture:'Architecture', caseStudyContribution:'Ma contribution', caseStudyChallenges:'Défis techniques', caseStudyResult:'Résultat et limites actuels', contactEmailCta:'Écrire au sujet du stage',
    skillsKicker:'COMPÉTENCES TECHNIQUES', skillsTitle:'Technologies utilisées', skillsIntro:'Technologies utilisées en formation, en stage et dans les projets actuels. Le niveau d’expérience varie selon l’outil.',
    internshipKicker:'DISPONIBILITÉ DE STAGE / 2027', internshipTitle:'Je recherche un stage curriculaire rémunéré en développement logiciel à Coimbra.',
    internshipText:'Je recherche un stage curriculaire rémunéré de 680 heures à partir de février 2027. Coimbra est ma localisation privilégiée ; je suis ouvert au présentiel, à l’hybride ou au télétravail. Je souhaite contribuer à des projets réels, apprendre auprès de développeurs expérimentés et renforcer mes bases en ingénierie logicielle.',
    internshipCta:'Écrire au sujet du stage', internshipMeta:'STAGE CURRICULAIRE RÉMUNÉRÉ / 680 HEURES', internshipBottom:'CONTRIBUER À DES PROJETS RÉELS. APPRENDRE EN ÉQUIPE.',
    mode:'Coimbra : présentiel / hybride / à distance', paidPreference:'Stage curriculaire rémunéré',
    contactTitle:'Parlons d’une opportunité.', contactText:'Je suis disponible pour un stage curriculaire rémunéré de 680 heures à partir de février 2027, de préférence à Coimbra. Téléchargez mon CV ou écrivez-moi au sujet d’une opportunité.',
  },
  it: {
    availabilityLabel:'DISPONIBILITÀ TIROCINIO', targetStart:'Inizio: febbraio 2027', hours:'680 ore', location:'Coimbra, Portogallo', paidStatus:'Tirocinio curriculare retribuito', cvDownload:'Scarica CV',
    caseStudyLabel:'Dettaglio tecnico', caseStudyProblem:'Problema e contesto', caseStudyArchitecture:'Architettura', caseStudyContribution:'Il mio contributo', caseStudyChallenges:'Sfide tecniche', caseStudyResult:'Risultato e limiti attuali', contactEmailCta:'Scrivi per il tirocinio',
    skillsKicker:'COMPETENZE TECNICHE', skillsTitle:'Tecnologie che utilizzo', skillsIntro:'Tecnologie utilizzate nella formazione, nei tirocini e nei progetti attuali. L’esperienza varia a seconda dello strumento.',
    internshipKicker:'DISPONIBILITÀ TIROCINIO / 2027', internshipTitle:'Cerco un tirocinio curriculare retribuito nello sviluppo software a Coimbra.',
    internshipText:'Cerco un tirocinio curriculare retribuito di 680 ore con inizio a febbraio 2027. Coimbra è la mia località preferita e sono disponibile per modalità in presenza, ibrida o da remoto. Desidero contribuire a progetti reali, imparare da sviluppatori esperti e rafforzare le mie basi di ingegneria del software.',
    internshipCta:'Scrivi per il tirocinio', internshipMeta:'TIROCINIO CURRICULARE RETRIBUITO / 680 ORE', internshipBottom:'CONTRIBUIRE A PROGETTI REALI. IMPARARE IN SQUADRA.',
    mode:'Coimbra: in presenza / ibrido / da remoto', paidPreference:'Tirocinio curriculare retribuito',
    contactTitle:'Parliamo di un’opportunità.', contactText:'Sono disponibile per un tirocinio curriculare retribuito di 680 ore da febbraio 2027, preferibilmente a Coimbra. Scarica il mio CV o scrivimi per parlare di un’opportunità.',
  },
  de: {
    availabilityLabel:'PRAKTIKUMSVERFÜGBARKEIT', targetStart:'Start: Februar 2027', hours:'680 Stunden', location:'Coimbra, Portugal', paidStatus:'Bezahltes Pflichtpraktikum', cvDownload:'Lebenslauf herunterladen',
    caseStudyLabel:'Technische Details', caseStudyProblem:'Problem und Kontext', caseStudyArchitecture:'Architektur', caseStudyContribution:'Mein Beitrag', caseStudyChallenges:'Technische Herausforderungen', caseStudyResult:'Aktueller Stand und Grenzen', contactEmailCta:'E-Mail zum Praktikum',
    skillsKicker:'TECHNISCHE KENNTNISSE', skillsTitle:'Verwendete Technologien', skillsIntro:'Technologien aus Ausbildung, Praktika und aktuellen Projekten. Die Erfahrung unterscheidet sich je nach Werkzeug.',
    internshipKicker:'PRAKTIKUMSVERFÜGBARKEIT / 2027', internshipTitle:'Ich suche ein bezahltes 680-stündiges Pflichtpraktikum in der Softwareentwicklung in Coimbra.',
    internshipText:'Ich suche ein bezahltes curricular vorgeschriebenes Praktikum mit 680 Stunden ab Februar 2027. Coimbra ist mein bevorzugter Standort; Präsenz-, Hybrid- und Remote-Arbeit sind möglich. Ich möchte an realen Projekten mitarbeiten, von erfahrenen Entwicklern lernen und meine Grundlagen der Softwareentwicklung vertiefen.',
    internshipCta:'E-Mail zum Praktikum', internshipMeta:'BEZAHLTES PFLICHTPRAKTIKUM / 680 STUNDEN', internshipBottom:'AN ECHTEN PROJEKTEN MITARBEITEN. IM TEAM LERNEN.',
    mode:'Coimbra: vor Ort / hybrid / remote', paidPreference:'Bezahltes Pflichtpraktikum',
    contactTitle:'Lassen Sie uns über eine Möglichkeit sprechen.', contactText:'Ich bin ab Februar 2027 für ein bezahltes 680-stündiges Pflichtpraktikum verfügbar, vorzugsweise in Coimbra. Laden Sie meinen Lebenslauf herunter oder schreiben Sie mir.',
  },
  ja: {
    availabilityLabel:'インターンシップの希望条件', targetStart:'開始：2027年2月', hours:'680時間', location:'ポルトガル・コインブラ', paidStatus:'有給のカリキュラム実習', cvDownload:'履歴書をダウンロード',
    caseStudyLabel:'技術的な詳細', caseStudyProblem:'課題と背景', caseStudyArchitecture:'アーキテクチャ', caseStudyContribution:'担当した内容', caseStudyChallenges:'技術的な課題', caseStudyResult:'現在の成果と制限事項', contactEmailCta:'実習についてメールする',
    skillsKicker:'技術スキル', skillsTitle:'使用している技術', skillsIntro:'授業、実習、現在のプロジェクトで使用している技術です。経験の深さは技術ごとに異なります。',
    internshipKicker:'インターンシップの希望条件 / 2027', internshipTitle:'2027年2月からコインブラで有給のソフトウェア開発実習を希望しています。',
    internshipText:'2027年2月開始、680時間の有給カリキュラム実習を希望しています。希望勤務地はコインブラで、出社、ハイブリッド、リモートのいずれにも対応できます。実際のプロジェクトに貢献し、経験豊富な開発者から学び、ソフトウェアエンジニアリングの基礎を深めたいと考えています。',
    internshipCta:'実習についてメールする', internshipMeta:'有給カリキュラム実習 / 680時間', internshipBottom:'実際のプロジェクトに貢献し、チームで学ぶ。',
    mode:'コインブラ：出社 / ハイブリッド / リモート', paidPreference:'有給のカリキュラム実習',
    contactTitle:'実習の機会についてお話ししましょう。', contactText:'2027年2月から、コインブラを希望勤務地とする680時間の有給カリキュラム実習が可能です。履歴書をダウンロードするか、メールでご連絡ください。',
  },
};
for (const [code, additions] of Object.entries(recruitmentCopy)) {
  localeCopy[code] = { ...localeCopy[code], ...additions };
};
for (const [code, additions] of Object.entries(recruitmentCopy)) localeCopy[code] = { ...localeCopy[code], ...additions };

const engineeringPositioningCopy = {
  en: {
    navAbout:'Profile', navPath:'Experience', navButton:'Discuss internship',
    role:'SOFTWARE DEVELOPER / SOFTWARE DEVELOPMENT STUDENT', eyebrow:'OLIVEIRA DE AZEMÉIS / AVEIRO / PORTUGAL',
    titleOne:'Software', titleTwo:'Developer', titleEnd:'.',
    intro:'I’m Leonardo, a Software Developer and Software Development student at the University of Aveiro. Based in Oliveira de Azeméis, Aveiro, I build web, backend and mobile projects. I’m preparing to move to Coimbra to continue my studies and pursue professional opportunities there.',
    workKicker:'01 / PROJECTS AND ENGINEERING WORK', workTitle:'Projects that shape my engineering path',
    workIntro:'Four projects exploring different parts of software engineering: integrated applications, workflow processing, software logic and interactive product experiences.',
    aboutKicker:'02 / ENGINEERING DIRECTION', aboutTitle:'A generalist Software Developer, learning by building.',
    about1:'I’m studying Software Development (CTeSP) at Escola Superior Aveiro Norte, part of the University of Aveiro. My training covers programming, algorithms, databases, software engineering and web and mobile development. I’m currently based in Oliveira de Azeméis, Aveiro.',
    about2:'My projects let me explore different engineering challenges. SaborGest brings together a PHP backend, REST API, relational database and Android kiosk; RunLattice explores workflow validation and asynchronous processing; MRDR. focuses on deduction logic, case generation and automated tests; RAW. explores interactive product flows and content-driven experiences.',
    about3:'I am developing these skills through coursework, independent projects and feedback. I want to join a development team where I can contribute to real systems, learn engineering practices from experienced developers and build strong foundations for a long-term career in software engineering.',
    servicesKicker:'ENGINEERING INTERESTS', servicesTitle:'Areas I’m developing towards',
    servicesIntro:'Areas I explore through study and project work. They represent my direction of growth, not claims of specialist experience.',
    serviceItems:[
      ["Full-stack & product development", "Understanding how product requirements, interfaces, business rules and data layers work together."],
      ["Backend, APIs & data systems", "Building server-side behaviour, REST APIs, data models, persistence and asynchronous processing."],
      ["Frontend & mobile applications", "Developing user-facing interfaces and exploring Android and mobile delivery."],
      ["Software architecture & quality", "Learning to structure systems, separate responsibilities, test behaviour and improve maintainability."]
    ],
    skillsKicker:'TECHNICAL FOUNDATION', skillsTitle:'Technologies I can demonstrate',
    skillsIntro:'Technologies used in coursework, internships or the four featured projects. Depth varies by tool; project status and limitations are documented.',
    skillGroups:[
      ['LANGUAGES & FRONTEND','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],
      ['BACKEND & APIs','PHP','PDO','REST APIs','Next.js Route Handlers','Node.js (runtime)'],
      ['DATA & PROCESSING','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],
      ['MOBILE, STATE & TESTING','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub'],
    ],
    pathKicker:'03 / SOFTWARE EXPERIENCE', pathTitle:'Experience in software development.',
    educationAdditional:'',
    aboutBandTagline:'SOFTWARE ENGINEERING / IN PROGRESS', aboutMiniOne:'LEARNING BY BUILDING.', aboutMiniTwo:'ONE SYSTEM AT A TIME.',
    internshipKicker:'NEXT STEP / AVEIRO → COIMBRA', internshipTitle:'Looking for my next professional opportunity in Coimbra.',
    internshipText:'I’m based in Oliveira de Azeméis, Aveiro, and planning to move to Coimbra to continue my studies and develop my career. I’m looking for software development opportunities, including employment and a paid 680-hour curricular internship from February 2027. I’m open to on-site, hybrid or remote work and keen to contribute to a team while continuing to learn.',
    targetStart:'Open to opportunities now', mode:'Aveiro / Coimbra / hybrid / remote', paidPreference:'Employment or paid 680-hour internship · Feb 2027', internshipBottom:'A FIRST STEP IN A LONG-TERM SOFTWARE ENGINEERING PATH.',
    contactTitle:'Let’s build something meaningful.',
    contactText:'I’m based in Aveiro and looking for software development opportunities in Coimbra as I plan to continue my studies there. I’m open to employment, internships and remote or hybrid roles. I’d like to contribute to a development team and keep improving through real work and feedback.',
    carouselKicker:'FEATURED ENGINEERING PROJECTS', carouselRegionLabel:'Interactive 3D carousel of four featured software projects',
    carouselSkipIntro:'Skip intro', carouselInteractionHint:'Drag, swipe, use arrows or scroll to rotate',
    carouselPrevious:'Previous project', carouselNext:'Next project', carouselSelectProject:'Select this project',
    carouselFeaturedLabel:'SELECTED PROJECT', carouselOpenLive:'Open project', carouselSourceCode:'Source code',
    carouselInDevelopment:'In development', carouselPrototype:'Prototype in development', carouselLive:'Live project',
    carouselCategories:{SaborGest:'FULL-STACK MANAGEMENT SYSTEM',RunLattice:'WORKFLOW AUTOMATION PROTOTYPE','MRDR.':'DEDUCTION GAME','RAW.':'INTERACTIVE CONVERSATION APP'},
    carouselDescriptions:{
      SaborGest:'An academic system integrating a PHP web panel, REST API, relational database and Kotlin Android kiosk for schedules, attendance and stock.',
      RunLattice:'A workflow automation prototype with a visual editor, validation, PostgreSQL persistence and Redis/BullMQ background processing.',
      'MRDR.':'An original deduction game exploring case generation, logical validation, progression systems, testing and mobile delivery.',
      'RAW.':'An interactive conversation and party-game application with distinct modes, card gestures, motion, localisation and a mobile-oriented experience.',
    },
  },
  'pt-PT': {
    navAbout:'Perfil', navPath:'Experiência', navButton:'Falar sobre estágio',
    role:'SOFTWARE DEVELOPER / ESTUDANTE DE DESENVOLVIMENTO DE SOFTWARE', eyebrow:'OLIVEIRA DE AZEMÉIS / AVEIRO / PORTUGAL',
    titleOne:'Software', titleTwo:'Developer', titleEnd:'.',
    intro:'Sou o Leonardo, Software Developer e estudante de Desenvolvimento de Software na Universidade de Aveiro. Vivo em Oliveira de Azeméis, Aveiro, e desenvolvo projetos web, backend e mobile. Estou a preparar-me para mudar para Coimbra, onde pretendo prosseguir os estudos e encontrar oportunidades profissionais.',
    workKicker:'01 / PROJETOS E TRABALHO DE ENGENHARIA', workTitle:'Projetos que constroem o meu percurso',
    workIntro:'Quatro projetos que exploram diferentes dimensões da engenharia de software: aplicações integradas, processamento de workflows, lógica de software e experiências interativas.',
    aboutKicker:'02 / DIREÇÃO DE ENGENHARIA', aboutTitle:'Software Developer generalista, com aprendizagem prática.',
    about1:'Sou estudante do CTeSP de Desenvolvimento de Software na Escola Superior Aveiro Norte, da Universidade de Aveiro. A minha formação inclui programação, algoritmos, bases de dados, engenharia de software e desenvolvimento web e mobile. Atualmente vivo em Oliveira de Azeméis, Aveiro.',
    about2:'Os meus projetos permitem explorar diferentes desafios de engenharia. O SaborGest reúne backend PHP, API REST, base de dados relacional e quiosque Android; o RunLattice explora validação de workflows e processamento assíncrono; o MRDR. centra-se em lógica de dedução, geração de casos e testes automatizados; o RAW. explora fluxos de produto interativos e experiências orientadas a conteúdo.',
    about3:'Estou a desenvolver estas competências através da formação, de projetos independentes e do feedback. Quero integrar uma equipa de desenvolvimento onde possa contribuir para sistemas reais, aprender práticas de engenharia com profissionais experientes e construir bases sólidas para uma carreira em engenharia de software.',
    servicesKicker:'INTERESSES DE ENGENHARIA', servicesTitle:'Áreas em que quero evoluir',
    servicesIntro:'Áreas que exploro através da formação e dos projetos. Representam a direção em que quero crescer, não especializações profissionais consolidadas.',
    serviceItems:[
      ["Desenvolvimento full-stack e de produto", "Compreender como requisitos, interfaces, regras de negócio e camadas de dados funcionam em conjunto."],
      ["Backend, APIs e sistemas de dados", "Desenvolver lógica no servidor, APIs REST, modelos de dados, persistência e processamento assíncrono."],
      ["Aplicações frontend e mobile", "Desenvolver interfaces para utilizadores e explorar aplicações Android e mobile."],
      ["Arquitetura de software e qualidade", "Aprender a estruturar sistemas, separar responsabilidades, testar comportamentos e melhorar a manutenção."]
    ],
    skillsKicker:'BASE TÉCNICA', skillsTitle:'Tecnologias que consigo demonstrar',
    skillsIntro:'Tecnologias utilizadas na formação, em estágios ou nos quatro projetos em destaque. A experiência varia por ferramenta; o estado e as limitações dos projetos estão documentados.',
    skillGroups:[
      ['LINGUAGENS E FRONTEND','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],
      ['BACKEND E APIs','PHP','PDO','APIs REST','Next.js Route Handlers','Node.js (runtime)'],
      ['DADOS E PROCESSAMENTO','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],
      ['MOBILE, ESTADO E TESTES','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub'],
    ],
    pathKicker:'03 / EXPERIÊNCIA EM SOFTWARE', pathTitle:'Experiência em desenvolvimento de software.',
    educationAdditional:'',
    aboutBandTagline:'ENGENHARIA DE SOFTWARE / EM CONSTRUÇÃO', aboutMiniOne:'APRENDER A CONSTRUIR.', aboutMiniTwo:'UM SISTEMA DE CADA VEZ.',
    internshipKicker:'PRÓXIMO PASSO / AVEIRO → COIMBRA', internshipTitle:'Procuro a próxima oportunidade profissional em Coimbra.',
    internshipText:'Atualmente vivo em Oliveira de Azeméis, Aveiro, e pretendo mudar-me para Coimbra para prosseguir os estudos e desenvolver a minha carreira. Procuro oportunidades em desenvolvimento de software, incluindo emprego e um estágio curricular remunerado de 680 horas a partir de fevereiro de 2027. Estou disponível para trabalho presencial, híbrido ou remoto e quero contribuir para uma equipa enquanto continuo a aprender.',
    targetStart:'Disponível para oportunidades', mode:'Aveiro / Coimbra / híbrido / remoto', paidPreference:'Emprego ou estágio remunerado de 680h · fev. 2027', internshipBottom:'UM PRIMEIRO PASSO NUM PERCURSO A LONGO PRAZO EM ENGENHARIA DE SOFTWARE.',
    contactTitle:'Vamos construir algo com significado.',
    contactText:'Estou em Aveiro e procuro oportunidades em desenvolvimento de software em Coimbra, onde pretendo prosseguir os estudos. Estou disponível para emprego, estágios e funções remotas ou híbridas. Quero contribuir para uma equipa e continuar a evoluir através de trabalho real e feedback.',
    carouselKicker:'PROJETOS DE ENGENHARIA EM DESTAQUE', carouselRegionLabel:'Carrossel 3D interativo com os quatro principais projetos de software',
    carouselSkipIntro:'Saltar introdução', carouselInteractionHint:'Arrasta, desliza, usa as setas ou o scroll para rodar',
    carouselPrevious:'Projeto anterior', carouselNext:'Projeto seguinte', carouselSelectProject:'Selecionar este projeto',
    carouselFeaturedLabel:'PROJETO SELECIONADO', carouselOpenLive:'Abrir projeto', carouselSourceCode:'Código-fonte',
    carouselInDevelopment:'Em desenvolvimento', carouselPrototype:'Protótipo em desenvolvimento', carouselLive:'Projeto publicado',
    carouselCategories:{SaborGest:'SISTEMA DE GESTÃO FULL-STACK',RunLattice:'PROTÓTIPO DE AUTOMAÇÃO DE WORKFLOWS','MRDR.':'JOGO DE DEDUÇÃO','RAW.':'APLICAÇÃO INTERATIVA DE CONVERSAS'},
    carouselDescriptions:{
      SaborGest:'Sistema académico que integra painel Web em PHP, API REST, base de dados relacional e quiosque Android em Kotlin para horários, assiduidade e stock.',
      RunLattice:'Protótipo de automação com editor visual, validação, persistência em PostgreSQL e processamento em segundo plano com Redis/BullMQ.',
      'MRDR.':'Jogo original de dedução que explora geração e validação lógica de casos, progressão, testes e distribuição mobile.',
      'RAW.':'Aplicação interativa de conversas e jogos sociais com modos distintos, cartões, gestos, animações, localização e experiência orientada a mobile.',
    },
  },
  es: {
    navAbout:'Perfil', navPath:'Experiencia', navButton:'Hablar sobre prácticas',
    role:'ESTUDIANTE DE DESARROLLO DE SOFTWARE / FUTURO INGENIERO DE SOFTWARE', eyebrow:'CONSTRUYENDO MI CAMINO HACIA LA INGENIERÍA DE SOFTWARE / PORTUGAL',
    titleOne:'Hacia la', titleTwo:'ingeniería de software', titleEnd:'.',
    intro:'Soy Leonardo, estudiante de Desarrollo de Software en ESAN, Universidad de Aveiro (2025–2027). Quiero crecer hasta convertirme en ingeniero de software, capaz de comprender y construir sistemas completos: interfaces, lógica de negocio, API, persistencia de datos, procesamiento en segundo plano y aplicaciones móviles.',
    workKicker:'01 / PROYECTOS Y TRABAJO DE INGENIERÍA', workTitle:'Proyectos que construyen mi trayectoria',
    workIntro:'Cuatro proyectos que exploran distintas dimensiones de la ingeniería de software: aplicaciones integradas, procesamiento de workflows, lógica de software y experiencias interactivas.',
    aboutKicker:'02 / DIRECCIÓN DE INGENIERÍA', aboutTitle:'Construyendo mi camino hacia la ingeniería de software.',
    about1:'Mi objetivo a largo plazo es convertirme en ingeniero de software y contribuir a distintas fases del ciclo de vida de un producto. Me interesa comprender el razonamiento detrás de una implementación: analizar requisitos, elegir una estructura, separar responsabilidades y validar el comportamiento.',
    about2:'Mis proyectos me permiten explorar distintos retos de ingeniería. SaborGest integra backend PHP, API REST, base de datos relacional y un quiosco Android; RunLattice explora la validación de workflows y el procesamiento asíncrono; MRDR. se centra en lógica deductiva, generación de casos y pruebas automatizadas; RAW. explora flujos de producto interactivos y experiencias basadas en contenido.',
    about3:'Estoy desarrollando estas competencias mediante formación, proyectos independientes y feedback. Quiero incorporarme a un equipo donde pueda contribuir a sistemas reales, aprender prácticas de ingeniería de profesionales experimentados y construir bases sólidas para una carrera en ingeniería de software.',
    servicesKicker:'INTERESES DE INGENIERÍA', servicesTitle:'Áreas en las que quiero crecer', servicesIntro:'Áreas que exploro mediante formación y proyectos. Representan mi dirección de crecimiento, no especializaciones profesionales consolidadas.',
    serviceItems:[
      ["Desarrollo full-stack y de producto", "Comprender cómo trabajan juntos los requisitos, las interfaces, las reglas de negocio y las capas de datos."],
      ["Backend, API y sistemas de datos", "Desarrollar lógica de servidor, API REST, modelos de datos, persistencia y procesamiento asíncrono."],
      ["Aplicaciones frontend y móviles", "Desarrollar interfaces de usuario y explorar aplicaciones Android y móviles."],
      ["Arquitectura de software y calidad", "Aprender a estructurar sistemas, separar responsabilidades, probar comportamientos y mejorar el mantenimiento."]
    ],
    skillsKicker:'BASE TÉCNICA', skillsTitle:'Tecnologías que puedo demostrar', skillsIntro:'Tecnologías utilizadas en formación, prácticas o los cuatro proyectos destacados. La experiencia varía según la herramienta; el estado y las limitaciones están documentados.',
    skillGroups:[['LENGUAJES Y FRONTEND','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],['BACKEND Y API','PHP','PDO','API REST','Next.js Route Handlers','Node.js (runtime)'],['DATOS Y PROCESAMIENTO','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],['MÓVIL, ESTADO Y PRUEBAS','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub']],
    pathKicker:'03 / EXPERIENCIA EN SOFTWARE', pathTitle:'Experiencia en desarrollo de software.', educationAdditional:'',
    aboutBandTagline:'INGENIERÍA DE SOFTWARE / EN CONSTRUCCIÓN', aboutMiniOne:'APRENDER CONSTRUYENDO.', aboutMiniTwo:'UN SISTEMA A LA VEZ.',
    internshipKicker:'SIGUIENTE PASO / FEBRERO DE 2027', internshipTitle:'El siguiente paso: unas prácticas remuneradas en desarrollo de software.',
    internshipText:'Busco unas prácticas curriculares remuneradas de 680 horas a partir de febrero de 2027, preferiblemente en Coímbra. Estoy disponible para trabajar presencialmente, en modalidad híbrida o a distancia. Mi objetivo a largo plazo es crecer como ingeniero de software, contribuyendo a productos reales y aprendiendo de profesionales con experiencia.',
    targetStart:'Inicio: febrero de 2027', mode:'Coímbra: presencial / híbrido / remoto', paidPreference:'Prácticas curriculares remuneradas', internshipBottom:'UN PRIMER PASO EN UN CAMINO A LARGO PLAZO EN INGENIERÍA DE SOFTWARE.',
    contactTitle:'Construyamos algo con sentido.', contactText:'Busco unas prácticas curriculares remuneradas de 680 horas desde febrero de 2027, preferiblemente en Coímbra. Quiero contribuir a un equipo de desarrollo, aprender de ingenieros con experiencia y seguir creciendo hacia la ingeniería de software.',
    carouselKicker:'PROYECTOS DE INGENIERÍA DESTACADOS', carouselRegionLabel:'Carrusel 3D interactivo de cuatro proyectos de software', carouselSkipIntro:'Saltar introducción', carouselInteractionHint:'Arrastra, desliza, usa las flechas o el scroll para girar', carouselPrevious:'Proyecto anterior', carouselNext:'Proyecto siguiente', carouselSelectProject:'Seleccionar este proyecto', carouselFeaturedLabel:'PROYECTO SELECCIONADO', carouselOpenLive:'Abrir proyecto', carouselSourceCode:'Código fuente', carouselInDevelopment:'En desarrollo', carouselPrototype:'Prototipo en desarrollo', carouselLive:'Proyecto publicado',
    carouselCategories:{SaborGest:'SISTEMA DE GESTIÓN FULL-STACK',RunLattice:'PROTOTIPO DE AUTOMATIZACIÓN DE WORKFLOWS','MRDR.':'JUEGO DE DEDUCCIÓN','RAW.':'APLICACIÓN INTERACTIVA DE CONVERSACIÓN'},
    carouselDescriptions:{SaborGest:'Sistema académico que integra panel web PHP, API REST, base relacional y quiosco Android Kotlin para horarios, asistencia y stock.',RunLattice:'Prototipo de automatización con editor visual, validación, persistencia PostgreSQL y procesamiento en segundo plano con Redis/BullMQ.','MRDR.':'Juego original de deducción que explora generación y validación lógica de casos, progresión, pruebas y distribución móvil.','RAW.':'Aplicación interactiva de conversación y juegos con modos distintos, tarjetas, gestos, animaciones, localización y experiencia móvil.'},
  },
  fr: {
    navAbout:'Profil', navPath:'Expérience', navButton:'Parler du stage',
    role:'ÉTUDIANT EN DÉVELOPPEMENT LOGICIEL / FUTUR INGÉNIEUR LOGICIEL', eyebrow:'CONSTRUIRE MON PARCOURS EN INGÉNIERIE LOGICIELLE / PORTUGAL',
    titleOne:'Vers', titleTwo:'l’ingénierie logicielle', titleEnd:'.',
    intro:'Je suis Leonardo, étudiant en développement logiciel à l’ESAN, Université d’Aveiro (2025–2027). Je souhaite devenir ingénieur logiciel, capable de comprendre et de construire des systèmes complets : interfaces, logique métier, API, persistance des données, traitement en arrière-plan et applications mobiles.',
    workKicker:'01 / PROJETS ET TRAVAIL D’INGÉNIERIE', workTitle:'Des projets qui construisent mon parcours', workIntro:'Quatre projets qui explorent différentes dimensions de l’ingénierie logicielle : applications intégrées, workflows, logique logicielle et expériences interactives.',
    aboutKicker:'02 / ORIENTATION INGÉNIERIE', aboutTitle:'Construire mon parcours vers l’ingénierie logicielle.',
    about1:'Mon objectif à long terme est de devenir ingénieur logiciel et de contribuer aux différentes étapes du cycle de vie d’un produit. Je souhaite comprendre le raisonnement derrière une implémentation : analyser les besoins, choisir une structure, séparer les responsabilités et valider le comportement.',
    about2:'Mes projets me permettent d’explorer différents défis d’ingénierie. SaborGest réunit un backend PHP, une API REST, une base relationnelle et une borne Android ; RunLattice explore la validation de workflows et le traitement asynchrone ; MRDR. se concentre sur la logique déductive, la génération de cas et les tests automatisés ; RAW. explore les interactions produit et les expériences pilotées par le contenu.',
    about3:'Je développe ces compétences par la formation, des projets indépendants et le feedback. Je souhaite rejoindre une équipe où je pourrai contribuer à des systèmes réels, apprendre auprès d’ingénieurs expérimentés et construire des bases solides pour une carrière en ingénierie logicielle.',
    servicesKicker:'INTÉRÊTS EN INGÉNIERIE', servicesTitle:'Domaines que je souhaite approfondir', servicesIntro:'Des domaines explorés par la formation et les projets. Ils représentent une direction de progression, pas des spécialisations professionnelles acquises.',
    serviceItems:[
      ["Développement full-stack et produit", "Comprendre comment les besoins, les interfaces, les règles métier et les couches de données fonctionnent ensemble."],
      ["Backend, API et systèmes de données", "Développer la logique serveur, les API REST, les modèles de données, la persistance et le traitement asynchrone."],
      ["Applications frontend et mobiles", "Développer des interfaces utilisateur et explorer Android et les applications mobiles."],
      ["Architecture logicielle et qualité", "Apprendre à structurer les systèmes, séparer les responsabilités, tester les comportements et améliorer la maintenabilité."]
    ],
    skillsKicker:'BASE TECHNIQUE', skillsTitle:'Technologies que je peux démontrer', skillsIntro:'Technologies utilisées en formation, en stage ou dans les quatre projets principaux. L’expérience varie selon l’outil ; l’état et les limites sont documentés.',
    skillGroups:[['LANGAGES ET FRONTEND','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],['BACKEND ET API','PHP','PDO','API REST','Next.js Route Handlers','Node.js (runtime)'],['DONNÉES ET TRAITEMENT','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],['MOBILE, ÉTAT ET TESTS','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub']],
    pathKicker:'03 / EXPÉRIENCE LOGICIELLE', pathTitle:'Expérience en développement logiciel.', educationAdditional:'',
    aboutBandTagline:'INGÉNIERIE LOGICIELLE / EN CONSTRUCTION', aboutMiniOne:'APPRENDRE EN CONSTRUISANT.', aboutMiniTwo:'UN SYSTÈME À LA FOIS.',
    internshipKicker:'PROCHAINE ÉTAPE / FÉVRIER 2027', internshipTitle:'La prochaine étape : un stage rémunéré en développement logiciel.',
    internshipText:'Je recherche un stage curriculaire rémunéré de 680 heures à partir de février 2027, de préférence à Coimbra. Je suis ouvert au présentiel, à l’hybride ou au télétravail. Mon objectif à long terme est de devenir ingénieur logiciel en contribuant à des produits réels et en apprenant auprès de professionnels expérimentés.',
    targetStart:'Début : février 2027', mode:'Coimbra : présentiel / hybride / à distance', paidPreference:'Stage curriculaire rémunéré', internshipBottom:'UN PREMIER PAS DANS UN PARCOURS À LONG TERME EN INGÉNIERIE LOGICIELLE.',
    contactTitle:'Construisons quelque chose qui compte.', contactText:'Je recherche un stage curriculaire rémunéré de 680 heures à partir de février 2027, de préférence à Coimbra. Je souhaite contribuer à une équipe de développement, apprendre auprès d’ingénieurs expérimentés et progresser vers l’ingénierie logicielle.',
    carouselKicker:'PROJETS D’INGÉNIERIE SÉLECTIONNÉS', carouselRegionLabel:'Carrousel 3D interactif des quatre projets logiciels', carouselSkipIntro:'Passer l’introduction', carouselInteractionHint:'Glisser, balayer, utiliser les flèches ou le défilement', carouselPrevious:'Projet précédent', carouselNext:'Projet suivant', carouselSelectProject:'Sélectionner ce projet', carouselFeaturedLabel:'PROJET SÉLECTIONNÉ', carouselOpenLive:'Ouvrir le projet', carouselSourceCode:'Code source', carouselInDevelopment:'En développement', carouselPrototype:'Prototype en développement', carouselLive:'Projet en ligne',
    carouselCategories:{SaborGest:'SYSTÈME DE GESTION FULL-STACK',RunLattice:'PROTOTYPE D’AUTOMATISATION','MRDR.':'JEU DE DÉDUCTION','RAW.':'APPLICATION INTERACTIVE DE CONVERSATION'},
    carouselDescriptions:{SaborGest:'Système académique intégrant panneau PHP, API REST, base relationnelle et borne Android Kotlin pour horaires, présence et stocks.',RunLattice:'Prototype d’automatisation avec éditeur visuel, validation, persistance PostgreSQL et traitement asynchrone Redis/BullMQ.','MRDR.':'Jeu original de déduction explorant la génération et la validation de cas, la progression, les tests et le mobile.','RAW.':'Application interactive de conversation et de jeux avec modes, cartes, gestes, animations, localisation et expérience mobile.'},
  },
  it: {
    navAbout:'Profilo', navPath:'Esperienza', navButton:'Parliamo di tirocinio',
    role:'STUDENTE DI SVILUPPO SOFTWARE / FUTURO INGEGNERE DEL SOFTWARE', eyebrow:'COSTRUIRE IL MIO PERCORSO NELL’INGEGNERIA DEL SOFTWARE / PORTOGALLO',
    titleOne:'Verso', titleTwo:'l’ingegneria del software', titleEnd:'.',
    intro:'Sono Leonardo, studente di Sviluppo Software all’ESAN, Università di Aveiro (2025–2027). Voglio crescere fino a diventare un ingegnere del software capace di comprendere e costruire sistemi completi: interfacce, logica di business, API, persistenza dei dati, elaborazione in background e applicazioni mobili.',
    workKicker:'01 / PROGETTI E LAVORO DI INGEGNERIA', workTitle:'Progetti che costruiscono il mio percorso', workIntro:'Quattro progetti che esplorano diverse dimensioni dell’ingegneria del software: applicazioni integrate, workflow, logica software ed esperienze interattive.',
    aboutKicker:'02 / DIREZIONE DI INGEGNERIA', aboutTitle:'Costruire il mio percorso verso l’ingegneria del software.',
    about1:'Il mio obiettivo a lungo termine è diventare un ingegnere del software e contribuire alle diverse fasi del ciclo di vita di un prodotto. Mi interessa comprendere il ragionamento dietro un’implementazione: analizzare i requisiti, scegliere una struttura, separare le responsabilità e verificare il comportamento.',
    about2:'I miei progetti mi permettono di esplorare diverse sfide di ingegneria. SaborGest riunisce backend PHP, API REST, database relazionale e chiosco Android; RunLattice esplora la validazione dei workflow e l’elaborazione asincrona; MRDR. si concentra su logica deduttiva, generazione dei casi e test automatici; RAW. esplora flussi di prodotto interattivi ed esperienze basate sui contenuti.',
    about3:'Sto sviluppando queste competenze attraverso la formazione, progetti indipendenti e feedback. Voglio entrare in un team di sviluppo dove contribuire a sistemi reali, imparare pratiche di ingegneria da professionisti esperti e costruire basi solide per una carriera nell’ingegneria del software.',
    servicesKicker:'INTERESSI DI INGEGNERIA', servicesTitle:'Aree in cui voglio crescere', servicesIntro:'Aree che esploro attraverso studio e progetti. Rappresentano la direzione della mia crescita, non specializzazioni professionali già consolidate.',
    serviceItems:[
      ["Sviluppo full-stack e di prodotto", "Capire come requisiti, interfacce, regole di business e livelli di dati lavorano insieme."],
      ["Backend, API e sistemi di dati", "Sviluppare logica server, API REST, modelli di dati, persistenza ed elaborazione asincrona."],
      ["Applicazioni frontend e mobile", "Sviluppare interfacce utente ed esplorare Android e le applicazioni mobili."],
      ["Architettura software e qualità", "Imparare a strutturare i sistemi, separare le responsabilità, testare i comportamenti e migliorare la manutenibilità."]
    ],
    skillsKicker:'BASE TECNICA', skillsTitle:'Tecnologie che posso dimostrare', skillsIntro:'Tecnologie utilizzate nella formazione, nei tirocini o nei quattro progetti principali. L’esperienza varia per strumento; stato e limiti sono documentati.',
    skillGroups:[['LINGUAGGI E FRONTEND','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],['BACKEND E API','PHP','PDO','API REST','Next.js Route Handlers','Node.js (runtime)'],['DATI ED ELABORAZIONE','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],['MOBILE, STATO E TEST','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub']],
    pathKicker:'03 / ESPERIENZA SOFTWARE', pathTitle:'Esperienza nello sviluppo software.', educationAdditional:'',
    aboutBandTagline:'INGEGNERIA DEL SOFTWARE / IN COSTRUZIONE', aboutMiniOne:'IMPARARE COSTRUENDO.', aboutMiniTwo:'UN SISTEMA ALLA VOLTA.',
    internshipKicker:'PROSSIMO PASSO / FEBBRAIO 2027', internshipTitle:'Il prossimo passo: un tirocinio retribuito nello sviluppo software.',
    internshipText:'Cerco un tirocinio curriculare retribuito di 680 ore con inizio a febbraio 2027, preferibilmente a Coimbra. Sono disponibile in presenza, in modalità ibrida o da remoto. Il mio obiettivo a lungo termine è crescere come ingegnere del software contribuendo a prodotti reali e imparando da professionisti esperti.',
    targetStart:'Inizio: febbraio 2027', mode:'Coimbra: in presenza / ibrido / da remoto', paidPreference:'Tirocinio curriculare retribuito', internshipBottom:'UN PRIMO PASSO IN UN PERCORSO A LUNGO TERMINE NELL’INGEGNERIA DEL SOFTWARE.',
    contactTitle:'Costruiamo qualcosa di significativo.', contactText:'Cerco un tirocinio curriculare retribuito di 680 ore da febbraio 2027, preferibilmente a Coimbra. Voglio contribuire a un team di sviluppo, imparare da ingegneri esperti e continuare a crescere verso l’ingegneria del software.',
    carouselKicker:'PROGETTI DI INGEGNERIA IN EVIDENZA', carouselRegionLabel:'Carosello 3D interattivo di quattro progetti software', carouselSkipIntro:'Salta introduzione', carouselInteractionHint:'Trascina, scorri, usa le frecce o lo scroll per ruotare', carouselPrevious:'Progetto precedente', carouselNext:'Progetto successivo', carouselSelectProject:'Seleziona questo progetto', carouselFeaturedLabel:'PROGETTO SELEZIONATO', carouselOpenLive:'Apri progetto', carouselSourceCode:'Codice sorgente', carouselInDevelopment:'In sviluppo', carouselPrototype:'Prototipo in sviluppo', carouselLive:'Progetto pubblicato',
    carouselCategories:{SaborGest:'SISTEMA GESTIONALE FULL-STACK',RunLattice:'PROTOTIPO AUTOMAZIONE WORKFLOW','MRDR.':'GIOCO DI DEDUZIONE','RAW.':'APP INTERATTIVA DI CONVERSAZIONE'},
    carouselDescriptions:{SaborGest:'Sistema accademico con pannello Web PHP, API REST, database relazionale e chiosco Android Kotlin per turni, presenze e magazzino.',RunLattice:'Prototipo di automazione con editor visuale, validazione, persistenza PostgreSQL ed elaborazione in background Redis/BullMQ.','MRDR.':'Gioco originale di deduzione con generazione e validazione dei casi, progressione, test e distribuzione mobile.','RAW.':'App interattiva di conversazione e giochi con modalità, carte, gesti, animazioni, localizzazione ed esperienza mobile.'},
  },
  de: {
    navAbout:'Profil', navPath:'Erfahrung', navButton:'Praktikum besprechen',
    role:'STUDENT DER SOFTWAREENTWICKLUNG / ANGEHENDER SOFTWAREINGENIEUR', eyebrow:'MEIN WEG IN DIE SOFTWAREENTWICKLUNG / PORTUGAL',
    titleOne:'Auf dem Weg', titleTwo:'zur Softwareentwicklung', titleEnd:'.',
    intro:'Ich bin Leonardo und studiere Softwareentwicklung an der ESAN, Universität Aveiro (2025–2027). Ich möchte mich zu einem Softwareingenieur entwickeln, der vollständige Systeme versteht und baut: Benutzeroberflächen, Geschäftslogik, APIs, Datenspeicherung, Hintergrundverarbeitung und mobile Anwendungen.',
    workKicker:'01 / PROJEKTE UND ENGINEERING-ARBEIT', workTitle:'Projekte auf meinem Weg zum Softwareingenieur', workIntro:'Vier Projekte, die verschiedene Bereiche der Softwareentwicklung erkunden: integrierte Anwendungen, Workflow-Verarbeitung, Softwarelogik und interaktive Produkterlebnisse.',
    aboutKicker:'02 / ENGINEERING-RICHTUNG', aboutTitle:'Meinen Weg in die Softwareentwicklung aufbauen.',
    about1:'Mein langfristiges Ziel ist es, Softwareingenieur zu werden und zum gesamten Produktlebenszyklus beizutragen. Mich interessiert die Überlegung hinter einer Implementierung: Anforderungen verstehen, eine Struktur wählen, Verantwortlichkeiten trennen und Verhalten prüfen.',
    about2:'Meine Projekte ermöglichen mir verschiedene Engineering-Herausforderungen. SaborGest verbindet PHP-Backend, REST-API, relationale Datenbank und Android-Kiosk; RunLattice untersucht Workflow-Validierung und asynchrone Verarbeitung; MRDR. konzentriert sich auf Deduktionslogik, Fallgenerierung und automatisierte Tests; RAW. erkundet interaktive Produktabläufe und inhaltsorientierte Erlebnisse.',
    about3:'Ich entwickle diese Fähigkeiten durch Ausbildung, eigene Projekte und Feedback. Ich möchte einem Entwicklungsteam beitreten, zu realen Systemen beitragen, von erfahrenen Ingenieuren lernen und eine solide Grundlage für eine langfristige Karriere in der Softwareentwicklung aufbauen.',
    servicesKicker:'ENGINEERING-INTERESSEN', servicesTitle:'Bereiche, in denen ich mich weiterentwickeln möchte', servicesIntro:'Bereiche, die ich in Ausbildung und Projekten erkunde. Sie beschreiben meine Entwicklungsrichtung, keine bereits gefestigten beruflichen Spezialisierungen.',
    serviceItems:[
      ["Full-Stack- und Produktentwicklung", "Verstehen, wie Anforderungen, Benutzeroberflächen, Geschäftsregeln und Datenschichten zusammenspielen."],
      ["Backend, APIs und Datensysteme", "Serverlogik, REST-APIs, Datenmodelle, Persistenz und asynchrone Verarbeitung entwickeln."],
      ["Frontend- und mobile Anwendungen", "Benutzeroberflächen entwickeln und Android- sowie mobile Anwendungen erkunden."],
      ["Softwarearchitektur und Qualität", "Lernen, Systeme zu strukturieren, Verantwortlichkeiten zu trennen, Verhalten zu testen und Wartbarkeit zu verbessern."]
    ],
    skillsKicker:'TECHNISCHE GRUNDLAGEN', skillsTitle:'Technologien, die ich belegen kann', skillsIntro:'Technologien aus Ausbildung, Praktika oder den vier hervorgehobenen Projekten. Die Erfahrung variiert je nach Werkzeug; Status und Grenzen sind dokumentiert.',
    skillGroups:[['SPRACHEN UND FRONTEND','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],['BACKEND UND APIs','PHP','PDO','REST APIs','Next.js Route Handlers','Node.js (runtime)'],['DATEN UND VERARBEITUNG','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],['MOBILE, STATE UND TESTS','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub']],
    pathKicker:'03 / SOFTWAREERFAHRUNG', pathTitle:'Erfahrung in der Softwareentwicklung.', educationAdditional:'',
    aboutBandTagline:'SOFTWAREENGINEERING / IM AUFBAU', aboutMiniOne:'LERNEN DURCH BAUEN.', aboutMiniTwo:'EIN SYSTEM NACH DEM ANDEREN.',
    internshipKicker:'NÄCHSTER SCHRITT / FEBRUAR 2027', internshipTitle:'Der nächste Schritt: ein bezahltes Praktikum in der Softwareentwicklung.',
    internshipText:'Ich suche ab Februar 2027 ein bezahltes Pflichtpraktikum mit 680 Stunden, vorzugsweise in Coimbra. Präsenz-, Hybrid- und Remote-Arbeit sind möglich. Mein langfristiges Ziel ist es, mich zum Softwareingenieur zu entwickeln, an realen Produkten mitzuwirken und von erfahrenen Fachleuten zu lernen.',
    targetStart:'Start: Februar 2027', mode:'Coimbra: vor Ort / hybrid / remote', paidPreference:'Bezahltes Pflichtpraktikum', internshipBottom:'EIN ERSTER SCHRITT AUF EINEM LANGFRISTIGEN WEG IN DIE SOFTWAREENTWICKLUNG.',
    contactTitle:'Lass uns etwas Bedeutendes bauen.', contactText:'Ich suche ab Februar 2027 ein bezahltes 680-stündiges Pflichtpraktikum, vorzugsweise in Coimbra. Ich möchte zu einem Entwicklungsteam beitragen, von erfahrenen Ingenieuren lernen und mich in Richtung Softwareentwicklung weiterentwickeln.',
    carouselKicker:'AUSGEWÄHLTE ENGINEERING-PROJEKTE', carouselRegionLabel:'Interaktives 3D-Karussell mit vier Softwareprojekten', carouselSkipIntro:'Einführung überspringen', carouselInteractionHint:'Ziehen, wischen, Pfeile oder Scrollen zum Drehen verwenden', carouselPrevious:'Vorheriges Projekt', carouselNext:'Nächstes Projekt', carouselSelectProject:'Dieses Projekt auswählen', carouselFeaturedLabel:'AUSGEWÄHLTES PROJEKT', carouselOpenLive:'Projekt öffnen', carouselSourceCode:'Quellcode', carouselInDevelopment:'In Entwicklung', carouselPrototype:'Prototyp in Entwicklung', carouselLive:'Veröffentlichtes Projekt',
    carouselCategories:{SaborGest:'FULL-STACK-VERWALTUNGSSYSTEM',RunLattice:'WORKFLOW-AUTOMATISIERUNGSPROTOTYP','MRDR.':'DEDUKTIONSSPIEL','RAW.':'INTERAKTIVE KONVERSATIONS-APP'},
    carouselDescriptions:{SaborGest:'Akademisches System mit PHP-Webpanel, REST-API, relationaler Datenbank und Android-Kiosk in Kotlin für Dienstpläne, Anwesenheit und Lager.',RunLattice:'Automatisierungsprototyp mit visuellem Editor, Validierung, PostgreSQL-Persistenz und Hintergrundverarbeitung mit Redis/BullMQ.','MRDR.':'Originelles Deduktionsspiel mit Fallgenerierung und -validierung, Fortschrittssystemen, Tests und mobiler Bereitstellung.','RAW.':'Interaktive Gesprächs- und Spiele-App mit verschiedenen Modi, Karten, Gesten, Animationen, Lokalisierung und mobiler Erfahrung.'},
  },
  ja: {
    navAbout:'プロフィール', navPath:'経験', navButton:'実習について相談',
    role:'ソフトウェア開発専攻の学生 / 将来のソフトウェアエンジニア', eyebrow:'ソフトウェアエンジニアリングへの道を築く / ポルトガル',
    titleOne:'目指す', titleTwo:'ソフトウェアエンジニアリング', titleEnd:'。',
    intro:'レオナルドです。アヴェイロ大学ESANでソフトウェア開発を学んでいます（2025–2027）。インターフェース、ビジネスロジック、API、データ永続化、バックグラウンド処理、モバイルアプリまで、システム全体を理解し構築できるソフトウェアエンジニアを目指しています。',
    workKicker:'01 / プロジェクトとエンジニアリング', workTitle:'エンジニアリングへの道をつくるプロジェクト', workIntro:'統合アプリケーション、ワークフロー処理、ソフトウェアロジック、インタラクティブな製品体験という異なる領域を探る4つのプロジェクトです。',
    aboutKicker:'02 / エンジニアリングの方向性', aboutTitle:'ソフトウェアエンジニアリングへの道を築く。',
    about1:'長期的な目標はソフトウェアエンジニアになり、製品のライフサイクル全体に貢献することです。要件を理解し、構造を選び、責任を分離し、動作を検証するという実装の背後にある考え方に関心があります。',
    about2:'プロジェクトを通してさまざまなエンジニアリング課題を探っています。SaborGestはPHPバックエンド、REST API、リレーショナルデータベース、Androidキオスクを統合します。RunLatticeはワークフロー検証と非同期処理を探ります。MRDR.は推理ロジック、ケース生成、自動テストに焦点を当てます。RAW.はインタラクティブな製品フローとコンテンツ体験を探ります。',
    about3:'授業、個人プロジェクト、フィードバックを通じてこれらのスキルを伸ばしています。実際のシステムに貢献し、経験豊富なエンジニアから実践を学び、長期的なソフトウェアエンジニアリングのキャリアに向けた基礎を築けるチームに参加したいと考えています。',
    servicesKicker:'エンジニアリングへの関心', servicesTitle:'これから深めたい分野', servicesIntro:'学習とプロジェクトを通じて探っている分野です。専門家としての実績ではなく、今後伸ばしたい方向性を示しています。',
    serviceItems:[
      ["フルスタックおよびプロダクト開発", "要件、インターフェース、ビジネスロジック、データ層がどのように連携するかを理解する。"],
      ["バックエンド、API、データシステム", "サーバー側のロジック、REST API、データモデル、永続化、非同期処理を開発する。"],
      ["フロントエンドおよびモバイルアプリ", "ユーザー向けインターフェースを開発し、Androidやモバイルアプリを探求する。"],
      ["ソフトウェアアーキテクチャと品質", "システム構造、責任の分離、動作検証、保守性の向上を学ぶ。"]
    ],
    skillsKicker:'技術的な基礎', skillsTitle:'実際に使用した技術', skillsIntro:'授業、実習、または4つの主要プロジェクトで使用した技術です。経験の深さはツールごとに異なり、プロジェクトの状態と制約も記載しています。',
    skillGroups:[['言語とフロントエンド','JavaScript','TypeScript','React','Next.js','Vite','React Router','HTML5','CSS3','Tailwind CSS','Framer Motion'],['バックエンドとAPI','PHP','PDO','REST API','Next.js Route Handlers','Node.js (runtime)'],['データと処理','SQL','MySQL / MariaDB','PostgreSQL','Prisma','Redis','BullMQ'],['モバイル、状態管理、テスト','Kotlin / Android','Capacitor','Zustand','Vitest','C','Git','GitHub']],
    pathKicker:'03 / ソフトウェア開発の経験', pathTitle:'ソフトウェア開発における経験。', educationAdditional:'',
    aboutBandTagline:'ソフトウェアエンジニアリング / 構築中', aboutMiniOne:'作りながら学ぶ。', aboutMiniTwo:'一つずつ確実に。',
    internshipKicker:'次のステップ / 2027年2月', internshipTitle:'次のステップ：有給のソフトウェア開発実習。',
    internshipText:'2027年2月開始、680時間の有給カリキュラム実習を希望しています。希望勤務地はコインブラで、出社、ハイブリッド、リモートのいずれにも対応できます。長期的には実際の製品に貢献し、経験豊富な開発者から学びながらソフトウェアエンジニアを目指します。',
    targetStart:'開始：2027年2月', mode:'コインブラ：出社 / ハイブリッド / リモート', paidPreference:'有給のカリキュラム実習', internshipBottom:'ソフトウェアエンジニアリングへの長い道のりの第一歩。',
    contactTitle:'意味のあるものを一緒に作りましょう。', contactText:'2027年2月から、コインブラを希望勤務地とする680時間の有給カリキュラム実習を希望しています。開発チームに貢献し、経験豊富なエンジニアから学び、成長したいと考えています。',
    carouselKicker:'注目のエンジニアリングプロジェクト', carouselRegionLabel:'4つのソフトウェアプロジェクトを表示するインタラクティブな3Dカルーセル', carouselSkipIntro:'イントロをスキップ', carouselInteractionHint:'ドラッグ、スワイプ、矢印キー、スクロールで回転', carouselPrevious:'前のプロジェクト', carouselNext:'次のプロジェクト', carouselSelectProject:'このプロジェクトを選択', carouselFeaturedLabel:'選択中のプロジェクト', carouselOpenLive:'公開プロジェクトを開く', carouselSourceCode:'ソースコード', carouselInDevelopment:'開発中', carouselPrototype:'開発中のプロトタイプ', carouselLive:'公開中のプロジェクト',
    carouselCategories:{SaborGest:'フルスタック管理システム',RunLattice:'ワークフロー自動化プロトタイプ','MRDR.':'推理ゲーム','RAW.':'インタラクティブな会話アプリ'},
    carouselDescriptions:{SaborGest:'PHP Webパネル、REST API、リレーショナルデータベース、Kotlin Androidキオスクを統合した学術プロジェクトです。',RunLattice:'ビジュアルエディター、検証、PostgreSQLの永続化、Redis/BullMQによるバックグラウンド処理を備える自動化プロトタイプです。','MRDR.':'ケース生成と論理検証、進行システム、テスト、モバイル配布を探るオリジナルの推理ゲームです。','RAW.':'複数のモード、カード、ジェスチャー、アニメーション、ローカライズ、モバイル体験を備える会話とゲームのアプリです。'},
  },
};
for (const [code, additions] of Object.entries(engineeringPositioningCopy)) {
  localeCopy[code] = { ...localeCopy[code], ...additions };
}

const recruiterFocusedCopy = {
  en: {
    navAbout: 'Profile', navPath: 'Experience', navContact: 'Contact', navButton: 'Contact',
    role: 'SOFTWARE DEVELOPMENT STUDENT', eyebrow: 'ESAN · UNIVERSITY OF AVEIRO',
    titleOne: 'I build', titleTwo: 'software', titleEnd: '.',
    intro: 'Web, backend and mobile projects built through coursework and independent work.',
    workKicker: '01 / SELECTED WORK', workTitle: 'Selected projects',
    workIntro: 'Four recent projects. Explore the product, technologies and source code.',
    moreProjects: 'More projects',
    projectSummaries: {
      SaborGest: 'Academic management system combining PHP, a REST API, MySQL/MariaDB and an Android kiosk. Includes schedules, attendance and stock; in development.',
      RunLattice: 'Workflow automation prototype with a visual editor, PostgreSQL and background jobs using Redis/BullMQ. External integrations are not implemented yet.',
      'MRDR.': 'Original deduction game with generated cases, cross-referenced clues and automated validation. In development.',
      'RAW.': 'Published conversation and party-game app with multiple modes, interactive cards and swipe gestures.',
    },
    aboutKicker: '02 / PROFILE', aboutTitle: 'A practical approach to software.',
    about1: 'Software Development student at ESAN-UA with practical experience from web and backend internships, plus independent frontend and mobile projects.',
    aboutBandTagline: 'SOFTWARE DEVELOPMENT', aboutMiniOne: 'BUILD THROUGH PRACTICE.', aboutMiniTwo: 'ONE PROJECT AT A TIME.',
    skillsKicker: 'TECHNOLOGIES', skillsTitle: 'Technical skills',
    skillGroups: [
      ['FRONTEND', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['BACKEND & DATA', 'PHP', 'REST APIs', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['MOBILE & TOOLS', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / EDUCATION & EXPERIENCE', pathTitle: 'Experience',
    priorEducation: '',
    availabilityLabel: 'PAID INTERNSHIP · 2027', targetStart: 'February 2027', location: 'Coimbra · hybrid / remote',
    internshipKicker: 'NEXT STEP / 2027', internshipTitle: 'Paid curricular internship',
    internshipText: 'Starting February 2027. Coimbra preferred; on-site, hybrid or remote.',
    internshipCta: 'Discuss the internship',
    cvDownload: 'Download CV',
    contactKicker: '04 / CONTACT', contactTitle: 'Let’s talk.',
    contactText: 'Open to software development internship opportunities.',
    emailLabel: 'EMAIL', socialsLabel: 'PROFESSIONAL PROFILES',
    contactEmailCta: 'Email about an opportunity',
    caseStudyLabel: 'Technical details',
  },
  'pt-PT': {
    navAbout: 'Perfil', navPath: 'Percurso', navContact: 'Contacto', navButton: 'Contacto',
    role: 'ESTUDANTE DE DESENVOLVIMENTO DE SOFTWARE', eyebrow: 'ESAN · UNIVERSIDADE DE AVEIRO',
    titleOne: 'Construo', titleTwo: 'software', titleEnd: '.',
    intro: 'Projetos web, backend e mobile, desenvolvidos na formação e por iniciativa própria.',
    workKicker: '01 / PROJETOS SELECIONADOS', workTitle: 'Projetos em destaque',
    workIntro: 'Quatro projetos recentes. Explora o produto, as tecnologias e o código.',
    moreProjects: 'Mais projetos',
    projectSummaries: {
      SaborGest: 'Sistema académico de gestão com PHP, API REST, MySQL/MariaDB e quiosque Android. Inclui horários, assiduidade e stock; em desenvolvimento.',
      RunLattice: 'Protótipo de automação com editor visual, PostgreSQL e processamento assíncrono com Redis/BullMQ. Ainda sem integrações externas.',
      'MRDR.': 'Jogo original de dedução com casos gerados, pistas cruzadas e validação automática. Em desenvolvimento.',
      'RAW.': 'Aplicação publicada de conversas e jogos, com vários modos, cartões interativos e gestos de deslize.',
    },
    aboutKicker: '02 / PERFIL', aboutTitle: 'Experiência prática em desenvolvimento.',
    about1: 'Estudante de Desenvolvimento de Software na ESAN-UA, com experiência em estágios Web e backend e projetos próprios de frontend e mobile.',
    aboutBandTagline: 'DESENVOLVIMENTO DE SOFTWARE', aboutMiniOne: 'APRENDER A CONSTRUIR.', aboutMiniTwo: 'UM PROJETO DE CADA VEZ.',
    skillsKicker: 'TECNOLOGIAS', skillsTitle: 'Competências técnicas',
    skillGroups: [
      ['FRONTEND', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['BACKEND E DADOS', 'PHP', 'APIs REST', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['MOBILE E FERRAMENTAS', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / FORMAÇÃO E EXPERIÊNCIA', pathTitle: 'Percurso',
    priorEducation: '',
    availabilityLabel: 'ESTÁGIO REMUNERADO · 2027', targetStart: 'Fevereiro de 2027', location: 'Coimbra · híbrido / remoto',
    internshipKicker: 'PRÓXIMO PASSO / 2027', internshipTitle: 'Estágio curricular remunerado',
    internshipText: 'Início em fevereiro de 2027. Preferência por Coimbra; presencial, híbrido ou remoto.',
    internshipCta: 'Falar sobre o estágio',
    cvDownload: 'Descarregar CV',
    contactKicker: '04 / CONTACTO', contactTitle: 'Vamos conversar.',
    contactText: 'Disponível para oportunidades de estágio em desenvolvimento de software.',
    emailLabel: 'EMAIL', socialsLabel: 'PERFIS PROFISSIONAIS',
    contactEmailCta: 'Enviar email sobre uma oportunidade',
    caseStudyLabel: 'Detalhes técnicos',
  },
  es: {
    navAbout: 'Perfil', navPath: 'Experiencia', navContact: 'Contacto', navButton: 'Contacto',
    role: 'ESTUDIANTE DE DESARROLLO DE SOFTWARE', eyebrow: 'ESAN · UNIVERSIDAD DE AVEIRO',
    titleOne: 'Creo', titleTwo: 'software', titleEnd: '.',
    intro: 'Proyectos web, backend y móviles desarrollados durante la formación y por iniciativa propia.',
    workKicker: '01 / PROYECTOS SELECCIONADOS', workTitle: 'Proyectos destacados',
    workIntro: 'Cuatro proyectos recientes. Explora el producto, las tecnologías y el código.',
    moreProjects: 'Más proyectos',
    projectSummaries: {
      SaborGest: 'Sistema académico con PHP, API REST, MySQL/MariaDB y un quiosco Android para horarios, asistencia y stock. En desarrollo.',
      RunLattice: 'Prototipo de automatización con editor visual, PostgreSQL y tareas en segundo plano mediante Redis/BullMQ. Sin integraciones externas todavía.',
      'MRDR.': 'Juego original de deducción con casos generados, pistas cruzadas y validación automática. En desarrollo.',
      'RAW.': 'Aplicación publicada de conversación y juegos con varios modos, tarjetas interactivas y gestos de deslizamiento.',
    },
    aboutKicker: '02 / PERFIL', aboutTitle: 'Experiencia práctica en desarrollo.',
    about1: 'Estudiante de Desarrollo de Software en ESAN-UA, con prácticas en desarrollo web y backend y proyectos propios de frontend y móvil.',
    aboutBandTagline: 'DESARROLLO DE SOFTWARE', aboutMiniOne: 'APRENDER CONSTRUYENDO.', aboutMiniTwo: 'UN PROYECTO A LA VEZ.',
    skillsKicker: 'TECNOLOGÍAS', skillsTitle: 'Competencias técnicas',
    skillGroups: [
      ['FRONTEND', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['BACKEND Y DATOS', 'PHP', 'API REST', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['MÓVIL Y HERRAMIENTAS', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / FORMACIÓN Y EXPERIENCIA', pathTitle: 'Experiencia',
    priorEducation: '',
    availabilityLabel: 'PRÁCTICAS REMUNERADAS · 2027', targetStart: 'Febrero de 2027', location: 'Coimbra · híbrido / remoto',
    internshipKicker: 'SIGUIENTE PASO / 2027', internshipTitle: 'Prácticas curriculares remuneradas',
    internshipText: 'Inicio en febrero de 2027. Preferencia por Coimbra; presencial, híbrido o remoto.',
    internshipCta: 'Hablar sobre las prácticas',
    cvDownload: 'Descargar CV',
    contactKicker: '04 / CONTACTO', contactTitle: 'Hablemos.',
    contactText: 'Disponible para oportunidades de prácticas en desarrollo de software.',
    emailLabel: 'EMAIL', socialsLabel: 'PERFILES PROFESIONALES',
    contactEmailCta: 'Escribir sobre una oportunidad',
    caseStudyLabel: 'Detalles técnicos',
  },
  fr: {
    navAbout: 'Profil', navPath: 'Parcours', navContact: 'Contact', navButton: 'Contact',
    role: 'ÉTUDIANT EN DÉVELOPPEMENT LOGICIEL', eyebrow: 'ESAN · UNIVERSITÉ D’AVEIRO',
    titleOne: 'Je crée', titleTwo: 'des logiciels', titleEnd: '.',
    intro: 'Projets web, backend et mobiles réalisés en formation et de manière indépendante.',
    workKicker: '01 / PROJETS SÉLECTIONNÉS', workTitle: 'Projets en vedette',
    workIntro: 'Quatre projets récents. Découvrez le produit, les technologies et le code.',
    moreProjects: 'Autres projets',
    projectSummaries: {
      SaborGest: 'Système académique en PHP, API REST, MySQL/MariaDB et borne Android pour les horaires, présences et stocks. En développement.',
      RunLattice: 'Prototype d’automatisation avec éditeur visuel, PostgreSQL et tâches en arrière-plan via Redis/BullMQ. Intégrations externes non disponibles.',
      'MRDR.': 'Jeu de déduction original avec cas générés, indices croisés et validation automatique. En développement.',
      'RAW.': 'Application publiée de conversation et de jeux avec plusieurs modes, cartes interactives et gestes de balayage.',
    },
    aboutKicker: '02 / PROFIL', aboutTitle: 'Une approche pratique du développement.',
    about1: 'Étudiant en développement logiciel à l’ESAN-UA, avec des stages en développement web et backend et des projets frontend et mobile indépendants.',
    aboutBandTagline: 'DÉVELOPPEMENT LOGICIEL', aboutMiniOne: 'APPRENDRE EN CONSTRUISANT.', aboutMiniTwo: 'UN PROJET À LA FOIS.',
    skillsKicker: 'TECHNOLOGIES', skillsTitle: 'Compétences techniques',
    skillGroups: [
      ['FRONTEND', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['BACKEND & DONNÉES', 'PHP', 'API REST', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['MOBILE & OUTILS', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / FORMATION ET EXPÉRIENCE', pathTitle: 'Parcours',
    priorEducation: '',
    availabilityLabel: 'STAGE RÉMUNÉRÉ · 2027', targetStart: 'Février 2027', location: 'Coimbra · hybride / à distance',
    internshipKicker: 'PROCHAINE ÉTAPE / 2027', internshipTitle: 'Stage curriculaire rémunéré',
    internshipText: 'Début en février 2027. Coimbra privilégiée ; présentiel, hybride ou à distance.',
    internshipCta: 'Parler du stage',
    cvDownload: 'Télécharger le CV',
    contactKicker: '04 / CONTACT', contactTitle: 'Parlons-en.',
    contactText: 'Disponible pour des opportunités de stage en développement logiciel.',
    emailLabel: 'E-MAIL', socialsLabel: 'PROFILS PROFESSIONNELS',
    contactEmailCta: 'Écrire au sujet d’une opportunité',
    caseStudyLabel: 'Détails techniques',
  },
  it: {
    navAbout: 'Profilo', navPath: 'Esperienza', navContact: 'Contatti', navButton: 'Contatti',
    role: 'STUDENTE DI SVILUPPO SOFTWARE', eyebrow: 'ESAN · UNIVERSITÀ DI AVEIRO',
    titleOne: 'Creo', titleTwo: 'software', titleEnd: '.',
    intro: 'Progetti web, backend e mobile sviluppati durante la formazione e in modo indipendente.',
    workKicker: '01 / PROGETTI SELEZIONATI', workTitle: 'Progetti in evidenza',
    workIntro: 'Quattro progetti recenti. Scopri il prodotto, le tecnologie e il codice.',
    moreProjects: 'Altri progetti',
    projectSummaries: {
      SaborGest: 'Sistema accademico in PHP, API REST, MySQL/MariaDB e chiosco Android per turni, presenze e magazzino. In sviluppo.',
      RunLattice: 'Prototipo di automazione con editor visuale, PostgreSQL e processi in background con Redis/BullMQ. Integrazioni esterne non ancora disponibili.',
      'MRDR.': 'Gioco originale di deduzione con casi generati, indizi incrociati e convalida automatica. In sviluppo.',
      'RAW.': 'App pubblicata per conversazioni e giochi, con modalità diverse, carte interattive e gesti swipe.',
    },
    aboutKicker: '02 / PROFILO', aboutTitle: 'Un approccio pratico allo sviluppo.',
    about1: 'Studente di Sviluppo Software all’ESAN-UA, con tirocini in sviluppo web e backend e progetti indipendenti frontend e mobile.',
    aboutBandTagline: 'SVILUPPO SOFTWARE', aboutMiniOne: 'IMPARARE COSTRUENDO.', aboutMiniTwo: 'UN PROGETTO ALLA VOLTA.',
    skillsKicker: 'TECNOLOGIE', skillsTitle: 'Competenze tecniche',
    skillGroups: [
      ['FRONTEND', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['BACKEND E DATI', 'PHP', 'API REST', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['MOBILE E STRUMENTI', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / FORMAZIONE ED ESPERIENZA', pathTitle: 'Esperienza',
    priorEducation: '',
    availabilityLabel: 'TIROCINIO RETRIBUITO · 2027', targetStart: 'Febbraio 2027', location: 'Coimbra · ibrido / remoto',
    internshipKicker: 'PROSSIMO PASSO / 2027', internshipTitle: 'Tirocinio curricolare retribuito',
    internshipText: 'Inizio a febbraio 2027. Preferenza per Coimbra; in presenza, ibrido o da remoto.',
    internshipCta: 'Parliamo del tirocinio',
    cvDownload: 'Scarica CV',
    contactKicker: '04 / CONTATTI', contactTitle: 'Parliamone.',
    contactText: 'Disponibile per opportunità di tirocinio nello sviluppo software.',
    emailLabel: 'E-MAIL', socialsLabel: 'PROFILI PROFESSIONALI',
    contactEmailCta: 'Scrivi per un’opportunità',
    caseStudyLabel: 'Dettagli tecnici',
  },
  de: {
    navAbout: 'Profil', navPath: 'Erfahrung', navContact: 'Kontakt', navButton: 'Kontakt',
    role: 'STUDENT DER SOFTWAREENTWICKLUNG', eyebrow: 'ESAN · UNIVERSITÄT AVEIRO',
    titleOne: 'Ich entwickle', titleTwo: 'Software', titleEnd: '.',
    intro: 'Web-, Backend- und Mobile-Projekte aus Studium und eigener Arbeit.',
    workKicker: '01 / AUSGEWÄHLTE PROJEKTE', workTitle: 'Ausgewählte Projekte',
    workIntro: 'Vier aktuelle Projekte. Produkt, Technologien und Quellcode ansehen.',
    moreProjects: 'Weitere Projekte',
    projectSummaries: {
      SaborGest: 'Akademisches Verwaltungssystem mit PHP, REST-API, MySQL/MariaDB und Android-Kiosk für Dienstpläne, Anwesenheit und Lager. In Entwicklung.',
      RunLattice: 'Workflow-Automatisierungsprototyp mit visuellem Editor, PostgreSQL und Hintergrundjobs mit Redis/BullMQ. Externe Integrationen fehlen noch.',
      'MRDR.': 'Eigenständiges Deduktionsspiel mit generierten Fällen, verknüpften Hinweisen und automatischer Validierung. In Entwicklung.',
      'RAW.': 'Veröffentlichte Gesprächs- und Spiele-App mit mehreren Modi, interaktiven Karten und Wischgesten.',
    },
    aboutKicker: '02 / PROFIL', aboutTitle: 'Praxisorientierte Softwareentwicklung.',
    about1: 'Student der Softwareentwicklung an der ESAN-UA mit Praktika in Web- und Backendentwicklung sowie eigenen Frontend- und Mobile-Projekten.',
    aboutBandTagline: 'SOFTWAREENTWICKLUNG', aboutMiniOne: 'LERNEN DURCH MACHEN.', aboutMiniTwo: 'EIN PROJEKT NACH DEM ANDEREN.',
    skillsKicker: 'TECHNOLOGIEN', skillsTitle: 'Technische Fähigkeiten',
    skillGroups: [
      ['FRONTEND', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['BACKEND & DATEN', 'PHP', 'REST-APIs', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['MOBILE & TOOLS', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / AUSBILDUNG UND ERFAHRUNG', pathTitle: 'Erfahrung',
    priorEducation: '',
    availabilityLabel: 'BEZAHLTES PRAKTIKUM · 2027', targetStart: 'Februar 2027', location: 'Coimbra · hybrid / remote',
    internshipKicker: 'NÄCHSTER SCHRITT / 2027', internshipTitle: 'Bezahltes Pflichtpraktikum',
    internshipText: 'Beginn im Februar 2027. Coimbra bevorzugt; vor Ort, hybrid oder remote.',
    internshipCta: 'Praktikum besprechen',
    cvDownload: 'Lebenslauf herunterladen',
    contactKicker: '04 / KONTAKT', contactTitle: 'Lassen Sie uns sprechen.',
    contactText: 'Offen für Praktikumsmöglichkeiten in der Softwareentwicklung.',
    emailLabel: 'E-MAIL', socialsLabel: 'BERUFLICHE PROFILE',
    contactEmailCta: 'E-Mail zu einer Möglichkeit',
    caseStudyLabel: 'Technische Details',
  },
  ja: {
    navAbout: 'プロフィール', navPath: '経験', navContact: '連絡先', navButton: '連絡する',
    role: 'ソフトウェア開発専攻の学生', eyebrow: 'ESAN · アヴェイロ大学',
    titleOne: 'ソフトウェアを', titleTwo: 'つくる', titleEnd: '。',
    intro: '学業と個人開発を通じて、Web、バックエンド、モバイルのプロジェクトに取り組んでいます。',
    workKicker: '01 / 注目のプロジェクト', workTitle: '主なプロジェクト',
    workIntro: '最近の4つのプロジェクト。製品、技術、ソースコードをご覧ください。',
    moreProjects: 'その他のプロジェクト',
    projectSummaries: {
      SaborGest: 'PHP、REST API、MySQL/MariaDB、Androidキオスクを組み合わせた学業プロジェクト。シフト、出退勤、在庫を管理します。',
      RunLattice: 'ビジュアルエディター、PostgreSQL、Redis/BullMQによるバックグラウンド処理を備えた自動化プロトタイプです。',
      'MRDR.': '生成ケース、相互参照された手掛かり、自動検証を備えるオリジナルの推理ゲームです。',
      'RAW.': '複数モード、インタラクティブなカード、スワイプ操作を備える会話とゲームの公開アプリです。',
    },
    aboutKicker: '02 / プロフィール', aboutTitle: '実践を通じたソフトウェア開発。',
    about1: 'ESANでソフトウェア開発を学び、Web・バックエンドの実習と、フロントエンド・モバイルの個人プロジェクトに取り組んでいます。',
    aboutBandTagline: 'ソフトウェア開発', aboutMiniOne: '作りながら学ぶ。', aboutMiniTwo: '一つずつ着実に。',
    skillsKicker: '技術', skillsTitle: '技術スキル',
    skillGroups: [
      ['フロントエンド', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      ['バックエンドとデータ', 'PHP', 'REST API', 'MySQL / MariaDB', 'PostgreSQL', 'Prisma', 'Redis / BullMQ'],
      ['モバイルとツール', 'Kotlin / Android', 'Capacitor', 'Vitest', 'Git', 'GitHub'],
    ],
    pathKicker: '03 / 学歴と経験', pathTitle: '経験',
    priorEducation: '',
    availabilityLabel: '有給実習 · 2027', targetStart: '2027年2月', location: 'コインブラ · ハイブリッド / リモート',
    internshipKicker: '次のステップ / 2027年', internshipTitle: '有給のカリキュラム実習',
    internshipText: '2027年2月開始。コインブラを希望し、出社・ハイブリッド・リモートに対応できます。',
    internshipCta: '実習について相談',
    cvDownload: '履歴書をダウンロード',
    contactKicker: '04 / 連絡先', contactTitle: 'お話ししましょう。',
    contactText: 'ソフトウェア開発の実習機会を探しています。',
    emailLabel: 'メール', socialsLabel: 'プロフェッショナルプロフィール',
    contactEmailCta: '機会についてメールする',
    caseStudyLabel: '技術的な詳細',
  },
};

for (const [code, additions] of Object.entries(recruiterFocusedCopy)) {
  localeCopy[code] = { ...localeCopy[code], ...additions };
}

function ProjectArtwork({ type, name, image, imageAlt, previewUnavailable }) {
  if (type === 'group') {
    return (
      <div className="project-preview-unavailable project-preview-group">
        <span className="preview-label">ACADEMIC GROUP PROJECT</span>
        <strong>{name}</strong>
        <p>{previewUnavailable}</p>
      </div>
    );
  }

  if (type === 'nova') {
    return (
      <div className="project-preview-unavailable project-preview-nova">
        <span className="preview-label">CLIENT PROJECT / IN PREPARATION</span>
        <strong>{name}</strong>
        <p>Content structure and owner-managed editing workflow are being prepared. No finished public website is claimed.</p>
      </div>
    );
  }

  // Use the official itch.io player for RAW., with a direct link as a fallback.
  if (type === 'raw') {
    return (
      <div className="raw-itch-embed">
        <div className="raw-embed-heading">
          <span className="raw-embed-mark">RAW.</span>
          <span className="raw-embed-caption">INTERACTIVE CONVERSATION GAME / ITCH.IO</span>
        </div>
        <iframe
          src="https://itch.io/embed/5239051?bg_color=F7F5F0&fg_color=171717&link_color=E5483F&border_color=E5E2DC"
          width="100%"
          height="167"
          frameBorder="0"
          title="RAW. by ALV16 STUDIOS"
          loading="lazy"
        >
          <a href="https://alv16studios.itch.io/raw-conversation-game" target="_blank" rel="noreferrer">
            RAW. by ALV16 STUDIOS
          </a>
        </iframe>
        <a className="raw-embed-external" href="https://alv16studios.itch.io/raw-conversation-game" target="_blank" rel="noreferrer">
          Play RAW. on itch.io <span aria-hidden="true">↗</span>
        </a>
      </div>
    );
  }

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

  if (type === 'sabor' || type === 'runlattice' || type === 'mrdr') {
    return (
      <div className="project-preview-unavailable">
        <span className="preview-label">{type === 'sabor' || type === 'mrdr' ? 'PRIVATE PROJECT / IN DEVELOPMENT' : 'PROTOTYPE / IN DEVELOPMENT'}</span>
        <strong>{name}</strong>
        <p>{previewUnavailable}</p>
      </div>
    );
  }

  return (
    <div className="artwork artwork-code-real" aria-label="Real code excerpt from the ArraySorting repository">
      <div className="terminal-top"><span>CODE SAMPLE</span><small>Array Sorting.c / C</small></div>
      <pre className="real-code-sample" tabIndex={0}><code>{`void SelectionSort(int numbers[LIMIT]) {
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

function ProjectCard({ project, t, featured = false, language = 'en', position = 1 }) {
  const projectLocale = language === 'pt-PT' ? 'pt' : language;
  const details = extraProjectTranslations[language]?.[project.number] || projectTranslations[projectLocale]?.[project.number] || project;
  const caseStudy = project.caseStudy?.[projectLocale] || project.caseStudy?.en;
  return (
    <article className={`project-card project-${project.visual} ${featured ? 'project-featured' : ''}`}>
      <div className="project-visual-wrap"><ProjectArtwork type={project.visual} name={project.name} image={project.image} imageAlt={project.imageAlt} previewUnavailable={t.previewUnavailable} /><span className="project-number">{String(position).padStart(2, '0')} / {projects.length}</span></div>
      <div className="project-info">
        <div className="project-meta"><span>{details.type}</span><span>{project.year}</span></div>
        <h3>{project.name}<span className="brand-dot">.</span></h3>
        <p>{t.projectSummaries?.[project.name] || details.description}</p>
        <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {caseStudy && <details className="project-case-study">
          <summary>{t.caseStudyLabel}</summary>
          <div className="case-study-grid">
            <div><h4>{t.caseStudyProblem}</h4><p>{caseStudy.problem}</p></div>
            <div><h4>{t.caseStudyArchitecture}</h4><p>{caseStudy.architecture}</p></div>
            <div><h4>{t.caseStudyContribution}</h4><p>{caseStudy.contribution}</p></div>
            <div><h4>{t.caseStudyChallenges}</h4><p>{caseStudy.challenges}</p></div>
            <div className="case-study-result"><h4>{t.caseStudyResult}</h4><p>{caseStudy.result}</p></div>
          </div>
        </details>}
        <div className="project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-primary">{t.viewLive} <span>↗</span></a>}
          {project.source && <a href={project.source} target="_blank" rel="noreferrer" className="project-link">{t.viewCode} <span>↗</span></a>}
          {project.status && <span className="project-status">{details.status || project.status}</span>}
        </div>
      </div>
    </article>
  );
}

function SocialLink({ social }) {
  return <a className={`social-link social-${social.kind}`} href={social.url} target="_blank" rel="noreferrer"><span className="social-mark">{social.short}</span><span>{social.label}</span><span className="social-arrow">↗</span></a>;
}


function SparkIcon() {
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.8 14.2 9.8 21.2 12l-7 2.2-2.2 7-2.2-7-7-2.2 7-2.2L12 2.8Z" /></svg>;
}

function MenuIcon() {
  return <svg className="ui-icon menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>;
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}
function MapPinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}
function BriefcaseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></svg>;
}
function DownloadIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" /></svg>;
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
    if (languageOptions.some((option) => option.code === saved)) return saved;
  } catch { /* Storage can be unavailable in restricted contexts. */ }

  const browserLanguage = typeof navigator !== 'undefined' ? navigator.language : '';
  return browserLanguage.toLowerCase().startsWith('pt') ? 'pt-PT' : 'en';
}

const scrollProgressLabels = {
  en: 'Page reading progress',
  'pt-PT': 'Progresso de leitura da página',
  es: 'Progreso de lectura de la página',
  fr: 'Progression de lecture de la page',
  it: 'Avanzamento di lettura della pagina',
  de: 'Lesefortschritt der Seite',
  ja: 'ページのスクロール進捗',
};

function ScrollProgress({ language }) {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = Math.max(0, documentHeight - window.innerHeight);
      const progress = scrollableHeight > 0
        ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
        : 0;
      const roundedProgress = Math.round(progress);

      if (!progressRef.current) return;
      progressRef.current.style.transform = 'scaleX(' + progress / 100 + ')';
      progressRef.current.setAttribute('aria-valuenow', String(roundedProgress));
      progressRef.current.setAttribute('aria-valuetext', roundedProgress + '%');
    };

    let frameId = 0;
    const scheduleUpdate = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        frameId = 0;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(scheduleUpdate)
      : null;
    if (resizeObserver) {
      resizeObserver.observe(document.documentElement);
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div className="reading-progress-track">
      <div
        ref={progressRef}
        className="reading-progress-fill"
        role="progressbar"
        aria-label={scrollProgressLabels[language] || scrollProgressLabels.en}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        aria-valuetext="0%"
      />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const languageMenuRef = useRef(null);
  const t = localeCopy[language] || localeCopy.en;
  const isPortuguese = language === 'pt-PT';
  const studioProjects = projects.filter((project) => ['RAW.', 'MRDR.'].includes(project.name));
  const softwareProjects = projects.filter((project) => !['RAW.', 'MRDR.'].includes(project.name)).slice(0, 4);
  const additionalProjects = projects.filter((project) => !studioProjects.includes(project) && !softwareProjects.includes(project));
  const activeLanguage = languageOptions.find((option) => option.code === language) || languageOptions[0];
  const cvHref = language === 'pt-PT' ? '/cv-leonardo-alves-pt.pdf' : '/cv-leonardo-alves-en.pdf';
  const cvFilename = language === 'pt-PT' ? 'Leonardo-Alves-CV-PT-Engenharia-Software.pdf' : 'Leonardo-Alves-CV-EN-Software-Engineering.pdf';
  const internshipSubject = language === 'pt-PT'
    ? 'Oportunidade profissional - Leonardo Alves'
    : 'Professional opportunity - Leonardo Alves';
  const internshipBody = language === 'pt-PT'
    ? 'Olá, Leonardo.\n\nGostaria de falar sobre uma oportunidade profissional em desenvolvimento de software, na região de Aveiro ou Coimbra.\n\nTipo de oportunidade: emprego / estágio curricular de 680 horas\nRegime de trabalho: presencial / híbrido / remoto\n\nCom os melhores cumprimentos,'
    : 'Hello Leonardo,\n\nI would like to discuss a software development opportunity in the Aveiro or Coimbra area.\n\nOpportunity: employment / 680-hour curricular internship\nWorking arrangement: on-site / hybrid / remote\n\nKind regards,';
  const internshipHref = `mailto:16alves02@gmail.com?subject=${encodeURIComponent(internshipSubject)}&body=${encodeURIComponent(internshipBody)}`;
  const relevantExperience = experienceByLanguage[language] || experienceByLanguage.en;

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
      <ScrollProgress language={language} />
      <a className="skip-link" href="#main-content">{language === 'pt-PT' ? 'Saltar para o conteúdo' : language === 'es' ? 'Saltar al contenido' : language === 'fr' ? 'Aller au contenu' : language === 'it' ? 'Vai al contenuto' : language === 'de' ? 'Zum Inhalt springen' : language === 'ja' ? 'コンテンツへスキップ' : 'Skip to content'}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="16alves02 home">
            <img src="/logo.png" alt="Leonardo Alves monogram" />
            <span>16alves02<span className="brand-dot">.</span><small className="brand-owner">LEONARDO ALVES</small></span>
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
                aria-label={`${t.chooseLanguage}: ${activeLanguage.short} / ${activeLanguage.compact}`}
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

            <a className="header-cv" href={cvHref} download={cvFilename}><DownloadIcon />{t.cvDownload}</a>
            <button className="header-contact" onClick={() => goTo('contact')}>{t.navButton} <span>↗</span></button>
          </div>

          <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? t.closeMenu : t.openMenu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : <MenuIcon />}</button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-back-number" aria-hidden="true">16</div>
          <div className="hero-inner hero-inner-focused">
            <div className="hero-copy">
              <div className="hero-meta"><span className="status-dot" />{t.role}<span className="meta-slash">/</span>{t.eyebrow}</div>
              <h1>{t.titleOne}<br /><span className="hero-orange">{t.titleTwo}</span><span className="hero-period">{t.titleEnd}</span></h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-availability">
                <span className="availability-label">{t.availabilityLabel}</span>
                <div className="availability-facts">
                  <span>{t.targetStart}</span>
                  <span>{t.location}</span>
                </div>
              </div>
              <div className="hero-actions">
                <button className="button button-dark" onClick={() => goTo('work')}>{t.workButton}<span>↘</span></button>
                <a className="button button-outline" href={cvHref} download={cvFilename}><DownloadIcon />{t.cvDownload}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="location-section section-pad" aria-labelledby="location-title">
          <div className="location-panel">
            <div className="location-heading">
              <p className="section-kicker"><span>00</span> / {t.locationKicker}</p>
              <h2 id="location-title">{t.locationTitle}</h2>
            </div>
            <div className="location-copy">
              <p>{t.locationText}</p>
              <div className="location-facts">{t.locationFacts.map((fact) => <span key={fact}>{fact}</span>)}</div>
            </div>
            <span className="location-stamp" aria-hidden="true">PT<br />40°N</span>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><div><p className="section-kicker"><span>01</span> / {t.workKicker.split('/ ').slice(1).join('/ ')}</p><h2>{t.workTitle}<span className="brand-dot">.</span></h2></div><p className="section-description">{t.workIntro}</p></div>
          <div className="project-collection">
            <div className="project-collection-heading">
              <span className="project-collection-index">01 / {isPortuguese ? 'SOFTWARE & PRODUTOS DIGITAIS' : 'SOFTWARE & DIGITAL PRODUCTS'}</span>
              <h3>{isPortuguese ? 'Projetos de desenvolvimento' : 'Development projects'}</h3>
              <p>{isPortuguese ? 'Projetos académicos, experiências técnicas e produtos digitais que desenvolvo para explorar diferentes áreas de software.' : 'Academic projects, technical experiments and digital products exploring different areas of software development.'}</p>
            </div>
            <div className="projects-grid">{softwareProjects.map((project, index) => <ProjectCard key={project.number} project={project} t={t} language={language} position={index + 1} featured />)}</div>
          </div>
          <section className="studio-collection" aria-labelledby="studio-title">
            <div className="studio-identity">
              <div className="studio-mark"><span>ALV16</span><small>STUDIOS</small></div>
              <div className="studio-copy">
                <span className="project-collection-index">02 / {isPortuguese ? 'ESTÚDIO INDEPENDENTE DE JOGOS' : 'INDEPENDENT GAME STUDIO'}</span>
                <h3 id="studio-title">{isPortuguese ? 'Jogos com identidade própria.' : 'Games with their own identity.'}</h3>
                <p>{isPortuguese ? 'ALV16 STUDIOS é o espaço onde desenvolvo experiências interativas e projetos gaming. RAW. e MRDR. são os primeiros títulos deste universo — e não os últimos.' : 'ALV16 STUDIOS is where I develop interactive experiences and gaming projects. RAW. and MRDR. are the first titles in this universe — not the last.'}</p>
                <span className="studio-signature">A CREATIVE LABEL BY 16ALVES02</span>
              </div>
            </div>
            <div className="projects-grid studio-project-grid">{studioProjects.map((project, index) => <ProjectCard key={project.number} project={project} t={t} language={language} position={index + 1} featured />)}</div>
          </section>
          {additionalProjects.length > 0 && <details className="additional-projects">
            <summary>{t.moreProjects}<span className="additional-projects-count">{additionalProjects.length}</span></summary>
            <div className="projects-grid additional-projects-grid">
              {additionalProjects.map((project, index) => <ProjectCard key={project.number} project={project} t={t} language={language} position={index + 1} />)}
            </div>
          </details>}
        </section>

        <section className="about-section" id="about">
          <div className="about-band"><span>02 / {t.navAbout.toUpperCase()}</span><span>16ALVES02®</span><span>{t.aboutBandTagline}</span></div>
          <div className="about-inner section-pad">
            <div className="about-title-col"><p className="section-kicker">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><div className="about-logo"><img src="/logo.png" alt="LA" /><span>{t.aboutMiniOne}<br />{t.aboutMiniTwo}</span></div></div>
            <div className="about-copy"><p>{t.about1}</p></div>
          </div>
        </section>

        <section className="skills-section section-pad">
          <div className="section-heading"><div><p className="section-kicker">{t.skillsKicker}</p><h2>{t.skillsTitle}<span className="brand-dot">.</span></h2></div></div>
          <div className="skills-rows">{t.skillGroups.map((group, i) => <div className="skill-row" key={group[0]}><div className="skill-label"><span>0{i + 1}</span>{group[0]}</div><div className="skill-items">{group.slice(1).map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section className="background-section section-pad" id="background">
          <div className="section-heading">
            <div><p className="section-kicker">{t.pathKicker}</p><h2>{t.pathTitle}<span className="brand-dot">.</span></h2></div>
            <div className="education-card">
              <span className="education-label">{t.educationKicker}</span>
              <h3>{t.educationTitle}</h3>
              <span className="education-date">{t.educationDate}</span>
              <p>{t.educationWhere}</p>
              <div className="education-rule" />
              {t.educationAdditional && <p className="education-additional">{t.educationAdditional}</p>}
            </div>
          </div>
          <div className="experience-list">
            {relevantExperience.map((experience) => (
              <article className="experience-item" key={experience.id}>
                <span className="experience-year">{experience.date}</span>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <div className="tag-list">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="experience-symbol" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="internship-section" id="internship">
          <div className="internship-inner">
            <div className="internship-top"><span>{t.internshipKicker}</span></div>
            <div className="internship-content">
              <div className="internship-number">680<span>h</span></div>
              <div className="internship-copy">
                <h2>{t.internshipTitle}</h2>
                <p>{t.internshipText}</p>
                <a className="button button-dark" href={internshipHref}>{t.internshipCta}<span>↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top"><p className="section-kicker">{t.contactKicker}</p></div>
          <h2>{t.contactTitle}<span className="brand-dot">.</span></h2>
          <div className="contact-bottom">
            <div>
              <p>{t.contactText}</p>
              <span className="contact-email-label">{t.emailLabel}</span>
              <a className="contact-email" href="mailto:16alves02@gmail.com">16alves02@gmail.com <span>↗</span></a>
              <button className="copy-email" onClick={handleCopyEmail}>{copied ? t.copied : t.email}</button>
              <div className="contact-actions">
                <a className="button button-contact-cv" href={cvHref} download={cvFilename}><DownloadIcon />{t.cvDownload}</a>
                <a className="button button-outline" href={internshipHref}>{t.contactEmailCta}<span>↗</span></a>
              </div>
            </div>
            <div className="socials-block">
              <p className="section-kicker">{t.socialsLabel}</p>
              <div className="social-links">{socials.map((social) => <SocialLink key={social.label} social={social} />)}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home"><img src="/logo.png" alt="" /><span>16alves02<span className="brand-dot">.</span></span></a><p>{t.footerNote}</p><a href="#home" className="back-top">{t.footerTop}</a><span className="footer-year">© 2026</span></footer>
    </div>
  );
}