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



import { getRequestConfig } from 'next-intl/server';

// Import all message files statically
import enMessages from '../messages/en.json';
import czMessages from '../messages/cz.json';
import ruMessages from '../messages/ru.json';
import esMessages from '../messages/es.json';

// Define the type for valid locale keys
type Locale = 'en' | 'cz' | 'ru' | 'es';

// Define the message structure type (optional, but helpful for type safety)
type Messages = typeof enMessages;

// Create a typed messages map
const messagesMap: Record<Locale, Messages> = {
  en: enMessages,
  cz: czMessages,
  ru: ruMessages,
  es: esMessages
};

// Array of valid locales for type checking
const validLocales: Locale[] = ['en', 'cz', 'ru', 'es'];

export default getRequestConfig(async ({ locale }) => {
  // Use the locale directly (not requestLocale)
  const normalizedLocale = (locale?.split('-')[0] || 'en') as Locale;
  
  // Check if locale is valid, fallback to 'en' if not
  const validLocale: Locale = validLocales.includes(normalizedLocale) 
    ? normalizedLocale 
    : 'en';
  
  // Get messages from the static map
  const messages = messagesMap[validLocale];
  
  return {
    locale: validLocale,
    messages
  };

});




// import { getRequestConfig } from 'next-intl/server';

// export default getRequestConfig(async ({ locale }) => {
//   const resolvedLocale = locale ?? 'en';
//   const normalizedLocale = resolvedLocale.split('-')[0];

//   try {
//     let messages;

//     if (normalizedLocale === 'cz') {
//       messages = (await import('../messages/cz.json')).default;
//     } else if (normalizedLocale === 'ru') {
//       messages = (await import('../messages/ru.json')).default;
//     } else if (normalizedLocale === 'es') {
//       messages = (await import('../messages/es.json')).default;
//     } else {
//       messages = (await import('../messages/en.json')).default;
//     }

//     return {
//       locale: normalizedLocale,
//       messages
//     };
//   } catch (error) {
//     return {
//       locale: 'en',
//       messages: (await import('../messages/en.json')).default
//     };
//   }
// });



