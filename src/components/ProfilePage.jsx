import { ArrowLeft, ArrowUpRight, Download, Moon, Sun } from 'lucide-react';

export default function ProfilePage({ language = 'en', setLanguage, languageOptions = [], theme = 'dark', setTheme, skills = [], experience = [], education = [], profile = {} }) {
  const pt = language === 'pt-PT';
  const title = profile.title || (pt ? 'Perfil profissional' : 'Professional profile');
  const intro = profile.intro || (pt ? 'Software Developer com experiência prática em projetos web, backend e aplicações. Estudante de Desenvolvimento de Software na Escola Superior Aveiro Norte, Universidade de Aveiro.' : 'Software Developer with practical experience across web, backend and application projects. Software Development student at Escola Superior Aveiro Norte, University of Aveiro.');
  const educationItems = education.length ? education : [
    { id: 'ctesp', title: pt ? 'CTeSP em Desenvolvimento de Software' : 'CTeSP in Software Development', date: '2025–2027', where: 'Escola Superior Aveiro Norte · Universidade de Aveiro', description: pt ? 'Em curso' : 'In progress' },
    { id: 'professional', title: pt ? 'Gestão e Programação de Sistemas Informáticos' : 'IT Systems Management and Programming', date: '2020–2023', where: 'Escola Secundária Dr. Serafim Leite' },
  ];
  const cv = pt ? '/cv-leonardo-alves-pt.pdf' : '/cv-leonardo-alves-en.pdf';
  return (
    <main className="portfolio-detail-page profile-page" data-theme={theme}>
      <div className="detail-topbar"><a href="/" className="detail-brand">16alves02<span>.</span></a><div className="detail-topbar-actions"><label className="detail-language"><span className="sr-only">Language</span><select value={language} onChange={(event) => setLanguage?.(event.target.value)} aria-label={pt ? 'Idioma' : 'Language'}>{languageOptions.map((item) => <option key={item.code} value={item.code}>{item.nativeName}</option>)}</select></label><button type="button" className="detail-theme-toggle" onClick={() => setTheme?.(theme === 'dark' ? 'light' : 'dark')} aria-label={pt ? 'Alterar tema' : 'Toggle theme'}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button><span>ALV16 STUDIOS</span></div></div>
      <article className="detail-content">
        <a href="/" className="detail-back"><ArrowLeft size={16} />{pt ? 'Voltar ao início' : 'Back home'}</a>
        <p className="detail-kicker">16ALVES02 / {pt ? 'PERCURSO E COMPETÊNCIAS' : 'BACKGROUND & SKILLS'}</p>
        <div className="detail-heading"><div><h1>{title}<span>.</span></h1><p>{intro}</p></div><a className="detail-status profile-cv" href={cv} download><Download size={15} />{pt ? 'Descarregar CV' : 'Download CV'}</a></div>
        <section className="profile-block"><p className="detail-kicker">{pt ? 'EDUCAÇÃO' : 'EDUCATION'}</p>{educationItems.map((item) => <div className="detail-study-card" key={item.id || item.title}><h2>{item.title}</h2><p>{[item.where, item.date, item.description].filter(Boolean).join(' · ')}</p></div>)}</section>
        <section className="profile-block"><p className="detail-kicker">{pt ? 'EXPERIÊNCIA' : 'EXPERIENCE'}</p><div className="profile-timeline">{experience.map((item) => <article className="profile-timeline-item" key={item.id}><span>{item.date}</span><div><h2>{item.role}</h2><p>{item.company}</p>{item.description && <p>{item.description}</p>}</div></article>)}</div></section>
        <section className="profile-block"><p className="detail-kicker">{pt ? 'COMPETÊNCIAS TÉCNICAS' : 'TECHNICAL SKILLS'}</p><div className="profile-skills">{skills.map((group) => <div className="detail-study-card" key={group[0]}><h2>{group[0]}</h2><div>{group.slice(1).map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>
        <div className="detail-actions"><a href="mailto:alv16studios@gmail.com"><ArrowUpRight size={16} />{pt ? 'Contacto profissional' : 'Professional contact'}</a><a href="https://www.linkedin.com/in/16alves02/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
      </article>
      <footer className="detail-footer">© {new Date().getFullYear()} Leonardo Alves · ALV16 STUDIOS</footer>
    </main>
  );
}
