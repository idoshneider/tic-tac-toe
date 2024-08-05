import logo from "../../../tictactoe.png";
import "../../components/App/App.css";
//message
import React from "react";
import Button from "../Button/Button";
function Home() {
  // let dispatch = useDispatch();
  // dispatch(SetSize(3));
  return (
    <div className="App">
      <p>Created By Ido</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          className={"startGameBtn"}
          text={"Start"}
          location={"/Game"}
        ></Button>
      </header>
    </div>
  );
}
export default Home;
