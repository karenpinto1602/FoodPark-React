import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
//import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./components/Homepage/homepage";
import Menu from "./components/Menu/menu";
import Login from "./components/AuthPages/Login/index.jsx";
import Register from "./components/AuthPages/Register/index"

import CreateUser from "./components/create-user.components";
import User from "./components/user.component";
class App extends Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <Navbar />
        </div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/create-user" component={CreateUser} />
              <Route path="/user" component={User} />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
