import React from 'react'
import Layout from 'components/layout/Layout'
import MainBanner from 'components/main/MainBanner'
import MainDescription from 'components/main/MainDescription'
import MainCenterAnimate from 'components/main/MainCenterAnimate'
import MainPhotoZone from 'components/main/MainPhotoZone'
import MainBottomAnimate from 'components/main/MainBottomAnimate'
import MainNews from 'components/main/MainNews'
import MainContact from 'components/main/MainContact'
import SEO from 'components/shared/SEO'

const IndexPage = function () {
  return (
    <Layout>
      {/* 필요시 title description props 전달
      description은 옵셔널로 props로 넣지 않을 시 
      Raise your flag to tomorrow 로 고정됨 */}
      <SEO title="HOME" description="메인 페이지" />
      <MainBanner />
      <MainDescription />
      <MainCenterAnimate />
      <MainPhotoZone />
      <MainBottomAnimate />
      <MainNews />
      <MainContact />
    </Layout>
  )
}

export default IndexPage
