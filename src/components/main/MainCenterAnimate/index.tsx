import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

import animate01 from 'assets/animation_gif/brand_01.gif'
import animate02 from 'assets/animation_gif/creative_02.png'
import animate03 from 'assets/animation_gif/client_03.gif'
import animate04 from 'assets/animation_gif/content_04.gif'
import animate05 from 'assets/animation_gif/innovation_05.png'
import animate06 from 'assets/animation_gif/frontend_06.gif'
import animate07 from 'assets/animation_gif/graphic_07.gif'
import animate08 from 'assets/animation_gif/tomorrow_08.png'
import animate09 from 'assets/animation_gif/backend_09.gif'
import animate10 from 'assets/animation_gif/management_10.gif'
import animate11 from 'assets/animation_gif/challenge_11.png'
import animate12 from 'assets/animation_gif/market_12.gif'
import animate13 from 'assets/animation_gif/passion_13.png'
import animate14 from 'assets/animation_gif/service_14.gif'
import animate15 from 'assets/animation_gif/illust_15.gif'

const RowOne = [
  <img src={animate01} alt="Branding" className=".gif-item" />,
  <img src={animate02} alt="Creative" className=".gif-item" />,
  <img src={animate03} alt="Client" className=".gif-item" />,
  <img src={animate04} alt="Content" className=".gif-item" />,
  <img src={animate05} alt="Innovation" className=".gif-item" />,
  <img src={animate06} alt="Frontend" className=".gif-item" />,
  <img src={animate07} alt="Graphic" className=".gif-item" />,
  <img src={animate01} alt="Branding" className=".gif-item" />,
  <img src={animate02} alt="Creative" className=".gif-item" />,
  <img src={animate03} alt="Client" className=".gif-item" />,
  <img src={animate04} alt="Content" className=".gif-item" />,
  <img src={animate05} alt="Innovation" className=".gif-item" />,
  <img src={animate06} alt="Frontend" className=".gif-item" />,
  <img src={animate07} alt="Graphic" className=".gif-item" />,
  <img src={animate01} alt="Branding" className=".gif-item" />,
  <img src={animate02} alt="Creative" className=".gif-item" />,
  <img src={animate03} alt="Client" className=".gif-item" />,
  <img src={animate04} alt="Content" className=".gif-item" />,
  <img src={animate05} alt="Innovation" className=".gif-item" />,
  <img src={animate06} alt="Frontend" className=".gif-item" />,
  <img src={animate07} alt="Graphic" className=".gif-item" />,
]

const RowTwo = [
  <img src={animate08} alt="Tomorrow" />,
  <img src={animate09} alt="Backend" />,
  <img src={animate10} alt="Management" />,
  <img src={animate11} alt="Challenge" />,
  <img src={animate12} alt="Market" />,
  <img src={animate13} alt="Passion" />,
  <img src={animate14} alt="Service" />,
  <img src={animate15} alt="Illust" />,
  <img src={animate08} alt="Tomorrow" />,
  <img src={animate09} alt="Backend" />,
  <img src={animate10} alt="Management" />,
  <img src={animate11} alt="Challenge" />,
  <img src={animate12} alt="Market" />,
  <img src={animate13} alt="Passion" />,
  <img src={animate14} alt="Service" />,
  <img src={animate15} alt="Illust" />,
]

const MainCenterAnimate = () => {
  SwiperCore.use([Autoplay])

  return (
    <section className="flex flex-col items-center justify-center w-full gap-40 sm:gap-60 lg:gap-80 mt-110 sm:mt-150 lg:mt-200">
      <p className="text-center text-18 sm:text-22 lg:text-30 text-c-black-300 px-30 lg:px-50 sm:max-w-800 lg:max-w-1000 break-keep">
        창조를 바라는 고민에 혁신으로 응답하기 위해 끊임없이 도전하고
        연구합니다. 우리는 어제보다 더 변화될 수 있는 새로운 내일을 만들어
        가고자 합니다.
      </p>

      <article className="w-full all:!ease-linear">
        <Swiper
          allowTouchMove={false}
          loop={true}
          speed={4000}
          autoplay={{ delay: 0 }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
          }}
        >
          {RowOne.map((gif, idx) => {
            return <SwiperSlide key={idx}>{gif}</SwiperSlide>
          })}
        </Swiper>
        <Swiper
          className="mt-15 sm:mt-30"
          allowTouchMove={false}
          loop={true}
          speed={4000}
          autoplay={{ delay: 0, reverseDirection: true }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}
        >
          {RowTwo.map((gif, idx) => {
            return (
              <SwiperSlide key={idx} className="">
                {gif}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </article>
    </section>
  )
}

export default MainCenterAnimate
