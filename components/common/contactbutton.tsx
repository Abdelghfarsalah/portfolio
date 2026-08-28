"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}



// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function CustomContactButton() {
  const t = useTranslations("common");
  return  <motion.div
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={"/contact"}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors text-foreground/80 hover:text-foreground sm:text-sm ",
                )}
              >
                {t("contact")}
              </Link>
</motion.div>;
}

