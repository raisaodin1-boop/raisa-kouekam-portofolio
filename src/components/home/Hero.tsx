"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { siteConfig, isConfiguredUrl } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Mail, Share2 } from "lucide-react";
import { motion } from "framer-motion";

type HeroProps = {
  dict: Dictionary;
};

const fadeUp = (delay = 0, visible = false) => ({
  initial: visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function Hero({ locale: _locale, dict }: HeroProps) {

  return (
    <section
      className="bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="order-1 text-center lg:text-left">
            <motion.p
              {...fadeUp(0)}
              className="inline-block rounded-full border border-border bg-light-gray px-4 py-1.5 text-xs font-medium tracking-wide text-dark sm:text-sm"
            >
              {dict.home.badge}
            </motion.p>

            <motion.h1
              {...fadeUp(0.08, true)}
              id="hero-heading"
              className="mt-8 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              {dict.home.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16, true)}
              className="mt-4 text-lg font-medium text-[#2563EB] sm:text-xl"
            >
              {dict.home.greeting}
            </motion.p>

            <motion.p
              {...fadeUp(0.24, true)}
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg sm:leading-8 lg:mx-0"
            >
              {dict.home.subtitle}
            </motion.p>

            <motion.ul
              {...fadeUp(0.28)}
              className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start"
              aria-label={dict.home.coreExpertise}
            >
              {dict.home.highlights.map((item) => (
                <li key={item}>
                  <span className="inline-block rounded-full border border-border bg-light-gray px-3 py-1.5 text-xs font-medium text-dark sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <LinkButton
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                className="w-full rounded-xl px-6 py-3 transition-colors duration-200 hover:bg-[#2563EB]/90 sm:w-auto"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {dict.home.emailMe}
              </LinkButton>
              {isConfiguredUrl(siteConfig.linkedin) && (
                <LinkButton
                  href={siteConfig.linkedin}
                  external
                  variant="outline"
                  className="w-full rounded-xl px-6 py-3 transition-colors duration-200 hover:border-primary hover:text-primary sm:w-auto"
                >
                  <Share2 className="h-4 w-4" aria-hidden />
                  {dict.home.connectLinkedIn}
                </LinkButton>
              )}
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.2)}
            className="order-2 flex justify-center lg:justify-end"
          >
            <ProfilePhoto
              alt={dict.home.profilePhotoLabel}
              variant="circle"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
