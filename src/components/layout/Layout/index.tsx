import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Location } from '@reach/router'

type Props = {
  children: React.ReactNode
}

const Layout = function ({ children }: Props) {
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
