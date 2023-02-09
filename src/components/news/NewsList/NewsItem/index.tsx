import React from 'react'

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
  return <div>{title}</div>
}

export default NewsItem
