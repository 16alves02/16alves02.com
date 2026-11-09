import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const EngineeringStories = lazy(() => import('./EngineeringStories.jsx'));

export default function DeferredEngineeringStories(props) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShouldLoad(true);
      observer.disconnect();
    }, { rootMargin: '480px 0px', threshold: 0.01 });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="engineering-stories-deferred">
      {shouldLoad ? (
        <Suspense fallback={<div className="engineering-stories-loading" aria-hidden="true" />}>
          <EngineeringStories {...props} />
        </Suspense>
      ) : (
        <div className="engineering-stories-loading" aria-hidden="true" />
      )}
    </div>
  );
}
