import React, { useEffect, useState } from 'react'
import { DetailButton } from 'components/shared/Icons'
import ClassDetailModal from './ClassDetailModal'
import { modalStateAtom } from '../../../../store/storeClass'
import { useRecoilState } from 'recoil'
import { CategoryType } from '../../../../store/storeClass'

type CategoryProps = {
  subCategory: CategoryType
}

const SubCategory = ({ subCategory }: CategoryProps) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom)
  const [classTarget, setClassTarget] = useState<number>(0)

  // ClassDetailModal 모달 렌더 및 스크롤 중단
  const handleSubCategoryClick = (idx: number) => {
    setClassTarget(idx)
    setModalState(true)
    document.body.classList.add('overflow-y-hidden')
  }

  return (
    <>
      <ul>
        {subCategory.map(({ categoryEN, categoryKR }, idx) => {
          return (
            <li
              key={categoryEN}
              onClick={() => handleSubCategoryClick(idx)}
              className="flex items-center justify-between cursor-pointer px-25 h-80 sm:h-120 lg:h-150 sm:px-45 lg:px-65 border-b-1"
            >
              <div>
                <p className="text-c-black-300 text-20 sm:text-30 lg:text-36 font-open-sans">
                  {categoryEN}
                </p>
                <p className="text-c-gray-400 text-14 lg:text-19">
                  {categoryKR}
                </p>
              </div>
              <DetailButton className="w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
            </li>
          )
        })}
        {modalState && <ClassDetailModal {...subCategory[classTarget]} />}
      </ul>
    </>
  )
}

export default SubCategory
