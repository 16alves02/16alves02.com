import { useEffect, useRef } from 'react';
import { projects } from '../data/projects.js';

const featuredProjectNames = ['SaborGest', 'RunLattice', 'MRDR.', 'HOOP'];
const featuredProjects = featuredProjectNames.map((name) => projects.find((project) => project.name === name)).filter(Boolean);

const storyUi = {
  en: {
    kicker: 'ENGINEERING NOTES / FOUR PROJECTS',
    title: 'How the systems are put together.',
    intro: 'A closer look at the problem, architecture, implementation choices and current limits behind the work.',
    problem: 'Problem & context',
    architecture: 'Architecture & decisions',
    implementation: 'Implementation & validation',
    limits: 'Current state & next steps',
    architectureMap: 'System map',
    conceptual: 'Conceptual architecture based on the current project documentation.',
    expand: 'The highlighted layer follows the reading position.',
  },
  'pt-PT': {
    kicker: 'NOTAS DE ENGENHARIA / QUATRO PROJETOS',
    title: 'Como os sistemas são construídos.',
    intro: 'Uma análise mais próxima do problema, da arquitetura, das decisões de implementação e das limitações atuais.',
    problem: 'Problema e contexto',
    architecture: 'Arquitetura e decisões',
    implementation: 'Implementação e validação',
    limits: 'Estado atual e próximos passos',
    architectureMap: 'Mapa do sistema',
    conceptual: 'Arquitetura conceptual baseada na documentação atual do projeto.',
    expand: 'A camada destacada acompanha a leitura.',
  },
  es: {
    kicker: 'NOTAS DE INGENIERÍA / CUATRO PROYECTOS',
    title: 'Cómo se construyen los sistemas.',
    intro: 'Una mirada más cercana al problema, la arquitectura, las decisiones de implementación y los límites actuales.',
    problem: 'Problema y contexto', architecture: 'Arquitectura y decisiones', implementation: 'Implementación y validación',
    limits: 'Estado actual y próximos pasos', architectureMap: 'Mapa del sistema',
    conceptual: 'Arquitectura conceptual basada en la documentación actual del proyecto.', expand: 'La capa resaltada sigue la lectura.',
  },
  fr: {
    kicker: 'NOTES D’INGÉNIERIE / QUATRE PROJETS',
    title: 'Comment les systèmes sont construits.',
    intro: 'Un regard plus précis sur le problème, l’architecture, les choix d’implémentation et les limites actuelles.',
    problem: 'Problème et contexte', architecture: 'Architecture et décisions', implementation: 'Implémentation et validation',
    limits: 'État actuel et prochaines étapes', architectureMap: 'Carte du système',
    conceptual: 'Architecture conceptuelle basée sur la documentation actuelle du projet.', expand: 'La couche mise en évidence suit la lecture.',
  },
  it: {
    kicker: 'NOTE DI INGEGNERIA / QUATTRO PROGETTI',
    title: 'Come vengono costruiti i sistemi.',
    intro: 'Uno sguardo più approfondito al problema, all’architettura, alle decisioni di implementazione e ai limiti attuali.',
    problem: 'Problema e contesto', architecture: 'Architettura e decisioni', implementation: 'Implementazione e validazione',
    limits: 'Stato attuale e prossimi passi', architectureMap: 'Mappa del sistema',
    conceptual: 'Architettura concettuale basata sulla documentazione attuale del progetto.', expand: 'Il livello evidenziato segue la lettura.',
  },
  de: {
    kicker: 'ENGINEERING-NOTIZEN / VIER PROJEKTE',
    title: 'Wie die Systeme aufgebaut sind.',
    intro: 'Ein genauerer Blick auf Problem, Architektur, Implementierungsentscheidungen und aktuelle Grenzen.',
    problem: 'Problem und Kontext', architecture: 'Architektur und Entscheidungen', implementation: 'Implementierung und Validierung',
    limits: 'Aktueller Stand und nächste Schritte', architectureMap: 'Systemübersicht',
    conceptual: 'Konzeptionelle Architektur auf Grundlage der aktuellen Projektdokumentation.', expand: 'Die hervorgehobene Ebene folgt dem Lesefortschritt.',
  },
  ja: {
    kicker: 'エンジニアリングノート / 4つのプロジェクト',
    title: 'システムがどのように構築されているか。',
    intro: '各プロジェクトの課題、アーキテクチャ、実装上の判断、現在の制約を詳しく紹介します。',
    problem: '課題と背景', architecture: 'アーキテクチャと設計判断', implementation: '実装と検証',
    limits: '現在の状態と次の課題', architectureMap: 'システム構成図',
    conceptual: '現在のプロジェクト資料に基づく概念的なアーキテクチャです。', expand: '強調表示されたレイヤーは読書位置に連動します。',
  },
};

