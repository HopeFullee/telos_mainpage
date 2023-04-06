import { graphql, useStaticQuery } from 'gatsby'
/*
 *  pages/News 페이지 베너 이미지 graphQL로 조회해서 반환
 */
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
