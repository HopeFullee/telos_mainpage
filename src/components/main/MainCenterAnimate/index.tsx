import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

import {
  AnimateBrand,
  AnimateCreative,
  AnimateClient,
  AnimateContent,
  AnimateFrontend,
  AnimateTomorrow,
  AnimateInnovation,
  AnimateGraphic,
  AnimateBackend,
  AnimateProduct,
  AnimateChallenge,
  AnimateMarket,
  AnimatePassion,
  AnimateService,
  AnimateIllust,
} from 'components/shared/Icons'

const RowOne = [
  <AnimateBrand />,
  <AnimateCreative />,
  <AnimateClient />,
  <AnimateContent />,
  <AnimateInnovation />,
  <AnimateFrontend />,
  <AnimateGraphic />,
  <AnimateBrand />,
  <AnimateCreative />,
  <AnimateClient />,
  <AnimateContent />,
  <AnimateInnovation />,
  <AnimateFrontend />,
  <AnimateGraphic />,
  <AnimateBrand />,
  <AnimateCreative />,
  <AnimateClient />,
  <AnimateContent />,
  <AnimateInnovation />,
  <AnimateFrontend />,
  <AnimateGraphic />,
]

const RowTwo = [
  <AnimateTomorrow />,
  <AnimateBackend />,
  <AnimateProduct />,
  <AnimateChallenge />,
  <AnimateMarket />,
  <AnimatePassion />,
  <AnimateService />,
  <AnimateIllust />,
  <AnimateTomorrow />,
  <AnimateBackend />,
  <AnimateProduct />,
  <AnimateChallenge />,
  <AnimateMarket />,
  <AnimatePassion />,
  <AnimateService />,
  <AnimateIllust />,
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
          speed={1500}
          autoplay={{ delay: 0 }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            400: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            500: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 150,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 150,
            },
            1400: {
              slidesPerView: 7,
              spaceBetween: 100,
            },
            1600: {
              slidesPerView: 8,
              spaceBetween: 80,
            },
          }}
        >
          {RowOne.map((svg, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="under:h-120 under:sm:h-180 under:lg:h-220"
              >
                {svg}
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper
          className="mt-15 sm:mt-30"
          allowTouchMove={false}
          loop={true}
          speed={1500}
          autoplay={{ delay: 0, reverseDirection: true }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            400: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            500: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 150,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 150,
            },
            1400: {
              slidesPerView: 7,
              spaceBetween: 100,
            },
            1600: {
              slidesPerView: 8,
              spaceBetween: 80,
            },
          }}
        >
          {RowTwo.map((svg, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="under:h-120 under:sm:h-180 under:lg:h-220"
              >
                {svg}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </article>
    </section>
  )
}

export default MainCenterAnimate