const storyStatus = {
  en: { inDevelopment:'In development', prototype:'Prototype in development', live:'Live demo' },
  'pt-PT': { inDevelopment:'Em desenvolvimento', prototype:'Protótipo em desenvolvimento', live:'Demo publicada' },
  es: { inDevelopment:'En desarrollo', prototype:'Prototipo en desarrollo', live:'Demo publicada' },
  fr: { inDevelopment:'En développement', prototype:'Prototype en développement', live:'Démo publiée' },
  it: { inDevelopment:'In sviluppo', prototype:'Prototipo in sviluppo', live:'Demo pubblicata' },
  de: { inDevelopment:'In Entwicklung', prototype:'Prototyp in Entwicklung', live:'Live-Demo' },
  ja: { inDevelopment:'開発中', prototype:'開発中のプロトタイプ', live:'公開デモ' },
};

const storyContent = {
  SaborGest: {
    en: {
      problem: 'Small food businesses need a clearer way to coordinate schedules, attendance and stock instead of treating each task as a separate paper or spreadsheet process.',
      architecture: 'A PHP web panel and REST API share the same MySQL/MariaDB data layer. An Android kiosk built with Kotlin communicates with the API, keeping employee-facing time records connected to the management system.',
      implementation: 'The documented scope includes employee records, schedules, attendance, corrections and stock movements. Web and Android clients use the same API and database so the operational data is not duplicated between interfaces.',
      limits: 'This is an academic project in development. Integration, installation in the target environment, acceptance testing and security validation still need to be completed before any production use.',
      nodes: ['Web management panel', 'PHP REST API', 'MySQL / MariaDB', 'Android kiosk · Kotlin'],
      stack: 'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit',
    },
    pt: {
      problem: 'Pequenos negócios de restauração precisam de uma forma mais clara de coordenar horários, assiduidade e stock, em vez de tratar cada tarefa como um processo separado em papel ou folhas de cálculo.',
      architecture: 'Um painel Web e uma API REST em PHP partilham a mesma base de dados MySQL/MariaDB. Um quiosque Android desenvolvido em Kotlin comunica com a API, ligando os registos dos colaboradores ao sistema de gestão.',
      implementation: 'O âmbito documentado inclui colaboradores, horários, assiduidade, correções e movimentos de stock. Os clientes Web e Android utilizam a mesma API e base de dados para evitar duplicação dos dados operacionais.',
      limits: 'É um projeto académico em desenvolvimento. A integração, instalação no ambiente de destino, validação de aceitação e validação de segurança ainda precisam de ser concluídas antes de qualquer utilização em produção.',
      nodes: ['Painel de gestão Web', 'API REST em PHP', 'MySQL / MariaDB', 'Quiosque Android · Kotlin'],
      stack: 'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit',
    },
  },
  RunLattice: {
    en: {
      problem: 'The project explores how repeatable business tasks can be designed as visual workflows, validated before execution and monitored after they are queued.',
      architecture: 'Next.js, React and TypeScript power the workspace and visual editor. Better Auth manages authenticated organisation workspaces; PostgreSQL and Prisma persist workflow definitions and run records; Redis and BullMQ process jobs in the background.',
      implementation: 'Implemented paths include workflow CRUD, graph validation, persistence, a queue worker, signed inbound webhooks, scheduled triggers, execution history and a live Discord message action.',
      limits: 'This is an early-stage prototype, not a production automation platform. The worker currently supports one trigger and at most one condition node per run; Discord is the only live external action. AI-generated workflow plans are review-only drafts and disabled by default. Durable step resumption, exactly-once delivery and additional provider actions are not complete.',
      nodes: ['Next.js / React editor', 'Better Auth workspaces', 'PostgreSQL / Prisma', 'Redis + BullMQ worker', 'Signed webhooks · cron · Discord'],
      stack: 'Next.js · React · TypeScript · Better Auth · PostgreSQL · Prisma · Redis · BullMQ · Vitest',
    },
    pt: {
      problem: 'O projeto explora como tarefas repetíveis podem ser desenhadas como workflows visuais, validadas antes da execução e acompanhadas depois de entrarem na fila.',
      architecture: 'Next.js, React e TypeScript suportam o workspace e o editor visual. Better Auth gere workspaces de organização autenticados; PostgreSQL e Prisma guardam definições e registos; Redis e BullMQ processam tarefas em segundo plano.',
      implementation: 'Os fluxos implementados incluem operações CRUD, validação do grafo, persistência, worker de filas, webhooks de entrada assinados, triggers agendados, histórico de execuções e uma ação funcional para enviar mensagens no Discord.',
      limits: 'É um protótipo em fase inicial, não uma plataforma de automação pronta para produção. O worker suporta atualmente um trigger e, no máximo, um nó de condição por execução; Discord é a única ação externa funcional. Os planos gerados por IA são rascunhos para revisão e estão desativados por predefinição. A retoma durável de etapas, entrega exatamente uma vez e outras ações de fornecedores ainda não estão concluídas.',
      nodes: ['Editor Next.js / React', 'Workspaces Better Auth', 'PostgreSQL / Prisma', 'Worker Redis + BullMQ', 'Webhooks assinados · cron · Discord'],
      stack: 'Next.js · React · TypeScript · Better Auth · PostgreSQL · Prisma · Redis · BullMQ · Vitest',
    },
  },
  'MRDR.': {
    en: {
      problem: 'A deduction game depends on more than presenting clues: generated cases need coherent relationships between evidence and clues, and the logic must be validated.',
      architecture: 'The project separates the React 19 / TypeScript interface from the deduction engine, case generator, data and Zustand-based progress store. Vitest covers the core rules, while Capacitor provides the mobile packaging path.',
      implementation: 'The documented game includes generated cases, cross-referenced clues, a Portugal-inspired campaign, local progression, achievements and daily challenges. The generator validates a case before it enters the campaign.',
      limits: 'MRDR. is still in development. Case generation and validation are part of the documented scope, but campaign coverage and solution uniqueness are not presented as verified metrics.',
      nodes: ['React / TypeScript UI', 'Deduction engine', 'Case generator + validator', 'Zustand progress store', 'Vitest + Capacitor'],
      stack: 'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor',
    },
    pt: {
      problem: 'Um jogo de dedução exige mais do que apresentar pistas: os casos gerados precisam de relações coerentes entre provas e pistas, e a lógica tem de ser validada.',
      architecture: 'O projeto separa a interface React 19 / TypeScript do motor de dedução, gerador de casos, dados e armazenamento de progresso com Zustand. O Vitest cobre as regras centrais e o Capacitor permite preparar a aplicação para mobile.',
      implementation: 'A documentação descreve casos gerados, pistas cruzadas, campanha inspirada em Portugal, progressão local, conquistas e desafios diários. O gerador valida cada caso antes de o incluir na campanha.',
      limits: 'O MRDR. continua em desenvolvimento. A geração e validação de casos fazem parte do âmbito documentado, mas a cobertura da campanha e a unicidade das soluções não são apresentadas como métricas verificadas.',
      nodes: ['Interface React / TypeScript', 'Motor de dedução', 'Gerador e validador', 'Progresso com Zustand', 'Vitest + Capacitor'],
      stack: 'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor',
    },
  },
  HOOP: {
    en: {
      problem: 'Explore the main stages of an online shopping journey for a basketball store, from finding products to reviewing a cart and completing a checkout flow.',
      architecture: 'A client-side application built with React and TypeScript, bundled with Vite and organised with React Router. The project focuses on interface state and navigation rather than a production commerce backend.',
      implementation: 'The academic frontend includes product discovery, search and filters, product pages, favourites, shared cart state and a multi-step checkout simulation.',
      limits: 'HOOP is an academic frontend concept. Checkout is simulated: it does not create real orders, process payments or connect to a live commerce backend.',
      nodes: ['React interface', 'Product catalogue', 'Filters · favourites · cart', 'Checkout flow', 'Simulation · no real payments'],
      stack: 'React · TypeScript · Vite · React Router',
    },
    pt: {
      problem: 'Explorar as principais etapas da experiência de compra numa loja de basquetebol, desde a descoberta de produtos até à revisão do carrinho e à finalização.',
      architecture: 'Aplicação do lado do cliente desenvolvida com React e TypeScript, compilada com Vite e organizada com React Router. O foco está na interface, no estado e na navegação, não num backend de comércio pronto para produção.',
      implementation: 'O frontend académico inclui descoberta de produtos, pesquisa e filtros, páginas de produto, favoritos, estado partilhado do carrinho e uma simulação de checkout em várias etapas.',
      limits: 'O HOOP é um conceito académico de frontend. O checkout é simulado: não cria encomendas reais, não processa pagamentos nem está ligado a um backend de comércio ativo.',
      nodes: ['Interface React', 'Catálogo de produtos', 'Filtros · favoritos · carrinho', 'Fluxo de checkout', 'Simulação · sem pagamentos reais'],
      stack: 'React · TypeScript · Vite · React Router',
    },
    es: {
      problem: 'Explorar las principales etapas de una compra en una tienda de baloncesto, desde descubrir productos hasta revisar el carrito y completar el proceso.',
      architecture: 'Aplicación del lado del cliente desarrollada con React y TypeScript, compilada con Vite y organizada con React Router. El foco está en la interfaz, el estado y la navegación, no en un backend comercial de producción.',
      implementation: 'El frontend académico incluye catálogo, búsqueda y filtros, páginas de producto, favoritos, estado compartido del carrito y una simulación de checkout en varios pasos.',
      limits: 'HOOP es un concepto académico de frontend. El checkout es simulado: no crea pedidos reales, no procesa pagos ni se conecta a un backend comercial activo.',
      nodes: ['Interfaz React', 'Catálogo de productos', 'Filtros · favoritos · carrito', 'Flujo de checkout', 'Simulación · sin pagos reales'],
      stack: 'React · TypeScript · Vite · React Router',
    },
    fr: {
      problem: 'Explorer les principales étapes d’un achat dans une boutique de basketball, de la découverte des produits à la vérification du panier et à la finalisation.',
      architecture: 'Application côté client développée avec React et TypeScript, compilée avec Vite et structurée avec React Router. Le projet porte sur l’interface, l’état et la navigation, pas sur un backend e-commerce de production.',
      implementation: 'Le frontend académique comprend un catalogue, la recherche et les filtres, des fiches produit, des favoris, un panier partagé et une simulation de paiement en plusieurs étapes.',
      limits: 'HOOP est un concept frontend académique. La finalisation est simulée : aucune commande réelle ni aucun paiement ne sont traités, et aucun backend commercial actif n’est connecté.',
      nodes: ['Interface React', 'Catalogue produits', 'Filtres · favoris · panier', 'Parcours de commande', 'Simulation · aucun paiement réel'],
      stack: 'React · TypeScript · Vite · React Router',
    },
    it: {
      problem: 'Esplorare le principali fasi di acquisto in un negozio di basket, dalla scoperta dei prodotti alla revisione del carrello e al completamento del checkout.',
      architecture: 'Applicazione client-side sviluppata con React e TypeScript, compilata con Vite e organizzata con React Router. Il progetto si concentra su interfaccia, stato e navigazione, non su un backend e-commerce di produzione.',
      implementation: 'Il frontend accademico include catalogo, ricerca e filtri, pagine prodotto, preferiti, stato condiviso del carrello e una simulazione di checkout in più passaggi.',
      limits: 'HOOP è un concept frontend accademico. Il checkout è simulato: non crea ordini reali, non elabora pagamenti e non è collegato a un backend commerciale attivo.',
      nodes: ['Interfaccia React', 'Catalogo prodotti', 'Filtri · preferiti · carrello', 'Flusso checkout', 'Simulazione · nessun pagamento reale'],
      stack: 'React · TypeScript · Vite · React Router',
    },
    de: {
      problem: 'Die wichtigsten Schritte eines Online-Einkaufs für einen Basketball-Shop erkunden – von der Produktsuche bis zum Warenkorb und Checkout.',
      architecture: 'Eine clientseitige Anwendung mit React und TypeScript, gebündelt mit Vite und strukturiert mit React Router. Im Mittelpunkt stehen Oberfläche, Zustand und Navigation, nicht ein produktives Commerce-Backend.',
      implementation: 'Das akademische Frontend umfasst Produktsuche, Filter, Produktseiten, Merkliste, einen gemeinsamen Warenkorb und einen mehrstufigen Checkout-Prototyp.',
      limits: 'HOOP ist ein akademisches Frontend-Konzept. Der Checkout ist simuliert: Es werden keine echten Bestellungen erstellt oder Zahlungen verarbeitet; eine aktive Commerce-Backend-Anbindung besteht nicht.',
      nodes: ['React-Oberfläche', 'Produktkatalog', 'Filter · Merkliste · Warenkorb', 'Checkout-Ablauf', 'Simulation · keine echten Zahlungen'],
      stack: 'React · TypeScript · Vite · React Router',
    },
    ja: {
      problem: 'バスケットボール用品店のオンライン購入体験について、商品発見からカート確認、チェックアウトまでの主な段階を検討します。',
      architecture: 'ReactとTypeScriptで構築し、Viteでバンドル、React Routerで画面遷移を管理するクライアント側アプリケーションです。本番用のECバックエンドではなく、UI、状態管理、ナビゲーションに重点を置いています。',
      implementation: '学習用フロントエンドには、商品一覧、検索とフィルター、商品ページ、お気に入り、共有カート状態、複数ステップのチェックアウトシミュレーションが含まれます。',
      limits: 'HOOPは学術的なフロントエンドのコンセプトです。チェックアウトはシミュレーションであり、実際の注文作成、決済処理、本番ECバックエンドとの接続はありません。',
      nodes: ['React UI', '商品カタログ', 'フィルター · お気に入り · カート', 'チェックアウトフロー', 'シミュレーション · 実決済なし'],
      stack: 'React · TypeScript · Vite · React Router',
    },
  },
  'RAW.': {
    en: {
      problem: 'RAW. explores how group conversations and party games can feel more engaging through different play modes, short interactions and a recognisable visual language.',
      architecture: 'The application uses React and JavaScript for the interface, with Tailwind CSS for styling and Framer Motion for transitions. The project also explores PWA delivery, localisation and structured content for its game modes.',
      implementation: 'The live application brings together question decks, multiple game modes, interactive cards, swipe gestures and animated transitions. Its content and interaction model are designed around group use on mobile screens.',
      limits: 'RAW. is available as a live interactive project, but its source repository is private. The portfolio describes the observable product experience and does not claim commercial adoption or usage metrics.',
      nodes: ['Question decks', 'Game modes', 'React interface', 'Card + swipe interactions', 'Motion + localisation'],
      stack: 'React · JavaScript · Tailwind CSS · Framer Motion',
    },
    pt: {
      problem: 'O RAW. explora como conversas em grupo e jogos sociais podem tornar-se mais envolventes através de diferentes modos de jogo, interações curtas e uma identidade visual reconhecível.',
      architecture: 'A aplicação utiliza React e JavaScript na interface, Tailwind CSS para estilos e Framer Motion para transições. O projeto também explora distribuição PWA, localização e organização de conteúdos por modo de jogo.',
      implementation: 'A aplicação publicada reúne baralhos de perguntas, vários modos de jogo, cartões interativos, gestos de deslize e transições animadas. O modelo de conteúdo e interação foi pensado para utilização em grupo em ecrãs mobile.',
      limits: 'O RAW. está disponível como projeto interativo, mas o repositório-fonte é privado. O portefólio descreve a experiência observável do produto e não apresenta alegações de adoção comercial ou métricas de utilização.',
      nodes: ['Baralhos de perguntas', 'Modos de jogo', 'Interface React', 'Interações por cartão e swipe', 'Motion + localização'],
      stack: 'React · JavaScript · Tailwind CSS · Framer Motion',
    },
  },
};

