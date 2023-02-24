import React from 'react'
import { useNewsGatsbyImage } from 'hooks/useNewsGatsbyImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const NewsBanner = function () {
  const { newsBanner } = useNewsGatsbyImage()
  return (
    <div className="w-full">
      <GatsbyImage image={newsBanner} alt={'텔로스 뉴스 베너 이미지'} />
    </div>
  )
}

export default NewsBanner
