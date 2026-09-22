import { useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    category: 'WEB SERVICE',
    title: '다이어트핏',
    description: '사용자의 운동과 식단 관리를 돕기 위해 제작한 웹 프로젝트입니다.',
    tech: ['React', 'JavaScript', 'Spring'],
    detail: {
      period: '2025',
      type: '팀 프로젝트',
      role: 'Frontend / Backend',
      overview:
        '사용자가 자신의 운동과 식단을 효율적으로 관리할 수 있도록 제작한 웹 서비스입니다. 운동 기록과 식단 정보를 한 곳에서 확인할 수 있도록 구성했습니다.',
      features: [
        '회원가입 및 로그인',
        '운동 및 식단 기록',
        '사용자별 데이터 관리',
        '운동 정보 조회',
        '반응형 웹 화면 구성',
      ],
      contribution:
        '프로젝트의 웹 화면 구성과 주요 기능 구현에 참여했습니다. 사용자 입장에서 화면 흐름을 고민하고 필요한 기능을 구현했습니다.',
    },
    visual: 'diet-visual',
  },
  {
    number: '02',
    category: 'E-COMMERCE',
    title: '옷 쇼핑몰',
    description:
      '다양한 의류 상품을 확인하고 원하는 상품을 편리하게 찾아볼 수 있도록 제작한 쇼핑몰 프로젝트입니다.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    detail: {
      period: '2025',
      type: '개인 프로젝트',
      role: 'Frontend',
      overview:
        '온라인에서 다양한 의류 상품을 확인하고 상품 정보를 편리하게 살펴볼 수 있는 쇼핑몰 형태의 웹 사이트입니다.',
      features: [
        '상품 목록 화면',
        '상품 상세 화면',
        '카테고리별 상품 구성',
        '상품 이미지 및 정보 표시',
        '쇼핑몰 UI 구현',
      ],
      contribution:
        '전체적인 웹 페이지 구조와 UI를 직접 구성하고 HTML, CSS, JavaScript를 활용해 화면을 구현했습니다.',
    },
    visual: 'clothes-visual',
  },
  {
    number: '03',
    category: 'E-COMMERCE',
    title: '신발 쇼핑몰',
    description:
      '다양한 신발 상품을 확인하고 상품 정보를 편리하게 확인할 수 있도록 제작한 쇼핑몰 프로젝트입니다.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    detail: {
      period: '2025',
      type: '개인 프로젝트',
      role: 'Frontend',
      overview:
        '신발 상품을 카테고리별로 확인하고 원하는 상품의 정보를 쉽게 확인할 수 있도록 제작한 웹 쇼핑몰입니다.',
      features: [
        '신발 상품 목록',
        '상품 상세 정보',
        '카테고리 구성',
        '상품 이미지 UI',
        '사용자 중심의 화면 구성',
      ],
      contribution:
        '쇼핑몰의 전체적인 화면 구조를 설계하고 상품 목록과 상세 화면 등의 UI를 구현했습니다.',
    },
    visual: 'shoes-visual',
  },
  {
    number: '04',
    category: 'GRADUATION PROJECT',
    title: '퍼스널 컬러 진단',
    description:
      '사용자의 피부색을 기준으로 퍼스널 컬러를 진단할 수 있도록 구현한 졸업 프로젝트입니다.',
    tech: ['Java', 'Spring', 'JavaScript'],
    detail: {
      period: '2025',
      type: '졸업 프로젝트',
      role: '개발',
      overview:
        '사용자의 피부색 정보를 바탕으로 퍼스널 컬러를 진단하고 그에 맞는 색상 정보를 제공하는 웹 서비스입니다.',
      features: [
        '퍼스널 컬러 진단',
        '사용자 정보 입력',
        '진단 결과 제공',
        '컬러 정보 안내',
        'Spring MVC 기반 웹 구현',
      ],
      contribution:
        '웹 서비스의 기능 구현과 화면 구성을 진행했습니다. 사용자 입력부터 결과가 표시되는 과정까지의 흐름을 구현했습니다.',
    },
    visual: 'color-visual',
  },
  {
    number: '05',
    category: 'WEB SERVICE',
    title: '블로그 사이트',
    description:
      '게시글을 작성하고 확인할 수 있는 블로그 형태의 웹 사이트를 제작했습니다.',
    tech: ['Java', 'Spring', 'Oracle'],
    detail: {
      period: '2025',
      type: '개인 프로젝트',
      role: 'Full Stack',
      overview:
        '사용자가 게시글을 작성하고 조회할 수 있도록 구현한 블로그 형태의 웹 애플리케이션입니다.',
      features: [
        '게시글 작성',
        '게시글 조회',
        '게시글 수정 및 삭제',
        'Oracle 데이터베이스 연동',
        'Spring MVC 기반 서버 구현',
      ],
      contribution:
        'Spring MVC를 활용한 서버 기능과 Oracle 데이터베이스를 연동하고 게시판 기능을 구현했습니다.',
    },
    visual: 'blog-visual',
  },
  {
    number: '06',
    category: 'GAME',
    title: '운석 피하기',
    description:
      '떨어지는 운석을 피하면서 최대한 오래 살아남는 방식으로 제작한 웹 게임입니다.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    detail: {
      period: '2025',
      type: '개인 프로젝트',
      role: 'Frontend',
      overview:
        '화면 위에서 떨어지는 운석을 캐릭터가 피하면서 최대한 오래 살아남는 간단한 웹 게임입니다.',
      features: [
        '플레이어 이동',
        '운석 생성 및 이동',
        '충돌 판정',
        '점수 시스템',
        '게임 종료 처리',
      ],
      contribution:
        'JavaScript를 활용하여 게임의 움직임과 충돌 판정, 점수 계산 등의 핵심 기능을 직접 구현했습니다.',
    },
    visual: 'game-visual',
  },
  {
    number: '07',
    category: 'WEB SERVICE',
    title: '급여 계산 달력',
    description:
      '여러 곳에서 아르바이트를 하는 사용자가 근무 날짜와 시간을 기록하고 매달 달라지는 급여를 쉽게 계산하고 관리할 수 있도록 만든 웹 서비스입니다.',
    tech: ['React', 'JavaScript', 'CSS'],
    detail: {
      period: '2026',
      type: '개인 프로젝트',
      role: 'Frontend',
      overview:
        '여러 곳에서 아르바이트를 하는 사용자가 근무 날짜와 시간을 기록하고 월별 급여를 쉽게 계산할 수 있도록 만든 급여 계산 웹 서비스입니다.',
      features: [
        '아르바이트 추가',
        '근무 날짜 선택',
        '근무 시간 입력',
        '시급 설정',
        '월별 급여 계산',
        '캘린더 기반 근무 관리',
      ],
      contribution:
        '아이디어 구상부터 화면 설계, 기능 구현까지 전체 프로젝트를 직접 진행했습니다. React의 컴포넌트와 상태 관리를 활용해 근무 정보와 급여 계산 기능을 구현했습니다.',
    },
    visual: 'salary-visual',
  },
]

