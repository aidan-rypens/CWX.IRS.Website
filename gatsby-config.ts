import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: ``,
  siteMetadata: {
    title: `IRS Website`,
    description: `Custom-made Store & ICT Solutions`,
    siteUrl: `https://www.irs-belgium.com/`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sitemap"],
};

export default config;
