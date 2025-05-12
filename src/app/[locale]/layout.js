import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Head from "next/head";
import "@/app/globals.css";
import { LocaleProvider } from "@/context/LocaleContext";

export const metadata = {
  title: "Portfolio - Aníbal Sánchez Numa",
  description: "Personal website of Aníbal Sánchez Numa"
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="software, Cuban, Aníbal, Sánchez, Numa, developer, web, frontend, backend, fullstack, software developer, software engineer, frontend developer, backend developer,fullstack developer"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.anibalnuma.com/en"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.anibalnuma.com/es"
        />
      </Head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YJFQW7M4E5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YJFQW7M4E5', {
      page_path: window.location.pathname,
    });
  `}
        </Script>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
