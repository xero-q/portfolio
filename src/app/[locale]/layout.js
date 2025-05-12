import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "@/app/globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/constants";

export const metadata = {
  title: "Portfolio - Aníbal Sánchez Numa",
  description: "Personal website of Aníbal Sánchez Numa"
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const correctLocale = SUPPORTED_LOCALES.includes(locale)
    ? locale
    : DEFAULT_LOCALE;

  return (
    <html lang={correctLocale}>
      <head>
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
      </head>
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
        <LocaleProvider locale={correctLocale}>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
