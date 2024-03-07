import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./config/locale";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: localePrefix,
  localeDetection: false,
  pathnames: pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
