/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// src 내부 커스텀 경로 설정
exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        assets: path.resolve(__dirname, 'src/assets'),
        icons: path.resolve(__dirname, 'src/assets/icons'),
        store: path.resolve(__dirname, 'src/store'),
      },
    },
  })
}

// contens 내부 마크다운 파일로 생성되는 포스트에 slug 생성
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: 'slug', value: slug })
  }
}

// contens 내부 마크다운 파일로 포스트(templates) 생성
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // 페이징을 위해 모든 마크다운 파일 호출
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `,
  )

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // template 컴포넌트 import
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  )

  // template 페이지 생성 함수
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
    next,
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: {
        slug,
        next: next
          ? {
              slug: next.fields.slug,
              title: next.frontmatter.title,
              categories: next.frontmatter.categories,
            }
          : null,
      },
    }

    createPage(pageOptions)
  }

  // slug 정보가 포함된 포스트 생성
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}
