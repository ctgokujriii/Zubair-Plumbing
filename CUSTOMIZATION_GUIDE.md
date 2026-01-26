# Zubair Plumbing Website - Detailed Customization Guide

This guide will help you personalize every aspect of your website.

## Table of Contents
1. [Quick Start Checklist](#quick-start-checklist)
2. [Branding and Logo](#branding-and-logo)
3. [Contact Information](#contact-information)
4. [Content Customization](#content-customization)
5. [Images and Media](#images-and-media)
6. [Colors and Styling](#colors-and-styling)
7. [Form Integration](#form-integration)
8. [Advanced Customization](#advanced-customization)

---

## Quick Start Checklist

Essential changes to make the website yours:

- [ ] Update company name throughout the site
- [ ] Change phone numbers (search for "555" and replace)
- [ ] Update email addresses
- [ ] Change physical address
- [ ] Replace placeholder images
- [ ] Update Google Maps location
- [ ] Customize services list
- [ ] Add real testimonials
- [ ] Update business hours
- [ ] Configure contact form

---

## Branding and Logo

### Replace the Icon Logo

**Current**: Using Lucide React's Droplet icon

**To use your own logo image**:

1. Add your logo to `/public/logo.png`
2. Update `components/Navbar.tsx`:

```tsx
// Replace this:
<div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
  <Droplet className="w-6 h-6 text-white" />
</div>

// With this:
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Zubair Plumbing Logo"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

3. Do the same in `components/Footer.tsx`

### Change Company Name

Search and replace "Zubair Plumbing" with your company name in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)
- All page files

---

## Contact Information

### Phone Numbers

**Files to update**:
1. `components/Navbar.tsx` - Line with Book a Service button link
2. `components/Footer.tsx` - Contact info section
3. `app/page.tsx` - Multiple locations (hero, CTA sections)
4. `app/contact/page.tsx` - Contact information and emergency section
5. `app/services/page.tsx` - CTA section
6. `app/about/page.tsx` - CTA section

**Search for**: `(555) 123-4567` or `tel:5551234567`

### Email Address

**Files to update**:
1. `components/Footer.tsx`
2. `app/contact/page.tsx`

**Search for**: `info@zubairplumbing.com`

### Physical Address

**Files to update**:
1. `components/Footer.tsx`
2. `app/contact/page.tsx`

**Current placeholder**: "123 Main Street, City, State"

### Business Hours

**Update in**: `app/contact/page.tsx`

Find the business hours section and modify:

```tsx
<div className="text-gray-600 space-y-1">
  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
  <p>Saturday: 9:00 AM - 4:00 PM</p>
  <p>Sunday: Emergency Service Only</p>
  <p className="text-blue-600 font-semibold mt-2">24/7 Emergency Service</p>
</div>
```

---

## Content Customization

### Homepage Hero Section

**File**: `components/Hero.tsx`

**Main headline**:
```tsx
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
  Professional Plumbing Services You Can{' '}
  <span className="text-blue-600">Trust</span>
</h1>
```

**Subheadline**:
```tsx
<p className="text-xl text-gray-600 leading-relaxed">
  Expert plumbing solutions for your home and business...
</p>
```

**Statistics** (15+ Years, etc.):
```tsx
<div className="grid grid-cols-3 gap-6 pt-6">
  {/* Update the text in each section */}
</div>
```

### Services

**File**: `app/services/page.tsx`

**Add a new service**:

```tsx
{
  icon: YourIconName, // Choose from lucide-react
  title: 'Your Service Name',
  description: 'Description of your service',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5',
    'Feature 6',
  ],
}
```

**Available icons** from lucide-react:
- Wrench, Droplets, Zap, ShowerHead
- Hammer, Thermometer, Settings, Home
- [View all icons](https://lucide.dev/)

### Testimonials

**File**: `app/page.tsx`

Find the `testimonials` array and modify:

```tsx
const testimonials = [
  {
    name: 'Customer Name',
    role: 'Homeowner / Business Owner / etc.',
    content: 'Full testimonial text here. Keep it authentic and specific.',
    rating: 5, // Number from 1-5
  },
  // Add more testimonials
];
```

### About Page

**File**: `app/about/page.tsx`

**Company story**: Update the paragraphs in the "Our Story" section
**Mission**: Update the mission statement text
**Values**: Modify the values array with your company values
**Statistics**: Update the stats array (years, clients, etc.)

---

## Images and Media

### Current Images (Pexels)

Replace these with your own professional photos:

1. **Hero image** (`components/Hero.tsx`):
   - Current: Professional plumber at work
   - Recommended: Your team member in action

2. **About page** (`app/about/page.tsx`):
   - Current: Team working
   - Recommended: Your actual team photo

3. **Homepage "Why Choose Us"** (`app/page.tsx`):
   - Current: Plumbing work
   - Recommended: Showcase your quality work

### How to Add Your Own Images

**Option 1: Using local images**

1. Create `/public/images/` folder
2. Add your images: `hero.jpg`, `team.jpg`, etc.
3. Update image sources:

```tsx
// Change from:
src="https://images.pexels.com/photos/..."

// To:
src="/images/hero.jpg"
```

**Option 2: Using Next.js Image component** (Recommended)

```tsx
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-2xl shadow-xl"
/>
```

### Image Guidelines

- **Format**: JPG for photos, PNG for logos
- **Size**: Maximum 2MB per image
- **Dimensions**:
  - Hero: 1200x800px
  - Thumbnails: 400x300px
  - Logo: 200x200px
- **Optimization**: Use [TinyPNG](https://tinypng.com/) to compress

---

## Colors and Styling

### Primary Color Scheme

**Current colors**:
- Primary Blue: `#2563eb` (blue-600)
- Light Blue: `#dbeafe` (blue-50)
- Dark: `#1e40af` (blue-700)

### Change Colors Globally

**Method 1: Find and Replace**

Search for `blue-600` and replace with your color:
- `green-600` for green
- `red-600` for red
- `purple-600` for purple
- `orange-600` for orange

**Method 2: Customize Tailwind Config**

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-light-color',
        600: '#your-main-color',
        700: '#your-dark-color',
      }
    }
  }
}
```

Then replace `blue-600` with `primary-600` throughout.

### Font Changes

**Current font**: Inter (Google Fonts)

To change font, edit `app/layout.tsx`:

```typescript
import { Roboto } from 'next/font/google'; // or any Google font

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});
```

### Shadow and Rounded Corners

Find and adjust:
- `shadow-md` → `shadow-lg` (larger shadow)
- `rounded-lg` → `rounded-xl` (more rounded)
- `rounded-2xl` → `rounded-3xl` (even more rounded)

---

## Form Integration

### Option 1: Email Service (SendGrid, Resend)

**Install Resend**:
```bash
npm install resend
```

**Create API route** (`app/api/contact/route.ts`):

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

**Update form submission** in `app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  }

  setIsSubmitting(false);
};
```

### Option 2: Supabase Database

**Create table**:
```sql
create table contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text,
  created_at timestamptz default now()
);
```

**Update form** to save to Supabase (see Supabase docs for implementation).

---

## Advanced Customization

### Particle Animation Settings

**File**: `components/ParticleBackground.tsx`

**Adjust particle count**:
```typescript
// Line with particleCount - change 15000 to increase/decrease
const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
```

**Change particle color**:
```typescript
// Find these lines and change rgba values
ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`; // Main color
gradient.addColorStop(0, `rgba(147, 197, 253, ${particle.opacity * 0.5})`); // Glow
```

