import { useState } from 'react'
import { projects } from '../../../data/projects'
import ProjectVisual from '../visuals/ProjectVisual'
import ProjectModal from '../ProjectModal'
import '../../css/sections/Projects.css'

function Projects() {
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
                event.preventDefault()
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

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </section>
  )
}

export default Projects