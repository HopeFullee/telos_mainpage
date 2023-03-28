import { atom } from 'recoil'

export const newsItemCountStateAtom = atom<number>({
  key: 'newsItemCountState',
  default: 1,
})
