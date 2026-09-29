'use client';

import { useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { site, whatsappLink } from '@/lib/site';

export default function FloatingContactMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const menuItems = [
    {
      label: 'Phone',
      href: `tel:${site.phoneTel}`,
      icon: <Phone size={22} className="text-blue-600 dark:text-blue-400" />,
      color: 'bg-blue-50 dark:bg-slate-800',
      ariaLabel: 'Call us',
    },
    {
      label: 'WhatsApp',
      href: whatsappLink(),
      icon: <FaWhatsapp size={22} className="text-green-500" />,
      color: 'bg-green-50 dark:bg-slate-800',
      ariaLabel: 'Message us on WhatsApp',
      target: '_blank',
    },
    {
      label: 'Contact Form',
      href: '/contact',
      icon: <Mail size={22} className="text-yellow-500" />,
      color: 'bg-yellow-50 dark:bg-slate-800',
      ariaLabel: 'Open contact form',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Menu Items. Closed, they must stop taking taps as well as disappear:
          opacity alone left three invisible links over the page, and a tap on
          the content behind them dialled the phone. */}
      <div
        id="contact-menu"
        className={`flex flex-col items-end mb-4 ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target ?? '_self'}
            rel={item.target ? 'noopener noreferrer' : undefined}
            aria-label={item.ariaLabel}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-4 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
              ${item.color}
              ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: open ? `${index * 75}ms` : '0ms' }}
          >
            {item.icon}
            <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close contact options' : 'Contact us'}
        aria-expanded={open}
        aria-controls="contact-menu"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:shadow-2xl transition-transform active:scale-95"
      >
        <div className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>
          {open ? <X size={28} /> : <MessageCircle size={28} />}
        </div>
      </button>
    </div>
  );
}
