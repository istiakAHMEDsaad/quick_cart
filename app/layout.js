import { ClerkProvider } from '@clerk/nextjs';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AppContextProvider } from '@/context/AppContext';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata = {
  title: 'QuickShop',
  description:
    'Simple E-Commerce web application made by NextJS, which is practice project of course, tutorial by GreatStack',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
