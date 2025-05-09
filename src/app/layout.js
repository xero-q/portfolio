import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Aníbal Sánchez Numa",
  description: "Personal website of Aníbal Sánchez Numa"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
