"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ResumePage() {
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
  }, []);
  const t = useTranslations("pages.resume");
  return <div>{t("title")}</div>;
}
