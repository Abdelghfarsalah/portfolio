import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "egyptian-armed-forces",
    position: "Front-End Developer",
    company: "Egyptian Armed Forces (Military Service)",
    location: "Egypt",
    startDate: new Date("2026-03-01"),
    endDate: "Present",
    description: [
      "Developed and deployed multiple web applications currently used within the Egyptian Air Force.",
      "Contributed to internal digital services by developing responsive user interfaces and improving usability.",
    ],
    achievements: [
      "Developed and deployed multiple production web applications for internal use.",
      "Built responsive interfaces and improved overall usability and user experience.",
    ],
    skills: ["React", "Typescript", "Javascript", "HTML 5", "CSS 3"],
  },
  {
    id: "king-fahd-national-library",
    position: "Software Engineer",
    company: "King Fahd National Library",
    location: "Riyadh, Saudi Arabia",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Developed and maintained interactive book display applications for the library.",
      "Created five high-performance, responsive applications to showcase historical books.",
    ],
    achievements: [
      "Created five applications to showcase five historical books with high performance and responsive design.",
      "Optimized book interactions and navigation for smooth, responsive performance.",
      "Integrated front-end interfaces with application services for seamless data flow and a consistent user experience.",
    ],
    skills: ["Next.js", "React", "Javascript", "Typescript", "CSS 3"],
  },
  {
    id: "trend-social-media",
    position: "Freelance Front-End Developer",
    company: "Trend - Social Media Platform",
    location: "Remote",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Developed a social media application with an interactive and engaging user experience.",
      "Integrated REST APIs to manage user data and real-time content updates.",
    ],
    achievements: [
      "Designed and implemented interactive UI/UX for an engaging user experience.",
      "Integrated RESTful APIs for user data and real-time content updates.",
      "Enhanced responsiveness and optimized performance for a seamless experience.",
    ],
    skills: ["Next.js", "React", "Javascript", "Typescript", "CSS 3"],
  },
  {
    id: "interactive-chess-game",
    position: "Freelance Front-End Developer",
    company: "Interactive Chess Game",
    location: "Remote",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Developed an interactive chess game with optimized performance across multiple platforms.",
      "Integrated AI to provide a challenging and dynamic player experience.",
    ],
    achievements: [
      "Collaborated with designers to create an intuitive and visually appealing interface.",
      "Integrated AI for a challenging and dynamic player experience.",
      "Ensured smooth animations and responsive gameplay using React and Next.js.",
    ],
    skills: ["Next.js", "React", "Javascript", "Typescript"],
  },
];
