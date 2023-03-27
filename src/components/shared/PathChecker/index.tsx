import React, { useEffect } from 'react'
import {
  isPrevPageNewsStateAtom,
  countNextNewsStateAtom,
} from 'store/storePrevPage'
import { useSetRecoilState } from 'recoil'

const PathChecker = () => {
  const setIsPrevPageNews = useSetRecoilState(isPrevPageNewsStateAtom)
  const setCountNextNews = useSetRecoilState(countNextNewsStateAtom)
  useEffect(() => {
    if (window.location.pathname === '/news/') {
      setIsPrevPageNews(true)
    } else {
      setIsPrevPageNews(false)
    }
    setCountNextNews(0)
  })
  return <></>
}

export default PathChecker
