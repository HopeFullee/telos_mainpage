import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useMainGatsbyImage } from 'hooks/useMainGatsbyImage'
import { Link } from 'gatsby'
const MainContact = () => {
  const { telosContact } = useMainGatsbyImage()
  return (
    <Link to="/contact">
      <BackgroundImage
        Tag="section"
        aria-label="Fullscreen Background"
        fluid={telosContact}
        className="flex-col mx-auto my-100 sm:my-150 lg:my-200 px-50 flex-center max-w-1600 h-260 all:text-center"
      >
        <p className="font-bold text-white font-open-sans text-40 sm:text-50 lg:text-56">
          contact us
        </p>
        <p className="font-medium text-white text-18 sm:text-20 lg:text-22">
          비즈니스의 시작, (주)텔로스와 함께 하세요!
        </p>
      </BackgroundImage>
    </Link>
  )
}

export default MainContact
