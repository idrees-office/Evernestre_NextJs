import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'cz', 'ru', 'es'],
  defaultLocale: 'en'
});

export const config = {

  // matcher: ['/((?!api|_next|_vercel).*)']
  matcher: ['/((?!api|_next|_vercel|assets|favicon.ico|robots.txt).*)']
};
