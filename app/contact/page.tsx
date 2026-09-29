import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { services } from '@/lib/services';
import { pageMetadata } from '@/lib/metadata';
import { site, fullAddress, whatsappLink } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact & Booking',
  description: `Book a plumber anywhere in Lahore. Call or WhatsApp ${site.phoneDisplay}, open 24/7. ${fullAddress}.`,
  path: '/contact',
});

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have a plumbing question or need to schedule a service? We&apos;re here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm serviceTitles={services.map((s) => s.title)} />

            {/* INFO */}
            <div className="space-y-10">
              <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                <p className="flex items-center gap-3 group mb-4">
                  <Phone className="text-blue-500 flex-shrink-0 transition-transform duration-200 ease-in-out group-hover:scale-110" aria-hidden="true" />
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {site.phoneDisplay}
                  </a>
                </p>

                <p className="flex items-center gap-3 group mb-4">
                  <FaWhatsapp className="text-green-500 flex-shrink-0 w-6 h-6 transition-transform duration-200 ease-in-out group-hover:scale-110" aria-hidden="true" />
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    WhatsApp {site.phoneDisplay}
                  </a>
                </p>

                <p className="flex items-center gap-3 group mb-4">
                  <Mail className="text-red-500 flex-shrink-0 transition-transform duration-200 ease-in-out group-hover:scale-110" aria-hidden="true" />
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-blue-600 transition-colors break-all"
                  >
                    {site.email}
                  </a>
                </p>

                <p className="flex items-start gap-3 group mb-4">
                  <MapPin className="text-blue-500 flex-shrink-0 mt-1 transition-transform duration-200 ease-in-out group-hover:scale-110" aria-hidden="true" />
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {fullAddress}
                  </a>
                </p>

                <p className="flex items-center gap-3 group">
                  <Clock className="text-yellow-500 flex-shrink-0 transition-transform duration-200 ease-in-out group-hover:scale-110" aria-hidden="true" />
                  Open 24/7, including emergencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
