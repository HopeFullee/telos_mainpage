import React from 'react'

type CTypeLayoutProps = {
  dutyList: {
    listOne: {
      listSubTitle: string
      list: string[]
    }
    listTwo: {
      listSubTitle: string
      list: string[]
    }
    listThree: {
      listSubTitle: string
      list: string[]
    }
    listFour: {
      listSubTitle: string
      list: string[]
    }
  }

  requirementList: string[]
  preferList: string[]
}

const CTypeLayout = ({
  dutyList,
  requirementList,
  preferList,
}: CTypeLayoutProps) => {
  return (
    <div className="flex flex-col justify-between mt-50 gap-50 md:gap-80 lg:gap-100 all:leading-8 md:flex-row">
      <div className="w-full md:w-[50%] lg:w-[65%] gap-50">
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">주요업무</h5>
          <span className="block w-full h-1 mt-5 bg-black"></span>
          <div className="flex flex-col lg:flex-row">
            <div className="mt-10 lg:min-w-[50%]">
              <p className="ml-5 font-bold text-17">
                [{dutyList.listOne.listSubTitle}]
              </p>
              <ul className="font-medium list-disc ml-25 text-17">
                {dutyList.listOne.list.map((item, idx) => {
                  return <li key={idx}>{item}</li>
                })}
              </ul>
            </div>
            <div className="mt-10 lg:min-w-[50%]">
              <p className="ml-5 font-bold text-17">
                [{dutyList.listTwo.listSubTitle}]
              </p>
              <ul className="font-medium list-disc ml-25 text-17">
                {dutyList.listTwo.list.map((item, idx) => {
                  return <li key={idx}>{item}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="mt-10 lg:min-w-[50%]">
              <p className="ml-5 font-bold text-17">
                [{dutyList.listThree.listSubTitle}]
              </p>
              <ul className="font-medium list-disc ml-25 text-17">
                {dutyList.listThree.list.map((item, idx) => {
                  return <li key={idx}>{item}</li>
                })}
              </ul>
            </div>
            <div className="mt-10 lg:min-w-[50%]">
              <p className="ml-5 font-bold text-17">
                [{dutyList.listFour.listSubTitle}]
              </p>
              <ul className="font-medium list-disc ml-25 text-17">
                {dutyList.listFour.list.map((item, idx) => {
                  return <li key={idx}>{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[50%] lg:w-[35%] gap-50">
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">우대사항</h5>
          <span className="block w-full h-1 mt-5 bg-black"></span>
          <ul className="mt-10 font-medium list-disc ml-25 text-17">
            {preferList.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}
          </ul>
        </div>
        <div className="all:text-c-black-300">
          <h5 className="ml-5 font-bold text-18">자격요건</h5>
          <span className="block w-full h-1 mt-5 bg-black"></span>
          <ul className="mt-10 font-medium list-disc ml-25 text-17">
            {requirementList.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CTypeLayout
