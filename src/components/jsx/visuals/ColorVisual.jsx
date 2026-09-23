function ColorVisual() {
  return (
    <div className="project-visual color-visual">
      <div className="color-header">
        <strong>
          COLOR
          <br />
          ANALYSIS
        </strong>

        <span>PERSONAL COLOR</span>
      </div>

      <div className="color-upload">
        <div className="upload-photo">
          <div className="face-placeholder">
            <span></span>
          </div>
        </div>

        <div className="upload-info">
          <span>IMAGE ANALYSIS</span>
          <strong>SKIN TONE</strong>

          <div className="tone-value">
            <span></span>
            <strong>#C6A58F</strong>
          </div>

          <small>AVERAGE COLOR VALUE</small>
        </div>
      </div>

      <div className="color-result">
        <span>YOUR RESULT</span>

        <div className="result-main">
          <strong>WARM</strong>

          <div className="result-palette">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorVisual