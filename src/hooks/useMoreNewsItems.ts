import { useEffect, useMemo } from 'react'
import { newsItemCountStateAtom } from 'store/storeNewsItemCount'
import { useRecoilState } from 'recoil'

// 회차별 보여줄 뉴스 아이템의 최대 갯수
const NUMBER_OF_ITEMS_PER_PAGE = 9

const useMoreNewsItems = function (
  selectedCategory: string,
  posts: PostListItemType[],
) {
  // 더보기 누른 횟수 Recoil에 저장
  const [count, setCount] = useRecoilState(newsItemCountStateAtom)

  // 현제 선택된 카테고리 명에 맞는 뉴스 아이템(포스트) 생성
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

  // newsList 랜더 시 Recoil 에 저장되었던 더보기 횟수 복구
  // *** 단 /NewsList/NewsCategory 에 작성한 카테고리 버튼 클릭 시 초기화 ***
  useEffect(() => {
    setCount(count)
  }, [])

  // 실행 시 Recoil 전역 변수에 더보기 누른 횟수 갱신
  const more = () => {
    setCount(prev => prev + 1)
  }

  return {
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
