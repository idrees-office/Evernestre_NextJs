import { Inter } from 'next/font/google';

// Since San Francisco Pro is a premium font, you'll need to purchase and host it
// For now, using Inter as a fallback with similar characteristics
export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

// If you purchase San Francisco Pro, use this approach:
// export const sfProDisplay = localFont({
//   src: [
//     {
//       path: './SF-Pro-Display-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './SF-Pro-Display-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './SF-Pro-Display-Semibold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-sf-pro',
// });