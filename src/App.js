import React from 'react'
import {Link, Switch, Route} from "react-router-dom"

import Instructions from "./pages/Instructions"
import Contact from "./pages/Contact"
import Game from "./pages/Game"

function App() {

  return (
    <div>
      <div className="navbar">
        <Link to="/">Game</Link>
        <Link to="/Instructions">How to play</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div>
        <Switch>
            <Route exact path="/">
              <Game/>
            </Route>
            <Route path="/Instructions">
              <Instructions/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
