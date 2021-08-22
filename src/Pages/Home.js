import React, { Component } from "react";
import Sunny from "../../src/icon_mostly_sunny.png";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Udupi,Karnataka</h2>
        <img src={Sunny} alt="Sunny" className="center" />
        <h2 className="temp">84</h2>
      </div>
    );
  }
}

export default Home;
