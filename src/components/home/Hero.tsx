"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden gradient-bg animate-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative shrink-0"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white card-shadow sm:h-48 sm:w-48">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                <span className="text-4xl font-bold text-primary sm:text-5xl">
                  RK
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-white bg-accent" aria-hidden />
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {dict.home.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl"
            >
              {dict.home.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl"
            >
              {dict.home.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <LinkButton
                href={siteConfig.resumeUrl}
                external
                variant="primary"
                aria-label={dict.home.downloadResume}
              >
                <Download className="h-4 w-4" aria-hidden />
                {dict.home.downloadResume}
              </LinkButton>
              <LinkButton
                href={getLocalizedPath("/projects", locale)}
                variant="outline"
              >
                {dict.home.viewProjects}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
