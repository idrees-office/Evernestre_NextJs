// import { getRequestConfig } from 'next-intl/server';
// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale;
//   if (!locale) {
//     locale = 'en';
//   }
//   const normalizedLocale = locale.split('-')[0];
//   try {
//     let messages;
//     if (normalizedLocale === 'cz') {
//       messages = (await import(`../messages/cz.json`)).default;
//     } else if(normalizedLocale === 'ru') {
//       messages = (await import(`../messages/ru.json`)).default;
//     } else if(normalizedLocale === 'es') {
//       messages = (await import(`../messages/es.json`)).default;
//     }
//     else {
//       messages = (await import(`../messages/en.json`)).default;
//     }

//     return {
//       locale: normalizedLocale,
//       messages
//     };
//   } catch (error) {
//     const fallbackMessages = (await import(`../messages/en.json`)).default;
//     return {
//       locale: 'en',
//       messages: fallbackMessages
//     };
//   }
// });







// import { getRequestConfig } from 'next-intl/server';

// import en from '../messages/en.json';
// import cz from '../messages/cz.json';
// import ru from '../messages/ru.json';
// import es from '../messages/es.json';
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const messagesMap: Record<string, any> = {
//   en,
//   cz,
//   ru,
//   es
// };

// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = 'en';

//   try {
//     const resolved = await requestLocale;
//     if (typeof resolved === 'string') {
//       locale = resolved.split('-')[0];
//     }
//   } catch {
//     locale = 'en';
//   }

//   return {
//     locale,
//     messages: messagesMap[locale] ?? messagesMap.en
//   };
// });




import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';

// Define supported locales
const locales = ['en', 'cz', 'ru', 'es'] as const;
type Locale = typeof locales[number];

// Import messages statically
const messages = {
  en: () => import('../messages/en.json').then((m) => m.default),
  cz: () => import('../messages/cz.json').then((m) => m.default),
  ru: () => import('../messages/ru.json').then((m) => m.default),
  es: () => import('../messages/es.json').then((m) => m.default),
};

// Define locale mapping for fallbacks
const localeMapping: Record<string, Locale> = {
  en: 'en',
  cz: 'cz',
  ru: 'ru',
  es: 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'en-US': 'en',
  'en-GB': 'en',
  'en-AU': 'en',
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: Locale = 'en';

  try {
    const requested = await requestLocale;
    
    if (requested && typeof requested === 'string') {
      // Extract base locale (e.g., 'en' from 'en-US')
      const baseLocale = requested.split('-')[0].toLowerCase();
      
      // Check if it's a valid locale or map it
      if (hasLocale(locales, baseLocale)) {
        locale = baseLocale as Locale;
      } else if (localeMapping[baseLocale]) {
        locale = localeMapping[baseLocale];
      } else if (localeMapping[requested]) {
        locale = localeMapping[requested];
      }
    }
  } catch (error) {
    console.error('Error determining locale:', error);
    locale = 'en';
  }

  // Load messages for the determined locale
  try {
    const loadMessages = messages[locale] || messages.en;
    const messagesData = await loadMessages();
    
    return {
      locale,
      messages: messagesData,
      timeZone: 'Asia/Dubai'
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    
    // Fallback to English
    const fallbackMessages = await messages.en();
    return {
      locale: 'en',
      messages: fallbackMessages,
      timeZone: 'Asia/Dubai'
    };
  }
});





