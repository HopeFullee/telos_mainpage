import React, { useEffect, useState } from 'react'
import { DetailButton } from 'components/shared/Icons'
import ClassDetailModal from './ClassDetailModal'
import { modalStateAtom } from '../../../../store'
import { useRecoilState } from 'recoil'
import { CategoryType } from '../../../../store'
import { LocationContext } from '@reach/router'

type CategoryProps = {
  subCategory: CategoryType
}

const SubCategory = ({ subCategory }: CategoryProps) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom)
  const [categoryTarget, setCategoryTarget] = useState<number>(0)

  const handleSubCategoryClick = (idx: number) => {
    setCategoryTarget(idx)
    setModalState(true)
    // 모달이 켜져 있는 상태에서만 마우스 스크롤 중지
    if (modalState) document.body.classList.add('overflow-y-hidden')
  }

  useEffect(() => {
    console.log()
  }, [])

  return (
    <>
      <ul>
        {subCategory.map(({ categoryEN, categoryKR }, idx) => {
          return (
            <li
              key={categoryEN}
              onClick={() => handleSubCategoryClick(idx)}
              className="flex items-center justify-between cursor-pointer px-25 h-80 sm:h-120 lg:h-150 all:font-open-sans sm:px-45 lg:px-65 border-b-1"
            >
              <div>
                <p className="text-c-black-300 text-20 sm:text-30 lg:text-36">
                  {categoryEN}
                </p>
                <p className="text-c-gray-400 text-15 lg:text-18">
                  {categoryKR}
                </p>
              </div>
              <DetailButton className="w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
            </li>
          )
        })}
        {modalState && <ClassDetailModal {...subCategory[categoryTarget]} />}
      </ul>
    </>
  )
}

export default SubCategory
