import React from 'react'
import useWordGame from "./hooks/useWordGame"
import {Link} from "react-router-dom"

function App() {
  const {text, handleChange ,timeRemaining, isTimeRunning, wordCount, textBoxRef, startGame} = useWordGame(10)

  return (
    <div>
      <div className="navbar">
        <Link>About</Link>
        <Link>Contact</Link>
      </div>
      <div>
        <h1>How fast do you type?</h1>
        <textarea
          type="text"
          ref={textBoxRef}
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
        />
        <h4>Time remaining: {timeRemaining}</h4>
        <button 
          onClick={() => startGame()}
          disabled={isTimeRunning}
          >Start
        </button>
        <h1>Word count: {wordCount}</h1>
      </div>
    </div>
  );
}

export default App;
