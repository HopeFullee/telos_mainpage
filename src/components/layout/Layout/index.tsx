import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Location } from '@reach/router'
import { useRecoilState } from 'recoil'
import { scrollPositionStateAtom } from 'store/storeScrollPosition'

type Props = {
  children: React.ReactNode
}

const Layout = function ({ children }: Props) {
  const [scrollPosition, setScrollPosition] = useRecoilState(
    scrollPositionStateAtom,
  )

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
