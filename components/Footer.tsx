import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Droplet,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import GoogleMapReviews from './GoogleMapReviews';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Zubair <span className="text-blue-400">Plumbing</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional plumbing services you can trust. Available 24/7 for emergencies.
            </p>
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
                href="https://web.facebook.com/zubair.ali.798760/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@zubairali074"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok size={20} />
              </a>

              <a
                href="https://www.youtube.com/@zubairali3279"
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
          <p>&copy; {new Date().getFullYear()} Made with ❤️ by the TAIO Hub team.</p>
        </div>
      </div>
    </footer>
  );
}
