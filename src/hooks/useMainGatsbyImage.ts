import { graphql, useStaticQuery } from 'gatsby'
/*
 *  pages/index 페이지 description, contact 이미지 graphQL로 조회해서 반환
 */
export const useMainGatsbyImage = () => {
  const imageData = useStaticQuery(graphql`
    query mainPageImage {
      TelosSoft: file(name: { eq: "telos_soft" }) {
        childImageSharp {
          gatsbyImageData(width: 780, quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      TelosSoftHover: file(name: { eq: "telos_soft_hover" }) {
        childImageSharp {
          gatsbyImageData(width: 780, quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      TelosBranding: file(name: { eq: "telos_branding" }) {
        childImageSharp {
          gatsbyImageData(width: 780, quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      TelosBrandingHover: file(name: { eq: "telos_branding_hover" }) {
        childImageSharp {
          gatsbyImageData(width: 780, quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      TelosContact: file(name: { eq: "telos_contact" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const telosSoft = imageData.TelosSoft.childImageSharp.gatsbyImageData
  const telosSoftHover =
    imageData.TelosSoftHover.childImageSharp.gatsbyImageData
  const telosBranding = imageData.TelosBranding.childImageSharp.gatsbyImageData
  const telosBrandingHover =
    imageData.TelosBrandingHover.childImageSharp.gatsbyImageData
  const telosContact = imageData.TelosContact.childImageSharp.fluid

  return {
    telosSoft,
    telosSoftHover,
    telosBranding,
    telosBrandingHover,
    telosContact,
  }
}
