function ShoesVisual() {
  const navItems = ['SHOEROOM', 'BEST', 'NEW', '힐', '플랫', '워커', '부츠', '스니커즈', '오프라인 매장']
  const bestItems = Array.from({ length: 4 })
  const newItems = Array.from({ length: 4 })

  return (
    <div className="project-visual shoes-visual">
      <nav className="shoes-nav">
        {navItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>

      <div className="shoes-brand">SHOEROOM</div>

      <div className="shoes-hero">
        <div className="shoes-hero-image"></div>
      </div>

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
  )
}

export default ShoesVisual