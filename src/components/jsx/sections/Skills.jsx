import '../../css/sections/Skills.css'

const skillGroups = [
  {
    number: '01',
    title: 'LANGUAGE',
    skills: ['Java', 'JavaScript', 'Python'],
  },
  {
    number: '02',
    title: 'FRONTEND',
    skills: ['React', 'HTML / CSS', 'JSP'],
  },
  {
    number: '03',
    title: 'BACKEND',
    skills: ['Spring', 'MyBatis', 'Node.js'],
  },
  {
    number: '04',
    title: 'DATABASE',
    skills: ['Oracle', 'MySQL'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills section">
      
      {/* SECTION HEADER */}
      <div className="section-top">
        <span>03</span>
        <span>SKILLS</span>
      </div>

      {/* INTRO */}
      <div className="skills-intro">
        <p>WHAT I USE</p>

        <h2>
          배우고,
          <br />
          직접 만들며
          <br />
          경험을 쌓았습니다.
        </h2>
      </div>

      {/* SKILL LIST */}
      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            
            <div className="skill-category">
              <span className="skill-number">
                {group.number}
              </span>

              <h3>{group.title}</h3>
            </div>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM MESSAGE */}
      <div className="skills-bottom">
        <span>ALWAYS LEARNING</span>

        <p>
          새로운 기술을 배우고,
          <br />
          직접 적용하며 성장하고 있습니다.
        </p>
      </div>

    </section>
  )
}

export default Skills