**Adjust speed**:
```typescript
// In createParticle function
speedX: (Math.random() - 0.5) * 0.5, // Increase 0.5 for faster
speedY: (Math.random() - 0.5) * 0.5, // Increase 0.5 for faster
```

**Connection lines distance**:
```typescript
// In connectParticles function
if (distance < 120) // Increase for more connections
```

### Add Social Media Links

**File**: `components/Footer.tsx`

Update the social media links section:

```tsx
<a href="https://facebook.com/yourpage" className="...">
  <Facebook className="w-5 h-5" />
</a>
<a href="https://twitter.com/yourhandle" className="...">
  <Twitter className="w-5 h-5" />
</a>
<a href="https://instagram.com/yourhandle" className="...">
  <Instagram className="w-5 h-5" />
</a>
```

### Add More Pages

Create a new page:

1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Add to navigation in `components/Navbar.tsx`

---

## Google Maps Integration

### Update Map Location

**File**: `app/contact/page.tsx`

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" button
4. Select "Embed a map"
5. Copy the iframe src URL
6. Replace the URL in the iframe element

**Example**:
```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

---

## Testing Checklist

After customization, test:

- [ ] All links work correctly
- [ ] Phone numbers are clickable and correct
- [ ] Email addresses are correct
- [ ] Contact form submits successfully
- [ ] Images load properly
- [ ] Map shows correct location
- [ ] Responsive on mobile devices
- [ ] All pages load without errors

---

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons Library](https://lucide.dev/)
- [Resend Email API](https://resend.com/docs)

---

**Happy customizing!**
