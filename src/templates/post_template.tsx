import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/layout/Layout'
import { ArrowRight } from 'components/shared/Icons'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from 'components/shared/SEO'

type PostTemplateProps = {
  data: {
    markdown: {
      excerpt: string
      frontmatter: {
        title: string
        date: string
        categories: string
        thumbnail: {
          childImageSharp: {
            gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
          }
        }
        templateBg: boolean
      }
      html: string
    }
  }
  pageContext: {
    next?: {
      slug: string
      title: string
      categories: string
    }
  }
}

const PostTemplate = function ({
  data: { markdown },
  pageContext: { next },
}: PostTemplateProps) {
  const { frontmatter, html } = markdown

  return (
    <Layout>
      <SEO title={frontmatter.title} description={markdown.excerpt} />
      <section className="w-full mx-auto px-15 mt-60 max-w-1440 sm:mt-80 md:mt-100 lg:mt-120">
        <article>
          <div className="p-10 border-t-2 border-b-2 border-b-c-gray-300 border-t-c-black-300 text-15 sm:p-15 md:p-20 sm:text-18 md:text-20 lg:text-22 text-c-gray-400">
            <p>[{frontmatter.categories}]</p>
            <h1 className="break-keep text-17 ssm:text-22 sm:text-28 md:text-36 lg:text-46 text-c-black-300">
              {frontmatter.title}
            </h1>
            <p>{frontmatter.date}</p>
          </div>
          {frontmatter.templateBg && (
            <div className="px-10 ssm:px-20 mt-30 sm:mt-50">
              <GatsbyImage
                className="w-full h-full"
                imgStyle={{ objectFit: 'contain' }}
                image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                alt={'텔로스 뉴스 상세정보 이미지'}
              />
            </div>
          )}

          <div
            className="mt-30 sm:mt-50"
            id="markdown-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <div className="flex items-center justify-between px-10 font-medium py-15 sm:px-20 sm:py-25 mt-30 sm:mt-50 border-y-2 border-c-gray-300 text-16 sm:text-21 lg:text-25 text-c-black-200 all:truncate">
            <Link to="/news/">목록보기</Link>

            {next && (
              <Link
                to={next.slug}
                className="flex items-center sm:gap-5 lg:gap-8"
              >
                <span className="max-w-150 sm:max-w-350 lg:max-w-500">{`[${next.categories[0]}]${next.title}`}</span>
                <ArrowRight className="w-16 h-16 sm:h-21 sm:w-21 lg:w-25 lg:h-25" />
              </Link>
            )}
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    markdown: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      excerpt(pruneLength: 100)
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        categories
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 100
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        templateBg
      }
    }
  }
`
