import { graphql, useStaticQuery } from 'gatsby'

/*
 * TODO 이곳에서 siteMetadata를 graphql로 조회해서 반환
 */
const useSiteMetadata = () => {
  return useStaticQuery(graphql`
    query Metadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `).site.siteMetadata
}

export { useSiteMetadata }
