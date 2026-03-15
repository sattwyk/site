import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "sattwik raj biswal",
  EMAIL: "hi@sattwyk.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "hi, i'm satty",
  DESCRIPTION: "a software engineer with a passion for building things and sharing knowledge.",
};

export const BLOG: Metadata = {
  TITLE: "things i've written",
  DESCRIPTION: "some of my thoughts on software development, technology, and other musings.",
};

export const PROJECTS: Metadata = {
  TITLE: "things i've built",
  DESCRIPTION: "things i've built and contributed to.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/sattwyk",
  },
  {
    NAME: "github",
    HREF: "https://github.com/sattwyk",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/sattwyk",
  },
];
