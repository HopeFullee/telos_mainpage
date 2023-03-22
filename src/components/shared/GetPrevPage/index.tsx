import React, { useEffect } from 'react'
import { isPrevPageNewsStateAtom } from '../../../store/storeNewsPage'
import { useSetRecoilState } from 'recoil'
/*
  전 페이지가 뉴스 페이지 리스트 일때만 뉴스 페이지의 스크롤 위치값 고정.
*/
const LocationPathChecker = () => {
  const setIsPrevPageNews = useSetRecoilState(isPrevPageNewsStateAtom)

  useEffect(() => {
    if (window.location.pathname === '/news/') {
      setIsPrevPageNews(true)
    } else {
      setIsPrevPageNews(false)
    }
  }, [])

  return <></>
}

export default LocationPathChecker
