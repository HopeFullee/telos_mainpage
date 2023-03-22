import React, { useEffect } from 'react'
import mainPhoto01 from 'assets/images/main_photo_01.png'
import mainPhoto02 from 'assets/images/main_photo_02.png'
import mainPhoto03 from 'assets/images/main_photo_03.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MainPhotoZone = () => {
  return (
    <section className="flex flex-col w-full px-40 overflow-y-hidden mt-120 sm:mt-170 lg:mt-250 md:px-100">
      <article className="flex justify-center gap-[5%]">
        <div className="mt-[35%]">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="500"
            src={mainPhoto02}
            alt="VR 열정맨"
          />
        </div>
        <div>
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="500"
            src={mainPhoto01}
            alt="텔로스 얼짱"
          />
        </div>
      </article>
      <article className="flex justify-end mt-[6%]">
        <div className="w-[50%] mr-[7%]">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="500"
            src={mainPhoto03}
            alt="텔로스 회의"
          />
        </div>
      </article>
    </section>
  )
}

export default MainPhotoZone
