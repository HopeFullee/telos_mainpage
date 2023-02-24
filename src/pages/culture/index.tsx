import React from 'react'
import CultureBanner from 'components/culture/CultureBanner'
import CultureDescription from 'components/culture/CultureDescription'
import CultureClass from 'components/culture/CultureClass'
import Layout from 'components/layout/Layout'
import SEO from 'components/shared/SEO'
const CulturePage = () => {
  return (
    <Layout>
      <SEO title="CULTURE" description="텔로스 사내 문화" />
      <CultureBanner />
      <CultureDescription />
      <CultureClass />
    </Layout>
  )
}

export default CulturePage
