import React, { useState } from 'react'
import { ScrollOpenIcon, ScrollCloseIcon } from 'components/shared/Icons'
import SubCategory from './SubCategory'
import {
  SoftCategoryAtom,
  BrandingCategoryAtom,
  TelosCategoryAtom,
} from '../../../store'
import { useRecoilValue } from 'recoil'
import clsx from 'clsx'

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
    <section className="mx-auto select-none max-w-1450 mt-90 sm:mt-120 sm:px-40 lg:px-50">
      <div className="border-y-2 border-c-black-300">
        <article
          onClick={handleSoftClick}
          className={clsx(
            softState ? 'bg-c-orange-300/10' : 'bg-white',
            'flex items-center justify-between cursor-pointer h-80 sm:h-120 lg:h-150 px-25 sm:px-45 lg:px-65 border-y-1 border-[#c7c7c7]',
          )}
        >
          <h4 className="font-extrabold text-26 sm:text-36 lg:text-40 text-c-orange-300 font-open-sans">
            SOFT
          </h4>
          {softState ? (
            <ScrollCloseIcon className="mt-5 w-23 h-23 sm:w-32 sm:h-32 lg:w-36 lg:h-36" />
          ) : (
            <ScrollOpenIcon className="mb-5 h-23 w-23 sm:w-32 sm:h-32 lg:w-36 lg:h-36" />
          )}
        </article>
        {softState && <SubCategory subCategory={SOFT_CATEGORY_LIST} />}

        <article
          onClick={handleBrandingClick}
          className={clsx(
            brandingState ? 'bg-c-orange-300/10' : 'bg-white',
            'flex items-center justify-between cursor-pointer h-80 sm:h-120 lg:h-150 px-25 sm:px-45 lg:px-65 border-y-1 border-[#c7c7c7]',
          )}
        >
          <h4 className="font-extrabold text-26 sm:text-36 lg:text-40 text-c-orange-300 font-open-sans">
            BRANDING
          </h4>
          {brandingState ? (
            <ScrollCloseIcon className="mt-5 h-23 w-23 sm:w-32 sm:h-32 lg:w-36 lg:h-36" />
          ) : (
            <ScrollOpenIcon className="mb-5 h-23 w-23 sm:w-32 sm:h-32 lg:w-36 lg:h-36" />
          )}
        </article>
        {brandingState && <SubCategory subCategory={BRANDING_CATEGORY_LIST} />}

        <article
          onClick={handleTelosClick}
          className={clsx(
            telosState ? 'bg-c-orange-300/10' : 'bg-white',
            'flex items-center justify-between cursor-pointer h-80 sm:h-120 lg:h-150 px-25 sm:px-45 lg:px-65 border-y-1 border-[#c7c7c7]',
          )}
        >
          <h4 className="font-extrabold text-26 sm:text-36 lg:text-40 text-c-orange-300 font-open-sans">
            TELOS
          </h4>
          {telosState ? (
            <ScrollCloseIcon className="mt-5 h-23 w-23 sm:w-32 sm:h-32 lg:w-36 lg:h-36" />
          ) : (
            <ScrollOpenIcon className="mb-5 h-23 w-23 sm:w-32 sm:h-32 lg:w-36 lg:h-36" />
          )}
        </article>
        {telosState && <SubCategory subCategory={TELOS_CATEGORY_LIST} />}
      </div>
    </section>
  )
}

export default CultureClass
