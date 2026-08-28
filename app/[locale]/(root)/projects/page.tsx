import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { Projects } from "@/config/projects";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.projects");
  return { title: t("title"), description: t("metadata") };
}

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  } else if (tabVal === "professional") {
    projectArr = projectArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static items-stretch">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default async function ProjectsPage() {
  const t = await getTranslations("pages.projects");
  const common = await getTranslations("common");
  const tabItems = [
    {
      value: "all",
      label: common("all"),
      content: renderContent("all"),
    },
    {
      value: "personal",
      label: common("personal"),
      content: renderContent("personal"),
    },
    {
      value: "professional",
      label: common("professional"),
      content: renderContent("professional"),
    },
  ];

  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <ResponsiveTabs items={tabItems}  defaultValue="all" />
    </PageContainer>
  );
}
