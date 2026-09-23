function ClothesVisual() {
  const categories = ['All', 'Outer', 'Tops', 'Dresses', 'Bottoms']
  const topLinks = ['로그인', '회원가입', '고객센터']
  const products = Array.from({ length: 8 })

  return (
    <div className="project-visual clothes-visual">
      <div className="clothes-toplinks">
        {topLinks.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </div>

      <div className="clothes-topbar">
        <strong className="clothes-logo">T:Unique</strong>

        <nav className="clothes-categories">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </nav>

        <div className="clothes-topbar-icons">
          <span>⌕</span>
          <span>☺</span>
          <span>🛍</span>
        </div>
      </div>

      <div className="clothes-grid">
        {products.map((_, index) => (
          <div className="clothes-grid-item" key={index}>
            <div className="clothes-grid-thumb"></div>
            <span className="clothes-grid-title">상품명 {index + 1}</span>
            <span className="clothes-grid-price">
              {(30000 + index * 5000).toLocaleString()}원
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClothesVisual