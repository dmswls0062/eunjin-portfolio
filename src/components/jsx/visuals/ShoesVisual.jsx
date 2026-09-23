function ShoesVisual() {
  return (
    <div className="project-visual shoes-visual">
      <div className="shoe-nav">
        <strong>SOLE.</strong>

        <div>
          <span>RUNNING</span>
          <span>LIFESTYLE</span>
          <span>NEW</span>
        </div>

        <span>🛒</span>
      </div>

      <div className="shoe-copy">
        <span>NEW RELEASE / 2025</span>

        <strong>
          MOVE
          <br />
          FORWARD.
        </strong>

        <small>EVERYDAY SNEAKER / 01</small>
      </div>

      <div className="sneaker-display">
        <div className="sneaker-shadow"></div>

        <div className="sneaker">
          <div className="sneaker-upper">
            <span className="shoe-brand">SOLE.</span>
          </div>

          <div className="sneaker-sole"></div>

          <div className="sneaker-lace one"></div>
          <div className="sneaker-lace two"></div>
          <div className="sneaker-lace three"></div>

          <div className="sneaker-panel"></div>
        </div>

        <span className="shoe-price">₩129,000</span>
      </div>

      <div className="shoe-index">01 / 04</div>
    </div>
  )
}

export default ShoesVisual