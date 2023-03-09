import { graphql, useStaticQuery } from 'gatsby'

export const useCultureGatsbyImage = () => {
  const imageData = useStaticQuery(graphql`
    query culturePageImage {
      CultureBanner01: file(name: { eq: "culture_banner_01" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      CultureBanner02: file(name: { eq: "culture_banner_02" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      CultureBanner03: file(name: { eq: "culture_banner_03" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      CultureBanner04: file(name: { eq: "culture_banner_04" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      CultureBanner05: file(name: { eq: "culture_banner_05" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `)

  const cultureBanner01 =
    imageData.CultureBanner01.childImageSharp.gatsbyImageData
  const cultureBanner02 =
    imageData.CultureBanner02.childImageSharp.gatsbyImageData
  const cultureBanner03 =
    imageData.CultureBanner03.childImageSharp.gatsbyImageData
  const cultureBanner04 =
    imageData.CultureBanner04.childImageSharp.gatsbyImageData
  const cultureBanner05 =
    imageData.CultureBanner05.childImageSharp.gatsbyImageData

  return {
    cultureBanner01,
    cultureBanner02,
    cultureBanner03,
    cultureBanner04,
    cultureBanner05,
  }
}
