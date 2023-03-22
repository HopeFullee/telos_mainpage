import React, { useEffect } from 'react'
import { isPrevPageNewsStateAtom } from '../../../store/storeNewsPage'
import { useSetRecoilState } from 'recoil'
/*
  전 페이지가 /news/ 일때만 -> 상세페이지에서 목록으로 클릭시 -> 뉴스 페이지의 스크롤값 복원.
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
