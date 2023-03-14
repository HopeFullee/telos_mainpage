module.exports = {
  /**
   * TODO 이곳에서 siteMetadata를 설정
   * siteUrl은 추후에 배포예정인 주소로 변경
   * 현재는 테스트를 위해 ip주소로 설정
   * 테스트시 yarn start로 로컬 서버를 실행후
   * https://chrome.google.com/webstore/detail/localhost-open-graph-chec/gcbnmkhkglonipggglncobhklaegphgn?hl=ko
   * 위의 플러그인을 설치 및 변환 주소를 복사하여 카카오톡 등에 공유해본다
   */
  siteMetadata: {
    title: `Telos`,
    description: `Raise your flag to tomorrow`,
    author: `@Telos`,
    siteUrl: `https://hopefullee.github.io/`,
  },
  pathPrefix: '',
  plugins: [
    '@mediacurrent/gatsby-plugin-silence-css-order-warning',
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
