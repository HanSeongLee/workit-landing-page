import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Fraunces, Manrope } from '@next/font/google';

const manrope = Manrope({
  weight: ['400'],
  subsets: ['latin'],
});

const fraunces = Fraunces({
    weight: ['600'],
    subsets: ['latin'],
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
