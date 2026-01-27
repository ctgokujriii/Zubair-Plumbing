// TestimonialCard.tsx
'use client';

import { Star } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-blue-600 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full min-h-[250px] flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-blue-300'}`}
            />
          ))}
        </div>

        <p className="text-white mb-4 leading-relaxed italic text-sm md:text-base">"{content}"</p>
      </div>

      <div className="flex items-center mt-2">
        <div className="w-10 h-10 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-base">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-white text-sm md:text-base">{name}</h4>
          <p className="text-blue-200 text-xs md:text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
