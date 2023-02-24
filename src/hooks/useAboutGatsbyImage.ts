import { graphql, useStaticQuery } from 'gatsby'

export const useAboutGatsbyImages = () => {
  const imageData = useStaticQuery(graphql`
    query aboutPageImage {
      AboutBannerBg: file(name: { eq: "about_banner" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
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
