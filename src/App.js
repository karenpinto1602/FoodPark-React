import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./components/Homepage/homepage";
import Menu from "./components/Menu/menu";
import Login from "./components/AuthPages/Login/index.jsx";
import Register from "./components/AuthPages/Register/index";
import Cart from "./components/cart/index.jsx";

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
             <Route path="/" exact component={Login} />
              <Route path="/home" exact component={Homepage} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/register" exact component={Register} />
              <Route path="/user" component={User} />
              <Route path="/cart" component={Cart} />
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
