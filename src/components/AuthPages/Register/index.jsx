import React, { Component } from 'react';
import "./register.css";
import axios from 'axios';
import loginimg from "./loginim.png";
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserRegNo = this.onChangeUserRegNo.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserKitchen = this.onChangeUserKitchen.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            RegNo: '',
            Kitchen: '',
            CreditBal: 5580
        }
    }

    onChangeUserRegNo(e) {
        this.setState({ RegNo: e.target.value });
    }

    onChangeUserName(e) {
        this.setState({ Name: e.target.value });
    }

    onChangeUserKitchen(e) {
        this.setState({ Kitchen: e.target.value });
    }
  
    onSubmit = (e) => {
        e.preventDefault()
        
        const userObject = {
            RegNo: this.state.RegNo,
            Name: this.state.Name,
            Kitchen: this.state.Kitchen,
            CreditBal: this.state.CreditBal
        };
       
        axios.post('http://localhost:4001/getFoodParkstudents/create', userObject)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            });
        
        
        this.setState({ RegNo: '', Name: '', Kitchen: '' })
    }


    render() {
        return (
            <div className="login-main-body">
                <div className="login-main-login">
                    <div className="login-main-grid">
                        <div className="login-sub-grid">
                            <img src={loginimg}></img>
                        </div>
                        <div className="login-sub-grid">
                            
                            <p className="login-l2">Register for FoodPark and Enjoy your Meal Everyday!</p>
                                                        
                            <form onSubmit={this.onSubmit} className="login-form">
                                 <div className="login-form-group">
                                    <input type="text" value={this.state.RegNo} onChange={this.onChangeUserRegNo} name="RegNo" placeholder="Registration Number" />
                                </div>
                                <div className="login-form-group">
                                    <input type="text" value={this.state.Name} onChange={this.onChangeUserName} name="Name" placeholder="Name" />
                                </div>
                                <div className="login-form-group2" onChange={this.onChangeUserKitchen}>
                                    {/* <input type="text" value={this.state.Kitchen} onChange={this.onChangeUserKitchen} name="Kitcehn" placeholder="Kitchen" /> */}
                                    <input type="radio" value="SHAKTI" name="Kitchen" /> Shakti <span></span><span></span>
                                    <input type="radio" value="DARLING" name="Kitchen" /> Darling <span></span><span></span>
                                    <input type="radio" value="NEELKESH" name="Kitchen" /> Neelkesh 
                                </div>
                                <div className="">
                                    <Link to={'/home'}>
                                    <input type="submit" value="Register" className="login-submit" />
                                    </Link>
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}