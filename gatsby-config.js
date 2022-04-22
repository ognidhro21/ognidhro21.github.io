module.exports = {
  siteMetadata: {
    title: `Ognidhro 21`,
    siteUrl: `https://ognidhro21.github.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/routines/`, `/blog/*`],
      },
    },
  ],
};
