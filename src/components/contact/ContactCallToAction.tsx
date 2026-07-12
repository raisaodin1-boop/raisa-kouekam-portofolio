"use client";

import type { ContactDictionary } from "@/components/contact/types";
import { siteConfig } from "@/data/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LinkButton } from "@/components/ui/LinkButton";

type ContactCallToActionProps = {
  dict: ContactDictionary["cta"];
};

export function ContactCallToAction({ dict }: ContactCallToActionProps) {
  return (
    <AnimateIn delay={0.2}>
      <div className="mt-12 rounded-2xl border border-border bg-light-gray/60 p-8 text-center sm:mt-16 sm:p-10">
        <h2 className="text-xl font-semibold text-dark sm:text-2xl">
          {dict.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          {dict.subtitle}
        </p>
        <div className="mt-6">
          <LinkButton
            href={`mailto:${siteConfig.email}`}
            variant="primary"
            className="rounded-xl px-6 py-3"
            aria-label={dict.button}
          >
            {dict.button}
          </LinkButton>
        </div>
      </div>
    </AnimateIn>
  );
}
