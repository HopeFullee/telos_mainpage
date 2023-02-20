import React, { useState, useMemo, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout/Layout'
import NewsBanner from 'components/news/NewsBanner'
import NewsDescription from 'components/news/NewsDescription'
import NewsList from 'components/news/NewsList'
import { CategoryListProps } from 'components/news/NewsList/NewsCategory'
import queryString from 'query-string'
import SEO from 'components/shared/SEO'

type NewsPageProps = {
  location: {
    search: string
    path: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}
const NewsPage = function ({
  location: { search, path },
  data: {
    allMarkdownRemark: { edges },
  },
}: NewsPageProps) {
  const [currentCategory, setCurrentCategory] = useState('All')

  //1. 쿼리스트링을 가져온다 객체형식
  const parsed = queryString.parse(search)

  //2. 쿼리스트링의 key값에 category가 없다면 'All'로한다
  const categoryQueryString =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          acc: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          acc['All']++
          categories.forEach(key => {
            acc[key] ? acc[key]++ : (acc[key] = 1)
          })
          return acc
        },
        { All: 0 },
      ),
    [],
  )

  useEffect(() => {
    if (categoryQueryString) setCurrentCategory(categoryQueryString)
  }, [categoryQueryString])

  return (
    <Layout>
      <SEO title="NEWS" description="텔로스 뉴스 모음" />
      <NewsBanner />
      <NewsDescription />
      <NewsList
        itemClickCallback={setCurrentCategory}
        selectedCategory={currentCategory}
        categoryList={categoryList}
        posts={edges}
      />
    </Layout>
  )
}

export default NewsPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 470, height: 340, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`
