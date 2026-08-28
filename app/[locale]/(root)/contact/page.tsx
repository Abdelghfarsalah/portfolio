import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.contact");
  return { title: t("title"), description: t("metadata") };
}

export default async function ContactPage() {
  const t = await getTranslations("pages.contact");
  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-end">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
