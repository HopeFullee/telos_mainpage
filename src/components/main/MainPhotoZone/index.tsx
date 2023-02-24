import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import telosPhoto from 'assets/images/telos_photo.png'

const MainPhotoZone = () => {
  return (
    <section className="flex w-full px-40 mt-130 sm:mt-170 lg:mt-250 md:px-100">
      <article className="mx-auto">
        <img src={telosPhoto} alt="텔로스 사내 사진" />
      </article>
    </section>
  )
}

export default MainPhotoZone
