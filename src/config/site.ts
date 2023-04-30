interface SiteConfig {
  name: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "T3 App Router (Edge)",
  description: "Example app.",
  links: {
    twitter: "https://twitter.com/ode_aksar",
    github: "https://github.com/laodeaksar",
  },
};
