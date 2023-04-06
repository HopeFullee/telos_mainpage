import { atom } from 'recoil'
/*
 *   culture 페이지 직군 소개의 리스트, 상세내용, 모달의
 *   전역상태를 관리하는 파일 입니다.
 */

// culture 직군 소개 모달 ON / OFF 전역상태 Recoil 초기 세팅
export const modalStateAtom = atom<Boolean>({
  key: 'ClassModalState',
  default: false,
})

// 하단 CategoryItems 에서 categoryEN의 커스텀 타입으로 지정
// 추후 categoryEN 의 (A, B, C)타입과 맞는 레이아웃 컴포넌트 랜더
export const layoutTypes = {
  'Strategic Planner': 'A',
  'Game Contents Planner': 'A',
  'Unity Client Developer': 'A',
  'Front-end Developer': 'B',
  'Back-end Developer': 'B',
  '2D Graphic Designer': 'A',
  '3D Modeler': 'A',
  'BX Designer': 'A',
  Marketer: 'A',
  'Management Supporter': 'C',
} as const

// 모든 직군 리스트의 타입
// dutyList 내 주요업무의 리스트 묶음이 1개라면 singleList
// 1개 이상이라면 multiList 에 작성.
// 예) multiList 로 적용된 경원지원 직군 소개 모달 확인.
export type CategoryItems = {
  rootCategory: string
  categoryEN: keyof typeof layoutTypes
  categoryKR: string
  description: string[]
  dutyList: {
    singleList: string[]
    multiList: {
      listOne: {
        listSubTitle: string
        list: string[]
      }
      listTwo: {
        listSubTitle: string
        list: string[]
      }
      listThree: {
        listSubTitle: string
        list: string[]
      }
      listFour: {
        listSubTitle: string
        list: string[]
      }
    }
  }
  requirementList: string[]
  preferList: string[]
}

export type CategoryType = CategoryItems[]

