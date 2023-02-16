import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const useNewsBanner = () => {
  const imageData: IGatsbyImageData = useStaticQuery(graphql`
    query getNewsBanner {
      file(name: { eq: "news_banner" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `).file.childImageSharp.gatsbyImageData
  return imageData
}

export default useNewsBanner
