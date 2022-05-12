import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/components/App/App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import DrawXorO from "./reducers/SymbolReducer/drowxoro";
import GameOverOrNot from "./reducers/ScoreBoardReducers/GameOverOrNot";
import WhoWon from "./reducers/ScoreBoardReducers/WhoWon";
import UpdateSize from "./reducers/UpdateSizeReducers/UpdateSize";
import UpdateHistory from "./reducers/UpdateHistory-BtnArr/UpdateHistory";
import UpdateButtonArr from "./reducers/UpdateHistory-BtnArr/UpdateButtonArr";
import UpdateNumSize from "./reducers/UpdateSizeReducers/UpdateNumSize";
import UpdateNameX from "./reducers/UpdateNames/UpdateNameX";
import UpdateNameO from "./reducers/UpdateNames/UpdareNameO";
const reducer = combineReducers({
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
