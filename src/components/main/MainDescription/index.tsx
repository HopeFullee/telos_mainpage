import React, { useEffect, useRef } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useMainGatsbyImage } from 'hooks/useMainGatsbyImage'
import { useSetRecoilState } from 'recoil'
import headerStateAtom from 'store/storeHeader'

const MainDescription = () => {
  const { telosSoft, telosBranding, telosSoftHover, telosBrandingHover } =
    useMainGatsbyImage()

  const setHeaderState = useSetRecoilState(headerStateAtom)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setHeaderState('off')
        } else {
          setHeaderState('on')
        }
      },
      {
        rootMargin: '0px 0px -150px 0px',
      },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
  }, [sectionRef])

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center pt-60 header-anchor px-30 sm:px-40 gap-30 sm:gap-50 lg:gap-70 sm:pt-100 lg:pt-140 lg:px-50 all:break-keep"
    >
      <div className="text-center text-c-black-300">
        <h3 className="font-bold leading-tight sm:leading-normal font-open-sans text-36 sm:text-46 lg:text-52">
          We are TELOS
        </h3>
        <p className="mt-10 lg:mt-20 text-18 sm:text-22 lg:text-30">
          우리는 세상이 필요로 하는 변화를 캐치하고, 혁신의 시작을 향해
          나아갑니다.
        </p>
      </div>

      <div className="flex flex-col items-center gap-50 md:gap-40 md:items-start lg:gap-50 md:flex-row">
        <article className="flex flex-col items-center cursor-pointer max-w-550 md:max-w-750">
          <div className="relative under:hover:opacity-100">
            <GatsbyImage
              image={telosSoftHover}
              alt={'텔로스 소프트 이미지'}
              className="!absolute z-10 transition-all duration-300 ease-in-out opacity-0"
            />
            <GatsbyImage image={telosSoft} alt={'텔로스 소프트 이미지'} />
          </div>
          <div className="w-full px-10 leading-relaxed text-center py-15 sm:py-25 lg:py-35 bg-c-gray-200 ">
            <h4 className="font-bold text-20 sm:text-22 lg:text-28 text-c-black-300">
              텔로스 소프트
            </h4>
            <p className="font-medium text-17 sm:text-19 lg:text-25 text-c-gray-400">
              우리가 꿈꾸는 새로운 세상을 향해 나아갑니다.
            </p>
          </div>
        </article>

        <article className="flex flex-col items-center cursor-pointer max-w-550 md:max-w-750">
          <div className="relative under:hover:opacity-100">
            <GatsbyImage
              image={telosBrandingHover}
              alt={'텔로스 브랜딩 이미지'}
              className="!absolute z-10 transition-all duration-300 ease-in-out opacity-0"
            />
            <GatsbyImage image={telosBranding} alt={'텔로스 브랜딩 이미지'} />
          </div>
          <div className="w-full px-10 leading-relaxed text-center py-15 sm:py-25 lg:py-35 bg-c-gray-200 ">
            <h4 className="font-bold text-20 sm:text-22 lg:text-28 text-c-black-300">
              텔로스 브랜딩
            </h4>
            <p className="font-medium text-17 sm:text-19 lg:text-25 text-c-gray-400">
              우리는 브랜드가 세상에 탄생될 수 있도록 돕습니다.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default MainDescription
