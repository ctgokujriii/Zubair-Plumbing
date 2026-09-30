import type { Metadata } from 'next';
import { site } from './site';

// Next replaces a parent's openGraph object wholesale rather than merging it, so
// a page that set only a title would lose the site name and locale, and the
// share card from app/opengraph-image too (Services, About and Contact went
// out with no image until the card was named here). Every page goes through
// this to get the full set, plus its own canonical URL.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: 'en_PK',
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${site.name}: plumber in Lahore, open 24/7` }],
    },
  };
}
