export const projects = [
  {
    number: '01',
    category: 'E-COMMERCE / WEB SERVICE',
    title: '다이어트핏',
    description:
      '다이어트 식품을 판매하는 스마트스토어 형태의 웹 서비스로, 다양한 상품을 한눈에 확인할 수 있도록 구성했습니다.',
    tech: ['React', 'JavaScript', 'Spring'],
    detail: {
      period: '2025',
      type: '팀 프로젝트',
      role: 'Frontend / Backend',
      overview:
        '다이어트에 관심이 있는 사용자가 다양한 건강·다이어트 식품을 쉽게 찾아보고 상품 정보를 확인할 수 있도록 제작한 스마트스토어 형태의 웹 서비스입니다.',
      features: [
        '다이어트 식품 상품 목록',
        '상품 상세 정보',
        '카테고리별 상품 구성',
        '상품 정보 및 가격 표시',
        '사용자가 쉽게 상품을 탐색할 수 있는 UI',
      ],
      contribution:
        '프로젝트의 웹 화면 구성과 주요 기능 구현에 참여했습니다. 사용자가 상품을 쉽게 탐색할 수 있도록 화면 흐름과 UI를 구성했습니다.',
    },
    visual: 'diet-visual',
  },

  {
    number: '02',
    category: 'E-COMMERCE',
    title: '옷 쇼핑몰',
    description:
      '의류 상품을 확인하고 원하는 상품의 정보를 쉽게 찾아볼 수 있도록 제작한 개인 쇼핑몰 프로젝트입니다.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    detail: {
      period: '2025',
      type: '개인 프로젝트',
      role: 'Frontend',
      overview:
        '다양한 의류 상품을 온라인에서 확인하고 상품 정보와 카테고리를 편리하게 탐색할 수 있도록 제작한 개인 쇼핑몰 형태의 웹 사이트입니다.',
      features: [
        '의류 상품 목록',
        '상품 상세 화면',
        '카테고리별 상품 구성',
        '상품 이미지 및 가격 표시',
        '쇼핑몰 UI 구현',
      ],
      contribution:
        '아이디어부터 화면 구성까지 전체 웹 페이지를 직접 제작했습니다. HTML, CSS, JavaScript를 활용하여 상품 목록과 상세 화면 등 쇼핑몰의 주요 UI를 구현했습니다.',
    },
    visual: 'clothes-visual',
  },

  {
    number: '03',
    category: 'TEAM PROJECT / E-COMMERCE',
    title: '신발 쇼핑몰',
    description:
      '팀원들과 함께 제작한 신발 전문 쇼핑몰 프로젝트로, 다양한 신발 상품을 탐색할 수 있도록 구성했습니다.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    detail: {
      period: '2025',
      type: '팀 프로젝트',
      role: 'Frontend',
      overview:
        '다양한 신발 상품을 카테고리별로 확인하고 원하는 상품의 상세 정보를 쉽게 살펴볼 수 있도록 제작한 팀 프로젝트입니다.',
      features: [
        '신발 상품 목록',
        '상품 상세 정보',
        '카테고리별 상품 구성',
        '상품 이미지 및 가격 표시',
        '쇼핑몰 화면 구성',
      ],
      contribution:
        '팀원들과 함께 프로젝트의 화면을 구성하고 프론트엔드 개발을 담당했습니다. 상품 목록과 상세 화면 등 사용자에게 보여지는 주요 UI를 구현했습니다.',
    },
    visual: 'shoes-visual',
  },

  {
    number: '04',
    category: 'GRADUATION PROJECT',
    title: '퍼스널 컬러 진단',
    description:
      '사용자가 자신의 사진을 첨부하면 이미지에서 피부톤의 평균값을 추출하여 퍼스널 컬러를 진단하는 졸업 프로젝트입니다.',
    tech: ['Java', 'Spring', 'JavaScript'],
    detail: {
      period: '2025',
      type: '졸업 프로젝트',
      role: '개발',
      overview:
        '사용자가 자신의 사진을 업로드하면 이미지에서 피부톤의 평균값을 구하고, 추출된 피부톤을 기준으로 퍼스널 컬러를 진단할 수 있도록 구현한 졸업 프로젝트입니다.',
      features: [
        '사용자 이미지 첨부',
        '이미지 기반 피부톤 분석',
        '피부톤 평균값 추출',
        '퍼스널 컬러 진단',
        '진단 결과 및 컬러 정보 제공',
      ],
      contribution:
        '이미지를 첨부하면 이미지의 피부톤 평균값을 계산하고 이를 바탕으로 퍼스널 컬러를 진단하는 기능을 담당했습니다. 사용자의 이미지 입력부터 분석 결과가 표시되는 과정까지 구현했습니다.',
    },
    visual: 'color-visual',
  },

  {
    number: '05',
    category: 'COMMUNITY / WEB SERVICE',
    title: '블로그 사이트',
    description:
      '사용자가 게시글을 작성하고 다른 게시글을 확인할 수 있는 커뮤니티 형태의 웹 사이트입니다.',
    tech: ['Java', 'Spring', 'Oracle'],
    detail: {
      period: '2025',
      type: '개인 프로젝트',
      role: 'Full Stack',
      overview:
        '사용자가 게시글을 작성하고 조회·수정·삭제할 수 있도록 구현한 블로그 및 커뮤니티 형태의 웹 애플리케이션입니다.',
      features: [
        '게시글 작성',
        '게시글 조회',
        '게시글 수정 및 삭제',
        '게시글 목록 및 상세 화면',
        'Oracle 데이터베이스 연동',
        'Spring MVC 기반 서버 구현',
      ],
      contribution:
        'Spring MVC를 활용하여 서버 기능을 구현하고 Oracle 데이터베이스를 연동했습니다. 게시글의 작성, 조회, 수정, 삭제 등 커뮤니티의 기본적인 게시판 기능을 구현했습니다.',
    },
    visual: 'blog-visual',
  },

  {
    number: '06',
    category: 'GAME',
    title: '운석 피하기',
    description:
      'Python을 활용해 제작한 과제 프로젝트로, 떨어지는 운석을 피하면서 최대한 오래 살아남는 간단한 게임입니다.',
    tech: ['Python'],
    detail: {
      period: '2025',
      type: '과제 프로젝트',
      role: '개인 개발',
      overview:
        '화면 위에서 떨어지는 운석을 플레이어가 피하면서 최대한 오래 살아남는 방식으로 제작한 간단한 게임입니다.',
      features: [
        '플레이어 이동',
        '운석 생성 및 이동',
        '운석과 플레이어의 충돌 판정',
        '게임 진행 및 점수 처리',
        '게임 종료 처리',
      ],
      contribution:
        'Python을 활용하여 플레이어의 이동과 운석 생성, 이동, 충돌 판정 등 게임의 기본적인 동작을 구현했습니다.',
    },
    visual: 'game-visual',
  },

  {
    number: '07',
    category: 'WEB SERVICE',
    title: '급여 계산 달력',
    description:
      '여러 곳에서 아르바이트하는 사용자가 근무 날짜와 시간을 기록하고 월별 급여를 쉽게 계산할 수 있도록 만든 웹 서비스입니다.',
    tech: ['React', 'JavaScript', 'CSS'],
    detail: {
      period: '2026',
      type: '개인 프로젝트',
      role: 'Frontend',
      overview:
        '여러 곳에서 아르바이트를 하는 사용자가 근무 날짜와 시간을 기록하고 시급을 기준으로 월별 급여를 쉽게 계산할 수 있도록 만든 급여 계산 웹 서비스입니다.',
      features: [
        '아르바이트 추가',
        '근무 날짜 선택',
        '근무 시간 입력',
        '시급 설정',
        '월별 급여 계산',
        '캘린더 기반 근무 관리',
      ],
      contribution:
        '아이디어 구상부터 화면 설계와 기능 구현까지 전체 프로젝트를 직접 진행했습니다. React의 컴포넌트와 상태 관리를 활용해 여러 아르바이트의 근무 정보와 급여 계산 기능을 구현했습니다.',
    },
    visual: 'salary-visual',
  },
]