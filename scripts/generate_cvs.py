from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle, KeepTogether

INK = HexColor("#211A1F")
MUTED = HexColor("#625B54")
ACCENT = HexColor("#EB4520")
PALE = HexColor("#F7F3EC")
LINE = HexColor("#D9D0C6")

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PUBLIC.mkdir(parents=True, exist_ok=True)

def make_styles():
    return {
        "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=INK, spaceAfter=1),
        "headline": ParagraphStyle("headline", fontName="Helvetica-Bold", fontSize=9.5, leading=11.5, textColor=ACCENT, spaceAfter=4),
        "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.2, leading=10.2, textColor=MUTED),
        "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9.6, leading=11.4, textColor=INK, spaceBefore=6, spaceAfter=4),
        "body": ParagraphStyle("body", fontName="Helvetica", fontSize=8.5, leading=10.8, textColor=INK, spaceAfter=2),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=7.8, leading=9.8, textColor=MUTED),
        "project": ParagraphStyle("project", fontName="Helvetica", fontSize=8.2, leading=10.4, textColor=INK, spaceAfter=1.8),
        "job": ParagraphStyle("job", fontName="Helvetica", fontSize=8.1, leading=10.2, textColor=INK, spaceAfter=1.5),
        "availability": ParagraphStyle("availability", fontName="Helvetica-Bold", fontSize=8.2, leading=10.2, textColor=INK),
    }

def paragraph(text, styles, style="body"):
    return Paragraph(text, styles[style])

def section(title, styles):
    return [
        Paragraph(escape(title.upper()), styles["section"]),
        HRFlowable(width="100%", thickness=0.5, color=LINE, spaceBefore=0, spaceAfter=3),
    ]

