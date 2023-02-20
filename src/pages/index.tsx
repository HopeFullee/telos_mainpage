import React, { useRef, useEffect } from 'react'
import Layout from 'components/layout/Layout'
import MainBanner from 'components/main/MainBanner'
import MainDescription from 'components/main/MainDescription'
import MainCenterAnimate from 'components/main/MainCenterAnimate'
import MainPhotoZone from 'components/main/MainPhotoZone'
import MainBottomAnimate from 'components/main/MainBottomAnimate'

const IndexPage = function () {
  return (
    <Layout>
      <MainBanner />
      <MainDescription />
      <MainCenterAnimate />
      <MainPhotoZone />
      <MainBottomAnimate />
    </Layout>
  )
}

export default IndexPage
