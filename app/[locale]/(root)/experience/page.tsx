import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.experience");
  return { title: t("title"), description: t("metadata"), alternates: { canonical: `${siteConfig.url}/experience` } };
}

export default async function ExperiencePage() {
  const t = await getTranslations("pages.experience");
  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}
