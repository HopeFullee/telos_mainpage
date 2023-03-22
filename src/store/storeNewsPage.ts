import { atom } from 'recoil'

type PrevPageState = boolean

export const isPrevPageNewsStateAtom = atom<PrevPageState>({
  key: 'PrevPageState',
  default: false,
})
