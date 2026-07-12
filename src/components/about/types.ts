export type AboutHighlight = {
  title: string;
  description: string;
};

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
};
