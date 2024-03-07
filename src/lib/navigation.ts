import { localePrefix, locales } from "@/config/locale";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: locales,
    localePrefix: localePrefix,
  });
