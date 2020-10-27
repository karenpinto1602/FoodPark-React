import React, { Component } from 'react';
import axios from "axios";

export default class Courses extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            buttonClicked: false
        };
        this.getCourses = this.getCourses.bind(this);
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/getDarlingFp')
        .then((res) =>{
         this.setState({
             data: res.data
            });
        });
    }
    getCourses() {
        if (!this.state.buttonClicked) {
          this.setState({
            buttonClicked: true
          });
        }
      }

    render(){
        return(            
            <div className="container-fluid" style={{marginTop: "30px"}}>
                <div className="row">
                    <div className="col-xs-12" style={{textAlign: "center"}}>
                        <button 
                        className="btn btn-primary" 
                        style={{position: "absolute", marginLeft: "50%"}}
                        onClick = {this.getCourses}>
                            Click
                        </button>

                        <div
                            className="container-fluid"
                            style={{
                                position: "absolute",
                                textAlign: "center",
                                marginTop: "50px"
                            }}
                        >
                            {this.state.buttonClicked
                                ? this.state.data.map(data => {
                            return (
                                <React.Fragment>
                                    <p>
                                        {" "}
                                        <b>Item Id</b> : {data.ItemId}
                                    </p>
                                    <p>
                                        <b>Item Name</b> : {data.ItemName}
                                    </p>
                                    <p>
                                        <b>Price</b> : {data.ItemPrice}
                                    </p>
                                    <hr />
                                </React.Fragment>
                            );
                            })
                            : null}
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}