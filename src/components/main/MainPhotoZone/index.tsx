import React from 'react'
import { useMainImages } from 'hooks/useMainImages'
import { GatsbyImage } from 'gatsby-plugin-image'

const MainPhotoZone = () => {
  const { telosPhoto } = useMainImages()
  return (
    <section className="flex w-full px-40 mt-130 sm:mt-170 lg:mt-250 md:px-100">
      <article className="mx-auto">
        <GatsbyImage image={telosPhoto} alt="텔로스 사내 사진" />
      </article>
    </section>
  )
}

export default MainPhotoZone
