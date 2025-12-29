import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "flag-icons/css/flag-icons.min.css";
import Header from '../components/header';
import Footer from '../components/footer';

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!['en', 'cz', 'ru','es'].includes(locale)) { notFound(); }

  let messages;
  try {
    messages = await getMessages();

  } catch (error) {
    console.error('Error loading messages:', error);
    // Use fallback messages
    messages = {
      home: {
        title: 'Welcome to Evernest',
        description: 'Real Estate in Dubai'
      }
    };
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
        <main className="pt-24">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}