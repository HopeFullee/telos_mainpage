import { MutableRefObject, useRef, useEffect, useState, useMemo } from 'react'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
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

  const observer: IntersectionObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return
      setCount(value => value + 1)
      observer.disconnect()
    },
  )

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
