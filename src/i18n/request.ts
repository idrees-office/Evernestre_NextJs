// import { getRequestConfig } from 'next-intl/server';
// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale;
//   if (!locale) {
//     locale = 'en';
//   }
//   const normalizedLocale = locale.split('-')[0];
//   try {
//     let messages;
//     if (normalizedLocale === 'cs') {
//       messages = (await import(`../messages/cs.json`)).default;
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

import en from '../messages/en.json';
import cs from '../messages/cs.json';
import ru from '../messages/ru.json';
import es from '../messages/es.json';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messagesMap: Record<string, any> = {
  en,
  cs,
  ru,
  es
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = 'en';

  try {
    const resolved = await requestLocale;
    if (typeof resolved === 'string') {
      locale = resolved.split('-')[0];
    }
  } catch {
    locale = 'en';
  }

  return {
    locale,
    messages: messagesMap[locale] ?? messagesMap.en
  };
});





