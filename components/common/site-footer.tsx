import Link from "next/link";
import * as React from "react";

import CustomTooltip from "@/components/ui/custom-tooltip";
import { routesConfig } from "@/config/routes";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("mt-16 border-t border-border ", className)}>
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-heading text-2xl text-foreground transition-colors hover:text-primary"
            >
              Abdelghfar Khairallah
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Front-End Software Engineer building responsive, accessible, and
              production-ready web applications with React and Next.js.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">
              Available for freelance opportunities
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h2>
            <div className="mt-4 grid gap-3">
              {routesConfig.mainNav.map((item: { title: string; href: string }) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h2>
            <div className="mt-4 grid gap-3">
              {SocialLinks.map((item) => (
                <CustomTooltip icon={item.icon} text={item.username} key={item.name}>
                  <Link
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex w-fit items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </CustomTooltip>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
}
