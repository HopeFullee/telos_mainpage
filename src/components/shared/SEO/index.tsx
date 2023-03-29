import { useSiteMetadata } from 'hooks/useSiteMetadata'
import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description?: string
}

const SEO = ({ title, description }: Props) => {
  const defaultMetadata = useSiteMetadata()
  const metaDescription = description ?? defaultMetadata.description
  const defaultTitle = defaultMetadata.title
  const currentTitle = title ?? defaultTitle
  const ogTitle = title ? `${defaultTitle} | ${title}` : defaultTitle

  return (
    <Helmet
      htmlAttributes={{
        lang: `ko`,
      }}
      title={currentTitle}
      titleTemplate={title ? `${defaultTitle} | %s` : ''}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: defaultMetadata.siteUrl,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: ogTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: '',
        },
        {
          name: `naver-site-verification`,
          content: '9d93b502da5f2dda7557d571e1a1dca662b04436',
        },
      ]}
    />
  )
}

export default SEO
