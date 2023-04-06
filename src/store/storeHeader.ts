import { atom } from 'recoil'

type HeaderState = 'off' | 'on'
/*
 *  헤더 상태를 전역으로 관리하는 파일입니다.
 *  /main/Description 에서 옵저버 관측 여부에 따라
 *  헤더 상태 ON / OFF 적용.
 */
const headerStateAtom = atom<HeaderState>({
  key: 'HeaderState',
  default: 'off',
})

export default headerStateAtom
