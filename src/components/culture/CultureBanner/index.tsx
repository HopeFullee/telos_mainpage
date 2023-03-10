import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import './index.scss'
import { useCultureGatsbyImage } from 'hooks/useCultureGatsbyImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import clsx from 'clsx'

const CultureBanner = () => {
  const [isSlide, setIsSlide] = useState(false)

  const {
    cultureBanner01,
    cultureBanner02,
    cultureBanner03,
    cultureBanner04,
    cultureBanner05,
    cultureBanner06,
    cultureBanner07,
  } = useCultureGatsbyImage()

  const imageList = [
    cultureBanner01,
    cultureBanner02,
    cultureBanner03,
    cultureBanner04,
    cultureBanner05,
    cultureBanner06,
    cultureBanner07,
  ]

  SwiperCore.use([Autoplay])

  console.log(isSlide)

  return (
    <section className="flex flex-col justify-between overflow-x-hidden gap-30 mt-50 md:flex-row sm:gap-40 lg:gap-100 sm:mt-70 md:mt-80 lg:mt-100">
      <div>
        <h2 className="px-40 font-bold sm:px-0 sm:ml-50 md:ml-60 lg:ml-100 w-340 lg:w-450 text-30 sm:text-38 lg:text-52 text-c-black-300 break-keep">
          즐거움이 최고의 복지라고 생각합니다.
        </h2>
      </div>

      <div className="pointer-events-none select-none md:max-w-800 lg:max-w-1200 w-full all:!ease-linear">
        <Swiper
          allowTouchMove={false}
          loopedSlides={2}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{ delay: 0, waitForTransition: true }}
          onAutoplayPause={swiper => swiper.autoplay.start()}
          onAutoplayStop={swiper => swiper.autoplay.start()}
          onSlideChange={() => setIsSlide(prev => !prev)}
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
          {imageList.map((image, idx) => {
            return (
              <SwiperSlide key={`CultureBannerKey${idx}`}>
                {/* {({ isVisible }) => (
                  <GatsbyImage
                    className={clsx(
                      isVisible ? 'all:culture-banner-active' : '',
                    )}
                    image={image}
                    alt={`텔로스 베너 이미지 ${idx}`}
                  />
                )} */}
                <GatsbyImage
                  className={clsx(isSlide ? 'culture-banner-active' : '')}
                  image={image}
                  alt={`텔로스 베너 이미지 ${idx}`}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default CultureBanner
