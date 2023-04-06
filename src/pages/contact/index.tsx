import React from 'react'
import Layout from 'components/layout/Layout'
import SEO from 'components/shared/SEO'
import TelosInfo from 'components/contact/TelosInfo'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="CONTACT" description="텔로스 연락쳐" />
      <TelosInfo />
    </Layout>
  )
}

export default ContactPage
