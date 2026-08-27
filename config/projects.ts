import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-template",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Personal developer portfolio showcasing my projects, skills, and experience, built with Next.js and optimized for performance, SEO, and accessibility.",
    websiteLink: "",
    githubLink: "https://github.com/Abdelghfarsalah/portfolio",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-9-15"),
    companyLogoImg: "/projects/portfolio/portfolio-preview.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
    paragraphs: [
    "I built a modern portfolio with Next.js to showcase my projects, skills, and experience through a fast and responsive user experience.",
    "The portfolio focuses on performance, clean typography, accessibility, and strong SEO/AEO foundations to provide a polished experience for both users and search engines.",
    ],

    bullets: [
    "Built a modern, responsive portfolio using Next.js with a focus on performance and maintainability.",
    "Optimized the portfolio for SEO, AEO, and GEO to improve discoverability across search engines and AI-powered search.",
    "Designed a minimal, themeable UI with clean typography and a consistent design system.",
    ],
    },

  },
        {
      id: "NovaMart",

      companyName: "NovaMart",

      type: "Professional",
 websiteLink: "https://nova-mart-wheat.vercel.app/en",
    githubLink: "https://github.com/Abdelghfarsalah/NovaMart",
      category: ["Frontend", "Full Stack", "Web Dev"],

      shortDescription:
      "Modern multilingual e-commerce storefront built with Next.js 16, featuring authentication, cart and checkout flows, wishlist, localization, dark mode, and responsive UI.",

      techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion"
      ],

      startDate: new Date("2026-08-01"),

      endDate: new Date("2026-08-27"),

      companyLogoImg: "/projects/novamart/logo.png",

      pagesInfoArr: [
      {
      title: "E-commerce Experience",
      description:
      "Built a complete responsive storefront with product discovery, category browsing, search, filtering, product details, cart, wishlist, checkout, and order history.",
      imgArr: ["/projects/novamart/home.png"],
      },
      {
      title: "Localization & Theming",
      description:
      "Implemented English and Arabic localization with RTL support, alongside a persistent dark mode and theme-aware design system.",
      imgArr: ["/projects/novamart/localization.png"],
      },
      {
      title: "State Management",
      description:
      "Designed global application state using Redux Toolkit and RTK Query, with local persistence for cart, wishlist, authentication, and orders.",
      imgArr: ["/projects/novamart/state-management.png"],
      },
      ],

      descriptionDetails: {
      paragraphs: [
      "NovaMart is a modern, fully responsive e-commerce storefront built with Next.js 16 App Router, designed to provide a complete online shopping experience across desktop, tablet, and mobile.",
      "The project includes multilingual support for English and Arabic with RTL layouts, authentication flows, product search and filtering, cart and checkout functionality, wishlist, order history, dark mode, and a reusable component system.",
      ],

      bullets: [
        "Built a complete e-commerce experience with product browsing, search, filters, wishlist, cart, checkout, and order management.",
        "Implemented English and Arabic localization with full RTL support using next-intl.",
        "Designed scalable global state management with Redux Toolkit and RTK Query, including localStorage persistence.",
        "Created a responsive and accessible UI using Tailwind CSS, shadcn-style components, and reusable design primitives.",
        "Added smooth interactions and transitions with Framer Motion while optimizing images with Next.js Image.",
      ],

      },
      },

  
  
]

export const featuredProjects = Projects.slice(0, 3);
