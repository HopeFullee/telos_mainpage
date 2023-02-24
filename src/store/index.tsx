import { atom } from 'recoil'

type ModalState = boolean

export const modalStateAtom = atom<ModalState>({
  key: 'ClassModalState',
  default: false,
})

export type SoftCategoryType = {
  rootCategory: string
  categoryEN: string
  categoryKR: string
  dutyList: string[]
  requirementList: string[]
  preferList: string[]
}[]

export const SoftCategoryAtom = atom<SoftCategoryType>({
  key: 'SoftCategoryInfo',
  default: [
    {
      rootCategory: 'Soft',
      categoryEN: 'Service Planner',
      categoryKR: '서비스 기획자',
      dutyList: ['코파기', '라면먹기', '집가서 더포레 2하기'],
      requirementList: ['피자스쿨 졸업자', '정보처리했나자격증', 'MD세대'],
      preferList: ['아침에 빽다방 가실분', '이쁜 눈나'],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Game Contents Planner',
      categoryKR: '게임 콘텐츠 기획자',
      dutyList: [],
      requirementList: [],
      preferList: [],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Unity Client Developer',
      categoryKR: '유니티 클라이언트 개발자',
      dutyList: [],
      requirementList: [],
      preferList: [],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Front-end Developer',
      categoryKR: '프론트엔드 개발자',
      dutyList: [],
      requirementList: [],
      preferList: [],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Back-end Developer',
      categoryKR: '백엔드 개발자',
      dutyList: [],
      requirementList: [],
      preferList: [],
    },
    {
      rootCategory: 'Soft',
      categoryEN: '2D Graphic Designer ',
      categoryKR: '2D 그래픽 디자이너',
      dutyList: [],
      requirementList: [],
      preferList: [],
    },
    {
      rootCategory: 'Soft',
      categoryEN: '3D Modeler',
      categoryKR: '3D 모델러',
      dutyList: [],
      requirementList: [],
      preferList: [],
    },
  ],
})
