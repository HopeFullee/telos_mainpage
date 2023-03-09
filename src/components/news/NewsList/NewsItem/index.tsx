import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

type NewsItemProps = PostFrontmatterType & { link: string }
const NewsItem = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: NewsItemProps) => {
  return (
    <Link to={link} className="overflow-hidden">
      <article>
        <GatsbyImage
          className="w-full"
          image={gatsbyImageData}
          alt={'텔로스 뉴스 썸네일 이미지'}
        />

        <p className="mt-10 truncate text-18 ssm:text-20 md:text-22">{title}</p>
        <span className="text-16 md:text-18 text-c-gray-400">{date}</span>
      </article>
    </Link>
  )
}

export default NewsItem
