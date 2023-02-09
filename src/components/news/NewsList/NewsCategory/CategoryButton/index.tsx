import React from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  active: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const CategoryButton = ({ children, onClick, active }: Props) => {
  return (
    <button
      className={clsx(
        active ? 'bg-orange-400 text-white' : 'bg-c-gray-300 text-black',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CategoryButton
