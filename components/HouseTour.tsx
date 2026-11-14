'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Clock, Award, Star, Phone } from 'lucide-react';
import { services, type Service } from '@/lib/services';
import { site, whatsappLink } from '@/lib/site';
import { createTour, type Tour } from '@/components/tour/tour';

// One stop per service, found by its exact title in lib/services.ts.
const STOP_TITLES = [
  'Leak Detection & Repair',
  'Bathroom & Sanitary Fitting',
  'Kitchen Plumbing',
  'Water Tanks',
  'Geyser Services',
  '24/7 Emergency',
];
const STOP_SERVICES = STOP_TITLES.map((t) => services.find((s) => s.title === t)).filter((s): s is Service => Boolean(s));
const STOP_COUNT = 1 + STOP_SERVICES.length;

const primaryBtn =
  'bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 text-center text-lg';
const outlineBtn =
  'bg-slate-800 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 border-2 border-blue-400 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 text-center text-lg';

export default function HouseTour() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tourRef = useRef<Tour | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = stageRef.current;
    if (!section || !wrap) return;
    const tour = createTour(section, STOP_COUNT, setActive);
    tourRef.current = tour;
    let unmount = () => {};
    let dead = false;
    import('@/components/tour/houseScene').then(({ mountScene }) => {
      // three.js stays out of the main bundle
      if (!dead) unmount = mountScene(wrap, () => tour.pos);
    });
    return () => {
      dead = true;
      unmount();
      tour.destroy();
      tourRef.current = null;
    };
  }, []);

  const panel = (i: number) => ({
    className: `tour-panel${i === active ? ' is-on' : ''}`,
    'data-tour-panel': '',
    'aria-hidden': i !== active,
  });
  const tab = (i: number) => (i === active ? 0 : -1);
  const labels = ['Professional Plumbing Services', ...STOP_SERVICES.map((s) => s.title)];
  const emergency = STOP_COUNT - 1;

  return (
    <section
      ref={sectionRef}
      className="tour dark relative z-10 text-white"
      data-tour
      style={{ height: `calc(${STOP_COUNT} * 100svh)` }}
      aria-labelledby="hero-title"
    >
      <div ref={stageRef} className="tour-stage" data-tour-stage>
        <div className="tour-scrim" />
        <div className="tour-panels">
          <div {...panel(0)}>
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 id="hero-title" className="max-[359px]:text-3xl text-4xl md:text-6xl font-bold text-white leading-tight motion-safe:animate-fade-up">
                  Professional Plumbing Services You Can <span className="text-shimmer">Trust</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed motion-safe:animate-fade-up [animation-delay:150ms]">
                  Expert plumbing solutions for your home and business. Available 24/7 for
                  emergency services with quick response times, anywhere in Lahore.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 motion-safe:animate-fade-up [animation-delay:300ms]">
                <Link href="/contact" tabIndex={tab(0)} className={primaryBtn}>
                  Book a Service
                </Link>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" tabIndex={tab(0)} className={outlineBtn}>
                  WhatsApp Us
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-2 md:pt-6 motion-safe:animate-fade-up [animation-delay:450ms]">
                <div className="text-center">
                  <div className="bg-blue-500/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">Open 24/7</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">{site.businessYears}+ Years in Business</p>
                </div>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" tabIndex={tab(0)} className="text-center group">
                  <div className="bg-blue-500/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">{site.googleRating} on Google</p>
                </a>
              </div>
            </div>
          </div>

          {STOP_SERVICES.map((s, k) => {
            const i = k + 1;
            const Icon = s.icon;
            return (
              <article key={s.title} {...panel(i)}>
                <div className="space-y-5">
                  <div className="bg-blue-500/15 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-400" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white">{s.title}</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">{s.description}</p>
                  <ul className="space-y-2">
                    {s.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2">
                    <Link href="/contact" tabIndex={tab(i)} className={primaryBtn}>
                      Book this service
                    </Link>
                    {i === emergency && (
                      <>
                        <a href={`tel:${site.phoneTel}`} tabIndex={tab(i)} className={`${outlineBtn} inline-flex items-center justify-center gap-2`}>
                          <Phone className="w-5 h-5" aria-hidden="true" />
                          {site.phoneDisplay}
                        </a>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" tabIndex={tab(i)} className={outlineBtn}>
                          WhatsApp Us
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <nav className="tour-rail text-blue-400" aria-label="Tour steps">
          {labels.map((label, i) => (
            <button key={label} type="button" aria-label={label} aria-current={i === active} onClick={() => tourRef.current?.goTo(i)} />
          ))}
        </nav>
      </div>
    </section>
  );
}
