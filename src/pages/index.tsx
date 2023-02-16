import React, { useRef, useEffect } from 'react'
import Layout from 'components/layout/Layout'
import MainBanner from 'components/main/MainBanner'
import MainDescription from 'components/main/MainDescription'
import MainCenterAnimate from 'components/main/MainCenterAnimate'
import { RecoilRoot } from 'recoil'

const IndexPage = function () {
  return (
    <RecoilRoot>
      <Layout>
        <MainBanner />
        <MainDescription />
        <MainCenterAnimate />
      </Layout>
    </RecoilRoot>
  )
}

export default IndexPage
