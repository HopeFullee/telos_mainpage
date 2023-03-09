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
      mirror: true,
      offset: -300,
    })
  }, [])

  return (
    <section data-aos="aos-end" className="all:ease-linear">
      <article
        data-aos="aos-init"
        className="relative flex justify-center h-[200vh] duration-200 z-20 bg-c-orange-300"
      >
        <span className="sticky top-0 leading-[100vh] h-[100vh] duration-75 text-white text-[6em] font-open-sans font-bold">
          Raise your flag to tomorrow
        </span>
      </article>
    </section>
  )
}

export default MainBottomAnimate
