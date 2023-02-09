import React from 'react'
import NewsCategory, { CategoryListProps } from './NewsCategory'
import NewsItem from './NewsItem'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
} & CategoryListProps

const NewsList = function ({
  posts,
  selectedCategory,
  ...rest
}: PostListProps) {
  // 인피니트 스크롤
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  return (
    <div className="mx-auto mt-60 px-50 max-w-1600" ref={containerRef}>
      <NewsCategory selectedCategory={selectedCategory} {...rest} />
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }) => {
          return <NewsItem {...frontmatter} link={slug} key={id} />
        },
      )}
    </div>
  )
}

export default NewsList
