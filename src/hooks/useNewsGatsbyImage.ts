import { graphql, useStaticQuery } from 'gatsby'

export const useNewsGatsbyImage = () => {
  const imageData = useStaticQuery(graphql`
    query newsPageImage {
      NewsBanner: file(name: { eq: "news_banner" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const newsBanner = imageData.NewsBanner.childImageSharp.gatsbyImageData

  return { newsBanner }
}
