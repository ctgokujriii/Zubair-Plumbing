import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingContactMenuClient from '../components/FloatingContactMenu'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zubair Plumbing Services - Professional Plumbing Solutions',
  description:
    'Expert plumbing services for residential and commercial properties. Available 24/7 for emergency repairs. Licensed, insured, and trusted since 2009.',
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
        <FloatingContactMenuClient />
      </body>
    </html>
  );
}
