import { ArrowLeft, ArrowUpRight, Code2, ExternalLink } from 'lucide-react';

export default function ProjectDetailPage({ project, language = 'en', theme = 'dark' }) {
  const pt = language === 'pt-PT';
  const locale = pt ? 'pt' : language;
  const translation = project.translations?.[locale] || project.translations?.[language] || {};
  const study = translation.caseStudy?.[locale] || translation.caseStudy || project.caseStudy?.[locale] || project.caseStudy?.en || null;
  const title = translation.name || project.name || 'Project';
  const status = translation.status || project.status || (pt ? 'Em desenvolvimento' : 'In development');
  const back = pt ? 'Voltar aos projetos' : 'Back to projects';
  const fields = study ? [
    [pt ? 'O problema' : 'The problem', study.problem],
    [pt ? 'Arquitetura' : 'Architecture', study.architecture],
    [pt ? 'Contributo' : 'Contribution', study.contribution],
    [pt ? 'Desafios técnicos' : 'Technical challenges', study.challenges],
    [pt ? 'Qualidade e validação' : 'Quality and validation', study.quality],
    [pt ? 'Estado atual' : 'Current status', study.status],
  ] : [[pt ? 'Sobre o projeto' : 'About this project', translation.description || project.description]];

  return (
    <main className="portfolio-detail-page" data-theme={theme}>
      <div className="detail-topbar"><a href="/" className="detail-brand">16alves02<span>.</span></a><span>ALV16 STUDIOS</span></div>
      <article className="detail-content">
        <a href="/#work" className="detail-back"><ArrowLeft size={16} />{back}</a>
        <p className="detail-kicker">{translation.type || project.type || (pt ? 'Projeto' : 'Project')} · {project.year || ''}</p>
        <div className="detail-heading"><div><h1>{title}<span>.</span></h1><p>{translation.description || project.description}</p></div><span className="detail-status">{status}</span></div>
        <div className="detail-tech"><span>{pt ? 'TECNOLOGIAS' : 'TECHNOLOGIES'}</span>{(project.stack || []).map((item) => <span key={item}>{item}</span>)}</div>
        {project.image && <figure className="detail-image"><img src={project.image} alt={project.imageAlt || title} /></figure>}
        <section className="detail-study-grid">{fields.filter(([, value]) => value).map(([label, value]) => <div className="detail-study-card" key={label}><h2>{label}</h2><p>{value}</p></div>)}</section>
        <div className="detail-actions">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} />{pt ? 'Abrir demonstração' : 'Open demo'}</a>}
          {project.source && <a href={project.source} target="_blank" rel="noreferrer"><Code2 size={16} />{pt ? 'Ver repositório' : 'View repository'}</a>}
          <a href="/" className="detail-secondary">{pt ? 'Portefólio completo' : 'Full portfolio'} <ArrowUpRight size={15} /></a>
        </div>
      </article>
      <footer className="detail-footer">© {new Date().getFullYear()} Leonardo Alves · ALV16 STUDIOS</footer>
    </main>
  );
}
