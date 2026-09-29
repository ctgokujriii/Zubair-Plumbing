import Image from 'next/image';
import Link from 'next/link';
import { Clock, Award, Star } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { site, whatsappLink } from '@/lib/site';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <ParticleBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Professional Plumbing Services You Can{' '}
                <span className="text-blue-600">Trust</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert plumbing solutions for your home and business. Available 24/7 for
                emergency services with quick response times, anywhere in Lahore.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center text-lg"
              >
                Book a Service
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-blue-600 text-center text-lg"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Open 24/7</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">{site.businessYears}+ Years in Business</p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {site.googleRating} on Google
                </p>
              </a>
            </div>
          </div>

          {/* A real photo of Zubair rather than stock: the stock photo that used to
              sit here was deleted from Pexels and left an empty hole in the page. */}
          <div className="hidden md:flex justify-center relative">
            <div className="relative z-10 w-full max-w-sm">
              <Image
                src="/zubair.webp"
                alt="Zubair holding a pipe wrench"
                width={407}
                height={588}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    {site.businessYears}+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Years of</p>
                    <p className="text-gray-600">Family Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
