import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Room extends React.Component {
  state = {
    isList: true,
    temp: 72
  };
  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };
  turnOn = () => {
    this.setState({
      isLit: true
    });
  };
  turnOff = () => {
    this.setState({
      isLit: false
    });
  };
  raiseTemp = () => {
    this.setState({
      temp: this.state.temp + 1
    });
  };
  lowerTemp = () => {
    this.setState({
      temp: this.state.temp - 1
    });
  };
  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
        The room is {this.state.isLit ? "lit" : "dark"}
        <br />
        <button onClick={this.flipLight}>flip</button>
        <br />
        <button onClick={this.turnOn}>On</button>
        <br />
        <button onClick={this.turnOff}>Off</button>
        <br />
        The temperature is {this.state.temp}
        <br />
        <button onClick={this.raiseTemp}>Raise Temp</button>
        <br />
        <button onClick={this.lowerTemp}>Lower Temp</button>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
