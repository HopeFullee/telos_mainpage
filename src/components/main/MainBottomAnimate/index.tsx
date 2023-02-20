import React, { useEffect } from 'react'
import AOS from 'aos'
import clsx from 'clsx'
import 'aos/dist/aos.css'

const MainBottomAnimate = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 2000,
      anchorPlacement: 'top-center',
      initClassName: 'aos-init',
    })
  })

  return (
    <section
      data-aos="fade-up"
      className={clsx(
        AOS ? 'text-white' : 'text-black',
        'flex items-center justify-center w-full h-[100vh] bg-c-orange-300',
      )}
    >
      <article>
        <h2 className={clsx('font-extrabold  font-open-sans text-100 ')}>
          Raise your flag to tomorrow
        </h2>
        {/* <h2
          data-aos="fade-out"
          className="absolute font-extrabold text-c-orange-300 font-open-sans text-100"
        >
          Raise your flag to tomorrow
        </h2> */}
      </article>
    </section>
  )
}

export default MainBottomAnimate
