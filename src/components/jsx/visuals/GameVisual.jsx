function GameVisual() {
  return (
    <div className="project-visual game-visual">
      <div className="game-hud">
        <span>
          METEOR
          <br />
          DODGE
        </span>

        <div>
          <small>SCORE</small>
          <strong>01280</strong>
        </div>

        <div>
          <small>TIME</small>
          <strong>01:24</strong>
        </div>
      </div>

      <div className="game-stars">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <div className="meteor meteor-one">
        <span></span>
      </div>

      <div className="meteor meteor-two">
        <span></span>
      </div>

      <div className="meteor meteor-three">
        <span></span>
      </div>

      <div className="game-player">
        <span></span>
      </div>

      <div className="game-message">
        <span>AVOID THE METEORS</span>
      </div>
    </div>
  )
}

export default GameVisual