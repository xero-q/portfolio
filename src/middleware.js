import { NextResponse } from "next/server";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/en`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
