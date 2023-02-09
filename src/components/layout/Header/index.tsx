import React from 'react'
import { TelosLogo, HamburgerIcon } from 'components/shared/Icons'
import { Link } from 'gatsby'

const Header = function () {
  return (
    <div className="flex items-center justify-between w-full border-b-1 h-86 px-50">
      <Link to="/">
        <TelosLogo width={112} height={46} />
      </Link>

      <HamburgerIcon width={45} height={45} />
    </div>
  )
}

export default Header
