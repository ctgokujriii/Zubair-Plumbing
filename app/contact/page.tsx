'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const lahoreAreas = [
    'Sabzazar',
    'Marghazar',
    'Gulberg',
    'DHA (Defence Housing Authority)',
    'Bahria Town',
    'Model Town',
    'Johar Town',
    'Wapda Town',
    'Garden Town',
    'Iqbal Town (Allama Iqbal Town)',
    'Samanabad',
    'Cantt (Lahore Cantonment)',
    'Askari Housing Society',
    'Lake City',
    'Valencia Town',
    'Faisal Town',
    'LDA Avenue',
    'Park View City',
    'Etihad Town',
    'Al Kabir Town',
    'Bahria Orchard',
    'Dream Gardens',
    'Fazaia Housing Scheme',
    'LDA City',
    'Al Rehman Garden',
    'Zaitoon City',
    'Union Town',
    'State Life Housing Society',
    'Al Raheem Garden',
    'Kings Town',
    'Pearl One Residences',
    'NFC Society',
    'Sultan Town',
    'Rehman Villas',
    'Sarwar Colony',
    'Izmir Town',
    'Jubilee Town',
    'Eden Avenue',
    'Pakistan Medical Housing Society',
    'Airline Housing Society',
    'Aitchison Society',
    'Beacon House Society',
    'Divine Gardens',
    'Al Noor Orchard',
    'Lahore Smart City',
    'Gulberg Greens',
    'Amin Town',
    'Al Hafeez Gardens',
    'Al Jalil Garden',
    'Al Kareem Garden',
    'Askari X',
    'Cavalry Ground',
    'Muslim Town',
    'Gulshan Ravi',
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = '923124740940';
    const text =
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Area: ${formData.area}%0A` +
      `Service: ${formData.service}%0A` +
      `Message: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        area: '',
        service: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

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
              Have a plumbing question or need to schedule a service? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you for contacting us! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Select Area (Lahore)</option>
                  {lahoreAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Select Service</option>
                  <option value="Leak Repair">Leak Repair</option>
                  <option value="Pipe Installation">Pipe Installation</option>
                  <option value="Bathroom Plumbing">Bathroom Plumbing</option>
                  <option value="Kitchen Plumbing">Kitchen Plumbing</option>
                  <option value="Emergency Service">Emergency Service</option>
                  <option value="Water Heater Service">Water Heater Service</option>
                  <option value="Drain Cleaning">Drain Cleaning</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border rounded-lg resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition-transform duration-200 ease-in-out transform hover:scale-105"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Phone className="mr-2 w-5 h-5 animate-pulse" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="space-y-10">
              <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                <p className="flex items-center gap-3 group mb-4">
                  <Phone className="text-green-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
                  <a
                    href="https://wa.me/923124740940"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    0312-4740940 <span className="text-green-500 font-semibold">(WhatsApp)</span>
                  </a>
                </p>

                <p className="flex items-center gap-3 group mb-4">
                  <Mail className="text-red-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
                  <a
                    href="mailto:za107112@gmail.com"
                    className="hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    za107112@gmail.com
                  </a>
                </p>

                <p className="flex items-start gap-3 group mb-4">
                  <MapPin className="text-blue-500 mt-1 transition-transform duration-200 ease-in-out group-hover:scale-110" />
                  <a
                    href="https://www.google.com/maps/place/Zubair+Plumbing+Services/@31.5254088,74.2804172,16.89z/data=!4m10!1m2!2m1!1s196-A+Scheme+Mor+Multan+Rd+Sabzazar+Lahore!3m6!1s0x39190393440bbb89:0x132835ac0809e347!8m2!3d31.5267496!4d74.2837639!15sCiwxOTYtQSBTY2hlbWUgTW9yIE11bHRhbiBSb2FkIFNhYnphemFyIExhaG9yZVouIiwxOTYgYSBzY2hlbWUgbW9yIG11bHRhbiByb2FkIHNhYnphemFyIGxhaG9yZZIBB3BsdW1iZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjZjamxxYlVobkVBReABAPoBBAgAEBI!16s%2Fg%2F11r2gwqqwf?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    196-A, Scheme Mor, Multan Rd, Sabzazar, Lahore
                  </a>
                </p>

                <p className="flex items-center gap-3 group">
                  <Clock className="text-yellow-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />{' '}
                  24/7 Emergency Service
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
