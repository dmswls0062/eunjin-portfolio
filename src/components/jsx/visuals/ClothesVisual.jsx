function ClothesVisual() {
  return (
    <div className="project-visual clothes-visual">
      <div className="fashion-nav">
        <strong>FORM</strong>

        <div>
          <span>WOMEN</span>
          <span>MEN</span>
          <span>NEW</span>
          <span>SALE</span>
        </div>

        <span>♡</span>
      </div>

      <div className="fashion-copy">
        <span>NEW COLLECTION / 25</span>

        <strong>
          EVERYDAY
          <br />
          WEAR.
        </strong>

        <small>MINIMAL · SIMPLE · MODERN</small>
      </div>

      <div className="clothes-products">
        <div className="clothing-card">
          <div className="clothing-shape shirt">
            <span className="clothing-detail">FORM</span>
          </div>

          <span>SHIRT / 01</span>
        </div>

        <div className="clothing-card">
          <div className="clothing-shape jacket">
            <span className="clothing-detail">FORM</span>
          </div>

          <span>JACKET / 02</span>
        </div>

        <div className="clothing-card">
          <div className="clothing-shape pants">
            <span className="clothing-detail">FORM</span>
          </div>

          <span>PANTS / 03</span>
        </div>
      </div>

      <div className="fashion-number">01—03</div>
    </div>
  )
}

export default ClothesVisual