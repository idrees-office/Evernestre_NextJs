import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "flag-icons/css/flag-icons.min.css";
import Header from '../components/header';
import Footer from '../components/footer';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: 'Evernest Real Estate',
  description: 'Luxury Real Estate in Dubai',
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!['en', 'cz', 'ru', 'es'].includes(locale)) { 
    notFound(); 
  }

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error('Error loading messages:', error);
    // Use fallback messages
    messages = {};
  }

  return (
    <html lang={locale} className={inter.variable}>
      <body suppressHydrationWarning className="min-h-dvh bg-[#faf8f6] antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="pt-24">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}