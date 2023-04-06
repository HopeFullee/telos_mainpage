import { atom } from 'recoil'
/*
 *  뉴스 페이지 리스트 카테고리 전역상태 관리 Recoil 초기 셋팅
 *
 *  예).
 *  /NewsList 에서 마지막 머물렀던 카테고리 저장
 *  뉴스 아이템 클릭으로 상세페이지(/templates) 이동
 *  상세 페이지에서 목록으로 돌아갈 시 저장했던 카테고리로 이동.
 */
export const currentCategoryStateAtom = atom({
  key: 'currentCategoryState',
  default: 'All',
})
