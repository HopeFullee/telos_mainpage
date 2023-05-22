module.exports = {
  siteMetadata: {
    title: `텔로스`,
    description: `We are creative studio TELOS`,
    author: `@Telos`,
    siteUrl: `https://www.thetelos.net/`,
  },
  pathPrefix: '',
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    '@mediacurrent/gatsby-plugin-silence-css-order-warning',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/assets/favicon/telos_favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `source-file-assets`,
        path: `${__dirname}/source-file-assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    /**
     * 존나 어려움 *
     **/
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.icon\.svg$/,
        },
      },
    },
  ],
}
