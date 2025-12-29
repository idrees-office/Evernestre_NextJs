import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Evernest Real Estate',
  description: 'Luxury Real Estate in Dubai',
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning className="min-h-dvh bg-[#faf8f6] antialiased">
        {children}
      </body>
    </html>
  );
}