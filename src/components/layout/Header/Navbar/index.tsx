import React, { useRef } from 'react'
import { Link } from 'gatsby'
import { CloseIcon } from 'components/shared/Icons'
import './index.scss'

type NavbarProps = {
  onClose: () => void
  open: boolean
}

const NAVBAR_ITEMS = {
  Home: '/',
  About: '/about',
  Culture: '/culture',
  News: '/news',
  Contact: '/contact',
}

/*
 *  ./index.scss animation 확인
 */
const ANIMATION_TERM = 300

const Navbar = ({ onClose, open }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null)
  const menuOut = () =>
    new Promise(res => {
      navRef.current?.classList.remove('toggle-menu')
      navRef.current?.classList.add('toggle-menu-out')
      setTimeout(res, ANIMATION_TERM)
    })

  const handleCloseClick = () => {
    menuOut().then(() => {
      onClose()
    })
  }

  if (!open) return <></>

  return (
    <>
      <div className="overlay" onClick={handleCloseClick}></div>
      <nav
        ref={navRef}
        className="flex flex-col fixed top-0 right-0 w-full max-w-500 h-[100vh] z-10 bg-c-orange-300 toggle-menu"
      >
        <button onClick={handleCloseClick} className="ml-auto text-white m-30 ">
          <CloseIcon className="w-50 h-50" />
        </button>
        <div className="flex flex-col gap-20 font-bold text-white mt-50 all:pl-[15%] text-32 under:font-open-sans">
          {Object.entries(NAVBAR_ITEMS).map(([key, path]) => (
            <Link key={key} to={path} className="hover:text-[#F9EA7A]">
              {key}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-10 mt-auto text-white mb-75 sm:mb-50 pl-[15%] all:font-open-sans">
          <a href="https://www.instagram.com/telos_official/" target="_blank">
            Instagram
          </a>
          <span className="w-1 h-16 bg-white"></span>
          <a href="https://blog.naver.com/telos_official" target="_blank">
            Blog
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
