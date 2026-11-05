import { useEffect, useRef } from 'react';
import { projects } from '../data/projects.js';

const featuredProjects = projects.slice(0, 4);

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

const storyContent = {
  SaborGest: {
    en: {
      problem: 'Small food businesses need a clearer way to coordinate schedules, attendance and stock instead of treating each task as a separate paper or spreadsheet process.',
      architecture: 'A PHP web panel and REST API share the same MySQL/MariaDB data layer. An Android kiosk built with Kotlin communicates with the API, keeping employee-facing time records connected to the management system.',
      implementation: 'The documented scope includes employee records, schedules, attendance, corrections and stock movements. Web and Android clients use the same API and database so the operational data is not duplicated between interfaces.',
      limits: 'This is an academic project in development. Integration, installation in the target environment, acceptance testing and security validation still need to be completed before any production use.',
      nodes: ['Web management panel', 'PHP REST API', 'MySQL / MariaDB', 'Android kiosk · Kotlin'],
      stack: 'PHP 8.3 · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit',
    },
    pt: {
      problem: 'Pequenos negócios de restauração precisam de uma forma mais clara de coordenar horários, assiduidade e stock, em vez de tratar cada tarefa como um processo separado em papel ou folhas de cálculo.',
      architecture: 'Um painel Web e uma API REST em PHP partilham a mesma base de dados MySQL/MariaDB. Um quiosque Android desenvolvido em Kotlin comunica com a API, ligando os registos dos colaboradores ao sistema de gestão.',
      implementation: 'O âmbito documentado inclui colaboradores, horários, assiduidade, correções e movimentos de stock. Os clientes Web e Android utilizam a mesma API e base de dados para evitar duplicação dos dados operacionais.',
      limits: 'É um projeto académico em desenvolvimento. A integração, instalação no ambiente de destino, validação de aceitação e validação de segurança ainda precisam de ser concluídas antes de qualquer utilização em produção.',
      nodes: ['Painel de gestão Web', 'API REST em PHP', 'MySQL / MariaDB', 'Quiosque Android · Kotlin'],
      stack: 'PHP 8.3 · PDO · REST · MySQL/MariaDB · Kotlin · Retrofit',
    },
  },
  RunLattice: {
    en: {
      problem: 'The project explores how repeatable business tasks can be represented as visual workflows, validated before execution and monitored after being queued.',
      architecture: 'Next.js and React provide the workspace and visual editor. Route Handlers and Zod validate workflow data; PostgreSQL and Prisma persist definitions and run records; Redis and BullMQ handle background jobs.',
      implementation: 'The prototype includes workflow CRUD, graph validation, persistence, a queue-backed worker and execution history. Separating API requests from background processing establishes a foundation for longer-running tasks.',
      limits: 'The worker currently simulates graph traversal. External service integrations, authentication and workspace isolation are not implemented, so this remains a prototype rather than a production automation service.',
      nodes: ['Next.js / React UI', 'Route Handlers + Zod', 'PostgreSQL / Prisma', 'Redis + BullMQ', 'Worker · simulated traversal'],
      stack: 'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ',
    },
    pt: {
      problem: 'O projeto explora como tarefas repetíveis podem ser representadas através de workflows visuais, validadas antes da execução e acompanhadas depois de entrarem na fila.',
      architecture: 'Next.js e React disponibilizam o workspace e o editor visual. Route Handlers e Zod validam os dados; PostgreSQL e Prisma persistem definições e registos; Redis e BullMQ tratam do processamento em segundo plano.',
      implementation: 'O protótipo inclui operações CRUD de workflows, validação do grafo, persistência, worker integrado com a fila e histórico de execuções. Separar os pedidos da API do processamento em background cria uma base para tarefas mais demoradas.',
      limits: 'O worker simula atualmente o percurso do grafo. As integrações externas, autenticação e isolamento de workspaces ainda não estão implementados, pelo que continua a ser um protótipo.',
      nodes: ['Interface Next.js / React', 'Route Handlers + Zod', 'PostgreSQL / Prisma', 'Redis + BullMQ', 'Worker · percurso simulado'],
      stack: 'Next.js · React · TypeScript · PostgreSQL · Prisma · Redis · BullMQ',
    },
  },
  'MRDR.': {
    en: {
      problem: 'A deduction game depends on more than presenting clues: each generated case must remain logically consistent and lead to exactly one valid solution.',
      architecture: 'The project separates the React 19 / TypeScript interface from the deduction engine, case generator, data and Zustand-based progress store. Vitest covers the core rules, while Capacitor provides the mobile packaging path.',
      implementation: 'The documented game includes generated cases, cross-referenced clues, a Portugal-inspired campaign, local progression, achievements and daily challenges. The generator validates a case before it enters the campaign.',
      limits: 'MRDR. is still in development. The repository documents a 200-case campaign and automated validation, but the project has not been presented as a finished public release.',
      nodes: ['React / TypeScript UI', 'Deduction engine', 'Case generator + validator', 'Zustand progress store', 'Vitest + Capacitor'],
      stack: 'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor',
    },
    pt: {
      problem: 'Um jogo de dedução exige mais do que apresentar pistas: cada caso gerado tem de manter coerência lógica e conduzir a uma única solução válida.',
      architecture: 'O projeto separa a interface React 19 / TypeScript do motor de dedução, gerador de casos, dados e armazenamento de progresso com Zustand. O Vitest cobre as regras centrais e o Capacitor permite preparar a aplicação para mobile.',
      implementation: 'A documentação descreve casos gerados, pistas cruzadas, campanha inspirada em Portugal, progressão local, conquistas e desafios diários. O gerador valida cada caso antes de o incluir na campanha.',
      limits: 'O MRDR. continua em desenvolvimento. O repositório documenta uma campanha de 200 casos e validação automatizada, mas o projeto ainda não é apresentado como uma versão pública finalizada.',
      nodes: ['Interface React / TypeScript', 'Motor de dedução', 'Gerador e validador', 'Progresso com Zustand', 'Vitest + Capacitor'],
      stack: 'React 19 · TypeScript · Vite · Zustand · Vitest · Capacitor',
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

export default function EngineeringStories({ language = 'en' }) {
  const rootRef = useRef(null);
  const ui = storyUi[language] || storyUi.en;
  const copyLanguage = language === 'pt-PT' ? 'pt' : 'en';

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
          const isDevelopment = Boolean(project.status);
          return (
            <article className={`engineering-story story-${project.visual}`} key={project.name}>
              <div className="story-copy">
                <div className="story-project-head">
                  <span className="story-project-number">0{projectIndex + 1} / 04</span>
                  <span className="story-project-status">{project.status || ui.kicker}</span>
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
