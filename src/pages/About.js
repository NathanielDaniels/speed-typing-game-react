import React from 'react'
// import useWordGame from "./hooks/useWordGame"
import {Link} from "react-router-dom"

// import About from "./pages/About"
// import Contact from "./pages/Contact"

function About() {
  // const {text, handleChange ,timeRemaining, isTimeRunning, wordCount, textBoxRef, startGame} = useWordGame(10)

  return (
    <>
      <div className="navbar">
        <Link to="/">Game</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        
      </div>
      <div>
        <h1>About Page</h1>
      </div>
    </>
  );
}

export default About;