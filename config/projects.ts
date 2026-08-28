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
      {
  id: "FlipBooks",

  companyName: "FlipBooks",

  type: "Professional",

  websiteLink: "",
  githubLink: "",

  category: ["Frontend", "Web Dev"],

  shortDescription:
    "Interactive Arabic RTL flipbook presentation featuring a fullscreen video landing page, right-to-left page turning, touch swipe support, keyboard navigation, click navigation, and video content on the final page.",

  techStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Turn.js",
    "jQuery TouchSwipe"
  ],

  startDate: new Date("2026-08-01"),

  endDate: new Date("2026-08-27"),

  companyLogoImg: "/projects/flipbooks/logo.png",

  pagesInfoArr: [
    {
      title: "Fullscreen Video Landing",
      description:
        "Created a cinematic fullscreen video landing page with autoplay video that transitions users into the interactive flipbook when clicked.",
      imgArr: ["/projects/flipbooks/001.png"],
    },
    {
      title: "RTL Flipbook Experience",
      description:
        "Built a right-to-left flipbook optimized for Arabic content using Turn.js, with dynamic page loading and smooth page-turning animations.",
      imgArr: ["/projects/flipbooks/002.png", "/projects/flipbooks/003.png"],
    },
    {
      title: "Touch & Navigation",
      description:
        "Implemented mobile-friendly swipe gestures alongside keyboard arrow controls and click-based navigation for an accessible browsing experience.",
      imgArr: ["/projects/flipbooks/004.png", "/projects/flipbooks/005.png"],
    },
    {
      title: "Multimedia Final Page",
      description:
        "Added a video experience to the final flipbook page with an overlay link, creating an interactive multimedia ending for the presentation.",
      imgArr: ["/projects/flipbooks/008.png"],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "FlipBooks is an interactive flipbook-style web presentation designed primarily for Arabic and RTL content. The experience begins with a fullscreen cinematic video landing page and transitions into an animated digital book.",
      "The flipbook uses Turn.js for page-turning animations and supports right-to-left navigation, touch gestures, keyboard controls, and click-based page navigation. The final page also includes embedded video content with an overlay link.",
    ],

    bullets: [
      "Built a fullscreen autoplay video landing page that transitions into the flipbook experience.",
      "Implemented a right-to-left flipbook optimized for Arabic content using Turn.js.",
      "Added touch and swipe navigation for mobile and tablet devices using jQuery TouchSwipe.",
      "Implemented keyboard navigation with left and right arrow keys.",
      "Added click navigation by interacting with the left and right sides of the book.",
      "Created a multimedia final page with embedded video and an overlay link.",
      "Used dynamic page loading to improve the flipbook browsing experience.",
      "Designed the experience using HTML5, CSS3, JavaScript, jQuery, Turn.js, and jQuery TouchSwipe.",
    ],
  },
},
  
  
]

export const featuredProjects = Projects.slice(0, 3);
