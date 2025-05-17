import { NextResponse } from "next/server";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "./lib/constants";

const PUBLIC_FILE = /\.(.*)$/;

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api") ||
    SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return;
  }

  // Get browser language
  const acceptLang = req.headers.get("accept-language");
  const preferredLang = acceptLang?.split(",")?.[0]?.split("-")?.[0];

  const locale = SUPPORTED_LOCALES.includes(preferredLang || "")
    ? preferredLang
    : DEFAULT_LOCALE;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}
