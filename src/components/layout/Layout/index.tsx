import React, { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Location } from '@reach/router'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { newsItemCountStateAtom } from 'store/storeNewsItemCount'
import { scrollPositionStateAtom } from 'store/storeScrollPosition'

type Props = {
  children: React.ReactNode
}

const Layout = function ({ children }: Props) {
  // Recoil 전역 변수로 뉴스 페이지의 스크롤 좌표값을 저장 / 초기화 합니다.
  const [scrollPosition, setScrollPosition] = useRecoilState(
    scrollPositionStateAtom,
  )

  // Recoil 전역 변수로 뉴스 더보기 초기화
  const setNewsItemCountState = useSetRecoilState(newsItemCountStateAtom)

  useEffect(() => {
    if (window.location.pathname === '/news/') {
      window.scrollTo(0, scrollPosition)

      const updatePosition = () => {
        setScrollPosition(window.scrollY)
      }

      window.addEventListener('scroll', updatePosition)
      updatePosition()
      return () => window.removeEventListener('scroll', updatePosition)
    }

    if (
      window.location.pathname ===
      ('/' || '/about' || '/culture/' || '/contact/')
    ) {
      setScrollPosition(0)
      setNewsItemCountState(1)
    }
  }, [])

  return (
    <>
      <Location>
        {locationProps => <Header currentPath={locationProps} />}
      </Location>
      {children}
      <Footer />
    </>
  )
}

export default Layout
