function ColorVisual() {
  const navItems = ['HOME', 'LOGIN', '회원가입', 'MY PAGE']

  const palettes = [
    {
      label: '봄 웜톤 (Yellow Base)',
      colors: ['#fff2b8', '#ffe600', '#f4906a', '#f2632b', '#e2231a'],
    },
    {
      label: '여름 쿨톤 (Blue & White Base)',
      colors: ['#fdf6b2', '#f0ede3', '#7dc8b6', '#1f9c7c', '#a9d9d0'],
    },
    {
      label: '가을 웜톤 (Golden Base)',
      colors: ['#f6dfa8', '#f7c815', '#e2861d', '#e0521f', '#d43a20'],
    },
    {
      label: '겨울 쿨톤 (Blue & Black Base)',
      colors: ['#ffffff', '#f4e400', '#1e7a56', '#63b6ab', '#1f7e8c'],
    },
  ]

  return (
    <div className="project-visual color-visual">
      <nav className="color-nav">
        {navItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>

      <div className="color-title">
        <h4>FIND OUT YOUR PERSONAL COLOR</h4>
        <span className="color-title-underline"></span>
      </div>

      <div className="color-palette-grid">
        {palettes.map((palette) => (
          <div className="color-palette-card" key={palette.label}>
            <span className="color-palette-label">{palette.label}</span>

            <div className="color-palette-dots">
              {palette.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-dot"
                  style={{ background: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="color-actions">
        <span className="color-action-btn">퍼스널 컬러 예측하기</span>
        <span className="color-action-btn">화장품 구매 사이트 연결</span>
      </div>
    </div>
  )
}

export default ColorVisual