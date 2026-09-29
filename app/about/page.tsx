import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/metadata';
import { site, zubairYears } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Us',
  description: `A Lahore family plumbing business for more than ${site.businessYears} years. Meet Zubair, who has been doing the work himself since he was ${site.zubairStartAge}.`,
  path: '/about',
});

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Zubair Plumbing Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Lahore family business for more than {site.businessYears} years. Committed to
            quality, honest pricing, and 24/7 availability for all your plumbing needs.
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
                src="/zubair.webp"
                alt="Zubair holding a pipe wrench"
                width={407}
                height={588}
                className="w-full h-full object-contain p-4"
                priority
              />
            </div>
          </div>

          {/* Text Summary */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Zubair Plumbing Services is a family business. Zubair&apos;s father has been
              doing plumbing work in Lahore for more than {site.businessYears} years, and
              named the business after his son.
            </p>

            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Zubair started working alongside him at {site.zubairStartAge}. He&apos;s{' '}
              {site.zubairAge} now, with over {zubairYears} years of hands-on experience of
              his own, and a reputation for turning up on time, explaining the problem
              clearly, and charging a fair price.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The work covers everything a home or business needs from a plumber: leaks,
              pipe and sanitary fitting, water tanks, motors, geysers and drains. It also
              covers the minor construction that comes with it, like tiling, masonry and
              seepage repairs, so one call handles the whole job.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
