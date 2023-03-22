import React, { useState, useEffect, useRef } from 'react'
import aboutSoft from 'assets/images/about_soft.png'
import aboutBranding from 'assets/images/about_branding.png'
import Lottie from 'react-lottie-player'
import lottieJson from 'assets/lottie/about_branch.json'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutBranch = () => {
  const [lottieInit, setLottieInit] = useState(false)
  const pRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    AOS.init({
      easing: 'linear',
    })

    if (pRef.current?.classList.contains('aos-animate')) {
      setLottieInit(true)
    }

    document.addEventListener('aos:in', () => {
      setLottieInit(true)
    })

    document.addEventListener('aos:out', () => {
      setLottieInit(false)
    })
  }, [])

  return (
    <section className="w-full">
      <article className="relative">
        <Lottie
          animationData={lottieJson}
          play={lottieInit}
          loop={false}
          segments={[0, 200]}
        />
        <div
          ref={pRef}
          data-aos="init"
          data-aos-offset="100"
          className="absolute font-semibold text-white w-90 sm:w-140 md:w-180 xl:w-200 text-14 sm:text-22 md:text-30 xl:text-36 top-[10%] left-[5%] md:left-[8%]"
        >
          최고의
          <br /> 서비스를 위한 탄탄한 조직력
        </div>
      </article>

      <article className="flex flex-col w-full sm:flex-row">
        <img className="w-full sm:w-[50%]" src={aboutSoft} />
        <img className="w-full sm:w-[50%]" src={aboutBranding} />
      </article>
    </section>
  )
}

export default AboutBranch
