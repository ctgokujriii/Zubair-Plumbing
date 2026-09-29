// Every business fact the site states lives here, once. The pages used to carry
// their own copies, and they drifted into contradicting each other (15, 20 and
// "since 2009" years of experience on different pages). Change a fact here and
// it changes everywhere.

export const site = {
  name: 'Zubair Plumbing Services',
  // The live domain. zubairplumbing.vercel.app serves the same pages; this is
  // the one search engines are told is canonical.
  url: 'https://www.zplumbings.online',

  // The family story: Zubair's father has run the business for more than 20
  // years and named it after him; Zubair started working at 15 and is now 28.
  businessYears: 20,
  zubairAge: 28,
  zubairStartAge: 15,

  phoneDisplay: '0312-4740940',
  phoneTel: '+923124740940',
  whatsapp: '923124740940',
  email: 'za107112@gmail.com',

  address: {
    line1: 'Hazir & Sons Sanitary Store',
    street: '196-A, Scheme Mor, Multan Road, Sabzazar',
    city: 'Lahore',
    postalCode: '54500',
    region: 'Punjab',
    country: 'PK',
  },
  geo: { lat: 31.5267496, lng: 74.2837639 },
  mapsUrl:
    'https://www.google.com/maps/place/Zubair+Plumbing+Services/@31.5254088,74.2804172,16.89z/data=!4m10!1m2!2m1!1s196-A+Scheme+Mor+Multan+Rd+Sabzazar+Lahore!3m6!1s0x39190393440bbb89:0x132835ac0809e347!8m2!3d31.5267496!4d74.2837639!15sCiwxOTYtQSBTY2hlbWUgTW9yIE11bHRhbiBSb2FkIFNhYnphemFyIExhaG9yZVouIiwxOTYgYSBzY2hlbWUgbW9yIG11bHRhbiByb2FkIHNhYnphemFyIGxhaG9yZZIBB3BsdW1iZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjZjamxxYlVobkVBReABAPoBBAgAEBI!16s%2Fg%2F11r2gwqqwf?entry=ttu',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.905543148459!2d74.28118897442545!3d31.526754146828793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190393440bbb89%3A0x132835ac0809e347!2sZubair%20Plumbing%20Services!5e0!3m2!1sen!2s!4v1769466424986!5m2!1sen!2s',

  // From the Google Business listing on 2026-09-29. These drift as reviews come
  // in, so check the listing and update both numbers together.
  googleRating: 4.9,
  googleReviewCount: 299,

  social: {
    facebook: 'https://web.facebook.com/zubair.ali.798760/',
    tiktok: 'https://www.tiktok.com/@zubairali074',
    youtube: 'https://www.youtube.com/@zubairali3279',
  },
} as const;

export const zubairYears = site.zubairAge - site.zubairStartAge;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const fullAddress = `${site.address.line1}, ${site.address.street}, ${site.address.city} ${site.address.postalCode}`;
