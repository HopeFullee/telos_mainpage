import React from 'react'
import CategoryButton from './CategoryButton'
import { useSetRecoilState } from 'recoil'
import { newsItemCountStateAtom } from 'store/storeNewsItemCount'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: Record<string, number>
  itemClickCallback: Function
}

const NewsCategory = ({
  selectedCategory,
  categoryList,
  itemClickCallback,
}: CategoryListProps) => {
  const setNewsItemCountState = useSetRecoilState(newsItemCountStateAtom)

  const handleCategoryItemClick = (name: string) => {
    // 클릭한 카테고리의 이름으로 /pages/news에 선언한 Recoil 변수에 저장
    itemClickCallback(name)

    // 클릭한 카테고의 이름으로 쿼리스트링 재설정
    history.pushState(null, '', `?category=${name}`)

    // 카테고리 클릭 시 리스트 더보기 Recoil 전역 변수 초기화
    setNewsItemCountState(1)
  }

  return (
    <div className="flex flex-wrap font-semibold gap-15 md:gap-20 sm:text-18 md:text-20 all:font-open-sans text-c-black-300 under:py-6 under:px-15 md:under:py-8 md:under:px-25 under:rounded-3xl">
      {Object.entries(categoryList).map(([name]) => {
        return (
          <CategoryButton
            onClick={() => handleCategoryItemClick(name)}
            active={name === selectedCategory}
            key={name}
          >
            <span>{name}</span>
          </CategoryButton>
        )
      })}
    </div>
  )
}

export default NewsCategory
