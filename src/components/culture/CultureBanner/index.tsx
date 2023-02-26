import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

import { useCultureGatsbyImage } from 'hooks/useCultureGatsbyImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const CultureBanner = () => {
  const { cultureBanner01, cultureBanner02, cultureBanner03, cultureBanner04 } =
    useCultureGatsbyImage()

  SwiperCore.use([Autoplay])
  return (
    <section className="flex flex-col justify-between overflow-x-hidden gap-30 mt-50 md:flex-row sm:gap-40 lg:gap-100 sm:mt-70 md:mt-80 lg:mt-100">
      <div>
        <h2 className="px-40 font-bold sm:px-0 sm:ml-50 md:ml-60 lg:ml-100 w-340 lg:w-450 text-30 sm:text-38 lg:text-52 text-c-black-300 break-keep">
          즐거움이 최고의 복지라고 생각합니다.
        </h2>
      </div>

      <div className="md:max-w-800 lg:max-w-1200 w-full all:!ease-linear">
        <Swiper
          allowTouchMove={false}
          loopedSlides={1}
          slidesPerView={1}
          loop={true}
          speed={6000}
          autoplay={{ delay: 0, waitForTransition: true }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              spaceBetween: 10,
            },
            600: {
              spaceBetween: 15,
            },
            900: {
              spaceBetween: 17,
            },
            1100: {
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide>
            <GatsbyImage image={cultureBanner01} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <GatsbyImage image={cultureBanner02} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <GatsbyImage image={cultureBanner03} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <GatsbyImage image={cultureBanner04} alt="asd" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default CultureBanner
