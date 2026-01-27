'use client';

import { useState, useEffect, useRef } from 'react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard';

interface TestimonialsCarouselProps {
  testimonials: TestimonialCardProps[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2500); // auto-scroll every 2.5s
    return () => resetTimeout();
  }, [currentIndex, testimonials.length]);

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    if (offset < -Math.floor(testimonials.length / 2)) offset += testimonials.length;
    if (offset > Math.floor(testimonials.length / 2)) offset -= testimonials.length;
    return offset;
  };

  // Only 3 dots at a time
  const getVisibleDots = () => {
    const dots = [];
    const left = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % testimonials.length;
    dots.push(left, center, right);
    return dots;
  };

  const visibleDots = getVisibleDots();

  return (
    <div className="relative w-full max-w-3xl mx-auto py-12">
      {/* Carousel container */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        {testimonials.map((t, index) => {
          const offset = getOffset(index);

          return (
            <div
              key={index}
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
      <div className="flex justify-center mt-6 space-x-2 relative z-20">
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
      <div className="absolute inset-0 flex items-center justify-between px-2 top-[60%] z-20">
        <button
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
            )
          }
          className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
          className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
