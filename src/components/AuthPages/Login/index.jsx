import React, { Component } from 'react';
import "./login.css";
import axios from 'axios';


export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            RegNo: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ Name: e.target.value });
        console.log("Name done");
    }

    onChangeUserEmail(e) {
        this.setState({ RegNo: e.target.value });
        console.log("Regno done");
    }

    
    onSubmit = (e) => {
        e.preventDefault()
        
        const userObject = {
            Name: this.state.Name,
            RegNo: this.state.RegNo
        };
       
        axios.post('http://localhost:4001/getLogin/create', userObject)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log("Help");
                console.log(error)
            });
        
        
        this.setState({ Name: '', RegNo: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.Name} onChange={this.onChangeUserName} name="Name"  />
                    </div>
                    <div className="form-group">
                        <label>Add User Email</label>
                        <input type="text" value={this.state.RegNo} onChange={this.onChangeUserEmail} name="RegNo"  />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}