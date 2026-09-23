function ShoesVisual() {
  const navItems = ['카테고리', '베스트', '신상', '브랜드', '이벤트', '고객센터']
  const bestItems = Array.from({ length: 4 })
  const newItems = Array.from({ length: 8 })

  return (
    <div className="project-visual shoes-visual">
      <nav className="shoes-nav">
        {navItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>

      <div className="shoes-brand">SHOEROOM</div>

      <div className="shoes-hero">
        <span className="shoes-hero-arrow left">‹</span>
        <div className="shoes-hero-image"></div>
        <span className="shoes-hero-arrow right">›</span>
      </div>

      <div className="shoes-body">
        <div className="shoes-section">
          <span className="shoes-section-label">BEST</span>

          <div className="shoes-product-row">
            {bestItems.map((_, index) => (
              <div className="shoes-product-card" key={`best-${index}`}>
                <div className="shoes-product-thumb"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="shoes-section">
          <span className="shoes-section-label">NEW</span>

          <div className="shoes-product-row">
            {newItems.map((_, index) => (
              <div className="shoes-product-card" key={`new-${index}`}>
                <div className="shoes-product-thumb"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoesVisual