import React from 'react'
import NewsCategory, { CategoryListProps } from './NewsCategory'
import NewsItem from './NewsItem'
import useMoreNewsItems from 'hooks/useMoreNewsItems'
import { MoreButton } from 'components/shared/Icons'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
} & CategoryListProps

const NewsList = function ({
  posts,
  selectedCategory,
  ...rest
}: PostListProps) {
  // 뉴스 아이템 더보기 커스텀 훅
  const { postList, more, isEnd } = useMoreNewsItems(selectedCategory, posts)

  return (
    <section className="mx-auto mt-40 md:mt-60 px-30 sm:px-50 max-w-1600">
      <NewsCategory selectedCategory={selectedCategory} {...rest} />
      <div className="grid mt-45 sm:grid-cols-2 lg:grid-cols-3 sm:mt-60 md:mt-70 lg:mt-80 gap-30 sm:gap-45">
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
      <div className="flex justify-center mt-70 md:mt-110">
        {!isEnd && (
          <button
            className="mb-50 all:w-full all:h-70 all:sm:h-80 all:md:h-100"
            onClick={() => more()}
          >
            <MoreButton />
          </button>
        )}
      </div>
    </section>
  )
}

export default NewsList
