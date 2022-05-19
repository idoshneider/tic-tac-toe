import React from "react";
import store from "../../../..";
import DecrementTimer from "../../../../redux/actions/timer/DecrementTimer";
import handleRandomClick from "../../Button/ClickHandlers/HandleRandomClick";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    store.dispatch(DecrementTimer())
    if(store.getState().timer === 0){
      handleRandomClick();
    }
  }
  render() {
    return (
      <>
        <div className="time">{this.state.time}</div>
        <div className="date">{this.state.date}</div>
      </>
    );
  }
}
