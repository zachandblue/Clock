import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      seconds: "",
      minutes: "",
      hours: ""
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate() {
    const now = new Date();
    const secHand = document.querySelector(".sec-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    const seconds = now.getSeconds();
    const secondsToDegrees = seconds * 6 + 90;
    secHand.style.transform = `rotate(${secondsToDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesToDegrees = minutes * 6 + 90;
    minHand.style.transform = `rotate(${minutesToDegrees}deg)`;

    let hours = now.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }
    const hoursToDegrees = hours * 30 + 90;
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

    if (seconds === 0) {
      secHand.style.transition = "none";
    } else {
      secHand.style.transition = "all 0.1s";
      secHand.style.transitionTimingFunction =
        "cubic-bezier(0.42, 0, 0.1, 2.3)";
    }
  }
  render() {
    setInterval(this.setDate, 1000);

    return (
      <div className="App">
        <div className="digital" />
        <div className="clock">
          <div className="clock-face">
            <div className="center" />
            <div className="marker noon" />
            <div className="marker three" />
            <div className="marker six" />
            <div className="marker nine" />
            <div className="hand hour-hand" />
            <div className="hand min-hand" />
            <div className="hand sec-hand" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
