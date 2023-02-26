import React, { useState } from 'react'
import { ScrollOpen, ScrollClose } from 'components/shared/Icons'
import SubCategory from './SubCategory'
import {
  SoftCategoryAtom,
  BrandingCategoryAtom,
  TelosCategoryAtom,
} from '../../../store'
import { useRecoilValue } from 'recoil'

const BRANDING_CATEGORY_LIST = [
  { englishName: 'BX Designer', koreanName: '브랜드 경험 디자이너' },
  { englishName: 'Marketer', koreanName: '마케터' },
]

const TELOS_CATEGORY_LIST = [
  { englishName: 'Management Supporter', koreanName: '경영지원(회계)' },
]

const CultureClass = () => {
  const SOFT_CATEGORY_LIST = useRecoilValue(SoftCategoryAtom)
  const BRANDING_CATEGORY_LIST = useRecoilValue(BrandingCategoryAtom)
  const TELOS_CATEGORY_LIST = useRecoilValue(TelosCategoryAtom)

  const [softState, setSoftState] = useState(false)
  const [brandingState, setBrandingState] = useState(false)
  const [telosState, setTelosState] = useState(false)

  const handleSoftClick = () => {
    setSoftState(prev => !prev)
    setBrandingState(false)
    setTelosState(false)
  }

  const handleBrandingClick = () => {
    setBrandingState(prev => !prev)
    setSoftState(false)
    setTelosState(false)
  }

  const handleTelosClick = () => {
    setTelosState(prev => !prev)
    setSoftState(false)
    setBrandingState(false)
  }

  return (
    <section className="mx-auto select-none max-w-1450 mt-120 px-50">
      <div className="border-y-2 border-c-black-300">
        <article
          onClick={handleSoftClick}
          className="flex items-center justify-between cursor-pointer h-150 px-65 bg-c-orange-300/10 border-y-1 border-[#c7c7c7]"
        >
          <h4 className="font-extrabold text-40 text-c-orange-300 font-open-sans">
            SOFT
          </h4>
          {!softState ? (
            <ScrollOpen className="w-36 h-36" />
          ) : (
            <ScrollClose className="w-36 h-36" />
          )}
        </article>
        {softState && <SubCategory subCategory={SOFT_CATEGORY_LIST} />}

        <article
          onClick={handleBrandingClick}
          className="flex items-center justify-between cursor-pointer h-150 px-65 bg-c-orange-300/10 border-b-1 border-[#c7c7c7]"
        >
          <h4 className="font-extrabold text-40 text-c-orange-300 font-open-sans">
            BRANDING
          </h4>
          {!brandingState ? (
            <ScrollOpen className="w-36 h-36" />
          ) : (
            <ScrollClose className="w-36 h-36" />
          )}
        </article>
        {brandingState && <SubCategory subCategory={BRANDING_CATEGORY_LIST} />}

        <article
          onClick={handleTelosClick}
          className="flex items-center justify-between cursor-pointer h-150 px-65 bg-c-orange-300/10 border-b-1 border-[#c7c7c7]"
        >
          <h4 className="font-extrabold text-40 text-c-orange-300 font-open-sans">
            TELOS
          </h4>
          {!telosState ? (
            <ScrollOpen className="w-36 h-36" />
          ) : (
            <ScrollClose className="w-36 h-36" />
          )}
        </article>
        {telosState && <SubCategory subCategory={TELOS_CATEGORY_LIST} />}
      </div>
    </section>
  )
}

export default CultureClass
