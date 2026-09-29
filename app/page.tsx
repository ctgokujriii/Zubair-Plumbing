import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, HandCoins, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Reveal from '@/components/Reveal';
import { services, featuredServiceTitles } from '@/lib/services';
import { site, zubairYears, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// Real Google reviews of the business, quoted as written.
const testimonials = [
  {
    name: 'Khadija Imran',
    content: 'Excellent service 10/10. Arrived on time, was friendly and respectful, did an amazing job and leave a very good impression. Would contact again if needed 👍👍. A highly recommended and professional man …',
    rating: 5,
  },
  {
    name: 'Mona Maaow',
    content: 'Owesome work done very efficiently & satisfied work. Behaviour is very humble & helpful,really appreciate work highly recommended.Professional, honest, and skilled plumber.Excellent service from start to finish 10/10.He gave a excellent service in a reasonable charges.',
    rating: 5,
  },
  {
    name: 'Muhammad Hassan',
    content: 'Excellent service Arrived on time, worked efficiently, and fixed the problem quickly. Very professional and friendly highly recommended 10/10!! Had a super tiresome and poor experience with other plumbers but this team managed everything from scratch and quite cost-effectively.',
    rating: 5,
  },
  {
    name: 'Dua Razzaq',
    content: 'Recommended 10/10!!! Excellent work! Had a super tiresome and poor experience with other plumbers but this team managed everything from scratch and quite cost-effectively. May they flourish further.',
    rating: 5,
  },
  {
    name: 'Qais Ul Malook',
    content: 'Good and satisfactory work.Called him for a geyser fixation and it worked pretty well. Recommended for any plumbing services.',
    rating: 5,
  },
  {
    name: 'Mohammad Esa Mohyuddin',
    content: 'The work was done honestly and quickly at a cheap rate. Highly recommended',
    rating: 5,
  },
  {
    name: 'Ibraheem Mir',
    content: 'I ordered tank cleaning and filling service. Very co-operative service and timely work done.',
    rating: 5,
  },
  {
    name: 'Habib Mehran',
    content: 'Best plumber In the market they are giving good service to their customers and full responsibility so plz guys contact him',
    rating: 5,
  },
];

export default function Home() {
  const featured = services.filter((s) => featuredServiceTitles.includes(s.title));
  const others = services.filter((s) => !featuredServiceTitles.includes(s.title));

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every plumbing job a home or business needs, and the minor construction that comes with it
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((service, index) => (
              <Reveal key={service.title} delay={index * 100} className="h-full">
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <p className="text-gray-600 dark:text-slate-400 font-semibold mb-4">We also handle</p>
            <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {others.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              {/* Pexels resizes on request; the unsized URL served the 6000px original (2.6 MB) to every phone.
                  A plain img because next/image optimisation is off (see next.config.js). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Plumber tightening a pipe fitting"
                width={900}
                height={600}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </Reveal>

            <Reveal delay={150} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Why Choose {site.name}?
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                A Lahore family business for more than {site.businessYears} years. Zubair&apos;s
                father started it and named it after his son, and Zubair has been doing the
                work himself since he was {site.zubairStartAge}.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-500/15 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Open 24/7</h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Around the clock, every day, for emergencies anywhere in Lahore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-500/15 p-3 rounded-lg mr-4">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Family-Run for {site.businessYears}+ Years
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Two generations in the trade. Zubair alone has {zubairYears}+ years of
                      hands-on experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-500/15 p-3 rounded-lg mr-4">
                    <HandCoins className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Honest, Fair Pricing</h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      What customers bring up again and again in their reviews: honest work
                      at a reasonable price.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              <span>
                Rated <strong className="text-gray-900 dark:text-white">{site.googleRating}</strong> on Google
                from {site.googleReviewCount} reviews
              </span>
            </a>
          </Reveal>

          <Reveal delay={150}>
            <TestimonialsCarousel testimonials={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900 text-white">
        <Reveal className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Plumbing Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Call or WhatsApp {site.phoneDisplay}, day or night
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-900/40 hover:scale-105 active:scale-95 text-lg"
            >
              Book a Service
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-white hover:shadow-xl hover:shadow-blue-900/40 hover:scale-105 active:scale-95 text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