function ProjectVisual({ project }) {
  if (project.visual === 'diet-visual') {
    return (
      <div className="project-visual diet-visual">
        <div className="visual-title">
          DIET
          <br />
          <strong>FIT</strong>
        </div>
        <div className="visual-circle">
          <span>HEALTH</span>
        </div>
      </div>
    )
  }

  if (project.visual === 'clothes-visual') {
    return (
      <div className="project-visual clothes-visual">
        <div className="shop-visual-title">
          CLOTHES
          <br />
          <strong>SHOP</strong>
        </div>
        <div className="shop-visual-line"></div>
        <div className="clothes-shape">
          <span></span>
        </div>
      </div>
    )
  }

  if (project.visual === 'shoes-visual') {
    return (
      <div className="project-visual shoes-visual">
        <div className="shoes-visual-title">
          SHOE
          <br />
          <strong>STORE</strong>
        </div>
        <div className="shoe-shape">
          <span></span>
        </div>
      </div>
    )
  }

  if (project.visual === 'color-visual') {
    return (
      <div className="project-visual color-visual">
        <div className="color-title">
          PERSONAL
          <br />
          <strong>COLOR</strong>
        </div>
        <div className="color-palette">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }

  if (project.visual === 'blog-visual') {
    return (
      <div className="project-visual blog-visual">
        <div className="blog-visual-title">
          MY
          <br />
          <strong>BLOG</strong>
        </div>
        <div className="blog-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }

  if (project.visual === 'game-visual') {
    return (
      <div className="project-visual game-visual">
        <div className="game-title">
          AVOID
          <br />
          <strong>METEOR</strong>
        </div>
        <div className="meteor meteor-one"></div>
        <div className="meteor meteor-two"></div>
        <div className="meteor meteor-three"></div>
        <div className="player"></div>
      </div>
    )
  }

  return (
    <div className="project-visual salary-visual">
      <div className="browser-window">
        <div className="browser-top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-content">
          <div className="fake-header">SALARY PLAN</div>

          <div className="fake-calendar">
            <div className="calendar-title">2026. 09</div>

            <div className="calendar-grid">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>

              <b>1</b>
              <b>2</b>
              <b>3</b>
              <b>4</b>
              <b>5</b>
              <b>6</b>
              <b>7</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="프로젝트 상세 닫기"
        >
          ×
        </button>

        <div className="modal-header">
          <div>
            <span className="modal-number">{project.number}</span>
            <p className="modal-category">{project.category}</p>
            <h2>{project.title}</h2>
          </div>

          <div className="modal-tech">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-visual">
            <ProjectVisual project={project} />
          </div>

          <div className="modal-info">
            <div className="modal-meta">
              <div>
                <span>PERIOD</span>
                <strong>{project.detail.period}</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>{project.detail.type}</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>{project.detail.role}</strong>
              </div>
            </div>

            <div className="modal-section">
              <span className="modal-section-title">PROJECT OVERVIEW</span>
              <p>{project.detail.overview}</p>
            </div>

            <div className="modal-section">
              <span className="modal-section-title">KEY FEATURES</span>

              <ul className="feature-list">
                {project.detail.features.map((feature, index) => (
                  <li key={feature}>
                    <span>0{index + 1}</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <span className="modal-section-title">MY CONTRIBUTION</span>
              <p>{project.detail.contribution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          EUNJIN<span>.</span>
        </a>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <span className="nav-status">AVAILABLE FOR WORK</span>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-background-text">DEVELOPER</div>

          <div className="hero-content">
            <p className="hero-label">FRONTEND DEVELOPER</p>

            <h1>
              안녕하세요, <span>김은진</span>입니다.
            </h1>

            <p className="hero-description">
              아이디어를 실제 서비스로 구현하고 하나씩 문제를 해결하며
              성장하는 개발자입니다.
            </p>

            <a href="#projects" className="hero-link">
              VIEW MY WORK <span>↓</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>

            <div className="scroll-line">
              <span></span>
            </div>

            <span>01 / 05</span>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="section-top">
            <span>02</span>
            <span>ABOUT ME</span>
          </div>

          <div className="about-layout">
            <div className="about-title">
              <p>WHO I AM</p>
              <h2>사용자에게 필요한 것을 고민하는 개발자</h2>
            </div>

            <div className="about-text">
              <p className="about-highlight">
                단순히 기능을 만드는 것보다{' '}
                <strong>왜 필요한 기능인지</strong>를 먼저 생각합니다.
              </p>

              <p>
                프로젝트를 진행하면서 문제를 발견하고, 필요한 기능을 직접
                설계하고 구현하는 과정을 좋아합니다. 새로운 기술을 배우는
                것에 그치지 않고 실제 서비스에 적용하면서 이해하려고 노력하고
                있습니다.
              </p>

              <p>
                작은 기능이라도 사용자의 입장에서 생각하고 더 편리한 방법을
                고민하는 개발자가 되고 싶습니다.
              </p>

              <a href="#projects" className="text-link">
                SEE MY PROJECTS →
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="section-top">
            <span>03</span>
            <span>SKILLS</span>
          </div>

          <div className="skills-intro">
            <p>WHAT I USE</p>
            <h2>
              배우고,
              <br />
              만들고,
              <br />
              성장합니다.
            </h2>
          </div>

          <div className="skills-list">
            <div className="skill-item">
              <span>01</span>
              <h3>Java</h3>
              <p>객체지향 프로그래밍과 기본적인 서버 개발</p>
            </div>

            <div className="skill-item">
              <span>02</span>
              <h3>Spring</h3>
              <p>Spring MVC 기반 웹 애플리케이션 개발</p>
            </div>

            <div className="skill-item">
              <span>03</span>
              <h3>React</h3>
              <p>컴포넌트 기반의 웹 UI 개발</p>
            </div>

            <div className="skill-item">
              <span>04</span>
              <h3>JavaScript</h3>
              <p>웹 페이지의 동작과 기능 구현</p>
            </div>

            <div className="skill-item">
              <span>05</span>
              <h3>HTML / CSS</h3>
              <p>웹 페이지 구조와 반응형 UI 구현</p>
            </div>

            <div className="skill-item">
              <span>06</span>
              <h3>Git / GitHub</h3>
              <p>버전 관리와 프로젝트 관리</p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="section-top">
            <span>04</span>
            <span>SELECTED PROJECTS</span>
          </div>

          <div className="projects-header">
            <p>MY WORK</p>
            <h2>
              직접 만들고
              <br />
              경험한 프로젝트
            </h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project project-clickable"
                key={project.number}
                onClick={() => openProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    openProject(project)
                  }
                }}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <span className="project-link">
                      VIEW DETAILS <span>↗</span>
                    </span>
                  </div>

                  <ProjectVisual project={project} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-top">
            <span>05</span>
            <span>CONTACT</span>
          </div>

          <div className="contact-content">
            <p className="contact-label">Thank you for taking the time to visit my portfolio.</p>

            <h2>
              감사합니다<span>!</span>
            </h2>

            <a
              href="mailto:dmswls0062@naver.com"
              className="contact-email"
            >
              dmswls0062@naver.com
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              GITHUB ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          EUNJIN<span>.</span>
        </div>

        <p>© 2026 EUNJIN. ALL RIGHTS RESERVED.</p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </div>
  )
}

export default App