// 텔로스 SOFT 직군별 정보
// 추후 상세내용 추가/수정 필요시 현재 레이아웃 유지하에 작업
export const SoftCategoryAtom = atom<CategoryType>({
  key: 'SoftCategoryInfo',
  default: [
    {
      rootCategory: 'Soft',
      categoryEN: 'Strategic Planner',
      categoryKR: '사업 기획자',
      description: [
        '기술을 이해하고 시장의 흐름을 읽어 회사의 방향을 정하는 키잡이 역할을 합니다. ',
        '전략적으로 사고하고, 회사의 비전을 설계하여 말과 글로 표현합니다. ',
      ],
      dutyList: {
        singleList: [
          '시장 조사·자료 분석·정보 재구성',
          'RFP 분석, 제안 전략 수립',
          '연구개발과제 사업 제안서 및 B2B 기술 제안서 작성',
          '수행 과제의 중간 보고, 종료 과제의 최종 보고 작성 및 대응',
          '사업 진행 주관기관, 수행/참여기관 및 담당자 소통',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        '본인의 아이디어를 기획하여 공적 문서로 표현할 수 있는 분',
        '협업에 능숙하고 내외부 소통이 원활한 분',
        '한글, 파워포인트, 엑셀 애플리케이션 사용이 가능한 분',
      ],
      preferList: [
        '사업 기획에 대한 이해와 경험이 있는 분',
        '한글, 파워포인트, 엑셀 애플리케이션 사용이 능숙한 분',
        'VR/AR, 메타버스, 3D, IoT 등 기술에 대한 이해도가 높으신 분',
        '이공계열 전공자 혹은 상경계열 관련 전공자',
        '정부 과제 및 기술 제안 유경험자',
      ],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Game Contents Planner',
      categoryKR: '게임 콘텐츠 기획자',
      description: [
        '게임에 재미가 되어줄 콘텐츠를 디자인하고 시스템을 설계합니다. ',
        '개발에 필요한 기획서를 만들고 다양한 파트와 협업하여 게임 개발을 진행합니다. ',
      ],

      dutyList: {
        singleList: [
          '콘텐츠 디자인 및 시스템 설계',
          '세계관 설정 및 시나리오 작성',
          '레벨 디자인 및 스크립트 작업',
          'UI/UX 기획',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        '게임 개발 프로세스에 대한 이해도가 높은 분',
        '본인의 생각을 타인에게 효과적으로 전달하실 수 있는 분',
        '아이디어를 구체화하여 시각화, 문서화할 수 있는 분',
        '다양한 직군과의 소통이 원활하고 협업에 대한 이해도가 높은 분',
      ],
      preferList: [
        '다양한 장르의 게임을 경험하고 분석해 보신 분',
        '프로젝트를 완료하여 출시 경험이 있으신 분',
        'VR 및 메타버스 콘텐츠 제작 경험이 있는 분',
      ],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Unity Client Developer',
      categoryKR: '유니티 클라이언트 개발자',
      description: [
        '프로그램을 제작하는 다양한 영역 중, 화면에 보이는 부분과 그에 관련된 기능들을 직접 작업합니다. 사용자가 프로그램을 사용할 때, ',
        '편리성과 경험성 그리고 심미성을 가지게 합니다. 이것들을 최적화된 성능으로 구현하기 위해 끊임없이 고민하고 더 나은 방향을 모색합니다. ',
        'Unity 개발 엔진을 사용해서 개발하며 이에 알맞는 여러가지 기술을 습득해 프로그램에 적용합니다.',
      ],
      dutyList: {
        singleList: [
          'Unity Engine을 사용해 프로그램을 개발',
          '더 나은 사용 경험을 위한 기능을 설계하고 구현',
          '기획팀, 그래픽팀 등의 동료들과 좋은 프로그램을 만들기 위한 협업',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        'C# 프로그래밍 언어를 이해하고 Unity Engine을 다룰 수 있는 분',
        '기본적인 자료구조, 알고리즘, 수학, 물리 기반의 지식이 있는 분',
        'Git 등의 형상 기억 관리 툴을 다룰 줄 아는 분',
        '서버와 클라이언트 간의 통신에 대한 이해가 있는 분',
        '커뮤니케이션이 원활하고 능동적으로 협업에 참여할 수 있는 분',
      ],
      preferList: [
        '객체지향 프로그래밍에 대한 이해가 있는 분',
        'Issue 및 Bug Tracking에 능숙한 분',
        '종속성을 최소화하는 디자인 패턴 등의 이해가 있는 분',
      ],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Front-end Developer',
      categoryKR: '프론트엔드 개발자',
      description: [
        '사용자가 편리하게 사용하고 경험할 수 있는 ',
        'UI/UX의 최적화에 초점을 맞추어 서비스를 개발하고 구현합니다.',
      ],
      dutyList: {
        singleList: [
          '자체 웹 서비스 프로젝트 개발 및 운영',
          '서비스 고도화 및 신규 기능 개발',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        'Javascript 개발 경력 0년 이상이신 분',
        'Javascript 및 HTML/CSS에 대한 기본 이해와 경험을 가지고 계신 분',
        'Angular, Vue, React 중 하나 이상에 대한 개발 경험을 가지고 계신 분',
        '형상관리(Git, SVN) 경험을 가지고 계신 분',
        '다양한 직군들과 원활한 커뮤니케이션이 가능하신 분',
      ],
      preferList: [
        'W3C 웹표준 규격에 대한 이해가 있으신 분',
        '상태 관리 라이브러리(Redux, Recoil, Vuex 등)를 활용한 개발/운영 경험을 가지고 계신 분',
        'ECMAScript, HTML5 API에 대한 이해와 사용 능력을 가지고, API 연동 및 데이터 처리 개발 역량을 가지고 계신 분',
        'AWS, Azure, NHN Cloud 등 국내,외 클라우드 플랫폼 관리 경험을 가지고 계신 분',
        'Typescript 개발 경험을 가지고 계신 분',
        '새로운 언어와 기술 등 트렌드에 관심이 많으신 분',
      ],
    },
    {
      rootCategory: 'Soft',
      categoryEN: 'Back-end Developer',
      categoryKR: '백엔드 개발자',
      description: [
        '사용자들에게 원하는 정보를 제공할 수 있도록 데이터를 관리합니다. ',
        '안정적인 서비스를 제공 및 유지하기 위해 서버를 개발하고 구축 및 관리합니다.',
      ],
      dutyList: {
        singleList: [
          '자체 웹 서비스 프로젝트 개발 및 운영',
          '서비스 고도화 및 신규 기능 개발',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        'Spring framework(+ Springboot)기반 개발 경력 5년 이상이신 분',
        'HTML/CSS, javascript와 Servlet, JSP 등 서버사이드(SSR) 개발 경험을 가지고 계신 분',
        'Linux 환경에서의 개발 경험을 가지고 계신 분',
        'RDB 개발 경험을 가지고 계신 분',
        '형상관리(Git, SVN) 경험을 가지고 계신 분',
        '다양한 직군들과 원활한 커뮤니케이션이 가능하신 분',
      ],
      preferList: [
        'RESTful API 개발 경험을 가지고 계신 분',
        'SPA(React, Vue 등) 개발 경험을 가지고 계신 분',
        'CI/CD 파이프라인 구축 경험을 가지고 계신 분',
        'AWS, Azure, NHN Cloud 등 국내외 클라우드 플랫폼 관리 경험을 가지고 계신 분',
        '대용량 데이터 및 트래픽 서비스 운영 경험을 가지고 계신 분',
        'Kotlin 개발 경험을 가지고 계신 분',
        '새로운 언어와 기술 등 트렌드에 관심이 많으신 분',
      ],
    },
    {
      rootCategory: 'Soft',
      categoryEN: '2D Graphic Designer',
      categoryKR: '2D 그래픽 디자이너',
      description: [
        '콘텐츠의 전반적인 키 비주얼을 구축하는 역할을 합니다. ',
        '다양한 그래픽 툴을 활용하여 기획된 시나리오의 컨셉을 시각적으로 표현합니다.',
      ],

      dutyList: {
        singleList: [
          '2D 캐릭터 및 배경 원화 및 컨셉아트 디자인',
          'Unity UGUI를 활용한 UI/UX 디자인',
          '캐릭터를 활용한 일러스트 제작',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        'Photoshop, Illustrator 등 그래픽 툴 활용이 능숙하신 분',
        '프로젝트의 요구사항을 이해하고 시나리오에 걸맞는 컨셉을 구상할 수 있으신 분',
        '타 부서와 원활한 소통이 가능한 커뮤니케이션 능력을 갖추신 분',
      ],
      preferList: [
        '2D 캐릭터, 배경, 프로젝트 등의 컨셉아트 근무 경험이 있으신 분',
        'UI/UX 디자인 근무 경험 or 해당 분야에 대한 이해도가 높으신 분',
        '디자인 관련 분야 전공자',
      ],
    },
    {
      rootCategory: 'Soft',
      categoryEN: '3D Modeler',
      categoryKR: '3D 모델러',
      description: [
        '3D 환경 구축을 통해 콘텐츠에 숨결을 불어넣는 역할을 합니다. ',
        '다양한 그래픽 툴과 Unity 엔진을 활용해 콘텐츠의 환경을 구축하고 캐릭터 리깅 및 애니메이션을 제작합니다.',
      ],
      dutyList: {
        singleList: [
          '3ds max를 활용한 캐릭터/배경 게임 에셋 제작',
          'Unity를 활용한 배경 씬세팅',
          '3D 캐릭터 리깅 및 애니메이션',
          '이미지 렌더링 제작',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        '3ds max, Blender 등 3D 툴 활용이 능숙하신 분',
        '타 부서와 원활한 소통이 가능한 커뮤니케이션 능력을 갖추신 분',
        'Unity를 활용한 게임 리소스 제작 경험이 있으신 분',
      ],
      preferList: ['VR/AR 제작 경험이 있으신 분', '3D 게임 그래픽 전공자'],
    },
  ],
})

// 텔로스 Branding 직군별 정보
// 추후 상세내용 추가/수정 필요시 현재 레이아웃 유지하에 작업
export const BrandingCategoryAtom = atom<CategoryType>({
  key: 'BrandingCategoryInfo',
  default: [
    {
      rootCategory: 'Branding',
      categoryEN: 'BX Designer',
      categoryKR: '브랜드 경험 디자이너',
      description: [
        '가치있는 브랜드를 만들고 활기를 불어 넣어주는 역할을 합니다. ',
        '다양한 분야의 비주얼 컨셉을 기획하고 브랜드가 추구하는 아이덴티티를 시각적으로 표현합니다.',
      ],
      dutyList: {
        singleList: [
          '브랜드 비주얼 전략 수립 및 키 비주얼 제작',
          '온/오프라인용 편집물 디자인',
          '제품 패키지 디자인',
          '웹사이트 및 상세페이지 디자인',
          '온라인 콘텐츠 디자인',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        '브랜딩에 대한 이해와 경험이 있는 분',
        '본인의 아이디어를 기획하여 시각적으로 표현할 수 있는 분',
        '책임감이 강하고 다양한 직군과 소통이 원활한 분',
        '그래픽 디자인 툴 사용이 능숙한 분',
      ],
      preferList: [
        '해당 직무 근무 경험 보유자',
        '시각디자인, 산업디자인 등 디자인 관련 전공자',
        '사진 촬영 및 모션 그래픽 제작이 가능하신 분',
      ],
    },
    {
      rootCategory: 'Branding',
      categoryEN: 'Marketer',
      categoryKR: '마케터',
      description: [
        '브랜드 가치를 극대화함을 목표로 합니다. ',
        '온라인부터 오프라인, 자체 브랜드부터 타사 브랜드까지 다양한 분야의 마케팅과 브랜딩 솔루션을 제공합니다.',
      ],
      dutyList: {
        singleList: [
          '자체브랜드 기획',
          '상품 기획 및 생산관리',
          '미디어커머스',
          '퍼포먼스 마케팅',
          '마케팅 컨설팅',
          '인하우스/에이전시 마케팅',
        ],
        multiList: {
          listOne: { listSubTitle: '', list: [] },
          listTwo: { listSubTitle: '', list: [] },
          listThree: { listSubTitle: '', list: [] },
          listFour: { listSubTitle: '', list: [] },
        },
      },
      requirementList: [
        '해당 직무 근무 유경험자',
        '문서 작성툴(한글, 워드, 엑셀, PPT)사용이 능숙한 분',
        '최신 트렌드 및 시장 변화를 파악하고 있는 분',
        '이커머스 시장에 대한 이해도가 있는 분',
        '주체적으로 업무를 진행할 수 있는 분',
      ],
      preferList: [
        '퍼포먼스 마케팅, GA, SQL 유경험자',
        '맡은 일에 책임을 다하는 성격의 소유자',
        '클라이언트, 외부 업체와의 소통이 원활한 분',
      ],
    },
  ],
})

// 텔로스 TELOS 직군별 정보
// 추후 상세내용 추가/수정 필요시 현재 레이아웃 유지하에 작업
export const TelosCategoryAtom = atom<CategoryType>({
  key: 'TelosCategoryInfo',
  default: [
    {
      rootCategory: 'Telos',
      categoryEN: 'Management Supporter',
      categoryKR: '경영지원(회계)',
      description: [
        '회계, 경영관리, 인사, 총무 등의 역할로서 구성원들이 안정적인 회사생활을 할 수 있도록 지원하는 역할을 합니다. ',
        '업무에 몰입하여 시너지를 낼 수 있는 환경을 조성하고 각 부문의 경영활동을 조율하는 역할을 수행하게 됩니다.',
      ],
      dutyList: {
        singleList: [],
        multiList: {
          listOne: {
            listSubTitle: '회계 업무',
            list: [
              '회계 마감 및 결산, 재무제표 분석',
              '회계 관련 장부, 전표 관리',
              '회계 관련 증빙서 관리, 보관',
              '각 부서 회계 관련 업무 지원 및 관리',
            ],
          },
          listTwo: {
            listSubTitle: '경영관리 업무',
            list: [
              '사내경영 자료의 수집 및 분석정리',
              '정부지원정책 지원 및 평가 관리',
              '연간 경영실적 분석, 평가',
              '사업별 실적 분석 및 평가',
            ],
          },
          listThree: {
            listSubTitle: '인사 업무',
            list: [
              '급여 및 퇴직금 지급 관리',
              '직원의 채용 관리',
              '4대보험 관리',
              '직원 복무 및 기강에 관한 사항',
              '인사 관련 서류 유지, 관리',
            ],
          },
          listFour: {
            listSubTitle: '총무 업무',
            list: [
              '각종 증명서 발급 및 제반 인허가 관련 업무',
              '사규의 제정 및 개폐',
              '각종 단체 가입 및 대외관계 유지',
              '사내 공고 사항',
              '재산관리 및 임대차 계약/사후관리',
            ],
          },
        },
      },
      requirementList: [
        '경영지원 및 사무보조 업무 경험이 있으신 분',
        '업무의 경계 없이 적극적이고, 꼼꼼하게 업무를 하실 수 있는 분',
        '명확하고 원활한 커뮤니케이션이 가능한 분',
      ],
      preferList: [
        '국가 지원사업 및 예산 관리 업무 경력자',
        '유관업무 경험 및 경력자',
        '유관업무 자격증 보유자',
        '더존 프로그램 사용 경험자',
      ],
    },
  ],
})
