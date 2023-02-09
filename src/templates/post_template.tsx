import React from 'react'
import { graphql } from 'gatsby'

type PostTemplateProps = {
  data: {
    markdown: {
      excerpt: string
      frontmatter: {
        title: string
        date: string
      }
      html: string
    }
  }
}

const PostTemplate = function ({ data: { markdown } }: PostTemplateProps) {
  const { frontmatter, html } = markdown

  return (
    <>
      <div>{frontmatter.title}</div>
      <div>{frontmatter.date}</div>
      <div
        id="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    markdown: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      excerpt(pruneLength: 100)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD , YYYY")
      }
    }
  }
`
