import React, { useEffect } from 'react'
import AOS from 'aos'
import './index.scss'

const MainBottomAnimate = () => {
  useEffect(() => {
    AOS.init({
      easing: 'linear',
    })
  }, [])
  return (
    <section className="relative min-h-[180vh] w-full select-none">
      <article
        id="animateStart"
        data-aos="aos-init"
        data-aos-anchor-placement="center-center"
        data-aos-duration="200"
        className="absolute items-center w-full h-[180vh] duration-200"
      >
        <span className="px-20 sm:px-50 sticky top-0 flex-center text-center pt-50 leading-tight h-[100vh] duration-75 text-white text-50 sm:text-80 lg:text-100 font-open-sans font-extrabold">
          Raise your flag to tomorrow
        </span>
      </article>
    </section>
  )
}

export default MainBottomAnimate