const additionalStoryContent = {
  SaborGest: {
    es: { problem:'Coordinar horarios, asistencia y stock sin procesos separados en papel u hojas de cálculo.', architecture:'Panel PHP y API REST sobre MySQL/MariaDB compartida; un quiosco Android en Kotlin se comunica con la misma API.', implementation:'El alcance documentado incluye empleados, horarios, asistencia, correcciones y movimientos de stock para los clientes web y Android.', limits:'Proyecto académico en desarrollo. Integración, instalación de destino, pruebas de aceptación y validación de seguridad pendientes; no está preparado para producción.', nodes:['Panel de gestión web','API REST PHP','MySQL / MariaDB','Quiosco Android · Kotlin'], stack:'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit' },
    fr: { problem:'Coordonner horaires, présence et stocks sans multiplier les processus papier ou les tableurs.', architecture:'Panneau PHP et API REST sur une base MySQL/MariaDB partagée ; une borne Android en Kotlin communique avec la même API.', implementation:'Le périmètre documenté comprend employés, horaires, présence, corrections et mouvements de stock pour les clients Web et Android.', limits:'Projet académique en développement. Intégration, installation cible, tests d’acceptation et validation de sécurité restent à terminer ; le projet n’est pas prêt pour la production.', nodes:['Panneau de gestion Web','API REST PHP','MySQL / MariaDB','Borne Android · Kotlin'], stack:'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit' },
    it: { problem:'Coordinare turni, presenze e magazzino senza processi separati su carta o fogli di calcolo.', architecture:'Pannello PHP e API REST su un database MySQL/MariaDB condiviso; un chiosco Android in Kotlin comunica con la stessa API.', implementation:'L’ambito documentato include dipendenti, turni, presenze, correzioni e movimenti di magazzino per i client Web e Android.', limits:'Progetto accademico in sviluppo. Integrazione, installazione nell’ambiente di destinazione, test di accettazione e validazione della sicurezza sono ancora da completare; non è pronto per la produzione.', nodes:['Pannello gestionale Web','API REST PHP','MySQL / MariaDB','Chiosco Android · Kotlin'], stack:'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit' },
    de: { problem:'Dienstpläne, Anwesenheit und Lagerbestand koordinieren, ohne getrennte Papier- oder Tabellenprozesse zu pflegen.', architecture:'PHP-Webpanel und REST-API nutzen eine gemeinsame MySQL/MariaDB-Datenbank; ein Kotlin-Android-Kiosk kommuniziert mit derselben API.', implementation:'Der dokumentierte Umfang umfasst Mitarbeitende, Dienstpläne, Anwesenheit, Korrekturen und Lagerbewegungen für Web- und Android-Clients.', limits:'Akademisches Projekt in Entwicklung. Integration, Installation in der Zielumgebung, Abnahmetests und Sicherheitsvalidierung müssen noch abgeschlossen werden; nicht produktionsbereit.', nodes:['Web-Verwaltungspanel','PHP REST API','MySQL / MariaDB','Android-Kiosk · Kotlin'], stack:'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit' },
    ja: { problem:'紙や表計算に分散せず、シフト、出退勤、在庫をまとめて管理する方法を探ります。', architecture:'PHP管理画面とREST APIがMySQL/MariaDBを共有し、Kotlin製Androidキオスクが同じAPIと通信します。', implementation:'文書化された範囲には、従業員、シフト、出退勤、修正、在庫移動が含まれます。WebとAndroidが同じAPIを使用します。', limits:'開発中の学業プロジェクトです。統合、対象環境への設置、受け入れテスト、安全性の検証は未完了で、本番運用の準備はできていません。', nodes:['Web管理画面','PHP REST API','MySQL / MariaDB','Androidキオスク · Kotlin'], stack:'PHP 8.2+ · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit' },
  },
  RunLattice: {
    es: { problem:'Representar tareas repetibles como workflows visuales, validarlos antes del procesamiento y consultar su estado después de entrar en una cola.', architecture:'Next.js y React ofrecen el editor; Route Handlers y Zod validan datos; PostgreSQL/Prisma persisten definiciones y Redis/BullMQ gestionan tareas en segundo plano.', implementation:'El prototipo incluye CRUD, validación del grafo, persistencia, worker conectado a la cola e historial de ejecuciones.', limits:'El worker simula el recorrido del grafo. Las integraciones externas, la autenticación y el aislamiento de espacios de trabajo no están implementados.', nodes:['Interfaz Next.js / React','Route Handlers + Zod','PostgreSQL / Prisma','Redis + BullMQ','Worker · recorrido simulado'], stack:'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ' },
    fr: { problem:'Représenter des tâches répétitives sous forme de workflows visuels, les valider avant traitement et suivre leur état après mise en file.', architecture:'Next.js et React fournissent l’éditeur ; Route Handlers et Zod valident les données ; PostgreSQL/Prisma stockent les définitions et Redis/BullMQ gèrent les tâches asynchrones.', implementation:'Le prototype comprend CRUD, validation du graphe, persistance, worker relié à la file et historique des exécutions.', limits:'Le worker simule le parcours du graphe. Les intégrations externes, l’authentification et l’isolation des espaces de travail ne sont pas implémentées.', nodes:['Interface Next.js / React','Route Handlers + Zod','PostgreSQL / Prisma','Redis + BullMQ','Worker · parcours simulé'], stack:'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ' },
    it: { problem:'Rappresentare attività ripetitive come workflow visuali, convalidarli prima dell’elaborazione e monitorarne lo stato dopo l’inserimento in coda.', architecture:'Next.js e React forniscono l’editor; Route Handlers e Zod convalidano i dati; PostgreSQL/Prisma persistono definizioni e Redis/BullMQ gestiscono i job in background.', implementation:'Il prototipo include CRUD, validazione del grafo, persistenza, worker collegato alla coda e storico delle esecuzioni.', limits:'Il worker simula il percorso del grafo. Integrazioni esterne, autenticazione e isolamento dei workspace non sono implementati.', nodes:['Interfaccia Next.js / React','Route Handlers + Zod','PostgreSQL / Prisma','Redis + BullMQ','Worker · percorso simulato'], stack:'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ' },
    de: { problem:'Wiederkehrende Aufgaben als visuelle Workflows modellieren, vor der Verarbeitung validieren und nach dem Einreihen überwachen.', architecture:'Next.js und React stellen den Editor bereit; Route Handlers und Zod validieren Daten; PostgreSQL/Prisma speichern Definitionen und Redis/BullMQ übernehmen Hintergrundaufgaben.', implementation:'Der Prototyp umfasst CRUD, Graphvalidierung, Persistenz, einen Queue-Worker und eine Ausführungshistorie.', limits:'Der Worker simuliert den Graphdurchlauf. Externe Integrationen, Authentifizierung und Workspace-Isolation sind nicht implementiert.', nodes:['Next.js / React UI','Route Handlers + Zod','PostgreSQL / Prisma','Redis + BullMQ','Worker · simulierte Verarbeitung'], stack:'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ' },
    ja: { problem:'繰り返し作業をビジュアルなworkflowとして表し、処理前に検証し、キュー投入後の状態を確認します。', architecture:'Next.js/Reactのエディター、Route HandlersとZodの検証、PostgreSQL/Prismaの永続化、Redis/BullMQのバックグラウンド処理で構成します。', implementation:'プロトタイプにはCRUD、グラフ検証、永続化、キューworker、実行履歴が含まれます。', limits:'workerは現在グラフ走査をシミュレートします。外部連携、認証、workspace分離は未実装です。', nodes:['Next.js / React UI','Route Handlers + Zod','PostgreSQL / Prisma','Redis + BullMQ','Worker · 走査シミュレーション'], stack:'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ' },
  },
  'MRDR.': {
    es: { problem:'Los casos generados deben relacionar pruebas e indicios de forma coherente, y la lógica debe validarse.', architecture:'La interfaz React 19/TypeScript está separada del motor, generador, datos y estado Zustand. Vitest cubre reglas y Capacitor prepara el empaquetado móvil.', implementation:'La documentación describe casos generados, pistas cruzadas, campaña inspirada en Portugal, progreso local, logros y retos diarios.', limits:'MRDR. sigue en desarrollo. La generación y validación de casos forman parte del alcance documentado, pero la cobertura de la campaña y la unicidad de las soluciones no se presentan como métricas verificadas.', nodes:['Interfaz React / TypeScript','Motor de deducción','Generador y validador','Progreso con Zustand','Vitest + Capacitor'], stack:'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor' },
    fr: { problem:'Un jeu de déduction ne consiste pas seulement à afficher des indices : les affaires générées doivent relier les preuves et les indices de façon cohérente, avec une logique à valider.', architecture:'L’interface React 19/TypeScript est séparée du moteur, du générateur, des données et du progrès Zustand. Vitest couvre les règles et Capacitor prépare le mobile.', implementation:'La documentation décrit des affaires générées, des indices croisés, une campagne inspirée du Portugal, la progression locale, des succès et des défis quotidiens.', limits:'MRDR. est en développement. La génération et la validation des affaires font partie du périmètre documenté ; la couverture de la campagne et l’unicité des solutions ne sont pas présentées comme des mesures vérifiées.', nodes:['Interface React / TypeScript','Moteur de déduction','Générateur et validateur','Progression avec Zustand','Vitest + Capacitor'], stack:'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor' },
    it: { problem:'Un gioco di deduzione non consiste solo nel presentare indizi: i casi generati devono collegare prove e indizi in modo coerente e la logica deve essere convalidata.', architecture:'L’interfaccia React 19/TypeScript è separata da motore, generatore, dati e progresso Zustand. Vitest copre le regole e Capacitor prepara il mobile.', implementation:'La documentazione descrive casi generati, indizi incrociati, campagna ispirata al Portogallo, progressione locale, achievement e sfide giornaliere.', limits:'MRDR. è in sviluppo. La generazione e la convalida dei casi fanno parte dell’ambito documentato; la copertura della campagna e l’unicità delle soluzioni non sono presentate come metriche verificate.', nodes:['Interfaccia React / TypeScript','Motore deduttivo','Generatore e validatore','Progressione con Zustand','Vitest + Capacitor'], stack:'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor' },
    de: { problem:'Ein Deduktionsspiel besteht aus mehr als Hinweisen: Generierte Fälle müssen Beweise und Hinweise logisch verknüpfen, und die Regeln müssen überprüft werden.', architecture:'Die React-19-/TypeScript-Oberfläche ist vom Motor, Generator, den Daten und dem Zustand-Fortschritt getrennt. Vitest prüft Regeln, Capacitor bereitet mobile Bereitstellung vor.', implementation:'Dokumentiert sind generierte Fälle, verknüpfte Hinweise, eine Portugal-Kampagne, lokaler Fortschritt, Erfolge und tägliche Herausforderungen.', limits:'MRDR. ist in Entwicklung. Fallgenerierung und Validierung gehören zum dokumentierten Umfang; Kampagnenabdeckung und eindeutige Lösungen werden nicht als verifizierte Kennzahlen dargestellt.', nodes:['React / TypeScript UI','Deduktionsmotor','Fallgenerator und Validator','Fortschritt mit Zustand','Vitest + Capacitor'], stack:'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor' },
    ja: { problem:'推理ゲームでは手掛かりを表示するだけでは不十分です。生成されたケースでは証拠と手掛かりの関係に一貫性が必要で、ロジックの検証も重要です。', architecture:'React 19/TypeScript UIを推理エンジン、生成器、データ、Zustandによる進行管理から分離します。Vitestで規則をテストし、Capacitorでモバイルに備えます。', implementation:'文書には、生成ケース、相互参照される手掛かり、ポルトガルをモチーフにしたキャンペーン、ローカル進行、実績、デイリーチャレンジが記載されています。', limits:'MRDR.は開発中です。ケース生成と検証は文書化された範囲に含まれますが、キャンペーンの網羅性や解答の一意性を検証済みの指標としては提示していません。', nodes:['React / TypeScript UI','推理エンジン','ケース生成・検証','Zustandによる進行管理','Vitest + Capacitor'], stack:'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor' },
  },
  'RAW.': {
    es: { problem:'RAW. explora cómo hacer más atractivas las conversaciones y los juegos en grupo con varios modos e interacciones breves.', architecture:'React y JavaScript construyen la interfaz; Tailwind CSS define los estilos y Framer Motion las transiciones. También explora PWA, localización y contenido organizado por modos.', implementation:'La aplicación publicada reúne mazos de preguntas, modos de juego, tarjetas interactivas, gestos de deslizamiento y transiciones animadas.', limits:'RAW. está disponible como proyecto interactivo, pero el repositorio es privado. No se afirman adopción comercial ni métricas de uso.', nodes:['Mazos de preguntas','Modos de juego','Interfaz React','Tarjetas y gestos','Motion + localización'], stack:'React · JavaScript · Tailwind CSS · Framer Motion' },
    fr: { problem:'RAW. explore comment rendre les conversations et jeux de groupe plus engageants grâce à plusieurs modes et interactions courtes.', architecture:'React et JavaScript construisent l’interface ; Tailwind CSS gère les styles et Framer Motion les transitions. Le projet explore aussi PWA, localisation et contenu par mode.', implementation:'L’application publiée réunit paquets de questions, modes de jeu, cartes interactives, gestes de balayage et transitions animées.', limits:'RAW. est disponible comme projet interactif, mais le dépôt est privé. Aucune adoption commerciale ni métrique d’usage n’est revendiquée.', nodes:['Paquets de questions','Modes de jeu','Interface React','Cartes et gestes','Motion + localisation'], stack:'React · JavaScript · Tailwind CSS · Framer Motion' },
    it: { problem:'RAW. esplora come rendere più coinvolgenti conversazioni e giochi di gruppo con modalità diverse e interazioni rapide.', architecture:'React e JavaScript costruiscono l’interfaccia; Tailwind CSS gestisce gli stili e Framer Motion le transizioni. Il progetto esplora anche PWA, localizzazione e contenuti per modalità.', implementation:'L’app pubblicata riunisce mazzi di domande, modalità di gioco, carte interattive, gesti swipe e transizioni animate.', limits:'RAW. è disponibile come progetto interattivo, ma il repository è privato. Non vengono dichiarate adozione commerciale o metriche di utilizzo.', nodes:['Mazzi di domande','Modalità di gioco','Interfaccia React','Carte e gesti','Motion + localizzazione'], stack:'React · JavaScript · Tailwind CSS · Framer Motion' },
    de: { problem:'RAW. untersucht, wie Gruppengespräche und Spiele durch verschiedene Modi und kurze Interaktionen ansprechender werden.', architecture:'React und JavaScript bilden die Oberfläche; Tailwind CSS gestaltet sie und Framer Motion animiert Übergänge. PWA, Lokalisierung und Inhalte pro Spielmodus werden ebenfalls erkundet.', implementation:'Die veröffentlichte Anwendung bietet Fragen-Decks, Spielmodi, interaktive Karten, Wischgesten und animierte Übergänge.', limits:'RAW. ist als interaktives Projekt verfügbar, das Quellrepository ist privat. Es werden keine kommerzielle Nutzung oder Kennzahlen behauptet.', nodes:['Fragen-Decks','Spielmodi','React-Oberfläche','Karten und Gesten','Motion + Lokalisierung'], stack:'React · JavaScript · Tailwind CSS · Framer Motion' },
    ja: { problem:'RAW.は複数のモードと短い操作を通じて、グループ会話やゲームをより魅力的にする方法を探ります。', architecture:'React/JavaScriptがUI、Tailwind CSSがスタイル、Framer Motionがアニメーションを担当します。PWA、ローカライズ、モード別コンテンツも扱います。', implementation:'公開アプリには、質問デッキ、複数モード、インタラクティブなカード、スワイプ操作、アニメーションが含まれます。', limits:'RAW.は公開プロジェクトですが、ソースリポジトリは非公開です。商用利用や利用数の指標は主張しません。', nodes:['質問デッキ','ゲームモード','React UI','カードとジェスチャー','Motion + ローカライズ'], stack:'React · JavaScript · Tailwind CSS · Framer Motion' },
  },
};
for (const [projectName, locales] of Object.entries(additionalStoryContent)) {
  Object.assign(storyContent[projectName], locales);
}

