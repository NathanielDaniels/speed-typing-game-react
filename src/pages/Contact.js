import React from 'react'
import {Link} from "react-router-dom"

// import About from "./pages/About"
// import Contact from "./pages/Contact"

function Contact() {

  return (
    <>
      <div className="navbar">
        <Link to="/">Game</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <h1>Contact Page</h1>
        <p>Welcome to the About Page.</p>
      </div>
    </>
  );
}

export default Contact;