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
    inquiryType: string;
    inquiryTypePlaceholder: string;
    inquiryTypeOptions: { value: string; label: string }[];
    inquiryTypeRequired: string;
    company: string;
    companyPlaceholder: string;
    optional: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    messageHint: string;
    submit: string;
    submitting: string;
    successTitle: string;
    success: string;
    successHint: string;
    sendAnother: string;
    submitError: string;
    spamNotice: string;
    honeypotLabel: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    subjectRequired: string;
    messageRequired: string;
    messageTooShort: string;
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
