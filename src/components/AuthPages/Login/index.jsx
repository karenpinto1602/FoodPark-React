import React, { Component } from 'react';
import "./login.css";
import axios from 'axios';
import loginimg from "./loginim.png";
import { Link } from "react-router-dom";

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserRegNo = this.onChangeUserRegNo.bind(this);
        this.onChangeUserPassw = this.onChangeUserPassw.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            RegNo: '',
            Passw: ''
        }
    }

    onChangeUserRegNo(e) {
        this.setState({ RegNo: e.target.value });
    }

    onChangeUserPassw(e) {
        this.setState({ Passw: e.target.value });
    }

    
    onSubmit = (e) => {
        e.preventDefault()
        
        const userObject = {
            RegNo: this.state.RegNo,
            Passw: this.state.Passw
        };
       
        axios.post('http://localhost:4001/getLogin/create', userObject)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            });
        
        
        this.setState({ RegNo: '', Passw: '' })
        
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
                            
                            <p className="login-l2">The Daily Catch: Beyond Delicious!</p>
                            
                            <ul>
                                <li>Shakti</li>
                                <li>Darling</li>
                                <li>Neelkesh</li>
                            </ul>
                            <form onSubmit={this.onSubmit} className="login-form">
                                 <div className="login-form-group">
                                    <input type="text" value={this.state.RegNo} onChange={this.onChangeUserRegNo} name="RegNo" placeholder="Username" />
                                </div>
                                <div className="login-form-group">
                                    <input type="password" value={this.state.Passw} onChange={this.onChangeUserPassw} name="Passw" placeholder="Password" />
                                </div>
                                <div className="">
                                <Link to={"/home"}>
                                <input type="submit" value="Login" className="login-submit" />
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