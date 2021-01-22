import React from 'react'
import useWordGame from "../hooks/useWordGame"

function Game() {
  const {text, handleChange ,timeRemaining, isTimeRunning, textBoxRef, startGame, calculateWordCount} = useWordGame(10)
  return (
    <div className="game-section">
      <h1>How fast do you type?</h1>
      <textarea
        type="text"
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: <span>{timeRemaining}</span></h4>

      {
      //! Building input for user to choose time remaining
      /* <div className="timeRemaining">
        <h4>Time remaining:</h4>
        <input value={timeRemaining}></input>
      </div> */
      }
      
      <button 
        onClick={() => startGame()}
        disabled={isTimeRunning}
        >Start
      </button>
      <h1>Word count: <span>{calculateWordCount(text)}</span></h1>
    </div>
  );
}

export default Game;
