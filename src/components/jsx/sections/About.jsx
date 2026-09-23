import '../../css/sections/About.css'

function About() {
  return (
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
            단순히 기능을 만드는 것보다 <strong>왜 필요한 기능인지</strong>를
            먼저 생각합니다.
          </p>

          <p>
            프로젝트를 진행하면서 문제를 발견하고, 필요한 기능을 직접
            설계하고 구현하는 과정을 좋아합니다. 새로운 기술을 배우는 것에
            그치지 않고 실제 서비스에 적용하면서 이해하려고 노력하고
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
  )
}

export default About