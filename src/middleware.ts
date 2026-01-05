// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   locales: ['en', 'cz', 'ru', 'es'],
//   defaultLocale: 'en'
// });

// export const config = {
//   matcher: ['/((?!api|_next|_vercel|assets|favicon.ico|robots.txt).*)']
// };


import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'cz', 'ru', 'es'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Optional: locale detection settings
  localeDetection: true,
  
  // Optional: locale prefix
  localePrefix: 'always', // Always use a locale prefix (e.g., /en/about)
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - static files
    // - favicon
    // - images
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
