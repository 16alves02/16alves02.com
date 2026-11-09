import { useMemo, useState } from 'react';
import { ArrowRight, Terminal, Play, RotateCcw } from 'lucide-react';

export default function PortfolioExtras({ language = 'en', projects = [] }) {
  const pt = language === 'pt-PT';
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([{ input: 'help', output: pt ? 'Comandos: help, about, projects, contact' : 'Commands: help, about, projects, contact' }]);
  const [numbers, setNumbers] = useState([8, 3, 6, 1, 9, 4]);
  const [sorted, setSorted] = useState(false);
  const technologies = useMemo(() => [...new Set(projects.flatMap((project) => project.stack || []))].slice(0, 12), [projects]);

  function runCommand(event) {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    const responses = {
      help: pt ? 'Comandos: help, about, projects, contact' : 'Commands: help, about, projects, contact',
      about: 'Leonardo Alves · Software Developer · Portugal.',
      projects: pt ? projects.length + ' projetos no portefólio. Explora a secção de projetos.' : projects.length + ' projects in the portfolio. Explore the work section.',
      contact: 'alv16studios@gmail.com',
    };
    setHistory((current) => [...current.slice(-4), { input: value, output: responses[value] || (pt ? 'Comando não reconhecido. Escreve help.' : 'Command not recognised. Type help.') }]);
    setCommand('');
  }

  function sortNumbers() {
    setNumbers((current) => [...current].sort((a, b) => a - b));
    setSorted(true);
  }
  function resetNumbers() {
    setNumbers([8, 3, 6, 1, 9, 4]);
    setSorted(false);
  }

  return (
    <section className="portfolio-extras section-pad" aria-label={pt ? 'Experiências interativas' : 'Interactive experiences'}>
      <div className="section-heading"><div><p className="section-kicker"><span>05</span> / {pt ? 'LABORATÓRIO' : 'LAB'}</p><h2>{pt ? 'Explorar sistemas' : 'Explore systems'}<span className="brand-dot">.</span></h2></div><p className="section-description">{pt ? 'Pequenas experiências para tornar o trabalho técnico explorável, sem esconder o conteúdo principal.' : 'Small experiments that make technical work explorable without hiding the actual work.'}</p></div>
      <div className="portfolio-experiments-grid">
        <section className="terminal-panel">
          <div className="experiment-heading"><Terminal size={16} /><span>16ALVES02 / TERMINAL</span><span className="terminal-lights"><i /><i /><i /></span></div>
          <div className="terminal-output" aria-live="polite">{history.map((item, index) => <div key={index}><p><b>visitor@16alves02</b>:~$ {item.input}</p><span>{item.output}</span></div>)}</div>
          <form onSubmit={runCommand} className="terminal-command"><span>$</span><input value={command} onChange={(event) => setCommand(event.target.value)} aria-label={pt ? 'Comando do terminal' : 'Terminal command'} placeholder={pt ? 'Escreve help...' : 'Type help...'} /><button type="submit" aria-label={pt ? 'Executar comando' : 'Run command'}><ArrowRight size={15} /></button></form>
        </section>
        <section className="visual-lab-panel">
          <div className="experiment-heading"><Play size={15} /><span>{pt ? 'LABORATÓRIO VISUAL' : 'VISUAL LAB'}</span><span className="experiment-index">01 / SORT</span></div>
          <h3>{pt ? 'Ordenar um array' : 'Sort an array'}</h3>
          <p>{pt ? 'Uma pequena demonstração de transformação de dados no browser.' : 'A small demonstration of transforming data in the browser.'}</p>
          <div className="lab-bars" aria-label={pt ? 'Valores do array' : 'Array values'}>{numbers.map((number, index) => <div key={index} style={{ height: (number * 12) + '%' }}><span>{number}</span></div>)}</div>
          <div className="lab-controls"><button type="button" onClick={sortNumbers}><Play size={14} />{pt ? 'Ordenar' : 'Sort'}</button><button type="button" className="lab-reset" onClick={resetNumbers}><RotateCcw size={14} />{pt ? 'Repor' : 'Reset'}</button><span>{sorted ? (pt ? 'Ordenado' : 'Sorted') : (pt ? 'A aguardar ação' : 'Waiting for input')}</span></div>
        </section>
      </div>
      <div className="portfolio-tech-ribbon"><span>{pt ? 'TECNOLOGIAS NO PORTFÓLIO' : 'TECHNOLOGIES IN THE PORTFOLIO'}</span>{technologies.map((technology) => <i key={technology}>{technology}</i>)}</div>
    </section>
  );
}
