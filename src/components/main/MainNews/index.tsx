import React from 'react'
import { AddButton } from 'components/shared/Icons'

const MainNews = () => {
  return (
    <section className="mx-auto px-30 mt-100 sm:mt-150 lg:mt-200 max-w-1450 sm:px-40 lg:px-50">
      <h4 className="font-bold text-center font-open-sans text-36 sm:text-46 lg:text-52">
        Telos News
      </h4>
      <ul className="mt-20 border-t-2 all:truncate sm:mt-45 border-c-black-300 under:border-b-1 under:border-c-gray-300 under:flex under:justify-between under:px-10 under:py-20 under:sm:px-30 under:lg:px-50 under:sm:py-25 under:lg:py-35 under:items-center">
        <li>
          <div className="w-[90%]">
            <p className="text-16 sm:text-18 lg:text-22 text-c-gray-400">
              2022.09.15
            </p>
            <p className="font-medium text-18 sm:text-22 lg:text-28 text-c-black-300">
              [텔로스 브랜딩] 브랜드 디자이너 모집
            </p>
          </div>
          <AddButton className="h-50 w-50 sm:h-65 sm:w-65 lg:h-75 lg:w-75" />
        </li>
        <li>
          <div className="w-[90%]">
            <p className="text-16 sm:text-18 lg:text-22 text-c-gray-400">
              2022.09.15
            </p>
            <p className="font-medium text-18 sm:text-22 lg:text-28 text-c-black-300">
              [텔로스 브랜딩] 브랜드 디자이너 모집
            </p>
          </div>
          <AddButton className="h-50 w-50 sm:h-65 sm:w-65 lg:h-75 lg:w-75" />
        </li>
        <li>
          <div className="w-[90%]">
            <p className="text-16 sm:text-18 lg:text-22 text-c-gray-400">
              2022.09.15
            </p>
            <p className="font-medium text-18 sm:text-22 lg:text-28 text-c-black-300">
              [텔로스 브랜딩] 브랜드 디자이너 모집
            </p>
          </div>
          <AddButton className="h-50 w-50 sm:h-65 sm:w-65 lg:h-75 lg:w-75" />
        </li>
      </ul>
    </section>
  )
}

export default MainNews
