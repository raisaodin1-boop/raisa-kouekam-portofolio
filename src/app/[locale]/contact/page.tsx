import { ContactForm } from "@/components/contact/ContactForm";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return createPageMetadata({
    locale: locale as Locale,
    pageTitle: dict.contact.title,
    pageDescription: dict.contact.subtitle,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <PageContainer>
      <SectionHeading
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
      />
      <ContactForm dict={dict.contact} />
    </PageContainer>
  );
}
