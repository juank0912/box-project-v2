import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

// import { Toaster } from 'react-hot-toast';

// const momo = localFont({
//   src: 'fonts/Momo_Trust_Display/MomoTrustDisplay-Regular.ttf',
//   weight: '400',
//   style: 'normal',
// });
const BebasNeue = localFont({
  src: 'fonts/Bebas_Neue/BebasNeue-Regular.ttf',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'My-Box',
  description: 'A modern Box web page app with Next.js 15',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${BebasNeue.className}`}>
      <body className={`pt-20 antialiased`}>
        {/* <Toaster position='top-right' /> */}
        {children}
      </body>
    </html>
  );
}
