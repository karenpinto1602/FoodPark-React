import React, { Component } from "react";
import "./menu.css";

import menuleft from './menuleft.jpg';
import axios from "axios";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props){
    super(props)
    this.getKitchenS = this.getKitchenS.bind(this);
    this.getKitchenD = this.getKitchenD.bind(this);
    this.getKitchenN = this.getKitchenN.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.incvalue = this.incvalue.bind(this);
    this.decvalue = this.decvalue.bind(this);
    this.changeaddbtn = this.changeaddbtn.bind(this);
    this.state = {
      data: [],
      m: false,
      addcart: "Add to Cart",
      valuecount: 0,
      button0: false,
      buttonS: false,
      buttonD: false,
      buttonN: false,
      button1: true,
      button2: false,
      button3: false,
      button4: false
    }      
  }
  getKitchenS(){
    this.setState({
      buttonS: true,
      buttonD: false,
      buttonN: false,
      button0: true      
    })
    axios.get("http://localhost:4001/getShaktiFp")
    .then((res)=>{
      this.setState({
        data: res.data
      });
    })
  }
  getKitchenD(){
    this.setState({
      buttonD: true,
      buttonS: false,
      buttonN: false,
      button0: true,      
    })
    axios.get("http://localhost:4001/getDarlingFp")
    .then((res)=>{
      this.setState({
        data: res.data
      });
    })
  }
  getKitchenN(){
    this.setState({
      buttonN: true,
      buttonS: false,
      buttonD: false,
      button0: true,      
    })
    axios.get("http://localhost:4001/getNeelkeshFp")
    .then((res)=>{
      this.setState({
        data: res.data
      });
    })
  }
  handleClick1(){
    this.setState({
      button1: true,
      button2: false,
      button3: false,
      button4: false,      
    })    
  }
  handleClick2(){
    this.setState({
      button2: true,
      button1: false,
      button3: false,
      button4: false,
    })
  }
  handleClick3(){
    this.setState({
      button3: true,
      button1: false,
      button2: false,
      button4: false,
    })
  }    
  handleClick4(){
    this.setState({
      button4: true,
      button1: false,
      button2: false,
      button3: false,
    })
  }
  incvalue(){
    this.setState({
      valuecount: this.state.valuecount+1
    })
  }
  decvalue(){
    this.setState({
      valuecount: this.state.valuecount-1
    })
  }
  changeaddbtn(){
    this.setState({
      addcart: "Added"
    })
  }
  render() {
    return (
      <div className="menu-main">
        <div className="menu-body">
          <div className="menu-grid">
            
              <div className="menu-left-img">
                <img src={menuleft} alt=""></img>
              </div>
              <span></span>
              <div className="menu-select">
              <button onClick = {this.getKitchenS}>
                Shakti Kitchen
              </button>
              </div>
               <br></br>
               <div className="menu-select">
              <button onClick = {this.getKitchenD}n>
                Darling Kitchen
              </button>
              </div>
              <br></br>
              <div className="menu-select">
              <button onClick = {this.getKitchenN}>
                Neelkesh Kitchen
              </button>
            </div>
            
          </div>
          <div className="menu-grid">
            <div className="menu-right">
            <div className="menu-right-img">
              <div className="menu-right-btn">
                <button className={this.state.button1 ? "menu-buttonTrue": "menu-buttonFalse"} onClick={this.handleClick1}>Breakfast</button><br></br>
                <button className={this.state.button2 ? "menu-buttonTrue": "menu-buttonFalse"} onClick={this.handleClick2}>Lunch</button><br></br>
                <button className={this.state.button3 ? "menu-buttonTrue": "menu-buttonFalse"} onClick={this.handleClick3}>Snacks</button><br></br>
                <button className={this.state.button4 ? "menu-buttonTrue": "menu-buttonFalse"} onClick={this.handleClick4}>Dinner</button><br></br>
              </div>
            </div>
            <div className="menu-display">
              <p>Menu For Today!
              <div style={{textAlign: 'end', marginTop: '-50px', marginRight: "55px"}}>
                         <Link to={'/cart'}>
                         <button style={{
                                background: "#02bae9",
                                border: "none",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "22px"                                
                                }}
                                
                                >PROCEED TO CART</button></Link>
                            </div>
              </p>
              {this.state.button0
                                ?this.state.data.map(data => {
                                  if(this.state.button1)
                                   if(data.Meal[0]==1) {
                                    return (
                                      <div>
                                      <div className="menu-display-grid">
                                        <div className="menu-item-grid">
                                         <p className="menu-items">
                                            <b>Item Name</b> : {data.ItemName}
                                         </p>
                                         <p className="menu-items">
                                            <b>Price</b> : {data.ItemPrice}/-
                                         </p>
                                        </div>
                                        <div className="menu-item-grid">
                                          <p className="menu-button-add">
                                    <button onClick={this.changeaddbtn}>{this.state.addcart}</button>
                                          </p>
                                          <p className="menu-button-quantity">
                                    <button onClick={this.decvalue}>-</button>  {this.state.valuecount}  <button onClick={this.incvalue}>+</button>
                                          </p>                                              
                                        </div>                                           
                                      </div> 
                                      <hr />
                                      </div>                                                                          
                                    )}
                                  if(this.state.button2)
                                    if(data.Meal[1]==1) {
                                      return (
                                        <div>
                                        <div className="menu-display-grid">
                                          <div className="menu-item-grid">
                                           <p className="menu-items">
                                              <b>Item Name</b> : {data.ItemName}
                                           </p>
                                           <p className="menu-items">
                                              <b>Price</b> : {data.ItemPrice}/-
                                           </p>
                                          </div>
                                          <div className="menu-item-grid">
                                            <p className="menu-button-add">
                                      <button onClick={this.changeaddbtn}>{this.state.addcart}</button>
                                            </p>
                                            <p className="menu-button-quantity">
                                      <button onClick={this.decvalue}>-</button>  {this.state.valuecount}  <button onClick={this.incvalue}>+</button>
                                            </p>
                                                                                   
                                          </div>                                           
                                        </div> 
                                        <hr />
                                        </div>                                                                          
                                      )}
                                  if(this.state.button3)
                                     if(data.Meal[2]==1) {
                                      return (
                                        <div>
                                        <div className="menu-display-grid">
                                          <div className="menu-item-grid">
                                           <p className="menu-items">
                                              <b>Item Name</b> : {data.ItemName}
                                           </p>
                                           <p className="menu-items">
                                              <b>Price</b> : {data.ItemPrice}/-
                                           </p>
                                          </div>
                                          <div className="menu-item-grid">
                                            <p className="menu-button-add">
                                      <button onClick={this.changeaddbtn}>{this.state.addcart}</button>
                                            </p>
                                            <p className="menu-button-quantity">
                                      <button onClick={this.decvalue}>-</button>  {this.state.valuecount}  <button onClick={this.incvalue}>+</button>
                                            </p>                                              
                                          </div>                                           
                                        </div> 
                                        <hr />
                                        </div>                                                                          
                                      )}
                                  if(this.state.button4)
                                      if(data.Meal[3]==1) {
                                       return (
                                         <div>
                                         <div className="menu-display-grid">
                                           <div className="menu-item-grid">
                                            <p className="menu-items">
                                               <b>Item Name</b> : {data.ItemName}
                                            </p>
                                            <p className="menu-items">
                                               <b>Price</b> : {data.ItemPrice}/-
                                            </p>
                                           </div>
                                           <div className="menu-item-grid">
                                             <p className="menu-button-add">
                                       <button onClick={this.changeaddbtn}>{this.state.addcart}</button>
                                             </p>
                                             <p className="menu-button-quantity">
                                       <button onClick={this.decvalue}>-</button>  {this.state.valuecount}  <button onClick={this.incvalue}>+</button>
                                             </p>                                              
                                           </div>                                           
                                         </div> 
                                         <hr />
                                         </div>                                                                          
                                       )
                                      }                            
                                }                         
                              )
                              : null}
            </div>
            </div>
          </div>        
      </div>
      </div>
    );
  }
}

export default Menu;
