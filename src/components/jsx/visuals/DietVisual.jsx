function DietVisual() {
  const navItems = ['Home', 'Shop', 'Best', '오늘의 특가', '나의 식단', 'Contact']
  const flavorBanners = Array.from({ length: 4 })

  return (
    <div className="project-visual diet-visual">
      <div className="diet-topbar">
        <span>dietfitdie@gmail.com</span>
        <span className="diet-topbar-links">Privacy Policy / Terms of Use / Sales and Refunds</span>
      </div>

      <div className="diet-nav">
        <strong className="diet-logo">Dietfit</strong>

        <nav className="diet-nav-menu">
          {navItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>

        <div className="diet-nav-icons">
          <span>⌕</span>
          <span>☺</span>
        </div>
      </div>

      <div className="diet-hero">
        <div className="diet-hero-text">
          <span className="diet-hero-label">DIETFIT</span>
          <h4>
            Healthy and Delicious
            <br />
            Diet Food
          </h4>
        </div>

        <div className="diet-hero-image">
          <span className="diet-hero-arrow left">‹</span>
          <span className="diet-hero-arrow right">›</span>
        </div>
      </div>

      <div className="diet-flavors">
        <span className="diet-flavors-title">⭐ Discover New Flavors ⭐</span>

        <div className="diet-flavors-row">
          {flavorBanners.map((_, index) => (
            <div className="diet-flavor-banner" key={index}></div>
          ))}
        </div>
      </div>

      <div className="diet-promo">
        <div className="diet-promo-text">
          <strong>
            나만의 식단
            <br />
            in Dietfit
          </strong>
          <span>맞춤형 식단을 알아보세요</span>
        </div>

        <span className="diet-promo-circle">free</span>
      </div>

      <div className="diet-footer">
        <div className="diet-footer-col">
          <strong>Dietfit</strong>
          <span>Shop Info</span>
        </div>

        <div className="diet-footer-col">
          <span>Account</span>
        </div>

        <div className="diet-footer-col">
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default DietVisual