import Link from 'next/link';
import { Phone, Mail, MapPin, Droplet, Facebook, Twitter, Instagram } from 'lucide-react';
import GoogleMapReviews from './GoogleMapReviews';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Leak Repair</li>
              <li>Pipe Installation</li>
              <li>Bathroom Plumbing</li>
              <li>Kitchen Plumbing</li>
              <li>Emergency Services</li>
            </ul>
          </div>
</div>
          <div>
  <h3 className="text-lg font-semibold mb-4">Find Us</h3>

  <ul className="space-y-3 mb-6">
    
    <li className="flex items-start space-x-2 text-gray-400 text-sm">
      <MapPin className="w-4 h-4 text-blue-400 mt-1" />
      <span>196-A, Scheme Mor Multan Rd, Sabzazar Lahore, 54500</span>
    </li>
  </ul>

  {/* Google Reviews */}
  <div className="rounded-lg overflow-hidden border border-gray-800">
    <GoogleMapReviews />
  </div>

  <div className="flex space-x-4 mt-4">
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
      <Facebook className="w-5 h-5" />
    </a>
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
      <Twitter className="w-5 h-5" />
    </a>
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
      <Instagram className="w-5 h-5" />
    </a>
  </div>
</div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Made with ❤️ by the TAIO Hub team.</p>
        </div>
      </div>
    </footer>
  );
}
