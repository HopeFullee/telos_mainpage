import React from 'react'

type ListContainerProps = {
  title: string
  list: string[]
}

const ListContainer = ({ title, list }: ListContainerProps) => {
  return (
    <div className="all:text-c-black-300">
      <h5 className="ml-5 font-bold text-18">{title}</h5>
      <span className="block w-full h-1 my-5 bg-black"></span>
      <ul className="font-medium list-disc ml-25 text-17">
        {list.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ListContainer
