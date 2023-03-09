import { atom } from 'recoil'

type HeaderState = 'off' | 'on'

const headerStateAtom = atom<HeaderState>({
  key: 'HeaderState',
  default: 'off',
})

export default headerStateAtom
