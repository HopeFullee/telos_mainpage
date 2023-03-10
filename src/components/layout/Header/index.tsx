import React, { useEffect, useState } from 'react'
import { TelosLogo, HamburgerIcon } from 'components/shared/Icons'
import { Link } from 'gatsby'
import Navbar from './Navbar'
import { LocationContext } from '@reach/router'
import clsx from 'clsx'
import './index.scss'
import { useRecoilValue } from 'recoil'
import headerStateAtom from './store'
import { modalStateAtom } from 'store'

type Props = {
  currentPath: LocationContext
}

const Header = ({ currentPath }: Props) => {
  const isRootPath = currentPath.location.pathname === '/'
  const [toggleMenu, setToggleMenu] = useState(false)
  const currentHeaderState = useRecoilValue(headerStateAtom)

  const handleMenuOpen = () => {
    setToggleMenu(true)
  }

  const handleMenuClose = () => {
    setToggleMenu(false)
  }

  const getHamburgerIconStroke = () => {
    if (currentHeaderState === 'on') return 'stroke-[#C7C7C7]'
    if (isRootPath) return 'stroke-white'
    return 'stroke-[#C7C7C7]'
  }

  return (
    <header
      className={clsx(
        currentHeaderState === 'on'
          ? 'header-on'
          : isRootPath
          ? 'header-off'
          : 'header-on',
        isRootPath ? 'fixed' : 'sticky bg-white',
        'header top-0 z-20 flex items-center justify-between w-full h-60 px-15 sm:px-30 sm:h-86 lg:px-50',
      )}
    >
      <Link to="/">
        <TelosLogo className="w-full h-36 sm:h-46" />
      </Link>

      <button onClick={handleMenuOpen}>
        <HamburgerIcon
          className={clsx(
            getHamburgerIconStroke(),
            'mr-[-5px] sm:mr-[-15px] h-full w-38 sm:w-45',
          )}
        />
      </button>
      <Navbar open={toggleMenu} onClose={handleMenuClose} />
    </header>
  )
}

export default Header
