import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jebediah47.github.io`,
    siteUrl: `https://jebediah47.github.io`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sitemap"]
};

export default config;
