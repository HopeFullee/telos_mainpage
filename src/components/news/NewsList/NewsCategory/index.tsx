import React from 'react'
import CategoryButton from './CategoryButton'

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
  const handleCategoryItemClick = (name: string) => {
    history.pushState(null, '', `?category=${name}`)
    itemClickCallback(name)
  }

  return (
    <div className="flex flex-wrap gap-20 font-semibold text-20 font-open-sans text-c-black-300 under:py-8 under:px-25 under:rounded-3xl ">
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
