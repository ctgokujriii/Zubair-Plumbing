import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable service you can count on, every time.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest quality workmanship.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Honest, transparent, and fair in all we do.',
    },
  ];

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Zubair Plumbing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for professional plumbing services since 2005
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Zubair Plumbing"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2005, Zubair Plumbing Services has grown from a small local
                operation to one of the most trusted plumbing companies in the area. Our
                journey began with a simple mission: to provide honest, reliable, and
                professional plumbing services to our community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 20 years of experience, we've built our reputation on quality
                workmanship, exceptional customer service, and unwavering integrity. Our
                team of licensed and insured plumbers is dedicated to solving your plumbing
                problems efficiently and effectively.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we serve hundreds of residential and commercial clients, handling
                everything from routine maintenance to complex installations and emergency
                repairs. Our commitment to excellence and customer satisfaction remains the
                cornerstone of everything we do.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To provide exceptional plumbing services that exceed expectations, build lasting
              relationships with our clients, and contribute positively to our community.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">What Sets Us Apart</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
                    <p className="opacity-90">
                      Our plumbers are highly trained, certified professionals with years of
                      hands-on experience in all aspects of plumbing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">24/7 Availability</h4>
                    <p className="opacity-90">
                      Plumbing emergencies don't wait for business hours, and neither do we.
                      We're always here when you need us.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Quality Workmanship</h4>
                    <p className="opacity-90">
                      We use only the best materials and latest techniques to ensure lasting
                      results that stand the test of time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
                    <p className="opacity-90">
                      Fully licensed, bonded, and insured for your protection and peace of
                      mind on every job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust Zubair Plumbing for all their
              plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
              >
                Get In Touch
              </a>
              <a
                href="tel:5551234567"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white text-lg"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
