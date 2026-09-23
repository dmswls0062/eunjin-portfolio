function GameVisual() {
  const meteorClusters = [
    { top: '6%', left: '3%', scale: 1 },
    { top: '4%', left: '95%', scale: 0.8 },
    { top: '2%', left: '99%', scale: 0.6 },
    { top: '10%', left: '25%', scale: 0.7 },
    { top: '8%', left: '38%', scale: 0.6 },
    { top: '18%', left: '68%', scale: 0.75 },
    { top: '14%', left: '82%', scale: 0.9 },
    { top: '22%', left: '90%', scale: 0.7 },
    { top: '28%', left: '0%', scale: 0.7 },
    { top: '38%', left: '8%', scale: 1 },
    { top: '35%', left: '25%', scale: 0.7 },
    { top: '48%', left: '38%', scale: 0.7 },
    { top: '38%', left: '66%', scale: 0.7 },
    { top: '50%', left: '68%', scale: 0.7 },
    { top: '48%', left: '98%', scale: 0.6 },
  ]

  return (
    <div className="project-visual game-visual">
      <span className="game-score">score : 168</span>

      {meteorClusters.map((meteor, index) => (
        <div
          className="game-meteor-cluster"
          key={index}
          style={{
            top: meteor.top,
            left: meteor.left,
            transform: `scale(${meteor.scale})`,
          }}
        >
          <span className="game-rock"></span>
          <span className="game-rock"></span>
          <span className="game-rock"></span>
        </div>
      ))}

      <div className="game-ship">
        <span className="game-ship-cockpit"></span>
        <span className="game-ship-body"></span>
        <span className="game-ship-wing left"></span>
        <span className="game-ship-wing right"></span>
      </div>
    </div>
  )
}

export default GameVisual