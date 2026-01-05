// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   locales: ['en', 'cs', 'ru', 'es'],
//   defaultLocale: 'en'
// });

// export const config = {

  
//   matcher: ['/((?!api|_next|_vercel|assets|favicon.ico|robots.txt).*)']
// };

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'cs', 'ru', 'es'],
  defaultLocale: 'en'
});

export const config = {

   matcher: [
    '/',
    '/(en|cs|ru|es)/:path*',
    '/((?!api|_next|_next/image|_vercel|assets|favicon.ico|robots.txt|sw.js|sitemap.xml|manifest.json).*)'
  ]

  // matcher: ['/((?!api|_next|_vercel|assets|favicon.ico|robots.txt).*)']
};
