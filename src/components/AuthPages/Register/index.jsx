/* import React, { Component } from 'react';
import "./register.css";

class register extends Component {
    state = {  }
    render() { 
        return (  
            <div className="login-body">
                Hello regsiter page
            </div>
        );
    }
}
 
export default register; */
import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import "./register.css";

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/getLogin')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
