function ClothesVisual() {
  const categories = ['All', 'Outer', 'Tops', 'Dresses', 'Bottoms']
  const products = Array.from({ length: 8 })

  return (
    <div className="project-visual clothes-visual">
      <div className="clothes-topbar">
        <div className="clothes-topbar-left">
          <strong>T:unique</strong>

          <nav className="clothes-categories">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </nav>
        </div>

        <div className="clothes-topbar-icons">
          <span>⌕</span>
          <span>☺</span>
          <span>🛒</span>
        </div>
      </div>

      <div className="clothes-grid">
        {products.map((_, index) => (
          <div className="clothes-grid-item" key={index}>
            <div className="clothes-grid-thumb"></div>
            <span className="clothes-grid-label">
              ITEM {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClothesVisual