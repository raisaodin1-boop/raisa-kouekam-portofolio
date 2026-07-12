"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig, isConfiguredUrl } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Layers,
  ShoppingCart,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

const highlightIcons: LucideIcon[] = [
  Layers,
  ShoppingCart,
  TrendingUp,
  Workflow,
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export function Hero({ locale, dict }: HeroProps) {
  const resumeHref = isConfiguredUrl(siteConfig.resumeUrl)
    ? siteConfig.resumeUrl
    : getLocalizedPath("/contact", locale);

  return (
    <section
      className="relative flex min-h-[calc(100vh-4.5rem)] flex-col overflow-hidden"
      aria-label="Introduction"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 gradient-bg animate-gradient" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.1),transparent_45%)]" />

      <motion.div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Profile photo */}
          <motion.div
            {...fadeUp(0)}
            className="relative shrink-0"
          >
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 opacity-80 blur-sm"
              aria-hidden
            />
            <div className="relative">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-[3px] border-white/90 bg-white p-1 card-shadow sm:h-52 sm:w-52 lg:h-56 lg:w-56">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/[0.08] via-white to-accent/[0.08]">
                  <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                    RK
                  </span>
                </div>
              </div>
              <div
                className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white bg-accent sm:h-8 sm:w-8"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.08)} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-1.5 text-xs font-medium text-dark shadow-sm backdrop-blur-sm sm:text-sm">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {dict.home.badge}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.16)}
              className="mt-6 text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-[3.5rem] xl:leading-[1.1]"
            >
              {dict.home.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-3 text-lg font-medium text-primary sm:text-xl"
            >
              {dict.home.greeting}
            </motion.p>

            <motion.p
              {...fadeUp(0.32)}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0 lg:max-w-2xl lg:leading-8"
            >
              {dict.home.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <LinkButton
                href={getLocalizedPath("/projects", locale)}
                variant="primary"
                className="group px-6 py-3 shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                {dict.home.viewProjects}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </LinkButton>
              <LinkButton
                href={resumeHref}
                external={isConfiguredUrl(siteConfig.resumeUrl)}
                variant="outline"
                className="group px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/[0.03] hover:shadow-md"
                aria-label={dict.home.downloadResume}
              >
                <Download
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden
                />
                {dict.home.downloadResume}
              </LinkButton>
            </motion.div>
          </div>
        </div>

        {/* Quick highlights */}
        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-16"
          aria-label="Areas of expertise"
        >
          {dict.home.highlights.map((label, index) => {
            const Icon = highlightIcons[index] ?? Layers;
            return (
              <li
                key={label}
                className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-white/60 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-md sm:px-5 sm:py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                </div>
                <span className="text-left text-xs font-medium leading-snug text-dark sm:text-sm">
                  {label}
                </span>
              </li>
            );
          })}
        </motion.ul>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative flex flex-col items-center gap-2 pb-8 pt-4 text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={dict.home.scrollIndicator}
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          {dict.home.scrollIndicator}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
