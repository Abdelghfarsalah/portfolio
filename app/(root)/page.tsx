import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { getFeaturedBlogs } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Abdelghfar Khairallah - Applied Frontend Developer working at the intersection of AI, data, and scalable software systems. Explore my projects, experience, and contributions.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Applied Frontend Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
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
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-16">
            {/* Content */}
            <div className="flex max-w-2xl flex-1 flex-col items-center text-center md:items-start md:text-left">
              <AnimatedText
                as="h1"
                delay={0.2}
                className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Abdelghfar Khairallah
              </AnimatedText>

              <AnimatedText
                as="h3"
                delay={0.4}
                className="mt-3 font-heading text-lg text-muted-foreground sm:text-xl md:text-2xl"
              >
                Front-End Software Engineer
              </AnimatedText>

              <div className="mt-6 max-w-[42rem]">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
                  Front-End Software Engineer specializing in React and Next.js,
                  with experience building scalable, responsive, and
                  production-ready web applications. Skilled in TypeScript,
                  state management, API integration, and modern UI development,
                  with a strong focus on clean architecture, performance, and
                  delivering seamless user experiences.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                <AnimatedText delay={0.6}>
                  <Link
                    href="AbdelghAffar Khairallah,Frontend Developer (2).pdf"
                    target="_blank"
                    className={cn(buttonVariants({ size: "lg" }))}
                    aria-label="View resume"
                  >
                    <Icons.post className="mr-2 h-4 w-4" />
                    Resume
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
                    aria-label="Contact Abdelghfar Khairallah"
                  >
                    <Icons.contact className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </AnimatedText>
              </div>
            </div>
            {/* HERO IMAGE */}
            <AnimatedText
              delay={0.2}
              className="relative flex w-full justify-center md:w-[48%]"
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
            {/* Profile Image */}
            {/* <AnimatedText delay={0.1}>
              <div className="shrink-0">
                <Image
                  src={profileImg}
                  width={320}
                  height={320}
                  sizes="(max-width: 768px) 60vw, 320px"
                  className="h-48 w-48 rounded-full border-4 border-primary object-cover shadow-xl sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
                  alt="Abdelghfar Khairallah - Front-End Software Engineer"
                  priority
                />
              </div>
            </AnimatedText> */}
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
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
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
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
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
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
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
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
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
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
