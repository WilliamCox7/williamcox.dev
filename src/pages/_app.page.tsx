import '@pages/_app.style.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {

  if (!process.env.GA_ID) return <Component {...pageProps} />
  
  const GA1 = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`;
  const GA2 = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${process.env.GA_ID});
  `;

  return (
    <>
      <Script async src={GA1} />
      <Script id="ga2">{GA2}</Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
