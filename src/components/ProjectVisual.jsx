import { useState } from 'react';
import { ArrowDownRight, Check } from 'lucide-react';

function HoopPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className="visual visual-hoop">
      <div className="visual-windowbar">
        <span className="window-dots"><i /><i /><i /></span>
        <span>hoop / store</span>
        <span className="window-meta">LIVE PROJECT</span>
      </div>
      {!imageFailed ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="hoop-fallback">
          <div className="hoop-wordmark">HOOP<span>.</span></div>
          <div className="hoop-fallback-sub">BASKETBALL / STORE CONCEPT</div>
          <div className="hoop-ball-mark">◉</div>
          <div className="fallback-product-line"><span /> <span /> <span /></div>
        </div>
      )}
      <div className="visual-caption"><span>PRODUCT DISCOVERY</span><span>REACT / TS</span></div>
    </div>
  );
}

function RawPreview() {
  const [active, setActive] = useState(0);
  const modes = [
    { name: 'THE DEEP END', colour: 'raw-coral', line: 'Questions that stay with you.' },
    { name: 'UNFILTERED', colour: 'raw-blue', line: 'No safe answers.' },
    { name: 'THE LAB', colour: 'raw-cream', line: 'Try something unexpected.' },
  ];
  const selected = modes[active];
  return (
    <div className="visual visual-raw">
      <div className="raw-topline"><span>RAW. / A SOCIAL EXPERIMENT</span><span>0{active + 1} - 03</span></div>
      <div className={`raw-card ${selected.colour}`}>
        <span className="raw-card-top">{selected.name}</span>
        <p>{selected.line}</p>
        <span className="raw-card-bottom">PULL A CARD <ArrowDownRight size={15} /></span>
      </div>
      <div className="raw-controls" aria-label="Preview RAW modes">
        {modes.map((mode, index) => (
          <button key={mode.name} type="button" className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-pressed={active === index}>
            <span>0{index + 1}</span>{mode.name}
          </button>
        ))}
      </div>
      <div className="visual-caption"><span>INTERACTION / MOTION</span><span>REACT</span></div>
    </div>
  );
}

function SaborPreview() {
  return (
    <div className="visual visual-sabor">
      <div className="sabor-header"><span className="sabor-symbol">S.</span><span>SABORGEST / WORKING NOTES</span><span className="status-text"><i /> IN PROGRESS</span></div>
      <div className="sabor-body">
        <p className="sabor-overline">ACADEMIC PROJECT / 2026-27</p>
        <h3>Less time on paper.<br /><em>More clarity at work.</em></h3>
        <div className="sabor-rules"><span>01 <b>Employee shifts</b><small>Problem area</small></span><span>02 <b>Working hours</b><small>Problem area</small></span><span>03 <b>Daily operations</b><small>Problem area</small></span></div>
        <p className="sabor-disclaimer">Concept and requirements in development. Not a finished application.</p>
      </div>
      <div className="visual-caption"><span>REQUIREMENTS / DESIGN</span><span>ACADEMIC</span></div>
    </div>
  );
}

function TodoPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className="visual visual-todo">
      <div className="visual-windowbar"><span className="window-dots"><i /><i /><i /></span><span>todo / daily list</span><span className="window-meta">VANILLA JS</span></div>
      {!imageFailed ? <img src={project.image} alt={project.imageAlt} loading="lazy" onError={() => setImageFailed(true)} /> : (
        <div className="todo-fallback"><div className="todo-heading">Today<span>03 tasks</span></div>{['Review the layout', 'Fix small interactions', 'Push the changes'].map((task, i) => <div className="todo-task" key={task}><i className={i === 0 ? 'checked' : ''}>{i === 0 && <Check size={10} />}</i><span className={i === 0 ? 'done' : ''}>{task}</span></div>)}</div>
      )}
      <div className="visual-caption"><span>DOM / LOCAL STORAGE</span><span>HTML / CSS / JS</span></div>
    </div>
  );
}

function TerminalPreview() {
  return (
    <div className="visual visual-terminal">
      <div className="terminal-top"><span><i /> <i /> <i /></span><span>array_sorting.c</span><span>gcc</span></div>
      <div className="terminal-code">
        <p><b>01</b><span className="code-purple">void</span> <span className="code-blue">BubbleSort</span>(<span className="code-green">int</span> a[], <span className="code-green">int</span> n) {'{'}</p>
        <p><b>02</b>&nbsp;&nbsp; <span className="code-purple">for</span> (<span className="code-green">int</span> i = <span className="code-number">0</span>; i &lt; n - <span className="code-number">1</span>; i++) {'{'}</p>
        <p><b>03</b>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-purple">for</span> (<span className="code-green">int</span> j = <span className="code-number">0</span>; j &lt; n - i - <span className="code-number">1</span>; j++)</p>
        <p><b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-purple">if</span> (a[j] &gt; a[j + <span className="code-number">1</span>])</p>
        <p><b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(&amp;a[j], &amp;a[j + <span className="code-number">1</span>]);</p>
        <p><b>06</b>&nbsp;&nbsp; {'}'}</p><p><b>07</b>{'}'}</p>
      </div>
      <div className="visual-caption"><span>ALGORITHMS / FUNDAMENTALS</span><span>C</span></div>
    </div>
  );
}

export default function ProjectVisual({ project, compact = false }) {
  if (project.visual === 'hoop') return <HoopPreview project={project} />;
  if (project.visual === 'raw') return <RawPreview />;
  if (project.visual === 'sabor') return <SaborPreview />;
  if (project.visual === 'todo') return <TodoPreview project={project} />;
  if (project.visual === 'terminal') return <TerminalPreview />;
  return null;
}
