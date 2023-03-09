import React from 'react'

type ListContainerProps = {
  title: string
  children: React.ReactNode
  className?: string
}

const ListContainer = ({ title, children, className }: ListContainerProps) => {
  return (
    <div
      className={`${className} p-25 sm:py-30 sm:px-40 lg:py-40 lg:px-50 border-t-1 bg-no-repeat bg-right-bottom`}
    >
      <h5 className="font-semibold text-22 sm:text-28 md:text-24 lg:text-30 text-c-black-300">
        {title}
      </h5>
      <ul className="leading-loose list-disc ml-30 mt-15 under:text-c-black-300 text-18 sm:text-22 md:text-18 lg:text-24">
        {children}
      </ul>
    </div>
  )
}

export default ListContainer
