import React from 'react'
import ListContainer from './ListContainer'

const CultureBenefit = () => {
  return (
    <section className="mx-auto select-none max-w-1450 mt-120 sm:mt-200 sm:px-40 lg:px-50 all:border-[#C7C7C7] sm:pb-50">
      <h4 className="px-20 mb-10 font-bold sm:mb-20 sm:px-40 font-open-sans text-30 sm:text-42 text-c-black-300">
        Benefit
      </h4>
      <div className="grid all:break-keep md:grid-cols-2 md:grid-rows-2 under:min-h-280 sm:under:min-h-350 md:under:min-h-300 lg:under:min-h-400">
        <ListContainer
          className="md:border-r-1 bg-[url('assets/images/benefit_bg_01.png')] bg-[right_15px_bottom] sm:bg-[right_0px_bottom] md:bg-[right_10px_bottom_5px] lg:bg-[right_20px_bottom_5px] bg-[length:140px] sm:bg-[length:200px]  md:bg-[length:160px] lg:bg-auto"
          title="자유로운 근무 환경을 추구합니다."
        >
          <li>자유로운 연차 및 시차 사용</li>
          <li>여유로운 점심 시간</li>
        </ListContainer>
        <ListContainer
          className="bg-[url('assets/images/benefit_bg_02.png')] bg-[right_10px_bottom_5px] sm:bg-[right_bottom_10px] md:bg-[right_-10px_bottom_10px] lg:bg-[right_-20px_bottom_10px] bg-[length:140px] sm:bg-[length:200px] md:bg-[length:160px] lg:bg-auto"
          title="미래를 꿈꾸는 근로자를 돕습니다."
        >
          <li>업무관련 도서 및 교육 지원</li>
          <li>청년내일채움공제 참여 가능</li>
          <li>병역 특례 기업</li>
        </ListContainer>
        <ListContainer
          className="bg-[url('assets/images/benefit_bg_03.png')] md:border-r-1 bg-[right_15px_bottom] sm:bg-[right_5px_bottom] md:bg-[right_15px_bottom] bg-[length:140px] sm:bg-[length:200px] md:bg-[length:160px] lg:bg-auto"
          title="업무에 집중할 수 있는 환경을 제공합니다."
        >
          <li>자유롭게 이용 가능한 스낵바 및 커피머신</li>
          <li>당신이 원하는 노동요 지원</li>
        </ListContainer>
        <ListContainer
          className="bg-[url('assets/images/benefit_bg_04.png')] bg-[right_15px_bottom_8px] sm:bg-[right_5px_bottom_10px] lg:bg-[right_10px_bottom_15px] bg-[length:130px] sm:bg-[length:180px] md:bg-[length:150px] lg:bg-[length:200px]"
          title="근로자의 삶을 존중합니다."
        >
          <li>명절 상여 지급</li>
          <li>생일 조기 퇴근 및 상품권 지급</li>
        </ListContainer>
        <ListContainer
          title="노는 것 또한 중요합니다."
          className="md:border-r-1 md:border-b-1 bg-[url('assets/images/benefit_bg_05.png')] bg-[right_21px_bottom_-10px] sm:bg-[right_10px_bottom_-10px] md:bg-[right_20px_bottom_-5px] lg:bg-[right_30px_bottom_-15px] bg-[length:140px] sm:bg-[length:200px]  md:bg-[length:160px] lg:bg-auto"
        >
          <li>장기 근속자 휴가(3, 6, 9년)</li>
          <li>매년 워크샵 및 telos play move 개최</li>
        </ListContainer>
        <ListContainer
          title="근로자들 간의 친목을 응원합니다."
          className="border-b-1 bg-[url('assets/images/benefit_bg_06.png')] bg-[right_18px_bottom] sm:bg-[right_15px_bottom] md:bg-[right_10px_bottom] bg-[length:140px] sm:bg-[length:200px]  md:bg-[length:160px] lg:bg-auto"
        >
          <li>사내 동아리 운영</li>
          <li>팀별 회식비 지원</li>
        </ListContainer>
      </div>
    </section>
  )
}

export default CultureBenefit
