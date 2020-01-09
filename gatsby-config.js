module.exports = {
  siteMetadata: {
    siteUrl: `https://www.ibby.me/`,
    author: 'Ibby',
    title: 'Ibby',
    description:
      "Ibby's personal site - an overview of the stuf I do",
    keywords:
      'Ibby EL-Serafy, Ibby, QuantumBaking, Foodhall, Polecrobat, theibbster',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/assets/favicon/android-chrome-512x512.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/images\/svg-icons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
};
