import React from 'react'

type BTypeLayoutProps = {
  dutyList: string[]
  requirementList: string[]
  preferList: string[]
}

const BTypeLayout = ({
  dutyList,
  requirementList,
  preferList,
}: BTypeLayoutProps) => {
  return (
    <div className="flex flex-col justify-between mt-50 gap-50 md:gap-80 lg:gap-100 all:leading-8 md:flex-row">
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
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">자격요건</h5>
          <span className="block w-full h-1 my-5 bg-black"></span>
          <ul className="font-medium list-disc ml-25 text-17">
            {requirementList.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-[50%] gap-50">
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">우대사항</h5>
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

export default BTypeLayout