import React from 'react'
import { CloseIcon, DesignIcon } from 'components/shared/Icons'
import './index.scss'
import { modalStateAtom } from '../../../../../store'
import { useRecoilState } from 'recoil'
import ListContainer from './ListContainer'

type ClassDetailProps = {
  rootCategory: string
  categoryEN: string
  categoryKR: string
  dutyList: string[]
  requirementList: string[]
  preferList: string[]
}

const ClassDetailModal = ({
  rootCategory,
  categoryEN,
  categoryKR,
  dutyList,
  requirementList,
  preferList,
}: ClassDetailProps) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom)

  const handleModalClose = () => {
    setModalState(false)
  }

  const isRightListSingle = () => {
    if (
      categoryEN === 'Front-end Developer' ||
      categoryEN === 'Back-end Developer'
    ) {
      return true
    } else {
      return
    }
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center w-full h-full bg-c-black-300/50">
      <div onClick={handleModalClose} className="overlay"></div>
      <section className="z-30 w-full max-w-1250">
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
          <div className="flex py-40">
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
          <p className="font-medium text-18 text-c-black-300">
            가치있는 브랜드를 만들고 활기를 불어 넣어주는 역할을 합니다. <br />
            다양한 분야의 비주얼 컨셉을 기획하고 브랜드가 추구하는 아이덴티티를
            시각적으로 표현합니다.
          </p>
          {isRightListSingle() ? (
            <div className="flex justify-between mt-50 gap-150 all:leading-8">
              <div className="flex flex-col w-[50%] gap-50">
                <ListContainer title={'주요업무'} list={dutyList} />
                <ListContainer title={'자격요건'} list={requirementList} />
              </div>
              <div className="flex flex-col w-[50%] gap-50">
                <ListContainer title={'우대사항'} list={preferList} />
              </div>
            </div>
          ) : (
            <div className="flex justify-between mt-50 gap-150 all:leading-8">
              <div className="flex flex-col w-[50%] gap-50">
                <ListContainer title={'주요업무'} list={dutyList} />
              </div>
              <div className="flex flex-col w-[50%] gap-50">
                <ListContainer title={'자격요건'} list={requirementList} />
                <ListContainer title={'우대사항'} list={preferList} />
              </div>
            </div>
          )}
        </article>
      </section>
    </div>
  )
}

export default ClassDetailModal
