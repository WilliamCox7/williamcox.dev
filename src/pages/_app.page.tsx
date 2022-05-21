import '@pages/_app.style.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  
  const GA1 = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

  const GA2 = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `;
  
  return (
    <>
      <Script strategy="afterInteractive" src={GA1} />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: GA2 }}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
