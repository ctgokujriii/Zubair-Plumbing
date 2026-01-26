import { Wrench, Droplets, Zap, ShowerHead, Hammer, Thermometer, Settings, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Leak Repair',
      description: 'Expert leak detection and repair services to prevent water damage and save on utility costs.',
      features: [
        'Advanced leak detection technology',
        'Pipe leak repairs',
        'Faucet and fixture repairs',
        'Water line repairs',
        'Emergency leak services',
        'Slab leak detection',
      ],
    },
    {
      icon: Wrench,
      title: 'Pipe Installation & Replacement',
      description: 'Professional pipe installation and replacement using high-quality materials and modern techniques.',
      features: [
        'New construction piping',
        'Whole-house re-piping',
        'PEX pipe installation',
        'Copper pipe installation',
        'Galvanized pipe replacement',
        'Sewer line replacement',
      ],
    },
    {
      icon: ShowerHead,
      title: 'Bathroom Plumbing',
      description: 'Complete bathroom plumbing solutions from new installations to repairs and remodeling.',
      features: [
        'Toilet installation & repair',
        'Shower and tub installation',
        'Bathroom sink installation',
        'Bathroom remodeling',
        'Vanity installation',
        'Fixture upgrades',
      ],
    },
    {
      icon: Home,
      title: 'Kitchen Plumbing',
      description: 'Specialized kitchen plumbing services for optimal functionality and efficiency.',
      features: [
        'Kitchen sink installation',
        'Garbage disposal services',
        'Dishwasher installation',
        'Kitchen faucet repair',
        'Water line installation',
        'Kitchen remodeling support',
      ],
    },
    {
      icon: Zap,
      title: 'Emergency Services',
      description: '24/7 emergency plumbing services with rapid response for urgent situations.',
      features: [
        'Available 24/7/365',
        'Fast response times',
        'Burst pipe repairs',
        'Emergency leak fixes',
        'Clogged drain clearing',
        'Water heater emergencies',
      ],
    },
    {
      icon: Thermometer,
      title: 'Water Heater Services',
      description: 'Complete water heater installation, repair, and maintenance for all types and brands.',
      features: [
        'Tank water heater installation',
        'Tankless water heater setup',
        'Water heater repairs',
        'Regular maintenance',
        'Energy-efficient upgrades',
        'Emergency replacements',
      ],
    },
    {
      icon: Settings,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and maintenance to keep your plumbing flowing smoothly.',
      features: [
        'Clogged drain clearing',
        'Hydro jetting services',
        'Sewer line cleaning',
        'Camera inspections',
        'Root removal',
        'Preventive maintenance',
      ],
    },
    {
      icon: Hammer,
      title: 'Fixture Installation',
      description: 'Expert installation and replacement of all plumbing fixtures for your home or business.',
      features: [
        'Faucet installation',
        'Toilet upgrades',
        'Sink installations',
        'Shower head replacement',
        'Bathtub installation',
        'Fixture repairs',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive plumbing services for residential and commercial properties.
              From routine maintenance to emergency repairs, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Contact us today for professional plumbing services. We're here to help
                with all your plumbing needs, big or small.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
                >
                  Book a Service
                </a>
                <a
                  href="tel:5551234567"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white text-center"
                >
                  Call (555) 123-4567
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Services?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Licensed & Insured</h4>
                    <p className="opacity-90">Fully certified professionals for your peace of mind</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Experienced Team</h4>
                    <p className="opacity-90">Over 15 years of industry experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Quality Guarantee</h4>
                    <p className="opacity-90">100% satisfaction guaranteed on all work</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
