import React from 'react'
import aboutPartners from 'assets/images/about_partners.png'

const AboutPartners = () => {
  return (
    <section className="flex flex-col gap-20 px-20 mx-auto mt-60 sm:gap-30 lg:gap-40 max-w-1600 sm:mt-80 md:mt-120 lg:mt-180 sm:px-40 lg:px-50">
      <div className="w-full mx-auto max-w-1400 bg-c-gray-200">
        <p className="p-10 font-semibold text-center truncate text-18 sm:text-26 md:text-32 lg:text-40 text-c-black-300">
          우리와 함께 걸어온 파트너스
        </p>
      </div>
      <img src={aboutPartners} alt="텔로스 파트너스" />
    </section>
  )
}

export default AboutPartners
