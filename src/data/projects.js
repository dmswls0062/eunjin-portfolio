export const projects = [
  {
    number: '01',
    category: 'E-COMMERCE / WEB SERVICE',
    title: '다이어트핏',
    description:
      '다이어트 식품을 판매하는 온라인 쇼핑몰 형태의 웹 서비스로, 상품 탐색부터 구매와 판매자 관리까지 다양한 기능을 구현했습니다.',

    tech: ['Java', 'Spring MVC', 'MyBatis', 'Oracle', 'JavaScript', 'CSS'],

    detail: {
      period: '2023.12 ~ 2024.02',
      type: '팀 프로젝트',
      role: 'Frontend / Backend',

      overview:
        '다이어트에 대한 관심이 높아지는 가운데 사용자가 자신의 목적에 맞는 상품과 식단 정보를 쉽게 탐색할 수 있는 서비스를 구현하고자 시작한 프로젝트입니다. 일반적인 쇼핑몰 기능뿐만 아니라 판매자 관리 기능까지 포함하여 실제 서비스의 구조를 경험할 수 있도록 구성했습니다.',

      features: [
        '판매자 상품 등록 및 관리',
        '상품 조회·수정·삭제',
        '메인 페이지 광고 신청 및 배너 관리',
        '판매자별 매출 및 정산 내역 조회',
        'Chart.js를 활용한 매출 데이터 시각화',
        '일간·주간·월간·전체 판매량 순위 조회',
        '상품 리뷰 조회 및 관리',
      ],

      contribution:
        '프론트엔드와 백엔드 개발을 함께 담당하여 화면 구성부터 서버 로직, 데이터베이스 연동까지 구현했습니다. 사용자와 판매자 화면을 각각 구성하고 상품·주문·광고·정산 등의 데이터를 조회하고 처리하는 기능을 개발했습니다. 또한 Chart.js를 활용하여 판매 데이터를 시각적으로 확인할 수 있도록 구현했습니다.',
    },

    visual: 'diet-visual',

    visualImages: [
      {
        src: '/images/diet/main.png',
        label: 'MAIN PAGE',
      },
      {
        src: '/images/diet/seller-products.png',
        label: 'SELLER · PRODUCT LIST',
      },
      {
        src: '/images/diet/seller-product-edit.png',
        label: 'SELLER · PRODUCT EDIT',
      },
      {
        src: '/images/diet/seller-orders.png',
        label: 'SELLER · ORDER LIST',
      },
      {
        src: '/images/diet/seller-settlement.png',
        label: 'SELLER · SETTLEMENT',
      },
      {
        src: '/images/diet/seller-ad-list.png',
        label: 'SELLER · AD LIST',
      },
      {
        src: '/images/diet/seller-ad-apply.png',
        label: 'SELLER · AD APPLICATION',
      },
      {
        src: '/images/diet/reviews.png',
        label: 'PRODUCT REVIEWS',
      },
      {
        src: '/images/diet/myreviews.png',
        label: 'MY REVIEWS',
      },
      {
        src: '/images/diet/products.png',
        label: 'PRODUCT LIST',
      },
    ],
  },

  // =====================================================
  // 02. 옷 쇼핑몰
  // =====================================================

  {
    number: '02',
    category: 'E-COMMERCE',
    title: '옷 쇼핑몰',
    description:
      '웹 개발 학습 과정에서 익힌 기술을 직접 적용해 프론트엔드와 백엔드 전반을 구현한 개인 쇼핑몰 프로젝트입니다.',

    tech: ['Java', 'JSP', 'DAO', 'JavaScript', 'Oracle'],

    detail: {
      period: '2023.12 ~ 2023.12',
      type: '개인 프로젝트',
      role: 'Frontend / Backend',

      overview:
        '국비 교육 과정에서 웹 개발을 학습하며 팀 프로젝트를 진행한 후, 다른 팀원들의 코드를 살펴보면서 다양한 구현 방식과 기능에 관심을 가지게 되었습니다. 학습한 내용을 단순히 따라가는 데 그치지 않고 직접 설계하고 적용해보고자 쇼핑몰을 주제로 개인 프로젝트를 진행했습니다. 실제 쇼핑몰에서 사용되는 회원, 상품, 장바구니, 주문 등의 기능을 구현하며 웹 애플리케이션의 전체적인 흐름을 경험했습니다.',

      features: [
        '회원가입 및 로그인',
        '회원 정보 수정',
        '상품 목록 및 상세 조회',
        '장바구니 상품 관리',
        '상품 주문 및 주문 조회',
        '관리자 회원 관리',
        '관리자 주문 관리',
        '상품 등록 및 관리',
      ],

      contribution:
        '개인 프로젝트로 프론트엔드와 백엔드 개발을 모두 담당했습니다. JSP와 Java를 활용해 사용자 화면과 서버 기능을 구현하고 DAO를 통해 데이터베이스와의 CRUD 처리를 구성했습니다. Oracle을 연동하여 회원, 상품, 장바구니, 주문 데이터를 관리하고 사용자와 관리자 기능을 각각 구현했습니다.',
    },

    visual: 'clothes-visual',

    visualImages: [
      {
        src: '/images/clothes/main.png',
        label: 'MAIN PAGE',
      },
      {
        src: '/images/clothes/product-detail.png',
        label: 'PRODUCT DETAIL',
      },
      {
        src: '/images/clothes/product-register.png',
        label: 'PRODUCT REGISTER',
      },
      {
        src: '/images/clothes/admin-members.png',
        label: 'ADMIN · MEMBER MANAGEMENT',
      },
    ],
  },

  // =====================================================
  // 03. 신발 쇼핑몰
  // =====================================================

  {
    number: '03',
    category: 'TEAM PROJECT / E-COMMERCE',
    title: '신발 쇼핑몰',
    description:
      '웹 개발의 기본기를 실제 쇼핑몰에 적용해 상품, 장바구니, 주문, 리뷰 기능을 구현한 팀 프로젝트입니다.',

    tech: ['Java', 'JSP', 'Oracle', 'JavaScript'],

    detail: {
      period: '2023.10 ~ 2023.11',
      type: '팀 프로젝트',
      role: 'Frontend / Backend',

      overview:
        '웹 개발 교육을 통해 익힌 기술을 실제 서비스 형태로 구현해보고자 쇼핑몰 프로젝트를 진행했습니다. 쇼핑몰은 상품 조회부터 장바구니, 주문, 리뷰까지 다양한 기능이 연결되어 있어 학습한 기술을 종합적으로 적용하기에 적합한 주제라고 판단했습니다. 팀원들과 함께 기능을 나누어 개발하며 웹 서비스의 전체적인 흐름을 경험했습니다.',

      features: [
        '상품 조회 및 상세 정보 확인',
        '장바구니 상품 관리',
        '상품 주문',
        '주문 내역 조회',
        '리뷰 게시판 작성 및 조회',
      ],

      contribution:
        '팀 프로젝트에서 프론트엔드와 백엔드 개발을 모두 담당했습니다. Java와 JSP를 활용해 사용자 화면을 구성하고 Oracle 데이터베이스를 연동하여 장바구니, 주문, 리뷰 데이터를 처리했습니다. 화면과 서버 기능이 자연스럽게 연결되도록 각 기능의 데이터 흐름을 구현했습니다.',
    },

    visual: 'shoes-visual',

    visualImages: [
      {
        src: '/images/shoes/main.png',
        label: 'MAIN PAGE',
      },
      {
        src: '/images/shoes/product-detail.png',
        label: 'PRODUCT DETAIL',
      },
      {
        src: '/images/shoes/cart.png',
        label: 'SHOPPING CART',
      },
      {
        src: '/images/shoes/orders.png',
        label: 'ORDER HISTORY',
      },
      {
        src: '/images/shoes/reviews.png',
        label: 'REVIEW BOARD',
      },
    ],
  },

  // =====================================================
  // 04. 퍼스널 컬러 진단
  // =====================================================

  {
    number: '04',
    category: 'GRADUATION PROJECT',
    title: '퍼스널 컬러 진단',
    description:
      '사용자가 이미지를 업로드하면 피부톤을 분석하여 퍼스널 컬러를 확인할 수 있도록 구현한 졸업 프로젝트입니다.',

    tech: ['Python', 'Jupyter Notebook', 'Flask', 'MySQL'],

    detail: {
      period: '2023.03 ~ 2023.05',
      type: '팀 프로젝트',
      role: 'Backend',

      overview:
        '퍼스널 컬러에 대한 관심이 높아지면서 사용자가 별도의 전문적인 진단 과정 없이 자신의 이미지를 통해 퍼스널 컬러를 확인할 수 있는 서비스를 만들어보고자 프로젝트를 진행했습니다. 사용자가 사진을 업로드하면 이미지에서 피부톤을 분석하고 분석 결과를 바탕으로 퍼스널 컬러를 확인할 수 있도록 구성했습니다.',

      features: [
        '사용자 이미지 업로드',
        '이미지 기반 피부톤 분석',
        '피부톤 데이터 추출 및 처리',
        '퍼스널 컬러 진단',
        '진단 결과 제공',
      ],

      contribution:
        '팀 프로젝트에서 백엔드 개발을 담당했습니다. Python과 Flask를 활용하여 사용자가 업로드한 이미지가 서버로 전달되고 분석 결과가 처리되는 흐름을 구현했습니다. Jupyter Notebook을 활용해 이미지 데이터를 분석하고, 진단에 필요한 데이터를 처리하여 결과 화면으로 전달하는 기능을 개발했습니다.',
    },

    visual: 'color-visual',

    visualImages: [
      {
        src: '/images/color/main.png',
        label: 'MAIN PAGE',
      },
      {
        src: '/images/color/color-upload.png',
        label: 'COLOR DIAGNOSIS · IMAGE UPLOAD',
      },
      {
        src: '/images/color/color-result.png',
        label: 'COLOR DIAGNOSIS · RESULT',
      },
    ],
  },

  // =====================================================
  // 05. 블로그 사이트
  // =====================================================

  {
    number: '05',
    category: 'COMMUNITY / WEB SERVICE',
    title: '블로그 사이트',
    description:
      'Spring MVC 구조와 다중 이미지 업로드 기능을 학습하고 실제 게시판 형태로 구현한 팀 프로젝트입니다.',

    tech: ['Java', 'STS', 'Oracle', 'Spring MVC'],

    detail: {
      period: '2023.12 ~ 2023.12',
      type: '팀 프로젝트',
      role: 'Frontend / Backend',

      overview:
        '웹 개발 교육 과정에서 학습한 Spring MVC 구조를 실제 프로젝트에 적용하고, 게시판 기능 중 구현 난도가 높다고 느꼈던 이미지 업로드를 직접 경험하기 위해 제작했습니다. 하나의 게시글에 여러 이미지를 첨부할 수 있는 게시판을 중심으로 구성하여 MVC 구조와 파일 업로드 처리 과정을 함께 학습했습니다.',

      features: [
        '다중 이미지 업로드 게시판',
        '게시글 등록',
        '게시글 조회',
        '게시글 수정',
        '게시글 삭제',
      ],

      contribution:
        '팀 프로젝트에서 프론트엔드와 백엔드 개발을 담당했습니다. Spring MVC 구조를 기반으로 게시판의 등록·조회·수정·삭제 기능을 구현하고 Oracle 데이터베이스를 연동했습니다. 특히 여러 이미지를 하나의 게시글에 업로드하고 게시글과 연결하여 관리할 수 있도록 파일 업로드 기능을 구현했습니다.',
    },

    visual: 'blog-visual',

    visualImages: [
      {
        src: '/images/blog/main.png',
        label: 'MAIN · NOTICE PAGE',
      },
      {
        src: '/images/blog/post-list.png',
        label: 'IMAGE BOARD · LIST',
      },
      {
        src: '/images/blog/post-detail.png',
        label: 'IMAGE BOARD · DETAIL',
      },
    ],
  },

  // =====================================================
  // 06. 운석 피하기
  // =====================================================

  {
    number: '06',
    category: 'GAME',
    title: '운석 피하기',
    description:
      '대학교 게임 프로그래밍 수업에서 Python과 Pygame을 활용하여 제작한 2D 게임 프로젝트입니다.',

    tech: ['Python', 'Pygame', 'VS Code'],

    detail: {
      period: '2021.05 ~ 2021.05',
      type: '개인 프로젝트',
      role: 'Frontend / Backend',

      overview:
        '대학교 재학 중 게임 프로그래밍 수업을 통해 제작한 개인 프로젝트입니다. 플레이어가 화면 위에서 떨어지는 운석을 피하면서 게임을 진행하고, 생존 과정에서 획득한 점수를 기록할 수 있는 간단한 2D 게임으로 구현했습니다.',

      features: [
        '플레이어 이동',
        '운석 생성 및 이동',
        '운석과 플레이어의 충돌 판정',
        '게임 점수 처리',
        '게임 시작 및 종료',
        '게임 오버 처리',
      ],

      contribution:
        '개인 프로젝트로 게임의 전체적인 구조와 기능을 직접 구현했습니다. Python과 Pygame을 활용하여 플레이어와 운석의 움직임을 구현하고 충돌 여부를 판정했습니다. 충돌이 발생하면 게임을 종료하고 플레이 중 획득한 점수를 표시하도록 게임의 기본적인 흐름을 구성했습니다.',
    },

    visual: 'game-visual',

    visualImages: [
      {
        src: '/images/game/game-start.png',
        label: 'GAME START',
      },
      {
        src: '/images/game/game-over.png',
        label: 'GAME OVER',
      },
    ],
  },

  // =====================================================
  // 07. 급여 계산 사이트
  // =====================================================

  {
    number: '07',
    category: 'WEB SERVICE',
    title: '급여 계산 달력',
    description:
      '여러 아르바이트의 근무 정보를 달력에 기록하고 근무시간과 시급을 기준으로 예상 급여를 계산할 수 있는 웹 서비스입니다.',

    tech: ['React', 'Node.js'],

    detail: {
      period: '2026.08 ~ 2026.08',
      type: '개인 프로젝트',
      role: 'Frontend',

      overview:
        '학업과 아르바이트를 병행하는 친구가 여러 곳에서 근무하면서 매달 달라지는 근무일과 시간을 직접 확인해 급여를 계산하는 과정이 번거롭다는 이야기를 듣고 시작한 프로젝트입니다. 여러 아르바이트의 근무 정보를 한곳에서 관리하고, 달력에 근무 내역을 기록하면 예상 급여를 쉽게 확인할 수 있도록 서비스를 구현했습니다.',

      features: [
        '아르바이트 정보 추가',
        '근무일 및 근무시간 기록',
        '아르바이트별 시급 관리',
        '월별 예상 급여 계산',
        '야간수당 적용 여부 설정',
        '캘린더 기반 근무 관리',
      ],

      contribution:
        '아이디어 구상부터 화면 설계와 기능 구현까지 전체 프로젝트를 직접 진행했습니다. React를 활용하여 여러 아르바이트 정보를 관리하고 날짜별 근무 내역을 기록할 수 있는 캘린더를 구현했습니다. 입력된 근무시간과 시급을 기반으로 월별 예상 급여를 계산하고 야간수당 적용 여부에 따라 결과가 달라지도록 기능을 구성했습니다.',
    },

    visual: 'salary-visual',

    url: 'https://dmswls0062.github.io/salary-plan/',

    visualImages: [
      {
        src: '/images/salary/main.png',
        label: 'MAIN PAGE',
      },
      {
        src: '/images/salary/job-add.png',
        label: 'ADD PART-TIME JOB',
      },
      {
        src: '/images/salary/work-add.png',
        label: 'ADD WORK',
      },
      {
        src: '/images/salary/work-detail.png',
        label: 'WORK DETAIL',
      },
    ],
  },
]