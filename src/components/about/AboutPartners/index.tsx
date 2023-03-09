import React from 'react'
import aboutPartners from 'assets/images/about_partners.png'

const AboutPartners = () => {
  return (
    <section className="flex flex-col gap-10 px-20 mx-auto sm:gap-20 mt-60 sm:mt-80 md:mt-120 lg:mt-180 sm:px-40 lg:px-50 max-w-1600">
      <div className="w-full mx-auto font-semibold text-center under:p-4 sm:under:p-8 text-18 sm:text-26 md:text-32 lg:text-40 ">
        <p className="text-[#CACACA]">Partners</p>
        <p className="leading-snug text-c-black-300 break-keep">
          새로운 내일을 위해 혁신을 함께하는
          <br />
          우리의 파트너입니다.
        </p>
      </div>

      <img
        src={aboutPartners}
        className="transition-all duration-500 ease-in-out saturate-100 lg:saturate-0 hover:saturate-100"
        alt="텔로스 파트너스"
      />
    </section>
  )
}

export default AboutPartners
