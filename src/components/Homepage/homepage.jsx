import React, { Component } from "react";
import "./homepage.css";

const getUpper = () => {
  return (
    <div className="home-upper">
      <div className="upper-grid">
        <div className="grid-box"></div>
        <div className="grid-box"></div>
      </div>
    </div>
  );
};

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="Main">
        <div className="home-upper">{getUpper()}</div>
        <div className="home-specials"></div>
      </div>
    );
  }
}

export default Homepage;
