import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="p-6">
      <div className="flex gap-3 flex-col items-center justify-center h-[400px] shadow-md rounded-lg p-5">
        <h1 className="text-5xl font-bold">{t("fullName")}</h1>
        <h1 className="text-3xl font-mono">{t("welcome")}</h1>
      </div>
    </div>
  );
}
