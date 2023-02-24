import React, { useState } from 'react'
import { DetailButton } from 'components/shared/Icons'
import ClassDetailModal from './ClassDetailModal'
import { modalStateAtom } from '../../../../store'
import { useRecoilState } from 'recoil'
import { SoftCategoryType } from '../../../../store'

type CategoryProps = {
  subCategory: SoftCategoryType
}

const SubCategory = ({ subCategory }: CategoryProps) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom)
  const [categoryTarget, setCategoryTarget] = useState<number>(0)

  const handleSubCategoryClick = (idx: number) => {
    setCategoryTarget(idx)
    setModalState(true)
  }

  return (
    <>
      <ul>
        {subCategory.map(({ categoryEN, categoryKR, ...rest }, idx) => {
          return (
            <>
              <li
                onClick={() => handleSubCategoryClick(idx)}
                className="flex items-center justify-between cursor-pointer h-150 all:font-open-sans px-65 border-b-1"
              >
                <div>
                  <p className="text-c-black-300 text-36">{categoryEN}</p>
                  <p className="text-c-gray-400 text-18">{categoryKR}</p>
                </div>
                <DetailButton className="w-24 h-24" />
              </li>
            </>
          )
        })}
        {modalState && <ClassDetailModal {...subCategory[categoryTarget]} />}
      </ul>
    </>
  )
}

export default SubCategory
