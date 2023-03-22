import React, { useState, useEffect } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useMainGatsbyImage } from 'hooks/useMainGatsbyImage'
import { Link } from 'gatsby'
const MainContact = () => {
  const [hydrateBg, setHydrateBg] = useState(undefined)

  const { telosContact } = useMainGatsbyImage()

  useEffect(() => {
    setHydrateBg(telosContact)
  }, [])

  return (
    <Link to="/contact">
      {telosContact && (
        <BackgroundImage
          Tag="section"
          aria-label="Fullscreen Background"
          fluid={hydrateBg}
          className="flex-col mx-auto mt-130 sm:mt-150 lg:mb-170 lg:mt-300 px-50 flex-center max-w-1600 h-180 sm:h-220 lg:h-260 all:text-center"
        >
          <p className="font-bold text-white leading-[1] sm:leading-normal font-open-sans text-40 sm:text-50 lg:text-56">
            contact us
          </p>
          <p className="mt-10 font-medium text-white sm:mt-none text-18 sm:text-20 lg:text-22">
            비즈니스의 시작, (주)텔로스와 함께 하세요!
          </p>
        </BackgroundImage>
      )}
    </Link>
  )
}

export default MainContact
