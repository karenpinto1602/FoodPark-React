import React, { Component } from "react";
import "./navbar.css";

const getUpper = () => {
  return (
    <div className="upper">
      <span className="left-side">From our Casa to Yours.</span>
      <span className="right-side">
        <span className="item-1">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Track Order
          </a>
        </span>
        <span className="item-2">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </span>
      </span>
    </div>
  );
};
const getLower = () => {
  return (
    <div className="lower">
      <span className="left-side">
        <img src="./images/logo.jpg" alt="logo"></img>
        <b>Food Park</b>
      </span>
      <span className="right-side">
        <span className="item-1">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </span>
        <span className="item-2">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/bag.png" alt="bag"></img>
          </a>
        </span>
      </span>
    </div>
  );
};

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div>{getUpper()}</div>
        <div>{getLower()}</div>
      </div>
    );
  }
}

export default Navbar;
