import React, { Component } from "react";
import "./menu.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Details from "../details/course";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu-body">
        <Details/>
      </div>
    );
  }
}

export default Menu;
