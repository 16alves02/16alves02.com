import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';

export default function ProfilePage({ language = 'en', theme = 'dark', skills = [], experience = [] }) {
  const pt = language === 'pt-PT';
  const title = pt ? 'Perfil profissional' : 'Professional profile';
  const cv = pt ? '/cv-leonardo-alves-pt.pdf' : '/cv-leonardo-alves-en.pdf';
  return (
    <main className="portfolio-detail-page profile-page" data-theme={theme}>
      <div className="detail-topbar"><a href="/" className="detail-brand">16alves02<span>.</span></a><span>ALV16 STUDIOS</span></div>
      <article className="detail-content">
        <a href="/" className="detail-back"><ArrowLeft size={16} />{pt ? 'Voltar ao início' : 'Back home'}</a>
        <p className="detail-kicker">16ALVES02 / {pt ? 'PERCURSO E COMPETÊNCIAS' : 'BACKGROUND & SKILLS'}</p>
        <div className="detail-heading"><div><h1>{title}<span>.</span></h1><p>{pt ? 'Software Developer com experiência prática em projetos web, backend e aplicações. Estudante de Desenvolvimento de Software na Escola Superior Aveiro Norte, Universidade de Aveiro.' : 'Software Developer with practical experience across web, backend and application projects. Software Development student at Escola Superior Aveiro Norte, University of Aveiro.'}</p></div><a className="detail-status profile-cv" href={cv} download><Download size={15} />{pt ? 'Descarregar CV' : 'Download CV'}</a></div>
        <section className="profile-block"><p className="detail-kicker">{pt ? 'EDUCAÇÃO' : 'EDUCATION'}</p><div className="detail-study-card"><h2>{pt ? 'CTeSP em Desenvolvimento de Software' : 'CTeSP in Software Development'}</h2><p>Escola Superior Aveiro Norte · Universidade de Aveiro · 2025–2027 · {pt ? 'Em curso' : 'In progress'}</p></div><div className="detail-study-card"><h2>{pt ? 'Gestão e Programação de Sistemas Informáticos' : 'IT Systems Management and Programming'}</h2><p>Escola Secundária Dr. Serafim Leite · 2020–2023</p></div></section>
        <section className="profile-block"><p className="detail-kicker">{pt ? 'EXPERIÊNCIA' : 'EXPERIENCE'}</p><div className="profile-timeline">{experience.map((item) => <article className="profile-timeline-item" key={item.id}><span>{item.date}</span><div><h2>{item.role}</h2><p>{item.company}</p>{item.description && <p>{item.description}</p>}</div></article>)}</div></section>
        <section className="profile-block"><p className="detail-kicker">{pt ? 'COMPETÊNCIAS TÉCNICAS' : 'TECHNICAL SKILLS'}</p><div className="profile-skills">{skills.map((group) => <div className="detail-study-card" key={group[0]}><h2>{group[0]}</h2><div>{group.slice(1).map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>
        <div className="detail-actions"><a href="mailto:alv16studios@gmail.com"><ArrowUpRight size={16} />{pt ? 'Contacto profissional' : 'Professional contact'}</a><a href="https://www.linkedin.com/in/16alves02/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
      </article>
      <footer className="detail-footer">© {new Date().getFullYear()} Leonardo Alves · ALV16 STUDIOS</footer>
    </main>
  );
}
