import React from 'react'
import CategoryButton from './CategoryButton'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: Record<string, number>
  itemClickCallback: Function
  resetCount: Function
}

const NewsCategory = ({
  selectedCategory,
  categoryList,
  itemClickCallback,
  resetCount,
}: CategoryListProps) => {
  const handleCategoryItemClick = (name: string) => {
    history.pushState(null, '', `?category=${name}`)
    itemClickCallback(name)
    resetCount()
  }

  return (
    <div className="flex flex-wrap font-semibold gap-15 md:gap-20 sm:text-18 md:text-20 all:font-open-sans text-c-black-300 under:py-6 under:px-15 md:under:py-8 md:under:px-25 under:rounded-3xl">
      {Object.entries(categoryList).map(([name, count]) => {
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
