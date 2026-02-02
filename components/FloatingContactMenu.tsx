'use client';

import { useState } from 'react';
import { Phone, Mail, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // colored WhatsApp icon

export default function FloatingContactMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: 'Phone',
      href: 'tel:03124740940',
      icon: <Phone size={22} className="text-blue-600" />,
      color: 'bg-blue-50',
      ariaLabel: 'Call us',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/923124740940',
      icon: <FaWhatsapp size={22} className="text-green-500" />,
      color: 'bg-green-50',
      ariaLabel: 'Message us on WhatsApp',
      target: '_blank',
    },
    {
      label: 'Contact Form',
      href: '/contact',
      icon: <Mail size={22} className="text-yellow-500" />,
      color: 'bg-yellow-50',
      ariaLabel: 'Open contact form',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Menu Items */}
      <div className="flex flex-col items-end mb-4">
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target ?? '_self'}
            rel={item.target ? 'noopener noreferrer' : undefined}
            aria-label={item.ariaLabel}
            className={`flex items-center gap-3 px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 opacity-0 translate-y-4 hover:scale-105 hover:shadow-2xl ${item.color} ${
              open ? `opacity-100 translate-y-0 delay-[${index * 75}ms]` : ''
            }`}
          >
            {item.icon}
            <span className="font-semibold text-gray-900">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact us"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:shadow-2xl transition-transform transform active:scale-95"
      >
        <span className="sr-only">Toggle contact menu</span>
        <div className={`transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>
          {open ? <X size={28} /> : <Mail size={28} />}
        </div>
      </button>
    </div>
  );
}
