import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingContactMenu from '@/components/FloatingContactMenu';
import ParticleBackground from '@/components/ParticleBackground';
import { site } from '@/lib/site';
import { themeScript } from '@/lib/theme';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const description = `Family-run plumbing service in Lahore for ${site.businessYears}+ years. Leak repair, pipe and sanitary fitting, water tanks, motors, geysers, drains and minor construction. Open 24/7. Call or WhatsApp ${site.phoneDisplay}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Plumber in Lahore, Open 24/7`,
    template: `%s | ${site.name}`,
  },
  description,
  // No canonical here: children inherit it, and a page that forgot to set its
  // own would tell Google it's a duplicate of the home page. Each page sets one.
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | Plumber in Lahore, Open 24/7`,
    description,
    locale: 'en_PK',
  },
  twitter: { card: 'summary_large_image' },
};

// Tells Google the site belongs to the business on the map listing, so the two
// are treated as one entity. No aggregateRating: Google ignores self-reported
// ratings for local businesses and can treat them as spam.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: site.name,
  url: site.url,
  image: `${site.url}/zubair.webp`,
  telephone: site.phoneTel,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.street}`,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: { '@type': 'City', name: 'Lahore' },
  hasMap: site.mapsUrl,
  sameAs: Object.values(site.social),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: themeScript adds the "dark" class before React
    // loads, so <html> legitimately differs from what the server sent.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {/* Layering: the particle canvas is fixed at z-index 1, which paints it
            over every section's background (so the blue bands and the footer
            get particles too) but under anything at z-10. Every section's
            content wrapper is `relative z-10`, which keeps text, cards and
            photos above the particles. A new section needs the same, or its
            content ends up underneath. */}
        <ParticleBackground />
        {children}
        <FloatingContactMenu />
      </body>
    </html>
  );
}
