import React, { useMemo, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout/Layout'
import NewsBanner from 'components/news/NewsBanner'
import NewsDescription from 'components/news/NewsDescription'
import NewsList from 'components/news/NewsList'
import { CategoryListProps } from 'components/news/NewsList/NewsCategory'
import { useRecoilState } from 'recoil'
import { currentCategoryStateAtom } from 'store/storeCurrentCategory'
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
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}: NewsPageProps) {
  // 마지막으로 머물렀던 카테고리를 Recoil로 저장
  const [currentCategory, setCurrentCategory] = useRecoilState(
    currentCategoryStateAtom,
  )

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
      <SEO title="NEWS" description="뉴스 페이지" />
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
/*
 *  contents 내부 모든 마크다운 파일 정보 불러옴
 */
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
function shouldUpdateScroll(arg0: boolean) {
  throw new Error('Function not implemented.')
}
