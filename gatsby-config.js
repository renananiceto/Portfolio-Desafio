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
    }
  ],
};
