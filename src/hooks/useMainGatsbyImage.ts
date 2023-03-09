import { graphql, useStaticQuery } from 'gatsby'

export const useMainGatsbyImage = () => {
  const imageData = useStaticQuery(graphql`
    query mainPageImage {
      TelosSoft: file(name: { eq: "telos_soft" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      TelosSoftHover: file(name: { eq: "telos_soft_hover" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      TelosBranding: file(name: { eq: "telos_branding" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      TelosBrandingHover: file(name: { eq: "telos_branding_hover" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
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
