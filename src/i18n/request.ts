// // import { getRequestConfig } from 'next-intl/server';

// // export default getRequestConfig(async ({ locale }) => {
// //   console.log('🔥 locale received in request.ts =', locale);

// //   const resolvedLocale = locale ?? 'en';

// //   return {
// //     locale: resolvedLocale,
// //     messages: (await import(`../messages/${resolvedLocale}.json`)).default
// //   };
// // });

import { getRequestConfig } from 'next-intl/server';
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale) {
    locale = 'en';
  }
  const normalizedLocale = locale.split('-')[0];
  try {
    let messages;
    if (normalizedLocale === 'cz') {
      messages = (await import(`../messages/cz.json`)).default;
    } else if(normalizedLocale === 'ru') {
      messages = (await import(`../messages/ru.json`)).default;
    } else if(normalizedLocale === 'es') {
      messages = (await import(`../messages/es.json`)).default;
    }
    else {
      messages = (await import(`../messages/en.json`)).default;
    }

    return {
      locale: normalizedLocale,
      messages
    };
  } catch (error) {
    const fallbackMessages = (await import(`../messages/en.json`)).default;
    return {
      locale: 'en',
      messages: fallbackMessages
    };
  }
});


