
import CustomContactButton from "@/components/common/contactbutton";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { SiteFooter } from "@/components/common/site-footer";
import ScrollToTop from "@/components/common/scroll-to-top";
import { routesConfig } from "@/config/routes";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              {/* <GitHubStarBadge className="w-full justify-center" />  */}
              <ModeToggle />
              <LanguageSwitcher />
            </div>
          </MainNav>
          <nav className="flex items-center gap-5">
            <CustomContactButton />
            <ModeToggle />
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
