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

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale) {
    locale = 'en';
  }
  
  const normalizedLocale = locale.split('-')[0];
  
  let messages;
  
  try {
    // Use a switch statement instead of dynamic template literals
    switch (normalizedLocale) {
      case 'cz':
        messages = (await import('../messages/cz.json')).default;
        break;
      case 'ru':
        messages = (await import('../messages/ru.json')).default;
        break;
      case 'es':
        messages = (await import('../messages/es.json')).default;
        break;
      default:
        messages = (await import('../messages/en.json')).default;
        break;
    }
  } catch (error) {
    console.error('Error loading messages:', error);
    messages = (await import('../messages/en.json')).default;
    locale = 'en';
  }

  return {
    locale: normalizedLocale,
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



