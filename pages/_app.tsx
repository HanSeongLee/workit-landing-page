import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google';
import localFont from '@next/font/local';

const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const fraunces = localFont({
    src: '../public/fonts/Fraunces_144pt-SemiBold.ttf'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>{`
            :root {
              --manrope-font: ${manrope.style.fontFamily};
              --fraunces-font: ${fraunces.style.fontFamily};
            }
        `}</style>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
