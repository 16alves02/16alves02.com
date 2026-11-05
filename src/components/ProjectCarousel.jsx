import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects.js';

const featuredProjects = projects.slice(0, 4);

function wrapIndex(index) {
  return (index + featuredProjects.length) % featuredProjects.length;
}

function Arrow({ direction = 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === 'right' ? <path d="M4 12h15m-6-6 6 6-6 6" /> : <path d="M20 12H5m6-6-6 6 6 6" />}
    </svg>
  );
}

export default function ProjectCarousel({ t }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const dragRef = useRef(null);
  const wheelLockRef = useRef(0);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setEntered(true);
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEntered(true));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function selectProject(index) {
    setActiveIndex(wrapIndex(index));
  }

  function skipIntro() {
    setEntered(true);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectProject(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectProject(activeIndex - 1);
    } else if (event.key === 'Escape' && !entered) {
      event.preventDefault();
      skipIntro();
    }
  }

  function handlePointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startIndex: activeIndex,
      moved: false,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function handlePointerMove(event) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) < 24) return;
    drag.moved = true;
    const steps = Math.round(-distance / 115);
    selectProject(drag.startIndex + steps);
  }

  function handlePointerUp(event) {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  }

  function handleWheel(event) {
    if (Math.abs(event.deltaY) < 16 && Math.abs(event.deltaX) < 16) return;
    const now = Date.now();
    if (now - wheelLockRef.current < 420) return;
    wheelLockRef.current = now;
    const direction = Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? Math.sign(event.deltaX)
      : Math.sign(event.deltaY);
    selectProject(activeIndex + direction);
  }

  const activeProject = featuredProjects[activeIndex];
  const description = t.carouselDescriptions?.[activeProject.name] || activeProject.description;
  const liveUrl = activeProject.live;
  const sourceUrl = activeProject.source;

  return (
    <div className={`project-carousel ${entered ? 'is-entered' : 'is-entering'}`}>
      <div className="carousel-topline">
        <span>{t.carouselKicker}</span>
        <span>{String(activeIndex + 1).padStart(2, '0')} / 04</span>
      </div>

      <div
        ref={ringRef}
        className="carousel-stage"
        role="region"
        aria-label={t.carouselRegionLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <div className="carousel-orbit" style={{ '--orbit-rotation': `${activeIndex * -90}deg` }}>
          {featuredProjects.map((project, index) => {
            const isActive = index === activeIndex;
            const status = project.status
              ? (project.status.includes('Prototype') ? t.carouselPrototype : t.carouselInDevelopment)
              : t.carouselLive;
            return (
              <button
                key={project.name}
                type="button"
                className={`carousel-project-card carousel-card-${project.visual} ${isActive ? 'is-active' : ''}`}
                style={{ '--card-angle': `${index * 90}deg` }}
                aria-pressed={isActive}
                aria-label={`${project.name}. ${t.carouselSelectProject}`}
                onClick={() => selectProject(index)}
              >
                <span className="carousel-card-number">0{index + 1} / 04</span>
                <span className="carousel-card-mark" aria-hidden="true">{project.visual === 'sabor' ? 'SG' : project.visual === 'runlattice' ? 'RL' : project.visual === 'mrdr' ? 'MR' : 'RAW'}</span>
                <span className="carousel-card-category">{t.carouselCategories?.[project.name] || project.type}</span>
                <strong>{project.name}</strong>
                <span className="carousel-card-stack">{project.stack.slice(0, 4).join(' · ')}</span>
                <span className="carousel-card-status">{status}</span>
              </button>
            );
          })}
        </div>
        <div className="carousel-centre-mark" aria-hidden="true">16<span>02</span></div>
      </div>

      <div className="carousel-skip-row">
        {!entered && (
          <button type="button" className="carousel-skip" onClick={skipIntro}>
            {t.carouselSkipIntro}
          </button>
        )}
        <span className="carousel-hint">{t.carouselInteractionHint}</span>
      </div>

      <div className="carousel-active-info" aria-live="polite" aria-atomic="true">
        <div>
          <span className="carousel-active-label">{t.carouselFeaturedLabel}</span>
          <h2>{activeProject.name}<span className="brand-dot">.</span></h2>
          <p>{description}</p>
        </div>
        <div className="carousel-active-actions">
          <div className="carousel-nav-controls">
            <button type="button" onClick={() => selectProject(activeIndex - 1)} aria-label={t.carouselPrevious}><Arrow direction="left" /></button>
            <button type="button" onClick={() => selectProject(activeIndex + 1)} aria-label={t.carouselNext}><Arrow direction="right" /></button>
          </div>
          {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">{t.carouselOpenLive} <span aria-hidden="true">↗</span></a>}
          {sourceUrl && <a href={sourceUrl} target="_blank" rel="noreferrer">{t.carouselSourceCode} <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </div>
  );
}
