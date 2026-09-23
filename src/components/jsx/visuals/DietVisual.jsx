function DietVisual() {
  return (
    <div className="project-visual diet-visual">
      <div className="diet-nav">
        <strong>DIETFIT</strong>

        <div className="diet-nav-menu">
          <span>HOME</span>
          <span>SHOP</span>
          <span>오늘의 특가</span>
          <span>나의 식단</span>
          <span>CONTACT</span>
        </div>

        <div className="diet-nav-icons">
          <span>⌕</span>
          <span>♙</span>
        </div>
      </div>

      <div className="diet-copy">
        <span>HEALTHY FOOD STORE</span>

        <strong>
          DIET
          <br />
          FOOD
        </strong>

        <small>HEALTHY · SIMPLE · DELICIOUS</small>
      </div>

      <div className="diet-products">
        <div className="diet-product">
          <div className="food-shape chicken">
            <div className="chicken-bone"></div>
            <div className="chicken-meat"></div>
          </div>

          <p>CHICKEN</p>
        </div>

        <div className="diet-product">
          <div className="food-shape egg">
            <div className="egg-white"></div>
            <div className="egg-yolk"></div>
          </div>

          <p>EGG</p>
        </div>

        <div className="diet-product">
          <div className="food-shape drink">
            <div className="drink-lid"></div>
            <div className="drink-body">
              <span>FIT</span>
            </div>
          </div>

          <p>DRINK</p>
        </div>
      </div>

      <div className="diet-stamp">
        GOOD
        <br />
        FOR YOU
      </div>
    </div>
  )
}

export default DietVisual