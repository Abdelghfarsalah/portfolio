# Abdelghfar Khairallah — Portfolio

> Personal portfolio of **Abdelghfar Khairallah**, a Front-End Software Engineer building responsive, accessible, and production-ready web applications with **React, Next.js, and TypeScript**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com/)

**Explore the portfolio:** [Live Website](https://abdelghfar.dev)

---

## ✨ About the Project

This is my personal developer portfolio, designed to showcase my **professional experience, technical skills, projects, and technical writing** in a fast and accessible web experience.

The project is built with the **Next.js App Router** and follows a configuration-driven architecture, allowing most portfolio content to be updated through the `config` and `content` directories without modifying the underlying page components.

The goal is to keep the codebase **maintainable, scalable, performant, and easy to customize**.

---

## 🚀 Highlights

- ⚡ Built with **Next.js 16 App Router** and React 19
- 📱 Fully responsive across desktop, tablet, and mobile
- ♿ Accessible UI built with reusable Radix UI primitives
- 🎨 Multiple visual themes including:
  - Light
  - Dark
  - Retro
  - Cyberpunk
  - Paper
  - Aurora
  - Synthwave
- ✨ Smooth page and component animations with Framer Motion
- 🌌 Interactive particle background
- 📝 Markdown-powered technical articles with syntax highlighting
- 📊 GitHub repository star count integration
- 📬 Contact form with Resend email delivery
- 🔍 SEO-focused metadata and structured data
- 🌐 Open Graph, sitemap, robots, and web manifest support
- 🧩 Configuration-driven portfolio content
- 🖼️ Project screenshots and detailed case-study pages
- 📄 Dedicated resume page
- 🌙 Theme persistence and modern UI interactions

---

## 📸 Screenshots

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

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework and App Router |
| **React 19** | UI development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **Radix UI** | Accessible UI primitives |
| **Framer Motion** | Animations and transitions |
| **Lucide React / React Icons** | Icons |

### Backend & Integrations

| Technology | Purpose |
|---|---|
| **Next.js Route Handlers** | Server-side API endpoints |
| **Resend** | Contact form email delivery |
| **GitHub REST API** | Repository metadata and star count |

### Forms & Validation

- React Hook Form
- Zod

### Internationalization

- `next-intl`
- English / Arabic
- RTL-ready UI patterns

### Tooling

- ESLint
- Prettier
- PostCSS
- npm

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, projects, experience, and skills |
| `/projects` | Complete project portfolio |
| `/projects/[projectId]` | Detailed project case study |
| `/experience` | Professional experience timeline |
| `/experience/[expId]` | Detailed experience entry |
| `/skills` | Technical skills catalog |
| `/contact` | Contact form |
| `/resume` | Online resume |
| `/sitemap.xml` | Generated sitemap |
| `/manifest.webmanifest` | Web app manifest |

---

## 💼 Featured Projects

### Portfolio

My personal developer portfolio built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

The portfolio includes project case studies, professional experience, technical skills, articles, themes, animations, and SEO optimizations.

### NovaMart

A modern multilingual e-commerce storefront built with **Next.js 16**.

Features include:

- 🇺🇸 English / 🇪🇬 Arabic localization
- RTL support
- Product search and filtering
- Shopping cart
- Wishlist
- Checkout flow
- Order history
- Authentication flows
- Dark mode
- Responsive UI
- Redux Toolkit state management
- RTK Query
- Framer Motion animations

---

## 👨‍💻 Professional Experience

### Front-End Developer — Egyptian Armed Forces

Worked on frontend development during military service, focusing on responsive interfaces and modern web development practices.

### Software Engineer — King Fahd National Library

Worked on software engineering and frontend development for web-based applications.

### Freelance Front-End Developer — Trend

Worked on frontend development for a social media platform, focusing on responsive interfaces and user experience.

### Freelance Front-End Developer — Interactive Chess Game

Built frontend interfaces and interactive functionality for a browser-based chess experience.

---

## 🧩 Configuration-Driven Architecture

One of the main goals of this project is to keep content separate from UI implementation.

Most portfolio information is managed through configuration files:

```text
config/
├── constants.ts
├── experience.ts
├── pages.ts
├── projects.ts
├── routes.ts
├── site.ts
└── skills.ts
