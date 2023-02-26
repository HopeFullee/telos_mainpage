import React from 'react'

type ATypeLayoutProps = {
  dutyList: string[]
  requirementList: string[]
  preferList: string[]
}

const ATypeLayout = ({
  dutyList,
  requirementList,
  preferList,
}: ATypeLayoutProps) => {
  return (
    <div className="flex justify-between mt-50 gap-120 all:leading-8">
      <div className="flex flex-col w-[50%] gap-50">
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">주요업무</h5>
          <span className="block w-full h-1 my-5 bg-black"></span>
          <ul className="font-medium list-disc ml-25 text-17">
            {dutyList.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-[50%] gap-50">
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">주요업무</h5>
          <span className="block w-full h-1 my-5 bg-black"></span>
          <ul className="font-medium list-disc ml-25 text-17">
            {requirementList.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">주요업무</h5>
          <span className="block w-full h-1 my-5 bg-black"></span>
          <ul className="font-medium list-disc ml-25 text-17">
            {preferList.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ATypeLayout
