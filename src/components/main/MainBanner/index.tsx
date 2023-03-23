import React from 'react'
import { ArrowDown } from 'components/shared/Icons'
import bannerVideo from 'assets/video/main_page_banner.mp4'

const MainBanner = () => {
  // className={`flex flex-col justify-center bg-[url('assets/images/main_banner.gif')] bg-cover bg-no-repeat w-full h-[100vh]`}
  return (
    <section className="relative w-full overflow-hidden">
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="object-cover h-[40vh] sm:h-[65vh] lg:h-[100vh] w-[100vw]"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="absolute top-[32%] sm:top-[45%] drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] w-full text-white z-10text-white px-30 sm:px-60 lg:px-90">
        <h2 className="font-extrabold leading-tight open-sans text-30 ssm:text-40 sm:text-46 md:text-58">
          <span>Raise your flag </span>
          <span className="inline-block">to tomorrow</span>
        </h2>
        <p className="mt-10 text-18 sm:text-22 lg:text-28 break-keep">
          혁신의 시작을 위해 끝없이 내일로 향하겠습니다.
        </p>
      </div>
      <ArrowDown className="opacity-0 lg:opacity-100 absolute left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] bottom-15 lg:bottom-35" />
    </section>
  )
}

export default MainBanner
