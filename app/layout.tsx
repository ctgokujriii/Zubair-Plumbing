import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingContactMenu from '@/components/FloatingContactMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zubair Plumbing Services - Professional Plumbing Solutions',
  description:
    'Expert plumbing services for residential and commercial properties. Available 24/7 for emergency repairs. Licensed, insured, and trusted since 2009.',
  keywords: [
    'plumbing',
    'plumber',
    'leak repair',
    'pipe installation',
    'emergency plumbing',
    '24/7 plumber',
  ],
  openGraph: {
    title: 'Zubair Plumbing Services',
    description: 'Professional plumbing solutions you can trust',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zubair Plumbing Services',
    description: 'Professional plumbing solutions you can trust',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <FloatingContactMenu />
      </body>
    </html>
  );
}
