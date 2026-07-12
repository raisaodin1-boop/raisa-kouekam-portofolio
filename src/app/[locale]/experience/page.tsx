import { ExperienceContent } from "@/components/experience/ExperienceContent";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <ExperienceContent dict={dict.experience} />;
}
