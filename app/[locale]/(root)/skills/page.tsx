import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { skills } from "@/config/skills";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.skills");
  return { title: t("title"), description: t("metadata") };
}

export default async function SkillsPage() {
  const t = await getTranslations("pages.skills");
  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}
