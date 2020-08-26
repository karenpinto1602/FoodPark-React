import React, { Component } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import Popup from "reactjs-popup";

const getUpper = () => {
  return (
    <div className="upper">
      <span className="left-side">From our Casa to Yours.</span>
      <span className="right-side">
        <span className="item-1">
          <a href="http://google.com" target="_blank">
            Track Order
          </a>
        </span>
        <span className="item-2">
          <a href="http://google.com" target="_blank">
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
          <a href="http://google.com" target="_blank">
            Login
          </a>
        </span>
        <span className="item-2">
          <a href="http://google.com" target="_blank">
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
