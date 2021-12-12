module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "final",
  },
  plugins: ["gatsby-plugin-styled-components",
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bebas Neue`,
          `Dancing Script`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-sa-east-1.graphcms.com/v2/ckx13c2ld1fcy01xq4atu1xgy/master",
      },
    },
  ],
};
