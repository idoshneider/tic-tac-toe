import logo from '../tictactoe.png';
import '../App.css';
import React from 'react';
import {
  Link
} from "react-router-dom";
function Home() {
  return (
      <div className="App">
        <p>Created By Ido</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/Game">
            <button className='startGameBtn'>
              Start
            </button>
          </Link>
 
        </header>
      </div>
  );
}
export default Home;