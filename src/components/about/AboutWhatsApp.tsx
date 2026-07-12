"use client";

import { siteConfig, isConfiguredUrl } from "@/data/site";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type AboutWhatsAppProps = {
  title: string;
  description: string;
  buttonLabel: string;
};

export function AboutWhatsApp({
  title,
  description,
  buttonLabel,
}: AboutWhatsAppProps) {
  if (!isConfiguredUrl(siteConfig.whatsapp)) {
    return null;
  }

  return (
    <section className="mt-16 sm:mt-20" aria-labelledby="about-whatsapp-heading">
      <div className="rounded-2xl border border-border bg-light-gray/50 p-6 sm:p-8">
        <h2
          id="about-whatsapp-heading"
          className="text-xl font-semibold text-dark sm:text-2xl"
        >
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
        <motion.a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {buttonLabel}
          <span className="text-white/80">({siteConfig.whatsappDisplay})</span>
        </motion.a>
      </div>
    </section>
  );
}
