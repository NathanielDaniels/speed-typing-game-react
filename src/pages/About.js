import React from 'react'
// import {Link} from "react-router-dom"

// import About from "./pages/About"
// import Contact from "./pages/Contact"

function About() {

  return (
    <>
      {/* <div className="navbar">
        <Link to="/">Game</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div> */}
      <div className="about-section">
        <h1>About Speed Typing</h1>
        <div className="about-info">
          <p>This Speed Typing Game is a fun way to practice your typing skills.</p> 
          <p>Press the green "Start" button and type as many words as you can before the time is up. </p>
          <p>Try and beat your best score!</p>
        </div>
      </div>
    </>
  );
}

export default About;