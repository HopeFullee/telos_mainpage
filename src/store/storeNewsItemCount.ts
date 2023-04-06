import { atom } from 'recoil'
/*
 *  뉴스 페이지 /NewsList 더보기 버튼 누른 횟수 전역상태 Recoil 셋팅
 *
 *  예).
 *  /NewsList 에서 /hooks/useMoreNewsItems 커스텀 훅 사용
 *  커스텀 훅에서 넘어온 더보기(more)함수 실행 시 Recoil 전역 변수에 횟수 저장
 *  이후 상세글(/templates) 에서 목록으로 돌아가도 이전 더보기 상태 유지
 *
 *  /NewsCategory 에 작성된 카테고리 버튼 클릭시 Recoil 전역 변수 초기화
 *  /Layout 에 작성된 특정 페이지로 이동 시 Recoil 전역 변수 초기화
 */
export const newsItemCountStateAtom = atom<number>({
  key: 'newsItemCountState',
  default: 1,
})
