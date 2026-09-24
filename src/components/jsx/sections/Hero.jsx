import '../../css/sections/Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background-text">DEVELOPER</div>

      <div className="hero-content">
        <p className="hero-label">DEVELOPER</p>

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
        <span>SCROLL DOWN</span>

        <div className="scroll-line">
          <span></span>
        </div>

        <span>01 / 05</span>
      </div>
    </section>
  )
}

export default Hero