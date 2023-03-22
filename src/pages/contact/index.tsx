import React from 'react'
import Layout from 'components/layout/Layout'
import SEO from 'components/shared/SEO'
import TelosInfo from 'components/contact/TelosInfo'
import LocationPathChecker from 'components/shared/LocationPathChecker'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="CONTACT" description="연락처 페이지" />
      <LocationPathChecker />
      <TelosInfo />
    </Layout>
  )
}

export default ContactPage
