export type AboutHighlight = {
  title: string;
  description: string;
};

export type AboutValue = string;

export type AboutDictionary = {
  label: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
  techStackLabel: string;
  techStack: string[];
  portraitLabel: string;
  portraitCaption: string;
  values: {
    title: string;
    items: AboutValue[];
  };
  whatsapp: {
    title: string;
    description: string;
    button: string;
  };
};
