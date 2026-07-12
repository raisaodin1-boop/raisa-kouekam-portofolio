export type ContactCardContent = {
  title: string;
  lines: string[];
};

export type ContactDictionary = {
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  cards: {
    email: Omit<ContactCardContent, "lines"> & { title: string };
    location: ContactCardContent;
    availability: ContactCardContent;
  };
  social: {
    github: string;
    linkedin: string;
    portfolio: string;
    email: string;
    whatsapp: string;
  };
  socialLabel: string;
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    submitError: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    subjectRequired: string;
    messageRequired: string;
  };
};

export type FooterDictionary = {
  role: string;
  description: string;
  quickLinks: string;
  social: string;
  builtWith: string;
  rights: string;
};
