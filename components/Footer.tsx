import Link from 'next/link';
import { Phone, Mail, MapPin, Droplet, Facebook, Youtube } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import GoogleMapReviews from './GoogleMapReviews';
import { site, fullAddress, whatsappLink } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and contact details. Name, address and phone on every page,
              matching the Google listing, is what local search ranks on. */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Zubair <span className="text-blue-400">Plumbing Services</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Family-run plumbing in Lahore for {site.businessYears}+ years. Open 24/7.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors break-all">
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-blue-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {fullAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>

            {/* Google Reviews */}
            <div className="rounded-lg overflow-hidden border border-gray-800 mb-4">
              <GoogleMapReviews />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok size={20} />
              </a>

              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {site.name}. Made with ❤️ by the TAIO Hub team.</p>
        </div>
      </div>
    </footer>
  );
}
