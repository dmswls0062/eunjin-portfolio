import { useEffect, useState } from 'react'
import ProjectVisual from './visuals/ProjectVisual'
import '../css/visuals/visuals.css'
import '../css/ProjectModal.css'

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0)
  const [isImageOpen, setIsImageOpen] = useState(false)

  // Vite의 base 경로를 자동으로 적용
  const getImagePath = (image) => {
    return `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`
  }

  // 프로젝트가 바뀌면 첫 번째 이미지부터 보여주기
  useEffect(() => {
    setActiveImage(0)
    setIsImageOpen(false)
  }, [project])

  // 이미지 확대 상태에서 ESC를 누르면 확대만 닫기
  useEffect(() => {
    if (!isImageOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsImageOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isImageOpen])

  if (!project) return null

  const images = project.visualImages || []
  const activeImageData = images[activeImage]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="프로젝트 상세 닫기"
        >
          ×
        </button>

        {/* HEADER */}
        <div className="modal-header">
          <div>
            <span className="modal-number">
              {project.number}
            </span>

            <p className="modal-category">
              {project.category}
            </p>

            <h2>{project.title}</h2>
          </div>

          <div className="modal-header-right">
            {/* TECH STACK */}
            <div className="modal-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {/* LIVE SITE */}
            {project.url && (
              <a
                className="modal-live-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                OPEN SITE
                <span>↗</span>
              </a>
            )}
          </div>
        </div>

        {/* BODY */}
        <div className="modal-body">

          {/* PROJECT VISUAL */}
          <div className="modal-visual">

            {/* 기존 visual */}
            {!images.length && (
              <ProjectVisual project={project} />
            )}

            {/* 실제 프로젝트 이미지 */}
            {images.length > 0 && activeImageData && (
              <>
                {/* 큰 이미지 */}
                <div
                  className="modal-main-image"
                  onClick={() => setIsImageOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      setIsImageOpen(true)
                    }
                  }}
                  aria-label={`${activeImageData.label} 크게 보기`}
                >
                  {/* 페이지 이름 */}
                  <span className="modal-image-label">
                    {activeImageData.label}
                  </span>

                  {/* 확대 안내 */}
                  <span className="modal-image-zoom">
                    CLICK TO ENLARGE
                  </span>

                  <img
                    src={getImagePath(activeImageData.src)}
                    alt={activeImageData.label}
                  />
                </div>

                {/* 썸네일 */}
                <div className="modal-thumbnails">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      className={`modal-thumbnail ${
                        activeImage === index ? 'active' : ''
                      }`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`${image.label} 보기`}
                    >
                      <img
                        src={getImagePath(image.src)}
                        alt={image.label}
                      />

                      <span>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* INFO */}
          <div className="modal-info">

            {/* META */}
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

            {/* PROJECT OVERVIEW */}
            <div className="modal-section">
              <span className="modal-section-title">
                PROJECT OVERVIEW
              </span>

              <p>{project.detail.overview}</p>
            </div>

            {/* MY WORK */}
            <div className="modal-section">
              <span className="modal-section-title">
                MY WORK
              </span>

              <ul className="feature-list">
                {project.detail.features.map((feature, index) => (
                  <li key={feature}>
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* MY CONTRIBUTION */}
            <div className="modal-section">
              <span className="modal-section-title">
                MY CONTRIBUTION
              </span>

              <p>{project.detail.contribution}</p>
            </div>

          </div>
        </div>
      </div>

      {/* IMAGE LIGHTBOX */}
      {isImageOpen && activeImageData && (
        <div
          className="image-lightbox"
          onClick={(event) => {
            event.stopPropagation()
            setIsImageOpen(false)
          }}
        >
          {/* 확대 이미지 닫기 버튼 */}
          <button
            className="image-lightbox-close"
            onClick={(event) => {
              event.stopPropagation()
              setIsImageOpen(false)
            }}
            aria-label="이미지 확대 닫기"
          >
            ×
          </button>

          {/* 확대 이미지 */}
          <div
            className="image-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="image-lightbox-label">
              {activeImageData.label}
            </span>

            <img
              src={getImagePath(activeImageData.src)}
              alt={activeImageData.label}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectModal