'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  opacitySpeed: number;
}

// Modelled on the tsParticles network on taiohub.com, which Zubair asked for:
// about 100 particles on a 1009x768 hero there, linked within 120px, lines
// fading with distance. Drawn by hand rather than with tsParticles so the
// effect doesn't cost ~60 KB of JavaScript.
//
// One fixed, screen-sized canvas behind the whole site (mounted in the root
// layout), so every page and every section has it, at a cost that doesn't grow
// with page length. It sits above section backgrounds but below content; see
// the z-index note in app/layout.tsx.
const AREA_PER_PARTICLE = 7500;
const MAX_PARTICLES = 150;
const LINK_DISTANCE = 120;
const LINK_OPACITY = 0.4;
const SPEED = 1; // px per frame at 60fps

// Dark mode uses taiohub's own colours, which were made for a dark page.
// Light mode swaps them for blues: taiohub's grey lines vanish on white.
const THEMES = {
  light: { dot: '14, 165, 233', link: '96, 165, 250', linkWidth: 1 }, // sky-500, blue-400
  dark: { dot: '0, 191, 255', link: '171, 184, 194', linkWidth: 1.5 }, // taiohub.com
};

// Lines are grouped into a few opacity steps so each step is one stroke()
// call, instead of a separate stroke for every pair.
const LINK_BUCKETS = 6;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let theme = root.classList.contains('dark') ? THEMES.dark : THEMES.light;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationId = 0;
    let lastFrame = 0;
    const buckets: number[][] = Array.from({ length: LINK_BUCKETS }, () => []);

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = SPEED * (0.5 + Math.random() * 0.5);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        opacity: Math.random() * 0.6 + 0.2,
        opacitySpeed: (Math.random() - 0.5) * 0.01,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Links first, so the dots sit on top of them
      for (const bucket of buckets) bucket.length = 0;
      const maxSq = LINK_DISTANCE * LINK_DISTANCE;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq >= maxSq) continue;
          const strength = 1 - Math.sqrt(distSq) / LINK_DISTANCE;
          const bucket = Math.min(LINK_BUCKETS - 1, Math.floor(strength * LINK_BUCKETS));
          buckets[bucket].push(i, j);
        }
      }
      ctx.lineWidth = theme.linkWidth;
      for (let k = 0; k < LINK_BUCKETS; k++) {
        const pairs = buckets[k];
        if (!pairs.length) continue;
        ctx.strokeStyle = `rgba(${theme.link}, ${(LINK_OPACITY * (k + 0.5)) / LINK_BUCKETS})`;
        ctx.beginPath();
        for (let n = 0; n < pairs.length; n += 2) {
          const a = particles[pairs[n]];
          const b = particles[pairs[n + 1]];
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
        }
        ctx.stroke();
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${theme.dot}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = (now: number) => {
      // Scaled by elapsed time so a 120Hz phone doesn't run it at double speed
      const dt = lastFrame ? Math.min((now - lastFrame) / (1000 / 60), 3) : 1;
      lastFrame = now;
      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.opacity += p.opacitySpeed * dt;
        if (p.opacity <= 0.15 || p.opacity >= 0.8) p.opacitySpeed *= -1;
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(step);
    };

    // Drawn at the screen's pixel density (capped at 2x) so lines stay sharp
    // on phones.
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      // Sized in px from the window rather than 100vh, which on phones is the
      // height with the address bar hidden and would stretch the drawing.
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(MAX_PARTICLES, Math.round((width * height) / AREA_PER_PARTICLE));
      // Keep the particles that are still on screen: a phone's address bar
      // showing and hiding resizes the window, and re-seeding every time made
      // the whole field jump while scrolling.
      particles = particles.filter((p) => p.x <= width && p.y <= height).slice(0, target);
      while (particles.length < target) particles.push(createParticle());
      draw();
    };

    resize();
    window.addEventListener('resize', resize);

    // Recolour immediately when the theme toggle flips the class on <html>.
    const themeObserver = new MutationObserver(() => {
      theme = root.classList.contains('dark') ? THEMES.dark : THEMES.light;
      if (!animationId) draw();
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });

    if (!reduceMotion) animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[1]"
    />
  );
}
