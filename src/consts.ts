import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sattwik Raj Biswal",
  EMAIL: "hi [at] sattwyk [dot] com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A minimal and lightweight site for thoughts and projects.",
};

export const BLOG: Metadata = {
  TITLE: "Thoughts",
  DESCRIPTION: "A collection of thoughts on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
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
