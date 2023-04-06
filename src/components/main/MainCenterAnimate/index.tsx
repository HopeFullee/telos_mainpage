import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

import brandGif from 'assets/main_graphic/gif/brand_gif.gif'
import clientGif from 'assets/main_graphic/gif/client_gif.gif'
import contentGif from 'assets/main_graphic/gif/content_gif.gif'
import frontendGif from 'assets/main_graphic/gif/frontend_gif.gif'
import graphicGif from 'assets/main_graphic/gif/graphic_gif.gif'
import backendGif from 'assets/main_graphic/gif/backend_gif.gif'
import managementGif from 'assets/main_graphic/gif/management_gif.gif'
import marketGif from 'assets/main_graphic/gif/market_gif.gif'
import serviceGif from 'assets/main_graphic/gif/service_gif.gif'
import illustGif from 'assets/main_graphic/gif/illust_gif.gif'

import brandStatic from 'assets/main_graphic/static/brand_static.png'
import creativeStatic from 'assets/main_graphic/static/creative_static.png'
import clientStatic from 'assets/main_graphic/static/client_static.png'
import contentStatic from 'assets/main_graphic/static/content_static.png'
import innovationStatic from 'assets/main_graphic/static/innovation_static.png'
import frontendStatic from 'assets/main_graphic/static/frontend_static.png'
import graphicStatic from 'assets/main_graphic/static/graphic_static.png'
import tomorrowStatic from 'assets/main_graphic/static/tomorrow_static.png'
import backendStatic from 'assets/main_graphic/static/backend_static.png'
import managementStatic from 'assets/main_graphic/static/management_static.png'
import challengeStatic from 'assets/main_graphic/static/challenge_static.png'
import marketStatic from 'assets/main_graphic/static/market_static.png'
import passionStatic from 'assets/main_graphic/static/passion_static.png'
import serviceStatic from 'assets/main_graphic/static/service_static.png'
import illustStatic from 'assets/main_graphic/static/illust_static.png'

const RowOne = [
  { staticImage: brandStatic, gifImage: brandGif, alter: '브랜드 디자인' },
  { staticImage: creativeStatic, gifImage: creativeStatic, alter: 'CREATIVE' },
  {
    staticImage: clientStatic,
    gifImage: clientGif,
    alter: '유니티 클라이언트 개발',
  },
  { staticImage: contentStatic, gifImage: contentGif, alter: '콘텐츠 기획' },
  {
    staticImage: innovationStatic,
    gifImage: innovationStatic,
    alter: 'INNOVATION',
  },
  {
    staticImage: frontendStatic,
    gifImage: frontendGif,
    alter: '웹/앱 프론트엔드 개발',
  },
  { staticImage: graphicStatic, gifImage: graphicGif, alter: '3D 그래픽' },
]

const RowTwo = [
  { staticImage: tomorrowStatic, gifImage: tomorrowStatic, alter: 'TOMORROW' },
  {
    staticImage: backendStatic,
    gifImage: backendGif,
    alter: '서버 백엔드 개발',
  },
  { staticImage: managementStatic, gifImage: managementGif, alter: '경영지원' },
  {
    staticImage: challengeStatic,
    gifImage: challengeStatic,
    alter: 'CHALLENGE',
  },
  { staticImage: marketStatic, gifImage: marketGif, alter: '브랜드 마케팅' },
  { staticImage: passionStatic, gifImage: passionStatic, alter: 'PASSION' },
  { staticImage: serviceStatic, gifImage: serviceGif, alter: '서비스 기획' },
  { staticImage: illustStatic, gifImage: illustGif, alter: '2D 그래픽' },
]

const MainCenterAnimate = () => {
  const [animate, setAnimate] = useState<string>('')
  const SLIDER_SPEED = 4000

  const handleSliderEnter = (staticImage: string) => {
    setAnimate(staticImage)
  }

  const handleSliderLeave = () => {
    setAnimate('')
  }

  SwiperCore.use([Autoplay])

  return (
    <section className="flex flex-col items-center justify-center w-full gap-40 sm:gap-60 lg:gap-80 mt-90 sm:mt-150 lg:mt-200">
      <p className="text-center text-18 sm:text-22 lg:text-30 text-c-black-300 px-30 lg:px-50 sm:max-w-800 lg:max-w-1000 break-keep">
        창조를 바라는 고민에 혁신으로 응답하기 위해 끊임없이 도전하고
        연구합니다. 우리는 어제보다 더 변화될 수 있는 새로운 내일을 만들어
        가고자 합니다.
      </p>
      <article className="w-full all:!ease-linear">
        <Swiper
          allowTouchMove={false}
          loop={true}
          speed={SLIDER_SPEED}
          autoplay={{
            delay: 0,
          }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 6.2,
              spaceBetween: 30,
            },
          }}
        >
          {RowOne.map(({ staticImage, gifImage, alter }, idx) => {
            return (
              <SwiperSlide key={`${alter} ${idx}`}>
                <img
                  className="min-w-auto lg:min-w-250"
                  onMouseEnter={() => handleSliderEnter(staticImage)}
                  onMouseLeave={handleSliderLeave}
                  src={animate === staticImage ? gifImage : staticImage}
                  alt={alter}
                />
              </SwiperSlide>
            )
          })}
          {RowOne.map(({ staticImage, gifImage, alter }, idx) => {
            return (
              <SwiperSlide key={`${alter} ${idx}`}>
                <img
                  className="min-w-auto lg:min-w-250"
                  onMouseEnter={() => handleSliderEnter(staticImage)}
                  onMouseLeave={handleSliderLeave}
                  src={animate === staticImage ? gifImage : staticImage}
                  alt={alter}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper
          className="mt-15 sm:mt-40"
          allowTouchMove={false}
          loop={true}
          speed={SLIDER_SPEED}
          autoplay={{ delay: 0, reverseDirection: true }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 6.2,
              spaceBetween: 30,
            },
          }}
        >
          {RowTwo.map(({ staticImage, gifImage, alter }, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  className="min-w-auto lg:min-w-250"
                  onMouseEnter={() => handleSliderEnter(staticImage)}
                  onMouseLeave={handleSliderLeave}
                  src={animate === staticImage ? gifImage : staticImage}
                  alt={alter}
                />
              </SwiperSlide>
            )
          })}
          {RowTwo.map(({ staticImage, gifImage, alter }, idx) => {
            return (
              <SwiperSlide key={idx} className="">
                <img
                  className="min-w-auto lg:min-w-250"
                  onMouseEnter={() => handleSliderEnter(staticImage)}
                  onMouseLeave={handleSliderLeave}
                  src={animate === staticImage ? gifImage : staticImage}
                  alt={alter}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </article>
    </section>
  )
}

export default MainCenterAnimate
