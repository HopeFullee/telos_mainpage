import { atom } from 'recoil'

export const isPrevPageNewsStateAtom = atom<boolean>({
  key: 'IsPrevPageNewsState',
  default: false,
})

export const countNextNewsStateAtom = atom<number>({
  key: 'nextNewsCountState',
  default: 0,
})
