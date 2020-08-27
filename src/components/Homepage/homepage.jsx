import React, { Component } from "react";
import "./homepage.css";

const getUpper = () => {
  return (
    <div className="home-upper">
      <div className="upper-grid">
        <div className="upper-grid-box">
          <div className="grid-box">
            <p>Register for Food Park and get monthly credits of 5560.</p>
            <button>
              <b>Register</b>
            </button>
            <p style={{ fontSize: "14px" }}>
              *Applicable to only VIT hostelers
            </p>
          </div>
          <div className="grid-box">
            <div className="grid-box-image">
              <button>
                <b>Login</b>
              </button>
            </div>
          </div>
          <div className="grid-box">
            <div className="last-box">
              <p>Caterers</p>
              <ul>
                <li>Shakti Mess</li>
                <li>Darling Mess</li>
                <li>Neelkesh Mess</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getMenu = (props) => {
  return (
    <div className="home-menu">
      <div className="menu-back">
        <div className="menu-grid">Checkout the FoodPark Menu for today!</div>
        <div className="menu-grid">
          <button className="menu-grid-button"> Menu </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

class Homepage extends Component {
  state = {
    menuOpen: false,
  };

  changeMenuOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div className="Main">
        <div className="home-upper">{getUpper()}</div>
        <div className="home-menu">{getMenu()}</div>
        <div className="home-specials"></div>
      </div>
    );
  }
}

export default Homepage;
