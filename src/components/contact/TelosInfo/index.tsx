import React, { useEffect } from 'react'

const TelosInfo = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.async = true
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=07aa6482f4033f52d208dcf9b9cddb14&autoload=false'

    document.head.appendChild(script)

    script.onload = () => {
      kakao.maps.load(() => {
        const el = document.getElementById('map')
        const map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(35.818966, 127.147113),
          level: 3,
        })

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(35.818966, 127.147113),
        })

        marker.setMap(map)
      })
    }
  }, [])

  return (
    <section className="mx-auto max-w-1600 px-30 sm:px-50 gap-40 sm:gap-50 flex xl:justify-between items-center flex-col xl:flex-row min-h-[80vh] mt-60 sm:mt-80 xl:mt-60">
      <article className="flex flex-col w-full gap-30 sm:gap-40 md:gap-50 sm:max-w-600 md:max-w-750 all:text-c-black-300">
        <h2 className="font-bold leading-tight font-open-sans text-45 sm:text-60 md:text-75">
          We are creative
          <br />
          TELOS
        </h2>
        <div className="flex flex-col font-semibold text-18 sm:text-20 md:text-24 font-open-sans">
          <p>
            <span className="!text-c-gray-400 inline-block w-90">Tel</span>
            063-714-4660
          </p>
          <p>
            <span className="!text-c-gray-400 inline-block w-90">Fax</span>
            070-7500-6312
          </p>
          <p>
            <span className="!text-c-gray-400 inline-block w-90">E-mail</span>
            telos_inc@naver.com
          </p>
        </div>
        <div className="text-18 sm:text-20 md:text-24">
          <p>
            전라북도 전주시 완산구 팔달로 184, 4층 (관통빌딩)
            <br />
            <span className="font-semibold">(주)텔로스</span>
          </p>
        </div>
      </article>
      <article className="w-full sm:max-w-600 md:max-w-750 drop-shadow-xl">
        <div id="map" className="w-full h-400 md:h-550"></div>
      </article>
    </section>
  )
}

export default TelosInfo
