import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "@/app/globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/constants";
import { headers } from "next/headers";

export const metadata = {
  title: "Portfolio - Aníbal Sánchez Numa",
  description:
    "Personal website of Aníbal Sánchez Numa. It contains my bio, skills, certifications, courses and projects."
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const correctLocale = SUPPORTED_LOCALES.includes(locale)
    ? locale
    : DEFAULT_LOCALE;

  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const pathname = headersList.get("x-next-url") || `/${correctLocale}`;

  const canonicalUrl = `${protocol}://${host}${pathname}`;

  return (
    <html lang={correctLocale}>
      <head>
        <meta
          name="keywords"
          content="software, Cuban, Aníbal, Sánchez, Numa, developer, web, frontend, backend, fullstack, software developer, software engineer, frontend developer, backend developer,fullstack developer"
        />
        <link rel="canonical" href={canonicalUrl} />

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
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.anibalnuma.com/fr"
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
