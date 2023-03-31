import { atom } from 'recoil'

export const currentCategoryStateAtom = atom({
  key: 'currentCategoryState',
  default: 'All',
})
