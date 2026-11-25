> **Idioma / Language:** [English](README.md) · [Português (Portugal)](README.pt-PT.md)

# Leonardo Alves — Portefólio de Desenvolvedor de Software

Portefólio bilingue de Leonardo Alves, Desenvolvedor de Software e estudante de Desenvolvimento de Software na Escola Superior Aveiro Norte, Universidade de Aveiro.

**Website:** https://16alves02.pages.dev  
**GitHub:** https://github.com/16alves02  
**LinkedIn:** https://www.linkedin.com/in/16alves02/  
**Contacto:** 16alves02@gmail.com

## Sobre

Desenvolvedor de Software com experiência prática em desenvolvimento web e backend, atualmente a frequentar o CTeSP em Desenvolvimento de Software (2025–2027). Interesso-me pelo desenvolvimento de produtos de software completos, desde interfaces e lógica de aplicação até APIs, dados e aplicações móveis.

## Objetivo atual

À procura de um **estágio curricular remunerado de 680 horas**, com início previsto em fevereiro de 2027. A localização apresentada no portefólio é Aveiro, Portugal. Disponível para oportunidades presenciais perto de Oliveira de Azeméis e oportunidades híbridas ou remotas nos distritos de Aveiro, Porto e Coimbra.

## Competências técnicas

Tecnologias e ferramentas utilizadas nos projetos apresentados:

- **Linguagens:** JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL
- **Frontend e aplicações:** HTML, CSS, React, Next.js, Vite, Android
- **Backend e dados:** APIs REST, Ktor, MySQL, MariaDB, PostgreSQL, Redis
- **Ferramentas e infraestrutura:** Git, GitHub, Docker, Prisma, BullMQ, Stripe

## Projetos selecionados

- **SaborGest** — Sistema académico de gestão para pequenos negócios de restauração, composto por painel web em PHP, API REST, MySQL/MariaDB e quiosque Android em Kotlin. Inclui gestão de colaboradores, horários, assiduidade e stock. Em desenvolvimento; não está preparado para produção. O repositório de origem é privado.
- **RunLattice** — Protótipo de automação de fluxos de trabalho com espaços de trabalho autenticados, editor visual, modelos, execução com Redis/BullMQ, webhooks assinados, tarefas agendadas, uma ação Discord ativa e propostas de fluxos por IA sujeitas a revisão. Os fluxos de faturação Stripe estão implementados, mas ainda exigem configuração de sandbox e validação ponta a ponta. Não está preparado para produção.
- **RAW.** — Aplicação social interativa de cartas e desafios, com três modos, 27 baralhos e conteúdo em seis idiomas. Existem demonstrações públicas para web e itch.io; o código-fonte é privado.
- **MRDR.** — Jogo original de dedução criminal baseado em provas, suspeitos, álibis, cronologias e pistas relacionadas. A versão funcional está concluída; o lançamento público na web, a distribuição Android assinada e a validação iOS continuam pendentes.
- **HOOP** — Projeto académico de frontend para uma loja de basquetebol, desenvolvido em React e TypeScript. Inclui descoberta de produtos, pesquisa, filtros, favoritos, carrinho e checkout simulado. Não processa compras reais.
- **Basket Hub** — Projeto académico de grupo para gestão de basquetebol, abrangendo equipas, jogadores, jogos, eventos, inscrições, recintos, organizadores, patrocinadores, classificações e estatísticas. Desenvolvido com Kotlin, Ktor, Thymeleaf, Exposed e H2. Não inclui autenticação/autorização de rotas, utiliza CORS permissivo (anyHost()) e tem testes automatizados limitados; não está preparado para produção e não é trabalho individual.
- **Tocadiscos Editora** — Aplicação académica de linha de comandos, desenvolvida em equipa, para gerir o catálogo de uma editora musical fictícia, com pesquisa, cálculo de royalties, relatórios financeiros, reprodução de áudio e histórico reversível de alterações.
- **Nova Imagem by Maura Pereira** — Website publicado para um salão de cabeleireiro, com informação de serviços, galeria, horário e contacto direto. Não existe marcação online; a configuração do Sanity CMS continua pendente.

O restante trabalho académico e pessoal inclui Two of Hearts, Todo App e ArraySorting.

As descrições distinguem projetos individuais, trabalhos de grupo, projetos académicos, protótipos, demonstrações públicas e software ainda não preparado para produção.

## Formação

- **CTeSP em Desenvolvimento de Software** — Escola Superior Aveiro Norte, Universidade de Aveiro (2025–2027)
- **Curso Profissional de Gestão e Programação de Sistemas Informáticos** — Escola Secundária Dr. Serafim Leite (2020–2023)

## Experiência

- Estágio de Desenvolvimento Backend — ClickBeauty / Alvocromático (abr–jul 2023)
- Estágio de Desenvolvimento Web — Associação Estamos Juntos (AEJ) (jul 2022)
- Operador de máquinas CNC — Schmidt Light Metal Group (fev 2025–mai 2026)
- Operador de loja — MC (mai–ago 2024)

## Abordagem técnica

O portefólio utiliza React, Vite, Framer Motion, HTML semântico e CSS. Inclui conteúdo em português e inglês, temas claro e escuro, navegação responsiva, estudos de caso, descarregamento de CV e formulário de contacto.

O formulário utiliza o FormSubmit como serviço externo de encaminhamento. Os envios são processados por esse fornecedor e estão sujeitos à respetiva política de privacidade e práticas de tratamento. O primeiro envio poderá exigir a confirmação do endereço de destino. Não existe backend, base de dados, CMS ou área de administração próprios. A nota de privacidade documenta o Cloudflare Web Analytics para métricas técnicas e de desempenho agregadas. Não está implementada medição personalizada de eventos para cliques em projetos, descarregamentos de CV ou envios do formulário.

## Desenvolvimento local

Requisitos: Node.js e npm.

~~~bash
npm install
npm run dev
~~~

Compilar e validar:

~~~bash
npm run build
npm run verify:theme
npm run verify:production
npm run preview
~~~

A compilação de produção é gerada em <code>dist/</code> e publicada através de Cloudflare Pages. A cadeia de ferramentas utiliza a linha de correções suportada do Vite 6.4.6.

Os PDFs bilingues do CV são gerados por <code>scripts/generate_cvs.py</code>. Para os regenerar localmente, instala o ReportLab com <code>python -m pip install reportlab</code> e executa <code>python scripts/generate_cvs.py</code>. O workflow GitHub Actions <code>Regenerate CV PDFs</code> atualiza os ficheiros quando o gerador é alterado.