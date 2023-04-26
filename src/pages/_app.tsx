import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Montserrat} from 'next/font/google';
import {appWithTranslation} from 'next-i18next';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

const App = ({Component, pageProps}: AppProps) => {
  return (
    <main
      className={`${montserrat.variable} font-mont font-sans bg-light w-full min-h-screen`}>
      <Component {...pageProps} />
    </main>
  );
};

export default appWithTranslation(App);
