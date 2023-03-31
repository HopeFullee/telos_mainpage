import React from 'react'
import Layout from 'components/layout/Layout'
import { useAboutGatsbyImages } from 'hooks/useAboutGatsbyImage'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

const NotFound = () => {
  const { aboutBannerBg } = useAboutGatsbyImages()

  return (
    <Layout>
      <section className="w-full h-[62vh] all:font-open-sans mb-[-80px] sm:mb-[-120px]">
        <BackgroundImage
          Tag="section"
          fluid={aboutBannerBg}
          className="flex flex-col items-center justify-center w-full h-full text-white all:drop-shadow-lg"
          role="img"
          aria-label="404 Page Background"
        >
          <h4 className="font-bold text-55 sm:text-80">404</h4>
          <p className="text-center text-20 sm:text-26">
            존재하지 않는 페이지입니다.
          </p>
          <Link
            to="/"
            className="px-8 py-2 border-2 sm:px-12 mt-15 sm:mt-25 text-18 sm:text-22"
          >
            홈으로
          </Link>
        </BackgroundImage>
      </section>
    </Layout>
  )
}

export default NotFound
