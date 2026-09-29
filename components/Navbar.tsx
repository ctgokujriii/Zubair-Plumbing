'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            {/* Sized per breakpoint so the full name stays on one line beside the
                links, and on narrow phones (360px Androids) beside the theme and
                menu buttons */}
            <span className="max-[359px]:text-sm max-[400px]:text-base text-lg sm:text-2xl md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-slate-100 whitespace-nowrap">
              Zubair <span className="text-blue-600 dark:text-blue-400">Plumbing Services</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden lg:block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Book a Service
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 -mr-2 text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-slate-800 border-t">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
