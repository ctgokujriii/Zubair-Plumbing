'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// Fades content up as it scrolls into view, once, like the sections on
// taiohub.com (which use framer-motion's whileInView for the same thing).
//
// The server renders everything visible. Only content that is still below the
// fold when the page loads gets hidden, and only by this script, so nothing
// flashes on load and nothing stays invisible if JavaScript fails.
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add('reveal-pending');
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('reveal-in');
        observer.disconnect();
      },
      { rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
