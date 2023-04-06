// contents 내부 마크다운 파일의 frontmatter의 타입
type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }
}

// 뉴스 리스트 아이템의 타입
type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
    categories: string[]
  }
}

// 메인 페이지 하단 뉴스 섹션 frontmatter 타입
type MainNewsFrontmatterType = {
  title: string
  date: string
}

// 메인 페이지 하단 뉴스 섹션 리스트 타입
type MainNewsItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: MainNewsFrontmatterType
  }
}
