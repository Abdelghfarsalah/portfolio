"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("common");

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY >= window.innerHeight);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("scrollToTop")}
      title={t("scrollToTop")}
      className={`
        group fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-white/15
        bg-background/70
        text-foreground
        shadow-lg shadow-black/10
        backdrop-blur-md
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-foreground/30
        hover:bg-foreground
        hover:text-background
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-ring
        sm:bottom-8 sm:right-8
        ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-90 opacity-0"
        }
      `}
    >
      <ArrowUp
        className="
          h-5 w-5
          transition-transform duration-300
          group-hover:-translate-y-0.5
        "
      />
    </button>
  );
}