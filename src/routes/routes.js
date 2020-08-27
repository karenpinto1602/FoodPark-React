import React, { Component } from "react";
import Menu from "../components/Menu/menu";
import { Switch, Route } from "react-router-dom";
import Homepage from "../components/Homepage/homepage";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Homepage>
        <Switch>
          <Route path="/menu" exact component={Menu} />
        </Switch>
      </Homepage>
    );
  }
}

export default Routes;
