import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  { name: "React.js", description: "Build interactive, accessible, and reusable user interfaces.", rating: 5, icon: Icons.react },
  { name: "Next.js", description: "Build production-ready applications with routing and server rendering.", rating: 5, icon: Icons.nextjs },
  { name: "TypeScript", description: "Write maintainable JavaScript with reliable static typing.", rating: 5, icon: Icons.typescript },
  { name: "JavaScript", description: "Create dynamic and responsive web application experiences.", rating: 5, icon: Icons.javascript },
  { name: "HTML5", description: "Structure semantic and accessible content for modern websites.", rating: 5, icon: Icons.html5 },
  { name: "CSS3", description: "Create responsive layouts and polished interfaces across devices.", rating: 5, icon: Icons.css3 },
  { name: "Tailwind CSS", description: "Build consistent responsive interfaces with a utility-first workflow.", rating: 5, icon: Icons.tailwindcss },
  { name: "Redux Toolkit", description: "Manage predictable application state with concise Redux patterns.", rating: 5, icon: Icons.redux },
  { name: "RTK Query", description: "Fetch, cache, and synchronize server data in React applications.", rating: 4, icon: Icons.redux },
  { name: "REST APIs", description: "Integrate reliable HTTP services for data-driven workflows.", rating: 5, icon: Icons.link },
  { name: "Axios", description: "Handle client and server HTTP requests through a consistent API layer.", rating: 4, icon: Icons.link },
  { name: "React Hook Form", description: "Build performant and accessible forms with minimal re-renders.", rating: 4, icon: Icons.settings },
  { name: "Zod", description: "Validate form and API data with TypeScript-first schemas.", rating: 4, icon: Icons.check },
  { name: "next-intl", description: "Deliver localized Next.js applications with structured translations.", rating: 4, icon: Icons.settings },
  { name: "RTL", description: "Design right-to-left interfaces with clear layout support.", rating: 4, icon: Icons.settings },
  { name: ".NET", description: "Build and integrate robust backend services with the .NET platform.", rating: 4, icon: Icons.settings },
  { name: "C#", description: "Develop reliable application logic and backend services with C#.", rating: 4, icon: Icons.settings },
  { name: "Entity Framework Core (EF Core)", description: "Work with relational data through a modern object-relational mapper.", rating: 4, icon: Icons.settings },
  { name: "SQL Server", description: "Design and query structured data for dependable application services.", rating: 4, icon: Icons.settings },
  { name: "Git", description: "Track changes and collaborate across software development workflows.", rating: 5, icon: Icons.gitBranch },
  { name: "GitHub", description: "Collaborate on code, reviews, and delivery through repositories.", rating: 5, icon: Icons.gitHub },
  { name: "Docker", description: "Package applications into consistent and portable environments.", rating: 4, icon: Icons.settings },
  { name: "Framer Motion", description: "Create smooth animations and transitions for React interfaces.", rating: 4, icon: Icons.retro },
];

export const skills = skillsUnsorted.slice().sort((a, b) => b.rating - a.rating);
export const featuredSkills = skills.slice(0, 6);
