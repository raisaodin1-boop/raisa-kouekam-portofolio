"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageContainer } from "@/components/ui/PageContainer";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

type ContactCTAProps = {
  locale: Locale;
  dict: Dictionary;
};

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <PageContainer as="section" id="contact-preview" className="pb-32">
      <AnimateIn>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-white to-accent/5 p-10 text-center sm:p-14 card-shadow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
            >
              <Mail className="h-6 w-6 text-primary" aria-hidden />
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              {dict.home.contactTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {dict.home.contactSubtitle}
            </p>
            <div className="mt-8">
              <LinkButton
                href={getLocalizedPath("/contact", locale)}
                variant="primary"
                className="px-8 py-3"
              >
                {dict.home.getInTouch}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </LinkButton>
            </div>
          </div>
        </div>
      </AnimateIn>
    </PageContainer>
  );
}
