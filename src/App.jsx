import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
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

        <span className="nav-status">
          DEVELOPER PORTFOLIO
        </span>
      </header>


      {/* HERO */}
      <main>

        <section id="home" className="hero">

          <div className="hero-background-text">
            DEVELOPER
          </div>

          <div className="hero-content">

            <p className="hero-label">
              FRONTEND DEVELOPER
            </p>

            <h1>
              안녕하세요
              <br />
              <span>김은진</span>입니다.
            </h1>

            <p className="hero-description">
              아이디어를 실제 서비스로 구현하고
              <br />
              하나씩 문제를 해결하며 성장하는 개발자입니다.
            </p>

            <a href="#projects" className="hero-link">
              VIEW MY WORK
              <span>↓</span>
            </a>

          </div>

          <div className="hero-bottom">
            <span>SCROLL DOWN</span>

            <div className="scroll-line">
              <span></span>
            </div>

            <span>01 / 04</span>
          </div>

        </section>


        {/* ABOUT */}
        <section id="about" className="about section">

          <div className="section-top">
            <span>02</span>
            <span>ABOUT ME</span>
          </div>

          <div className="about-layout">

            <div className="about-title">
              <p>WHO I AM</p>

              <h2>
                사용자에게 필요한 것을
                <br />
                고민하는 개발자
              </h2>
            </div>

            <div className="about-text">

              <p className="about-highlight">
                단순히 기능을 만드는 것보다
                <br />
                <strong>왜 필요한 기능인지</strong>를 먼저 생각합니다.
              </p>

              <p>
                프로젝트를 진행하면서 문제를 발견하고,
                필요한 기능을 직접 설계하고 구현하는 과정을 좋아합니다.
                새로운 기술을 배우는 것에 그치지 않고 실제 서비스에
                적용하면서 이해하려고 노력하고 있습니다.
              </p>

              <p>
                작은 기능이라도 사용자의 입장에서 생각하고
                더 편리한 방법을 고민하는 개발자가 되고 싶습니다.
              </p>

              <a href="#projects" className="text-link">
                SEE MY PROJECTS →
              </a>

            </div>

          </div>

        </section>


        {/* SKILLS */}
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
              <p>버전 관리와 프로젝트 협업</p>
            </div>

          </div>

        </section>


        {/* PROJECTS */}
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


          {/* PROJECT 01 */}
          <article className="project">

            <div className="project-number">
              01
            </div>

            <div className="project-main">

              <div className="project-info">

                <p className="project-category">
                  WEB SERVICE
                </p>

                <h3>
                  급여 계산기
                </h3>

                <p className="project-description">
                  여러 곳에서 아르바이트를 하는 사용자가
                  매달 달라지는 급여를 쉽게 계산하고
                  관리할 수 있도록 만든 웹 서비스입니다.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>

                <a href="#" className="project-link">
                  VIEW PROJECT
                  <span>↗</span>
                </a>

              </div>

              <div className="project-visual salary-visual">

                <div className="browser-window">

                  <div className="browser-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-content">

                    <div className="fake-header">
                      SALARY PLAN
                    </div>

                    <div className="fake-calendar">

                      <div className="calendar-title">
                        2026. 09
                      </div>

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

            </div>

          </article>


          {/* PROJECT 02 */}
          <article className="project reverse">

            <div className="project-number">
              02
            </div>

            <div className="project-main">

              <div className="project-info">

                <p className="project-category">
                  WEB SERVICE
                </p>

                <h3>
                  다이어트핏
                </h3>

                <p className="project-description">
                  사용자의 운동과 식단 관리를 돕기 위해
                  제작한 웹 프로젝트입니다.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Spring</span>
                </div>

                <a href="#" className="project-link">
                  VIEW PROJECT
                  <span>↗</span>
                </a>

              </div>

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

            </div>

          </article>


          {/* PROJECT 03 */}
          <article className="project">

            <div className="project-number">
              03
            </div>

            <div className="project-main">

              <div className="project-info">

                <p className="project-category">
                  GRADUATION PROJECT
                </p>

                <h3>
                  퍼스널 컬러 진단
                </h3>

                <p className="project-description">
                  사용자의 피부색을 기준으로 퍼스널 컬러를
                  진단할 수 있도록 구현한 졸업 프로젝트입니다.
                </p>

                <div className="project-tech">
                  <span>Java</span>
                  <span>Spring</span>
                  <span>JavaScript</span>
                </div>

                <a href="#" className="project-link">
                  VIEW PROJECT
                  <span>↗</span>
                </a>

              </div>

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

            </div>

          </article>

        </section>


        {/* CONTACT */}
        <section id="contact" className="contact section">

          <div className="section-top">
            <span>05</span>
            <span>CONTACT</span>
          </div>

          <div className="contact-content">

            <p className="contact-label">
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              함께
              <br />
              만들어볼까요<span>?</span>
            </h2>

            <a
              href="mailto:your-email@example.com"
              className="contact-email"
            >
              your-email@example.com
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


      {/* FOOTER */}
      <footer>

        <div>
          EUNJIN<span>.</span>
        </div>

        <p>
          © 2026 EUNJIN. ALL RIGHTS RESERVED.
        </p>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  )
}

export default App