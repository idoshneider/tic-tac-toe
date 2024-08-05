import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/components/App/App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import DrawXorO from "./redux/reducers/SymbolReducer/drowxoro";
import GameOverOrNot from "./redux/reducers/ScoreBoardReducers/GameOverOrNot";
import WhoWon from "./redux/reducers/ScoreBoardReducers/WhoWon";
import UpdateSize from "./redux/reducers/UpdateSizeReducers/UpdateSize";
import UpdateHistory from "./redux/reducers/UpdateHistory-BtnArr/UpdateHistory";
import UpdateButtonArr from "./redux/reducers/UpdateHistory-BtnArr/UpdateButtonArr";
import UpdateNumSize from "./redux/reducers/UpdateSizeReducers/UpdateNumSize";
import UpdateNameX from "./redux/reducers/UpdateNames/UpdateNameX";
import UpdateNameO from "./redux/reducers/UpdateNames/UpdareNameO";
import UpdateXScore from "./redux/reducers/UpdateScores/UpdateXScore";
import UpdateOScore from "./redux/reducers/UpdateScores/UpdateOScore";
import UpdateTimer from "./redux/reducers/UpdateTimer/UpdateTimer";
const reducer = combineReducers({
  timer: UpdateTimer,
  oScore: UpdateOScore,
  xScore:UpdateXScore,
  nameO: UpdateNameO,
  nameX: UpdateNameX,
  numsize: UpdateNumSize,
  buttonArr: UpdateButtonArr,
  history: UpdateHistory,
  size: UpdateSize,
  winner: WhoWon,
  gameOver: GameOverOrNot,
  symbol: DrawXorO,
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default store;
