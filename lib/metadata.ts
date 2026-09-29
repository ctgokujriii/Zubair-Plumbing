import type { Metadata } from 'next';
import { site } from './site';

// Next replaces a parent's openGraph object wholesale rather than merging it, so
// a page that set only a title would lose the site name and locale. Every page
// goes through this to get the full set, plus its own canonical URL.
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
    },
  };
}
