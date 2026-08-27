# Abdelghfar Khairallah | Portfolio

Personal portfolio website for **Abdelghfar Khairallah**, a Front-End Software Engineer focused on building responsive, accessible, and production-ready web applications with React and Next.js.

The site presents professional experience, technical skills, selected projects, technical articles, and a contact workflow in a fast, responsive interface.

## Overview

This project is built with the Next.js App Router and uses a configuration-driven structure. Most portfolio content can be updated from the `config` and `content` directories without changing page components.

### Highlights

- Responsive portfolio experience for desktop, tablet, and mobile
- Next.js App Router with static and dynamic routes
- Personal hero section with resume and contact actions
- Project detail pages with technology stacks, screenshots, and descriptions
- Professional experience timeline with detail pages
- Technical skills catalog with ratings and featured skills
- Markdown-powered blog with syntax highlighting and metadata
- Contact form powered by Resend
- GitHub repository star count API
- Light, dark, retro, cyberpunk, paper, aurora, and synthwave themes
- Smooth page and section animations with Framer Motion
- Particle background powered by `particlesjs`
- SEO metadata, Open Graph, sitemap, robots file, manifest, and structured data
- Accessible UI primitives built with Radix UI and reusable components

## Screenshots

### Homepage

![Portfolio homepage](public/readme/Screenshot%202026-08-27%20202947.png)

### Projects

![Projects page](public/readme/Screenshot%202026-08-27%20202954.png)

### Professional Experience

![Professional experience page](public/readme/Screenshot%202026-08-27%20203151.png)

### Technical Skills

![Technical skills page](public/readme/Screenshot%202026-08-27%20203140.png)

### Skills Overview

![Skills overview](public/readme/Screenshot%202026-08-27%20203207.png)

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React and React Icons
- Framer Motion

### State, Data, and Forms

- Redux Toolkit and RTK Query concepts represented in project data
- REST APIs
- React Hook Form
- Zod
- `next-intl` and RTL-ready interface patterns

### Backend and Services

- Next.js Route Handlers
- Resend for contact email delivery
- GitHub REST API for repository stars
- Nodemailer and SendGrid dependencies for email integrations

### Tooling

- ESLint
- Prettier
- PostCSS
- `particlesjs`
- npm

## Pages

| Route                   | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| `/`                     | Homepage with hero, projects, experience, skills, and blogs |
| `/projects`             | Complete project list                                       |
| `/projects/[projectId]` | Project details, screenshots, stack, and description        |
| `/experience`           | Professional experience timeline                            |
| `/experience/[expId]`   | Detailed experience entry                                   |
| `/skills`               | Complete technical skills catalog                           |
| `/blogs`                | Technical blog index                                        |
| `/blogs/[slug]`         | Rendered Markdown article                                   |
| `/contact`              | Contact form and source-code link                           |
| `/resume`               | Resume page                                                 |
| `/sitemap.xml`          | Generated sitemap                                           |
| `/manifest.webmanifest` | Progressive web app manifest                                |

## Featured Content

### Projects

- **Portfolio Website**: Personal developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Vercel.
- **NovaMart**: Multilingual e-commerce storefront with English and Arabic localization, RTL support, authentication, cart, wishlist, checkout, and responsive UI.

### Professional Experience

- Front-End Developer at the Egyptian Armed Forces during military service
- Software Engineer at King Fahd National Library, Riyadh
- Freelance Front-End Developer for the Trend social media platform
- Freelance Front-End Developer for an interactive chess game

## Getting Started

### Requirements

- Node.js 20 or newer
- npm 10 or newer
- A Resend API key for the contact form

### Installation

```bash
git clone https://github.com/Abdelghfarsalah/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=your_google_measurement_id
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_site_verification
```

Only `RESEND_API_KEY` is required for contact form delivery. Google variables are optional.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If port `3000` is already in use on Windows PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen | Select-Object OwningProcess
Stop-Process -Id PROCESS_ID -Force
```

### Production Build

```bash
npm run build
npm start
```

### Quality Checks

```bash
npx tsc --noEmit
npm run lint
```

## Content and Customization

### Site identity and links

Update the name, description, canonical URL, keywords, and social links in:

```text
config/site.ts
config/socials.ts
```

### Navigation and page text

Update the main navigation in `config/routes.ts` and page titles/descriptions in `config/pages.ts`.

### Projects

Project cards and detail pages are driven by `config/projects.ts`.

Each project can define its name, type, categories, description, website and GitHub links, technology stack, dates, main image, detail sections, and screenshots.

Project images are stored under:

```text
public/projects/<project-name>/
```

### Experience

Update professional roles in `config/experience.ts`. Each entry supports the position, company, location, dates, description, achievements, skills, optional company URL, and optional logo.

### Skills

Update the skill cards in `config/skills.ts`. The allowed skill names are defined in `config/constants.ts` through the `ValidSkills` type.

### Blogs

Blog posts are Markdown files stored in `content/blogs/`. The loader in `lib/blogs.ts` reads frontmatter and generates article metadata and routes automatically.

### Images and static files

Static assets are stored in `public/`. The main profile image is `public/profile-img.jpg`, and project assets are grouped by project directory.

## Project Structure

```text
app/
	(root)/              Main portfolio pages and dynamic detail routes
	api/                 Contact and GitHub API route handlers
	globals.css          Global styles and Tailwind layers
	layout.tsx           Root metadata, providers, analytics, and particles
components/
	blogs/               Blog cards
	common/              Navigation, animation, analytics, and layout helpers
	contact/             Contact page components
	experience/          Experience cards and timeline
	forms/               Contact form components
	projects/            Project cards and descriptions
	skills/              Skill cards and ratings
	ui/                  Reusable interface primitives
config/
	constants.ts         Shared TypeScript unions
	experience.ts        Professional experience data
	pages.ts             Page titles and descriptions
	projects.ts          Project data
	routes.ts            Main navigation
	site.ts              Site metadata and links
	skills.ts            Technical skills data
content/blogs/         Markdown blog posts
lib/                   Blog utilities and shared helpers
public/                Images, resume, manifest assets, and static files
providers/             Animation and modal providers
types/                 Local TypeScript declarations
```

## API Routes

### Contact

`POST /api/contact` accepts the contact form payload and sends an email through Resend. Required fields are `name`, `email`, and `message`.

### GitHub Stars

`GET /api/github-stars` reads the configured GitHub repository URL and returns the repository slug, URL, and current star count when available.

## Particle Background

The global particle background is implemented in `components/shared/ParticlesBackground.tsx` using `particlesjs` and mounted from `app/layout.tsx`.

The visual settings can be adjusted in the component:

- `maxParticles`: maximum particle count
- `minDistance`: distance used to connect particles
- `speed`: particle movement speed
- `connectParticles`: whether connecting edges are rendered

## Deployment

The application can be deployed to any platform that supports Next.js. For Vercel:

1. Import the GitHub repository into Vercel.
2. Add `RESEND_API_KEY` in the project environment variables.
3. Add optional Google Analytics and verification variables if needed.
4. Deploy using the default Next.js build settings.

Before deployment, update `siteConfig.url` in `config/site.ts` from the local development URL to the production domain.

## License

This project is available under the license defined in [LICENSE](LICENSE).

## Author

**Abdelghfar Khairallah**

- GitHub: [@Abdelghfarsalah](https://github.com/Abdelghfarsalah)
- LinkedIn: [Abdelghfar Khairallah](https://www.linkedin.com/in/abdelghfar-khairallah-a55896261/)
