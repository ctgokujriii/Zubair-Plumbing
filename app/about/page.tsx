'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Zubair Plumbing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional plumbing services you can trust. Committed to quality,
            efficiency, and 24/7 availability for all your plumbing needs.
          </p>
        </div>
      </div>

      {/* Meet Zubair Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Meet <span className="text-blue-600">Zubair</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-14">
          
          {/* Image Card */}
          <div className="flex-shrink-0">
            <div className="w-80 h-96 md:w-96 md:h-[420px] bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              <Image
                src="https://i.postimg.cc/HLRmGQqn/zubair.png"
                alt="Zubair - Professional Plumber"
                width={500}
                height={600}
                className="w-full h-full object-contain p-4"
                priority
              />
            </div>
          </div>

          {/* Text Summary */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Zubair is 27 years old and has been working in the plumbing industry
              for over 12 years. His dedication, technical expertise, and strong
              work ethic have earned him a reputation as a reliable and
              professional plumber.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate about delivering quality service, Zubair ensures every
              job is completed efficiently and with attention to detail, making
              him a trusted choice for both residential and commercial plumbing
              needs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
