"use client";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NavbarLinks } from "@/components/layout/NavbarLinks";
import { NavbarLogo } from "@/components/layout/NavbarLogo";
import { NavbarResumeButton } from "@/components/layout/NavbarResumeButton";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { buildNavLabels } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type MobileMenuProps = {
  open: boolean;
  locale: Locale;
  pathname: string;
  dict: Dictionary;
  menuButtonId: string;
  onClose: () => void;
};

function MobileMenu({
  open,
  locale,
  pathname,
  dict,
  menuButtonId,
  onClose,
}: MobileMenuProps) {
  const labels = buildNavLabels(dict);
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const main = document.getElementById("main-content");
    main?.setAttribute("inert", "");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
      document.getElementById(menuButtonId)?.focus();
    };
  }, [open, menuButtonId, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/10 lg:hidden"
            onClick={onClose}
            aria-label={dict.nav.close}
          />
          <motion.div
            ref={panelRef}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-4 right-4 top-full z-50 mt-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-border bg-white card-shadow lg:hidden"
          >
            <div className="px-5 py-6">
              <NavbarLinks
                locale={locale}
                pathname={pathname}
                labels={labels}
                onNavigate={onClose}
                vertical
                ariaLabel={dict.a11y.mainNavigation}
              />

              <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
                <LanguageSwitcher
                  locale={locale}
                  ariaLabel={dict.a11y.languageSwitcher}
                  switchToEnglish={dict.a11y.switchToEnglish}
                  switchToFrench={dict.a11y.switchToFrench}
                />
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
  const menuButtonId = useId();
  const labels = buildNavLabels(dict);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-white transition-shadow duration-300",
        scrolled && "card-shadow"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <div className="min-w-0 shrink-0 lg:w-[200px]">
          <NavbarLogo
            locale={locale}
            name={siteConfig.name}
            title={dict.home.greeting}
            ariaLabel={`${siteConfig.name} — ${dict.nav.home}`}
          />
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <NavbarLinks
            locale={locale}
            pathname={pathname}
            labels={labels}
            ariaLabel={dict.a11y.mainNavigation}
          />
        </div>

        <div className="flex items-center gap-4 lg:gap-5">
          <div className="hidden items-center gap-5 lg:flex">
            <LanguageSwitcher
              locale={locale}
              ariaLabel={dict.a11y.languageSwitcher}
              switchToEnglish={dict.a11y.switchToEnglish}
              switchToFrench={dict.a11y.switchToFrench}
            />
            <NavbarResumeButton
              locale={locale}
              label={dict.home.downloadResume}
            />
          </div>

          <button
            id={menuButtonId}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-dark transition-colors duration-200 hover:bg-light-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
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
          menuButtonId={menuButtonId}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
}
