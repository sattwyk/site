import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "sattwik raj biswal",
  EMAIL: "hi@sattwyk.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "hi, i'm satty",
  DESCRIPTION:
    "software, systems, and what happens when things fail. notes and projects by sattwik raj biswal.",
};

export const BLOG: Metadata = {
  TITLE: "things i've written",
  DESCRIPTION: "notes on systems, testing, and things i learn by building.",
};

export const PROJECTS: Metadata = {
  TITLE: "things i've built",
  DESCRIPTION: "tools, experiments, and projects i've worked on.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x",
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
