import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("common");
  const projectT = useTranslations("projects");
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {projectT(`items.${project.id}.shortDescription`)}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category.map((category) => projectT(`categories.${category}`))} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            {t("readMore")}
            <Icons.chevronRight className="w-4 ms-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
