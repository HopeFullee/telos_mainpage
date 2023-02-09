import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const useProfileImage = () => {
  const imageData: IGatsbyImageData = useStaticQuery(graphql`
    query getProfileImage {
      file(name: { eq: "profile-image" }) {
        childImageSharp {
          gatsbyImageData(width: 120, height: 120)
        }
      }
    }
  `).file.childImageSharp.gatsbyImageData
  return imageData
}

export default useProfileImage