export default function EngineeringStories({ language = 'en' }) {
  const rootRef = useRef(null);
  const ui = { ...(storyUi[language] || storyUi.en), ...(storyStatus[language] || storyStatus.en) };
  const copyLanguage = language === 'pt-PT' ? 'pt' : language;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      root.querySelectorAll('.engineering-story').forEach((story) => {
        story.style.setProperty('--story-progress', '1');
      });
      return undefined;
    }

    const stories = Array.from(root.querySelectorAll('.engineering-story'));
    let frameId = 0;
    const update = () => {
      frameId = 0;
      const height = window.innerHeight || 1;
      for (const story of stories) {
        const rect = story.getBoundingClientRect();
        const total = rect.height + height;
        const progress = Math.max(0, Math.min(1, (height - rect.top) / total));
        story.style.setProperty('--story-progress', progress.toFixed(3));
        const chapters = story.querySelectorAll('[data-story-chapter]');
        const active = Math.min(chapters.length - 1, Math.max(0, Math.floor(progress * chapters.length)));
        chapters.forEach((chapter, index) => {
          if (index === active) chapter.setAttribute('aria-current', 'step');
          else chapter.removeAttribute('aria-current');
        });
      }
    };
    const schedule = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="engineering-stories section-pad" id="engineering-stories" ref={rootRef}>
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>02</span> / {ui.kicker}</p>
          <h2>{ui.title}<span className="brand-dot">.</span></h2>
        </div>
        <p className="section-description">{ui.intro}</p>
      </div>

      <div className="engineering-story-list">
        {featuredProjects.map((project, projectIndex) => {
          const content = storyContent[project.name]?.[copyLanguage] || storyContent[project.name]?.en;
          const status = project.status?.toLowerCase().includes('prototype') ? ui.prototype : /live|demo|published|publicado/i.test(project.status || '') ? ui.live : project.status ? ui.inDevelopment : ui.live;
          return (
            <article className={`engineering-story story-${project.visual}`} key={project.name}>
              <div className="story-copy">
                <div className="story-project-head">
                  <span className="story-project-number">0{projectIndex + 1} / 04</span>
                  <span className="story-project-status">{status}</span>
                </div>
                <h3>{project.name}<span className="brand-dot">.</span></h3>
                <div className="story-chapters">
                  <section className="story-chapter" data-story-chapter>
                    <span className="story-chapter-number">01</span>
                    <div><h4>{ui.problem}</h4><p>{content.problem}</p></div>
                  </section>
                  <section className="story-chapter" data-story-chapter>
                    <span className="story-chapter-number">02</span>
                    <div><h4>{ui.architecture}</h4><p>{content.architecture}</p></div>
                  </section>
                  <section className="story-chapter" data-story-chapter>
                    <span className="story-chapter-number">03</span>
                    <div><h4>{ui.implementation}</h4><p>{content.implementation}</p></div>
                  </section>
                  <section className="story-chapter" data-story-chapter>
                    <span className="story-chapter-number">04</span>
                    <div><h4>{ui.limits}</h4><p>{content.limits}</p></div>
                  </section>
                </div>
              </div>

              <aside className="story-visual" aria-label={ui.architectureMap}>
                <div className="story-visual-paper">
                  <div className="story-visual-topline"><span>{ui.architectureMap}</span><span>0{projectIndex + 1}</span></div>
                  <div className="story-visual-title">{project.name}<span className="brand-dot">.</span></div>
                  <div className="story-visual-nodes">
                    {content.nodes.map((node, index) => (
                      <div className="story-node" key={node} data-story-node>
                        <span className="story-node-index">0{index + 1}</span>
                        <strong>{node}</strong>
                        {index < content.nodes.length - 1 && <span className="story-node-connector" aria-hidden="true">↓</span>}
                      </div>
                    ))}
                  </div>
                  <div className="story-visual-stack">{content.stack}</div>
                  <p className="story-visual-note">{ui.conceptual}</p>
                  <div className="story-progress"><span /></div>
                </div>
                <p className="story-visual-hint">{ui.expand}</p>
              </aside>
            </article>
          );
        })}
      </div>
    </section>
  );
}
