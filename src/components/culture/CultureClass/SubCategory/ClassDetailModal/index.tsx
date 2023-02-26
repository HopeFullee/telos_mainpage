import React from 'react'
import { CloseIcon, DesignIcon } from 'components/shared/Icons'
import './index.scss'
import { CategoryItems, modalStateAtom } from '../../../../../store'
import { useRecoilState } from 'recoil'
import ATypeLayout from './ATypeLayout'
import BTypeLayout from './BTypeLayout'
import CTypeLayout from './CTypeLayout'

import { layoutTypes } from '../../../../../store'

const ClassDetailModal = ({
  rootCategory,
  categoryEN,
  categoryKR,
  description,
  dutyList,
  requirementList,
  preferList,
}: CategoryItems) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom)

  const handleModalClose = () => {
    setModalState(false)
    document.body.classList.remove('overflow-y-hidden')
  }

  const currentLayoutType = layoutTypes[categoryEN]

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center w-full h-full overflow-y-auto bg-c-black-300/50">
      <div onClick={handleModalClose} className="overlay"></div>
      <section className="z-30 h-[100vh] lg:h-auto w-full max-w-900 lg:max-w-1250">
        <div className="flex flex-col bg-c-orange-300 pl-60">
          <button
            onClick={handleModalClose}
            className="z-10 mt-10 ml-auto mr-15"
          >
            <CloseIcon className="w-50 h-50" />
          </button>
          <p className="font-extrabold text-white font-open-sans text-24 mt-[-25px]">
            {rootCategory}
          </p>
          <div className="flex pb-35 pt-25">
            <DesignIcon className="h-85 w-85" />
            <div className="ml-20 mt-[-15px]">
              <h4 className="font-extrabold outline-title font-open-sans text-42 text-c-orange-300">
                {categoryEN}
              </h4>
              <p className="text-white text-18">{categoryKR}</p>
            </div>
          </div>
        </div>

        <article className="bg-white py-50 px-70">
          <p className="font-medium text-18 text-c-black-300">{description}</p>
          {currentLayoutType === 'A' && (
            <ATypeLayout
              dutyList={dutyList.singleList}
              requirementList={requirementList}
              preferList={preferList}
            />
          )}

          {currentLayoutType === 'B' && (
            <BTypeLayout
              dutyList={dutyList.singleList}
              requirementList={requirementList}
              preferList={preferList}
            />
          )}

          {currentLayoutType === 'C' && (
            <CTypeLayout
              dutyList={dutyList.multiList}
              requirementList={requirementList}
              preferList={preferList}
            />
          )}
        </article>
      </section>
    </div>
  )
}

export default ClassDetailModal
