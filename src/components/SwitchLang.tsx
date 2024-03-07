"use client";

import { locales } from "@/config/locale";
import { usePathname, useRouter } from "@/lib/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ChangeEvent } from "react";

interface ISwitchLang {}

export default function SwitchLang({}: ISwitchLang) {
  const t = useTranslations("SwitchLang");
  const router = useRouter();
  const pathname = usePathname();
  const local = useLocale();
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.push(pathname, { locale: nextLocale });
  }

  return (
    <select
      onChange={onSelectChange}
      defaultValue={local}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {locales?.map((item) => (
        <option value={item} key={item}>
          {t("locale", { locale: item })}
        </option>
      ))}
    </select>
  );
}
