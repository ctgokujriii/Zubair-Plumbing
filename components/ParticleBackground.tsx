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

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    /* =========================
       🔧 CONFIG (EDIT THESE)
    ========================== */
    const PARTICLE_COUNT = 300; // 👈 increase/decrease here
    const MAX_DISTANCE = 10;
    const COLOR = '59, 130, 246'; // Tailwind blue-500
    /* ========================= */

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      opacitySpeed: (Math.random() - 0.5) * 0.01,
    });

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    };

    const updateParticle = (p: Particle) => {
      p.x += p.vx;
      p.y += p.vy;
      p.opacity += p.opacitySpeed;

      if (p.opacity <= 0.15 || p.opacity >= 0.7) {
        p.opacitySpeed *= -1;
      }

      if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
      if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;
    };

    const drawParticle = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${COLOR}, ${p.opacity})`;
      ctx.fill();

      // glow
      const gradient = ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        p.size * 3
      );
      gradient.addColorStop(0, `rgba(${COLOR}, ${p.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${COLOR}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fill();
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${COLOR}, ${0.15 * (1 - distance / MAX_DISTANCE)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        updateParticle(p);
        drawParticle(p);
      });

      connectParticles();

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
