from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PUBLIC.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#02020E")
MUTED = colors.HexColor("#55554F")
ACCENT = colors.HexColor("#EC5E27")
LINE = colors.HexColor("#DDDDD2")
PALE = colors.HexColor("#F6F3EA")

def styles():
    return {
        "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=INK, spaceAfter=1),
        "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=ACCENT, spaceAfter=4),
        "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=7.7, leading=9.5, textColor=MUTED),
        "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=10.5, textColor=INK, spaceBefore=5, spaceAfter=2),
        "body": ParagraphStyle("body", fontName="Helvetica", fontSize=7.7, leading=9.5, textColor=INK, spaceAfter=1.2),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=7.1, leading=8.6, textColor=MUTED, spaceAfter=1),
        "project": ParagraphStyle("project", fontName="Helvetica", fontSize=7.2, leading=8.7, textColor=INK, spaceAfter=1.4),
    }

def p(text, s, style="body"):
    return Paragraph(text, s[style])

def section(title, s):
    return [p(escape(title.upper()), s, "section"), HRFlowable(width="100%", thickness=.45, color=LINE, spaceBefore=0, spaceAfter=2)]

def build(path, english=False):
    s = styles()
    if english:
        role = "SOFTWARE DEVELOPER | SOFTWARE DEVELOPMENT STUDENT"
        summary = ("Generalist Software Developer and Software Development student at Escola Superior Aveiro Norte, University of Aveiro. "
                   "Hands-on project experience across web applications, backend development, REST APIs, databases and Android. "
                   "Interested in joining a development team, contributing to real products and improving through code reviews and feedback.")
        availability = "<b>PAID CURRICULAR INTERNSHIP</b> · 680 hours · February 2027 · Remote preferred; open to on-site or hybrid roles in Aveiro, Porto and Coimbra."
        labels = ["Profile", "Technical skills", "Selected projects", "Software experience", "Education & languages", "Additional experience"]
        skills = [
            ("Languages", "JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL"),
            ("Web & applications", "HTML5, CSS3, React, Next.js, Vite, Android"),
            ("Backend & data", "REST APIs, MySQL/MariaDB, PostgreSQL, Redis, Prisma"),
            ("Tools & practices", "Git, GitHub, Docker, automated testing"),
        ]
        projects = [
            ("SaborGest", "Academic project · in development · PHP, Kotlin, MySQL/MariaDB, REST API",
             "Developing a web and Android management system for small food businesses, covering staff schedules, attendance and stock operations."),
            ("RunLattice", "Personal project · prototype · Next.js, TypeScript, PostgreSQL, Redis",
             "Designing a workflow automation platform with a visual editor and an accessible no-code direction alongside developer-focused capabilities."),
            ("MRDR.", "Original game · in development · React, TypeScript, Vite, Capacitor",
             "Building an original criminal deduction game focused on clue analysis, logical reasoning and case solving."),
            ("RAW.", "ALV16 STUDIOS · public demo · React, JavaScript, PWA",
             "Interactive conversation and party-game app with multiple play modes, question decks and multilingual content. Source code is private."),
            ("HOOP", "Academic project · React, TypeScript, Vite",
             "Basketball e-commerce frontend featuring product browsing, search, filters, favourites, cart and a simulated checkout."),
        ]
        jobs = [
            ("Backend Development Intern", "ClickBeauty / Alvocromático", "Apr–Jul 2023", "Worked on backend features using PHP and MySQL, supported internal web systems and maintained existing code."),
            ("Web Development Intern", "Associação Estamos Juntos (AEJ)", "Jul 2022", "Built website features with HTML, CSS, JavaScript and PHP, including database integration."),
        ]
        education = "CTeSP in Software Development · Escola Superior Aveiro Norte, University of Aveiro · 2025–2027 (in progress)"
        prior = "Vocational Course in IT Systems Management and Programming · Escola Secundária Dr. Serafim Leite · 2020–2023"
        languages = "Portuguese: native · English: intermediate · Spanish: basic"
        extra = "CNC Machine Operator · Schmidt Light Metal Group · Feb 2025–May 2026  |  Store Operator · MC · May–Aug 2024"
        internship = "February 2027 internship"
        filename = "cv-leonardo-alves-en.pdf"
    else:
        role = "SOFTWARE DEVELOPER | ESTUDANTE DE DESENVOLVIMENTO DE SOFTWARE"
        summary = ("Software Developer generalista e estudante do CTeSP em Desenvolvimento de Software na Escola Superior Aveiro Norte, Universidade de Aveiro. "
                   "Experiência prática em projetos web, desenvolvimento backend, APIs REST, bases de dados e Android. "
                   "Procuro integrar uma equipa de desenvolvimento, contribuir para produtos reais e evoluir através de colaboração e feedback.")
        availability = "<b>ESTÁGIO CURRICULAR REMUNERADO</b> · 680 horas · fevereiro de 2027 · Preferência por remoto; disponibilidade para oportunidades presenciais ou híbridas em Aveiro, Porto e Coimbra."
        labels = ["Perfil", "Competências técnicas", "Projetos selecionados", "Experiência em desenvolvimento", "Formação e idiomas", "Experiência adicional"]
        skills = [
            ("Linguagens", "JavaScript, TypeScript, PHP, Kotlin, Python, C, SQL"),
            ("Web e aplicações", "HTML5, CSS3, React, Next.js, Vite, Android"),
            ("Backend e dados", "APIs REST, MySQL/MariaDB, PostgreSQL, Redis, Prisma"),
            ("Ferramentas e práticas", "Git, GitHub, Docker, testes automatizados"),
        ]
        projects = [
            ("SaborGest", "Projeto académico · em desenvolvimento · PHP, Kotlin, MySQL/MariaDB, API REST",
             "Desenvolvimento de um sistema Web e Android para pequenos negócios de restauração, com gestão de colaboradores, horários, assiduidade e movimentos de stock."),
            ("RunLattice", "Projeto pessoal · protótipo · Next.js, TypeScript, PostgreSQL, Redis",
             "Conceção de uma plataforma de automação de workflows com editor visual, orientada tanto a utilizadores sem código como a utilizadores técnicos."),
            ("MRDR.", "Jogo original · em desenvolvimento · React, TypeScript, Vite, Capacitor",
             "Desenvolvimento de um jogo original de dedução criminal, centrado na análise de pistas, raciocínio lógico e resolução de casos."),
            ("RAW.", "ALV16 STUDIOS · demonstração pública · React, JavaScript, PWA",
             "Aplicação interativa de conversação e jogos sociais, com vários modos, baralhos de perguntas e conteúdo multilingue. Código-fonte privado."),
            ("HOOP", "Projeto académico · React, TypeScript, Vite",
             "Frontend de comércio eletrónico de basquetebol, com catálogo, pesquisa, filtros, favoritos, carrinho e finalização de compra simulada."),
        ]
        jobs = [
            ("Estagiário de Desenvolvimento Backend", "ClickBeauty / Alvocromático", "abr.–jul. 2023", "Desenvolvimento de funcionalidades backend com PHP e MySQL, apoio a sistemas Web internos e manutenção de código."),
            ("Estagiário de Desenvolvimento Web", "Associação Estamos Juntos (AEJ)", "jul. 2022", "Desenvolvimento de páginas Web com HTML, CSS, JavaScript e PHP, incluindo integração de bases de dados."),
        ]
        education = "CTeSP em Desenvolvimento de Software · Escola Superior Aveiro Norte, Universidade de Aveiro · 2025–2027 (em curso)"
        prior = "Curso Profissional de Gestão e Programação de Sistemas Informáticos · Escola Secundária Dr. Serafim Leite · 2020–2023"
        languages = "Português: nativo · Inglês: intermédio · Espanhol: básico"
        extra = "Operador de Máquina CNC · Schmidt Light Metal Group · fev. 2025–mai. 2026  |  Operador de Loja · MC · mai.–ago. 2024"
        internship = "Estágio curricular 2027"
        filename = "cv-leonardo-alves-pt.pdf"

    doc = SimpleDocTemplate(str(PUBLIC / filename), pagesize=A4, rightMargin=13*mm, leftMargin=13*mm,
                            topMargin=10*mm, bottomMargin=10*mm,
                            title="Leonardo Alves - CV", author="Leonardo Alves")
    story = [
        p("LEONARDO ALVES", s, "name"),
        p(escape(role), s, "role"),
        p('<link href="mailto:16alves02@gmail.com" color="#55554F">16alves02@gmail.com</link>  ·  +351 913 958 525  ·  Oliveira de Azeméis, Portugal<br/>'
          '<link href="https://16alves02.pages.dev/" color="#EC5E27">16alves02.com</link>  ·  '
          '<link href="https://github.com/16alves02" color="#EC5E27">GitHub</link>  ·  '
          '<link href="https://www.linkedin.com/in/16alves02/" color="#EC5E27">LinkedIn</link>', s, "contact"),
        Spacer(1, 4),
    ]
    callout = Table([[p(availability, s, "body")]], colWidths=[184*mm])
    callout.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), PALE), ("BOX", (0,0), (-1,-1), .45, LINE),
        ("LINEBEFORE", (0,0), (0,0), 2.5, ACCENT),
        ("LEFTPADDING", (0,0), (-1,-1), 7), ("RIGHTPADDING", (0,0), (-1,-1), 7),
        ("TOPPADDING", (0,0), (-1,-1), 5), ("BOTTOMPADDING", (0,0), (-1,-1), 5),
    ]))
    story += [callout]
    story += section(labels[0], s)
    story.append(p(escape(summary), s))
    story += section(labels[1], s)
    for k,v in skills:
        story.append(p(f"<b>{escape(k)}:</b> {escape(v)}", s))
    story += section(labels[2], s)
    for name, meta, desc in projects:
        story.append(KeepTogether([
            p(f"<b>{escape(name)}</b> <font color='#EC5E27'>|</font> <font color='#55554F'>{escape(meta)}</font>", s, "project"),
            p(escape(desc), s, "project")
        ]))
    story += section(labels[3], s)
    for role_name, company, date, desc in jobs:
        story.append(KeepTogether([
            p(f"<b>{escape(role_name)}</b> <font color='#EC5E27'>|</font> {escape(company)} <font color='#55554F'>· {escape(date)}</font>", s, "body"),
            p(escape(desc), s, "small")
        ]))
    story += section(labels[4], s)
    story.append(p(f"<b>{escape(education)}</b>", s, "body"))
    story.append(p(escape(prior), s, "small"))
    story.append(p(escape(languages), s, "small"))
    story += section(labels[5], s)
    story.append(p(escape(extra), s, "small"))

    def footer(canvas, document):
        canvas.saveState()
        w,h=A4
        canvas.setStrokeColor(ACCENT); canvas.setLineWidth(2)
        canvas.line(13*mm,h-6*mm,w-13*mm,h-6*mm)
        canvas.setFont("Helvetica",6.2); canvas.setFillColor(MUTED)
        canvas.drawString(13*mm,6*mm,"LEONARDO ALVES")
        canvas.drawRightString(w-13*mm,6*mm,internship.upper())
        canvas.restoreState()
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Generated {filename}")

if __name__ == "__main__":
    build(PUBLIC / "cv-leonardo-alves-pt.pdf", english=False)
    build(PUBLIC / "cv-leonardo-alves-en.pdf", english=True)
