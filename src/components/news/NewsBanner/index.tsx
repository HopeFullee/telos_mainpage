import React from 'react'
import useNewsBanner from 'hooks/useNewsBanner'
import { GatsbyImage } from 'gatsby-plugin-image'

const NewsBanner = function () {
  const img = useNewsBanner()
  return (
    <div className="w-full">
      <GatsbyImage image={img} alt={'텔로스 뉴스 베너 이미지'} />
    </div>
  )
}

export default NewsBanner
