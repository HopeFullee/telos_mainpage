import { graphql, useStaticQuery } from 'gatsby'
/*
 *  pages/Culture 페이지 베너 슬라이더 이미지 graphQL로 조회해서 반환
 */
export const useCultureGatsbyImage = () => {
  const imageData = useStaticQuery(graphql`
    query culturePageImage {
      CultureBanner01: file(name: { eq: "culture_banner_01" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      CultureBanner02: file(name: { eq: "culture_banner_02" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      CultureBanner03: file(name: { eq: "culture_banner_03" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      CultureBanner04: file(name: { eq: "culture_banner_04" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      CultureBanner05: file(name: { eq: "culture_banner_05" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      CultureBanner06: file(name: { eq: "culture_banner_06" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      CultureBanner07: file(name: { eq: "culture_banner_07" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
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
  const cultureBanner06 =
    imageData.CultureBanner06.childImageSharp.gatsbyImageData
  const cultureBanner07 =
    imageData.CultureBanner07.childImageSharp.gatsbyImageData

  return {
    cultureBanner01,
    cultureBanner02,
    cultureBanner03,
    cultureBanner04,
    cultureBanner05,
    cultureBanner06,
    cultureBanner07,
  }
}
