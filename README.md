# Zubair Plumbing Services Website

A modern, professional, and responsive website for Zubair Plumbing Services built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with blue and white color scheme
- **Particle Animation**: Elegant shimmering particle effect on the hero section
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Multiple Pages**:
  - Homepage with hero section, services preview, and testimonials
  - Services page with detailed service listings
  - About Us page with company story and values
  - Contact page with form and map integration
- **Interactive Components**: Hover effects, smooth transitions, and animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Business Information

Update contact information in multiple locations:

**Footer Component** (`components/Footer.tsx`):
- Phone number
- Email address
- Physical address
- Social media links

**Contact Page** (`app/contact/page.tsx`):
- Phone number
- Email address
- Physical address
- Business hours
- Google Maps embed URL

### 2. Company Content

**Homepage** (`app/page.tsx`):
- Hero section text and imagery
- Services list (add/remove/modify services)
- Testimonials (edit customer reviews)
- Statistics and features

**About Page** (`app/about/page.tsx`):
- Company story
- Mission statement
- Values and principles
- Team information
- Statistics (years in business, clients served, etc.)

**Services Page** (`app/services/page.tsx`):
- Service descriptions
- Features for each service
- Add new services or remove existing ones

### 3. Images

Replace Pexels image URLs with your own images:

**Current Pexels Images Used**:
- Hero section: `https://images.pexels.com/photos/8486025/pexels-photo-8486025.jpeg`
- About section: `https://images.pexels.com/photos/4792486/pexels-photo-4792486.jpeg`
- Team/Company: `https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg`

To replace:
1. Add your images to `/public/images/` folder
2. Update the `src` attributes in the respective pages
3. Example: `src="/images/your-image.jpg"`

### 4. Colors and Branding

**Primary Colors** (defined in `tailwind.config.ts`):
- Blue: `#2563eb` (blue-600)
- Light Blue: `#dbeafe` (blue-50)
- White: `#ffffff`

To change colors:
1. Update Tailwind classes in components (e.g., `bg-blue-600` to `bg-green-600`)
2. Or customize in `tailwind.config.ts` for theme colors

**Logo**:
- Currently using Lucide React `Droplet` icon
- Replace in `components/Navbar.tsx` and `components/Footer.tsx`
- To use custom logo: Add image to `/public/` and use Next.js `Image` component

### 5. Services

**Adding a New Service**:

Edit `app/services/page.tsx` and add to the `services` array:

```typescript
{
  icon: YourIcon, // Import from lucide-react
  title: 'Service Name',
  description: 'Service description',
  features: [
    'Feature 1',
    'Feature 2',
    // Add more features
  ],
}
```

### 6. Testimonials

Edit the `testimonials` array in `app/page.tsx`:

```typescript
{
  name: 'Customer Name',
  role: 'Customer Title',
  content: 'Review text here',
  rating: 5, // 1-5 stars
}
```

### 7. Contact Form

The contact form currently shows a success message without sending data. To integrate with a backend:

**Option 1 - Email Service (Recommended)**:
- Use a service like [Resend](https://resend.com/), [SendGrid](https://sendgrid.com/), or [Mailgun](https://www.mailgun.com/)
- Create an API route in `app/api/contact/route.ts`
- Update the form submission in `app/contact/page.tsx`

**Option 2 - Database**:
- Use Supabase (already included in dependencies)
- Create a contacts table
- Store form submissions in the database

### 8. Google Maps

Update the map embed URL in `app/contact/page.tsx`:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace the `src` attribute in the iframe

### 9. Particle Animation

Customize the particle effect in `components/ParticleBackground.tsx`:

- **Particle count**: Change the divisor in line with `particleCount` calculation
- **Colors**: Update `rgba` values in the `drawParticle` function
- **Speed**: Modify `speedX` and `speedY` multipliers
- **Connection distance**: Change the `distance < 120` value

### 10. Metadata and SEO

Update in `app/layout.tsx`:
- Site title
- Meta description
- Keywords
- Open Graph images

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── about/
│   │   └── page.tsx          # About page
│   └── contact/
│       └── page.tsx          # Contact page
├── components/
│   ├── Navbar.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Hero section
│   ├── ServiceCard.tsx       # Service card component
│   ├── TestimonialCard.tsx   # Testimonial card component
│   └── ParticleBackground.tsx # Particle animation
├── public/                   # Static assets
└── tailwind.config.ts        # Tailwind configuration
```

## Technologies Used

- **Next.js 13**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: UI component library

## Performance Optimization

- Images are optimized and served from Pexels CDN
- Static page generation for fast loading
- CSS purging for minimal bundle size
- Lazy loading for images and components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Netlify (Recommended)
Already configured with `netlify.toml`. Just connect your repository to Netlify.

### Vercel
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the static site and deploy the `.next` folder.

## Support

For issues or questions about customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## License

This project is created for Zubair Plumbing Services. All rights reserved.

---

**Built with care for Zubair Plumbing Services**
