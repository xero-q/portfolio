import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Aníbal Sánchez Numa",
  description: "Personal website of Aníbal Sánchez Numa"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

        {children}
        <Analytics />
      </body>
    </html>
  );
}
