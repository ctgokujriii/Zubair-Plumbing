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

// One particle per this many square pixels, so a phone gets a similar density
// to a desktop instead of 300 particles crammed into a small screen.
const AREA_PER_PARTICLE = 3000;
const MAX_PARTICLES = 300;
const COLOR = '59, 130, 246'; // Tailwind blue-500

// The glow is drawn once onto a small offscreen canvas and stamped for every
// particle. Building a fresh radial gradient per particle per frame was the
// most expensive thing on the page.
function makeSprite() {
  const size = 64;
  const sprite = document.createElement('canvas');
  sprite.width = sprite.height = size;
  const ctx = sprite.getContext('2d')!;
  const r = size / 2;
  const glow = ctx.createRadialGradient(r, r, 0, r, r, r);
  glow.addColorStop(0, `rgba(${COLOR}, 0.5)`);
  glow.addColorStop(1, `rgba(${COLOR}, 0)`);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);
  ctx.beginPath();
  ctx.arc(r, r, r / 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${COLOR})`;
  ctx.fill();
  return sprite;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !parent || !ctx) return;

    const sprite = makeSprite();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles: Particle[] = [];
    let animationId = 0;
    let visible = true;

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      opacitySpeed: (Math.random() - 0.5) * 0.01,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        const glow = p.size * 3;
        ctx.globalAlpha = p.opacity;
        ctx.drawImage(sprite, p.x - glow, p.y - glow, glow * 2, glow * 2);
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacitySpeed;
        if (p.opacity <= 0.15 || p.opacity >= 0.7) p.opacitySpeed *= -1;
        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(step);
    };

    const start = () => {
      if (!reduceMotion && visible && !animationId) animationId = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(animationId);
      animationId = 0;
    };

    // Sized to the hero, not the window: the hero is taller than the screen on
    // phones, and a window-sized canvas left its bottom strip bare.
    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      const count = Math.min(
        MAX_PARTICLES,
        Math.round((canvas.width * canvas.height) / AREA_PER_PARTICLE)
      );
      particles = Array.from({ length: count }, createParticle);
      draw();
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    // Nothing to animate once the hero has scrolled away.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersectionObserver.observe(canvas);

    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
