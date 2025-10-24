import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from './includes/header'; 
import Footer from './includes/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Premium Realty',
  description: 'Luxury properties and off-plan investments in prime locations.',
};

export const viewport: Viewport = {
  themeColor: '#d0845b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh bg-[#faf8f6] antialiased">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}