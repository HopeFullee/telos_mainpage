import { MutableRefObject, useRef, useEffect, useState, useMemo } from 'react'
import { newsItemCountStateAtom } from 'store/storeNewsItemCount'
import { useRecoilState } from 'recoil'

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

  // const [count, setCount] = useState<number>(1)
  const [count, setCount] = useRecoilState(newsItemCountStateAtom)

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

  useEffect(() => {
    setCount(count)
  }, [selectedCategory])

  const more = () => {
    setCount(prev => prev + 1)
  }

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
    more,
    get isEnd() {
      return (
        postListByCategory.length <=
        postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE).length
      )
    },
  }
}

export default useMoreNewsItems
