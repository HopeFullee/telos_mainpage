import { graphql, useStaticQuery } from 'gatsby'
/*
 *  pages/About 페이지 베너 이미지 graphQL로 조회해서 반환
 */
export const useAboutGatsbyImages = () => {
  const imageData = useStaticQuery(graphql`
    query aboutPageImage {
      AboutBannerBg: file(name: { eq: "about_banner" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const aboutBannerBg = imageData.AboutBannerBg.childImageSharp.fluid

  return {
    aboutBannerBg,
  }
}
