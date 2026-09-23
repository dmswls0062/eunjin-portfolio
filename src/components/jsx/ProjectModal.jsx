import ProjectVisual from './visuals/ProjectVisual'
import '../css/visuals/visuals.css'
import '../css/ProjectModal.css'

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
              <span className="modal-section-title">
                PROJECT OVERVIEW
              </span>

              <p>{project.detail.overview}</p>
            </div>

            <div className="modal-section">
              <span className="modal-section-title">
                KEY FEATURES
              </span>

              <ul className="feature-list">
                {project.detail.features.map((feature, index) => (
                  <li key={feature}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <span className="modal-section-title">
                MY CONTRIBUTION
              </span>

              <p>{project.detail.contribution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal