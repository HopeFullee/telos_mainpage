import { graphql, useStaticQuery } from 'gatsby'

export const useMainImages = () => {
  const imageData = useStaticQuery(graphql`
    query testImage {
      TelosSoft: file(name: { eq: "telos_soft" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      TelosBranding: file(name: { eq: "telos_branding" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `)

  const telosSoft = imageData.TelosSoft.childImageSharp.gatsbyImageData
  const telosBranding = imageData.TelosBranding.childImageSharp.gatsbyImageData

  return { telosSoft, telosBranding }
}
