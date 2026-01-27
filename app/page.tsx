import Link from 'next/link';
import { Wrench, Droplets, Zap, ShowerHead, Clock, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';


export default function Home() {
  const services = [
    {
      icon: Droplets,
      title: 'Leak Repair',
      description: 'Fast and efficient leak detection and repair services for all types of plumbing systems.',
      features: ['Pipe leak repairs', 'Faucet fixes', 'Water line repairs', 'Emergency service available'],
    },
    {
      icon: Wrench,
      title: 'Pipe Installation',
      description: 'Professional pipe installation and replacement services using quality materials.',
      features: ['New construction piping', 'Pipe replacement', 'Re-piping services', 'PEX and copper pipes'],
    },
    {
      icon: ShowerHead,
      title: 'Bathroom Plumbing',
      description: 'Complete bathroom plumbing solutions from installation to repairs.',
      features: ['Toilet installation & repair', 'Shower & tub services', 'Sink installations', 'Bathroom remodels'],
    },
    {
      icon: Zap,
      title: 'Emergency Services',
      description: '24/7 emergency plumbing services with rapid response times, all over Lahore.',
      features: ['Available 24/7', 'Fast response', 'Burst pipe repairs', 'Emergency leak fixes'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Zubair Plumbing fixed our burst pipe emergency within an hour. Professional, efficient, and reasonably priced. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'They handled our restaurant kitchen plumbing renovation perfectly. Great communication and quality work throughout the project.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'We use Zubair Plumbing for all our properties. Reliable, professional, and always deliver excellent results. Our go-to plumbers!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg"
                alt="Why Choose Us"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Choose Zubair Plumbing?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience, we provide reliable, professional plumbing
                services backed by expertise and customer satisfaction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Emergency plumbing services available around the clock for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">
                      Fully licensed, bonded, and insured for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">
                      Skilled professionals with years of experience in all plumbing needs.
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Plumbing Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for fast, reliable, and professional plumbing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
            >
              Book a Service
            </Link>
            <a
              href="tel:03124740940"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white text-lg"
            >
              Call 03124740940
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
