import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  UNION_LOCALES
} from "./lib/constants";

const PUBLIC_FILE = /\.(.*)$/;

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip these paths from locale redirect
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Extract first segment of pathname
  const segments = pathname.split("/");
  const firstSegment = segments[1].toLowerCase(); // because split starts with '', e.g. "/ru/something" -> ['', 'ru', 'something']

  if (SUPPORTED_LOCALES.includes(firstSegment as UNION_LOCALES)) {
    // Path already starts with supported locale — continue as is
    return NextResponse.next();
  }

  // If first segment looks like a locale but unsupported (e.g. 'ru'), redirect to default locale root
  if (firstSegment && firstSegment.length === 2) {
    // Redirect to default locale + rest of path without the unsupported locale
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${
      pathname.slice(firstSegment.length + 1) || "/"
    }`;
    return NextResponse.redirect(url);
  }

  // No locale prefix, detect from browser
  const acceptLang = req.headers.get("accept-language");
  const preferredLang = acceptLang?.split(",")?.[0]?.split("-")?.[0];

  const locale = SUPPORTED_LOCALES.includes(preferredLang as UNION_LOCALES)
    ? preferredLang
    : DEFAULT_LOCALE;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}
