import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/components/App/App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import DrawXorO from './reducers/drowxoro';
import GameOverOrNot from './reducers/GameOverOrNot';
import WhoWon from './reducers/WhoWon';
import UpdateSize from './reducers/UpdateSize';
import UpdateHistory from './reducers/UpdateHistory';
import UpdateButtonArr from './reducers/UpdateButtonArr';
import UpdateNumSize from './reducers/UpdateNumSize';

const reducer = combineReducers({
  numsize: UpdateNumSize,
  buttonArr:UpdateButtonArr,
  history:UpdateHistory,
  size:UpdateSize,
  winner:WhoWon,
  gameOver: GameOverOrNot,
  symbol: DrawXorO
})
const store = createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default store;