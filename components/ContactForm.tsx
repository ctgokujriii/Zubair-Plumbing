'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

const lahoreAreas = [
  'Airline Housing Society',
  'Aitchison Society',
  'Al Hafeez Gardens',
  'Al Jalil Garden',
  'Al Kabir Town',
  'Al Kareem Garden',
  'Al Noor Orchard',
  'Al Raheem Garden',
  'Al Rehman Garden',
  'Amin Town',
  'Askari Housing Society',
  'Askari X',
  'Bahria Orchard',
  'Bahria Town',
  'Beacon House Society',
  'Cantt (Lahore Cantonment)',
  'Cavalry Ground',
  'DHA (Defence Housing Authority)',
  'Divine Gardens',
  'Dream Gardens',
  'Eden Avenue',
  'Etihad Town',
  'Faisal Town',
  'Fazaia Housing Scheme',
  'Garden Town',
  'Gulberg',
  'Gulberg Greens',
  'Gulshan Ravi',
  'Iqbal Town (Allama Iqbal Town)',
  'Izmir Town',
  'Johar Town',
  'Jubilee Town',
  'Kings Town',
  'Lahore Smart City',
  'Lake City',
  'LDA Avenue',
  'LDA City',
  'Marghazar',
  'Model Town',
  'Muslim Town',
  'NFC Society',
  'Pakistan Medical Housing Society',
  'Park View City',
  'Pearl One Residences',
  'Rehman Villas',
  'Sabzazar',
  'Samanabad',
  'Sarwar Colony',
  'State Life Housing Society',
  'Sultan Town',
  'Union Town',
  'Valencia Town',
  'Wapda Town',
  'Zaitoon City',
];

// The list can never name every neighbourhood in Lahore, and the field is
// required, so without this a customer whose area was missing couldn't send
// the form at all.
const OTHER_AREA = 'Other (please mention in message)';

const emptyForm = { name: '', phone: '', area: '', service: '', message: '' };

const inputClass =
  'w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500';

// Service names come in as plain strings from the page, which keeps the
// services list and its icons out of the browser bundle.
export default function ContactForm({ serviceTitles }: { serviceTitles: string[] }) {
  const [formData, setFormData] = useState(emptyForm);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'opened'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // whatsappLink encodes the whole message. Built by hand it wasn't, so an "&"
    // in a message ended it there and a "+92" number arrived as " 92".
    const url = whatsappLink(
      [
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `Area: ${formData.area}`,
        `Service: ${formData.service}`,
        `Message: ${formData.message}`,
      ].join('\n')
    );

    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    } else {
      // Popup blocked: go there in this tab rather than silently doing nothing.
      window.location.href = url;
    }

    // WhatsApp only has the message once the customer presses Send there, so
    // say that rather than thanking them for a message that hasn't gone yet.
    setSubmitStatus('opened');
    setFormData(emptyForm);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

      {submitStatus === 'opened' && (
        <div
          role="status"
          className="mb-6 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg"
        >
          Your message is ready in WhatsApp. Press <strong>Send</strong> there and we&apos;ll
          get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="sr-only">Full name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="sr-only">Phone number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-area" className="sr-only">Area</label>
          <select
            id="contact-area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select Area (Lahore)</option>
            {lahoreAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
            <option value={OTHER_AREA}>{OTHER_AREA}</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-service" className="sr-only">Service</label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select Service</option>
            {serviceTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Your message..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition-transform duration-200 ease-in-out transform hover:scale-105"
        >
          <Phone className="mr-2 w-5 h-5 animate-pulse" aria-hidden="true" />
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
