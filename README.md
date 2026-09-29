# Zubair Plumbing Services

Website for Zubair Plumbing Services, a family-run plumbing business in Sabzazar,
Lahore. Live at **https://www.zplumbings.online** (also served at
zubairplumbing.vercel.app, which points search engines at the main domain).

Next.js 16 (App Router), TypeScript, Tailwind CSS 3. Deployed on Vercel from `main`.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, also what Vercel runs
npm run lint
npm run typecheck
```

Node 20.9 or newer.

## Where things live

| To change | Edit |
| --- | --- |
| Phone, WhatsApp, email, address, years in business, Zubair's age, Google rating, social links, domain | `lib/site.ts` |
| Services (services page, home page cards, contact form dropdown) | `lib/services.ts` |
| Which services get full cards on the home page | `featuredServiceTitles` in `lib/services.ts` |
| Reviews on the home page | `testimonials` in `app/page.tsx` |
| Areas in the contact form | `lahoreAreas` in `components/ContactForm.tsx` |
| Page titles and descriptions for Google | `metadata` at the top of each `app/**/page.tsx` |

`lib/site.ts` is the single source for every business fact. The pages used to keep
their own copies and ended up contradicting each other, so don't hard-code a number
or phone number in a page; add it to `site` instead.

The Google rating and review count in `lib/site.ts` are a snapshot. Update them from
the Google Business listing now and then.

## How the contact form works

There is no backend. The form builds a WhatsApp message and opens
`wa.me/923124740940` with it; the customer presses Send in WhatsApp. Nothing is sent
until they do.

## Effects and dark mode

The look is modelled on [taiohub.com](https://taiohub.com), built without its
animation libraries (framer-motion, tsParticles) to keep the site light.

- **Particle network** (`components/ParticleBackground.tsx`): one fixed,
  screen-sized canvas behind every page, mounted in `app/layout.tsx`. Its cost
  depends on the screen size, not the page length.
- **Layering rule:** the canvas sits at `z-index: 1`, above section backgrounds
  but below content. Every section's content wrapper is `relative z-10`. **A new
  section needs the same, or its content ends up underneath the particles.**
- **Hero:** fade-up entrance, pulsing glow behind the photo, light sweep across
  "Trust". The keyframes are in `tailwind.config.ts`; the sweep (`.text-shimmer`)
  is in `app/globals.css`.
- **Scroll reveals:** wrap content in `<Reveal>`. Only content below the fold when
  the page loads is hidden, so nothing flashes and nothing stays hidden without
  JavaScript.
- Everything above is switched off for visitors whose phone asks for reduced
  motion.
- **Dark mode:** the sun/moon button in the navigation bar. It follows the phone's
  setting until a visitor chooses, then remembers the choice. A script in `<head>`
  (`lib/theme.ts`) applies it before the first paint, so there's no white flash. The
  palette is taiohub's (slate-900 page, slate-100 text). Any new colour class needs a
  `dark:` partner.

## Generated at build time

- `app/icon.svg`: browser tab icon
- `app/apple-icon.tsx`: iPhone home-screen icon
- `app/opengraph-image.tsx`: the preview card shown when the link is shared on
  WhatsApp or Facebook
- `app/robots.ts`, `app/sitemap.ts`: for search engines
- Structured business data for Google (`Plumber` schema) in `app/layout.tsx`

## Images

- `public/zubair.webp`: the photo of Zubair used on the home and about pages
- The "Why Choose Us" photo is hotlinked from Pexels at a resized width. Hotlinked
  images can disappear: the previous home page photo was deleted from Pexels and
  left a hole in the page. Prefer putting real photos of Zubair's work in `public/`.

---

Made by the TAIO Hub team.
