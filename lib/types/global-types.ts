export type eventMetaDataType = {
  title: string;
  start: string;
  end: string;
  thumbnail: string;
  thumbnailAlt: string;
  location: string;
};

export type infoIntroType = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  links: {
    text: string;
    url: string;
  }[];
};

export type aboutAccordionType = {
  title: string;
  slug: string;
  accordions: { title: string; content: string }[];
};
