import { MutableRefObject, useRef, useEffect, useState, useMemo } from 'react'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
  more: Function
  isEnd: Boolean
}

const NUMBER_OF_ITEMS_PER_PAGE = 9

const useMoreNewsItems = function (
  selectedCategory: string,
  posts: PostListItemType[],
) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo(
    () =>
      selectedCategory === 'All'
        ? posts
        : posts.filter(
            ({
              node: {
                frontmatter: { categories },
              },
            }: PostListItemType) => categories.includes(selectedCategory),
          ),
    [selectedCategory],
  )

  useEffect(() => setCount(1), [selectedCategory])

  const more = () => {
    setCount(prev => prev + 1)
  }

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
    more,
    get isEnd() {
      return (
        posts.length <=
          postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE)
            .length ||
        postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE).length <
          NUMBER_OF_ITEMS_PER_PAGE
      )
    },
  }
}

export default useMoreNewsItems
