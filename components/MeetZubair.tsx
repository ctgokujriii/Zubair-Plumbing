import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

// The photo of Zubair that used to sit in the hero, kept on the home page for
// trust, next to the family story from the About page (word for word).
export default function MeetZubair() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 dark:from-slate-950 via-white dark:via-slate-900 to-blue-50 dark:to-slate-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center relative">
            <div
              aria-hidden="true"
              className="absolute w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 blur-3xl opacity-40 motion-safe:animate-glow-pulse"
            />
            <div className="relative z-10 w-full max-w-xs md:max-w-sm">
              <Image
                src="/zubair.webp"
                alt="Zubair holding a pipe wrench"
                width={407}
                height={588}
                className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/30"
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    {site.businessYears}+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Years of</p>
                    <p className="text-gray-600 dark:text-slate-400">Family Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Meet Zubair</h2>
            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
              Zubair Plumbing Services is a family business. Zubair&apos;s father has been
              doing plumbing work in Lahore for more than {site.businessYears} years, and
              named the business after his son.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              More about us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
