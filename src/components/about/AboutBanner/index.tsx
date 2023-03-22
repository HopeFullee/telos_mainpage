import React, { useState, useEffect } from 'react'
import { useAboutGatsbyImages } from 'hooks/useAboutGatsbyImage'
import BackgroundImage from 'gatsby-background-image'

const AboutBanner = () => {
  const [hydrateBg, setHydrateBg] = useState(undefined)

  const { aboutBannerBg } = useAboutGatsbyImages()

  useEffect(() => {
    setHydrateBg(aboutBannerBg)
  }, [])

  return (
    <section className="w-full min-h-[95vh] h-[95vh]">
      <BackgroundImage
        Tag="article"
        className="w-full h-full flex-center under:text-white px-30 sm:px-40 lg:px-50"
        fluid={hydrateBg}
        role="img"
        aria-label="AboutPage Banner Background"
      >
        <div className="flex flex-col justify-center gap-10 sm:gap-20 all:drop-shadow-lg lg:flex lg:flex-row lg:gap-130">
          <h2 className="mt-10 font-extrabold leading-snug w-240 sm:w-370 lg:w-440 text-35 sm:text-55 lg:text-65 font-open-sans">
            INNOVATION begins with a bit of DIFFERENCE
          </h2>
          <div className="leading-wide sm:text-20 lg:text-24 font-light max-w-840 under:mt-[1em] break-keep pb-50 lg:pb-0">
            <p>
              지우개 연필, 접는 자전거, 주름 빨대, 종이 가방... 아주 작은 차이는
              혁신으로 나타납니다. 현대에는 수 많은 제품들과 서비스들이
              넘쳐나고, 또 매우 빠르게 변화하고 있습니다.
            </p>
            <p>
              Telos는 ‘조금 더 독특한, 조금 더 재밌는, 조금 더 편리한’이란
              생각을 바탕으로 더욱 더 차별화되고 세련된 서비스와 브랜드를
              만들어내는 창조적인 기업입니다.
            </p>
            <p>
              다양한 분야에서의 도전, 다양한 분야의 융합 속에서 함께 일하고
              배우며 좋은 가치를 만들어 내는게 우리의 핵심가치입니다.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default AboutBanner
