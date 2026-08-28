import Link from "next/link";
import * as React from "react";

import CustomTooltip from "@/components/ui/custom-tooltip";
import { routesConfig } from "@/config/routes";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const commonT = useTranslations("common");
  const pagesT = useTranslations("pages");
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
              {commonT("footerDescription")}
            </p>
            <p className="mt-4 text-sm font-medium text-primary">
              {commonT("availableForFreelance")}
            </p>
          </div>

          <nav aria-label={commonT("footerNavigation")}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {commonT("explore")}
            </h2>
            <div className="mt-4 grid gap-3">
              {routesConfig.mainNav.map((item: { title: string; translationKey?: string; href: string }) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.translationKey ? pagesT(item.translationKey.replace("pages.", "").replace(".title", ".title")) : item.title}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {commonT("connect")}
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
