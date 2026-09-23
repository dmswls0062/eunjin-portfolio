import '../../css/sections/Skills.css'

const skills = [
  { number: '01', name: 'Java', desc: '객체지향 프로그래밍과 기본적인 서버 개발' },
  { number: '02', name: 'Spring', desc: 'Spring MVC 기반 웹 애플리케이션 개발' },
  { number: '03', name: 'React', desc: '컴포넌트 기반의 웹 UI 개발' },
  { number: '04', name: 'JavaScript', desc: '웹 페이지의 동작과 기능 구현' },
  { number: '05', name: 'HTML / CSS', desc: '웹 페이지 구조와 반응형 UI 구현' },
  { number: '06', name: 'Git / GitHub', desc: '버전 관리와 프로젝트 관리' },
]

function Skills() {
  return (
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
        {skills.map((skill) => (
          <div className="skill-item" key={skill.number}>
            <span>{skill.number}</span>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills