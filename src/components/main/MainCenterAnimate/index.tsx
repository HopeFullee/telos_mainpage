import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

SwiperCore.use([Autoplay])

const MainCenterAnimate = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-200">
      <p className="text-center text-30 text-c-black-300 px-50 max-w-1000 break-keep">
        창조를 바라는 고민에 혁신으로 응답하기 위해 끊임없이 도전하고
        연구합니다. 우리는 어제보다 더 변화될 수 있는 새로운 내일을 만들어
        가고자 합니다.
      </p>
      <article className="w-full">
        <Swiper
          className="all:!ease-linear"
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          speed={3000}
          autoplay={{ delay: 0 }}
        >
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 2</SwiperSlide>
          <SwiperSlide>slide 3</SwiperSlide>
          <SwiperSlide>slide 4</SwiperSlide>
          <SwiperSlide>slide 5</SwiperSlide>
          <SwiperSlide>slide 6</SwiperSlide>
          <SwiperSlide>slide 7</SwiperSlide>
          <SwiperSlide>slide 8</SwiperSlide>
          <SwiperSlide>slide 9</SwiperSlide>
          <SwiperSlide>slide 10</SwiperSlide>
        </Swiper>
      </article>
    </section>
  )
}

export default MainCenterAnimate
