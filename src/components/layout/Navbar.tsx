"use client";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NavbarLinks } from "@/components/layout/NavbarLinks";
import { NavbarLogo } from "@/components/layout/NavbarLogo";
import { NavbarResumeButton } from "@/components/layout/NavbarResumeButton";
import { navbarItems, siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MobileMenuProps = {
  open: boolean;
  locale: Locale;
  pathname: string;
  dict: Dictionary;
  onClose: () => void;
};

export function MobileMenu({
  open,
  locale,
  pathname,
  dict,
  onClose,
}: MobileMenuProps) {
  const labels = Object.fromEntries(
    navbarItems.map((item) => [
      item.key,
      dict.nav[item.key as keyof typeof dict.nav],
    ])
  ) as Record<(typeof navbarItems)[number]["key"], string>;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/10 lg:hidden"
            onClick={onClose}
            aria-label={dict.nav.close}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-4 right-4 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] lg:hidden"
          >
            <div className="px-5 py-6">
              <NavbarLinks
                locale={locale}
                pathname={pathname}
                labels={labels}
                onNavigate={onClose}
                vertical
              />

              <div className="mt-6 flex flex-col gap-4 border-t border-[#E5E7EB] pt-6">
                <LanguageSwitcher locale={locale} />
                <NavbarResumeButton
                  locale={locale}
                  label={dict.home.downloadResume}
                  fullWidth
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const labels = Object.fromEntries(
    navbarItems.map((item) => [
      item.key,
      dict.nav[item.key as keyof typeof dict.nav],
    ])
  ) as Record<(typeof navbarItems)[number]["key"], string>;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[#E5E7EB] bg-white transition-all duration-300",
        scrolled && "shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1200px] items-center justify-between px-6 transition-all duration-300",
          scrolled ? "h-16" : "h-[72px]"
        )}
      >
        {/* Left — logo */}
        <div className="min-w-0 shrink-0 lg:w-[200px]">
          <NavbarLogo
            locale={locale}
            name={siteConfig.name}
            title={dict.home.greeting}
            ariaLabel={`${siteConfig.name} — ${dict.nav.home}`}
          />
        </div>

        {/* Center — desktop links */}
        <div className="hidden flex-1 justify-center lg:flex">
          <NavbarLinks locale={locale} pathname={pathname} labels={labels} />
        </div>

        {/* Right — utilities */}
        <div className="flex items-center gap-4 lg:gap-5">
          <div className="hidden items-center gap-5 lg:flex">
            <LanguageSwitcher locale={locale} />
            <NavbarResumeButton
              locale={locale}
              label={dict.home.downloadResume}
            />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#0F172A] transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? dict.nav.close : dict.nav.menu}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className="relative lg:hidden">
        <MobileMenu
          open={mobileOpen}
          locale={locale}
          pathname={pathname}
          dict={dict}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
}
