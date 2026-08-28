"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");
  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <Button variant="ghost" size="sm" className="h-8 gap-2 px-2" asChild>
      <Link href={pathname} locale={nextLocale} aria-label={t("switchLanguage")}>
        <Languages className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase">{nextLocale}</span>
      </Link>
    </Button>
  );
}
