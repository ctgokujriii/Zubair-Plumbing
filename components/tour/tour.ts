// tour.ts: turns the scroll position inside one tall section into a stop number.
export type Tour = {
  /** 0 .. steps-1, fractional while moving between stops */
  pos: number;
  /** the nearest stop, 0 .. steps-1 */
  active: number;
  goTo: (i: number) => void;
  destroy: () => void;
};

export function createTour(section: HTMLElement, steps: number, onActive: (active: number) => void): Tour {
  const range = () => section.offsetHeight - window.innerHeight;
  const tour: Tour = {
    pos: 0,
    active: -1,
    goTo(i) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: top + (i / (steps - 1)) * range(), behavior: reduced ? 'auto' : 'smooth' });
    },
    destroy() {
      window.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
    },
  };
  function read() {
    const r = range();
    const p = r > 0 ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / r)) : 0;
    tour.pos = p * (steps - 1);
    const a = Math.round(tour.pos);
    if (a !== tour.active) {
      tour.active = a;
      onActive(a);
    }
  }
  window.addEventListener('scroll', read, { passive: true });
  window.addEventListener('resize', read);
  read();
  return tour;
}
