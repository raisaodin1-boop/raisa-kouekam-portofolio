"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { isConfiguredUrl, siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { getLocalizedPath } from "@/lib/utils";
import { motion } from "framer-motion";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function Hero({ locale, dict }: HeroProps) {
  const resumeHref = isConfiguredUrl(siteConfig.resumeUrl)
    ? siteConfig.resumeUrl
    : getLocalizedPath("/contact", locale);

  return (
    <section
      className="bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left — content */}
          <div className="order-1 text-center lg:text-left">
            <motion.p
              {...fadeUp(0)}
              className="inline-block rounded-full border border-border bg-light-gray px-4 py-1.5 text-xs font-medium tracking-wide text-dark sm:text-sm"
            >
              {dict.home.badge}
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              id="hero-heading"
              className="mt-8 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              {dict.home.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-4 text-lg font-medium text-[#2563EB] sm:text-xl"
            >
              {dict.home.greeting}
            </motion.p>

            <motion.p
              {...fadeUp(0.24)}
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg sm:leading-8 lg:mx-0"
            >
              {dict.home.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <LinkButton
                href={getLocalizedPath("/projects", locale)}
                variant="primary"
                className="w-full rounded-xl px-6 py-3 transition-colors duration-200 hover:bg-[#2563EB]/90 sm:w-auto"
              >
                {dict.home.viewProjects}
              </LinkButton>
              <LinkButton
                href={resumeHref}
                external={isConfiguredUrl(siteConfig.resumeUrl)}
                variant="outline"
                className="w-full rounded-xl px-6 py-3 transition-colors duration-200 hover:border-[#2563EB] hover:text-[#2563EB] sm:w-auto"
                aria-label={dict.home.downloadResume}
              >
                {dict.home.downloadResume}
              </LinkButton>
            </motion.div>
          </div>

          {/* Right — profile */}
          <motion.div
            {...fadeUp(0.2)}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div
              className="flex h-56 w-56 items-center justify-center rounded-full border border-border bg-light-gray text-5xl font-semibold tracking-tight text-[#2563EB] shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:h-64 sm:w-64 sm:text-6xl lg:h-72 lg:w-72"
              role="img"
              aria-label={`${dict.home.name} profile photo placeholder`}
            >
              RK
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
