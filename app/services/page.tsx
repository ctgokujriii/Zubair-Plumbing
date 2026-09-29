import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '@/components/Reveal';
import { services } from '@/lib/services';
import { pageMetadata } from '@/lib/metadata';
import { site, zubairYears, whatsappLink } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Plumbing Services in Lahore',
  description:
    'Leak detection, pipe and sanitary fitting, kitchen plumbing, water tanks, motors and pumps, geysers, drains, water filters, seepage and minor construction. Open 24/7 anywhere in Lahore.',
  path: '/services',
});

const reasons = [
  {
    title: `Family-Run for ${site.businessYears}+ Years`,
    body: `Zubair's father started the business; Zubair has ${zubairYears}+ years of his own.`,
  },
  {
    title: `Rated ${site.googleRating} on Google`,
    body: `From ${site.googleReviewCount} customer reviews.`,
  },
  {
    title: 'One Call for the Whole Job',
    body: 'Plumbing and the building work around it, so you don\'t need a separate mason.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 bg-gradient-to-br from-blue-50 dark:from-slate-950 via-white dark:via-slate-900 to-blue-50 dark:to-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-shimmer">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Every plumbing job a home or business needs, from a dripping tap to a full
              sanitary fitting, plus the minor construction that comes with it. Open 24/7
              anywhere in Lahore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 100} className="h-full">
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Tell us what needs doing, big or small, and we&apos;ll take it from there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
                >
                  Book a Service
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason.title} className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{reason.title}</h4>
                      <p className="opacity-90">{reason.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
