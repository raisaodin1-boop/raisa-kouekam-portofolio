import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "@/i18n/config";
import { parseAcceptLanguage } from "@/lib/locale";

function getLocale(request: NextRequest): string {
  const cookie = request.cookies.get("locale")?.value;
  if (cookie && locales.includes(cookie as (typeof locales)[number])) {
    return cookie;
  }

  return parseAcceptLanguage(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
