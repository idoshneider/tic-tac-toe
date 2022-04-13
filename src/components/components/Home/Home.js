import logo from '../../../tictactoe.png';
import '../../components/App/App.css';
//message
import React from 'react';
import Button from '../Game/Utilities/Button/Button';
function Home() {
  return (
      <div className="App">
        <p>Created By Ido</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button clsName={'startGameBtn'}></Button>
        </header>
      </div>
  );
}
export default Home;