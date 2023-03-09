import React from 'react'
import { ArrowDown } from 'components/shared/Icons'

const MainBanner = () => {
  return (
    <div
      className={`flex flex-col justify-center bg-[url('assets/images/main_banner.gif')] bg-cover bg-no-repeat w-full h-[100vh]`}
    >
      <div className="text-white px-30 sm:px-60 lg:px-90 mt-top">
        <h2 className="font-extrabold leading-tight open-sans text-40 sm:text-46 lg:text-58">
          Raise your flag to tomorrow
        </h2>
        <p className="mt-10 text-18 sm:text-22 lg:text-28 break-keep">
          혁신의 시작을 위해 끝없이 내일로 향하겠습니다.
        </p>
      </div>

      <ArrowDown className="absolute left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] bottom-30" />
    </div>
  )
}

export default MainBanner
