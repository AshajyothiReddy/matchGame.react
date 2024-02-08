import './index.css'

const Scorecard = props => {
  const {score} = props

  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />
      <p className="your-score-heading">Your Score</p>
      <p>{score}</p>
      <button className="playagain-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="playagain-img"
          alt="reset"
        />
        Playagain
      </button>
    </div>
  )
}

export default Scorecard
