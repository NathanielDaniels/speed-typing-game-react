import React from 'react'
// import useWordGame from "./hooks/useWordGame"
import {Link, Switch, Route} from "react-router-dom"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Game from "./pages/Game"

function App() {
  // const {text, handleChange ,timeRemaining, isTimeRunning, wordCount, textBoxRef, startGame} = useWordGame(10)

  return (
    <div>
      <div className="navbar">
        <Link to="/">Game</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div>
        <Switch>
            <Route exact path="/"><Game/></Route>
            <Route path="/About">
              <About/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
        </Switch>
      </div>

      {/* <div>
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
      </div> */}
    </div>
  );
}

export default App;
