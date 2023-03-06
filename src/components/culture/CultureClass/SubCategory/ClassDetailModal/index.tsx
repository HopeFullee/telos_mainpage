import React, { useEffect, useRef, useState } from 'react'
import { CloseIcon, DesignIcon } from 'components/shared/Icons'
import './index.scss'
import { CategoryItems, modalStateAtom } from '../../../../../store'
import { useRecoilState } from 'recoil'
import ATypeLayout from './ATypeLayout'
import BTypeLayout from './BTypeLayout'
import CTypeLayout from './CTypeLayout'
import { layoutTypes } from '../../../../../store'
import clsx from 'clsx'
import ClassIcon from './ClassIcon'

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
  const [isModalOverFlow, setIsModalOverFlow] = useState(false)
  const [isModalNotOverFlow, setIsModalNotOverFlow] = useState(false)

  const handleModalClose = () => {
    setModalState(false)
    document.body.classList.remove('overflow-y-hidden')
  }

  const currentLayoutType = layoutTypes[categoryEN]

  const modalRef = React.useRef<HTMLDivElement>(null)

  const useWindowResize = (modalRef: any) => {
    useEffect(() => {
      const handleResize = () => {
        if (modalRef.current.clientHeight > window.innerHeight) {
          setIsModalOverFlow(true)
          console.log('true??????')
        }
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  }

  useWindowResize(modalRef)

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center w-full h-full overflow-y-auto bg-c-black-300/50">
      <div onClick={handleModalClose} className="overlay"></div>
      <section
        ref={modalRef}
        className={clsx(
          isModalOverFlow ? 'h-full' : 'h-auto',
          'z-30 w-full max-w-600 md:max-w-900 lg:max-w-1250',
        )}
      >
        <div className="flex flex-col w-full pl-40 bg-c-orange-300 sm:pl-60">
          <button
            onClick={handleModalClose}
            className="z-10 mt-10 ml-auto mr-15"
          >
            <CloseIcon className="w-50 h-50" />
          </button>
          <p className="font-extrabold text-white font-open-sans text-24 mt-[-25px]">
            {rootCategory}
          </p>
          <div className="flex flex-col items-start sm:flex-row md:items-center pb-25 sm:pb-35 pt-15 sm:pt-25">
            <ClassIcon className={categoryEN} />
            <div className="sm:ml-20 sm:mt-[-10px] md:mt-[-15px] pr-40 sm:pr-60">
              <h4 className="font-extrabold outline-title font-open-sans text-32 md:text-42 text-c-orange-300">
                {categoryEN}
              </h4>
              <p className="mt-5 text-white md:mt-auto text-18">{categoryKR}</p>
            </div>
          </div>
        </div>

        <article className="px-40 bg-white py-50 sm:px-70 all:break-keep">
          <p className="font-medium text-18 text-c-black-300 ">{description}</p>
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
