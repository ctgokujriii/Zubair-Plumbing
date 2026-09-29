'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard';

interface TestimonialsCarouselProps {
  testimonials: TestimonialCardProps[];
}

// Long enough to read a 50-word review. At the old 2.5s the card moved on
// before most people reached the end of it.
const AUTO_ADVANCE_MS = 7000;

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [currentIndex, paused, testimonials.length]);

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    if (offset < -Math.floor(testimonials.length / 2)) offset += testimonials.length;
    if (offset > Math.floor(testimonials.length / 2)) offset -= testimonials.length;
    return offset;
  };

  // Only 3 dots at a time
  const visibleDots = [
    (currentIndex - 1 + testimonials.length) % testimonials.length,
    currentIndex,
    (currentIndex + 1) % testimonials.length,
  ];

  const previous = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto py-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Carousel container */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden" aria-live={paused ? 'polite' : 'off'}>
        {testimonials.map((t, index) => {
          const offset = getOffset(index);

          return (
            <div
              key={index}
              aria-hidden={offset !== 0}
              className="absolute top-0 left-1/2 transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(${offset * 100}% - 50%)) scale(${offset === 0 ? 1 : 0.8})`,
                zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                opacity: Math.abs(offset) > 1 ? 0 : 0.6 + (1 - Math.abs(offset)) * 0.4,
                width: '70%',
              }}
            >
              <TestimonialCard {...t} />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2 relative z-20" aria-hidden="true">
        {visibleDots.map((dotIndex, idx) => {
          const isCenter = dotIndex === currentIndex;
          return (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full transition-all duration-300
                ${isCenter ? 'bg-blue-600' : 'bg-blue-400/70 blur-sm'}`}
            />
          );
        })}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-2 top-[60%] z-20 pointer-events-none">
        <button
          onClick={previous}
          aria-label="Previous review"
          className="pointer-events-auto bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="pointer-events-auto bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
