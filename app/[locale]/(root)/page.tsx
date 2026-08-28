import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";
import BlurText from "@/components/BlurText";
 import TextType from "@/components/TextType";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  return { title: t("title"), description: t("metadataDescription"), alternates: { canonical: siteConfig.url } };
}

export default async function IndexPage() {
  const t = await getTranslations("home");
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Applied Frontend Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="flex items-center pt-16 md:pt-24 lg:pt-32">
        <div className="w-full">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-24 lg:gap-32">
            {/* Content */}
            <div className="flex max-w-2xl flex-1 flex-col items-center text-center md:min-w-0 md:items-start md:text-start">
              <AnimatedText
                as="h1"
                delay={0.2}
                className="font-heading text-4xl font-bold sm:text-5xl "
              >
                <TextType 
                  text={[siteConfig.authorName]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={50}
                  cursorBlinkDuration={0.5}
                  variableSpeed={undefined}
                  onSentenceComplete={undefined}
                />
                
               </AnimatedText>

              <AnimatedText
                as="h3"
                delay={0.4}
                className="mt-3 font-heading text-lg text-muted-foreground sm:text-xl md:text-2xl"
              >
                <BlurText
                  text={t("subtitle")}
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="mt-3 font-heading text-lg text-muted-foreground sm:text-xl md:text-2xl" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}/>
             
              </AnimatedText>

              <div className="mt-6 max-w-[42rem]">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
                  {t("description")}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                <AnimatedText delay={0.6}>
                  <Link
                    href="AbdelghAffar Khairallah,Frontend Developer (2).pdf"
                    target="_blank"
                    className={cn(buttonVariants({ size: "lg" }))}
                    aria-label={t("viewResume")}
                  >
                    <Icons.post className="me-2 h-4 w-4" />
                    {t("resume")}
                  </Link>
                </AnimatedText>

                <AnimatedText delay={0.8}>
                  <Link
                    href="/contact"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        size: "lg",
                      })
                    )}
                    aria-label={t("contactAuthor")}
                  >
                    <Icons.contact className="me-2 h-4 w-4" />
                    {t("contact")}
                  </Link>
                </AnimatedText>
              </div>
            </div>
            {/* HERO IMAGE */}
            <AnimatedText
              delay={0.2}
              className="relative flex w-full shrink-0 justify-center md:w-[44%] md:justify-end"
            >
              <div className="relative h-[520px] w-[380px] sm:h-[580px] sm:w-[430px] lg:h-[650px] lg:w-[500px]">
                {/* ========================================
        BACK GLOW
    ======================================== */}
                <div
                  className="
        absolute
        right-[5%]
        top-[15%]
        h-[300px]
        w-[300px]
        rounded-full
        bg-primary/20
        blur-[100px]
      "
                />

                {/* ========================================
        DOT PATTERN
    ======================================== */}
                <div
                  className="
        absolute
        -right-4
        top-0
        z-0
        h-[180px]
        w-[180px]
        opacity-60
        [background-image:radial-gradient(circle,currentColor_1.5px,transparent_1.5px)]
        [background-size:14px_14px]
        text-primary
      "
                />

                {/* ========================================
        OUTER BORDER
    ======================================== */}
                <div
                  className="
        absolute
        right-[2%]
        top-[5%]
        z-[1]
        h-[88%]
        w-[78%]
        rotate-[-7deg]
        rounded-[28px]
        border-2
        border-primary
        opacity-80
      "
                />

                {/* ========================================
        BACKGROUND CARD
    ======================================== */}
                <div
                  className="
        absolute
        left-[8%]
        top-[10%]
        z-[2]
        h-[88%]
        w-[78%]
        rotate-[5deg]
        rounded-[28px]
        bg-primary/20
        shadow-2xl
        backdrop-blur-sm
      "
                />

                {/* ========================================
        IMAGE CARD
    ======================================== */}
                <div
                  className="
        absolute
        left-[5%]
        top-[5%]
        z-[10]
        h-[90%]
        w-[80%]
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-muted
        shadow-2xl
      "
                >
                  <Image
                    src={profileImg}
                    alt="Abdelghfar Khairallah"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, 500px"
                    className="
          object-cover
          object-top
          transition-transform
          duration-700
          hover:scale-[1.03]
        "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-background/30
          via-transparent
          to-transparent
        "
                  />
                </div>

                {/* ========================================
        SMALL DECORATION
    ======================================== */}
                <div
                  className="
        absolute
        bottom-[5%]
        left-0
        z-[15]
        h-20
        w-20
        rounded-2xl
        border
        border-primary/20
        bg-background/70
        backdrop-blur-md
      "
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>
      <div className="flex items-center  justify-center">
        <AnimatedText delay={1.2}>
          <Icons.chevronDown className="mt-10 h-12 w-12" />
        </AnimatedText>
      </div>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("projectsTitle")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("projectsDescription")}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="me-2 h-4 w-4" /> {t("viewAllProjects")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("experienceTitle")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("experienceDescription")}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="me-2 h-4 w-4" /> {t("viewAllExperience")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t("skillsTitle")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t("skillsDescription")}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="me-2 h-4 w-4" /> {t("viewAllSkills")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
