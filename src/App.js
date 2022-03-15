
import './App.css';
//check
import Game from './Game';
import Home from "./components/Home"
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Game'>
          <Game/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
