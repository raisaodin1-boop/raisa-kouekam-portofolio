import { ContactCallToAction } from "@/components/contact/ContactCallToAction";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactSectionHeader } from "@/components/contact/ContactSectionHeader";
import type { ContactDictionary } from "@/components/contact/types";

type ContactContentProps = {
  dict: ContactDictionary;
  a11y: {
    contactForm: string;
    contactInformation: string;
    formErrorSummary: string;
  };
};

export function ContactContent({ dict, a11y }: ContactContentProps) {
  return (
    <section className="bg-white" aria-labelledby="contact-page-heading">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-28 lg:py-32">
        <ContactSectionHeader
          label={dict.label}
          title={dict.title}
          subtitle={dict.subtitle}
          headingId="contact-page-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ContactInfo dict={dict} contactInfoLabel={a11y.contactInformation} />
          <ContactForm
            dict={dict.form}
            errorSummaryLabel={a11y.formErrorSummary}
            formAriaLabel={a11y.contactForm}
          />
        </div>

        <ContactCallToAction dict={dict.cta} />
      </div>
    </section>
  );
}
