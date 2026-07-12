"use client";

import { ContactCard } from "@/components/contact/ContactCard";
import { ContactSocialLinks } from "@/components/contact/ContactSocialLinks";
import type { ContactDictionary } from "@/components/contact/types";
import { siteConfig } from "@/data/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Clock, Mail, MapPin } from "lucide-react";

type ContactInfoProps = {
  dict: Pick<ContactDictionary, "intro" | "cards" | "social" | "socialLabel">;
};

export function ContactInfo({ dict }: ContactInfoProps) {
  return (
    <AnimateIn direction="left" delay={0.1}>
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8">
          {dict.intro}
        </p>

        <div className="space-y-4" role="list" aria-label="Contact information">
          <div role="listitem">
            <ContactCard
              title={dict.cards.email.title}
              lines={[siteConfig.email]}
              icon={Mail}
              href={`mailto:${siteConfig.email}`}
            />
          </div>
          <div role="listitem">
            <ContactCard
              title={dict.cards.location.title}
              lines={dict.cards.location.lines}
              icon={MapPin}
            />
          </div>
          <div role="listitem">
            <ContactCard
              title={dict.cards.availability.title}
              lines={dict.cards.availability.lines}
              icon={Clock}
            />
          </div>
        </div>

        <ContactSocialLinks labels={dict.social} sectionLabel={dict.socialLabel} />
      </div>
    </AnimateIn>
  );
}