def build_cv(path, pt=False):
    s = make_styles()
    if pt:
        headline = "ESTUDANTE DE DESENVOLVIMENTO DE SOFTWARE | FUTURO ENGENHEIRO DE SOFTWARE"
        profile = ("Estudante do CTeSP em Desenvolvimento de Software na Escola Superior Aveiro Norte, Universidade de Aveiro (2025–2027). "
                   "Estou a construir competências em sistemas completos, desde interfaces e lógica de negócio até APIs, bases de dados, processamento assíncrono e aplicações móveis. "
                   "Procuro integrar uma equipa de desenvolvimento, contribuir para produtos reais e aprender com engenheiros experientes.")
        availability = "<b>ESTÁGIO CURRICULAR REMUNERADO</b> | <b>680 horas</b> | <b>Início: fevereiro de 2027</b> | <b>Preferência: Coimbra, Portugal</b> | Presencial / híbrido / remoto"
        labels = ["PERFIL", "BASE TÉCNICA DEMONSTRADA", "PROJETOS EM DESTAQUE", "EXPERIÊNCIA EM DESENVOLVIMENTO DE SOFTWARE", "FORMAÇÃO E IDIOMAS", "EXPERIÊNCIA ADICIONAL"]
        skills = [
            ("Linguagens e frontend", "JavaScript, TypeScript, React, Next.js, Vite, React Router, HTML5, CSS3, Tailwind CSS, Framer Motion"),
            ("Backend e APIs", "PHP, PDO, APIs REST, Next.js Route Handlers, Zod; Node.js como runtime do projeto Next.js"),
            ("Dados e processamento", "SQL, MySQL/MariaDB, PostgreSQL, Prisma, Redis, BullMQ"),
            ("Mobile, estado e testes", "Kotlin, Android, Retrofit, Capacitor, Zustand, Vitest, C, Git, GitHub"),
        ]
        projects = [
            ("SaborGest", "Projeto académico full-stack em desenvolvimento | PHP 8.3, PDO, REST API, MySQL/MariaDB, Kotlin, Android, Retrofit",
             "Desenvolvimento de um sistema de gestão com painel Web, API REST e quiosque Android. O âmbito documentado inclui colaboradores, horários, assiduidade, correções e movimentos de stock. A integração, instalação no ambiente de destino e validação de segurança continuam pendentes; não está preparado para produção."),
            ("RunLattice", "Protótipo de automação de workflows | Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, BullMQ, Vitest",
             "Construção de um editor visual e operações CRUD para workflows, validação de grafos, persistência e histórico de execuções. O processamento usa Redis/BullMQ; o worker simula atualmente o percurso do grafo. Integrações externas, autenticação e isolamento de workspaces ainda não estão implementados."),
            ("MRDR.", "Jogo original de dedução em desenvolvimento | React 19, TypeScript, Vite, Zustand, Vitest, Capacitor",
             "Desenvolvimento modular de lógica de dedução, geração e validação de casos, progressão local e interface. A documentação descreve uma campanha de 200 casos e testes automatizados para regras e unicidade da solução. Continua em desenvolvimento."),
            ("RAW.", "Aplicação interativa de conversação e jogos | React, JavaScript, Tailwind CSS, Framer Motion, PWA, localização",
             "Aplicação publicada com baralhos de perguntas, vários modos de jogo, cartões interativos, gestos e transições animadas. O repositório de código é privado; a descrição limita-se à experiência observável da aplicação."),
        ]
        jobs = [
            ("Estagiário de Desenvolvimento Backend", "ClickBeauty / Alvocromático", "abr. – jul. 2023", "Desenvolvimento de funcionalidades backend com PHP e MySQL, apoio a sistemas Web internos e manutenção de código."),
            ("Estagiário de Desenvolvimento Web", "Associação Estamos Juntos (AEJ)", "jul. 2022", "Desenvolvimento de website com HTML, CSS, JavaScript e PHP, incluindo integração de base de dados para fluxos de registo."),
        ]
        education = "CTeSP em Desenvolvimento de Software | Escola Superior Aveiro Norte, Universidade de Aveiro | 2025–2027 (em curso)"
        prior = "Curso Profissional de Gestão e Programação de Sistemas Informáticos | Escola Secundária Dr. Serafim Leite | 2020–2023"
        languages = "Português: nativo | Inglês: intermédio | Espanhol: básico"
        additional = "Operador de Máquinas CNC — Schmidt Light Metal Group (fev. 2025–mai. 2026); Operador de Loja — MC (mai.–ago. 2024)."
        footer = "LEONARDO ALVES | PERCURSO EM ENGENHARIA DE SOFTWARE"
        footer_right = "ESTÁGIO 2027"
        filename = "cv-leonardo-alves-pt.pdf"
    else:
        headline = "SOFTWARE DEVELOPMENT STUDENT | ASPIRING SOFTWARE ENGINEER"
        profile = ("Software Development student at Escola Superior Aveiro Norte, University of Aveiro (2025–2027). "
                   "Building skills in complete software systems, from interfaces and business logic to APIs, relational data, background processing and mobile applications. "
                   "Looking to join a development team, contribute to real products and learn sound engineering practices from experienced engineers.")
        availability = "<b>PAID CURRICULAR INTERNSHIP</b> | <b>680 hours</b> | <b>Start: February 2027</b> | <b>Preferred location: Coimbra, Portugal</b> | On-site / hybrid / remote"
        labels = ["PROFILE", "DEMONSTRATED TECHNICAL FOUNDATION", "FEATURED PROJECTS", "SOFTWARE DEVELOPMENT EXPERIENCE", "EDUCATION & LANGUAGES", "ADDITIONAL EXPERIENCE"]
        skills = [
            ("Languages & frontend", "JavaScript, TypeScript, React, Next.js, Vite, React Router, HTML5, CSS3, Tailwind CSS, Framer Motion"),
            ("Backend & APIs", "PHP, PDO, REST APIs, Next.js Route Handlers, Zod; Node.js as the runtime for the Next.js project"),
            ("Data & processing", "SQL, MySQL/MariaDB, PostgreSQL, Prisma, Redis, BullMQ"),
            ("Mobile, state & testing", "Kotlin, Android, Retrofit, Capacitor, Zustand, Vitest, C, Git, GitHub"),
        ]
        projects = [
            ("SaborGest", "Academic full-stack project in development | PHP 8.3, PDO, REST API, MySQL/MariaDB, Kotlin, Android, Retrofit",
             "Developing a management system combining a Web panel, REST API and Android kiosk. The documented scope includes staff, schedules, attendance, corrections and stock movements. Integration, installation in the target environment and security validation remain pending; it is not production-ready."),
            ("RunLattice", "Workflow automation prototype | Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, BullMQ, Vitest",
             "Built a visual workflow editor and CRUD operations, graph validation, persistence and execution history. Processing uses Redis/BullMQ; the current worker simulates graph traversal. External integrations, authentication and workspace isolation are not implemented."),
            ("MRDR.", "Original deduction game in development | React 19, TypeScript, Vite, Zustand, Vitest, Capacitor",
             "Developing modular deduction logic, case generation and validation, local progression and the game interface. Project documentation describes a 200-case campaign and automated tests for core rules and unique solutions. Still in development."),
            ("RAW.", "Interactive conversation and party-game app | React, JavaScript, Tailwind CSS, Framer Motion, PWA, localisation",
             "Live application featuring question decks, multiple game modes, interactive cards, gestures and animated transitions. The source repository is private; this description is limited to the observable product experience."),
        ]
        jobs = [
            ("Backend Development Intern", "ClickBeauty / Alvocromático", "Apr – Jul 2023", "Developed backend functionality with PHP and MySQL, supported internal web systems and maintained existing code."),
            ("Web Development Intern", "Associação Estamos Juntos (AEJ)", "Jul 2022", "Built a website with HTML, CSS, JavaScript and PHP, including database integration for registration workflows."),
        ]
        education = "CTeSP in Software Development | Escola Superior Aveiro Norte, University of Aveiro | 2025–2027 (in progress)"
        prior = "Professional Course in IT Systems Management and Programming | Escola Secundária Dr. Serafim Leite | 2020–2023"
        languages = "Portuguese: native | English: intermediate | Spanish: basic"
        additional = "CNC Machine Operator — Schmidt Light Metal Group (Feb 2025–May 2026); Store Operator — MC (May–Aug 2024)."
        footer = "LEONARDO ALVES | SOFTWARE ENGINEERING PATH"
        footer_right = "2027 INTERNSHIP"
        filename = "cv-leonardo-alves-en.pdf"

    doc = SimpleDocTemplate(
        str(PUBLIC / filename), pagesize=A4, rightMargin=15*mm, leftMargin=15*mm,
        topMargin=12*mm, bottomMargin=11*mm,
        title="Leonardo Alves - CV - " + ("Engenharia de Software" if pt else "Software Engineering"),
        author="Leonardo Alves",
    )
    story = [
        paragraph("LEONARDO ALVES", s, "name"),
        paragraph(escape(headline), s, "headline"),
        paragraph(
            '<link href="mailto:16alves02@gmail.com" color="#625B54">16alves02@gmail.com</link> | '
            '+351 913 958 525 | Oliveira de Azeméis, Portugal<br/>'
            '<link href="https://16alves02-com.vercel.app/" color="#B9341B">Portfolio</link> | '
            '<link href="https://github.com/16alves02" color="#B9341B">GitHub</link> | '
            '<link href="https://www.linkedin.com/in/16alves02/" color="#B9341B">LinkedIn</link>', s, "contact"
        ),
        Spacer(1, 5),
    ]
    availability_table = Table([[paragraph(availability, s, "availability")]], colWidths=[180*mm])
    availability_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), PALE), ("BOX", (0,0), (-1,-1), 0.55, LINE),
        ("LINEBEFORE", (0,0), (0,0), 3, ACCENT),
        ("LEFTPADDING", (0,0), (-1,-1), 8), ("RIGHTPADDING", (0,0), (-1,-1), 8),
        ("TOPPADDING", (0,0), (-1,-1), 6), ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ]))
    story += [availability_table, Spacer(1, 2)]
    story += section(labels[0], s)
    story.append(paragraph(escape(profile), s))
    story += section(labels[1], s)
    for label, value in skills:
        story.append(paragraph(f"<b>{escape(label)}:</b> {escape(value)}", s))
    story += section(labels[2], s)
    for name, meta, description in projects:
        story.append(KeepTogether([
            paragraph(f'<b>{escape(name)}</b> <font color="#B9341B">|</font> <font color="#625B54">{escape(meta)}</font>', s, "project"),
            paragraph(escape(description), s, "project"),
        ]))
    story += section(labels[3], s)
    for role, company, date, description in jobs:
        story.append(KeepTogether([
            paragraph(f'<b>{escape(role)}</b> <font color="#B9341B">|</font> {escape(company)} <font color="#625B54">· {escape(date)}</font>', s, "job"),
            paragraph(escape(description), s, "small"),
        ]))
    story += section(labels[4], s)
    story.append(paragraph(f"<b>{escape(education)}</b>", s))
    story.append(paragraph(escape(prior), s, "small"))
    story.append(paragraph(escape(languages), s, "small"))
    story += section(labels[5], s)
    story.append(paragraph(escape(additional), s, "small"))

    def on_page(canvas, document):
        canvas.saveState()
        width, height = A4
        canvas.setStrokeColor(ACCENT)
        canvas.setLineWidth(2.2)
        canvas.line(15*mm, height-8*mm, width-15*mm, height-8*mm)
        canvas.setFont("Helvetica", 6.2)
        canvas.setFillColor(MUTED)
        canvas.drawString(15*mm, 7*mm, footer)
        canvas.drawRightString(width-15*mm, 7*mm, footer_right)
        canvas.restoreState()

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"Generated {filename}")

if __name__ == "__main__":
    build_cv(PUBLIC / "cv-leonardo-alves-en.pdf", pt=False)
    build_cv(PUBLIC / "cv-leonardo-alves-pt.pdf", pt=True)
