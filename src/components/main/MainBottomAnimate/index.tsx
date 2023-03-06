import React, { useEffect } from 'react'
import AOS from 'aos'
import './index.scss'

const MainBottomAnimate = () => {
  useEffect(() => {
    AOS.init({
      easing: 'linear',
      duration: 500,
      anchorPlacement: 'center-center',
      initClassName: 'aos-init',
    })
  })

  return (
    // <section
    //   data-aos="animate-slogun"
    //   className="flex items-center justify-center w-full h-[110vh] sm:h-[130vh] lg:h-[150vh] px-30 sm:px-40 lg:px-50"
    // >
    //   <article>
    //     <h2 className="font-extrabold text-center font-open-sans text-40 sm:text-60 md:text-80 lg:text-100">
    //       Raise your flag to tomorrow
    //     </h2>
    //   </article>
    // </section>
    <section className="all:ease-linear">
      <article
        data-aos="animate-slogun-bg"
        className="relative flex justify-center h-[250vh] duration-200 z-20 bg-c-orange-300"
      >
        <span
          data-aos="animate-slogun"
          className="sticky top-0 leading-[100vh] h-[100vh] duration-75 text-white text-[6em]"
        >
          Raise your flag to tomorrow
        </span>
      </article>
    </section>
  )
}

export default MainBottomAnimate
